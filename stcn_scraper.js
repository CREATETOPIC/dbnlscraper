var request = require('request');
var Converter = require("csvtojson").Converter;
var _ = require('lodash');
var AWS = require('aws-sdk'); 

var results = new Object();
var converter = new Converter({});

converter.on("end_parsed", function (ppnNumbers) {
		var i = 0;
		var allSTCN = ppnNumbers;

		console.log('TOTAAL: ', allSTCN.length);
		console.log('VOLGENDE PPNS: ', allSTCN);

		function STCNLoop () {
	  	setTimeout(function () {

	  	var currentSTCN = allSTCN[i].ppnnumber;
			// console.log(currentSTCN);

		requestedURL = 'http://openvirtuoso.kbresearch.nl/sparql?default-graph-uri=&query=SELECT+*%0D%0AWHERE+%7B%0D%0A%3Chttp%3A%2F%2Fdata.kb.nl%2Fcatalogus%2F' + currentSTCN + '%3E+%3Fp+%3Fo.%0D%0A%7D&format=application%2Fsparql-results%2Bjson&timeout=0&debug=on' 
		/* Fix for loop met time delay */

		request(requestedURL, function (error, response, STCN) {
	    //Check for error
	    if(error){
	        return console.log('Error:', error);
	    }

	    //Check for right status code
	    if(response.statusCode !== 200){
	        return console.log('Invalid Status Code Returned:', response.statusCode);
	    }

	    var STCN = JSON.parse(STCN);
			results[currentSTCN] = {};

	    for (d = 0; d < STCN.results.bindings.length; d++) { 
				if (STCN.results.bindings[d].p.value == 'http://purl.org/dc/elements/1.1/date') {
					results[currentSTCN].jaar = JSON.stringify(STCN.results.bindings[d].o.value);
					// console.log(results[currentSTCN].jaar)
				} else if (STCN.results.bindings[d].p.value == 'http://purl.org/dc/elements/1.1/creator') {
					results[currentSTCN].thesaurus_auteur = JSON.stringify(STCN.results.bindings[d].o.value);
					// console.log(currentSTCN)
				} else if (STCN.results.bindings[d].p.value == 'http://purl.org/dc/elements/1.1/publisher') {
					results[currentSTCN].thesaurus_drukker = JSON.stringify(STCN.results.bindings[d].o.value);
				} else if (STCN.results.bindings[d].p.value == 'http://purl.org/dc/elements/1.1/title') {
					results[currentSTCN].titel = JSON.stringify(STCN.results.bindings[d].o.value);
					console.log('momenteel bezig met ', currentSTCN);
					results[currentSTCN].ppn = currentSTCN;
					results[currentSTCN].url_text = 'https://raw.githubusercontent.com/CREATETOPIC/corpus/master/collectiea/' + currentSTCN + '.txt';
					results[currentSTCN].url_stcn = 'http://picarta.nl/DB=3.11/XMLPRS=Y/PPN?PPN=' + currentSTCN;
					results[currentSTCN].auteur = '';
					results[currentSTCN].drukker = '';
					results[currentSTCN].plaats = '';
					results[currentSTCN].keywords = '';
				}
			}
		});

      i++;    
      if (i < ppnNumbers.length) {
    			STCNLoop();			
			  }
			}, 1000)

	console.log(i);

			if (i === ppnNumbers.length - 1) {

				console.log('Laatste STCN');

				setTimeout(function(){ 

				var currentResults = _.toArray(results);
				// console.log(currentResults);

			var json2csv = require('json2csv');
			var fields = ['ppn', 'url_text', 'url_stcn', 'thesaurus_auteur', 'auteur', 'titel', 'jaar', 'thesaurus_drukker', 'drukker', 'plaats'];
			 
			try {
			  var result = json2csv({ data: currentResults, fields: fields });
			  console.log(result);

				AWS.config.loadFromPath('./config.json');

				// console.log(saveString);

				var s3 = new AWS.S3();
				var s3Bucket = new AWS.S3( { params: {Bucket: 'createtopic'} } )

				var data = {Key: 'data2.csv', Body: result};
				s3Bucket.putObject(data, function(err, data){
				  if (err) 
				    { console.log('Error uploading data: ', data); 
				    } else {
				      console.log('Uploaded to S3');
				    }
				});

			} catch (err) {
			  // Errors are thrown for bad options, or if the data is empty and no fields are provided. 
			  // Be sure to provide fields if it is possible that your data array will be empty. 
			  console.error(err);
			}

				}, 8000);
			}

			//time
		}
		STCNLoop();

});

// S3 upload

// Normale PPN
// require("request").get("https://docs.google.com/spreadsheets/d/1mqxwr6G3eKbawASg-VM16pJeK_j81Y8ngg_c36uqQ60/pub?gid=0&single=true&output=csv").pipe(converter);

// PPN Referentiecorpus
require("request").get("https://docs.google.com/spreadsheets/d/1H4mv578CjDaWfXvCcQkCwmi8T7Fcrm5h9hXQTqjmgFQ/pub?gid=0&single=true&output=csv").pipe(converter);
