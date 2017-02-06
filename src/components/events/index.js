import { h, Component } from 'preact';
import style from './style';

console.log(style);

export default class Events extends Component {
	render() {
		return (
			<div class={'swiper-container ' + style.events} >
				<div class="swiper-wrapper">
					<div class={"swiper-slide " + style.event}>
						<span class={style.eventDate}>February 11th 2017</span>
						<span class={style.eventTitle}>Penumbral Lunar Eclipse</span>
						<span class={style.eventDescription}>Occurs when the Moon passes through the Earth's partial shadow, or penumbra.</span>
					</div>
					<div class={"swiper-slide " + style.event}>
						<span class={style.eventDate}>February 26th 2017</span>
						<span class={style.eventTitle}>New Moon</span>
						<span class={style.eventDescription}>The Moon will be located on the same side of the Earth as the Sun and will not be visible.</span>
					</div>
					<div class={"swiper-slide " + style.event}>
						<span class={style.eventDate}>March 20th 2017</span>
						<span class={style.eventTitle}>March Equinox</span>
						<span class={style.eventDescription}>The Sun will shine on the equator and there will be equal amounts of day and night.</span>
					</div>
				</div>
			</div>
		);
	}
}
