import { h, Component } from 'preact';
import { Link } from 'preact-router';
import style from './style';
import App from '../';
import $ from 'jquery';
	
export default class Navigation extends Component {	

	selectData(title) {
  		switch(title) {
  			case "#day-forecast":
  				this.props.icon = "alarm";
  				break; 
	  		case "#index":
  				this.props.icon = "home";
  				break;
			case "#week-forecast":
  				this.props.icon = "event";
  				break;
			default:		
				return;
		}
	}

	render(){
		{this.selectData(this.props.title)}
		return (
			<div class={`
				${style.navigation} 				
			`}>
				<a href={this.props.title} class="link" onClick={() => this.props.onClick()}>
					<i class={`"icon"
						material-icons
						${this.props.selected ? style.iconSelected : style.iconNotSelected}
					`} >
						{this.props.icon}
					</i>
				</a>
			</div>
		);
	}	
}

