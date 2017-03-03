import { h, Component } from 'preact';
import style from './style';
import Tile from'../tile';
import $ from 'jquery';

export default class Home extends Component {

	/* Make initial call for weather data */
	constructor(props){
		super(props);
		this.fetchWeatherData();
	}

	/* Call for weather data utilizing elements passed in as properties */
	fetchWeatherData = () => {
		var apiKey = "" + this.props.apiKey;
		var latitude = "" + this.props.lat;
		var longitude = "" + this.props.lon;
		var url = "https://api.darksky.net/forecast/" + apiKey + "/" + latitude + "," + longitude + "?units=uk2";
		$.ajax({
			url: url,
			dataType: "jsonp",
			success : this.parseResponse,
			error : function(req, err){ console.log('Home: Weather API call failed, error: ' + err); }
		})
	}

	/* Render home screen by placing Tile components in organized rows */
	render() {
		return (
			<div class={"allRows " + style.home}>
				<div class={"row " + style.row}>
					<Tile title="Cloud Cover" data={this.state.cloudCoverage}/>
					<Tile title="Chance Of Rain" data={this.state.chanceOfRain}/>
				</div>
				<div class={"row " + style.row}>
					<Tile title="Average Visibility" data={this.state.visibility}/>
					<Tile title="Wind Speed" data={this.state.windspeed}/>
				</div>
				<div class={"row " + style.row}>
					<Tile title="Temperature" data={this.state.tempurature}/>
					<Tile title="Humidity" data={this.state.humidity}/>
					<Tile title="Pressure" data={this.state.pressure}/>
					<Tile title="Sunset Time" data={this.state.sunsetTime}/>
		  		</div>
		  	</div>
  		);
	}

	/* Parse response from API, setting states which will be necessary to build Home components */
	parseResponse = (parsed_json) => {
		console.log('Home: Weather API call sucessful');
		this.setState({
			cloudCoverage: parsed_json['currently']['cloudCover'], 
			chanceOfRain: parsed_json['currently']['precipProbability'], 
			visibility: parsed_json['currently']['visibility'],
			windspeed: parsed_json['currently']['windSpeed'],
			tempurature: parsed_json['currently']['temperature'],
			humidity: parsed_json['currently']['humidity'],
			pressure: parsed_json['currently']['pressure'],
			sunsetTime: parsed_json['daily']['data'][0]['sunsetTime'],
		});      
	}

}
