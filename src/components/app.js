import { h, Component } from 'preact';

import Header from './header';
import Home from './home';
import Footer from './footer';
import Profile from './profile';
import Events from './events';
import Sensors from './sensors';
import Settings from './settings';

export default class App extends Component {
	/** Gets fired when the route changes.
	 *	@param {Object} event		"change" event from [preact-router](http://git.io/preact-router)
	 *	@param {string} event.url	The newly routed URL
	 */

	render() {
		return (
			<div class="devices">
				<div class="device device-android">
					<div id="app">
						<div class="panel-overlay"></div>
						<div class="panel panel-left panel-cover">
							<Settings />
						</div>	
						<div class="views">
							<div class="view view-main">
								<Header />
								<div class="pages navbar-through toolbar-through">
								  <div data-page="index" class="page">
									<div class="page-content">
										<Sensors />
										<Events />
									</div>
								  </div>
								</div>
								<Footer />
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}