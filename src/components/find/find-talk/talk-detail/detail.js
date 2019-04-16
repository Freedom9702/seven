import React from "react" ;
import '../talk-detail/detail.css';
import {Link} from "react-router-dom";

export default class Detail extends React.Component{
    render(){
        let {history} = this.props;
        return (
            <div>
                 <div className="t-detail-header">
                    <div className="search">
                    <Link to="/find/find_talk"><span className="iconfont goback" onClick={()=>{history.go(-1)}}>&#xe62d;</span></Link>
                    维也纳酒店（上海浦东机场本门店）
                    <span>高档型</span>
                    <span className="iconfont shoucang">&#xeb2e;</span>
                     </div>
                </div>

                <div className="t-nav">
                    <ul>
                        <li><a href="#" className="active">酒店预订</a></li>
                        <li><a href="#">住客评价</a></li>
                        <li><a href="#">其他酒店</a></li>
                    </ul>
                </div>

                <div className="t-banner">
                    <img src="/img/dalitaofang.jpg" alt=""/>
                    <div className="hotel">维也纳酒店（上海浦东机场本门店）高档型</div>
                    <div className="adress">浦东新区合庆镇欢庆中路399号（近浦东机场，迪士尼）</div>
                    <div className="introduce">2017年装修  多语言服务人员 租车服务 叫车服务</div>
                </div>

                <div className="t-guess">
                    <h3>猜你喜欢</h3>
                    <ul>
                        <li>
                            <div className="left">
                                <img src="/img/baise.jpg" alt=""/>
                                <div className="des">
                                    <p>高级大床房</p>
                                    <p>不含早 大床 有窗</p>
                                    <p>入住当天18:00之前免费取消订单</p>
                                </div>
                            </div>
                            <Link to="/hotel_detail">
                                <div className="right">
                                    <div className="btn1">预订</div>
                                    <div className="btn2">￥280在线付</div>
                                </div>
                            </Link>
                        </li>
                        <li>
                            <div className="left">
                                <img src="/img/baise.jpg" alt=""/>
                                <div className="des">
                                    <p>高级大床房</p>
                                    <p>不含早 大床 有窗</p>
                                    <p>入住当天18:00之前免费取消订单</p>
                                </div>
                            </div>
                            <Link to="/hotel_detail">
                                <div className="right">
                                    <div className="btn1">预订</div>
                                    <div className="btn2">￥280在线付</div>
                                </div>
                            </Link>
                        </li>
                        <li>
                            <div className="left">
                                <img src="/img/baise.jpg" alt=""/>
                                <div className="des">
                                    <p>高级大床房</p>
                                    <p>不含早 大床 有窗</p>
                                    <p>入住当天18:00之前免费取消订单</p>
                                </div>
                            </div>
                            <Link to="/hotel_detail">
                                <div className="right">
                                    <div className="btn1">预订</div>
                                    <div className="btn2">￥280在线付</div>
                                </div>
                            </Link>
                        </li>
                    </ul>
                    <a href="#">查看剩余14个房型</a>
                </div>
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
}    