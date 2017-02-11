import { h, Component } from 'preact';
import style from './style';

export default class Events extends Component {
	render() {
		return (
			<div class={"content-block " + style.contentBlock}> {/*This is defining a content blok with a form element, see https://framework7.io/docs/form-elements.html*/}
				<div class="item-content" id={style.notifications}>
					<div class="item-inner">
					  <div class={"item-title label " + style.itemTitle}>Notifications</div> {/*We add some extra styling to override some of the css rules*/}
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
