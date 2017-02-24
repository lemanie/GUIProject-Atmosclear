import { h, Component } from 'preact';
import style from './style';
import $ from 'jquery'; // import jquery for API calls

export default class Event extends Component {
	// a constructor with initial set states
	constructor(props){
		super(props);
	}

	render() {
		return(
			<div class={"swiper-slide " + style.event}>
			<span class={style.eventDate}>{this.props.eventDate}</span>
			<span class={style.eventTitle}>{this.props.eventName}</span>
			<span class={style.eventDescription}>{this.props.eventDesc}</span>
			</div>
		);
	}
}
