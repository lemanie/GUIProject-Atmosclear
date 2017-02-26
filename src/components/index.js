import { h, Component } from 'preact';

import Header from './header'; // Import the header component
import Footer from './footer'; // Import the footer component
import Events from './events'; // Import the events component
import EventHandler from './eventHandler';
import Tile from './tile'; // Import the sensors component
import Settings from './settings'; // Import the settings page
import DailyForecast from './dailyForecast'; // Import the day forecast page (left)
import WeeklyForecast from './weeklyForecast'; // Import the week forecast page (right)
import TableHeader from './tableHeader';
import Navigation from './navigation';
import $ from 'jquery';

export default class App extends Component {
	constructor() {
		super();
		this.setState({
			selected: 'index',
			mode: 'day'
		});
	}

	render() {
		var APIKEY = "" + "789ca30671f514e40bdee5c11f1601ed";
		var LATITUDE = "" + "51.528308";
		var LONGITUDE = "" + "-0.3817765";
		return (
			<div class="device-wrapper">
				<div class="device device-android"> 
					<div id="app" class={`framework7-root ${this.state.selected} ${this.state.mode}`}> 
						<div class="panel-overlay"></div>
						<div class="panel panel-left panel-cover"><Settings /></div>
						<div class="views">
							<div class="view view-main">
								<div class="pages navbar-fixed toolbar-fixed">
									<Header onModeChange={mode => this.setState({...this.state, mode})}/>
        							<div data-page="day-forecast" 
        							 class={`page ${this.state.selected!=='day-forecast'?'cached':''}`}>
										<TableHeader />
										<DailyForecast apiKey={APIKEY} lat={LATITUDE} lon={LONGITUDE}/>
										<Footer selected={this.state.selected}
										  onSelectionChange={selected => this.setState({...this.state, selected})}/>
									</div>
									<div data-page="index"
									 class={`page ${this.state.selected!=='index'?'cached':''}`}>
										<Tile apiKey={APIKEY} lat={LATITUDE} lon={LONGITUDE}/>
										<EventHandler count="3" />
										<Footer selected={this.state.selected}
										  onSelectionChange={selected => this.setState({...this.state, selected})}/>
									</div>
									<div data-page="week-forecast"
									 class={`page ${this.state.selected!=='week-forecast'?'cached':''}`}>
										<TableHeader />
										<WeeklyForecast apiKey={APIKEY} lat={LATITUDE} lon={LONGITUDE}/>
										<Footer selected={this.state.selected}
										  onSelectionChange={selected => this.setState({...this.state, selected})}/>
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
