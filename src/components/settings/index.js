import { h, Component } from 'preact';
import style from './style';

export default class Events extends Component {
	render() {
		return (
			<div class={"content-block " + style.contentBlock}>
			<div class="item-content" id={style.notifications}>
				<div class="item-inner">
				  <div class={"item-title label " + style.itemTitle}>Notifications</div>
				  <div class={"item-input " + style.itemInput}>
					<label class="label-switch">
					  <input type="checkbox" />
					  <div class="checkbox"></div>
					</label>
				  </div>
				</div>
			  </div>
			</div>
		);
	}
}
