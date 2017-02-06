import { h, Component } from 'preact';
import { Link } from 'preact-router';
import style from './style';

export default class Footer extends Component {
	render() {
		return (								
			<div class={"toolbar " + style.toolbar}>
				<div class="toolbar-inner">
					<a href="#" class="link"><i class="material-icons">alarm</i></a>
					<a href="#" class="link"><i class="material-icons">home</i></a>
					<a href="#" class="link"><i class="material-icons">event</i></a>
				</div>
			</div>
		);
	}
}
