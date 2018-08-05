import React,{Component} from 'react';
import moment from 'moment';
import { LocationIcon, CheckedIcon, QuestionIcon } from './SvgIcons';
export default class AccountPageEvents extends Component{
    state = {
        switcher:this.props.switcher
    }
    static getDerivedStateFromProps=(props,state)=>{ 
      return {switcher:props.switcher};
    }
    componentDidMount = () =>{
        fetch('/api/profile/' + this.props.id,{
          credentials:'include',
          method:'GET'
        }).then((res)=>{return res.json()}).then((profile) => {
            let events = profile.own_events;
            fetch('/api/events/profile_events$'+ this.props.id,{
                credentials:'include',
                method:'GET'
            }).then((res)=>{return res.json()}).then((data) =>{
                this.setState({
                    own_events:data.own_events,
                    attending_events:data.attending_events,
                    switcher:'admin'
                });
            });
          
        });
      }
    render(){
        if(this.state.own_events || this.state.attending_events ){
            let events = [];
            if(this.state.switcher == 'admin'){
                 events = this.state.own_events;
            }else{
                 events = this.state.attending_events;
            }
            return events.map((el,i) => {
                return(
                    <div className = 'profile_event_frame' key ={el._id} >
                        <div className = 'profile_event_img_frame'>
                            <div className = 'profile_event_img'>
                                <img src={el.photo?el.photo:'./images/default.jpg'} alt=""/>
                                <div className = 'profile_event_date'>
                                    {moment(new Date(el.date)).format('ll').split(',')[0]}
                                </div>
                            </div>
                           
                        </div>
                        <div className = 'profile_event_info_frame'>
                            <div className = 'profile_event_info_header'>
                                <div className = 'profile_event_title'>
                                    {el.title}
                                </div>
                            </div>
                            <div className = 'profile_event_info_footer'>
                                <div className = 'profile_event_description'>
                                    <div className = 'profile_event_dn'>
                                        {el.description.slice(0,25)}
                                    </div>
                                    <div className = 'profile_event_count'>
                                        <div className = 'profile_name_count_part'>
                                            Going {el.players.length}
                                        </div>
                                        <div className = 'profile_name_count_part missing'>
                                              Missing {el.quantity-el.players.length > 0? el.quantity-el.players.length:0}
                                        </div>
                                    </div>
                                </div>
                                <div className = 'profile_event_under_footer'>
                                    <div className='ev_type'>
                                        {el.type}
                                    </div>
                                    <div>
                                        {el.time}
                                    </div>
                                    <div>
                                        <LocationIcon role='icon' />{el.location.slice(0,10)}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            });
        }
        else{
            return(
                <div>OOPs</div>
            )
        }
        
    }
}