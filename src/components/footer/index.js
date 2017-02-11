import { h, Component } from 'preact';
import { Link } from 'preact-router';
import style from './style';

export default class Footer extends Component {
	render() {
		return (
			{/*We create a toolbar that serves as our footer here (see https://framework7.io/docs/toolbar.html )*/}
			<div class={"toolbar " + style.toolbar}> {/*We add the toolbar class but add an extra class to override some css rules for our design (see style.less)*/}
				<div class="toolbar-inner">
					<a href="#day-forecast" class="link"><i class="material-icons">alarm</i></a> {/*This is an icon wrapped in a link tag that is used by framework7 to switch to the left page in the main view*/}
					<a href="#index" class="link"><i class="material-icons">home</i></a> {/*This is an icon wrapped in a link tag that is used by framework7 to switch to the index page in the main view*/}
					<a href="#week-forecast" class="link"><i class="material-icons">event</i></a> {/*This is an icon wrapped in a link tag that is used by framework7 to switch to the right page in the main view*/}
				</div>
			</div>
		);
	}
}
