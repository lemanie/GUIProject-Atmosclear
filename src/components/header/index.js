import { h, Component } from 'preact';
import { Link } from 'preact-router';
import style from './style';
import Notification from '../notification';

export default class Header extends Component {

	constructor(props) {
		super(props);
		this.changeNotification();
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


	changeNotification() {
		if (this.state.notification) {
			this.setState({...this.state, notification: false})
			this.props.onNotificationChange(true);
		}
		else {
			this.setState({...this.state, notification: true})
			this.props.onNotificationChange(false);
		}
	}

	selectIcon() {
		if (this.state.notification) {
			return "notifications";
		} 
		else {
			return "notifications_off";
		}
	}
	



	render() {
		return (
				<div class={"navbar " + style.navbar}>  
					<div class="navbar-inner">
						<div class="left">
							<a href="#" class="link open-notification" onClick={() => this.changeNotification()}>
								<i class={`material-icons ${style.iconNotification}`}>
									{this.selectIcon()}
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
