var Xray = require('x-ray');
var x = Xray();

var author = process.argv[2];
var amountPages = process.argv[3];

var scrapedUrl = 'http://www.dbnl.org/tekst/' + author + '_01/' + author + '_01_00';

var i = 1;

// var text = '';

function scraperTimeLoop () { 
   setTimeout(function () {  

			if (i < 10) {
				var currentNumber = '0' + i;
			} else {
				var currentNumber = i;
			}

			x(scrapedUrl + currentNumber + '.php', 'div.contentholder', [{
		  heading: 'h3',
		  text: 'p',
			}])(function(err, obj) {

			console.log(obj[0].heading);
			// console.log('current page ' + currentNumber);
			// text += obj[0].heading;
			// console.log(text);


			for (a = 0; a < obj.length; a++) { 
				// text += ' ' + obj[i].text;
					console.log(obj[a].text);
				}
			})

      i++;                    
      if (i < amountPages) {       
         scraperTimeLoop();        
      }                   
   }, 800)
}

scraperTimeLoop();
