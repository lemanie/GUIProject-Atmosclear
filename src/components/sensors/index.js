import { h, Component } from 'preact';
import style from './style';

const SEARCH = 'http://149.210.182.182/ds.php';

export default class Sensors extends Component {
	state = {
		data: []
	};

	loadData() {
		fetch(`${SEARCH}?lat=51.528308&long=-0.3817765`)
		  .then(response => response.json())
		  .then(json => {
			console.log(json);
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
		var sensors = this.state.data.map(function(data) {
			//format sunset time
			var sunsetDateTime = new Date(data.daily.data[0].sunsetTime*1000);
			var sunsetDateTimeString = sunsetDateTime.getHours()+":"+ ("0" + sunsetDateTime.getMinutes());
			
			//format chance of rain
			var chanceOfRain = 0;
			if(data.daily.data[0].precipType === "rain") {
				chanceOfRain = parseFloat(data.daily.data[0].precipProbability) * 100;
			}
			return (
				<div class={style.sensors}>
					<div class="row">
					  <div class={style.sensor50 + " " + style.cloudCoverage}>
						<i class={"wi wi-cloud " + style.icon}></i> <span class={style.sensorData}>Cloud Coverage<br/> {parseFloat(data.currently.cloudCover)*100}% </span>
					  </div>
					  <div class={style.sensor50 + " " + style.chanceRain}>
						<i class={"wi wi-rain " + style.icon}></i> <span class={style.sensorData}>Chance <br/> of Rain <br/> {chanceOfRain}% </span>
					  </div>
					</div>
					<div class="row">
					  <div class={style.sensor50 + " " + style.visibility}>
						<i class={"wi wi-dust " + style.icon}></i> <span class={style.sensorData}> Visibility Level<br/> {data.currently.visibility} miles </span>
					  </div>
					  <div class={style.sensor50 + " " + style.windSpeed}>
						<i class={"wi wi-strong-wind " + style.icon}></i> <span class={style.sensorData}> Wind Speed<br/> {data.currently.windSpeed}mph </span>
					  </div>
					</div>
					<div class="row">
					  <div class={style.sensor25 + " " + style.temperature}>
						<i class={"wi wi-thermometer " + style.icon}></i> <span class={style.sensorData}> Temperature<br/> {data.currently.temperature} C </span>
					  </div>
					  <div class={style.sensor25 + " " + style.humidity}>
						<i class={"wi wi-humidity " + style.icon}></i> <span class={style.sensorData}> Humidity<br/> {parseFloat(data.currently.humidity)*100}% </span>
					  </div>
					  <div class={style.sensor25 + " " + style.pressure}>
						<i class={"wi wi-barometer " + style.icon}></i> <span class={style.sensorData}> Pressure<br/> {data.currently.pressure}mb </span>
					  </div>
					  <div class={style.sensor25 + " " + style.sunset}>
						<i class={"wi wi-sunset " + style.icon}></i> <span class={style.sensorData}> Sunset<br/> {sunsetDateTimeString} </span>
					  </div>
					</div>
				</div>
			);
			});
			

		return (
		  <div>{sensors}</div>
		);
	}
}
