import { h, Component } from 'preact';
import { Link } from 'preact-router';
import style from './style';
import Navigation from '../navigation';
import $ from 'jquery';

export default class Footer extends Component {
	constructor(props){
		super(props);
	}
	
	render() {
		//We create a toolbar that serves as our footer here (see https://framework7.io/docs/toolbar.html )
		return (
			<div class={"toolbar " + style.footer}> {/*We add the toolbar class but add an extra class to override some css rules for our design (see style.less)*/}
				<div class="toolbar-inner">
					<Navigation title ="#day-forecast" />
					<Navigation title ="#index" />
					<Navigation title ="#week-forecast" />
				</div>
			</div>
		);
	}
	
}





