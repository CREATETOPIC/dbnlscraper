http://picarta.nl/DB=3.11/XMLPRS=Y/PPN?PPN=313903433


var he = require('he');

var Xray = require('x-ray');
var x = Xray();

var ppn = process.argv[2];

// var scrapedUrl = 'http://picarta.nl/DB=3.11/XMLPRS=Y/PPN?PPN=/' + ppn;
var scrapedUrl = 'http://picarta.nl/DB=3.11/XMLPRS=Y/PPN?PPN=313903433';
var he = require('he');



			x(scrapedUrl, '.rec_title', [{
				title: '',
			}])(function(err, obj) {
				console.log('titel, impressum, annotatie, formaat, collatie, vingeradruk, typografie, auteur, jaar, drukker, onderstrefwoord, signatuur, url, recordnummer')
				console.log(obj[0].title.replace(/\s+/g, ' ').trim() + ', \"' + obj[1].title.replace(/\s+/g, ' ').trim() + '\", \"' +  obj[2].title.replace(/\s+/g, ' ').trim() + '\", \"' +  obj[3].title.replace(/\s+/g, ' ').trim() + '\", \"' +  obj[4].title.replace(/\s+/g, ' ').trim() + '\", \"' + obj[5].title.replace(/\s+/g, ' ').trim() + '\", \"' + obj[6].title.replace(/\s+/g, ' ').trim() + '\", \"' +  obj[7].title.replace(/\s+/g, ' ').trim() + '\", \"' + obj[8].title.replace(/\s+/g, ' ').trim() + '\", \"' + obj[9].title.replace(/\s+/g, ' ').trim() + '\", \"' +  obj[10].title.replace(/\s+/g, ' ').trim() + '\", \"' + obj[11].title.replace(/\s+/g, ' ').trim() + '\",' + obj[12].title.replace(/\s+/g, ' ').trim());

			})

    