$(document).ready(function(){

var i = 0,
fade = setInterval(function(){
    i++;
    $('body').css('background','rgb(' + i + ',' + i + ',' + i + ')');

},20);



});