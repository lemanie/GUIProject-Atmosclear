import { h, Component } from 'preact';

import Header from './header'; // Import the header component
import Footer from './footer'; // Import the footer component
import Events from './events'; // Import the events component
import Sensors from './sensors'; // Import the sensors component
import Settings from './settings'; // Import the settings page
import DayForecast from './dayforecast'; // Import the day forecast page (left)
import WeekForecast from './weekforecast'; // Import the week forecast page (right)

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
											<DayForecast />  {/*Render/place the day forecast page here*/}
										</div>
									</div>
									<div data-page="index" class="page">
										<div class="page-content">
											<Sensors /> {/*Render/place the sensors components here*/}
											<Events /> {/*Render/place the events components here*/}
										</div>
									</div>
									<div data-page="week-forecast" class="page cached">
										<div class="page-content">
											<WeekForecast /> {/*Render/place the week forecast page here*/}
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