# Tekstscrapers
Voor CREATE TOPIC zijn verschillende simpele scrapers gemaakt.

## Benodigdheden
Vrijwel al deze scrapers maken gebruik van Node js. Node maakt het mogelijk om Javascript in de terminal te gebruiken. Daardoor kan je Javascript dus niet alleen frontend, maar ook backend gebruiken. Node is te installeren via https://nodejs.org/en/

Je kan node uitbreiden met zogenaamde packages. Dat zijn kleine plugins die je kan installeren met `npm install PACKAGENAME`. Al deze packages zijn te vinden in de npm repository (https://www.npmjs.com/). Wanneer je voor het eerst een node script maakt dan moet je een npm initialiseren. Dat doe je door `npm init` in de command line te tikken. Vervolgens wordt er een bestand genaamd `package.json` gemaakt. Deze package json bevat alle modules/plugins/packages die gebruikt worden voor het script.

In mijn geval maak ik veelvuldig gebruik van de x-ray module (https://github.com/matthewmueller/x-ray). X-ray is een kleine module die het scrapen makkelijker maakt.

## DBNL scraper (één tekst)
De scraper is te vinden op: https://github.com/CREATETOPIC/dbnlscraper/blob/master/scraper_literatuur.js

Tik in de terminal:
`node scraper_literatuur.js TITLE FIRSTPAGE LASTPAGE > RECORDNUMBER.txt`

Voorbeeld: 
`node scraper_literatuur.js spin003nage01 10 93 > 864219296.txt`

TITLE staat hier voor de titel die zichtbaar is in de URL van de DBNL-website. Wanneer de URL bijvoorbeeld `http://www.dbnl.org/tekst/spin003nage01_01/spin003nage01_01_0093.php` is, neem je enkel het stukje `spin003nage01` over. 

FIRSTPAGE & LASTPAGE is eveneens zichtbaar in de DBNL URL. Kijk hiervoor naar de laatste getallen voor het stukje `.php`.

RECORDNUMBER zoals beschreven staat in Picarta.

## DBNL scraper voor meerdere teksten
Node.js is vereist

Tik in de terminal: 
`node scraper_multiple.js`

De te downloaden teksten worden automatisch uit de DBNL koppelsheet (Google Spreadsheet) gehaald. Deze teksten worden vervolgens in het mapje 'teksten' geplaatst. Om de DBNL servers niet te overbelasten zit er één minuut pauze tussen ieder boek. Tussen iedere pagina is er een delay van één seconde.

## Geheugen van Nederland scraper
Tik in de terminal:
`sh gvn_scraper.sh`

Vul vervolgens de vier opties in. De belangrijkste is de URN-code: klik met je rechtermuisknop op de afbeelding en klik op 'afbeelding openen in een nieuw venster'. In de URL-balk zie je vervolgens het volgende staan: 'http://resolver.kb.nl/resolve?urn=' Kopieër het stuk achter het gelijkteken (=) tot en met het ampersandteken (&).

Tussen het downloaden van iedere afbeelding zit twee seconde wachttijd.

## STCN Scraper
Hernoem `config.example.json` naar `config.json`. Vul de AWS credentials in.

...



