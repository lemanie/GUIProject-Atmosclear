import { h, Component } from 'preact';
import style from './style';
import Tile from'../tile';
import $ from 'jquery';// import jquery for API calls

export default class Home extends Component {
	// a constructor with initial set states
	constructor(props){
		super(props);
		this.fetchWeatherData();
	}

	// a call to fetch weather data via darkSky
	fetchWeatherData = () => {
		var apiKey = "" + this.props.apiKey;
		var latitude = "" + this.props.lat;
		var longitude = "" + this.props.lon;
		var url = "https://api.darksky.net/forecast/" + apiKey + "/" + latitude + "," + longitude + "?units=uk2";
		$.ajax({
			url: url,
			dataType: "jsonp",
			success : this.parseResponse,
			error : function(req, err){ console.log('API call failed ' + err); }
		})
	}

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

	parseResponse = (parsed_json) => {
		console.log('Weather call home sucessful');
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
