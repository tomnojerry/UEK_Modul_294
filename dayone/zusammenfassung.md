
# Markdown Prewiev

## 

mit Control + shift + V
# HTML Grundgerüst

## die wichtigsten Metha Tags
1. Author = Autor 
2. Description = Beschriebeung Stichwörter 
3. Keywords = Stichwörtersuchwörter für Scuhcmaschnien
4. Robots = allow robots to follow 

'<meta name="author" content="nahum">
<meta name="description" content="Modul 294">
<meta name="keywords" content="frontned entwcklung">
<meta name="robots" content="index, follow">'

### Seite neu Laden erzwingen
Ctrl + F5

der Chache des Browsers wird gelösch und die Seite wird neu geladen.

### Favicon einbinden 
Favicon wird mit im <Head></Head> mit link eingebunden
Code
`   <head> 
        <link rel="shortcut icon" href="./img/favicon.ico" type="image/x-icon">
    </head>
`


## Fonts Einbinden 

Auf fonts.google.com ein Font suchen , den Link des gewünschtne font kpopiert und im Head der HTMl Seite inefügen

#### Font benutzen
im CSS 
body {
    Font-Family: deine Font (die font ist eingebunfd und wird direkt geufnden)
} 

font-family: 'Rubik Microbe', cursive;


#### Font Herunterladen und direkt einbinde

mit font-face 

@font-face {
            font-family: 'Anzeigename des Fonts';
            src: url('./fonts/namedesfonts.ttf');
        }


        Falls font nit imt ttf. muss das format angegeben Werden

@font-face {
            font-family: 'Name des Fonts';
            src: url('./fonts/namedesfonts.ttf') format (''woff);
        }


# Icon von Google 

auf https://fonts.google.com/icons
icons vo google hinzufühgne

# Github Repo

poor commits so far

Lamoo

# Repetioin HTML & CSS

## HTMl
Grundstruktur mit !

## CSS

Css kann auf 3 verschieden Aeten eingebundenw werden
1. Inline 
2. Intern
3. Extern datei (<link rel="stylesheet" href="./css/style.css">)

import immmer zu oberst 

Dnach folgen die stale css


mit `@import`

Media kommt zu letzt


# Javascript

`alert('yor massege');` Gibt eine Warnausgabe aus
`console.log('Hello wordl');` : Speicher die Logs in einer Datei
# Varinbeln und 
Variablen mit Var und let

# Javascript Libraryy

https://bit.ly/3xi6dOP


## CSS-Framework
Sammlung von Gestaltungselement un dJavascript functionen

Vroteile: 
Alle Framework sind Mobile Freundliche

NAchteile von Framewokr: 
Vordefinierte Styles zu finde ist schweirig

1. Bootstrap
sehr einfaach und in SASS 

2. semanti ui

# Einbinde Stukrtukr Jquery - Frameworks - Css

1. Jquery 
2. Framework - Materilaize
3. Stylesheet

Fonts könne überall eingebunde werden


### Materialize

cooldown

# Notizen

a Anchor Tag mit # gartem HAd


# Grid in CSs

parent div = row
child div = col

# JASON: Java script Object notation
Javascript ist eine Darstellung von daten aus einer Daten bank

ausgangs lage

im HTml eine Tabel

HAndelbars ist eine Tool zur beabeitung von JASON daten
JASON ist case sensistiv

1. schritt ist das template drin
2. eine zeile prog und dan auskomentiere
3. handlerbars template complilieren
4. Die JASON date holen

### Häufige Fheler


