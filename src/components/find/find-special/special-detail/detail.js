import React from "react" ;
import {Link} from 'react-router-dom';
import './detail.css';

import querystring from 'query-string';
//引入状态管理组件
import { connect } from 'react-redux'
import { product } from '../../../../store/actions/product'
import {UPDATE_PRODUCT,CLEAR_DETAIL} from '../../../../store/types'
class Detail extends React.Component{
    constructor(props){
        super();
        
        props.getDate(props.match.params.id);//发送action
    }
    render(){ 
        let {strategy} = this.props ;
        let _id= this.props.match.params.id ; 
        return (
            <div>
                <div className="detail-header">
                <Link to="/find/find_special"><span className="iconfont goback">&#xe62d;</span></Link>
                    <div className="search">
                        <span className="iconfont place">大理 &#xe60b;</span> 
                        <span>|</span>
                        <input type="text" defaultValue="搜索 酒店/地名/关键字"/>
                    </div>
                </div>
                <div className="s_downlist">
                    <ul>
                        <li className="triangle">位置区域</li>
                        <li className="triangle">价格/星级</li>
                        <li className="triangle">智能排序</li>
                        <li className="triangle">筛选</li>
                    </ul>
                </div>

                <div className="content">
                    <ul>
                        {  
                            strategy&&strategy.page_data.map((item,index)=>(
                               <Link to={{
                                pathname:`/hotel/${item._id}`,
                                search:querystring.stringify({dataName:_id})
                                }} key={item._id}>
                                    <li >
                                        <div className="bg" style={{
                                            background:`url( ${window.baseUrl+item.detail.auth_icon}`
                                        }}>
                                            <span className="iconfont zan">&#xf00fd;</span>
                                            <span className="price">￥{item.detail.price}</span>
                                        </div>
                                        <div className="wenzi">
                                            <h3>{item.title}
                                                <span className="fenzhi">{item.detail.star}</span>
                                            </h3>
                                        </div>
                                        <p>{item.des}</p>
                                    </li>
                               </Link>
                            ))
                        }
                    </ul>
                </div>
            </div>
        )
    }
    componentWillUnmount(){
        this.props.clearDetail();
    }
}    

const initMapStateToProps=state=>({
    strategy:state.city,
  });
  
  const initMapDispatchToProps=dispatch=>({
    getDate:(city)=>dispatch(product({
      url:`/api/product`,
      dataName:city,
      // start:1,
      count:40,
      type:UPDATE_PRODUCT,
      stateName:'city'
    })),
    clearDetail:()=>dispatch({type:CLEAR_DETAIL}),
    
  });
  
  export default connect(
    initMapStateToProps,
    initMapDispatchToProps
  )(Detail)