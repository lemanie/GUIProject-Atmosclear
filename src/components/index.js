import { h, Component } from 'preact';

import Header from './header'; // Import the header component
import Footer from './footer'; // Import the footer component
import Events from './events'; // Import the events component
import Tile from './tile'; // Import the sensors component
import Settings from './settings'; // Import the settings page
import DailyForecast from './dailyForecast'; // Import the day forecast page (left)
import WeeklyForecast from './weeklyForecast'; // Import the week forecast page (right)
import TableHeader from './tableHeader';
import Navigation from './navigation';
import PageContent from './pageContent';
import $ from 'jquery';

export default class App extends Component {	

	render() {
		return (
			<div class="device-wrapper">
				<div class="device device-android"> 
					<div id="app"> 
						<div class="panel-overlay"></div>
						<div class="panel panel-left panel-cover"><Settings /></div>
						<div class="views">
							<div class="view view-main">
								<div class="pages">
									<div class="pages navbar-through toolbar-through">
										<Header /> 
										<div class="page" data-page="index" class="page">
											<PageContent title="index"/>
											<Footer />
										</div>
	        							<div class="page" data-page="day-forecast" class="page cached">
											<PageContent title="day-forecast"/>
											<Footer />
										</div>
										<div class="page" data-page="week-forecast" class="page cached">
											<PageContent title="week-forecast"/>
											<Footer />
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
	
}
