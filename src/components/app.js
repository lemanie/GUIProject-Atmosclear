import { h, Component } from 'preact';
import { Router } from 'preact-router';

import Header from './header';
import Home from './home';
import Footer from './footer';
import Profile from './profile';
import Events from './events';
import Sensors from './sensors';
import Settings from './settings';
import DayForecast from './dayforecast';
import WeekForecast from './weekforecast';

export default class App extends Component {
	/** Gets fired when the route changes.
	 *	@param {Object} event		"change" event from [preact-router](http://git.io/preact-router)
	 *	@param {string} event.url	The newly routed URL
	 */
	handleRoute = e => {
		this.currentUrl = e.url;
	};
	
	render() {
		return (
			<div class="devices">
				<div class="device device-android">
					<div id="app">
						<div class="statusbar-overlay"></div>
						<div class="panel-overlay"></div>
						<div class="panel panel-left panel-cover">
							<Settings />
						</div>	
						<div class="views">
							<div class="view view-main">
								<Header />
								<div class="pages navbar-through toolbar-through">
									<div data-page="day-forecast" class="page cached">
										<div class="page-content">
											<DayForecast />
										</div>
									</div>
									<div data-page="index" class="page">
										<div class="page-content">
											<Sensors />
											<Events />
										</div>
									</div>
									<div data-page="week-forecast" class="page cached">
										<div class="page-content">
											<WeekForecast />
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