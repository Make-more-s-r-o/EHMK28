# Stav projektu — živá paměť

> Sdílená paměť týmu. Sem zapisujte rozhodnutí a aktuální stav, ať to oba vidí. Aktualizujte
> po každém větším kroku. (Detaily podmínek = `../ZAPIS-VYZVA.md`, úkoly = `../UKOLY.md`.)

> [!NOTE]
> **MM rozpočet a aktivity SCHVÁLENY Danem (8. 7. 2026)** — jediný MM zdroj
> `../strategie/final-mm-zapojeni-a-aktivity.md`, finance `../strategie/rozpocet-pracovni-2028.md`.
> Zbývá **finální díl JVTP** (číslo od Vojtěcha) → pak celkové % dosedne na 50 %. Historické
> modelace jsou v `../strategie/archiv/`. Předání a další kroky viz `../HANDOFF.md`.

**Poslední aktualizace:** 9. 7. 2026 (repo-úklid + archiv; MM díl schválen, den před uzávěrkou)

## ▶ Kde pokračovat (stav k 9. 7. — den před uzávěrkou)

- **MM díl SCHVÁLEN (Dan, 8. 7.):** rozpočet 2 mil. + aktivity + harmonogram → `../strategie/final-mm-zapojeni-a-aktivity.md`.
  Program 650 tis. → **~105 tříd / ~2 500 návštěv ≈ ~2 000 unik. dětí** (mistr 550/h, lektoři 350/h,
  3 h/třída, materiál 100 Kč); vstupné 100 Kč → příjem ~250 tis. na rozšiřující aktivity.
- **Formulář:** finální XLSX u Dana (`Downloads/FinalVerze…`), MM texty i finance sladěné. Zbývá
  **projektový plán**, **JVTP části**, oprava mailu realizačního garanta (Jana), rozhodnutí
  **flat-rate jako cofinance** (≤ 20 % podpory).
- **Do podání (pá 10. 7. dopoledne, uzávěrka 23:59 CET):** JVTP číslo od Vojtěcha → dopočítat celkové
  % (cíl 4/8 = **50 %**) → dokončit formulář → **4 přílohy e-mailem** na `opencall@budejovice2028.cz`
  (formulář XLSX, LoI, stanovy+výpis majitelů JVTP, plná moc) + **registrační Google formulář** (Jana za JVTP).
- **Otevřené blokery:** **LoI podpis** (Grand Garage, `jakob.aigner@grandgarage.eu`), **přílohy JVTP**
  (stanovy, výpis majitelů, plná moc), partnerská dohoda, prostor (výstaviště ≤ ~25 tis./měs.).
- **Po podání — zakonzervování:** snapshot odeslaného + `git tag`, archiv verzí, learnings; repo → private
  (plán schválen 9. 7.).

> **Archiv postupu:** starší „Kde pokračovat" (po schůzkách 7. 7. / 2. 7. / 30. 6. / původní) je
> shrnutý v „Log rozhodnutí" níže; překonané rozpočtové modelace v `../strategie/archiv/`.

## Základní fakta
- **Výzva:** (Perma)kulturní Open Call 2026, 2. výzva — EHMK České Budějovice 2028.
- **Uzávěrka:** 10. 7. 2026, 23:59 CET.
- **Tým:** Dan (finance/koordinace), Ondřej (obsah) — oba s push přístupem; **Lucka** (Make more,
  grantová specialistka) a **Jana** (JVTP, partner) — pracují lokálně **bez GitHub autorizace**,
  změny předávají Danovi/Ondřejovi k pushnutí.
- **Repo:** `Make-more-s-r-o/EHMK28` — **veřejné** (klonování přes `https://` bez přihlášení).
  Necommitovat citlivé údaje.

## Rozhodnutí
| Otázka | Stav | Pozn. |
|---|---|---|
| Název projektu | ✅ **Make & Design Lab** | Rozhodnuto 2. 7. |
| Velikost projektu | ✅ **VELKÝ** | grant max 4 mil. Kč, celkový rozpočet 8 mil., spolufinancování 50 % |
| Hlavní žadatel | ✅ **JVTP** | potvrzeno Petrem Pežinkou (24. 6.) — MM je realizační partner, fakturace OK |
| MM v JčK | ✅ splněno | pobočka Make More v ČB zapsána v rejstříku 23. 6. |
| Jihočeský partner | ✅ **JVTP** | Jana Moravcová; ředitel potvrdil ochotu |
| Zahraniční partner | 🟡 **kontakty navázány** | Grand Garage Linz (Ondřej) + Kunstuniversität Linz / Creative Robotics (Jana) — rozděleno 2. 7.; 2027 mentoři, 2028 hosté. Ars Electronica se neoslovuje. Termín LoI 5. 7. |
| Regionální design partner | 🟡 **Novák Design** | LoI zajišťuje Jana (2. 7.); upřesnit náklady na dopravu exponátů |
| Fakturace a režie | 🟡 rámec dohodnut (2. 7.) | čerpání fakturami MM → JVTP (nebo dodavatelé přímo na JVTP — rozmyslet, dopad na majetek); partnerská dohoda přes Vojtu; režie doklady ne paušál (hlavně nájmy), sazba 20/25 % ověřuje Jana; hranice „400“ = veřejná zakázka |
| Rozvržení let | ✅ (2. 7.) | 2027 síťovací rok (dílčí akce, kulaté stoly, Maker Faire 2027); vybavení + nájem až 2028; pavilon Z zamítnut (150 tis. Kč/víkend) |
| Registrace | ✅ podána | projekt registrován, předběžně „z těch lepších“ (Martina, JVTP); hodnotící komise 21. 8. |
| Koncept | ✅ **pop-up Makerspace + Design lab** | MM = provoz + školy + komunita; JVTP = výstava + design sprint se startupy |
| Kofinancování | ✅ **OK** | osobní náklady z jiných projektů lze použít — nesmí být vykázány 2× zároveň (MK ČR hlídá) |
| Programová koordinace | 🟡 | sync s EHMK školy (Kreativní mysl 0–6, ZŠ/SŠ); Ostrov kultury = výstupy do veřejného prostoru |

## Pravidla práce (připomínka)
- Obsah česky, git commit messages anglicky.
- Před prací „stáhni nejnovější verzi", po práci „nahraj moje změny".
- Před multi-agent/ultracode workflow se zeptat na model (Ondřej šetří → Sonnet).
- Agenti: `grantovy-specialista` (obsah+rozpočet+pravidla), `vedouci-projektu` (plán+partneři).

## Kontext a příběh projektu (z nahrávek Ondřeje)
- Make More má zakladatele z JčK, 2 se přistěhovali do ČB. Region je strategická priorita.
- Stávající aktivity: Makerfest, Make Edu (vzdělávání dětí, tábory), Make Designers (poradenství pro dílny).
- Projekt musí dávat smysl pro růstovou strategii MM — budovat nový produkt/službu, ne jen grant.
- Reference: Makerspace Plzeň 2015 (Depo 2015) — poučení: příliš úzké zaměření snižuje kritickou masu.
- Definice Makera: každý, kdo tvoří a sdílí → záměrně široký záběr (vzdělávání, řemeslo, tech, design).
- Klíčové kontakty EHMK: Kateřina Rachačová (ředitelka), Petr Pežinka (strategie a rozvoj).
- Možná budoucí lokace: Stará pošta (vedle nádraží ČB) — příslib do budoucna.
- Make More tým: Patrick Sidle (HW Lab / Makers Institut), Make Edu lektoři, Make Designers, Make Media, Make Events.
- JVTP je „dlouhodobý velmi prověřený partner."

## Log rozhodnutí
- 8. 7. 2026 — **MM rozpočet a aktivity SCHVÁLENY (Dan).** Kompletní podklad:
  `../strategie/final-mm-zapojeni-a-aktivity.md` („FINAL — MM zapojení a aktivity"). MM podíl grantu
  **2 mil. Kč za oba roky** (2027 = 320 tis., 2028 = 1 680 tis.), obálky **aktivity 1,35 / koordinátor
  0,5 / marketing+rezerva 0,15 mil.** Program a provoz dílny 650 tis. → **~105 tříd / ~2 500 dětských
  návštěv / ~2 000 unikátních dětí** (konzervativně, dosah dle poptávky mapované 2027); vstupné
  **100 Kč / návštěva** → potenciální příjem ~250 tis. na rozšiřující aktivity (tábory, víkendovky,
  gaming…). **Linz 80 tis.** (40 tis. studijní cesta 2027 + 40 tis. host/workshop 2028). **Prostor,
  nájem a marketing celého projektu = JVTP** (mimo MM 2 mil.); JVTP ~2 mil. doplní Jana → ~4 mil /
  ~8 mil = **50 %** (řeší dřívější strop).
  Přidána aktivita **prezentace na Maker Faire ČB 2028** (září/říjen). MM garanti: **obsahový i realizační
  = Ondřej Kašpárek**; finance vlastní **Daniel Jirotka**. Do formuláře (DRAFT-3) připraveny **2 verze**
  doplnění MM (V1 in-place se zvýrazněním, V2 návrhy ve sloupcích D/E) — u Dana v Downloads (osobní
  kontakty → mimo veřejné repo). ⚠️ Celkové % dosedne po JVTP čísle (Vojtěch čt 9. 7.).
- 7. 7. 2026 — **Týdenní schůzka — finální sprint** (Dan, Lucka, Jana; ~27 min). Zápis:
  `../schuzky/2026-07-07-tydenni-schuzka-zapis.md`, přepis Plaud `…-prepis-plaud.md` (file_id
  `30b5f0d5a82c8be3cea4312f403043ff`). Závěry: **rozdělení rozpočtu ~2 + 2 mil.** (Make More odborný
  program + technologie / JVTP prostor, chod, administrativa, kofinancování, marketing; dotace 4 mil.,
  projekt ~8 mil. = **50 %**, řeší dřívější strop); **limit 750 tis. Kč** = bez výběrka (nová směrnice
  JVTP), nad to rozdělit na logické celky přes více IČ (pozor dělení zakázky, právně ošetřit) —
  **partnerskou dohodu musí potvrdit ředitel Vojtěch (zpět čt 9. 7.)**; **marketing ~400 tis. společně**,
  landing page pod JVTP (ne nový web), + ~100 tis. kampaně na školy, doplňkově Smart Accelerator,
  specifikovat KPI; **počet dětí 3 000 vs. 5 000** dle rozpočtu (otevření 2× vs. 4× týdně); **nájem
  strop ~25 tis./měs.**; nový nápad **LOI od odboru kultury JčK** (Jana předjednáno); **harmonogram:**
  podklady do čt 9. 7. večer → **odeslat pá 10. 7. dopoledne** (Jana v pátek do ~15:30). Dan píše
  žádost s AI na paralelní verzi, Lucka finalizuje. ⚠️ Mluvčí: S1=Dan, S2=Jana (Lucka přítomna,
  diarizace nerozlišila); AI summary halucinovalo termíny (uzávěrka „1. 10.", pátek „11. 7." — obojí
  špatně, správně 10. 7.). Čísla = NESCHVÁLENÝ DRAFT (Dan).
- 2. 7. 2026 — **Vyplněn formulář žádosti + tým (2 agenti) prošel obsah a plán.** Do XLSX
  `Rozpracovany_Formular…xlsx` (Downloads) vyplněn list PODROBNÝ POPIS (názvy, žánr [návrh],
  popis 1 větou, anotace, SMART cíle 2027/2028, aktivity, výstupy, obsahové info, průřezové
  hodnoty, atraktivita, cílové skupiny, obsahoví partneři, přínos zahr./reg. partnera) a list
  PROJEKTOVÝ PLÁN (harmonogram). **Prázdné** ponecháno: kontakty/představení partnerů, realizační
  tým (jména+kontakty), představení žadatele, a **CELÉ FINANCE** (viz flag níže). Janiny buňky
  R5–R7 netknuté. **`vedouci-projektu`** postavil master harmonogram po dnech 2.–10. 7. + rizika
  do `UKOLY.md`; **`grantovy-specialista`** doplnil textová pole do `zadost/00` + bodovou
  strategii a compliance.
  🔴 **KRITICKÝ FLAG (Dan):** požadovaná podpora 4 576 230 Kč = ~67 % celkového rozpočtu
  6 836 230 Kč → **nad 50% stropem** (max 3 418 115 Kč) **i nad 4 mil.** Takto nelze podat —
  snížit podporu nebo zvednout rozpočet ≥ 8 mil. Detaily + další flagy v `UKOLY.md` (sekce
  KRITICKÝ COMPLIANCE FLAG). ⚠️ Čísla NESCHVÁLENÝ DRAFT, vlastní Dan.
  **Top bodové mezery** (grantovy-specialista): představení žadatele + mezinár. reference (0–10)
  je prázdné; posílit uměleckou/konceptuální vrstvu (0–15) a rovinu OBSAH (Perma)kultury (vztah
  k místu/paměti); partnerství popsat jako reciproční (0–20); konkretizovat plán EU financování.
- 2. 7. 2026 — **Týdenní schůzka Make & Design Lab** (Dan, Ondřej, Lucka, Jana; možná 5. účastnice
  „Bety“ — neověřeno). Zápis: `../schuzky/2026-07-02-tydenni-schuzka-zapis.md`, přepis Plaud
  `…-prepis-plaud.md` (file_id `82a575d4ea64347f8e12f6c78c86520a`). Závěry: **název Make & Design
  Lab** potvrzen (doména makedesign.cz volná); JVTP hlavní žadatel + MM hlavní partner s partnerskou
  dohodou (zajistí Vojta); **fakturace** MM→JVTP nebo dodavatelé přímo na JVTP (rozmyslet, dopad na
  majetek), hranice „400“ = veřejná zakázka; **režie doklady ne paušál** (hlavně nájmy), sazba
  20/25 % ověří Jana; **2027 síťovací rok, vybavení+nájem až 2028**; **pavilon Z zamítnut** (150 tis.
  Kč/víkend); zahr. partneři rozděleni: **Grand Garage → Ondřej**, **Kunstuniversität Linz/Creative
  Robotics → Jana**, + regionální **Novák Design → Jana**; registrace podána (projekt „z těch
  lepších“ dle Martiny), **komise 21. 8.**; Dan dnes odpoledne plní koncept žádosti přes AI. Příští
  týden: Ondřej retreat (nedostupný), Lucka omezeně, 6. 7. svátek. **Další schůzka út 7. 7. 15:00
  online.** ⚠️ Mluvčí z diarizace neověření; čísla NESCHVÁLENÝ DRAFT.
- 30. 6. 2026 — **Doplněn sezónní harmonogram provozu 2028** do `../strategie/rozpocet-pracovni-2028.md`
  (vlastní Dan). Popisuje, kdy je otevřeno a s čím jsou čísla párovaná: prostor celoročně (12 měs),
  program jen v sezónách — **únor–květen** jarní + **září–listopad** podzimní školní program (~28
  výukových týdnů), **leden** příprava, **červen** ukázky/soutěže, **čvc–srp** příměstské tábory
  (**zatím nerozpočtováno**). Sezónní položky (personál 672k, materiál 403k, doprava, vstupné)
  škálují s 28 týdny; celoroční (nájem, management, vybavení, propagace) s 12 měsíci. Harmonogram
  vytažen z konverzace 29. 6.; čísla = NESCHVÁLENÝ DRAFT.
- 30. 6. 2026 — **Schůzka k rozpočtu a aktivitám makerspace** (**Dan, Ondřej, Jana z JVTP/Design Lab**;
  Lucka nebyla). Zápis: `../schuzky/2026-06-30-makerspace-rozpocet-zapis.md`, přepis Plaud
  `…-prepis-plaud.md` (file_id `6f07280d482787f65b124f1d958dcb3b`). Závěry: koncept komunitní
  makerspace platforma (dopoledne školy „Popovův Blob", odpoledne/večer veřejnost); agregát
  rozpočtu ~4,5 mil. **nad limitem 3,5 mil.** → nutné škrty (Dan); zahr. partneři Grand Garage +
  Kunstuniversität Linz (LoI), Ars Electronica se neoslovuje; rozdělení práce Ondřej obsah / Dan
  finance / Lucie finalizace; prostor Výstaviště/Žižkárna. ⚠️ Všechna čísla NESCHVÁLENÝ DRAFT.
  **Rozhodnuto (2. 7.): název projektu = Make & Design Lab** (původně nerozhodnuto: Make and Design / Makerspace / Design Lab)
  — blokuje LoI a papíry. Nové kontakty obsahu: Adam Ur (kacadu.com, SABIC), Jiří Vele, Michal
  Trpák. Žižkárnu ověřuje Vojtěch (Design Lab). Schůzka s Luckou čt 2. 7. 11:00.
- 22. 6. 2026 — Založen repozitář, rešerše výzvy (ZAPIS-VYZVA.md), struktura žádosti,
  onboarding pro Ondřeje, dva agenti. Velikost projektu zatím nerozhodnuta (připraveny obě
  varianty). Zdrojové soubory v `podklady/`.
- 22. 6. 2026 — Proběhl compliance audit (5 agentů, Opus) → `strategie/compliance-audit.md`.
  1 blocker + 4 warnings + 7 info, vše zapracováno. **Otevřená věc:** výklad capu na přípravu
  2027 (celý rozpočet vs. jen podíl ČB28) — držet pod limitem obojí.
- 22. 6. 2026 — Konec session: vše commitnuto a pushnuto (`main` synced). Nainstalován Plaud
  MCP do globálního configu (čeká na OAuth login po restartu). Dan restartuje session.
- 22. 6. 2026 — **Schůzka Dan + Ondřej** (zápis: `../schuzky/2026-06-22-ondra-zapis.md`).
  Směr: **dvojí podání** — malý (Maker Faire ČB, Make more hlavní) + velký (**pop-up FabLab**
  s partnerem **JVTP**). Velký projekt ~8 mil., grant max 4 mil. (50 %), kofinancování 4 mil.
  (MM ~3 mil. + JVTP ~1 mil., ideál víc od JVTP). Hlavní žadatel velkého projektu (JVTP vs MM)
  **nerozhodnuto** — vyjasní schůzka s ředitelem JVTP. **Úkol do 23. 6. dopo: One Pager pro JVTP**
  (handout ke schůzce). Reference provozu: HW Lab Praha. ⚠️ Zahraniční partner + LoI stále
  nevyřešen (síť JVTP nestačí).
- 22. 6. 2026 — **Rozpočtová/kapacitní modelace FabLabu** (2 ultracode iterace, Opus):
  `../strategie/archiv/rozpocet-model-fablab.md` (plný model) + `../strategie/archiv/rozpocet-3M-co-odbavime.md`
  (strop 3 mil. cash). Doporučená sestava **ŠKOLNÍ ROK**: ~294k/měs → 10,2 měs provozu,
  ~5 100 unikátních dětí, 530 oprav. ⚠️ Celoročnost závisí na **in-kind nájmu + vybavení od
  JVTP** (bez písemného příslibu se pilot zkrátí na ~7–8 měs). K rozhodnutí: sestava, mix
  večerů, vlastní výnos 100–200/dítě.
