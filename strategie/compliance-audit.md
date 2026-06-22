# Compliance audit — (Perma)kulturní Open Call 2026

> **Datum auditu:** 22. 6. 2026
> **Předmět:** věrnost a úplnost dokumentace v repu (`ZAPIS-VYZVA.md`, `zadost/*`,
> `strategie/*`, agenti) vůči zdroji pravdy — PDF výzvy
> `podklady/9680-…-vyzvy-2.pdf` (verze 15. 5. 2026) a formuláři
> `podklady/8916-…-formular-popis-projektu.xlsx`.
> **Vedoucí auditu:** konsolidace 5 nezávislých dimenzí (termíny, eligibilita, rozpočet,
> hodnocení, přílohy) + completeness check formuláře a kapitol výzvy.

## Shrnutí (počty nálezů)

| Severita | Počet |
|---|---|
| 🔴 blocker | 1 |
| 🟠 warning | 4 |
| 🔵 info | 7 |
| **Celkem** | **12** |

Po deduplikaci (sloučen nález o „18. 5. 2026“ a o registračním formuláři napříč dimenzemi).
**Completeness:** formulář (XLSX) je pokryt beze zbytku — všechny 4 listy (PODROBNÝ POPIS,
PROJEKTOVÝ PLÁN, ROZPOČET 2027, ROZPOČET 2028) i všechny sekce listu PODROBNÝ POPIS včetně
financí (zdroje spolufinancování 1–3, soukromé financování/vstupné, EU zdroje) mají
odpovídající draft v `zadost/`. Jediná chybějící část kapitoly výzvy → viz nález C-1
(mechanismus financování 2028 přes MK ČR).

## Tabulka nálezů

| Severita | Dimenze | Soubor | Problém | Navržená oprava |
|---|---|---|---|---|
| 🔴 blocker | Rozpočet | `zadost/04-rozpocet-2027.md` (ř. 7, 33) | Cap 2027 (400k/800k) je v souboru vztažen na **podíl ČB28**, ale PDF (kap. 7, ř. 360–361) kapuje **částku vyčleněnou na přípravu 2027 = celý rozpočet přípravné fáze**. Při čtení textu výzvy může být plán s celkovou přípravou 2027 nad limit vyřazen i při nižším podílu ČB28; opačně hrozí nadhodnocení přípravy nad strop. | Cap vztáhnout na sloupec **„Celkem 2027“** (ne jen „Z toho ČB28“). Ř. 7 přeformulovat: „Rozpočet přípravy 2027 (celkem): max 400k (malý)/800k (velký)“. Doporučeno limit dodržet u OBOU čísel; výklad „jen ČB28“ ověřit u organizátora (opencall@budejovice2028.cz) a poznámku zapsat. |
| 🟠 warning | Eligibilita | `ZAPIS-VYZVA.md` (ř. 33–34), `strategie/partneri.md` (ř. 3–4, 17) | Podmínka jihočeského partnera oslabena. Závazná kap. 4 PDF (ř. 292–293) zní: „musí mít **hlavní** partner projektu sídlo/pobočku v JčK“. Soubory uvádějí jen „jihočeský partner / partner z JčK“ bez „hlavní“ → tým by mohl mylně splnit podmínku vedlejším JčK partnerem. | Upřesnit: „Pokud žadatel nemá sídlo/pobočku v JčK, musí ho mít **HLAVNÍ** partner (kap. 4) — nestačí libovolný/vedlejší jihočeský partner.“ Sjednotit s `zadost/00-zakladni-info.md`, který už používá „Hlavní jihočeský partner“. |
| 🟠 warning | Rozpočet | `zadost/02-prurezove-marketing.md` (ř. 41) | Stejné zavádějící navázání capu 2027 na podíl ČB28 jako u blockeru. Vzniká interní nekonzistence: `ZAPIS-VYZVA.md` ř. 63 má správné neutrální „Max. na přípravu 2027 | 400 000 | 800 000“, tento soubor a `04-rozpocet-2027.md` váží cap na ČB28. | Sjednotit napříč soubory: cap přesunout k „Rozpočet na jednotlivé roky → 2027“, nebo formulaci u podílu ČB28 zneutralizovat. Použít znění jako v `ZAPIS-VYZVA.md` (cap = limit prostředků na přípravu 2027). |
| 🟠 warning | Rozpočet | `zadost/04-rozpocet-2027.md` (ř. 10) | „Nepřímé náklady max 20 % podpory“ v kontextu jednoho roku svádí k počítání 20 % zvlášť za 2027. PDF (kap. 8) počítá 20 % z **celkové výše podpory za 2027+2028 dohromady** (kap. 7). Riziko překročení/podhodnocení stropu v součtu. | Doplnit: „Nepřímé náklady max 20 % z **celkové** podpory ČB28 (2027+2028 dohromady).“ Zkontrolovat i `05-rozpocet-2028.md` ř. 9 a sjednotit znění. |
| 🟠 warning | Hodnocení | `.claude/agents/grantovy-specialista.md` (ř. 34–39) | Bodová rubrika shrnuje blok 0–50 jediným řádkem a **vynechává dílčí rozpad** (kvalita+inovace 0–15, zpracování (Perma)kultury 0–10, velikost+dopad 0–10, preferovaný žánr 0–15), který PDF (kap. 11) explicitně stanoví. Pro agenta s rolí „bodová strategie“ jde o nejdůležitější chybějící info; z názvu kritéria vypadla „inovace“ a „soulad s tématy/cíli ČB28“. Čísla (0–50, součet 100) jsou správná. | Doplnit dílčí body bloku 0–50 dle PDF a sjednotit s plným zněním v `ZAPIS-VYZVA.md` (ř. 89). |
| 🔵 info | Completeness | `ZAPIS-VYZVA.md` | **(C-1)** Mechanismus financování 2028 (PDF kap. 13, ř. 517–526) v repu chybí: 2028 hradí přímo organizátor **nebo** MK ČR na základě formální žádosti podávané **v listopadu** každého roku, prostředky převedeny **leden/únor** následujícího roku. ZAPIS zmiňuje jen „reporting vůči MK ČR“. Post-award, ale ovlivňuje cash-flow očekávání žadatele. | Do „Co následuje po podpoře“ doplnit větu o financování 2028 přes MK ČR (žádost 11/, převod 1–2/) a o tom, že rozpočet 2028 se dopracovává v polovině 2027. |
| 🔵 info | Termíny | `ZAPIS-VYZVA.md` (ř. 113, 127) | Termín Projektové posilovny: PDF si **sám protiřečí** — tabulka (ř. 330) uvádí „2/2027 – 05/2027“, text kap. 3 (ř. 278–279) „cca 64 hodin od února do **dubna** 2027“. Soubory převzaly verzi z tabulky (2–5) a vynechávají rozsah ~64 h, podstatný pro plánování kapacity. | Doplnit rozsah ~64 h a zaznamenat rozpor: „Projektová posilovna — cca 64 h; PDF nekonzistentní: tabulka 2–5/2027 vs. text únor–duben 2027. Před spoléháním ověřit s organizátorem.“ |
| 🔵 info | Termíny | `ZAPIS-VYZVA.md` (ř. 119–129) | Harmonogramová tabulka je neúplná oproti PDF kap. 5: chybí dva oficiální online semináře — „O EHMK 2028…“ (26. 3. 2026, 13:00–16:00) a „Q&A for international organisations“ (17. 4. 2026, 14:00–16:00) — a matchmaking (přelom V/VI 2026; tabulka partnerů do 30. 4. 2026). V souboru jen útržkovitě v textu, ne v tabulce. | Doplnit chybějící řádky do harmonogramové tabulky přesně dle PDF kap. 5, ať je úplná a auditovatelná. |
| 🔵 info | Eligibilita | `ZAPIS-VYZVA.md` (sekce 🔴, ř. 30–36) | Odeslaný **registrační formulář** je v PDF tvrdou součástí podání (kap. 9, ř. 400–402: „zároveň odesláním registračního formuláře“; kap. 10 příloha č. 5), ale v sekci „🔴 Tvrdé podmínky“ chybí — uveden jen v přílohách a v „Jak se podává“. | Do „🔴 Tvrdé podmínky“ doplnit bod: podání vyžaduje **současně** e-mail s přílohami **a** odeslaný registrační formulář — bez něj je podání neúplné. |
| 🔵 info | Přílohy | `zadost/prilohy.md` (ř. 11) | U přílohy č. 5 poznámka „samostatný **online** formulář“. PDF u registračního formuláře slovo „online“ **neuvádí** ani neuvádí kanál/URL/formát — je to doplněná domněnka. Reálná otevřená otázka: kde/jak se formulář odesílá. | Přeformulovat na ověřitelný stav: „registrační formulář — výzva neuvádí odkaz ani kanál; před podáním dohledat na budejovice2028.eu/open-call“. Nepsat „online“ jako fakt. |
| 🔵 info | Přílohy/Termíny | `ZAPIS-VYZVA.md` (ř. 10–12) | Konkurenční datum „**18. 5. 2026**“ se v PDF nikde nevyskytuje (PDF zná 13. 3., 26. 3., 17. 4., 28. 5., 10. 7., …). Tvrzení o webu, ne rozpor s výzvou, ale jako „zdroj pravdy“ neověřitelné a matoucí. Samotná uzávěrka 10. 7. 2026 (23:59 CET) je uvedena správně. | Buď doložit zdroj (screenshot/URL), nebo zkrátit na „web krátce zobrazoval odlišný termín; platí oficiální PDF: 10. 7. 2026“ bez konkrétního neověřeného data. |
| 🔵 info | Rozpočet | `strategie/rozhodnuti-maly-vs-velky.md` (ř. 12, 19) | Hlavička „Max. podpora na přípravu 2027“ nese implikaci, že cap je o podpoře ČB28, kdežto PDF mluví o „vyčleněné částce na přípravu“ (souvisí s blockerem). Navíc překlep „dopam“ → „dopad“ na ř. 19. | Sjednotit terminologii na „Max. rozpočet přípravy 2027“. Opravit překlep „dopam“ → „dopad“. |

## Závěr

**Je dokumentace věrná a kompletní?**
Z velké části **ANO**. Dokumentace v repu je vůči zdroji pravdy věcně přesná a — co do
rozsahu — **kompletní**: pokrývá všechny tvrdé podmínky, finanční limity, hodnoticí rubriku
(včetně dílčích bodů v `ZAPIS-VYZVA.md`), všech 5 povinných příloh, způsob i termín podání a
**všechny sekce formuláře** (4 listy XLSX beze zbytku). Žádná povinná část výzvy ani sekce
formuláře nechybí; jediná nezachycená kapitola je popisný mechanismus financování 2028 přes
MK ČR (info, post-award).

Nalezen je **1 blocker** a **4 warnings**, žádný z nich není faktická chyba v číslech —
jde o **interpretační/konzistenční riziko** (zejména výklad capu na rok 2027) a o oslabení
formulace tvrdé podmínky (jihočeský **hlavní** partner). Zbytek jsou drobnosti úrovně info.

**Co opravit přednostně (pořadí):**
1. 🔴 **Cap 2027 (blocker)** — sjednotit výklad: limit 400k/800k vztáhnout na **celkový
   rozpočet přípravy 2027** (ne jen podíl ČB28) ve `04-rozpocet-2027.md` a `02-prurezove-marketing.md`.
   Doporučeno limit dodržet u obou čísel; jinak ověřit výklad u organizátora. **Money-path → nejvyšší priorita.**
2. 🟠 **Jihočeský „hlavní“ partner** — doplnit kvalifikátor „hlavní“ do `ZAPIS-VYZVA.md` a
   `partneri.md` (riziko vyřazení v eligibilitě).
3. 🟠 **Nepřímé náklady 20 %** — explicitně „z celkové podpory 2027+2028 dohromady“.
4. 🟠 **Rubrika agenta** — doplnit dílčí rozpad bloku 0–50 do `grantovy-specialista.md`.
5. 🔵 **Info nálezy** — doplnit při příští editaci (harmonogram, registrační formulář v 🔴
   sekci, posilovna ~64 h + rozpor, financování 2028, „18. 5.“, „online“ formulář, překlep „dopam“).

**Verdikt:** Dokumentace je solidní a použitelná jako zdroj pravdy pro tým. Před finálním
sestavením rozpočtu je ale **nutné vyřešit blocker (cap 2027)** a warning o jihočeském
hlavním partnerovi — obojí může v krajním výkladu vést k vyřazení žádosti.

## Stav oprav (22. 6. 2026)

Všech 12 nálezů zapracováno do dokumentace:
- 🔴 **Blocker (cap 2027)** — `04-rozpocet-2027.md` i `02-prurezove-marketing.md`
  přeformulovány: limit 400k/800k = rozpočet přípravy 2027; doporučeno držet pod limitem
  celkem i podíl ČB28, výklad před finálním rozpočtem ověřit u organizátora.
- 🟠 **Jihočeský HLAVNÍ partner** — upřesněno v `ZAPIS-VYZVA.md` (tvrdé podmínky).
- 🟠 **Nepřímé 20 %** — doplněno „z celkové podpory 2027+2028" v obou rozpočtech.
- 🟠 **Rubrika agenta** — dílčí rozpad bloku 0–50 doplněn do `grantovy-specialista.md`.
- 🔵 **Info** — harmonogram (semináře 26. 3./17. 4., matchmaking), registrační formulář
  v tvrdých podmínkách, posilovna ~64 h + rozpor, financování 2028 přes MK ČR, změkčeno
  „18. 5.", oprava „online" u registračního formuláře, překlep „dopam"→„dopad".

> Otevřená věcná otázka pro tým (ne chyba dokumentace): **výklad capu 2027** — bez kontaktu
> organizátora (maily teď nepíšeme) je nejbezpečnější držet pod limitem celkový rozpočet
> přípravy 2027 i podíl ČB28.

---
*Audit konsolidoval nálezy 5 dimenzí + completeness check. Zdroj pravdy:
`podklady/9680-…-vyzvy-2.pdf` a `podklady/8916-…-formular-popis-projektu.xlsx`.*
