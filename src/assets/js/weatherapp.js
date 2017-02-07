var myApp = new Framework7({
	root : "#app",
	animateNavBackIcon: true
});

var $$ = Dom7;

// Add view
var mainView = myApp.addView('.view-main', {
	dynamicNavbar: true,
	domCache:true
});

// Init slider and store its instance in mySwiper variable
var mySwiper = myApp.swiper('.swiper-container');