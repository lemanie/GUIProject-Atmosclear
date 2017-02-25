import { h, Component } from 'preact';
import Footer from '../footer'; // Import the footer component
import Events from '../events'; // Import the events component
import Tile from '../tile'; // Import the sensors component
import DailyForecast from '../dailyForecast'; // Import the day forecast page (left)
import WeeklyForecast from '../weeklyForecast'; // Import the week forecast page (right)
import TableHeader from '../tableHeader';
import EventHandler from '../eventHandler';

import $ from 'jquery';// import jquery for API calls

export default class PageContent extends Component {
	// a constructor with initial set states
	constructor(props){
		super(props);
	}

	selectData(title){
  		switch(title) {
  			case "day-forecast":
  				return (<div class="page-content">
  							<TableHeader />
  							<DailyForecast apiKey={this.props.apiKey}/>
  						</div>);
	  			break;
	  		case "index":
  				return (<div class="page-content">
  							<Tile apiKey={this.props.apiKey}/>
  							<EventHandler count="3" />
  						</div>);
	  			break;
	  		case "week-forecast":
  				return (<div class="page-content">
							<TableHeader />
							<WeeklyForecast apiKey={this.props.apiKey}/>
						</div>);
	  			break;
	  		default:
	  			return;
	  	}
  	}

	render() {
		return (this.selectData(this.props.title));
	}

	parseResponse = (parsed_json) => {
		this.setState({ 
				latitude: parsed_json['latitude'],
				longitude: '0',
			});
	}
}
