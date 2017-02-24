import { h, Component } from 'preact';
import style from './style';
import $ from 'jquery';// import jquery for API calls

export default class Tile extends Component {
	// a constructor with initial set states
	constructor(props){
		super(props);
		this.fetchWeatherData();
	}

	// a call to fetch weather data via darkSky
	fetchWeatherData = () => {
		var url = "https://api.darksky.net/forecast/9211576f6b204ec1c8eb8dde7bbcfdaa/51.528308,-0.3817765?units=uk2";
		$.ajax({
			url: url,
			dataType: "jsonp",
			success : this.parseResponse,
			error : function(req, err){ console.log('API call failed ' + err); }
		})
	}

	selectData(title) {
  		switch(title) {
  			case "Cloud Cover":
  				this.props.large = true;
  				this.props.top = true;
  				this.props.colour = "shade3";
  				this.props.icon = "cloud";
	  			return parseInt(this.state.cloudCoverage*100) +"%"; 
	  			break;
	  		case "Chance Of Rain":
	  			this.props.large = true;
  				this.props.top = true;
	  			this.props.colour = "shade2";
  				this.props.icon = "rain";
	  			return this.state.chanceOfRain*100 + "%"; 
	  			break;
	  		case "Average Visibility":
	  			this.props.large = true;
  				this.props.top = false;
	  			this.props.colour = "shade4";
  				this.props.icon = "dust";
	  			return this.state.visibility + " mi"; 
	  			break;
			case "Wind Speed":
				this.props.large = true;
  				this.props.top = false;
				this.props.colour = "shade1";
  				this.props.icon = "strong-wind";
	  			return this.state.windspeed + " mph"; 
	  			break;
	  		case "Temperature":
	  			this.props.large = false;
  				this.props.top = false;
	  			this.props.colour = "shade1";
  				this.props.icon = "thermometer";
	  			return this.state.tempurature + "'C"; 
	  			break;
	  		case "Humidity":
	  			this.props.large = false;
  				this.props.top = false;
	  			this.props.colour = "shade2";
  				this.props.icon = "humidity";
	  			return this.state.humidity*100 + "%"; 
	  			break;
			case "Pressure":
				this.props.large = false;
  				this.props.top = false;
				this.props.colour = "shade3";
  				this.props.icon = "barometer";
	  			return parseInt(this.state.pressure) + " mb"; 
	  			break;
	  		case "Sunset Time":
	  			this.props.large = false;
  				this.props.top = false;
	  			this.props.colour = "shade4";
  				this.props.icon = "horizon-alt";
  				//gets time from API in epoch, converts to real time
  					var epochTime = this.state.sunsetTime;
					var d = new Date(0); //0 = epoch setting
					d.setUTCSeconds(epochTime);
	  			return d.getHours() +":" + d.getMinutes();
	  			break;
	  		default:
	  			return;
	  	}
  	}

	render() {
		return (
			<div class={`
				${style.tile} 
				${this.props.large ? style.tile50 : style.tile25 } 
				${this.props.top ? style.topRow : style.topNot }
				${style[this.props.colour]}
			`}>
				<i class={`wi wi-${this.props.icon} 
					${style.icon}`}>
				</i>
				<span class={style.tileData}>
					{this.props.title}<br/> 
					{this.selectData(this.props.title)} 
				</span> 
			</div>
		);
	}

	parseResponse = (parsed_json) => {
		// set states for fields so they could be rendered later on
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
