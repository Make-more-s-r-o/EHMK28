# Rozpočtová a kapacitní modelace pop-up FabLabu

> [!CAUTION]
> **NESCHVÁLENÝ DRAFT — Dan tato čísla zatím nepročetl ani neschválil (22. 6. 2026).** Slouží
> k diskusi a plánování; **nepoužívat v grantové žádosti bez explicitního schválení.** Viz `../HANDOFF.md`.

> **Poznámka:** Jde o **VOLNOU modelaci**, ne o finální grantový rozpočet. Čísla vycházejí z Danových odhadů a reference HW Lab Praha, slouží k diskusi a rozhodování o velikosti, době trvání a rozdělení financování. Grantová pravidla (uznatelnost, neinvestiční charakter, stropy) zatím **nejsou naroubována na tvrdo** — jen jsou explicitně flagována. Před podáním vše ověřit s grantovým specialistou proti `ZAPIS-VYZVA.md`.

---

## 1. Shrnutí pro netrpělivé

- **Dosah (základní scénář, 12 měsíců):** ~9 000 návštěv školních tříd (~6 920 unikátních dětí), ~2 800 návštěvníků z veřejnosti (~1 555 unikátních), ~960 oprav, **~26 400 kontakt-hodin/rok**.
- **Provozní náklady:** ~509 000 Kč/měs přímý opex (z toho **personál 97 %**), s 15% interní režií MM ~566 000 Kč/měs, tj. **~6,8 mil. Kč/rok** — a to **BEZ nájmu, energií a pořízení strojů**.
- **Kolik měsíců se vejde do 8 mil.:** jen **~10–11 měsíců** plného provozu, jakmile přičteme nájem a energie (čistý opex sám utáhne ~14 měs, ale chybí mu nájem/capex). **18měsíční scénář se do 8 mil. NEVEJDE.**
- **Hlavní strukturní riziko:** rámec **„8 mil. projekt / 12 měsíců / 4 mil. kofinancování" nedrží pohromadě** — sám roční personál (5,95 mil.) převyšuje celé plánované kofinancování (4 mil.).
- **Hlavní grantové riziko:** mzdy/platy/OON jsou **neuznatelné** → personál (97 % opexu) musí celý do kofinancování. Kofinancování 4 mil. pokryje personál **jen na ~8 měsíců**.
- **Druhé grantové riziko:** grant 4 mil. **nemá z čeho čerpat** — uznatelné přímé jsou prakticky jen materiál (~156k/rok) + nepřímé (cap max 800k) ≈ **~0,95 mil.** Zbylé ~3 mil. grantu „naprázdno", dokud se personál/nájem nepřeklopí na fakturovanou službu.
- **Doporučení:** modelovat pilot reálně jako **6–8 měsíců** (ne 12), doplnit chybějící vstupy (nájem, energie, capex) a paralelně řešit s grantovým specialistou překlopení personálu/nájmu na uznatelnou službu.

---

## 2. Vstupy a předpoklady

### 2.1 Zvolené parametry

| Parametr | Hodnota | Zdroj / poznámka |
|---|---|---|
| Dílna | ~300 m² | zadání |
| Kapacita 1 třída | 30 dětí | zadání |
| Dopoledne | ~1,5 třídy/den | zadání |
| Večery | 3/týden (2 repair + 1 maker) | zadání |
| Školních dní/týden | 5 | předpoklad |
| Délka kontaktu třída | 2 h | předpoklad |
| Délka večerního programu | 3 h | předpoklad |
| Provozních týdnů/rok | 34 / 40 / 44 | dle intenzity (školní rok ~40 týdnů) |
| Měsíc pro přepočet | 4,33 týdne (52/12) | konvence kapacitního modelu |

### 2.2 Náklady (Danův odhad, měsíčně)

| Položka | Kč/měs | Pozn. |
|---|---:|---|
| Materiál / spotřeba | 13 000 | ~156 000 Kč/rok |
| Personál denní (školní třídy) | 360 000 | 220 000 (4× full-time) + 140 000 DPP |
| Personál večerní (lektoři) | 136 000 | 3 večery/týden |
| **Σ přímý opex** | **509 000** | personál = 97,4 % |
| + Interní režie MM 15 % | ~57 000 | počítáno z MM podílu opexu (75 %) |

### 2.3 ⚠️ CHYBĚJÍCÍ / nejisté vstupy (NEvymyšleno — doplnit)

| Vstup | Status | Orientační rozpětí (jen úvaha) |
|---|---|---|
| **NÁJEM ~300 m²** | ⚠️ CHYBÍ | ~150–300 Kč/m²/měs → ~45–90k/měs → **~540k–1,08 mil./rok** |
| **ENERGIE** (dílna se stroji) | ⚠️ CHYBÍ | ~15–40k/měs → **~180–480k/rok** |
| **VYBAVENÍ / HW capex** (3D/CNC/VR/nářadí) | ⚠️ CHYBÍ + grantový blok | jednorázově stovky tis.–jednotky mil. Kč |
| **DOBA TRVÁNÍ** | ⚠️ NEURČENO | modelujeme 6 / 12 / 18 měsíců |

> Nájem ani energie nejsou v opexu výše → **reálný opex bude vyšší** než ~566k/měs. HW capex je **investice** → mimo neinvestiční grant.

---

## 3. Kapacita / dosah

Tři intenzity provozu (definice):

| | Konzervativní | Základní | Ambiciózní |
|---|---|---|---|
| Provozních týdnů/rok | 34 | **40** | 44 |
| Tříd/den (dopoledne) | 1,0 | **1,5** | 2,0 |
| Návštěvníků/maker večer | 20 | **30** | 40 |
| Návštěvníků/repair večer | 15 | **20** | 25 |
| Oprav/repair večer | 8 | **12** | 16 |

### Roční dosah

| Metrika | Konzervativní | **Základní** | Ambiciózní |
|---|---:|---:|---:|
| Dětí/rok (návštěvy tříd) | 5 100 | **9 000** | 13 200 |
| → unikátní děti (÷1,3) | ~3 920 | **~6 920** | ~10 150 |
| Návštěvníků veřejnost/rok | 1 700 | **2 800** | 3 960 |
| → unikátní veřejnost (÷1,8) | ~944 | **~1 555** | ~2 200 |
| Oprav/rok (2 repair večery/týd.) | 544 | **960** | 1 408 |
| **Σ kontakt-hodin/rok** | 15 300 | **26 400** | 38 280 |

**Výpočet (základní):** dopoledne 1,5 × 5 × 30 = 225 dětí/týden × 40 týdnů = **9 000**; veřejnost (30 + 2×20) = 70/týden × 40 = **2 800**; opravy 2×12 = 24/týden × 40 = **960**; kontakt-hodiny 9 000×2 + 2 800×3 = **26 400**.

> Pozn.: „dětí/rok" = počet **návštěv tříd (účastnických míst)**, ne nutně unikátní hlavy. Repeat-rate (děti ÷1,3, veřejnost ÷1,8) je odhad k validaci z dat HW Labu.

---

## 4. Náklady a doba provozu

### 4.1 Měsíční a roční opex

| | Kč/měs | Kč/rok (×12) |
|---|---:|---:|
| Přímý opex (materiál + personál) | 509 000 | 6 108 000 |
| + Interní režie MM 15 % (báze 75 %) | 57 263 | 687 156 |
| **Σ opex vč. režie** | **566 263** | **6 795 156** |

> **Báze 15 % režie:** zvolen MM podíl = 75 % opexu (proporčně k 6/8 mil. aktivit MM) → 57 263 Kč/měs. Alternativa „15 % z celého opexu" = 76 350 Kč/měs (roční rozdíl ~229k). K vyjasnění.

### 4.2 Scénáře doby trvání (jen opex, bez nájmu/energií/capexu)

| Doba | Σ přímý opex | Σ vč. režie MM | Dětí (návštěvy) | Veřejnost | Opravy | Kontakt-hodin |
|---|---:|---:|---:|---:|---:|---:|
| **6 měsíců** | 3 054 000 | 3 397 575 | 4 500 | 1 400 | 480 | 13 200 |
| **12 měsíců** | 6 108 000 | 6 795 156 | 9 000 | 2 800 | 960 | 26 400 |
| **18 měsíců** | 9 162 000 | 10 192 725 | 13 500 | 4 200 | 1 440 | 39 600 |

### 4.3 Kolik měsíců provozu se vejde do rozpočtu

Počítáno s opexem vč. režie = **566 263 Kč/měs**, konzervativně **bez nájmu/energií/capexu**:

| Rozpočet | Vejde se opexu |
|---|---|
| **8 mil. (celý projekt)** | ~14,1 měsíce |
| **4 mil. (grant max)** | ~7,1 měsíce |
| **4 mil. (kofinancování)** | ~7,1 měsíce |

> ⚠️ **Korekce na realitu:** jakmile přičteš nájem (~0,5–1 mil./rok) + energie + capex, **8 mil. utáhne reálně jen ~10–11 měsíců**, ne 12. **18měsíční scénář (opex 10,2 mil.) se do 8 mil. nevejde** — sám opex je o ~2,2 mil. nad rozpočtem. Každý měsíc provozu „spálí" ~0,57 mil. Kč.

---

## 5. Teoretický výnos a nepeněžní dopad

### 5.1 Teoretický výnos z dětí (NEJISTÝ příjem)

Sazba **100–200 Kč/dítě** × návštěvy tříd:

| Intenzita | Dětí/rok | Výnos LOW (×100) | Výnos HIGH (×200) |
|---|---:|---:|---:|
| Konzervativní | 5 100 | 510 000 | 1 020 000 |
| **Základní** | **9 000** | **900 000** | **1 800 000** |
| Ambiciózní | 13 200 | 1 320 000 | 2 640 000 |

**Pokrytí nákladů (základní):** měsíčně 750 dětí → 75–150k Kč → kryje jen **~15–29 %** provozu (~509k/měs). Příjem je **doplňkový, ne nosný**.

### 5.2 Veřejnost — DOPORUČENÍ: nevybírat

Dle reference HW Lab Praha: otevřená dílna **zdarma, platí se jen materiál**. Pro (Perma)kulturní a komunitní narativ je bezplatný přístup silnější argument (víc bodů za dosah a inkluzi) než pár desítek tisíc tržby. Opravy (repair café) **nezpoplatňovat** — popřelo by to myšlenku udržitelnosti.

### 5.3 Nepeněžní dopad (hlavní grantový argument)

| Metrika dopadu (12 měs, základní) | Hodnota |
|---|---:|
| Unikátní děti zasažené tech. vzděláním | ~6 920 |
| Unikátní lidé z komunity | ~1 555 |
| Opravené předměty (repair) | 960 |
| Σ kontakt-hodin vzdělávání | 26 400 |
| Repair večerů/rok | 80 |
| [odhad] odvrácený odpad (~1,5 kg/oprava) | ~1,4 t/rok |

**Pro JVTP:** technické vzdělávání + maker komunita = přímý soulad s misí vědeckotechnologického parku (talent pipeline, popularizace techniky).

---

## 6. Rozdělení kofinancování

**Východisko:** kofinancování ~4 mil. (= 50 % z ~8 mil.), dělené **MM ~3 mil. + JVTP ~1 mil.** (ideál: JVTP víc). Grant max 4 mil. Roční personál ~5,95 mil. = 97 % opexu a je **neuznatelný z grantu** → je přirozeným „rezervoárem" kofinancování. Materiál (~156k/rok) je skoro jediná velká uznatelná přímá položka.

> ⚠️ Tabulky níže pracují s **ročním (12měs)** provozem a s **redukovaným personálem** (cca odpovídá kratšímu pilotu / nižšímu úvazku) — viz upozornění v sekci 7, kde tabulky variant počítají s personálem ~2,8 mil., zatímco plný roční personál je 5,95 mil. Nájem/energie/capex jsou jen orientační placeholdery.

### VARIANTA A — role split (MM = lidé, JVTP = prostor + HW)

| Kategorie | MM | JVTP | Grant (orient.) |
|---|---:|---:|---:|
| Personál denní | 1 700 000 | 0 | 0 |
| Personál večerní | 1 100 000 | 0 | 0 |
| Materiál | 0 | 0 | 156 000 |
| Režie MM 15 % | 200 000 | 0 | ~487 000 |
| Nájem/prostor (in-kind) | 0 | 600 000 | 0 |
| Vybavení/HW | 0 | 400 000 | 0 |
| **Σ** | **~3,0 mil.** | **~1,0 mil.** | **~0,64 mil.** |

**Pro:** čisté oddělení rolí, personál pod jedním subjektem (jednoduchý audit). **Proti:** JVTP díl stojí na in-kind (riziko uznatelnosti); grant malý.

### VARIANTA B — JVTP utáhne víc (cíl ~2 mil.) — DOPORUČENO jako základ

| Kategorie | MM | JVTP | Grant (orient.) |
|---|---:|---:|---:|
| Personál denní | 1 800 000 | 0 | 0 |
| Personál večerní | 0 | 1 100 000 | 0 |
| Materiál | 0 | 0 | 156 000 |
| Režie MM 15 % | 200 000 | 0 | ~487 000 |
| Nájem/prostor | 0 | 500 000 | 0 |
| Vybavení/HW | 0 | 400 000 | 0 |
| **Σ** | **~2,0 mil.** | **~2,0 mil.** | **~0,64 mil.** |

**Pro:** vyrovnaný 50/50 vklad působí jako skutečné partnerství (lepší bodování); odlehčí MM. **Proti:** JVTP musí mít na večerní lektory úvazky/DPP a chuť administrovat → silnější závazek (Letter of Intent + rozpočtový commitment).

### VARIANTA C — grant-optimalizovaná (maximalizuj uznatelnou náplň grantu)

| Kategorie | MM | JVTP | Grant (orient.) |
|---|---:|---:|---:|
| Personál denní (mzdy) | 2 100 000 | 0 | 0 |
| Personál večerní (lektoři) | 0 | 700 000 | ? (viz pozn.) |
| Materiál + provozní služby | 0 | 0 | ~300 000 |
| Režie / nepřímé (cap ≤20 %) | 100 000 | 0 | ~700 000 |
| Nájem/prostor | 0 | 300 000 | ? (možná uznatelné) |
| **Σ** | **~2,2 mil.** | **~1,0 mil.** | **~1,8 mil.** (jen pokud projde překlopení) |

> ❓ **Klíčová otázka pro grantového specialistu:** lze večerní lektorné a nájem překlopit z „OON/mzda" na **uznatelnou službu** (externí fakturace místo DPP)? Pokud ano, grant uznatelně pokryje výrazně víc. Pokud ne, grant zůstane na ~materiál + nepřímé cap (<1 mil.).

### Srovnání variant

| | A (role split) | B (JVTP víc) | C (grant-optim.) |
|---|---|---|---|
| MM kofinancování | ~3,0 mil. | ~2,0 mil. | ~2,2 mil. |
| JVTP kofinancování | ~1,0 mil. | ~2,0 mil. | ~1,0 mil. |
| Uznatelné pro grant | ~0,6 mil. | ~0,6 mil. | ~1,8 mil. (pokud překlopení projde) |
| Hlavní riziko | in-kind JVTP | JVTP commitment | překlopení personál→služba |

**Doporučení (default):** pracovní základ = **B** (naplňuje Danovo „JVTP víc", silné partnerství), ale **paralelně prověřit C** s grantovým specialistou — dokud nevíme, zda má grant 4 mil. uznatelnou náplň, je rozdělení kofinancování jen půlka rovnice.

**Jak zvětšit JVTP díl:** (1) prostor/nájem in-kind, (2) vybavení/stroje jako vklad, (3) energie + správa budovy na straně vlastníka prostor, (4) část personálu (večerní lektoři/koordinace) přes JVTP úvazky.

---

## 7. ⚠️ Grantová rizika a strukturní napětí

> **Verdikt:** aritmetika uvnitř každého modelu sedí, ale **modely jako celek maskují strukturní rozpor**. Rámec „8 mil. / 12 měsíců / 4 mil. kofinancování" je vnitřně neslučitelný.

### 7.1 Rámec 8M / 12 měs / 4M kofinancování NEDRŽÍ pohromadě

- Roční opex vč. režie = **6 795 156 Kč**, a to **bez nájmu, energií, capexu**. Na ně zbývá z 8 mil. jen **1 204 844 Kč na celých 12 měsíců** — nereálné (sám nájem + energie low ≈ 720k/rok, na capex FabLabu zbytek nestačí).
- **Závěr:** 8 mil. ≠ 12 měsíců plného provozu, realisticky **~10–11 měsíců**. 18měsíční scénář (opex 10,2 mil.) se do 8 mil. **nevejde**.

### 7.2 Mzdy neuznatelné vs kofinancování 4 mil. (kvantifikace)

- Personál 12 měs = **5 952 000 Kč** > plánované kofinancování **4 000 000 Kč** o **1 952 000 Kč**.
- Mzdy/OON jsou grantově **neuznatelné** → celý personál musí do kofinancování. Kofinancování 4 mil. pokryje personál jen na **4 000 000 / 496 000 = 8,06 měsíce**.

**Tři páky, jak to narovnat:**
1. **Kratší pilot 6–8 měsíců** (8 × 496k = 3,97 mil. ≤ 4 mil. kofinancování) — pravděpodobně nejčistší cesta.
2. **Méně FTE** — měsíční personál ≤ 333k (místo 496k), tj. řez ~−33 % (např. 3 FTE místo 4).
3. **Víc kofinancování / víc JVTP / in-kind** — pak ale projekt celkem ≠ 8 mil., spíš ~10–12 mil., a grant se může posunout výš (POKUD má co uznatelného hradit — nemá, viz 7.3).

### 7.3 Grant 4 mil. nemá z čeho čerpat

- Uznatelné přímé ≈ jen materiál **156k/rok**. Nepřímé strop = 20 % výše podpory = max **800k**. → uznatelný strop ≈ **~0,95 mil.**, zbylé ~3 mil. grantu „naprázdno", dokud se personál/nájem nepřeklopí na uznatelnou službu (var. C, **neověřeno** v `ZAPIS-VYZVA.md`).
- **Binding constraint NENÍ strop 4 mil.**, ale **uznatelná náplň**.

### 7.4 Další grantové flagy

- **Neinvestiční rozpočet + ks > 80 000 Kč neuznatelný** → HW capex (3D/CNC/VR) z grantu nelze, je to investice → celý mimo grant. Kdo nese (MM/JVTP/jiný zdroj) NEROZHODNUTO.
- **Podpora ≤ 50 %** → grant ≤ kofinancování.
- **In-kind kofinancování** (prostor/stroje JVTP) — zda výzva in-kind uznává a v jaké výši, **NENÍ ověřeno**; var. A/B na něm stojí.
- **Cap přípravných nákladů 2027** — modely neřeší; při pilotu zasahujícím do 2027 ověřit v `ZAPIS-VYZVA.md`.

### 7.5 ⚠️ Nejvážnější nesrovnalost mezi modely

**Tabulky variant A/B/C počítají s ročním personálem jen ~2,8 mil.** (denní 1,7–2,1 + večerní 1,1), zatímco nákladový model říká personál = **5,95 mil./rok**. Rozdíl ~3,15 mil. → varianty implicitně počítají s ~6měsíčním pilotem (nebo nižším úvazkem), NE s plným 12měsíčním provozem. **Před použitím variant je nutné sjednotit dobu trvání a výši personálu.** (Drobnější: materiál uváděn 156k vs 160k; roční opex 6 795 156 vs zaokrouhlené 6 795 150.)

---

## 8. Otevřené otázky pro Dana

1. **Doba trvání pilotu — 6 / 12 / 18 měsíců?** Největší páka. Rozhoduje, zda se personál vejde do kofinancování (vejde se jen do ~8 měs) a zda se vejdeme do 8 mil.
2. **Nájem ~300 m² — reálné číslo?** Bez něj je celý rámec 8 mil. falešně optimistický (podhodnocení o ~0,5–1 mil./rok). Kdo nájem nese (MM/JVTP)?
3. **Energie prostoru** — odhad měsíčně? Nejspíš na straně JVTP (vlastník prostor).
4. **HW capex (3D/CNC/VR/nářadí) — kolik a kdy?** Investice mimo neinvestiční grant; ks > 80k neuznatelný. Kdo ho nese?
5. **Pojede dopolední školní provoz i o prázdninách** (červenec/srpen), nebo jen školní rok? Ovlivní efektivní počet týdnů.
6. **Vybírat od dětí?** (jednotná sazba / odstupňovat / zdarma financováno školou-grantem). Ovlivní výnos i bodování za dostupnost.
7. **Veřejnost zdarma + materiál** (doporučeno), nebo symbolický paušál? Máme z HW Labu tvrdá data o ochotě platit?
8. **Báze 15 % režie** — 75 % MM podíl (default) nebo 15 % z celého opexu? Roční rozdíl ~229k.
9. **Hlavní žadatel — MM nebo JVTP?** Ovlivní účtování personálu a režie.
10. **Reálný commitment JVTP** — utáhne ~2 mil. (var. B)? Potřeba Letter of Intent + rozpočtový závazek.
11. **Cílová metrika dopadu pro grant** — vykazovat unikátní osoby, nebo počet kontaktů/účastnických míst? (dle bodování výzvy)
12. **Pro grantového specialistu:** lze večerní lektorné a nájem překlopit z OON/mzdy na uznatelnou **službu** (externí fakturace)? To rozhoduje mezi var. C a malým grantem.

---

## 9. ✂️ Hotový blok pro One Pager — sekce 6 Rozpočet

> Vlož do One Pageru. Čísla jsou pracovní (volná modelace), zaokrouhlená; finální rozpočet po doplnění nájmu/energií/capexu a po konzultaci s grantovým specialistou.

**Rozpočet (pracovní model, doporučená varianta B — 12 měsíců, vyrovnané partnerství):**

| Kategorie | MM | JVTP | Grant | Σ |
|---|---:|---:|---:|---:|
| Personál (denní + večerní) | ~1,8 mil. | ~1,1 mil. | — | ~2,9 mil. |
| Materiál + provoz | — | — | ~0,16 mil. | ~0,16 mil. |
| Režie / nepřímé (≤20 %) | ~0,2 mil. | — | ~0,49 mil. | ~0,69 mil. |
| Nájem + prostor | — | ~0,5 mil. | — | ~0,5 mil. |
| Vybavení / HW | — | ~0,4 mil. | — | ~0,4 mil. |
| **Celkem** | **~2,0 mil.** | **~2,0 mil.** | **~0,64 mil.** | — |

Projekt je postaven na **partnerství Make more + JVTP** s vyrovnaným vkladem (~2 mil. : ~2 mil. kofinancování) a grantem do 4 mil. (50% strop velkého projektu). **Provozní páteří jsou náklady na personál** (lektoři denního školního programu i večerních workshopů), které tvoří ~97 % provozních nákladů. Protože mzdy a OON jsou z grantu **neuznatelné**, nesou je oba partneři jako kofinancování; grant je směrován na **uznatelné přímé náklady** (materiál, provozní služby) a nepřímé náklady v rámci 20% stropu. **Vybavení a prostor** zajišťuje JVTP (částečně formou věcného vkladu). Délka zkušebního provozu a přesné rozdělení se finalizují po doplnění nákladů na nájem, energie a pořízení strojů.

> ⚠️ **Poznámka pro tým (nevkládat do One Pageru):** tabulka výše počítá s personálem ~2,9 mil., což odpovídá spíš **~6měsíčnímu pilotu** než 12 měsícům (plný roční personál = 5,95 mil.). Před finalizací sjednotit dobu trvání s výší personálu a kofinancování — viz sekce 7.