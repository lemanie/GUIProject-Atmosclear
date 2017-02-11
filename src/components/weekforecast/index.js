import { h, Component } from 'preact';
import style from './style';

export default class WeekForecast extends Component {
	render() {
		return (
			<div class={style.weekForecast}> {/*wrap the table around one div*/}
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
						Monday {/*day of the week*/}
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
				<div class={"row " + style.bodyrow}> {/*This is a copy of the above*/}
				  <div class={style.block + " " + style.col1}>
						Tuesday
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
					Wednesday
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
					Thursday
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
					Friday
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
					Saturday
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
					Sunday
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
