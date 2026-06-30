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
| **10 dní** | **2** | 4 ✅ · 4 🟡 · 13 ⬜ · 2 🔴 | 2026-06-30 |
<!-- AUTO:dashboard:end -->

### 🔴 Co blokuje / čeká na rozhodnutí&nbsp;⟳
<!-- AUTO:rozhodnuti:start -->
| Otázka | Stav | Pozn. |
|---|---|---|
| Velikost projektu | ✅ **VELKÝ** | grant max 4 mil. Kč, celkový rozpočet 8 mil., spolufinancování 50 % |
| Hlavní žadatel | ✅ **JVTP** | potvrzeno Petrem Pežinkou (24. 6.) — MM je realizační partner, fakturace OK |
| MM v JčK | ✅ splněno | pobočka Make More v ČB zapsána v rejstříku 23. 6. |
| Jihočeský partner | ✅ **JVTP** | Jana Moravcová; ředitel potvrdil ochotu |
| Zahraniční partner | 🟡 **kontakty navázány** | Grand Garage Linz + Kunstuniversität Linz (možné LoI, schůzky 2027). Ars Electronica se neoslovuje. Termín LoI 5. 7. |
| Koncept | ✅ **pop-up Makerspace + Design lab** | MM = provoz + školy + komunita; JVTP = výstava + design sprint se startupy |
| Kofinancování | ✅ **OK** | osobní náklady z jiných projektů lze použít — nesmí být vykázány 2× zároveň (MK ČR hlídá) |
| Programová koordinace | 🟡 | sync s EHMK školy (Kreativní mysl 0–6, ZŠ/SŠ); Ostrov kultury = výstupy do veřejného prostoru |
<!-- AUTO:rozhodnuti:end -->

➡️ Zdroj a kontext rozhodnutí → [memory/PROJEKT-STAV.md](./memory/PROJEKT-STAV.md)

---

## 🧑‍🤝‍🧑 Tým&nbsp;⟳
<!-- AUTO:tym:start -->
| | Člověk | Přístup | Commitů | Poslední | Dělá teď (🟡) |
|:-:|---|:-:|:-:|:-:|---|
| ![](https://github.com/makerfaireczech.png?size=32) | **Dan Jirotka**<br><sub><a href="https://github.com/makerfaireczech">@makerfaireczech</a></sub> | 🔑 Admin | 15 | 2026-06-30 | V5 Registrační formulář |
| ![](https://github.com/ondrej-kasparek-mm.png?size=32) | **Ondřej Kašpárek**<br><sub><a href="https://github.com/ondrej-kasparek-mm">@ondrej-kasparek-mm</a></sub> | ✍️ Write | 7 | 2026-06-30 | V3 Zahraniční partner… · V5 Registrační formulář · P1 Grand Garage Linz · P3 Kunstuniversität Linz |
| ![](https://github.com/stratilabs.png?size=32) | <a href="https://github.com/stratilabs">@stratilabs</a> | 👁️ Read | — | — | — |
<!-- AUTO:tym:end -->

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
### 2026-06-30 · EHMK 2028 — rozpočet a aktivity makerspace („Popovův Blob"), prostor, zahraniční…
- **Účastníci:** Dan, Ondřej, zástupkyně partnerské organizace (Design Lab) + krátce kolegyně Lucie
- 📄 Zápis: [2026-06-30-makerspace-rozpocet-zapis.md](./schuzky/2026-06-30-makerspace-rozpocet-zapis.md)

<details><summary>Přepisy a porovnání (1)</summary>

- [přepis Plaud AI](./schuzky/2026-06-30-makerspace-rozpocet-prepis-plaud.md)
</details>

### 2026-06-24 · EHMK 2028 — partnerství (JVTP), rozpočet, žádost a kurátorský obsah výstavy
- **Účastníci:** Dan, Ondřej, Jana (JVTP)
- 📄 Zápis: [2026-06-24-jvtp-zapis.md](./schuzky/2026-06-24-jvtp-zapis.md)

<details><summary>Přepisy a porovnání (1)</summary>

- [přepis Plaud AI](./schuzky/2026-06-24-jvtp-prepis-plaud.md)
</details>

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
| 🔴 Urgentní | 3 | 2 | 3 | 1 |
| 🤝 Partneři | 1 | 2 | 1 | 1 |
| ✍️ Obsah žádosti | 0 | 0 | 5 | 0 |
| 📎 Přílohy a podání | 0 | 0 | 4 | 0 |
| **Celkem** | **4** | **4** | **13** | **2** |

➡️ Detail, vlastníci a termíny → [UKOLY.md](./UKOLY.md)
<!-- AUTO:ukoly:end -->

---

## 🕓 Poslední aktivita&nbsp;⟳
<!-- AUTO:aktivita:start -->
- `e9530a3` 2026-06-30 · Dan Jirotka — Add 2026-06-30 meeting: makerspace budget & activities (Plaud transcript + zápis)
- `3d2b06a` 2026-06-30 · Ondřej Kašpárek — Align 2028 MM activities with Dan's SKOLNI ROK budget model (3M cash)
- `da53296` 2026-06-29 · Dan Jirotka — Budget: detailed 2027-2028 ledger + notify Ondra via HANDOFF
- `172c808` 2026-06-29 · Ondřej Kašpárek — Refine MM activities: community program, 2-wave campaign, platform model
- `da6ed63` 2026-06-29 · Dan Jirotka — Governance: all finance numbers owned by Dan only
- `2085078` 2026-06-29 · Dan Jirotka — Add Dan's bottom-up 2028 budget ledger (daily school program)
- `a5132d7` 2026-06-29 · Ondřej Kašpárek — Record Petr Pezinka call outcomes: JVTP as lead applicant, cofinancing OK
- `712d791` 2026-06-29 · Ondřej Kašpárek — Add MM activities and budget outline for Jana meeting (2026-06-30)
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
<sub>⟳ Nástěnka naposledy přegenerována 2026-06-30 · generuje <code>tools/generate-dashboard.mjs</code></sub>
<!-- AUTO:generated:end -->
