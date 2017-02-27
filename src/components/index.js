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
import Home from './home';
import $ from 'jquery';

export default class App extends Component {
	constructor() {
		super();
		this.fetchLocation();
		this.setState({
			active: 'view-index',
			mode: 'day',
			fetchLocationCalled: false,
		});
	}

	fetchLocation = () => {
		var url = "https://ipapi.co/json/";
		$.ajax({
			url: url,
			dataType: "json",
			success: this.parseLocation,
			error: function(req, err){console.log('Location call unsucessful, error: ' + err);}
		})
	}

	parseLocation = (parsed_json) => {
		console.log('Location call sucessful');
		this.setState({
			longitude: parsed_json['longitude'],
			latitude: parsed_json['latitude'],
			fetchLocationCalled: true,
		});
	}


	render() {
		var APIKEY = "" + "fd9448a8f8df54f13fe7eb12f7966933";
		var LATITUDE = String(this.state.latitude); 
		var LONGITUDE = String(this.state.longitude);
		if (this.state.fetchLocationCalled){
			return (
				<div class="device-wrapper">
					<div class="device device-android"> 
						<div id="app" class={`framework7-root ${this.state.active} ${this.state.mode} `}> 
							<div class="panel panel-left panel-cover">
								<Settings />
							</div>
							<div class="views tabs">
								<div class={`view ${this.state.active!=='view-day'?'view tab':'view-main tab active'}`} div id="view-day">
									<Header onModeChange={mode => this.setState({...this.state, mode})}/>
										<div class="pages navbar-fixed toolbar-fixed">
											<div class="page" data-page="day-forecast">
												<TableHeader daily={true} />
												<DailyForecast apiKey={APIKEY} lat={LATITUDE} lon={LONGITUDE}/>
											</div>
										</div>
									<Footer active={this.state.active} onSelectionChange={active => this.setState({...this.state, active})}/>
								</div>
								<div class={`view ${this.state.active!=='view-index'?'view tab':'view-main tab active'}`} div id="view-index">
									<Header onModeChange={mode => this.setState({...this.state, mode})}/>
										<div class="pages navbar-fixed toolbar-fixed">
											<div class="page" data-page="index">
												<Home apiKey={APIKEY} lat={LATITUDE} lon={LONGITUDE}/>
												<EventHandler count="3" />
											</div>
										</div>
									<Footer active={this.state.active} onSelectionChange={active => this.setState({...this.state, active})}/>
								</div>
								<div class={`view ${this.state.active!=='view-week'?'view tab':'view-main tab active'}`} div id="view-week">
									<Header onModeChange={mode => this.setState({...this.state, mode})}/>
										<div class="pages navbar-fixed toolbar-fixed">
											<div class="page " data-page="week-forecast">
												<TableHeader daily={false} />
												<WeeklyForecast apiKey={APIKEY} lat={LATITUDE} lon={LONGITUDE}/>
											</div>
										</div>
									<Footer active={this.state.active} onSelectionChange={active => this.setState({...this.state, active})}/>
								</div>
							</div>
						</div>
					</div>
				</div>
			);
		}
		else {
			console.log("not entered, empty pages displayed")
			return (	
				<div class="device-wrapper">
					<div class="device device-android"> 
						<div id="app" class={`framework7-root ${this.state.active} ${this.state.mode} `}> 
							<div class="panel panel-left panel-cover">
								<Settings />
							</div>
							<div class="views tabs">
								<div class={`view ${this.state.active!=='view-day'?'view tab':'view-main tab active'}`} div id="view-day">
									<Header onModeChange={mode => this.setState({...this.state, mode})}/>
										<div class="pages navbar-fixed toolbar-fixed">
											<div class="page" data-page="day-forecast">
									
											</div>
										</div>
									<Footer active={this.state.active} onSelectionChange={active => this.setState({...this.state, active})}/>
								</div>
								<div class={`view ${this.state.active!=='view-index'?'view tab':'view-main tab active'}`} div id="view-index">
									<Header onModeChange={mode => this.setState({...this.state, mode})}/>
										<div class="pages navbar-fixed toolbar-fixed">
											<div class="page" data-page="index">
										
												<EventHandler count="3" />
												
											</div>
										</div>
									<Footer active={this.state.active} onSelectionChange={active => this.setState({...this.state, active})}/>
								</div>
								<div class={`view ${this.state.active!=='view-week'?'view tab':'view-main tab active'}`} div id="view-week">
									<Header onModeChange={mode => this.setState({...this.state, mode})}/>
										<div class="pages navbar-fixed toolbar-fixed">
											<div class="page " data-page="week-forecast">
										
											</div>
										</div>
									<Footer active={this.state.active} onSelectionChange={active => this.setState({...this.state, active})}/>
								</div>
							</div>
						</div>
					</div>
				</div>
			);
		}

	}
	
}
