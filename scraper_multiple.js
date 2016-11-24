var he = require('he');
var request = require('request');
var Converter = require("csvtojson").Converter;

var Xray = require('x-ray');
var x = Xray();

fs = require('fs');

var he = require('he');


// var i = firstPage;

// var text = '';

// function scraperTimeLoop () { 
//    setTimeout(function () {  

// 			if (i < 10) {
// 				var currentNumber = '00' + i;
// 			} else if (i < 100) {
// 				var currentNumber = '0' + i;
// 			} else {
// 				var currentNumber = i;
// 			}
// 			x(scrapedUrl + currentNumber + '.php', 'article', [{
// 		  text: '#tekst_en_noten@html',
// 			}])(function(err, obj) {

// 				var dirtyText = obj[0].text;
// 				/* Remove everything inside <a href> */
// 				dirtyText = dirtyText.replace(/<a.*a>/g, '');
// 				/* Remove toneel lines */
// 				dirtyText = dirtyText.replace(/<div class="line-nr.*div>/g, '');
// 				/* Remove notes */
// 				dirtyText = dirtyText.replace(/<div class="notes(.|\s)*<\/div>/g, '');

// 				 Remove brackets with page numbers 
// 				dirtyText = dirtyText.replace(/\[.*?\]/g,' ');
// 				/* Remove all HTML junk */
// 				dirtyText = dirtyText.replace(/<\/?[^>]+(>|$)/g, "");

// 				/* Decode entity and RM multilines */
// 				var cleanText = he.decode(dirtyText);
// 				cleanText = cleanText.replace(/\n\s*\n\s*\n/g, "\n\n");

// 				// console.log(cleanText);
// 				text += cleanText;

// 			})

//       i++;                    
//       if (i < amountPages) {       
//          scraperTimeLoop();        
//       }
//       if (i === amountPages) {       
//          fs.writeFile(ppn + '.txt', text, function (err) {
// 				  if (err) return console.log(err);
// 				  console.log('Saved!');
// 				});    
//       }                       
//    }, 500)
// }

// scraperTimeLoop();


console.log('SCRAPER STARTED');

var converter = new Converter({});

converter.on("end_parsed", function (scrapelijst) {

	var iOuter = 0;

	function scraperOuterTimeLoop () { 
   setTimeout(function () {  
   		var author = scrapelijst[iOuter].url;
			var firstPage = scrapelijst[iOuter].firstpage;
			var amountPages = scrapelijst[iOuter].lastpage;
			var ppn = scrapelijst[iOuter].ppn; 
   		console.log('Beginnen met: ' + ppn + ', werk ' + iOuter + ' van ' + scrapelijst.length);




   		function toScrape (auth, firstP, lastP, ppn) {
				var scrapedUrl = 'http://www.dbnl.org/tekst/' + auth + '/' + auth + '_0';
				var i = firstP;
				var text = '';

				function scraperTimeLoop () { 
				   setTimeout(function () {  
				   		console.log('NIEUWE LOOP');

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
								// console.log(obj);

								if (obj[0] == null) {
									var dirtyText = "";
								} else {
									var dirtyText = obj[0].text;
								}
								/* Remove everything inside <a href> */
								dirtyText = dirtyText.replace(/<a.*a>/g, '');
								/* Remove toneel lines */
								dirtyText = dirtyText.replace(/<div class="line-nr.*div>/g, '');
								/* Remove notes */
								dirtyText = dirtyText.replace(/<div class="notes(.|\s)*<\/div>/g, '');

								/* Remove brackets */
								dirtyText = dirtyText.replace(/\[.*?\]/g,' ');
								/* Remove all HTML junk */
								dirtyText = dirtyText.replace(/<\/?[^>]+(>|$)/g, "");

								/* Decode entity and RM multilines */
								var cleanText = he.decode(dirtyText);
								cleanText = cleanText.replace(/\n\s*\n\s*\n/g, "\n\n");

								// console.log(cleanText);
								text += cleanText;

							})

				      i++;                    
				      if (i < lastP) {       
				         scraperTimeLoop();        
				      }
				      if (i === lastP) {       
				         fs.writeFile('teksten/november/' + ppn + '.txt', text, function (err) {
								  if (err) return console.log(err);
								  console.log('Saved! ', ppn);
								});    
				      }                       
				   }, 1000)
				}

				scraperTimeLoop();
   		}

   		/* Functie oproepen */
   		toScrape(author, firstPage, amountPages, ppn);

      iOuter++;                    
      if (iOuter < scrapelijst.length) {       
         scraperOuterTimeLoop();        
      }                   
   }, 120000)
}

scraperOuterTimeLoop();
});


require("request").get("https://docs.google.com/spreadsheets/d/1kNHdXUcCZih0KSH4iGDlcnUuKZE5pOhwD2PUVBM8Cco/pub?gid=0&single=true&output=csv").pipe(converter);
