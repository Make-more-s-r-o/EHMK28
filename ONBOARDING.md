# Onboarding — pro Ondřeje (první práce s Claude Code + GitHub)

Vítej! Tenhle návod tě provede tím, jak s Danem psát grant přes tenhle repozitář.
Nemusíš umět git ani programovat — Claude Code za tebe udělá technickou část, ty mu jen
říkáš lidsky, co chceš.

> [!CAUTION]
> **Pozor — rozpočtová čísla jsou zatím DRAFT.** Vše v `strategie/` (rozpočtové modely, One
> Pager) a čísla okolo pop-up FabLabu Dan zatím **nepročetl ani neschválil**. Čti je pro
> pochopení, ale **nepracuj s nimi jako s finálními** a nedávej je do žádosti bez Danova
> potvrzení. Aktuální předání práce: [`HANDOFF.md`](./HANDOFF.md).

## 1. Jednorázové nastavení
1. **Přijmi pozvánku** do repozitáře (přišla ti na GitHub / e-mail; nebo na
   `https://github.com/Make-more-s-r-o/EHMK28/invitations`).
2. **Naklonuj repo.** Řekni svému Claude Code:
   > „Naklonuj mi repo `https://github.com/Make-more-s-r-o/EHMK28.git` do složky na disku
   > a přečti si AGENTS.md. Budeme tu s Danem psát grant."
   - (SSH varianta `git@github.com:Make-more-s-r-o/EHMK28.git` funguje jen pokud máš v GitHubu
     nahraný SSH klíč. Když nevíš, použij tu `https://` — chce jen přihlášení.)

## 2. Každodenní rytmus (zapamatuj si dvě věty)
- **Než začneš psát:** „**stáhni nejnovější verzi**." (Claude udělá `git pull` — máš poslední
  Danovy změny.)
- **Když dopíšeš:** „**nahraj moje změny**." (Claude udělá commit + push — Dan je uvidí.)

To je celá „technika". Claude zvládne i případné slučování.

## 3. Pravidlo proti přepsání práce
Grant je rozsekaný na víc souborů. **Domluv se s Danem, kdo dělá kterou část**, a needitujte
stejný soubor naráz. Kdo co dělá, je v [UKOLY.md](./UKOLY.md). Když potřebuješ sáhnout do
„cizího" souboru, nejdřív si stáhni nejnovější verzi a řekni to Danovi.

## 4. Dva pomocníci, kteří ti práci usnadní
V repu jsou dva specializovaní AI agenti. Claude ti je sám nabídne, ale můžeš si je vyžádat:
- **„Zapoj grantového specialistu"** — když píšeš obsah žádosti, řešíš rozpočet, body,
  uznatelné náklady nebo povinné přílohy.
- **„Zapoj vedoucího projektu"** — když řešíš harmonogram, kdo co dělá, partnery, milníky.

## 5. Šetření kreditů (máš menší předplatné)
- Když Claude bude chtít spustit **velký multi-agent / „ultracode" workflow**, **zeptá se tě
  na model**. Pro běžnou práci klidně zvol **Sonnet** — je levnější a rychlejší. Opus si nech
  na nejtěžší věci.
- Běžné psaní a úpravy textu Sonnet zvládne v pohodě.

## 6. Kde se zorientovat
- Co výzva chce: [ZAPIS-VYZVA.md](./ZAPIS-VYZVA.md)
- Co je potřeba udělat: [UKOLY.md](./UKOLY.md)
- Kam psát obsah žádosti: složka `zadost/`
- Pravidla projektu pro Clauda: [AGENTS.md](./AGENTS.md)

## 7. Nástěnka projektu (README se aktualizuje sám)
Hlavní [README.md](./README.md) je **živá nástěnka** — odpočet do uzávěrky, schůzky, úkoly
a poslední změny se v něm generují samy. Co stačí vědět:
- **Needituj části mezi značkami `<!-- AUTO:* -->`** — přepíše je generátor. Ostatní text uprav klidně.
- **Claude přegeneruje nástěnku před každým commitem**, takže je vždy aktuální — ty nemusíš nic
  dělat. (Na GitHubu navíc běží kontrola; kdyby někdo zapomněl přegenerovat, ukáže ❌. Tebe se to
  netýká.) Pravidlo **„před prací stáhni nejnovější verzi"** platí dál — ty i Dan pushujete do main.
- **Nová schůzka:** ulož zápis do `schuzky/` jako `RRRR-MM-DD-tema-zapis.md` (např.
  `2026-07-01-jvtp-zapis.md`); použij [šablonu](./schuzky/_SABLONA-zapis.md). Objeví se sám.
- **Konflikt v README?** Nevadí — řekni Claudovi *„vezmi kteroukoli verzi a přegeneruj nástěnku"*.

## 8. Když něco nejde
- Claude hlásí konflikt v gitu → řekni mu „vyřeš ten konflikt a vysvětli mi, co se stalo."
- Nevíš, kde začít → řekni „jsem tu poprvé, co mám podle UKOLY.md dělat jako první?"
- Cokoli nejasného kolem výzvy → „shrň mi z UKOLY.md, co teď nejvíc hoří."

Vítej v týmu. 👋
