import { h, Component } from 'preact';
import style from './style';


export default class TableHeader extends Component {

	render() {
		return (
			<div class="tableHeader">
				<div class={this.props.daily ? style.tableHeaderDaily : "" }>
					<div class={"row " + style.tableHeader}> {/*this row is the headerrow*/}
						<div class={style.block + " " + style.shade0}> {/*header cell with the wind icon and description*/}
						</div>
						<div class={style.block + " " + style.shade1}> {/*header cell with the wind icon and description*/}
							<i class={"wi wi-strong-wind " + style.icon}></i>
							<span class={style.blockData}>Wind Speed</span>
						</div>
						<div class={style.block + " " + style.shade2}> {/*header cell with the rain icon and description*/}
							<i class={"wi wi-rain " + style.icon}></i>
							<span class={style.blockData}>Chance of Rain</span>
						</div>
						<div class={style.block + " " + style.shade3}> {/*header cell with the cloud icon and description*/}
							<i class={"wi wi-cloud " + style.icon}></i>
							<span class={style.blockData}>Cloud Coverage</span>
						</div>
						<div class={style.block + " " + style.shade4}> {/*header cell with the dust icon and description*/}
							<i class={"wi wi-dust " + style.icon}></i>
							<span class={style.blockData}>Visibility Level</span>
						</div>
					</div>
				</div>
			</div>
		);
	}
}