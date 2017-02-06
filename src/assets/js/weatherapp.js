var myApp = new Framework7({
	root : "#app"	
});

var $$ = Dom7;

// Add view
var mainView = myApp.addView('.view-main', {
	dynamicNavbar: true
});

// Init slider and store its instance in mySwiper variable
var mySwiper = myApp.swiper('.swiper-container');