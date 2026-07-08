# AGENTS.md — instrukce pro Claude Code (čti na začátku každé práce)

Tento repozitář je společná příprava grantové žádosti do **(Perma)kulturního Open Callu
2026** (Evropské hlavní město kultury České Budějovice 2028). Tento soubor je závazný pro
Claude Code u všech členů týmu.

**Tým:**
- **Dan** (Make more) — finance, koordinace, vlastník čísel; má push přístup do repa.
- **Ondřej** (Make more) — obsah žádosti; má push přístup do repa.
- **Lucka** (Make more) — grantová specialistka, finalizace podkladů; **bez GitHub autorizace** (viz níže).
- **Jana** (JVTP) — partner za jihočeskou organizaci; **bez GitHub autorizace** (viz níže).

**Repo je veřejné** (`github.com/Make-more-s-r-o/EHMK28`) — kdokoli ho může naklonovat přes
`https://` bez přihlášení. Necommituj sem citlivé údaje (hesla, tokeny, osobní data).

## ⏰ Tvrdá fakta (drž je v hlavě)
- **Uzávěrka: 10. 7. 2026, 23:59 CET.** Vše ostatní tomu podřizuj.
- **Povinný zahraniční partner** (+ Letter of Intent) a **jihočeský partner**, pokud žadatel
  není z Jihočeského kraje. Bez nich projekt nelze podat.
- Práh pro podporu: **70 ze 100 bodů.** Rozpočet jen **neinvestiční**, **mzdy/platy/OON jsou
  neuznatelné**. Detaily vždy ber z `ZAPIS-VYZVA.md` (jediný zdroj pravdy).
- ⚠️ **DRAFT:** rozpočtová čísla a modelace v `strategie/` (FabLab) jsou k 22. 6. 2026
  **neschválené** — Dan je nepročetl. Nepoužívej je v žádosti bez ověření. Stav viz `HANDOFF.md`.

## 🚦 Jak Claude vede práci — mantinely a navigace (model „proaktivní průvodce")
> Závazné pro **hlavního Clauda i oba agenty**. Cíl: člověk může dělat chyby a neznat postup —
> Claude ho **aktivně vede, dává mantinely a směřuje k výstupu**, nečeká na dokonalé zadání.
> Platí i pro tým více lidí: čistotu drží protokol, ne dobrá vůle.

**Jediný výstup projektu** = odeslaný e-mail s **vyplněným formulářem (XLSX) + 5 povinných příloh
+ registrační formulář** do 10. 7. Vše ostatní (strategie, modely, zápisy) je jen **podklad**.
Každý krok poměřuj: „přiblížilo to tenhle výstup?" — když ne, řekni to.

**Povinný protokol každé práce (start → konec):**
1. **NA ZAČÁTKU:** „stáhni nejnovější verzi" (`git pull`) → přečti `HANDOFF.md` +
   `memory/PROJEKT-STAV.md` (sekce „Kde pokračovat") → jednou větou řekni, kde v procesu jsme.
2. **BĚHEM:** veď **krok za krokem** — vždy „jsme tady → další krok X → potřebuju od tebe Y".
   Nezahlcuj (jeden krok = jedna otázka/jeden výstup). Nečekej na dokonalé zadání: navrhni
   nejbližší užitečný krok a nech uživatele potvrdit/opravit. Vybírá vždy uživatel.
3. **NA KONCI:** zapiš **do jednoho** zdroje pravdy (ne na víc míst) → přegeneruj nástěnku
   (`node tools/generate-dashboard.mjs`) → shrň „co jsem změnil a v jakém souboru".

**Tři mantinely — hlídej u každého (upozorni + navrhni čistou cestu, ale rozhoduje uživatel):**
1. **💰 Finance = jen Dan.** U kohokoli jiného (Ondřej, Lucka, Jana): rozpočtové číslo, které
   není v `strategie/rozpocet-pracovni-2028.md`, **nezapisuj do žádosti** — označ jako dotaz pro
   Dana. Rozpor v číslech nepřepisuj, **eskaluj**.
2. **🗂️ Nezakládej nové soubory bez potřeby.** Nová informace → nejdřív najdi, **kam patří**,
   a **aktualizuj existující dokument**. Nový soubor jen po výslovném souhlasu a jen když žádný
   nesedí. (Tohle je hlavní příčina bobtnání výstupů.)
3. **🔗 Stav a čísla se neopisují, odkazují.** Jeden zdroj pravdy: partneři → `strategie/partneri.md`,
   pravidla → `ZAPIS-VYZVA.md`, finance → `strategie/rozpocet-pracovni-2028.md`. Jinde piš
   „viz …", ne druhou kopii — kopie se rozejdou (přesně to řešíme).

**Práce s Luckou / Janou** (bez GitHubu, poprvé s nástrojem): git dělá Claude/Dan/Ondřej —
**nikdy je neposílej na `git push`.** Po jejich práci shrň „co se změnilo v jakém souboru"
a připomeň předání Danovi/Ondřejovi (viz `ONBOARDING.md`, sekce 9).

## 🧭 Nevíš, kudy? (chci udělat X → jdi sem → pravidlo)
> Rychlý router pro každého v týmu. Nevíš, co dělat? Napiš Claudovi „jsem [jméno], co mám dělat"
> — navede tě. Claude tuhle tabulku aktivně používá k nasměrování.

| Chci… | Jdi do | Pravidlo / pozor |
|---|---|---|
| …zjistit, **co dělat teď** | `UKOLY.md` (nahoře „ze schůzky 7. 7." — T1–T10) | Tvůj úkol má tvé jméno. |
| …napsat/upravit **text žádosti** | `zadost/00`–`03` | Zapoj **grantovy-specialista**. Needituj finance. |
| …sáhnout na **rozpočet / čísla** | `strategie/rozpocet-pracovni-2028.md` | **Jen Dan.** Ostatní jen čtou. Rozpor → eskaluj, nepřepisuj. |
| …řešit **partnery / LoI** | `strategie/partneri.md` | Jediný zdroj stavu. Jinde jen odkazuj. |
| …zjistit **pravidla výzvy** (stropy, přílohy) | `ZAPIS-VYZVA.md` | Nikdy nehádej limit — vždy odtud. |
| …vědět, **co je rozhodnuto** | `memory/PROJEKT-STAV.md` | Velké rozhodnutí zapiš sem (log). |
| …**přidat novou informaci** | do **existujícího** souboru výše | Nezakládej nový dokument. |
| …**odevzdat práci** (Lucka/Jana bez gitu) | předej Danovi/Ondřejovi | Viz `ONBOARDING.md`, sekce 9. |
| **Cíl všeho** | vyplněný formulář (`zadost/`) **+ 5 příloh** (`zadost/prilohy.md`) | Nepřidávej nic, co k tomuhle nevede. |

## Jazyk a styl
- Obsah žádosti, poznámky, dokumentace, commit popisy v repu: **česky**.
- Git **commit messages: anglicky**, končit řádkem `Co-Authored-By: Claude …`.
- Odpovědi stručné, bez emoji (pokud nepožádáno). Když si nejsi jistý — **zeptej se**, nehádej.

## 🧭 Než vznikne dokument — nejdřív ho zadefinuj (definiční brief)
Platí pro **hlavního Clauda i pro agenty**. Než začneš psát jakýkoli výstup delší než pár vět
(dokument, zápis, sekce žádosti, rozpočtová tabulka, report, e-mail), **nejdřív si s uživatelem
odsouhlas krátký brief** (3–5 řádků, ne esej):
1. **Účel a rozsah** — k čemu to je, co uvnitř být MÁ a co NE. Žádná obecná vata navíc.
2. **Forma** — tabulka / odrážky / souvislý text? U tabulky uveď **jaké sloupce a co v nich**.
3. **Délka** — orientačně (počet vět/řádků/stran, nebo „stručně/detailně").
4. **Vlastník/adresát** — pro koho to je a kdo s tím dál pracuje.

**Jak:** doptávej se v kolech, **dokud si nejsi 100% jistý, že máš konkrétní zadání pro přesný
výstup — i malá pochybnost se vyjasňuje** (raději otázka navíc než odhad). V jednom kole se přes
`AskUserQuestion` zeptej na **všechny** otevřené body naráz (možnosti s doporučením `(Recommended)`,
nebo otevřená otázka, když varianty nedávají smysl). Po odpovědích, pokud zůstane **jakákoli**
nejasnost, ptej se dál. **Teprve když je nejednoznačnost nulová, piš. Vybírá vždy uživatel.**
Drž se briefu; když v průběhu zjistíš, že dává smysl něco navíc, **řekni to a nech rozhodnout —
nepřidávej potichu**.

**Mini-standard tabulek:** sloupce mají jasný název, **jednotky patří do hlavičky** (tis. Kč, %),
žádné prázdné „výplňové" sloupce, čísla zarovnaná; radši méně sloupců, které dávají smysl.

**Výjimky (brief netřeba):** triviální/mechanické úpravy (typo, jasný fix, přejmenování),
aktualizace už zadefinovaného dokumentu ve stejném formátu, nebo když uživatel řekl „pracuj
autonomně" — pak zvol rozumné defaulty a **brief napiš do výstupu**, ať je vidět, co jsi zvolil.

**Cíl:** míň obecného textu, víc relevance; proaktivita jen tam, kde je potřeba.

## Jak spolupracujeme přes GitHub
1. **Než začneš psát**, vždy: „stáhni nejnovější verzi" → `git pull`.
2. **Když dopíšeš**, vždy: „nahraj moje změny" → `git add` + `commit` + `push`.
   - ⚠️ **Lucka a Jana nemají push přístup** (bez GitHub autorizace). U nich `git pull`
     funguje (veřejné repo), ale `push` ne. Jejich postup: pracují lokálně, a když dopíšou,
     **předají hotové změny Danovi nebo Ondřejovi** (např. soubory / popsané, co změnily),
     ti je commitnou a pushnou. Claude jim s předáním pomůže. Viz `ONBOARDING.md`, sekce 9.
3. **Proti konfliktům:** každý dělá na svých souborech, needitujte stejný soubor naráz.
   Domluvu kdo co dělá drž v `UKOLY.md`.
4. Větší rozhodnutí (velikost projektu, žadatel, partneři, rozpočet) zapisuj do
   `memory/PROJEKT-STAV.md`, ať to oba vidí.
5. **README.md je živá nástěnka projektu.** Obsah mezi značkami `<!-- AUTO:* -->` generuje
   `tools/generate-dashboard.mjs` ze zdrojů `UKOLY.md`, `memory/PROJEKT-STAV.md` a `schuzky/`
   — **needituj ho ručně**. **Před každým „nahraj moje změny" přegeneruj nástěnku pořádně**
   (`node tools/generate-dashboard.mjs`), **zkontroluj, že dává smysl** (odpočet, tým vč. lidí bez
   GitHubu, úkoly a aktivita sedí s realitou) a přidej `README.md` do commitu, ať odpovídá realitě.
   Po pushi ji Action (`.github/workflows/dashboard.yml`) jen **zkontroluje** (org nepovoluje
   workflow zápis → necommituje, jen ❌ upozorní, když datové bloky neodpovídají zdrojům).
6. **Předávání práce mezi Danem a Ondřejem:** na konci své práce aktualizuj `HANDOFF.md` — co je
   hotové, co rozpracované, co **neschválené** (zvlášť čísla) a co je další krok, ať druhý plynule
   naváže. Na začátku práce `HANDOFF.md` přečti.

## 🎙️ Zpracování zápisů ze schůzek (závazný postup)
Platí pro **každou** schůzku (potvrdil Dan 30. 6. 2026):
0. **Vždy se nejdřív zeptej, kdo byl na schůzce, a identifikuj mluvčí.** Plaud diarizace je
   nespolehlivá — mapuj Speaker N → jména přes oslovení v přepisu („Dane/Ondro/Jano") a potvrď
   u Dana. Účastníky nehádej.
1. Stáhni nahrávku z Plaud (poslední / dle zadání). Ulož přepis
   `schuzky/RRRR-MM-DD-tema-prepis-plaud.md` + zápis `…-zapis.md` (šablona `_SABLONA-zapis.md`).
2. **Projdi CELÝ přepis, ne jen AI summary.** U dlouhého přepisu pověř subagenta (Explore), ať
   nezahltí kontext — vrátí jen to, co summary vynechá; doplň to do zápisu.
3. Zapracuj rozhodnutí, úkoly a čísla do `UKOLY.md` a `memory/PROJEKT-STAV.md` (log rozhodnutí).
   **Zápis i úkoly musí dávat smysl a být relevantní** — ne mechanický výpis vět z přepisu, ale
   pochopené body, ze kterých jde reálně pracovat.
4. **Každý úkol musí mít konkrétního vlastníka (jméno: Dan/Ondřej/Lucka/Jana)** — ne „partner"
   ani „k posouzení", ať ho ten člověk může opravdu vzít a udělat. **A v úkolech odkazuj na zdroj —
   konkrétní zápis** (`schuzky/…-zapis.md`), ideálně i sekci.
5. Čísla = NESCHVÁLENÝ DRAFT (vlastní Dan). Mluvčí z auto-diarizace = neověřené → označ.
6. **Před pushem přegeneruj nástěnku pořádně** (`node tools/generate-dashboard.mjs`) a **zkontroluj,
   že README dává smysl** — odpočet, tým (vč. lidí bez GitHubu), úkoly a poslední aktivita sedí
   s realitou. Teprve pak pushni.

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

## 💰 Finance = výhradně Dan (jeden zdroj čísel)
- **Veškerá rozpočtová a finanční čísla vlastní výhradně Dan.** Jediný zdroj pravdy pro finance je
  `strategie/rozpocet-pracovni-2028.md` (a formulářové listy v `zadost/`, až je Dan naplní).
- **Nikdo jiný — Ondřej ani žádný agent — nevytváří vlastní/paralelní finanční čísla.** Ondřejův
  `strategie/aktivity-makemore.md` přebírá čísla z Danova rozpočtu, **needefinuje vlastní**.
- Agenti `grantovy-specialista` i `vedouci-projektu` rozpočet jen **čtou a přebírají** z Danova
  souboru. Chybí-li číslo, **zeptají se Dana** — nevymýšlejí, neodhadují.
- Najdeš-li v číslech rozpor, **nepřepisuj** — označ ho a eskaluj Danovi.

## Mapa repa (kde co je)
- `ZAPIS-VYZVA.md` — kompletní podmínky výzvy (čti vždy jako referenci).
- `UKOLY.md` — backlog úkolů: vlastník + doporučený agent + termín.
- `zadost/` — draft odpovědí formuláře (zrcadlí listy XLSX). Sem se píše obsah žádosti.
- `zadost/prilohy.md` — checklist 5 povinných příloh.
- `strategie/` — rozhodnutí malý vs velký, tracker partnerů.
- `podklady/` — originální PDF výzvy a XLSX formulář (needituj, jen čti).
- `memory/PROJEKT-STAV.md` — živá paměť: rozhodnutí a stav projektu.
- `ONBOARDING.md` — návod pro Ondřeje (poprvé s Claude Code + git).
- `schuzky/` — zápisy a přepisy schůzek (`RRRR-MM-DD-tema-zapis.md` + přepisy; viz `_SABLONA-zapis.md`).
- `tools/generate-dashboard.mjs` — generátor živé nástěnky README (čte UKOLY/PROJEKT-STAV/schuzky/git).
- `.github/workflows/dashboard.yml` — po pushi do `main` přegeneruje README na GitHubu.

## Pracovní zásady
- Před netriviálním krokem shrň pochopení a doptávej se v kolech (`AskUserQuestion`, možnosti
  s doporučením), **dokud pochybnost není nulová** — teprve pak jednej. I malá nejasnost = vyjasni.
- U čísel rozpočtu vždy ověř limity z `ZAPIS-VYZVA.md` (min/max, % podpory, cap 2027,
  nepřímé ≤20 %, neuznatelné položky). Grant je money-critical — raději ověřit dvakrát.
- Po dokončení úkolu aktualizuj `memory/PROJEKT-STAV.md` a případně `UKOLY.md`.
