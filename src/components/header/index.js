import { h, Component } from 'preact';
import { Link } from 'preact-router';
import style from './style';
import Notification from '../notification';

export default class Header extends Component {

	constructor(props) {
		super(props);
		this.setState({
			mode: 'day',
		});
	}

	changeMode() {
		if (this.state.mode === 'day') {
			this.setState({...this.state, mode: 'night'})
			this.props.onModeChange('night')

		} else {
			this.setState({...this.state, mode: 'day'})
			this.props.onModeChange('day')
		}
	}


	render() {
		return (
				<div class={"navbar " + style.navbar}>  
					<div class="navbar-inner">
						<div class="left">
							<a href="#" class="link open-notification ">
								<i class={`material-icons ${style.iconNotification}`}>
									notifications
								</i>
							</a> 
						</div>
						<div class="left">Atmosclear</div>
						<div class="right">
							<a href="#" class="link icon-only" onClick={() => this.changeMode()}>
								<i class={`material-icons ${style.icon}`}>brightness_4</i>
							</a> 
						</div>
					</div>
				</div>
		);

	}
}
