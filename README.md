# Tekstscrapers
Scraper voor DBNL en Geheugen van Nederland. Gemaakt in het kader van CREATE TOPIC.

## DBNL scraper
Vereist Node.js

Tik in de terminal:
`node scraper_literatuur.js TITLE FIRSTPAGE LASTPAGE > RECORDNUMBER.txt`

Voorbeeld: 
`node scraper_literatuur.js spin003nage01 10 93 > 864219296.txt`

TITLE staat hier voor de titel die zichtbaar is in de URL van de DBNL-website. Wanneer de URL bijvoorbeeld `http://www.dbnl.org/tekst/spin003nage01_01/spin003nage01_01_0093.php` is, neem je enkel het stukje `spin003nage01` over. 

FIRSTPAGE & LASTPAGE is eveneens zichtbaar in de DBNL URL. Kijk hiervoor naar de laatste getallen voor het stukje `.php`.

RECORDNUMBER zoals beschreven staat in Picarta.

## Geheugen van Nederland scraper
Tik in de terminal:
`sh gvn_scraper.sh`

Vul vervolgens de vier opties in. De belangrijkste is de URN-code: klik met je rechtermuisknop op de afbeelding en klik op 'afbeelding openen in een nieuw venster'. In de URL-balk zie je vervolgens het volgende staan: 'http://resolver.kb.nl/resolve?urn=' Kopieër het stuk achter het gelijkteken (=) tot en met het ampersandteken (&).

Tussen het downloaden van iedere afbeelding zit twee seconde wachttijd.

## STCN Scraper
Hernoem `config.example.json` naar `config.json`. Vul de AWS credentials in.



