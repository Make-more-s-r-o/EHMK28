#!/usr/bin/env python3
"""Generátor manažerského one-pageru pro Vojtu Kolaříka (CEO Make More). Používá fpdf2 s UTF-8."""

from fpdf import FPDF
import os

OUTPUT = os.path.expanduser("~/Desktop/EHMK-Makerspace-CB-OnePager-Vojta.pdf")
FONT_DIR = "/System/Library/Fonts/Supplemental"

NAVY   = (27, 42, 74)
BLUE   = (43, 91, 168)
ORANGE = (232, 98, 10)
LGRAY  = (244, 246, 250)
MGRAY  = (138, 148, 166)
WHITE  = (255, 255, 255)
RED    = (192, 57, 43)
GREEN  = (26, 122, 74)

W_PAGE = 210
MARGIN = 18
INNER  = W_PAGE - 2 * MARGIN


class PDF(FPDF):
    def __init__(self):
        super().__init__(format="A4")
        self.add_font("Arial",  "",   f"{FONT_DIR}/Arial.ttf")
        self.add_font("Arial",  "B",  f"{FONT_DIR}/Arial Bold.ttf")
        self.add_font("Arial",  "I",  f"{FONT_DIR}/Arial Italic.ttf")
        self.add_font("Arial",  "BI", f"{FONT_DIR}/Arial Bold Italic.ttf")
        self.set_margins(MARGIN, 14, MARGIN)
        self.set_auto_page_break(auto=True, margin=12)

    def section_header(self, text):
        self.set_fill_color(*BLUE)
        self.set_text_color(*WHITE)
        self.set_font("Arial", "B", 9)
        self.cell(INNER, 7, text, fill=True, new_x="LMARGIN", new_y="NEXT")
        self.ln(2)

    def row(self, label, value, fill=False, value_color=None):
        label_w = 46
        self.set_font("Arial", "B", 8.5)
        self.set_text_color(*NAVY)
        self.set_fill_color(*LGRAY)
        self.cell(label_w, 6.5, label, fill=True, border=1)
        self.set_font("Arial", "", 8.5)
        self.set_text_color(*(value_color or NAVY))
        self.set_fill_color(*WHITE)
        self.cell(INNER - label_w, 6.5, value, fill=True, border=1, new_x="LMARGIN", new_y="NEXT")
        self.set_text_color(*NAVY)

    def timeline_row(self, faze, kdy, co, fill=False):
        bg = LGRAY if fill else WHITE
        self.set_fill_color(*bg)
        self.set_text_color(*NAVY)
        self.set_font("Arial", "B", 8.5)
        self.cell(40, 6, faze, fill=True, border=1)
        self.set_font("Arial", "", 8.5)
        self.set_text_color(*ORANGE)
        self.cell(28, 6, kdy, fill=True, border=1)
        self.set_text_color(*NAVY)
        self.cell(INNER - 68, 6, co, fill=True, border=1, new_x="LMARGIN", new_y="NEXT")

    def step_row(self, termin, vlastnik, co, fill=False):
        bg = LGRAY if fill else WHITE
        self.set_fill_color(*bg)
        self.set_font("Arial", "B", 8.5)
        self.set_text_color(*ORANGE)
        self.cell(24, 6, termin, fill=True, border=1)
        self.set_text_color(*BLUE)
        self.cell(32, 6, vlastnik, fill=True, border=1)
        self.set_font("Arial", "", 8.5)
        self.set_text_color(*NAVY)
        self.cell(INNER - 56, 6, co, fill=True, border=1, new_x="LMARGIN", new_y="NEXT")

    def risk_row(self, icon, nazev, popis, icon_color, fill=False):
        bg = LGRAY if fill else WHITE
        self.set_fill_color(*icon_color)
        self.set_text_color(*WHITE)
        self.set_font("Arial", "B", 9)
        self.cell(8, 6.5, icon, fill=True, border=1, align="C")
        self.set_fill_color(*bg)
        self.set_text_color(*icon_color)
        self.set_font("Arial", "B", 8.5)
        self.cell(46, 6.5, nazev, fill=True, border=1)
        self.set_text_color(*NAVY)
        self.set_font("Arial", "", 8.5)
        self.cell(INNER - 54, 6.5, popis, fill=True, border=1, new_x="LMARGIN", new_y="NEXT")

    def why_row(self, label, value, fill=False):
        bg = LGRAY if fill else WHITE
        self.set_fill_color(*bg)
        self.set_font("Arial", "B", 8.5)
        self.set_text_color(*GREEN)
        self.cell(47, 6, label, fill=True, border=1)
        self.set_font("Arial", "", 8.5)
        self.set_text_color(*NAVY)
        self.cell(INNER - 47, 6, value, fill=True, border=1, new_x="LMARGIN", new_y="NEXT")

    def two_col_box(self, lines_left, lines_right, height=40):
        col_w = (INNER - 2) / 2
        x0 = self.get_x()
        y0 = self.get_y()
        for i, (lines, bg) in enumerate([(lines_left, LGRAY), (lines_right, (238, 243, 251))]):
            x = x0 + i * (col_w + 2)
            self.set_fill_color(*bg)
            self.rect(x, y0, col_w, height, style="F")
            self.set_xy(x + 3, y0 + 3)
            for bold, text in lines:
                self.set_font("Arial", "B" if bold else "", 8.5)
                self.set_text_color(*BLUE if bold else NAVY)
                self.set_x(x + 3)
                self.multi_cell(col_w - 6, 5, text)
                if bold:
                    self.ln(1)
        self.set_xy(x0, y0 + height)


pdf = PDF()
pdf.add_page()

# HLAVIČKA
pdf.set_font("Arial", "", 8)
pdf.set_text_color(*MGRAY)
pdf.cell(INNER / 2, 5, "GRANT — MANAŽERSKÉ SHRNUTÍ / 23. 6. 2026")
pdf.set_font("Arial", "B", 8)
pdf.cell(INNER / 2, 5, "DŮVĚRNÉ", align="R", new_x="LMARGIN", new_y="NEXT")

pdf.set_draw_color(*ORANGE)
pdf.set_line_width(0.8)
pdf.line(MARGIN, pdf.get_y(), W_PAGE - MARGIN, pdf.get_y())
pdf.ln(3)

pdf.set_font("Arial", "B", 20)
pdf.set_text_color(*NAVY)
pdf.cell(INNER, 10, "Makerspace České Budějovice", new_x="LMARGIN", new_y="NEXT")

pdf.set_font("Arial", "I", 10)
pdf.set_text_color(*BLUE)
pdf.cell(INNER, 6, "Komunitní centrum tvorby, sdílení a nových řemesel — pilotní projekt pro EHMK 2028",
         new_x="LMARGIN", new_y="NEXT")
pdf.ln(3)

# KLÍČOVÉ PARAMETRY
pdf.section_header("KLÍČOVÉ PARAMETRY")
pdf.row("Výzva",             "(Perma)kulturní Open Call 2026 — EHMK České Budějovice 2028")
pdf.row("Uzávěrka",          "10. 7. 2026  (zbývá ~17 dní)",                                                        fill=True)
pdf.row("Typ projektu",      "VELKÝ — max. podpora 4 000 000 Kč, celkový rozpočet ~8 000 000 Kč")
pdf.row("Spolufinancování",  "50 % vlastních zdrojů (z toho část kryje JVTP úvazky z jiných projektů)",             fill=True)
pdf.row("Žadatel",           "Make More s.r.o. — nová provozovna v Českých Budějovicích splňuje podmínku JčK")
pdf.row("Jihočeský partner", "JVTP — Jihočeský vědeckotechnologický park (ředitel potvrdil zájem)",                  fill=True)
pdf.row("Zahraniční partner","ZATÍM NEZAJIŠTĚN — povinná příloha (Letter of Intent), termín 5. 7.",
        value_color=RED)
pdf.ln(4)

# KONCEPT PROJEKTU
pdf.section_header("KONCEPT PROJEKTU")
pdf.two_col_box(
    lines_left=[
        (True,  "Make More přináší"),
        (False, "Pilotní provoz popup Makerspace — fyzické centrum tvorby s nástroji pro digitální výrobu, řemeslo a design. Provoz členěn do tematických labů navázaných na partnery (model ověřený konceptem ZEVO Vráto / A8000)."),
        (False, "Rytmus: dopoledne školní třídy (hlavní pilíř), odpoledne/večery veřejnost, víkendy komunita."),
        (False, "Tým: Make Edu, Make Designers, Make Media, Make Events."),
    ],
    lines_right=[
        (True,  "JVTP přináší"),
        (False, "Design lab — výstava průmyslového a produktového designu jako procesu. Obnažení myšlenkových postupů za výrobky (od denní potřeby po Porsche)."),
        (False, "JVTP kryje část spolufinancování formou úvazků z jiných projektů — klíčový příspěvek k dosažení 50 % vlastního podílu."),
    ],
    height=42,
)
pdf.ln(4)

# HARMONOGRAM
pdf.section_header("HARMONOGRAM")
pdf.set_fill_color(*NAVY)
pdf.set_text_color(*WHITE)
pdf.set_font("Arial", "B", 8.5)
pdf.cell(40, 6, "Fáze", fill=True, border=1)
pdf.cell(28, 6, "Kdy", fill=True, border=1)
pdf.cell(INNER - 68, 6, "Co se děje", fill=True, border=1, new_x="LMARGIN", new_y="NEXT")
pdf.timeline_row("Příprava sítě",     "2027 Q1–Q2", "Budování komunity tvůrců v JčK, mapování partnerů a absorpční kapacity")
pdf.timeline_row("Příprava prostoru", "2027 Q2–Q3", "Výběr fyzického místa, technické vybavení (ve spolupráci s JVTP)",       fill=True)
pdf.timeline_row("Kurace programu",   "2027 Q3–Q4", "Design lab JVTP, vzdělávací program, příprava otevření")
pdf.timeline_row("Pilotní provoz",    "2028 Q1–Q4", "Pravidelný provoz — školy, veřejnost, akce, festivaly",                  fill=True)
pdf.timeline_row("Evaluace + legacy", "2028 Q3–Q4", "Vyjednávání trvalého provozu s politiky a institucemi, předání modelu")
pdf.ln(4)

# PROČ TO DÁVÁ SMYSL PRO MAKE MORE
pdf.section_header("PROČ TO DÁVÁ SMYSL PRO MAKE MORE")
pdf.why_row("+ Nový produkt/služba", "Make Designers získává referenční projekt a provozní model otevřené dílny v JčK.")
pdf.why_row("+ Strategický region",  "Zakladatelé jsou z JčK — projekt buduje přirozené zázemí a lokální síť.",              fill=True)
pdf.why_row("+ Synergie oddělení",   "Make Edu, Make Designers, Make Media, Make Events — všichni mají roli.")
pdf.why_row("+ Legacy a dopad",      "Pilotní rok 2028 ověří model a vyjedná udržitelnost — potenciál trvalého produktu.",   fill=True)
pdf.why_row("+ Bodový potenciál",    "Preferované žánry (design + řemesla) mohou přinést +15 bodů nad konkurenci.")
pdf.ln(4)

# OTEVŘENÉ OTÁZKY A RIZIKA
pdf.section_header("OTEVŘENÉ OTÁZKY A RIZIKA")
pdf.risk_row("!", "ZAHRANIČNÍ PARTNER",  "Povinná příloha (LoI) — bez ní žádost neprochází. Termín 5. 7. Ondřej má kontakty.", RED)
pdf.risk_row("?", "Role a scope s JVTP", "Kdo je hlavní realizátor, co přesně JVTP vkládá. Vyjasní příští schůzka.",           ORANGE, fill=True)
pdf.risk_row("?", "Výběr prostoru",      "Fyzické místo v ČB zatím neurčeno. Stará pošta = příslib, nutno potvrdit.",           ORANGE)
pdf.risk_row("i", "Rozpočet neschválen", "Modelace z 22. 6. jsou drafty — Dan je nepročetl. Čísla doladit před podáním.",       BLUE,   fill=True)
pdf.ln(4)

# NEJBLIŽŠÍ KROKY
pdf.section_header("NEJBLIŽŠÍ KROKY (do uzávěrky 10. 7.)")
pdf.step_row("do 26. 6.", "Ondřej + Dan", "Zahraniční partner — identifikovat kandidáta a odeslat první oslovení")
pdf.step_row("do 26. 6.", "Dan + JVTP",   "Schůzka s ředitelem JVTP — vyjasit role, kofinancování, prostor",           fill=True)
pdf.step_row("do 5. 7.",  "Ondřej",       "Zahraniční partner — podepsaný Letter of Intent")
pdf.step_row("do 7. 7.",  "Dan",          "Finalizace rozpočtu (schválená čísla, 2027 + 2028)",                         fill=True)
pdf.step_row("do 9. 7.",  "Dan + Ondřej", "Compliance kontrola + přepis žádosti do XLSX formuláře")
pdf.step_row("10. 7.",    "Dan",          "Podání e-mailem + registrační formulář",                                     fill=True)
pdf.ln(3)

# PATIČKA
pdf.set_draw_color(*MGRAY)
pdf.set_line_width(0.3)
pdf.line(MARGIN, pdf.get_y(), W_PAGE - MARGIN, pdf.get_y())
pdf.ln(2)
pdf.set_font("Arial", "", 7.5)
pdf.set_text_color(*MGRAY)
pdf.cell(INNER, 4,
    "Připravil: Ondřej Kašpárek (Make More) · 23. 6. 2026 · "
    "Pracovní materiál pro Vojtu Kolaříka — neschválené drafty, nepublikovat bez schválení Dana a JVTP.",
    new_x="LMARGIN", new_y="NEXT")

pdf.output(OUTPUT)
print(f"PDF uloženo: {OUTPUT}")
