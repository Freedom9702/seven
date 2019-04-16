import React from "react" ;
import "./story.css"
import {Link} from 'react-router-dom'

import { connect } from 'react-redux'
import { product } from '../../../store/actions/product'
import {UPDATE_PRODUCT,CLEAR_PRODUCT} from '../../../store/types'
class HomeStory extends React.Component{
	constructor(props){
        super();
        props.getstory();//发送action
      }
    render(){
		let {page_data} = this.props.story;
        return (
            <div className="home_story margin">
              <h3>精彩旅行故事</h3>
              <ul>
                {page_data && page_data.map(item=>(
                  <li key={item._id}>
                    <Link to={{pathname:`/story_detail/${item._id}`}}><img src={window.baseUrl+item.detail.auth_icon} /></Link>
                    <h4>{item.title}</h4>
                    <p>{item.des}</p>
                    <div className="hs_icon">
                      <a href="javascrpt:;"></a>
                      <i></i>
                      <b></b>
                      <em></em>
                    </div>
                  </li>
                ))}
              </ul>
				    </div>
        )
    }
    componentWillUnmount(){
      this.props.clearProduct("story");
  }
}     

const initMapStateToProps=state=>({
    story:state.story,
  });
  
  const initMapDispatchToProps=dispatch=>({
    getstory:()=>dispatch(product({
      url:`/api/product`,
      dataName:'story',
      count:40,
      type:UPDATE_PRODUCT,
      stateName:'story'
    })),
    clearProduct:(stateName)=>dispatch({type:CLEAR_PRODUCT,payload:{stateName,}}),
  });
  export default connect(
    initMapStateToProps,
    initMapDispatchToProps
  )(HomeStory)