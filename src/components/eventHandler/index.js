import { h, Component } from 'preact';
import style from './style';
import Event from "../events"
import $ from 'jquery'; // import jquery for API calls

export default class EventHandler extends Component {

  constructor(props){
    super(props)
    this.fetchEvents();
  }

  fetchEvents = () => {
    var url = "./lib/EVENTDATA.json";
    $.ajax({
      url: url,
      dataType: "json",
      success: this.parseEvents,
      error: function(req, err){console.log('JSON file not found, error: ' + err);}
    })
  }

  parseEvents = (parsed_json) => {
    this.setState({
      eventDate0: parsed_json['edate'][0],
      eventName0: parsed_json['ename'][0],
      eventDesc0: parsed_json['edesc'][0],
      eventDate1: parsed_json['edate'][1],
      eventName1: parsed_json['ename'][1],
      eventDesc1: parsed_json['edesc'][1],
      eventDate2: parsed_json['edate'][2],
      eventName2: parsed_json['ename'][2],
      eventDesc2: parsed_json['edesc'][2],
      });
  }

  render(){
    var i;
    var eveDates = [this.state.eventDate0,this.state.eventDate1,this.state.eventDate2,];
    var eveNames = [this.state.eventName0,this.state.eventName1,this.state.eventName2,];
    var eveDescs = [this.state.eventDesc0,this.state.eventDesc1,this.state.eventDesc2,];
    var count = parseInt(this.props.count);
    var events = [];
    for(i=0; i<count; i++){
        var str = "" + eveDescs[i];
        var k = str.indexOf(".");
        var strSub = str.substring(0, k+1);
        events[i] = <div class="swiper-slide">
                      <Event eventDate={eveDates[i]} eventName={eveNames[i]} eventDesc={strSub}/>
                    </div>;
      }
    return(
      <div class ={"allEvents " +style.eventHandler}>
        <div class="swiper-container swiper-init" data-direction="horizontal" data-space-between="0" data-pagination=".swiper-pagination">
          <div class={"swiper-wrapper " + style.event}>
              {events[0]}{events[1]}{events[2]}
          </div>
          <div class="swiper-pagination"></div>
        </div>
      </div>
    );
  }
}
