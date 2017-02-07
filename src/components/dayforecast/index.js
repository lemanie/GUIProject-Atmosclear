import { h, Component } from 'preact';
import style from './style';

export default class DayForecast extends Component {
	render() {
		return (
			<div class={style.dayForecast}>
				<div class={"row " + style.headerrow}>
				  <div class={style.block + " " + style.col1}>
					
				  </div>
				  <div class={style.block + " " + style.col2}>
					<i class={"wi wi-strong-wind " + style.icon}></i>
					<span class={style.blockData}>Wind Speed</span>
				  </div>
				  <div class={style.block + " " + style.col3}>
					<i class={"wi wi-rain " + style.icon}></i>
					<span class={style.blockData}>Chance of Rain</span>
				  </div>
				  <div class={style.block + " " + style.col4}>
					<i class={"wi wi-cloud " + style.icon}></i>
					<span class={style.blockData}>Cloud Coverage</span>
				  </div>
				  <div class={style.block + " " + style.col5}>
					<i class={"wi wi-dust " + style.icon}></i>
					<span class={style.blockData}>Visibility Level</span>
				  </div>
				</div>
				<div class={"row " + style.bodyrow}>
				  <div class={style.block + " " + style.col1}>
					16:00
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
