# Grant — společné psaní

Tohle repo slouží k tomu, abychom grant psali **ve dvou, každý ve svém Claude Code**.
Sdílíme jednu složku přes GitHub. Nemusíš umět git — všechno za tebe udělá tvůj Claude,
stačí mu říct lidsky, co chceš.

## Jak začít (jednorázově)

Řekni svému Claude Code:

> „Naklonuj mi tohle repo do složky na disku: `<URL_REPA>` a od teď v něm budeme psát grant."

(URL repa ti pošlu — vypadá jako `https://github.com/<ucet>/<repo>.git`.)

## Každodenní práce

**Než začneš psát**, řekni Claudovi:

> „Stáhni nejnovější verzi grantu." *(Claude udělá `git pull`)*

**Když dopíšeš** svoji část:

> „Nahraj moje změny, ať je vidí kolega." *(Claude udělá `git add` + `commit` + `push`)*

To je celé. Claude se postará o commit zprávy i případné slučování.

## Pravidlo proti konfliktům

Grant je **rozsekaný na samostatné soubory podle kapitol** (viz níže). Abychom si
navzájem nepřepisovali text:

- **Domluvme se, kdo dělá kterou kapitolu**, a needitujme stejný soubor naráz.
- Když přesto potřebuješ sáhnout do „cizí" kapitoly, nejdřív si stáhni nejnovější verzi
  a kolegovi to řekni.

## Struktura

| Soubor | Obsah |
|--------|-------|
| `00-prehled.md` | Základní info o žádosti (program, výzva, termíny, žadatel) |
| `01-cile.md` | Cíle projektu, co chceme dokázat |
| `02-zduvodneni.md` | Zdůvodnění / motivace — proč je projekt potřeba |
| `03-reseni.md` | Náš přístup, metodika, jak to uděláme |
| `04-harmonogram.md` | Harmonogram, milníky, fáze |
| `05-rozpocet.md` | Rozpočet a jeho zdůvodnění |
| `06-tym.md` | Tým, role, kompetence |
| `07-dopady.md` | Očekávané výstupy, dopady, udržitelnost |
| `08-rizika.md` | Rizika a jejich ošetření |
| `09-prilohy.md` | Přílohy, reference, odkazy |

> Strukturu klidně upravíme podle konkrétní výzvy (TAČR, OP JAK, Horizon Europe, …) —
> každý program má vlastní povinné kapitoly.
