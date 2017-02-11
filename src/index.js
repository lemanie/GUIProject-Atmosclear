// import 'promise-polyfill';
// import 'isomorphic-fetch';
import { h, render } from 'preact';
import './style';

import f7 from './lib/framework7.min.js';

let root;
function init() {
	let App = require('./components/index').default;
	root = render(<App />, document.body, root);

	var myApp = new Framework7({
		root : "#app",
		animateNavBackIcon : true
	});

	// Add view
	var mainView = myApp.addView('.view-main', {
		dynamicNavbar : true,
		domCache : true
	});

	// Init slider and store its instance in mySwiper variable
	var mySwiper = myApp.swiper('.swiper-container');
}

// register ServiceWorker via OfflinePlugin, for prod only:
if (process.env.NODE_ENV==='production') {
	require('./pwa');
}

// in development, set up HMR:
if (module.hot) {
	//require('preact/devtools');   // turn this on if you want to enable React DevTools!
	module.hot.accept('./components/index', () => requestAnimationFrame(init) );
}

init();
