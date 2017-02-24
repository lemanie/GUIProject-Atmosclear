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
import PageContent from './pageContent';
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
		return (
			
			<div class="device-wrapper">
				<div class="device device-android"> 
					<div id="app" class={`framework7-root ${this.state.selected} ${this.state.mode}`}> 
						<div class="panel-overlay"></div>
						<div class="panel panel-left panel-cover"><Settings /></div>
						<div class="views">
							<div class="view view-main">
								<div class="pages">
									<div class="pages navbar-through toolbar-through">
										<Header onModeChange={mode => this.setState({...this.state, mode})} /> 
										<div>
		        							<div data-page="day-forecast" class={`page ${this.state.selected !== 'day-forecast' ? 'cached' : ''}`}>
												<PageContent title="day-forecast"/>
												<Footer selected={this.state.selected} onSelectionChange={selected => this.setState({...this.state, selected})} />
											</div>

											<div data-page="week-forecast" class={`page ${this.state.selected !== 'week-forecast' ? 'cached' : ''}`}>
												<PageContent title="week-forecast"/>
												<Footer selected={this.state.selected} onSelectionChange={selected => this.setState({...this.state, selected})} />
											</div>

											<div data-page="index" class={`page ${this.state.selected !== 'index' ? 'cached' : ''}`}>
												<PageContent title="index"/>
												<Footer selected={this.state.selected} onSelectionChange={selected => this.setState({...this.state, selected})} />
											</div>
										</div>

x									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
	
}
