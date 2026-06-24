#!/usr/bin/env node
// Generátor nástěnky README.md.
// Čte zdroje v repu (UKOLY.md, memory/PROJEKT-STAV.md, schuzky/, git log) a přepisuje
// POUZE obsah mezi značkami <!-- AUTO:<klíč>:start --> a <!-- AUTO:<klíč>:end -->.
// Ruční text mimo značky se nikdy nedotkne. Idempotentní: když se nic nezmění, nezapisuje.
// Bez závislostí — jen vestavěné moduly Node (běží na Node 18+).
//
// Spuštění z kořene repa:  node tools/generate-dashboard.mjs

import { readFileSync, writeFileSync, readdirSync, existsSync } from 'node:fs';
import { execFileSync } from 'node:child_process';
import { resolve, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const README = resolve(ROOT, 'README.md');
const UZAVERKA = [2026, 6, 10]; // den uzávěrky 10. 7. 2026 (měsíc 0-based: 6 = červenec)
const N_COMMITS = 8;
const DEN = 86400000;

// Tým = lidé s přístupem do repa. Zdroj pravdy pro jména/role; aktualizuj při změně
// collaborators na GitHubu. `match` napojuje git autory a vlastníky úkolů (null = jen přístup).
const TEAM = [
  { name: 'Dan Jirotka',     login: 'makerfaireczech',    role: 'Admin', match: /dan/i },
  { name: 'Ondřej Kašpárek', login: 'ondrej-kasparek-mm', role: 'Write', match: /ond[rř]ej|ondra|ka[šs]par/i },
  { name: '',                login: 'stratilabs',         role: 'Read',  match: null },
];
const ROLE_CHIP = { Admin: '🔑 Admin', Write: '✍️ Write', Read: '👁️ Read' };

const read = (p) => (existsSync(p) ? readFileSync(p, 'utf8') : '');

// --- pomocné formátování ---------------------------------------------------

// české skloňování: 1 den · 2–4 dny · 5+ dní
function dni(n) {
  if (n === 1) return '1 den';
  if (n >= 2 && n <= 4) return `${n} dny`;
  return `${n} dní`;
}

function daysLeft() {
  // celé kalendářní dny mezi dneškem a dnem uzávěrky (počítáno z půlnoci, ne z času 23:59)
  const n = new Date();
  const dnes = new Date(n.getFullYear(), n.getMonth(), n.getDate());
  const cil = new Date(...UZAVERKA);
  const d = Math.round((cil - dnes) / DEN);
  if (d > 1) return `**${dni(d)}**`;
  if (d === 1) return '**zítra**';
  if (d === 0) return '**dnes!**';
  return `**po uzávěrce** (${dni(Math.abs(d))})`;
}

function today() {
  const n = new Date();
  const z = (x) => String(x).padStart(2, '0');
  return `${n.getFullYear()}-${z(n.getMonth() + 1)}-${z(n.getDate())}`;
}

// Zařadí buňku stavu do jednoho ze čtyř kýblů legendy UKOLY.md.
// 🟢 (mimo legendu, používá se pro „zajištěno") počítáme jako ✅ hotovo.
// Priorita při víc značkách: blokuje > dělá se > hotovo > čeká.
function bucketOf(cell) {
  if (cell.includes('🔴')) return '🔴';
  if (cell.includes('🟡')) return '🟡';
  if (cell.includes('✅') || cell.includes('🟢')) return '✅';
  if (cell.includes('⬜')) return '⬜';
  return null;
}

const isResolved = (stav) => stav.includes('🟢') || stav.includes('✅');
const isBlocker = (stav) => stav.includes('🔴');

// Ořízne dlouhý nadpis (téma schůzky) na rozumnou délku.
function cap(s, n = 90) {
  if (s.length <= n) return s;
  let t = s.slice(0, n);
  const sp = t.lastIndexOf(' ');
  if (sp > n * 0.6) t = t.slice(0, sp); // ořízni na hranici slova, ne uprostřed
  return t.replace(/[\s,;.–—/-]+$/, '') + '…';
}

// --- parsery zdrojů --------------------------------------------------------

// UKOLY.md: pro každou sekci `## …` spočítej stavy úkolů. Stav = POSLEDNÍ buňka
// řádku úkolu `| <id> | … | <stav> |`. Nepočítá se globální výskyt emoji
// (legenda na začátku souboru obsahuje všechny čtyři → zkreslila by součet).
function parseTasks() {
  const lines = read(resolve(ROOT, 'UKOLY.md')).split('\n');
  const sections = [];
  let cur = null;
  for (const ln of lines) {
    const h = ln.match(/^##\s+(.+?)\s*$/);
    if (h) {
      cur = { name: cleanSectionName(h[1]), c: { '✅': 0, '🟡': 0, '⬜': 0, '🔴': 0 } };
      sections.push(cur);
      continue;
    }
    // řádek úkolu: první buňka je id (číslo nebo písmeno A/B/…), poslední buňka je stav
    const m = ln.match(/^\|\s*([0-9A-Za-z]+)\s*\|.*\|([^|]*)\|\s*$/);
    if (m && cur) {
      const b = bucketOf(m[2]);
      if (b) cur.c[b]++;
    }
  }
  return sections.filter((s) => Object.values(s.c).some((n) => n > 0));
}

// Z nadpisu sekce vyřízne jen jádro (před „ — " nebo " ("). Hyphen uvnitř slov
// (pop-up) zachová — dělí se jen mezerou ohraničenou pomlčkou/závorkou.
function cleanSectionName(s) {
  return s.split(' — ')[0].split(' (')[0].trim();
}

// memory/PROJEKT-STAV.md: řádky tabulky v sekci „Rozhodnutí …".
function parseDecisions() {
  const lines = read(resolve(ROOT, 'memory/PROJEKT-STAV.md')).split('\n');
  const rows = [];
  let inTable = false;
  for (const ln of lines) {
    if (/^##\s/.test(ln)) { inTable = /Rozhodnut/i.test(ln); continue; }
    if (!inTable || !ln.trim().startsWith('|')) continue;
    if (/^\s*\|\s*-+/.test(ln)) continue; // oddělovač |---|
    const cells = ln.split('|').slice(1, -1).map((c) => c.trim());
    if (cells.length < 3 || /^Ot[áa]zka$/i.test(cells[0])) continue; // hlavička
    rows.push({ q: cells[0], stav: cells[1], pozn: cells[2] });
  }
  return rows;
}

// schuzky/: seskup soubory podle datového prefixu RRRR-MM-DD. Primární = *-zapis.md,
// ostatní soubory téhož data = přepisy. Soubory bez datového prefixu (šablona) se ignorují.
function parseMeetings() {
  const dir = resolve(ROOT, 'schuzky');
  if (!existsSync(dir)) return [];
  const byDate = new Map();
  for (const f of readdirSync(dir)) {
    const m = f.match(/^(\d{4}-\d{2}-\d{2})-(.+)\.md$/);
    if (!m) continue;
    const date = m[1];
    if (!byDate.has(date)) byDate.set(date, { date, primary: null, siblings: [] });
    const g = byDate.get(date);
    if (f.endsWith('-zapis.md')) g.primary = f;
    else g.siblings.push(f);
  }
  const out = [...byDate.values()].sort((a, b) => b.date.localeCompare(a.date));
  for (const g of out) g.meta = g.primary ? readMeta(resolve(dir, g.primary)) : null;
  return out;
}

function readMeta(p) {
  const t = read(p);
  const grab = (label) => {
    const m = t.match(new RegExp(`^- \\*\\*${label}:\\*\\*\\s*(.+?)\\s*$`, 'm'));
    return m ? m[1].trim() : '';
  };
  return { tema: grab('Téma'), ucastnici: grab('Účastníci'), datum: grab('Datum') };
}

function siblingLabel(f) {
  if (f.includes('prepis-lokalni')) return 'lokální přepis (mlx-whisper)';
  if (f.includes('prepis-plaud')) return 'přepis Plaud AI';
  if (f.includes('porovnani')) return 'porovnání přepisů';
  if (f.includes('prepis')) return 'přepis';
  return f.replace(/\.md$/, '');
}

// --- stavba bloků ----------------------------------------------------------

function buildDashboard() {
  const decisions = parseDecisions();
  const open = decisions.filter((r) => !isResolved(r.stav)).length;
  const blockers = decisions.filter((r) => isBlocker(r.stav)).length;
  const tot = { '✅': 0, '🟡': 0, '⬜': 0, '🔴': 0 };
  for (const s of parseTasks()) for (const k of Object.keys(tot)) tot[k] += s.c[k];
  const ms = parseMeetings();
  const last = ms.length ? ms[0].date : '—';
  return [
    '| ⏳ Do uzávěrky | 🧩 Otevřená rozhodnutí | ✅ Úkoly | 📅 Poslední schůzka |',
    '|:-:|:-:|:-:|:-:|',
    `| ${daysLeft()} | **${open}**${blockers ? ` (${blockers} blokuje 🔴)` : ''} | ${tot['✅']} ✅ · ${tot['🟡']} 🟡 · ${tot['⬜']} ⬜ · ${tot['🔴']} 🔴 | ${last} |`,
  ].join('\n');
}

function buildDecisions() {
  const rows = parseDecisions();
  if (!rows.length) return '_Žádná otevřená rozhodnutí._';
  const out = [];
  const blockers = rows.filter((r) => isBlocker(r.stav));
  if (blockers.length) {
    out.push('> [!WARNING]');
    out.push(`> **${blockers.map((b) => b.q).join(', ')}** — blokuje podání, řeš přednostně.`, '');
  }
  out.push('| Otázka | Stav | Pozn. |', '|---|---|---|');
  for (const r of rows) out.push(`| ${r.q} | ${r.stav} | ${r.pozn} |`);
  return out.join('\n');
}

function buildMeetings() {
  const ms = parseMeetings();
  if (!ms.length) return '_Zatím žádné schůzky._';
  return ms
    .map((g) => {
      const temaRaw = g.meta?.tema || '';
      const tema = temaRaw ? cap(temaRaw.split(';')[0].trim()) : '';
      const out = [tema ? `### ${g.date} · ${tema}` : `### ${g.date}`];
      if (g.meta?.ucastnici) out.push(`- **Účastníci:** ${g.meta.ucastnici}`);
      if (g.primary) out.push(`- 📄 Zápis: [${g.primary}](./schuzky/${g.primary})`);
      if (g.siblings.length) {
        out.push('', `<details><summary>Přepisy a porovnání (${g.siblings.length})</summary>`, '');
        for (const s of g.siblings.sort()) out.push(`- [${siblingLabel(s)}](./schuzky/${s})`);
        out.push('</details>');
      }
      return out.join('\n');
    })
    .join('\n\n');
}

function buildTasks() {
  const secs = parseTasks();
  if (!secs.length) return '_Zatím žádné úkoly._';
  const tot = { '✅': 0, '🟡': 0, '⬜': 0, '🔴': 0 };
  const rows = secs.map((s) => {
    for (const k of Object.keys(tot)) tot[k] += s.c[k];
    return `| ${s.name} | ${s.c['✅']} | ${s.c['🟡']} | ${s.c['⬜']} | ${s.c['🔴']} |`;
  });
  return [
    '| Sekce | ✅ | 🟡 | ⬜ | 🔴 |',
    '|---|:-:|:-:|:-:|:-:|',
    ...rows,
    `| **Celkem** | **${tot['✅']}** | **${tot['🟡']}** | **${tot['⬜']}** | **${tot['🔴']}** |`,
    '',
    '➡️ Detail, vlastníci a termíny → [UKOLY.md](./UKOLY.md)',
  ].join('\n');
}

// --- tým & aktivita (git + UKOLY) ---

// commity a poslední datum per git autor (z git log; NE `git shortlog` — bez argumentu čte stdin)
function gitAuthors() {
  try {
    const out = execFileSync('git', ['log', '--date=format:%Y-%m-%d', '--pretty=format:%an%x09%ad'], { cwd: ROOT, encoding: 'utf8' });
    const m = new Map();
    for (const ln of out.split('\n').filter(Boolean)) {
      const [name, date] = ln.split('\t');
      if (!m.has(name)) m.set(name, { commits: 0, last: date }); // první výskyt = nejnovější
      m.get(name).commits++;
    }
    return m;
  } catch {
    return new Map();
  }
}

// git jméno → jméno z TEAM (jinak ponech původní)
function person(name) {
  return TEAM.find((p) => p.match && p.match.test(name))?.name || name;
}

// řádky úkolů z UKOLY.md: { id, title, owner, status } (owner = buňka Vlastník, status = poslední)
function parseTaskRows() {
  const rows = [];
  for (const ln of read(resolve(ROOT, 'UKOLY.md')).split('\n')) {
    if (!ln.trim().startsWith('|')) continue;
    const cells = ln.split('|').slice(1, -1).map((c) => c.trim());
    if (cells.length < 3 || !/^[0-9A-Za-z]+$/.test(cells[0])) continue; // přeskoč hlavičku/oddělovač
    rows.push({
      id: cells[0],
      title: (cells[1].match(/\*\*(.+?)\*\*/)?.[1] || cells[1]).trim(),
      owner: cells[2] || '',
      status: cells[cells.length - 1] || '',
    });
  }
  return rows;
}

// Notion-like tabulka týmu: avatar · jméno/login · role · commity · poslední · rozpracované 🟡
function buildTeam() {
  const authors = gitAuthors();
  const tasks = parseTaskRows();
  const used = new Set();
  const out = [
    '| | Člověk | Přístup | Commitů | Poslední | Dělá teď (🟡) |',
    '|:-:|---|:-:|:-:|:-:|---|',
  ];
  for (const p of TEAM) {
    let commits = 0, last = '';
    for (const [name, st] of authors) {
      if (p.match && p.match.test(name)) {
        commits += st.commits;
        if (st.last > last) last = st.last;
        used.add(name);
      }
    }
    const doing = p.match
      ? tasks.filter((t) => t.status.includes('🟡') && p.match.test(t.owner)).map((t) => `${t.id} ${cap(t.title, 22)}`)
      : [];
    const avatar = `![](https://github.com/${p.login}.png?size=32)`;
    const handle = `<a href="https://github.com/${p.login}">@${p.login}</a>`;
    const who = p.name ? `**${p.name}**<br><sub>${handle}</sub>` : handle;
    out.push(`| ${avatar} | ${who} | ${ROLE_CHIP[p.role] || p.role} | ${commits || '—'} | ${last || '—'} | ${doing.join(' · ') || '—'} |`);
  }
  for (const [name, st] of authors) {
    // git autoři mimo TEAM (budoucí přispěvatelé) — neztratit je
    if (!used.has(name)) out.push(`| | ${name} | — | ${st.commits} | ${st.last} | — |`);
  }
  return out.join('\n');
}

function buildActivity() {
  try {
    const out = execFileSync(
      'git',
      ['log', `-n${N_COMMITS}`, '--date=format:%Y-%m-%d', '--pretty=format:%h%x09%ad%x09%an%x09%s'],
      { cwd: ROOT, encoding: 'utf8' }
    );
    const lines = out
      .split('\n')
      .filter(Boolean)
      .map((l) => {
        const [h, d, an, ...rest] = l.split('\t');
        return `- \`${h}\` ${d} · ${person(an)} — ${rest.join('\t')}`;
      });
    return lines.length ? lines.join('\n') : '_Žádná aktivita._';
  } catch {
    return '_(historie není dostupná — spuštěno mimo git)_';
  }
}

function buildFooter() {
  return `<sub>⟳ Nástěnka naposledy přegenerována ${today()} · generuje <code>tools/generate-dashboard.mjs</code></sub>`;
}

// --- zápis -----------------------------------------------------------------

function replaceBlock(src, key, body) {
  const re = new RegExp(`(<!-- AUTO:${key}:start -->)[\\s\\S]*?(<!-- AUTO:${key}:end -->)`);
  if (!re.test(src)) {
    console.warn(`⚠︎ marker AUTO:${key} v README nenalezen — blok přeskočen`);
    return src;
  }
  return src.replace(re, `$1\n${body.trim()}\n$2`);
}

const src = read(README);
if (!src) {
  console.error('Chyba: README.md nenalezen v kořeni repa.');
  process.exit(1);
}

// Režim --check (pro CI): jen ověří, že DATOVÉ bloky odpovídají zdrojům, NIC nezapisuje.
// Vynechává bloky závislé na čase/historii (odpočet, aktivita, patička) — ty se přirozeně
// liší mezi okamžikem commitu a během CI, takže nemá smysl je porovnávat.
if (process.argv.includes('--check')) {
  const checkBlocks = { rozhodnuti: buildDecisions, schuzky: buildMeetings, ukoly: buildTasks };
  const stale = [];
  for (const [key, build] of Object.entries(checkBlocks)) {
    const m = src.match(new RegExp(`<!-- AUTO:${key}:start -->\\n([\\s\\S]*?)\\n<!-- AUTO:${key}:end -->`));
    const current = m ? m[1].trim() : null;
    if (current !== build().trim()) stale.push(key);
  }
  if (stale.length) {
    console.error(`::error::Nástěnka README není aktuální (bloky: ${stale.join(', ')}).`);
    console.error('Spusť `node tools/generate-dashboard.mjs`, commitni README a pushni znovu.');
    process.exit(1);
  }
  console.log('Nástěnka je aktuální — datové bloky odpovídají zdrojům.');
  process.exit(0);
}

let out = src;
out = replaceBlock(out, 'dashboard', buildDashboard());
out = replaceBlock(out, 'rozhodnuti', buildDecisions());
out = replaceBlock(out, 'schuzky', buildMeetings());
out = replaceBlock(out, 'ukoly', buildTasks());
out = replaceBlock(out, 'tym', buildTeam());
out = replaceBlock(out, 'aktivita', buildActivity());
out = replaceBlock(out, 'generated', buildFooter());

if (out !== src) {
  writeFileSync(README, out);
  console.log('README aktualizováno.');
} else {
  console.log('Beze změny.');
}
