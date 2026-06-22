# HANDOFF — předání práce

> Krátký předávací vzkaz mezi Danem a Ondřejem. **Aktualizuj na konci své práce** (co je
> hotové / rozpracované / neschválené + další krok), ať druhý plynule naváže. Na začátku práce
> tenhle soubor přečti. (Pravidlo viz `AGENTS.md`, sekce „Jak spolupracujeme přes GitHub".)

---

## Stav k 22. 6. 2026 (předává: Dan)

### ⚠️ Hlavní vzkaz pro Ondřeje
**Všechno, co dnes přibylo, je rozpracovaný DRAFT — Dan to nestihl pročíst a schválit.**
Týká se to **hlavně rozpočtových čísel**. Prosím:
- Čísla v `strategie/` a v zápisu ber jako **nástřely k diskusi**, ne jako hotová.
- **Nedávej je do oficiální žádosti** bez Danova explicitního schválení.
- Klidně pracuj na **textových/koncepčních** částech (One Pager — příběh, popis projektu), ale
  u čísel počkej na Dana / se ho doptej.

### Co je hotové (ale NESCHVÁLENÉ)
- `schuzky/2026-06-22-*` — zápis schůzky + dva přepisy (lokální mlx-whisper + Plaud) + porovnání.
- `strategie/rozpocet-model-fablab.md` — plný kapacitní/nákladový model FabLabu (2 ultracode iterace).
- `strategie/rozpocet-3M-co-odbavime.md` — model na **3 mil. cash**; doporučená sestava **ŠKOLNÍ ROK**
  (~294k/měs, 10,2 měs, ~5 100 unik. dětí, 530 oprav). Vše DRAFT.
- `strategie/one-pager-jvtp.md` — **kostra** One Pageru pro JVTP; rozpočet (sekce 6) je placeholder.

### Co je rozpracované
- **Živá nástěnka README + generátor** (`tools/generate-dashboard.mjs`, `.github/workflows/dashboard.yml`)
  — přidala druhá session, ještě se dolaďuje. Org **nepovoluje workflow zápis** → nástěnku je
  nutné **přegenerovat lokálně před commitem** (`node tools/generate-dashboard.mjs`); Action ji po
  pushi jen zkontroluje.

### Nejbližší kroky (priorita)
1. ⏰ **One Pager pro JVTP** (handout ke schůzce s ředitelem JVTP) — **termín 23. 6. dopo**.
   Vložit doporučený rozpočet (3 mil., sestava ŠKOLNÍ ROK) do sekce 6 + Ondřejův text (sekce 1–3, 5).
2. **Rozhodnout sestavu FabLabu** (ŠKOLNÍ ROK vs STŘEDNÍ) → pak iterace 3 modelace.
3. Otevřené otázky pro Dana: mix večerů, vlastní výnos 100–200/dítě, **in-kind příslib nájmu +
   vybavení od JVTP** (bez něj se pilot zkrátí).
4. Trvá **blocker:** zahraniční partner + Letter of Intent (napojení na síť JVTP nestačí). Termín 10. 7.

> Detailní stav a „kde pokračovat" → `memory/PROJEKT-STAV.md`. Úkoly → `UKOLY.md`.
