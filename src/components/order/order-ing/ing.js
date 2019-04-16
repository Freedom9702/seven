import React from "react" ;
import {Link} from 'react-router-dom'
import './ing.css';

// import querystring from 'query-string';
//引入状态管理组件
import { connect } from 'react-redux'
import { order } from '../../../store/actions/order'
import {UPDATE_ORDER} from '../../../store/types'

class Ing extends React.Component{
    constructor(props){
        super();
        props.get({q:"张三"});//发送action
    }

    componentDidUpdate(){
        // console.log(this.props)
        // setTimeout(()=>{console.log(this.props.order.page_data[0].des)},1000)
        setTimeout(()=>{
            // console.log(this.props.order.page_data[0].des)
            // console.log(this.refs.one)
            switch(this.props.order.page_data[0].des){
                case '待支付' :
                    this.refs.one.style.background = 'green';break;
                case '支付超时':
                    this.refs.two.style.background = 'green';break;
                case '待评价':
                    this.refs.three.style.background = 'green';break;
                case '退款':
                    this.refs.four.style.background = 'green';break;
                default:
                this.refs.five.style.background = 'green';
            }
        },100)
    }

    render(){
        let {page_data} = this.props.order;
        return(
            <div>
               <ul className="pay">
                     <li>
                        <div ref="one" className="top"></div>
                        <span>待支付</span>
                    </li>
                    <li>
                        <div ref="two" className="top"></div>
                        <span>支付超时</span>
                    </li>
                    <li>
                        <div ref="three" className="top"></div>
                        <span>待评价</span>
                    </li>
                    <li>
                        <div ref="four" className="top"></div>
                        <span>退款</span>
                    </li>
                    <li>
                        <div ref="five" className="top"></div>
                        <span>全部订单</span>
                    </li>
               </ul>
            

            <div className="payq">
                <ul>
                    {
                        page_data && page_data.map(item=>(
                            <li key={item._id}>
                            <div className="top">
                                <p><input type="checkbox" value="" className="check"/>{item.detail.hotelname}></p>
                                <a href="#" className="success">{item.des}</a>
                            </div>
                            <div className="bottom">
                                <p>{item.detail.num}间，{item.detail.roomlevel}</p>
                                <p>使用时间：{item.detail.usetime}</p>
                                <p>总价：￥{item.detail.totalprice}</p>
                                {/* <Link to="/pay_money" className="angin">点击支付</Link> */}
                                <Link to={{pathname:`/pay_money/${item._id}`}} className="angin">
                                    点击支付
                                </Link>
                            </div>
                        </li>
                        ))
                    }
                   
                </ul>
            </div>
            </div>
        )
    }
}
const initMapStateToProps=state=>({
    order:state.order,
    
  });
  
  const initMapDispatchToProps=dispatch=>({
    get:({q})=>dispatch(order({
      url:`/api/order`,
      dataName:'underway',
      q:q,
      count:40,
      type:UPDATE_ORDER,
      stateName:'order'
    })),
    
  });
  
  export default connect(
    initMapStateToProps,
    initMapDispatchToProps
  )(Ing)