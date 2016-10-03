var he = require('he');
var Xray = require('x-ray');
var x = Xray();

var author = process.argv[2];
var firstPage = process.argv[3];
var amountPages = process.argv[4];

var scrapedUrl = 'http://www.dbnl.org/tekst/' + author + '_01/' + author + '_01_0';
var he = require('he');

var i = firstPage;

// var text = '';

function scraperTimeLoop () { 
   setTimeout(function () {  

			if (i < 10) {
				var currentNumber = '00' + i;
			} else if (i < 100) {
				var currentNumber = '0' + i;
			} else {
				var currentNumber = i;
			}

			x(scrapedUrl + currentNumber + '.php', 'article', [{
		  text: '#tekst_en_noten@html',
			}])(function(err, obj) {

				var dirtyText = obj[0].text;
				/* Remove everything inside <a href> */
				dirtyText = dirtyText.replace(/<a.*a>/g, '');
				/* Remove toneel lines */
				dirtyText = dirtyText.replace(/<div class="line-nr.*div>/g, '');
				/* Remove notes */
				dirtyText = dirtyText.replace(/<div class="notes(.|\s)*<\/div>/g, '');

				/* Remove brackets with page numbers */
				dirtyText = dirtyText.replace(/\[.*?\]/g,' ');
				/* Remove all HTML junk */
				dirtyText = dirtyText.replace(/<\/?[^>]+(>|$)/g, "");

				/* Decode entity and RM multilines */
				var cleanText = he.decode(dirtyText);
				cleanText = cleanText.replace(/\n\s*\n\s*\n/g, "\n\n");

				console.log(cleanText);

			})

      i++;                    
      if (i < amountPages) {       
         scraperTimeLoop();        
      }                   
   }, 800)
}

scraperTimeLoop();