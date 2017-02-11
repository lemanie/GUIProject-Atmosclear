import { h, Component } from 'preact';
import style from './style';

const SEARCH = 'http://149.210.182.182/ds.php'; //DarkSky API Proxy Server URL

export default class Sensors extends Component {
	state = {
		data: []
	};

	loadData() {
		var latitude = 51.528308; // according to google these are the coordinates for london
		var longitude = -0.3817765; // we need to get these coordinates either by getting the ip of the user and then transforming them to gps coordinates or by using google maps sensor api

		//fetch the weather data (we can replace this with Astrid's $.ajax call)
		fetch(`${SEARCH}?lat=${latitude}&long=${longitude}`)
		  .then(response => response.json())
		  .then(json => {
				var newData = this.state.data.concat([json]);
				this.setState({
					data: newData
				});
		  });
	}

  componentDidMount() {
		this.loadData();
	}

	render() {
			var sensors = this.state.data.map(function(data) { //this function will contain a data array in its environment holding all weather api related data

				//format sunset time ouput
				var sunsetDateTime = new Date(data.daily.data[0].sunsetTime*1000);
				var sunsetDateTimeString = sunsetDateTime.getHours()+":"+ ((sunsetDateTime.getMinutes() > 9 ? sunsetDateTime.getMinutes() : "0" + sunsetDateTime.getMinutes()));

				//format chance of rain ouput
				var chanceOfRain = 0;
				if(data.daily.data[0].precipType === "rain") {
					chanceOfRain = Math.ceil(parseFloat(data.daily.data[0].precipProbability) * 100);
				}

				return (
					<div class={style.sensors}> {/*All sensors are wrapped by a div with class 'sensors' see style.less*/}
						<div class="row"> {/*This row will include two big sensors*/}
						  <div class={style.sensor50 + " " + style.cloudCoverage}> {/*A sensor is defined by sensor50 or sensor25 (refering to wether it is using 50% or 25% of the screen) and has a specific name to change its background color*/}
								<i class={"wi wi-cloud " + style.icon}></i> {/*Each sensor has an icon*/}
								<span class={style.sensorData}>Cloud Coverage<br/> {Math.ceil(parseFloat(data.currently.cloudCover)*100)}% </span> {/*Each sensor has a description and its data pulled from the weather api*/}
						  </div>
						  <div class={style.sensor50 + " " + style.chanceRain}> {/*This is a copy of the above*/}
								<i class={"wi wi-rain " + style.icon}></i>
								<span class={style.sensorData}>Chance <br/> of Rain <br/> {chanceOfRain}% </span>
						  </div>
						</div>
						<div class="row"> {/*This row will include two big sensors*/}
						  <div class={style.sensor50 + " " + style.visibility}> {/*Idem*/}
								<i class={"wi wi-dust " + style.icon}></i>
								<span class={style.sensorData}> Visibility Level<br/> {data.currently.visibility} miles </span>
						  </div>
						  <div class={style.sensor50 + " " + style.windSpeed}>
								<i class={"wi wi-strong-wind " + style.icon}></i>
								<span class={style.sensorData}> Wind Speed<br/> {data.currently.windSpeed}mph </span>
						  </div>
						</div>
						<div class="row"> {/*This row will include four small sensors*/}
						  <div class={style.sensor25 + " " + style.temperature}>
								<i class={"wi wi-thermometer " + style.icon}></i>
								<span class={style.sensorData}> Temperature<br/> {data.currently.temperature} &deg;F </span>
						  </div>
						  <div class={style.sensor25 + " " + style.humidity}>
								<i class={"wi wi-humidity " + style.icon}></i>
								<span class={style.sensorData}> Humidity<br/> {parseFloat(data.currently.humidity)*100}% </span>
						  </div>
						  <div class={style.sensor25 + " " + style.pressure}>
								<i class={"wi wi-barometer " + style.icon}></i>
								<span class={style.sensorData}> Pressure<br/> {data.currently.pressure}mb </span>
						  </div>
						  <div class={style.sensor25 + " " + style.sunset}>
								<i class={"wi wi-sunset " + style.icon}></i>
								<span class={style.sensorData}> Sunset<br/> {sunsetDateTimeString} </span>
						  </div>
						</div>
					</div>
				);
			});

			return ( //TODO: Render for when data is not loaded yet
				<div>{sensors}</div>
			);
	}
}
