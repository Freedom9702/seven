import React from "react" ;
import {Route,Link,NavLink} from 'react-router-dom';
import "./detail.css"

import { connect } from 'react-redux'
import { product } from '../../../store/actions/product'
import {UPDATE_PRODUCT,CLEAR_PRODUCT} from '../../../store/types'

class Detail extends React.Component{
	constructor(props){
        super();
        props.gethomestay(props.match.params.id);//发送action
      }
    render(){
        let {match,homestay} = this.props;
        let {page_data} = homestay;
        return (
            <div>
                <div className="h_header">
                    <Link to="/home"></Link>
                    <span>房源搜索</span>
                </div>
                <div className="h_way">
                    <NavLink to="/list_detail/homestay" activeClassName="h_active">民宿</NavLink>
                    <NavLink to="/list_detail/hotel" activeClassName="h_active">酒店</NavLink>
                    <NavLink to="/list_detail/shortTerm" activeClassName="h_active">短租</NavLink>
                </div>
                <div className="h_city">
                    <h3>选择入住城市</h3>
                    <div className="c_choice clear">
                        <span>上海</span>
                        <a href="javascript:;" className="r_choice"></a>
                    </div>
                </div>
                <div className="h_time">
                    <div className="t_title">
                        <span>入住时间</span>
                        <span className="sr">离开时间时间</span>
                    </div>
                    <div className="t_choice">
                        <span>4月10日 周三</span>
                        <span className="sr">4月14日 周四</span>
                        <a href="javascript:;" className="r_choice"></a>
                    </div>
                </div>
                <div className="h_search">
                    <input type="text" id="" defaultValue="" placeholder="搜索酒店/地名/关键词" />
                    <a href="javascript:;" className="r_choice"></a>
                </div>
                <Link to={{pathname:`/home_find/${match.params.id}`}}><div className="h_commit">开始查找</div></Link>
            </div>
        )
    }
    componentWillUnmount(){
        this.props.clearProduct(this.props.match.params.id);
    }
}  

const initMapStateToProps=state=>({
    homestay:state.homestay,
    hotel:state.hotel,
    shortTerm:state.shortTerm,
  });
  
  const initMapDispatchToProps=dispatch=>({
    gethomestay:(name)=>dispatch(product({
      url:`/api/product`,
      dataName:name,
      count:40,
      type:UPDATE_PRODUCT,
      stateName:name
    })),
    clearProduct:(stateName)=>dispatch({type:CLEAR_PRODUCT,payload:{stateName,}}),
  });
  export default connect(
    initMapStateToProps,
    initMapDispatchToProps
  )(Detail)