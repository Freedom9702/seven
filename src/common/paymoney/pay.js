import React from "react" ;
import './pay.css';
import {Link} from "react-router-dom";
import {connect} from 'react-redux';
import querystring from 'query-string';
import {detail} from "../../store/actions/detail";
import {write} from '../../store/actions/write';
import  {UPDATE_DETAIL,CLEAR_DETAIL} from "../../store/types";

class PayMoney extends React.Component{
    constructor(props){

        super();
        // this.state = {
        //     dataName:'',
        //     title:'',
        //     des:'',
        //     time:'',
        //     price:'',
        //     hotelname:'',
        //     roomlevel:'',
        //     num:'',
        //     usetime:'',
        //     totalprice:'',
        //     htdataName:'',
        //     htId:''
        // };
        this.data = querystring.parse(props.location.search).dataName;  //上层传下来的dataName
        // this.writekun = this.writekun.bind(this);

        // {title,des,time,price,hotelname,roomlevel,num,usetime,totalprice,htdataName,htId}
        
        // console.log(props.detail)
        var username = props.user.data.username;   //登录的用户名
        var roomlevel = '商务套房';  //roomlevel
        var num = 1; //num
        var usetime = 1; //usetime
        var htdataName =querystring.parse(props.location.search).dataName;//dataName
        if(props.detail){
        var htId = props.detail.page_data._id
        var des = props.detail.page_data.des
        var hotelname = props.detail.page_data.title
        var time =  props.detail.page_data.time
        var price = props.detail.page_data.detail.price
        var totalprice = num * price
        
        } 
       console.log(username,des,time,hotelname,roomlevel,num,usetime,htId,htdataName,totalprice,price)
        
        props.write({
            username,des,time,hotelname,roomlevel,num,usetime,htId,htdataName,totalprice,price
        })
      }
    render(){
        let {history,match} = this.props;
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
                {/* <Link to={{pathname:`/order/${match.params.id}`,search:querystring.stringify({dataName:this.data})}} className="confirm" >确认支付</Link> */}
                <Link to={{pathname:`/order/${match.params.id}`,search:querystring.stringify({dataName:this.data})}} className="confirm" onClick={this.write}>确认支付</Link>
                {/* <a className="confirm" href="#">确认支付</a> */}
            </div>
        )
    }
}    



const initMapStateToProps=state=>({
    hotel:state.detail,
    user:state.user,
    detail:state.detail,
})
const initMapDispatchToProps=dispatch=>({
    getHotel:(id,dataName)=>dispatch(detail({
        url:`/api/detail`,
        dataName:dataName,
        type:UPDATE_DETAIL,
        id:id
    })),
    // write:()=>{},


    write:(username,des,time,hotelname,roomlevel,num,usetime,htId,htdataName,totalprice,price)=>dispatch(write({
        url:`/api/ordercheck`,
        dataName:'finished',
        title:username,
        des,
        time,
        price,
        hotelname,
        roomlevel,
        num,
        usetime,
        totalprice,
        htdataName,
        htId
    })
    ),
    





    clearDetail:()=>dispatch({type:CLEAR_DETAIL})
}) 
export default connect(
    initMapStateToProps,
    initMapDispatchToProps
)(PayMoney)   