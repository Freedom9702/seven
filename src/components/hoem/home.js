import React from "react" ;
import HomeSearch from "./home-search/search"
import Banner from "./home-banner/banner"
import HomeList from "./home-list/list"
import HomeFeel from "./home-feel/feel"
import HomeStory from "./home-story/story"
import HomeWay from "./home-way/way"

//引入状态管理组件
import { connect } from 'react-redux'
import { product } from '../../store/actions/product'
import {UPDATE_PRODUCT,CLEAR_PRODUCT} from '../../store/types'

class Home extends React.Component{
    constructor(props){
        super();
    
        props.getStory();//发送action
      }
    render(){
        
        return(
            <div id="home">
              <HomeSearch props={this.props}/>
              <Banner props={this.props}/>
              <HomeList props={this.props}/>
              <HomeFeel props={this.props}/>
              <HomeStory props={this.props}/>
              <HomeWay props={this.props}/>
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
    getStory:()=>dispatch(product({
      url:`/api/product`,
      dataName:'story',
      // start:1,
      count:40,
      type:UPDATE_PRODUCT,
      stateName:'story'
    })),
    clearProduct:(stateName)=>dispatch({type:CLEAR_PRODUCT,payload:{stateName,}}),
  });
  
  export default connect(
    initMapStateToProps,
    initMapDispatchToProps
  )(Home)