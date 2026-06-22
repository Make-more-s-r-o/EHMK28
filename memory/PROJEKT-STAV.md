# Stav projektu — živá paměť

> Sdílená paměť týmu. Sem zapisujte rozhodnutí a aktuální stav, ať to oba vidí. Aktualizujte
> po každém větším kroku. (Detaily podmínek = `../ZAPIS-VYZVA.md`, úkoly = `../UKOLY.md`.)

> [!CAUTION]
> **ROZPOČTOVÁ ČÍSLA A MODELACE = NESCHVÁLENÝ DRAFT.** Dan je k 22. 6. 2026 nepročetl ani
> neschválil. Vše v `../strategie/rozpocet-*.md`, `../strategie/one-pager-jvtp.md` a rozpočtová
> čísla níže jsou nástřely k diskusi — **nepoužívat v grantové žádosti bez explicitního
> schválení.** Předání práce a další kroky viz `../HANDOFF.md`.

**Poslední aktualizace:** 22. 6. 2026 (schůzka s Ondřejem — směr JVTP / pop-up FabLab, dvojí podání)

## ▶ Kde pokračovat (příští session)
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
- **Tým:** Dan, Ondřej (spolupráce přes GitHub `Make-more-s-r-o/EHMK28`).

## Rozhodnutí (zatím otevřená)
| Otázka | Stav | Pozn. |
|---|---|---|
| Velikost projektu (malý/velký) | 🟡 směřuje k DVOJÍMU podání | malý (Maker Faire ČB, MM hlavní) **+** velký (pop-up FabLab s JVTP); priorita velký |
| Žadatel (právnická osoba) | ❓ neurčen | u velkého projektu hlavní žadatel JVTP vs Make more **nerozhodnuto** (vyjasní schůzka s ředitelem JVTP) |
| Zahraniční partner | 🔴 nezajištěn | povinný + Letter of Intent. ⚠️ napojení na mezinárodní síť JVTP **NEstačí** — blocker trvá |
| Jihočeský partner | 🟢 JVTP | Jihočeský vědeckotechnologický park = jihočeský partner velkého projektu |
| Koncept / téma / žánr | 🟡 pop-up FabLab | zkušební provoz dílny (dopo třídy / odpo–večer veřejnost, repair); ref. HW Lab Praha |

## Pravidla práce (připomínka)
- Obsah česky, git commit messages anglicky.
- Před prací „stáhni nejnovější verzi", po práci „nahraj moje změny".
- Před multi-agent/ultracode workflow se zeptat na model (Ondřej šetří → Sonnet).
- Agenti: `grantovy-specialista` (obsah+rozpočet+pravidla), `vedouci-projektu` (plán+partneři).

## Log rozhodnutí
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
