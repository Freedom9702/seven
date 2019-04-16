import React from "react" ;
import "./hoem/home.css" 
import {Route,Redirect,Switch} from 'react-router-dom'


import Home from "../components/hoem/home"      // home页
import BannerDetail from "../components/hoem/home-banner-dtl/detail"    //home轮播图详情页
import ListDetail from "../components/hoem/home-list-dtl/detail"        //home列表详情页
import FeelDetail from "../components/hoem/home-feel-dtl/detail"        //home感觉体验详情页
import StoryDetail from "../components/hoem/home-story-del/detail"      //home故事详情页
import SearchPage from "../components/hoem/home-search-dtl/detail"      //home处的搜索页
import HomeFind from "../components/hoem/home-find/find"                //home租房列表
import FeelContent from "../components/hoem/home-feel-content/content"  //homefeel具体内容

import Foot from "../common/foot/foot"          // 底部
import Error from "../common/error/error"       // 失败页
import PayMoney from "../common/paymoney/pay"       // 付款的页
import HotelDetail from "../common/hotel/hotel-detail/detail" //酒店的详情页
import Hotel from "../common/hotel/hotel"  //酒店详情页

import Find from "../components/find/find"      // 发现页
import StrategyDetail from "./find/find-strategy/strategy-detail/detail" //发现部分的攻略详情页
import SpecialDetail from "./find/find-special/special-detail/detail" //发现部分的出行专题详情页
import StorysDetail from "./find/find-story/story-detail/detail"    //发现部分的房东故事详情页
import TalkDetail from "./find/find-talk/talk-detail/detail"    //发现部分的热门评论详情页

import Order from "../components/order/order"   // 我的订单页


import User from "../components/user/user"              //用户页
import UserDetail from "./user/user-detail/detail"      //用户详情页
import UserAddress from "./user/user-address/address"   //用户地址页
import UserSet from "./user/user-set/set"               //用户设置页
import UserCollect from "./user/user-collect/collect"   //用户收藏页

import Reg from "./reg/reg"     //注册页面
import Login from "./login/login"  //登陆页面
import AuthUser from "../guard/User";

import connect from "react-redux/es/connect/connect";
import Loading from "../common/loading/Loading";
import {VIEW_FOOT, VIEW_LOADING, VIEW_NAV} from "../store/types";

class App extends React.Component{
    componentWillReceiveProps(nextProps){//路由监听

        if(this.props.location !== nextProps.location){//当前地址不等于目标地址
          window.scrollTo(0,0);//滚动到顶部
        }
        let {viewFoot} =  this.props;
        let path = nextProps.location.pathname;
        // console.log('app',path);
        if(/hotel|hotel_detail/.test(path)){
           viewFoot(false)
        }
        if(/home|find|order/.test(path)){
            viewFoot(true)
        }
    }
    render(){
        let {bLoading,bFoot} = this.props;
        return (
            <React.Fragment>
                {bLoading && <Loading/>}
                <Switch>
                    <Route path="/home" component={Home}/>      {/* home路由部分 */}
                    <Redirect exact from="/" to="/home" />

                    <Route path="/banner_detail/:id" component={BannerDetail}/>
                    <Route path="/list_detail/:id" component={ListDetail}/>
                    <Route path="/feel_detail/:id" component={FeelDetail}/>
                    <Route path="/story_detail/:id" component={StoryDetail}/>
                    <Route path="/search_page/:id" component={SearchPage}/>
                    <Route path="/home_find/:id" component={HomeFind}/>
                    <Route path="/feel_content/:id" component={FeelContent}/> 

                    <AuthUser exact path="/user" component={User}/>
                    <Route path="/reg" component={Reg}/>      {/* 注册路由部分 */}
                    <Route path="/login" component={Login}/>      {/* 登陆路由部分 */}

                    <Route path="/hotel/:id" component={Hotel}/>
                    <Route path="/hotel_detail/:id" component={HotelDetail}/>    {/* 酒店详情页  */}
                    <Route path="/pay_money/:id" component={PayMoney}/>    {/* 付钱  */}
					
                    <Route path="/find" component={Find}/>      {/* find 路由部分 */}
                    <Route  path="/find_strategy/detail/:id" component={StrategyDetail}/>
                    <Route  path="/find_special/detail/:id" component={SpecialDetail}/>
                    <Route  path="/find_story/detail/:id" component={StorysDetail}/>
                    <Route  path="/find_talk/detail/:id" component={TalkDetail}/>

                    

                    <Route path="/order" component={Order}/>
                    {/* <Route path="/user" component={User}/> */}
                    <Route path="/user" render={()=>(
                         <Switch>
                            <Route path="/user/user-set" component={UserSet}/>
                            <Route path="/user/user-detail" component={UserDetail}/>
                            <Route path="/user/user-address" component={UserAddress}/>
                            <Route path="/user/user-collect" component={UserCollect}/>
                            <Route exact path="/user" component={User}/>
                        </Switch>      
                    )}/>

                    <Route component={Error} />
                </Switch>

                {bFoot && <Foot/>}
            </React.Fragment>
        )
    }
}  

const initMapStateToProps=state=>({
    bNav:state.bNav,
    bFoot:state.bFoot,
    bLoading:state.bLoading
  });
  
  const initMapDispatchToProps=dispatch=>({
    viewNav:(bl)=>dispatch({type:VIEW_NAV,payload:bl}),
    viewFoot:(bl)=>dispatch({type:VIEW_FOOT,payload:bl})
  });
  
  export default connect(
    initMapStateToProps,
    initMapDispatchToProps
  )(App)