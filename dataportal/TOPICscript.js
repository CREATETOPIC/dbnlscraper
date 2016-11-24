var hideWoordOutput = function () {
    $('div.KV').hide();
    $('div.TIE').hide();
    $('div.ETHICA').hide();
    $('div.EPISTOLAE').hide();
    $('div.TP').hide();
};

var showWoordOuput = function (){
    $( 'td' )
  .click(function() {
     var wordlistClass = $( this ).attr('class');
    $('div.KV').hide();
    $('div.TIE').hide();
    $('div.ETHICA').hide();
    $('div.EPISTOLAE').hide();
    $('div.TP').hide();
    $ ( 'div.' + wordlistClass).show();
  });
  
  $( 'td#KV, td#TIE, td#ETHICA, td#EPISTOLAE, td#TP, td#unique' )
  .click(function() {
     var wordList = $( this ).attr('class');
    $( '.woordOutput' ).text ( wordList)
  });
  
  
}
/*
var euclidean = function () {
    var value = $( 'td#euclidean' ).attr('class');
    var root = Math.sqrt(value).toFixed(2);
    $( 'td#euclidean' ).text( root );
} 

*/




var euclidean = function () {
    $( 'td#euclidean' ).each(function() {
        var value = $( this ).attr('class');
        var root = Math.sqrt(value).toFixed(2);
    $( this ).text( root );
    });
} 


$(document).ready(euclidean);
$(document).ready(hideWoordOutput);
$(document).ready(showWoordOuput);





