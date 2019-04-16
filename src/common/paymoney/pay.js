import React from "react" ;
import './pay.css';
import {Link} from "react-router-dom";
import {connect} from 'react-redux';
import querystring from 'query-string';
import {detail} from "../../store/actions/detail"
import  {UPDATE_DETAIL,CLEAR_DETAIL} from "../../store/types";

class PayMoney extends React.Component{
    constructor(props){
        super();
        this.data = querystring.parse(props.location.search).dataName;
        // console.log(props.match)
        // props.getHotel(props.match.params.id,this.data)
      }
    render(){
        let {history,match} = this.props;
        // console.log(match.params)
        let {page_data} = this.props.hotel;
        return (
            <div>
                <div className="payorder">
                    <p onClick={()=>{history.go(-1)}} className="iconfont goback">&#xe677;</p>
                    <h3>支付订单</h3>
                </div>
                <div className="message">
                    <p>支付剩余时间 <span>27:54</span></p>
                    <p className="blod">￥270.00</p>
                    <p>维亚纳豪华套房9-25入住2晚</p>
                </div>
                <ul className="payment">
                    <li>
                        <span className="iconfont green">&#xe73b;</span>
                        <span className="pay">微信支付</span>
                        <em className="single active"></em>
                    </li>
                    <li>
                        <span className="iconfont blue">&#xe6a5;</span>
                        <span className="pay">支付宝支付</span>
                        <em className="single  active"></em>
                    </li> 
                    <li>
                        <span className="iconfont gray">&#xf166;</span>
                        <span className="pay">Apple pay支付</span>
                        <em className="single  active"></em>
                    </li>
                </ul>
                <Link to={{pathname:`/order/${match.params.id}`,search:querystring.stringify({dataName:this.data})}} className="confirm">确认支付</Link>
                {/* <a className="confirm" href="#">确认支付</a> */}
            </div>
        )
    }
}    
const initMapStateToProps=state=>({
    hotel:state.detail
})
const initMapDispatchToProps=dispatch=>({
    getHotel:(id,dataName)=>dispatch(detail({
        url:`/api/detail`,
        dataName:dataName,
        type:UPDATE_DETAIL,
        id:id
    })),
    clearDetail:()=>dispatch({type:CLEAR_DETAIL})
}) 
export default connect(
    initMapStateToProps,
    initMapDispatchToProps
)(PayMoney)   