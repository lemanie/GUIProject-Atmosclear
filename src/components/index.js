import { h, Component } from 'preact';

import Header from './header'; // Import the header component
import Footer from './footer'; // Import the footer component
import Events from './events'; // Import the events component
import Tile from './tile'; // Import the sensors component
import Settings from './settings'; // Import the settings page
import DailyForecast from './dailyForecast'; // Import the day forecast page (left)
import WeeklyForecast from './weeklyForecast'; // Import the week forecast page (right)
import TableHeader from './tableHeader';
import $ from 'jquery';

export default class App extends Component {	

	render() {
		return (
			<div class="device-wrapper">
				<div class="device device-android">  {/*Create android feel around app*/}
					<div id="app"> {/*This is the entry point of the application*/}
						<div class="panel-overlay"></div> {/*This is used by F7 to either show or hide a panel*/}
						<div class="panel panel-left panel-cover"> {/*This defines the left panel*/}
							<Settings /> {/*Render/place the settings page here*/}
						</div>
						<div class="views"> {/*Here all views will be shown.*/}
							<div class="view view-main">
								<Header /> {/*Render/place the header component here (fixed throughout app)*/}
								<div class="pages navbar-through toolbar-through"> {/*Here all the pages will be shown .*/}
									<div data-page="day-forecast" class="page cached">
										<div class="page-content">
											<TableHeader />
											<DailyForecast />
										</div>
									</div>
									<div data-page="index" class="page">
										<div class="page-content">
											<div class = "row">
												<Tile title="Cloud Cover"/>
												<Tile title="Chance Of Rain"/>
											</div>
											<div class = "row">
												<Tile title="Average Visibility"/>
												<Tile title="Wind Speed"/>
											</div>
											<div class = "row">
												<Tile title="Temperature"/>
												<Tile title="Humidity"/>
												<Tile title="Pressure"/>
												<Tile title="Sunset Time"/>
											</div>
											<Events /> {/*Render/place the events components here*/}
										</div>
									</div>
									<div data-page="week-forecast" class="page cached">
										<div class="page-content">
											<TableHeader />
											<WeeklyForecast />
										</div>
									</div>
								</div>
								<Footer /> {/*Render/place the footer component here (fixed throughout app)*/}
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}
