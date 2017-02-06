import { h, Component } from 'preact';
import style from './style';

export default class Sensors extends Component {
	render() {
		return (
			<div class={style.sensors}>
				<div class="row">
				  <div class={style.sensor50 + " " + style.cloudCoverage}>
					<i class={"wi wi-cloud " + style.icon}></i> <span class={style.sensorData}>Cloud Coverage<br/> 70% </span>
				  </div>
				  <div class={style.sensor50 + " " + style.chanceRain}>
					<i class={"wi wi-rain " + style.icon}></i> <span class={style.sensorData}> Chance <br/> of Rain <br/> 60% </span>
				  </div>
				</div>
				<div class="row">
				  <div class={style.sensor50 + " " + style.visibility}>
					<i class={"wi wi-dust " + style.icon}></i> <span class={style.sensorData}> Visibility Level<br/> 70% </span>
				  </div>
				  <div class={style.sensor50 + " " + style.windSpeed}>
					<i class={"wi wi-strong-wind " + style.icon}></i> <span class={style.sensorData}> Wind Speed<br/> 7mph </span>
				  </div>
				</div>
				<div class="row">
				  <div class={style.sensor25 + " " + style.temperature}>
					<i class={"wi wi-thermometer " + style.icon}></i> <span class={style.sensorData}> Temperature<br/> 70% </span>
				  </div>
				  <div class={style.sensor25 + " " + style.humidity}>
					<i class={"wi wi-humidity " + style.icon}></i> <span class={style.sensorData}> Humidity<br/> 60% </span>
				  </div>
				  <div class={style.sensor25 + " " + style.pressure}>
					<i class={"wi wi-barometer " + style.icon}></i> <span class={style.sensorData}> Pressure<br/> 1011mb </span>
				  </div>
				  <div class={style.sensor25 + " " + style.sunset}>
					<i class={"wi wi-sunset " + style.icon}></i> <span class={style.sensorData}> Sunset<br/> 16:00 </span>
				  </div>
				</div>
			</div>
		);
	}
}
