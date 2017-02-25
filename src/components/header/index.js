import { h, Component } from 'preact';
import { Link } from 'preact-router';
import style from './style';

export default class Header extends Component {
	constructor() {
		super();
		this.setState({
			mode: 'day'
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
						<a href="#" data-panel="left" class="link open-panel">
							<i class={`material-icons ${style.icon}`}>menu</i>
						</a> 
					</div>
					<div class="center sliding">Atmosclear</div>
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
