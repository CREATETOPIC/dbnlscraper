# Simpele scraper voor DBNL
Scraper voor DBNL. Vereist Node.

Type in de terminal:
`node scraper.js TITLE FIRSTPAGE LASTPAGE > RECORDNUMBER.txt`

Voorbeeld: 
`node scraper.js spin003nage01 10 93 > 864219296.txt`

TITLE staat hier voor de titel die zichtbaar is in de URL van de DBNL-website. Wanneer de URL bijvoorbeeld 'http://www.dbnl.org/tekst/spin003nage01_01/spin003nage01_01_0093.php' is, neem je enkel het stukje 'spin003nage01' over. 

FIRSTPAGE & LASTPAGE is eveneens zichtbaar in de DBNL URL. Kijk hiervoor naar de laatste getallen voor het stukje '.php'.

RECORDNUMBER zoals beschreven staat in Picarta.
