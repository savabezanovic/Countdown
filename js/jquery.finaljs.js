

(function($) {

    $.fn.finaljs = function() {

      // The countdown function
function countdown(){
  var now = new Date();
  var eventDate = new Date(2017,0,0);

  var currentTiime = now.getTime();
  var eventTime = eventDate.getTime();

  var remTime = eventTime - currentTiime;

  var s = Math.floor(remTime / 1000);
  var m = Math.floor(s / 60);
  var h = Math.floor(m / 60);
  var d = Math.floor(h / 24);

  h %= 24;
  m %= 60;
  s %= 60;

  h = (h < 10) ? "0" + h : h;
  m = (m < 10) ? "0" + m : m;
  s = (s < 10) ? "0" + s : s;

  document.getElementById("days").innerText = d;
  document.getElementById("hours").innerText = h;
  document.getElementById("minutes").innerText = m;
  document.getElementById("seconds").innerText = s;

  setTimeout(countdown, 1000);
}
countdown();
// The snow function
var wh = $(window).height();
var ww = $(window).width();

var lelujanjeKoeficijent = 10;
var vetarMax = 250;
var vetar = -50;


// Interval za promenu vetra
setInterval(function() {
  var plusOrMinus = Math.random() < 0.5 ? -1 : 1;
  vetar = calcVetar() * plusOrMinus;
}, 3000);

// Interval za promenu pahulja
setInterval(function(){
  $('#model').clone().appendTo('body')
    .show()
    .css('left', Math.random() * ww)
    .animate({
       top: wh
    }, {
       duration: 7000,
       complete: function(){
          $(this).remove();
       },
       progress: function(an, br) {
        
          if (br === 0) {
           smer($(this));
          } 
         
         if (br > 0.5 && br < 0.6) {
            smer($(this));
         }
       }
});
}, 60);


// Funcija za promenu vetra
function calcVetar() {
  return Math.round(Math.random() * vetarMax);
}

// Funkcija za lelujanje pahulja
function lelujanje(){
  var plusOrMinus = Math.random() < 0.5 ? -1 : 1;
  return Math.round(Math.random() * lelujanjeKoeficijent * plusOrMinus * 10);
}

// Funkcija za smer pahulja
function smer($element){
  $element.animate({
    left: parseFloat($element.css('left')) + vetar + lelujanje() + "px"
  }, {
    queue: false,
    duration: 2500
  });
}       

    }
}(jQuery));

$.fn.finaljs();