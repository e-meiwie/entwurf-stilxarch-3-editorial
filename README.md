# Entwurf 3 - "hell und typografisch"

Vollstaendige Website fuer STIL x Architektur, Hannover. Gebaut aus dem
Material in `../material/`. Stand: 12.08.2026.

Diese Version ordnet die Inhalte neu und setzt sie anders - sie ist der
Gegenentwurf zu Entwurf 1 (dunkel, technisch) und zu Entwurf 2 (nah am
Bestand).

## Gestaltungsentscheidung

> Ein Buero, dessen Inhaber als Maurergeselle angefangen hat, verkauft keine
> Effekte. Die Seite ist deshalb ein gesetztes Blatt Papier: warmes Weiss,
> grosse Serifenschrift, breite Raender - und ein Orange, das nur dort steht,
> wo es etwas bedeutet.

Daraus folgt konkret:

- **Zweispaltiger Satz.** Links eine kurze Marginalie mit oranger Linie
  darueber, rechts der Text. Das ist die Ordnung einer Planzeichnung: Legende
  links, Inhalt rechts.
- **Systemserife statt Fremdschrift.** Georgia beziehungsweise die jeweilige
  Systemserife fuer Ueberschriften und Zitate, die Systemgrotesk fuer
  Fliesstext und Beschriftungen. Keine Google Fonts - siehe Datenschutz.
- **Warmes Weiss statt Reinweiss.** `#FBFAF7` als Grund, `#F2EEE7` fuer
  abgesetzte Baender. Die Bilder des Bueros sind ueberwiegend hell und kuehl;
  ein warmer Grund setzt sie ab, ohne ihnen Konkurrenz zu machen.
- **Orange sparsam.** Das Logo-Orange `#FF6600` nur fuer Striche und das "x"
  der Wortmarke, die abgedunkelte Variante `#B85100` (4.7:1 auf dem
  Papierton) fuer Links und Marginalien.
- **Versetzte Bildpaare.** Zwei Tafeln nebeneinander, die zweite tiefer
  gesetzt. Kein Bild wird ueber 900 px hochskaliert - das ist die harte
  Grenze des Materials.
- **Das Motiv:** die 75-Tage-Zahl aus Projekt BCK09, gross in der
  Serifenschrift. Eine nachpruefbare Zahl, die kein anderes Buero so hat.

## Struktur

Anders als das Original, das seine Inhalte auf 30 Seiten in einem Frameset
verteilt:

```
index.html          Auftakt, zwei Projekte, Leitsatz, Buero, 75 Tage, Leistungen, Kontakt
projekte.html       Aktuelle Projekte, Einfamilienhaeuser, Suedstadt-Villa,
                    Gewerbe - und alle 61 Projekte in der Uebersicht
bauen40.html        Verfahren, Projekt BCK09 in 6 Bildern, Projekt SHWPK, Presse
leistungen.html     Leistungsphasen 1-9, Haltung, Objektarten, Planung im Modell
buero.html          Der Architekt, Werdegang, die Raeume, Auftraggeber
kunden.html         112 Auftraggeber
presse.html         Bauen 4.0, Projekte, Fachpresse, Wettbewerbe
karriere.html       Beide Stellenanzeigen auf einer Seite, mit Sprungmarken
kontakt.html        Erreichbarkeit, Anschrift, was bei einer Anfrage hilft
impressum.html      DDG und MStV
datenschutz.html    ohne Cookies, ohne Tracking
```

Wesentliche Umstellungen gegenueber dem Original:

- **"Taetigkeiten / Profil" wird zu `leistungen.html`.** Im Original steckt
  das Leistungsspektrum in einer Unterseite von "Das Buero" - dort sucht es
  niemand. Jetzt ein eigener Menuepunkt.
- **Die vier Bauen-4.0-Seiten werden eine.** Fakten und Baustellenbilder
  gehoeren zusammen; vier fast leere Unterseiten waren eine Folge des alten
  Frameset-Aufbaus.
- **Die beiden Stellenanzeigen stehen auf einer Seite** mit Sprungmarken
  (`#architekt`, `#zeichner`). Die Beschreibungen sind zu 80 Prozent
  wortgleich; zwei Seiten haetten das nur verdoppelt.
- **Die Startseite fuehrt mit dem Werdegang**, nicht mit dem Zitat. Der Satz
  "Erst Maurergeselle, dann Architekt" ist das staerkste Argument des Bueros
  und stand bisher versteckt in einem Lebenslauf auf der dritten Ebene.

Dazu `css/style.css`, `js/script.js`, `bilder/` (26 Fotos plus 61
Projektvorschauen), `netlify.toml`, `robots.txt`, `sitemap.xml`.

## Technik

- Reines HTML, CSS und 25 Zeilen Javascript. Kein Framework, kein Build.
- **Keine externen Requests.** Systemschriften, Favicon als Inline-SVG,
  Bilder lokal. Das ist die Grundlage fuer die Datenschutzerklaerung.
- Responsiv; auf allen 11 Seiten bei 390 px Viewport gemessen: kein
  waagerechter Ueberlauf.
- Zugaenglichkeit: `lang`, Sprunglink, genau eine `h1` je Seite, Alt-Texte,
  `aria-current`, `aria-expanded`, sichtbarer Fokusrahmen,
  `prefers-reduced-motion`.
- Ohne Javascript bleibt das Menue offen stehen, die Seite also bedienbar.

## Weiterleitungen

Alle alten Adressen aus `../material/seiten.txt` haben in der `netlify.toml`
ein Ziel. Weil diese Version anders gliedert, laufen
`/pages/buero/01-profil.html` und `iprofil.html` auf `/leistungen.html`, die
vier Bauen-4.0-Seiten auf `/bauen40.html` und alle Stellenseiten auf
`/karriere.html`.

## Bewusst weggelassen

Wie in Entwurf 2: kein Log-in-Bereich (braucht einen Server), keine
Oeffnungszeiten (nirgends belegt), kein Kontaktformular (auf Wunsch), keine
Karte (fremder Server), keine Logoleiste (Logos zu klein).

## Offene Punkte

Identisch mit Entwurf 2 - siehe `../entwurf-2-originalnah/README.md`,
Abschnitt "Offene Punkte", Nummer 1 bis 9. Die Rechtstexte beider Versionen
werden aus derselben Quelle erzeugt und sind wortgleich.

## Veroeffentlichen

Noch **nicht** veroeffentlicht.

```powershell
netlify deploy --dir . --prod --site entwurf-stilxarchitektur-3
```

Abgesichert durch `noindex, nofollow`, `robots.txt` mit `Disallow: /` und den
`X-Robots-Tag` aus der `netlify.toml`. Nach dem Deploy ist nichts
einzurichten - es gibt kein Formular.

## Geprueft

- `qualitaet-pruefen.ps1`: 11 Seiten, keine Beanstandungen
- Desktop 1280 px: alle 11 Seiten gerendert und angesehen
- Mobil 390 px: Startseite angesehen, alle 11 Seiten auf waagerechten
  Ueberlauf gemessen
- Zeichensatz: alle Seiten auf Fehlkodierungen geprueft

## Grenzen

Die Rechtstexte sind Vorlagen, keine Rechtsberatung. Texte und Bilder
gehoeren dem Buero: Verwendung nur fuer diesen Entwurf, auf Zuruf sofort
offline, nicht ins eigene Portfolio ohne ausdrueckliche Freigabe.
