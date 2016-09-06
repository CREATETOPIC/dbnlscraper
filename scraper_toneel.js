var Xray = require('x-ray');
var x = Xray();

var author = process.argv[2];
var firstPage = process.argv[3];
var amountPages = process.argv[4];
amountPages++;

var scrapedUrl = 'http://www.dbnl.org/tekst/' + author + '_01/' + author + '_01_00';

var i = firstPage;

// var text = '';

function scraperTimeLoop () { 
   setTimeout(function () {  

			if (i < 10) {
				var currentNumber = '0' + i;
			} else {
				var currentNumber = i;
			}

			x(scrapedUrl + currentNumber + '.php', 'table', [{
		  headings: x('.contentholder', ['h2']),
		  stage: '#text',
			}])(function(err, obj) {

			// console.log('current page ' + currentNumber);
			// text += obj[0].heading;
			// console.log(text);

				console.log(obj[0].stage);




			for (a = 0; a < obj.length; a++) { 
				// text += ' ' + obj[i].text;
					console.log(obj[a].regel);
				}
			})

      i++;                    
      if (i < amountPages) {       
         scraperTimeLoop();        
      }                   
   }, 800)
}

scraperTimeLoop();
