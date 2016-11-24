var fs = require('fs');

// niet require maar automatisch parsen binnen javascript

var badwords = JSON.parse(fs.readFileSync('./badwords_small.json', 'utf8'));
// console.log(obj);

// console.log(badwords);


var amountOfBadwords = badwords.length;

fs.readFile('ttp_ocr2.txt', 'utf8', function (err,data) {
  if (err) {
    return console.log(err);
  }


  // console.log(data);
  for (var i = 0; i < amountOfBadwords; i++) {
    if (data.search(badwords[i]) > 0){
    	console.log(badwords[i])
    }

    // }
	}

});