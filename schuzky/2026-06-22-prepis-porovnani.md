# Porovnání přepisů schůzky 2026-06-22 (lokální mlx-whisper vs. Plaud AI)

- **Schůzka:** Dan + Ondřej Kašpárek, 2026-06-22, ~65 min, téma EHMK Open Call / One Pager pro JVTP / pop-up FabLab
- **Lokální:** `schuzky/2026-06-22-ondra-prepis-lokalni.md` — mlx-whisper, model large-v3, 1434 segmentů
- **Plaud:** `schuzky/2026-06-22-ondra-prepis-plaud.md` — Plaud AI (cloud), JSON s 196 segmenty + outline + speaker labels

---

## 1) Přesnost přepisu češtiny

Oba přepisy jsou silně chybové (špatná akustika, překřikování, technický žargon).
Smysl jádra (financování, role, dělba práce) je dohledatelný v obou, ale **ani jeden
není použitelný „as-is"** — vyžaduje ruční redakci.

**Lokální — kritická vada: halucinace a opakování ve fázích ticha/šumu.** Z 1434 segmentů
je ~600 prázdných a ~80 jen tečky. V pasážích s hudbou/tichem generuje nekonečné smyčky:
- `[00:25:15] Takže to mám ať bridu a senem a senem a senem… (×80)`
- `[00:32:28]–[00:33:04] Tak to je. Tak to je. Tak to je… (×37 řádků)`
- `[00:18:29]–[00:18:41] Takže… Takže… Takže… (×13)`
- `[00:45:05]–[00:48:23] Děkujeme. Děkujeme. Děkujeme…` a `Titulky vytvořil JohnyX.` (halucinace z YouTube dat)

**Plaud — čistší segmentace, bez smyček.** Stejná pasáž je jeden řádek:
`[18:53] Speaker 1: To mělo celá dvě lidi… Já jsem v Japonsku…`. Plaud ticho neproškrtává
nesmyslnou výplní; segmenty drží smysl celé věty.

**Příklad stejné věty (úvod):**
- Lokální: `Máme tady souzku k dotaci na e-homego s Ondrou Kašpárkem, já jsem Dan.`
- Plaud: `Máme tady svůj skup dotací na EMGO s Ondrou Kašpárkem, já jsem Dan.`
→ Obě komolí „schůzku ke grantu/dotaci na EHMK", obě správně „Ondrou Kašpárkem" a „Dan".

## 2) Klíčové termíny, jména, částky

| Pojem | Lokální | Plaud | Skutečnost |
|---|---|---|---|
| EHMK | „e-homego", „e-mobilkeru", „eMLK" | „EMGO", „EML-ko", „E‑MLK", „e-mlk" | EHMK / e-homego ani jeden netrefil |
| JVTP | „v TP", „VTP", „JVTP", „BTP" | „TP", „JVTP", „WTP" | obě kolísají, **obě někdy uvedou JVTP** |
| One Pager | „one pager" ✓ | „one pager" ✓ | obě OK |
| Maker Faire / FabLab | „Maker Faire", „making fairy", „making fairy platforma" | „Maker Faire", „McIffers", „make a fly", „make-up" | FabLab nepadl explicitně; obě komolí Maker Faire |
| Dan / Ondřej | „Dan" ✓, „Ondrou Kašpárkem" ✓, „Ondrej … Pomečka Kasperek" | „Dan" ✓, „Ondrou Kašpárkem" ✓, „Ondrej Pomeška Kasperek" | obě OK na křestní; příjmení komolí „Pomeška" (nejspíš druhé jméno) |
| Vojta | „Vojtou" ✓, „Vojta poznámka" ✓ | „Vojtou" ✓, „Vojta poznámkou" ✓ | obě OK |
| **Částky** | **1,5 mil. ✓, 4 mil. ✓, 8 mil. ✓, 700/750 tis. ✓, 70/30 % ✓, 50 % ✓, 3 mil. ✓** | jen „jeden a půl milionu", „čtyřech", „3", „2,5" — **čísla rozházená do slov, kontext slabší** | viz zápis |

**Důležité — čísla.** Lokální v klíčové rozpočtové pasáži `[00:06:12]–[00:06:29]` dává čísla
přesněji a kompaktněji:
> Lokální: *„maximální výše podpory do 1,5 milionů, minimum 750 … 70% financování, 30% cofinance.
> Pak je velký projekt. Tam je maximální výše podpory 4 miliony s 50% … takže musí dělat projekt
> za 8 milionů."*

> Plaud: *„maximální výše podpory do 1,5 milionů. Minimum 700 pady. A je tam 70% financování,
> 30% cofinance. … maximální výše podpory 4 miliony. S 50% tím, takže musím dělat projekt za 8 milionů."*

→ Zde jsou **prakticky shodné a oba správné** (lokální „750", Plaud „700 pady" = 700+50).
U „3 miliony / půl milionu na nájem / 200 aktivit pro třídy" (`[00:17:11]` lok. / `[17:08]` Plaud)
jsou opět **oba čitelné a souhlasné**.

## 3) Speaker attribution (Dan vs. Ondřej)

- **Plaud: ANO** — rozlišuje „Speaker 1" … „Speaker 7". Bohužel **přeskakuje** (jeden řečník
  dostane víc labelů; objevují se Speaker 3–7 i tam, kde mluví jen dva lidi), takže labely
  nejsou spolehlivě = Dan/Ondřej. Přesto dávají hrubou orientaci, kdo začal repliku.
- **Lokální: NE** — žádná diarizace, jen souvislý proud bez označení mluvčího.

→ V tomto bodě **Plaud jasně vyhrává**, byť attribution je třeba ručně dočistit.

## 4) Segmentace, timestampy, čitelnost

- **Lokální:** velmi jemná segmentace (po ~1–6 s), timestampy `HH:MM:SS – HH:MM:SS`.
  Nevýhoda: roztříštěnost + stovky prázdných řádků dělají soubor nepřehledným.
- **Plaud:** segmentace po větách/replikách, čas v ms (přepočet na MM:SS), navíc **outline
  s 60 tematickými bloky** (`[00:09-00:43] One‑pager pro JVTP`, `[06:57-08:01] Maker Faire
  rozpočet a de minimis`, …). Outline je samostatně cenný jako kostra zápisu.
- **Čitelnost celkově: Plaud výrazně lepší** (kompaktní, tematický index, bez smyček).

## 5) Úplnost

- Obsahově **pokrývají totéž jádro** (financování, role hlavní/partner, dělba Dan/Ondřej,
  one pager, druhá půlka = onboarding GitHub/Claude Code).
- **Lokální vynechává / rozbíjí** dlouhé pasáže do prázdna a smyček — fakticky tam mizí obsah
  (např. `[00:02:25]` desítky prázdných řádků, `[00:21:15]–[00:24:09]` jen „Konec. Konec.").
- **Plaud drží spojitější tok** a v těchto místech má reálný (byť chybový) text — tedy
  **méně ztraceného obsahu**.

---

## Souhrn: silné a slabé stránky

| Kritérium | Lokální (mlx-whisper) | Plaud AI |
|---|---|---|
| Smysl češtiny | srovnatelně chybové | srovnatelně chybové |
| Halucinace/smyčky v tichu | **velký problém** (~600 prázdných, smyčky) | minimální |
| Čísla/částky | dobré, kompaktní (1,5/4/8 mil, 70/30) | dobré, ale rozházenější |
| Klíčové termíny (EHMK, JVTP) | komolí | komolí (mírně lépe „JVTP") |
| Jména (Dan, Ondřej, Vojta) | OK | OK |
| **Speaker attribution** | **chybí** | **má (nedokonalé)** |
| Segmentace / čitelnost | tříštivá, zaplevelená | **přehledná + outline** |
| Úplnost | ztrácí obsah ve smyčkách | **spojitější** |
| Práce navíc před použitím | velká (mazat smyčky + ručně dělit mluvčí) | střední (čistit labely a překlepy) |

## Doporučení

**Jako základ použít Plaud AI přepis.** Důvody: (1) má speaker attribution, (2) má hotový
tematický outline, který je rovnou kostrou zápisu, (3) nemá halucinační smyčky a ztrácí
méně obsahu, (4) je čitelnější. Lokální přepis **držet jen jako kontrolu čísel** — v rozpočtové
pasáži je o něco kompaktnější a potvrzuje částky (1,5 / 4 / 8 mil., 70/30 %, 50 %, 700–750 tis.).

**Ladit lokální mlx-whisper se zatím nevyplatí** pro tento typ záznamu: hlavní vada nejsou
překlepy (ty má i Plaud), ale **halucinace v tichu/hudbě a chybějící diarizace**. To by
vyžadovalo VAD (ořez ticha) + samostatnou diarizaci (pyannote) — víc práce, než kolik
ušetří. Pro rychlý zápis je Plaud efektivnější; lokál má smysl jen tam, kde nesmí data
do cloudu.
