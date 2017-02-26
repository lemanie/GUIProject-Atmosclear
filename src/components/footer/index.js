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
		const select = this.props.onSelectionChange
		const nav = title => <Navigation active={this.props.active === title} onClick={() => select(title)} title={`#${title}`} />
		return (
			<div class={"toolbar toolbar-bottom " + style.footer}>
				<div class="toolbar-inner">
					{nav('view-day')}
					{nav('view-index')}
					{nav('view-week')}
				</div>
			</div>
		);
	}
	
}





