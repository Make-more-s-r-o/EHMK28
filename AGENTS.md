# AGENTS.md — instrukce pro Claude Code (čti na začátku každé práce)

Tento repozitář je společná příprava grantové žádosti do **(Perma)kulturního Open Callu
2026** (Evropské hlavní město kultury České Budějovice 2028). Pracují na něm **Dan** a
**Ondřej** společně přes GitHub. Tento soubor je závazný pro Claude Code u obou.

## ⏰ Tvrdá fakta (drž je v hlavě)
- **Uzávěrka: 10. 7. 2026, 23:59 CET.** Vše ostatní tomu podřizuj.
- **Povinný zahraniční partner** (+ Letter of Intent) a **jihočeský partner**, pokud žadatel
  není z Jihočeského kraje. Bez nich projekt nelze podat.
- Práh pro podporu: **70 ze 100 bodů.** Rozpočet jen **neinvestiční**, **mzdy/platy/OON jsou
  neuznatelné**. Detaily vždy ber z `ZAPIS-VYZVA.md` (jediný zdroj pravdy).

## Jazyk a styl
- Obsah žádosti, poznámky, dokumentace, commit popisy v repu: **česky**.
- Git **commit messages: anglicky**, končit řádkem `Co-Authored-By: Claude …`.
- Odpovědi stručné, bez emoji (pokud nepožádáno). Když si nejsi jistý — **zeptej se**, nehádej.

## Jak spolupracujeme přes GitHub
1. **Než začneš psát**, vždy: „stáhni nejnovější verzi" → `git pull`.
2. **Když dopíšeš**, vždy: „nahraj moje změny" → `git add` + `commit` + `push`.
3. **Proti konfliktům:** každý dělá na svých souborech, needitujte stejný soubor naráz.
   Domluvu kdo co dělá drž v `UKOLY.md`.
4. Větší rozhodnutí (velikost projektu, žadatel, partneři, rozpočet) zapisuj do
   `memory/PROJEKT-STAV.md`, ať to oba vidí.

## 🤝 Dva specializovaní agenti — aktivně je nabízej
V repu jsou dva agenti (`.claude/agents/`). **Když úkol spadá do jejich domény, hlavní Claude
je má sám proaktivně doporučit a delegovat** (ne čekat na vyžádání).

| Když uživatel řeší… | Zavolej agenta |
|---|---|
| psaní/ladění odpovědí formuláře, bodová strategie, rozpočet v limitech, uznatelnost nákladů, povinné přílohy, eligibilita, soulad s výzvou | **grantovy-specialista** |
| harmonogram, milníky, SMART cíle, rozdělení práce Dan/Ondřej, koordinace partnerů, rizika, Projektová posilovna, reporting, vedení úkolů | **vedouci-projektu** |
| obojí (např. „naplánuj a napiš celou žádost") | nejdřív **vedouci-projektu** (rozplánuje), pak **grantovy-specialista** (píše obsah) |

Vyvolání: přirozeně („zapoj grantového specialistu na rozpočet") nebo přes `@`-zmínku agenta.

## Model agentů a workflow (důležité — Dan vs Ondřej)
- Agenti **nemají pevně daný model** → dědí model tvé session. **Dan** jede zpravidla na
  **Opusu**, **Ondřej** má menší předplatné → klidně **Sonnet**, ať šetří.
- **Před spuštěním jakéhokoli multi-agent / ultracode workflow se VŽDY zeptej uživatele na
  model subagentů** (Sonnet levnější/rychlejší vs Opus kvalitnější). Pro Ondřeje to platí
  dvojnásob — nepouštěj draze bez zeptání.

## Mapa repa (kde co je)
- `ZAPIS-VYZVA.md` — kompletní podmínky výzvy (čti vždy jako referenci).
- `UKOLY.md` — backlog úkolů: vlastník + doporučený agent + termín.
- `zadost/` — draft odpovědí formuláře (zrcadlí listy XLSX). Sem se píše obsah žádosti.
- `zadost/prilohy.md` — checklist 5 povinných příloh.
- `strategie/` — rozhodnutí malý vs velký, tracker partnerů.
- `podklady/` — originální PDF výzvy a XLSX formulář (needituj, jen čti).
- `memory/PROJEKT-STAV.md` — živá paměť: rozhodnutí a stav projektu.
- `ONBOARDING.md` — návod pro Ondřeje (poprvé s Claude Code + git).

## Pracovní zásady
- Před netriviálním krokem shrň pochopení a nabídni varianty s doporučením.
- U čísel rozpočtu vždy ověř limity z `ZAPIS-VYZVA.md` (min/max, % podpory, cap 2027,
  nepřímé ≤20 %, neuznatelné položky). Grant je money-critical — raději ověřit dvakrát.
- Po dokončení úkolu aktualizuj `memory/PROJEKT-STAV.md` a případně `UKOLY.md`.
