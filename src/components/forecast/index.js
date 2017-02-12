import { h, Component } from 'preact';
import style from './style';

export default class Forecast extends Component {
	render() {
		return (
			<div class={"row " + style.bodyrow}> {/*wrap the body row*/}
			  <div class={style.block + " " + style.col1}>
					{this.props.desc}
			  </div>
			  <div class={style.block + " " + style.col2}>
					{this.props.windSpeed} {/*data for wind speed*/}
			  </div>
			  <div class={style.block + " " + style.col3}>
					{this.props.chanceRain} {/*data for rain*/}
			  </div>
			  <div class={style.block + " " + style.col4}>
					{this.props.cloudCoverage} {/*data for cloud coverage*/}
			  </div>
			  <div class={style.block + " " + style.col5}>
					{this.props.visibility} {/*data for visibility*/}
			  </div>
			</div>
		);
	}
}
