import React from "react" ;
import {Route,Redirect,Switch,Link} from 'react-router-dom'
import "./user.css"

import querystring from 'query-string';
//引入状态管理组件
import { connect } from 'react-redux'
import { product } from '../../store/actions/product'
import {UPDATE_PRODUCT} from '../../store/types'
class User extends React.Component{
    constructor(props){
        super();
    
       
        
      }
    render(){
        let {data}=this.props;
        console.log(data)
        return(
            <div>
                {/* <Link to="/user/user-set">设置</Link>
                <br/>
                <Link to="/user/user-detail">个人资料</Link>
                <br/>
                <Link to="/user/user-address">收获地址</Link>
                <br/>
                <Link to="/user/user-collect">我的收藏</Link> */}
                
                <div className="user-set">
                    <div className="setting">
                        <p>
                            <Link to="/user/user-set"> 
                                <span className="iconfont">&#xe617;设置</span>
                            </Link>
                            <span className="iconfont">&#xe75d;签到</span>
                        </p>
                        <span className="iconfont">&#xe69a;</span>
                    </div>
                    <div className="user-name">
                        <div>
                            <Link to="/user/user-detail"> 
                                <u>{data.nikename}</u> 
                            </Link>
                            <p><span className="iconfont vip" >&#xe60f;</span> 高级会员</p>
                        </div>
                        <Link to="/user/user-detail">
                            <img src={window.baseUrl + data.icon}/>
                        </Link>
                    </div>
                </div>
                <ul className="user-function">
                    <li>
                        <div>
                            <span className="iconfont">&#xe601;</span>
                            <p>邀请好友</p>
                        </div>
                        <div>
                            <span className="iconfont">&#xe601;</span>
                            <p>优惠券</p>
                        </div>
                        <div>
                            <span className="iconfont">&#xe601;</span>
                            <p>积分查看</p>
                        </div>
                    </li>
                    <li>
                        <div>
                            <span className="iconfont">&#xe601;</span>
                            <Link to="/user/user-collect"> 
                                <p>浏览收藏</p>
                            </Link>
                        </div>
                        <div>
                            <span className="iconfont">&#xe601;</span>
                            <p>芝麻信用</p>
                        </div>
                        <div>
                            <span className="iconfont">&#xe601;</span>
                            <p>我的故事</p>
                        </div>
                    </li>
                    <li>
                        <div>
                            <span className="iconfont">&#xe601;</span>
                            <p>开具发票</p>
                        </div>
                        <div>
                            <span className="iconfont">&#xe601;</span>
                            <Link to="/user/user-address"> 
                                <p>收件地址</p>
                            </Link>
                        </div>
                        <div>
                            <span className="iconfont">&#xe601;</span>
                            <p>金卡会员</p>
                        </div>
                    </li>
                    <li>
                        <div>
                            <span className="iconfont">&#xe601;</span>
                            <p>联系客服</p>
                        </div>
                        <div>
                            <span className="iconfont">&#xe601;</span>
                            <p>成为房东</p>
                        </div>
                        <div>
                            <span className="iconfont">&#xe601;</span>
                            <p>意见反馈</p>
                        </div>
                    </li>
                    <li>
                        <div>
                            <span className="iconfont">&#xe601;</span>
                            <p>我的入住人</p>
                        </div>
                    </li>
                </ul>
             
             </div>
        )
    }
}  
const initMapStateToProps=state=>({
    user:state.user,
    
  });
  
  const initMapDispatchToProps=dispatch=>({
    getStrategy:()=>dispatch(product({
      url:`/api/login`,
      dataName:'strategy',
      // start:1,
      count:40,
      type:UPDATE_PRODUCT,
      stateName:'strategy'
    })),
    
  });
  
  export default connect(
    initMapStateToProps,
    initMapDispatchToProps
  )(User)