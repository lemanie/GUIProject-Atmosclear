import { h, Component } from 'preact';
import style from './style';

export default class DayForecast extends Component {
	render() {
		return (
			<div class={style.dayForecast}>
				<div class={"row " + style.headerrow}> {/*this row is the headerrow*/}
					<div class={style.block + " " + style.col1}>
						{/*Empty first (top left) cell*/}
					</div>
					<div class={style.block + " " + style.col2}> {/*header cell with the wind icon and description*/}
						<i class={"wi wi-strong-wind " + style.icon}></i>
						<span class={style.blockData}>Wind Speed</span>
					</div>
					<div class={style.block + " " + style.col3}> {/*header cell with the rain icon and description*/}
						<i class={"wi wi-rain " + style.icon}></i>
						<span class={style.blockData}>Chance of Rain</span>
					</div>
					<div class={style.block + " " + style.col4}> {/*header cell with the cloud icon and description*/}
						<i class={"wi wi-cloud " + style.icon}></i>
						<span class={style.blockData}>Cloud Coverage</span>
					</div>
					<div class={style.block + " " + style.col5}> {/*header cell with the dust icon and description*/}
						<i class={"wi wi-dust " + style.icon}></i>
						<span class={style.blockData}>Visibility Level</span>
					</div>
				</div>
				<div class={"row " + style.bodyrow}> {/*wrap the body row*/}
				  <div class={style.block + " " + style.col1}>
						16:00 {/*hour of the day*/}
				  </div>
				  <div class={style.block + " " + style.col2}>
						7mph {/*data for wind speed*/}
				  </div>
				  <div class={style.block + " " + style.col3}>
						60% {/*data for rain*/}
				  </div>
				  <div class={style.block + " " + style.col4}>
						70% {/*data for cloud coverage*/}
				  </div>
				  <div class={style.block + " " + style.col5}>
						70% {/*data for visibility*/}
				  </div>
				</div>
				<div class={"row " + style.bodyrow}>
				  <div class={style.block + " " + style.col1}>
					17:00
				  </div>
				  <div class={style.block + " " + style.col2}>
					7mph
				  </div>
				  <div class={style.block + " " + style.col3}>
					60%
				  </div>
				  <div class={style.block + " " + style.col4}>
					70%
				  </div>
				  <div class={style.block + " " + style.col5}>
					70%
				  </div>
				</div>
				<div class={"row " + style.bodyrow}>
				  <div class={style.block + " " + style.col1}>
					18:00
				  </div>
				  <div class={style.block + " " + style.col2}>
					7mph
				  </div>
				  <div class={style.block + " " + style.col3}>
					60%
				  </div>
				  <div class={style.block + " " + style.col4}>
					70%
				  </div>
				  <div class={style.block + " " + style.col5}>
					70%
				  </div>
				</div>
				<div class={"row " + style.bodyrow}>
				  <div class={style.block + " " + style.col1}>
					19:00
				  </div>
				  <div class={style.block + " " + style.col2}>
					7mph
				  </div>
				  <div class={style.block + " " + style.col3}>
					60%
				  </div>
				  <div class={style.block + " " + style.col4}>
					70%
				  </div>
				  <div class={style.block + " " + style.col5}>
					70%
				  </div>
				</div>
				<div class={"row " + style.bodyrow}>
				  <div class={style.block + " " + style.col1}>
					20:00
				  </div>
				  <div class={style.block + " " + style.col2}>
					7mph
				  </div>
				  <div class={style.block + " " + style.col3}>
					60%
				  </div>
				  <div class={style.block + " " + style.col4}>
					70%
				  </div>
				  <div class={style.block + " " + style.col5}>
					70%
				  </div>
				</div>
				<div class={"row " + style.bodyrow}>
				  <div class={style.block + " " + style.col1}>
					21:00
				  </div>
				  <div class={style.block + " " + style.col2}>
					7mph
				  </div>
				  <div class={style.block + " " + style.col3}>
					60%
				  </div>
				  <div class={style.block + " " + style.col4}>
					70%
				  </div>
				  <div class={style.block + " " + style.col5}>
					70%
				  </div>
				</div>
				<div class={"row " + style.bodyrow}>
				  <div class={style.block + " " + style.col1}>
					22:00
				  </div>
				  <div class={style.block + " " + style.col2}>
					7mph
				  </div>
				  <div class={style.block + " " + style.col3}>
					60%
				  </div>
				  <div class={style.block + " " + style.col4}>
					70%
				  </div>
				  <div class={style.block + " " + style.col5}>
					70%
				  </div>
				</div>
			</div>
		);
	}
}
