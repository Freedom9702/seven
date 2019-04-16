import React from "react" ;
import "./hotel.css"
import {connect} from "react-redux"
import {Link} from "react-router-dom";
import querystring from 'query-string';
import {detail} from "../../store/actions/detail"
import  {UPDATE_DETAIL,CLEAR_DETAIL} from "../../store/types";

class Detail extends React.Component{
    constructor(props){
        super();
        this.data = querystring.parse(props.location.search).dataName;
        props.getHotel(this.data,props.match.params.id)
        // console.log(props.match.params.id)
      }
    render(){  
        let {history,match} = this.props;
        let {page_data} = this.props.hotel;
        return (
            <div id="hotel">
                 <div id="detail-header">
                    <div className="search">
                        <span className="iconfont goback" onClick={()=>{
                            history.go(-1)
                        }}>&#xe62d;</span>
                            <b>
                                维也纳酒店（上海浦东机场本门店）
                            </b>
                        <span>高档型</span>
                        <span className="iconfont shoucang">&#xeb2e;</span>
                    </div>
                </div>
                <div className="nav">
                    <ul>
                        <li><a href="#" className="active">酒店预订</a></li>
                        <li><a href="#">住客评价</a></li>
                        <li><a href="#">其他酒店</a></li>
                    </ul>
                </div>
                {
                    page_data && <> <div className="banner">
                                    <img src={window.baseUrl + page_data.detail.auth_icon}/>
                                    <div dangerouslySetInnerHTML={{__html:page_data.detail.content}} className="content">
                                    </div>
                                </div> 
                
              
                <div className="guess">
                    <h3>猜你喜欢</h3>
                    <ul>
                        <li>
                            <div className="left">
                                <img src={window.baseUrl + page_data.detail.auth_icon} />
                                <div className="des">
                                    <p>高级大床房</p>
                                    <p>不含早 大床 有窗</p>
                                    <p>入住当天18:00之前免费取消订单</p>
                                </div>
                            </div>
                            <Link to={{pathname:`/hotel_detail/${match.params.id}`,search:querystring.stringify({dataName:this.data})}} >
                            <div className="right">
                                <div className="btn1">预订</div>
                                <div className="btn2">￥{page_data.detail.price}在线付</div>
                            </div>
                            </Link>
                        </li>
                        <li>
                            <div className="left">
                            <img src={window.baseUrl + page_data.detail.auth_icon} />
                                <div className="des">
                                    <p>高级大床房</p>
                                    <p>不含早 大床 有窗</p>
                                    <p>入住当天18:00之前免费取消订单</p>
                                </div>
                            </div>
                            <Link to={{pathname:`/hotel_detail/${match.params.id}`,search:querystring.stringify({dataName:this.data})}} >
                            <div className="right">
                            <div className="btn1">预订</div>
                            <div className="btn2">￥{page_data.detail.price}在线付</div>
                            </div>
                            </Link>
                        </li>
                        <li>
                            <div className="left">
                            <img src={window.baseUrl + page_data.detail.auth_icon} />
                                <div className="des">
                                    <p>高级大床房</p>
                                    <p>不含早 大床 有窗</p>
                                    <p>入住当天18:00之前免费取消订单</p>
                                </div>
                            </div>
                            <Link to={{pathname:`/hotel_detail/${match.params.id}`,search:querystring.stringify({dataName:this.data})}} >
                            <div className="right">
                            <div className="btn1">预订</div>
                            <div className="btn2">￥{page_data.detail.price}在线付</div>
                            </div>
                            </Link>
                        </li>
                    </ul>
                    <a href= "javascript:;" >查看剩余14个房型</a>
                </div></>}
                <div className="reservation">
                    <h3>订房必读</h3>
                    <p>入离时间</p>
                    <p>入店时间：14:00以后</p>
                    <p>入店时间：14:00以后    离店时间：12：00以前</p>
                    <p>儿童政策</p>
                    <p>不接受16岁以下儿童单独入住</p>
                    <p>膳食安排</p>
                    <p>自助早餐 RMB18</p>
                    <p>宠物携带</p>
                    <p>不允许宠物携带</p>
                </div>
            </div>
        )
    }
    componentWillUnmount(){
        this.props.clearDetail();
    }
}    
const initMapStateToProps=state=>({
    hotel:state.detail,
})
const initMapDispatchToProps=dispatch=>({
    getHotel:(dataName,id)=>dispatch(detail({
        url:`/api/detail`,
        dataName,
        type:UPDATE_DETAIL,
        id
    })),
    clearDetail:()=>dispatch({type:CLEAR_DETAIL}),
}) 
export default connect(
    initMapStateToProps,
    initMapDispatchToProps
  )(Detail)   