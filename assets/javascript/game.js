var wins =0;
var losses=0;
var totalGames = 0;
var aAudio = new Audio('./assets/sounds/crystal.mp3');
var bAudio = new Audio('./assets/sounds/win.mp3');
var cAudio = new Audio('./assets/sounds/lost.mp3');

function endofthegame() {
	$('#podshet').attr('style','opacity:0;');
	$('.scores').attr('style','opacity:0;');
}
function random() {
    $('#podshet').attr('data-e','0');
    $('#podshet').text('0');
    min = Math.ceil('40');
    max = Math.floor('80'); 
	randomize = Math.floor(Math.random() * (max - min + 1)) + min;
	$('#chislo').attr('data-e', randomize);
	$('#chislo').text(randomize);
	min = Math.ceil('1');
	max = Math.floor('10'); 
    random1 =  Math.floor(Math.random() * (max - min + 1)) + min;
	$('#first').attr('data-e', random1);
    random2 =  Math.floor(Math.random() * (max - min + 1)) + min;
	$('#second').attr('data-e', random2);
	random3 =  Math.floor(Math.random() * (max - min + 1)) + min;
	$('#third').attr('data-e', random3);
	random4 =  Math.floor(Math.random() * (max - min + 1)) + min;
    $('#fourth').attr('data-e', random4);
	$('#total').attr('style','display:none;');
    $('#total').text('');
	$('#podshet').attr('style','opacity:1;');
    $('.scores').attr('style','opacity:1;');
    $('#total').removeClass("won");
    $('#total').removeClass("lose");
    
    
}
$(document).ready(function(){
        random();
});

$('img').click(function(){    
   var a = $(this).parent().attr('data-e');
   var a = parseInt(a);
   var b = $('#podshet').attr('data-e');
   var b = parseInt(b);
   var a = a + b;
   aAudio.play();
   $('#podshet').text(a);
   $('#podshet').attr('data-e', a); 
   if (a > randomize) {
    lose();
   } else if (a === randomize) {
    win();
   }
});


function win() {
    
    totalGames++;
    wins++;
    $("#games").text(totalGames);
    $("#wins").text(wins);
	$('#total').attr('style','display:block;');
	$('#total').addClass("won");
	endofthegame()
    $('#total').text('You won!');
    bAudio.play();
    setTimeout(random, 1000);
    
}
function lose() {
    totalGames++;
    losses++;
    $("#games").text(totalGames);
    $("#losses").text(losses);
    $('#total').attr('style','display:block;');
    $('#total').addClass("lose");
	endofthegame()
    $('#total').text('You lost!');
    cAudio.play();
	setTimeout(random, 1000);	
}
$('#instrbtn').click(function() {
    $('#instructions').toggleClass('opened')
    });