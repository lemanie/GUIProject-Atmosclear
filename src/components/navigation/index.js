import { h, Component } from 'preact';
import { Link } from 'preact-router';
import style from './style';
import App from '../';
import $ from 'jquery';
	
export default class Navigation extends Component {	

	selectData(title) {
  		switch(title) {
  			case "#day-forecast":
  				this.props.pageCacheStatus = false;
  				this.props.icon = "alarm";
  				break; 
	  		case "#index":
	  			this.props.pageCacheStatus = true;
  				this.props.icon = "home";
  				break;
			case "#week-forecast":
				this.props.pageCacheStatus = false;
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
				<a href={this.props.title} class="link">
					<i class={`
						material-icons
						${this.props.pageCacheStatus == true ? style.iconOnPage : style.iconOffPage}
					`}>
						{this.props.icon}
					</i>
				</a>
			</div>
		);
	}	
}

{/*${{App.views.main.activePage.name} == {this.props.title}  ? style.iconOnPage : style.iconOffPage}*/}
