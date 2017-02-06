import { h, Component } from 'preact';
import { Link } from 'preact-router';
import style from './style';

export default class Header extends Component {
	render() {
		return (
			<div class={"navbar " + style.navbar}>
				<div class="navbar-inner">
					<div class="left">
						<a href="#" data-panel="left" class="link open-panel"><i class="icon icon-bars"></i></a>
					</div>
					<div class="center sliding">Atmosclear</div>
					<div class="right">
						<a href="#" class="link icon-only"><i class="material-icons">brightness_4</i></a>
					</div>
				</div>
			</div>
		);
	}
}
