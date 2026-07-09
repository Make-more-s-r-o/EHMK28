# RETRO — příprava žádosti Make & Design Lab (Open Call 2026)

> Retrospektiva po podání (10. 7. 2026). Co fungovalo, co drhlo, co příště jinak.

## Výsledek
- **Žádost podána** (10. 7. 2026). Rozpočet **8 mil. / podpora 4 mil. = 50 %**; MM díl 2 mil.
  Žadatel **JVTP**, Make more realizační partner. Další milník: **komise 21. 8. 2026**.
- Klíčový compliance milník vyřešen: z dřívějších **67 % (nad stropem)** na **50 %** doplněním JVTP dílu.

## Co fungovalo
- **Jeden zdroj pravdy + odkazy** (partneři → `partneri.md`, finance → `rozpocet-pracovni-2028.md`,
  MM scope → `final-mm-zapojeni-a-aktivity.md`). Zastavilo rozjíždění stavu.
- **D/E anotace formuláře** — návrhy MM do sloupců vedle (nepřepisovat cizí obsah); dobře se revidovalo.
- **Fixed-then-variable rozpočet do stropu** — nejdřív fixní (vybavení, nářadí), zbytek na program →
  z toho počet dětí; konzervativní slib + rezerva.
- **Návodní agenti + mantinely** v `AGENTS.md` (model „proaktivní průvodce" + povinný start/konec
  protokol) pro vícečlenný tým s různou zdatností.
- **Fable konzistenční audit** odhalil drift (čísla na víc místech, staré modely) → cílená náprava.

## Co drhlo
- **Sprawl verzí XLSX** — v `Downloads/` ~10 verzí (DRAFT-1/2/3, V1/V2, dvě „FinalVerze"). Riziko
  odeslání špatné verze; nástroj `glob('FinalVerze*')[0]` trefil jiný soubor než skutečný master.
- **Čísla na víc místech** — počet dětí (3 000–9 000), vstupné (150 vs 100), lektoři/materiál (staré
  vs nové sazby) se rozjížděly mezi dokumentem, formulářem a trackery.
- **Pozdní JVTP číslo** — celkové % dosedlo na 50 % až na poslední chvíli (čekání na ředitele).
- **Měnící se garanti** (Ondřej/Dan/Jana) + copy-paste bug v mailu garanta.
- **Renamy dokumentů za běhu** (`mm-aktivity-2028` → `final-mm-…`) → dočasně rozbité odkazy.

## Co příště jinak
- **Jeden pracovní soubor formuláře**, verzovaný datem/tagem — ne paralelní kopie v Downloads.
- **Kanonická čísla na jednom místě** (`FAKTA` / rozpočet), všude jinde odkaz; ideálně formulář
  odvozený/generovaný z jednoho zdroje.
- **Rané zafixování rámce** (velikost, žadatel, 2+2 rozdělení) — kritická čísla nezávislá na partnerovi mít dřív.
- **Mantinely od začátku** (finance = jeden vlastník, nezakládat nové soubory bez potřeby, stav odkazovat).
