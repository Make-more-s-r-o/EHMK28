# 🌱 (Perma)kulturní Open Call 2026 — EHMK České Budějovice 2028

[![uzávěrka](https://img.shields.io/badge/uz%C3%A1v%C4%9Brka-10._7._2026-red?style=flat-square)](./ZAPIS-VYZVA.md)
[![stav](https://img.shields.io/badge/stav-p%C5%99%C3%ADprava_%C5%BE%C3%A1dosti-yellow?style=flat-square)](./UKOLY.md)
[![nástěnka](https://img.shields.io/badge/n%C3%A1st%C4%9Bnka-auto-blue?style=flat-square)](./tools/generate-dashboard.mjs)

Společná příprava grantové žádosti (**Dan + Ondřej**) přes tento GitHub repozitář, každý ve
svém Claude Code. Tahle stránka je **živá nástěnka** — sekce označené **⟳** se aktualizují
s gitem (generuje [`tools/generate-dashboard.mjs`](./tools/generate-dashboard.mjs)).

> [!IMPORTANT]
> **Uzávěrka: 10. 7. 2026, 23:59 CET.** Podání e-mailem (přepis draftů do XLSX). Kompletní
> podmínky a finanční rámec → [ZAPIS-VYZVA.md](./ZAPIS-VYZVA.md).

> [!CAUTION]
> **Rozpočtová čísla = NESCHVÁLENÝ DRAFT (k 22. 6. 2026).** Modely v `strategie/` a čísla
> pop-up FabLabu Dan zatím nepročetl/neschválil — **nepoužívat v žádosti bez schválení.**
> Předání práce → [HANDOFF.md](./HANDOFF.md).

> 🆕 **Začínáš poprvé (Ondřeji)?** Přečti [ONBOARDING.md](./ONBOARDING.md). Stačí 5 minut.

---

## 📊 Stav&nbsp;⟳
<!-- AUTO:dashboard:start -->
| ⏳ Do uzávěrky | 🧩 Otevřená rozhodnutí | ✅ Úkoly | 📅 Poslední schůzka |
|:-:|:-:|:-:|:-:|
| **18 dní** | **4** (1 blokuje 🔴) | 1 ✅ · 4 🟡 · 12 ⬜ · 1 🔴 | 2026-06-22 |
<!-- AUTO:dashboard:end -->

### 🔴 Co blokuje / čeká na rozhodnutí&nbsp;⟳
<!-- AUTO:rozhodnuti:start -->
> [!WARNING]
> **Zahraniční partner** — blokuje podání, řeš přednostně.

| Otázka | Stav | Pozn. |
|---|---|---|
| Velikost projektu (malý/velký) | 🟡 směřuje k DVOJÍMU podání | malý (Maker Faire ČB, MM hlavní) **+** velký (pop-up FabLab s JVTP); priorita velký |
| Žadatel (právnická osoba) | ❓ neurčen | u velkého projektu hlavní žadatel JVTP vs Make more **nerozhodnuto** (vyjasní schůzka s ředitelem JVTP) |
| Zahraniční partner | 🔴 nezajištěn | povinný + Letter of Intent. ⚠️ napojení na mezinárodní síť JVTP **NEstačí** — blocker trvá |
| Jihočeský partner | 🟢 JVTP | Jihočeský vědeckotechnologický park = jihočeský partner velkého projektu |
| Koncept / téma / žánr | 🟡 pop-up FabLab | zkušební provoz dílny (dopo třídy / odpo–večer veřejnost, repair); ref. HW Lab Praha |
<!-- AUTO:rozhodnuti:end -->

➡️ Zdroj a kontext rozhodnutí → [memory/PROJEKT-STAV.md](./memory/PROJEKT-STAV.md)

---

## 🧭 Navigace

| | Soubor / složka | K čemu |
|:-:|---|---|
| 📋 | [ZAPIS-VYZVA.md](./ZAPIS-VYZVA.md) | Jediný zdroj pravdy o výzvě — co, kdy, rozpočet, body |
| ✅ | [UKOLY.md](./UKOLY.md) | Backlog: vlastník · doporučený agent · termín · stav |
| 🧠 | [memory/PROJEKT-STAV.md](./memory/PROJEKT-STAV.md) | Živá paměť — rozhodnutí a stav projektu |
| 📝 | [zadost/](./zadost/) | Draft odpovědí formuláře (00–05 + [přílohy](./zadost/prilohy.md)) |
| 🎯 | [strategie/](./strategie/) | Malý vs velký · partneři · audit · one-pager JVTP · rozpočtové modely |
| 🗣️ | [schuzky/](./schuzky/) | Zápisy a přepisy schůzek |
| 📂 | [podklady/](./podklady/) | Originální PDF výzvy + XLSX formulář (jen číst) |
| 🤖 | [AGENTS.md](./AGENTS.md) · [.claude/agents/](./.claude/agents/) | Pravidla projektu + dva AI agenti |
| 👋 | [ONBOARDING.md](./ONBOARDING.md) | Návod pro Ondřeje (poprvé s Claude Code + git) |

---

## 📅 Schůzky a zápisy&nbsp;⟳
<!-- AUTO:schuzky:start -->
### 2026-06-22 · EHMK Open Call — strategie podání, One Pager pro JVTP, rozpočet, pop-up FabLab / Maker…
- **Účastníci:** Dan, Ondřej (Kašpárek)
- 📄 Zápis: [2026-06-22-ondra-zapis.md](./schuzky/2026-06-22-ondra-zapis.md)

<details><summary>Přepisy a porovnání (3)</summary>

- [lokální přepis (mlx-whisper)](./schuzky/2026-06-22-ondra-prepis-lokalni.md)
- [přepis Plaud AI](./schuzky/2026-06-22-ondra-prepis-plaud.md)
- [porovnání přepisů](./schuzky/2026-06-22-prepis-porovnani.md)
</details>
<!-- AUTO:schuzky:end -->

> Nová schůzka? Ulož zápis jako `schuzky/RRRR-MM-DD-tema-zapis.md` (viz
> [šablona](./schuzky/_SABLONA-zapis.md)) — na nástěnce se objeví sám.

---

## ✅ Úkoly&nbsp;⟳
<!-- AUTO:ukoly:start -->
| Sekce | ✅ | 🟡 | ⬜ | 🔴 |
|---|:-:|:-:|:-:|:-:|
| ⏰ JVTP / pop-up FabLab | 0 | 2 | 2 | 0 |
| 🔴 Nejdřív rozhodnout | 0 | 2 | 1 | 0 |
| 🤝 Partneři | 1 | 0 | 0 | 1 |
| ✍️ Obsah žádosti | 0 | 0 | 5 | 0 |
| 📎 Přílohy a podání | 0 | 0 | 4 | 0 |
| **Celkem** | **1** | **4** | **12** | **1** |

➡️ Detail, vlastníci a termíny → [UKOLY.md](./UKOLY.md)
<!-- AUTO:ukoly:end -->

---

## 🕓 Poslední aktivita&nbsp;⟳
<!-- AUTO:aktivita:start -->
- `f31edca` 2026-06-22 — Add auto-updating dashboard to README
- `9a7a5d1` 2026-06-22 — Add 2026-06-22 meeting notes + FabLab/JVTP budget modeling
- `e2e7c94` 2026-06-22 — Update project state memory: end-of-session status and next steps
- `51ded01` 2026-06-22 — Add compliance audit report and apply its findings
- `2c9b2fa` 2026-06-22 — Set up grant workspace for (Perma)kulturni Open Call 2026
<!-- AUTO:aktivita:end -->

---

## 🤝 Agenti & pravidla

<details><summary>⚡ Rychlý start (3 věty pro Claude Code)</summary>

1. **Naklonuj repo:** *„Naklonuj `git@github.com:Make-more-s-r-o/EHMK28.git` do složky na disku
   a přečti AGENTS.md."* (Když SSH nejede: `https://github.com/Make-more-s-r-o/EHMK28.git`.)
2. **Před prací:** *„stáhni nejnovější verzi."*
3. **Po práci:** *„nahraj moje změny."*

Claude se o git (pull/commit/push) postará sám.
</details>

- **grantovy-specialista** — píše a ladí žádost na maximum bodů, hlídá rozpočet a pravidla výzvy.
- **vedouci-projektu** — harmonogram, milníky, partneři, rozdělení práce, rizika.

Claude ti je sám nabídne, když se hodí. Vyžádat: *„zapoj grantového specialistu na rozpočet."*

> [!NOTE]
> Obsah mezi značkami `<!-- AUTO:* -->` generuje [`tools/generate-dashboard.mjs`](./tools/generate-dashboard.mjs)
> ze zdrojů [`UKOLY.md`](./UKOLY.md), [`memory/PROJEKT-STAV.md`](./memory/PROJEKT-STAV.md) a
> [`schuzky/`](./schuzky/) — **needituj ho ručně**. Ostatní text uprav klidně přímo.

<!-- AUTO:generated:start -->
<sub>⟳ Nástěnka naposledy přegenerována 2026-06-22 · generuje <code>tools/generate-dashboard.mjs</code></sub>
<!-- AUTO:generated:end -->
