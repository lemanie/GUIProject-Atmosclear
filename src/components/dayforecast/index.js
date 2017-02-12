import { h, Component } from 'preact';
import style from './style';

import Forecast from '../forecast';

export default class DayForecast extends Component {

	//length/size of array should be 7
	state = {
		data : []
	};

	componentDidMount() {
		var all = [];
		all.push(<Forecast desc="16:00" windSpeed="8mph" chanceRain="30%" cloudCoverage="2%" visibility="3miles" />);
		all.push(<Forecast desc="17:00" windSpeed="8mph" chanceRain="30%" cloudCoverage="2%" visibility="3miles" />);
		all.push(<Forecast desc="18:00" windSpeed="8mph" chanceRain="30%" cloudCoverage="2%" visibility="3miles" />);
		all.push(<Forecast desc="19:00" windSpeed="8mph" chanceRain="30%" cloudCoverage="2%" visibility="3miles" />);
		all.push(<Forecast desc="20:00" windSpeed="8mph" chanceRain="30%" cloudCoverage="2%" visibility="3miles" />);
		all.push(<Forecast desc="21:00" windSpeed="8mph" chanceRain="30%" cloudCoverage="2%" visibility="3miles" />);
		all.push(<Forecast desc="22:00" windSpeed="8mph" chanceRain="30%" cloudCoverage="2%" visibility="3miles" />);

		var newData = this.state.data.concat([all]);
		this.setState({
			data: newData
		});
	}

	render() {
		var forecasts = this.state.data.map(function(data) {
			return(
				<div>
					{data}
				</div>
			);
		});

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
				{forecasts}
			</div>
		);
	}
}
