# Stav projektu — živá paměť

> Sdílená paměť týmu. Sem zapisujte rozhodnutí a aktuální stav, ať to oba vidí. Aktualizujte
> po každém větším kroku. (Detaily podmínek = `../ZAPIS-VYZVA.md`, úkoly = `../UKOLY.md`.)

> [!CAUTION]
> **ROZPOČTOVÁ ČÍSLA A MODELACE = NESCHVÁLENÝ DRAFT.** Dan je k 22. 6. 2026 nepročetl ani
> neschválil. Vše v `../strategie/rozpocet-*.md`, `../strategie/one-pager-jvtp.md` a rozpočtová
> čísla níže jsou nástřely k diskusi — **nepoužívat v grantové žádosti bez explicitního
> schválení.** Předání práce a další kroky viz `../HANDOFF.md`.

**Poslední aktualizace:** 30. 6. 2026 (schůzka k rozpočtu/aktivitám makerspace — viz `../schuzky/2026-06-30-makerspace-rozpocet-zapis.md`)

## ▶ Kde pokračovat (finální sprint do 10. 7. — po schůzce 30. 6.)

- **🔴 Rozpočet pod 3,5 mil. Kč** — agregát aktivit/vybavení je nyní ~4,5 mil., nad limitem. Určit škrty + optimalizace (zápůjčka/pronájem vybavení Design Labu místo nákupu). Vlastní **Dan**.
- **🔴 Letter of Intent zahr. partnera do 5. 7.** — kontakty navázány (Grand Garage Linz + Kunstuniversität Linz); Ars Electronica se neoslovuje. Doplnit do rozpočtu práci partnera 2028.
- **Ondřej dostupný jen tento týden, od 6. 7. omezen** → na finalizaci zapojit kolegyni **Lucii**.
- **Vyjasnit:** fin. toky a partnerská smlouva (lead vs realizátor, fakturace; kontakt Anička); režijní/nepřímé náklady a spolufinancování (kontakt Petr Pežinka); **název projektu** (pro LoI).
- **Prostor:** schůzka s Výstavištěm (týden od 29. 6.); alternativy Žižkárna aj.

## ▶ Kde pokračovat (původní)
- **HOŘÍ — One Pager pro JVTP (handout ke schůzce s ředitelem JVTP).** Termín **23. 6. dopo**.
  Kostra: `../strategie/one-pager-jvtp.md`. Chybí: vložit doporučený rozpočet (3 mil. blok
  z `../strategie/rozpocet-3M-co-odbavime.md`, sekce 7 dokumentu) do sekce 6 + Ondřejův text
  (sekce 1–3, 5). Viz úkoly A–C v `../UKOLY.md`.
- **Rozhodnout sestavu FabLabu:** doporučeno **ŠKOLNÍ ROK** (294k/měs, 10,2 měs, ~5 100 dětí)
  vs STŘEDNÍ. Pak lze pustit iteraci 3 modelace. Otevřené: mix večerů, vlastní výnos
  100–200/dítě, **in-kind příslib nájmu + vybavení od JVTP** (bez něj se pilot zkrátí).
- **Trvá blocker:** zahraniční partner + Letter of Intent (síť JVTP nestačí). Termín 10. 7.
- **Plaud login** drží jen v rámci session — v nové session případně znovu „Log me into Plaud".
  Transkripty děláme lokálně (mlx-whisper) a porovnáváme s Plaud (viz user memory).

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
| Velikost projektu | ✅ **VELKÝ** | grant max 4 mil. Kč, celkový rozpočet 8 mil., spolufinancování 50 % |
| Hlavní žadatel | ✅ **JVTP** | potvrzeno Petrem Pežinkou (24. 6.) — MM je realizační partner, fakturace OK |
| MM v JčK | ✅ splněno | pobočka Make More v ČB zapsána v rejstříku 23. 6. |
| Jihočeský partner | ✅ **JVTP** | Jana Moravcová; ředitel potvrdil ochotu |
| Zahraniční partner | 🟡 **kontakty navázány** | Grand Garage Linz + Kunstuniversität Linz (možné LoI, schůzky 2027). Ars Electronica se neoslovuje. Termín LoI 5. 7. |
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
- 30. 6. 2026 — **Schůzka k rozpočtu a aktivitám makerspace** (Dan, Ondřej, partner Design Lab,
  krátce Lucie). Zápis: `../schuzky/2026-06-30-makerspace-rozpocet-zapis.md`, přepis Plaud
  `…-prepis-plaud.md` (file_id `6f07280d482787f65b124f1d958dcb3b`). Závěry: koncept komunitní
  makerspace platforma (dopoledne školy „Popovův Blob", odpoledne/večer veřejnost); agregát
  rozpočtu ~4,5 mil. **nad limitem 3,5 mil.** → nutné škrty (Dan); zahr. partneři Grand Garage +
  Kunstuniversität Linz (LoI), Ars Electronica se neoslovuje; rozdělení práce Ondřej obsah / Dan
  finance / Lucie finalizace; prostor Výstaviště/Žižkárna. ⚠️ Všechna čísla NESCHVÁLENÝ DRAFT.
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
  `../strategie/rozpocet-model-fablab.md` (plný model) + `../strategie/rozpocet-3M-co-odbavime.md`
  (strop 3 mil. cash). Doporučená sestava **ŠKOLNÍ ROK**: ~294k/měs → 10,2 měs provozu,
  ~5 100 unikátních dětí, 530 oprav. ⚠️ Celoročnost závisí na **in-kind nájmu + vybavení od
  JVTP** (bez písemného příslibu se pilot zkrátí na ~7–8 měs). K rozhodnutí: sestava, mix
  večerů, vlastní výnos 100–200/dítě.
