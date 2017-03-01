import { h, Component } from 'preact';
import style from './style';
import $ from 'jquery';// import jquery for API calls

export default class Notification extends Component {
	// a constructor with initial set states
	constructor(props){
		super(props);
		if (this.props.notificationStatus) {
			this.fetchWeatherData();
		}
		this.setState({
			mode: 'day',
		});
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
			error : function(req, err){ console.log('     Notification API call failed ' + err); }
		})
	}

	render() {	
		if (this.props.notificationStatus) {
			var currentTime = new Date().getHours();
			var nextHour = currentTime+1;
			var chanceOfRainNextHour = parseInt((this.state.chanceOfRain1)*100); 
			console.log(chanceOfRainNextHour);
			if ( (chanceOfRainNextHour > 49) ){
				return (
					<div class={"popover popover-notification " + style.notification}>
						<span class={style.notData}>
							<p>
								Current Weather Warning:<br/> 
								{nextHour}:00 {chanceOfRainNextHour}% Chance of Rain<br/>
								<a href="#" class="link close-popover">
									<i class={`material-icons ${style.icon}`}>
										close
									</i>
								</a>
							</p>
						</span>
					</div>
		  		);
		  	}
		  	else {
		  		var chancesOfRain = [this.state.chanceOfRain2, this.state.chanceOfRain3, this.state.chanceOfRain4, this.state.chanceOfRain5, this.state.chanceOfRain6, this.state.chanceOfRain7, this.state.chanceOfRain8, this.state.chanceOfRain9, this.state.chanceOfRain10, this.state.chanceOfRain11, this.state.chanceOfRain12];
		  		var i;
		  		var chanceOfRainFuture = "";
		  		var message = "";
		  		var futureHour = currentTime+2;
		  		for (i = 0; i<chancesOfRain.length; i++){
		  			if (chancesOfRain[i] > 49) {
		  				chanceOfRainFuture = parseInt((chancesOfRain[i])*100);
		  				futureHour = futureHour + i;
		  				break;
		  			}
		  		}
		  		if ( i === 11 ) {
		  			message = "no rain expected for next 12 hours";
		  		}
		  		else {
		  			message = futureHour+ ":00 " + chanceOfRainFuture + "%";
		  		}
		  		

		  		return (
		  			<div class={"popover popover-notification " + style.notification}>
						<span class={style.notData}>
							<p>No Current Weather Warnings:<br/> 
								{message}<br/>
								<a href="#" class="link close-popover" >
									<i class={`material-icons ${style.icon}`}>
										close
									</i>
								</a>
							</p>
						</span>
					</div>
		  		);
		  	}
		}
		else {
		}
	}

	parseResponse = (parsed_json) => {
		console.log('     Notification API call sucessful');
		this.setState({
			chanceOfRain1: [parsed_json['hourly']['data'][1]['precipProbability']], 
			chanceOfRain2: [parsed_json['hourly']['data'][2]['precipProbability']], 
			chanceOfRain3: [parsed_json['hourly']['data'][3]['precipProbability']], 
			chanceOfRain4: [parsed_json['hourly']['data'][4]['precipProbability']], 
			chanceOfRain5: [parsed_json['hourly']['data'][5]['precipProbability']], 
			chanceOfRain6: [parsed_json['hourly']['data'][6]['precipProbability']], 
			chanceOfRain7: [parsed_json['hourly']['data'][7]['precipProbability']], 
			chanceOfRain8: [parsed_json['hourly']['data'][8]['precipProbability']], 
			chanceOfRain9: [parsed_json['hourly']['data'][9]['precipProbability']], 
			chanceOfRain10: [parsed_json['hourly']['data'][10]['precipProbability']], 
			chanceOfRain11: [parsed_json['hourly']['data'][11]['precipProbability']], 
			chanceOfRain12: [parsed_json['hourly']['data'][12]['precipProbability']], 
		});      
	}

}