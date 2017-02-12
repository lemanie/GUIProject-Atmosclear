import { h, Component } from 'preact';
import style from './style';

export default class Events extends Component {
	render() {
		//Here is where we setup our event swiper: https://framework7.io/docs/swiper.html
		return (
			<div class={'swiper-container ' + style.events}> {/*We add the swiper-container class but add an extra class to override some css rules for our design (see style.less)*/}
				<div class="swiper-wrapper">
					<div class={"swiper-slide " + style.event}> {/*We add the swiper-slide class to define one of the many slides but add an extra class to override some css rules for our design (see style.less)*/}
						<span class={style.eventDate}>February 11 th 2017</span> {/*See style.less for the css rules*/}
						<span class={style.eventTitle}>Penumbral Lunar Eclipse</span> {/*See style.less for the css rules*/}
						<span class={style.eventDescription}>Occurs when the Moon passes through the partial shadow of the Earth, or penumbra.</span> {/*See style.less for the css rules*/}
					</div>
					<div class={"swiper-slide " + style.event}> {/*This is a copy of the above*/}
						<span class={style.eventDate}>February 26 th 2017</span>
						<span class={style.eventTitle}>New Moon</span>
						<span class={style.eventDescription}>The Moon will be located on the same side of the Earth as the Sun and will not be visible.</span>
					</div>
					<div class={"swiper-slide " + style.event}> {/*idem*/}
						<span class={style.eventDate}>March 20 th 2017</span>
						<span class={style.eventTitle}>March Equinox</span>
						<span class={style.eventDescription}>The Sun will shine on the equator and there will be equal amounts of day and night.</span>
					</div>
				</div>
			</div>
		);
	}
}
