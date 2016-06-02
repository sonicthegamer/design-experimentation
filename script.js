$(document).ready(function(){
/*
var i = 0,
fade = setInterval(function(){
    i++;
    $('body').css('background','rgb(' + i + ',' + i + ',' + 100 + ')');
},200);
*/


setInterval(function(){
    
value = $('#test').val();
$('body').append('<h1>' + value + '</h1>');
$('#string').text(value);

},1000);

});