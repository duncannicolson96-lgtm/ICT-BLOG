# Duncan Nicolson — Persoonlijke Blog

Een persoonlijke blog-website voor mijn ICT-opdracht, met een modern, donker gamingontwerp
geïnspireerd op de sfeer van Vice City (paars, roze, blauw, zwart) met glassmorphism-kaarten
en vloeiende scrollanimaties. Dit is **geen kopie** van Rockstar Games-materiaal: alle teksten,
kleuren en placeholder-afbeeldingen zijn zelf gemaakt.

## 📁 Inhoud van de ZIP

```
duncan-site/
├── index.html          → De volledige website (alle secties)
├── style.css            → Alle styling (kleuren, layout, animaties, responsive)
├── script.js             → Menu, scrollanimaties en het contactformulier
├── images/
│   ├── gta6-cover.jpg   → Placeholder — vervang met de officiële GTA VI cover
│   ├── football.jpg      → Placeholder — vervang met een eigen voetbalfoto
│   ├── ps5.jpg            → Placeholder — vervang met een eigen PS5-foto
│   └── pc.jpg              → Placeholder — vervang met een eigen foto van je gaming pc
└── README.md            → Dit bestand
```

## 🖼️ Afbeeldingen vervangen

De afbeeldingen in de map `images/` zijn **zelfgemaakte placeholders** (geen auteursrechtelijk
beschermd materiaal), zodat jij ze zelf kunt vervangen:

1. Zoek of maak de gewenste afbeelding (bijv. de officiële GTA VI cover, een voetbalfoto, etc.).
2. Geef het nieuwe bestand **exact dezelfde naam** als de placeholder die je vervangt
   (bijvoorbeeld `gta6-cover.jpg`), of pas het pad aan in `index.html` als je een andere naam
   gebruikt.
3. Zet het nieuwe bestand in de map `images/`, ter vervanging van de placeholder.
4. Sla op, commit en push — klaar!

> Let op: gebruik alleen afbeeldingen waar je het recht toe hebt om ze te gebruiken (eigen
> foto's, officieel promotiemateriaal voor persoonlijk/educatief gebruik, of afbeeldingen met een
> vrije licentie).

## 🚀 De website op GitHub Pages zetten

### Stap 1 — Maak een GitHub-account en een nieuwe repository
1. Ga naar [github.com](https://github.com) en log in (of maak een gratis account aan).
2. Klik rechtsboven op **+** → **New repository**.
3. Geef de repository een naam, bijvoorbeeld `duncan-nicolson-blog`.
4. Zet de repository op **Public**.
5. Klik op **Create repository**.

### Stap 2 — Upload de bestanden
**Optie A — via de website (makkelijkst):**
1. Open je nieuwe repository op GitHub.
2. Klik op **Add file** → **Upload files**.
3. Sleep alle bestanden en de map `images/` uit deze ZIP naar het uploadvak
   (zorg dat `index.html` in de **hoofdmap** van de repository staat, niet in een submap).
4. Klik onderaan op **Commit changes**.

**Optie B — via Git (command line):**
```bash
git clone https://github.com/JOUW-GEBRUIKERSNAAM/duncan-nicolson-blog.git
cd duncan-nicolson-blog
# Kopieer index.html, style.css, script.js en de map images/ hierheen
git add .
git commit -m "Eerste versie van mijn persoonlijke blog"
git push
```

### Stap 3 — GitHub Pages inschakelen
1. Ga in je repository naar **Settings** (tandwiel-icoon bovenaan).
2. Klik in het linkermenu op **Pages**.
3. Kies bij **Source** de optie **Deploy from a branch**.
4. Kies bij **Branch**: `main` (of `master`) en map `/ (root)`.
5. Klik op **Save**.

### Stap 4 — Website bekijken
Na ongeveer 1-2 minuten is je website live op:

```
https://JOUW-GEBRUIKERSNAAM.github.io/duncan-nicolson-blog/
```

Ververs de pagina in **Settings → Pages** als je de link nog niet ziet — GitHub heeft soms
even tijd nodig om de site te bouwen.

## ✏️ Zelf aanpassen

- **Teksten wijzigen:** open `index.html` in een teksteditor (bijv. VS Code) en pas de tekst
  tussen de HTML-tags aan.
- **Kleuren wijzigen:** alle kleuren staan bovenaan in `style.css` onder `:root { ... }`
  (bijv. `--pink`, `--blue`, `--purple`).
- **Contactformulier:** dit formulier is nu een demo (er wordt nog niks echt verzonden). Wil je
  echte berichten ontvangen? Koppel het formulier aan een dienst zoals
  [Formspree](https://formspree.io/) of [Getform](https://getform.io/) door het `action`-attribuut
  van het formulier in `index.html` aan te passen.

## 🛠️ Gebruikte technieken
- HTML5, CSS3 (custom properties, grid, flexbox, glassmorphism, animaties)
- Vanilla JavaScript (geen frameworks nodig)
- Google Fonts: *Anton* (display), *Space Grotesk* (body), *JetBrains Mono* (labels)
- Volledig responsive: geoptimaliseerd voor iPhone/mobiel én desktop

Veel succes met je ICT-opdracht! 🌴🎮
