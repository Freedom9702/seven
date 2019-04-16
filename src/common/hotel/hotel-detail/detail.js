import React from "react" ;
import "./detail.css"
import {Link} from 'react-router-dom';
import {connect} from "react-redux"
import querystring from 'query-string';
import {detail} from "../../../store/actions/detail"
import  {UPDATE_DETAIL,CLEAR_DETAIL} from "../../../store/types";

class Detail extends React.Component{
    constructor(props){
        super();
        this.data = querystring.parse(props.location.search).dataName;
        console.log(props)
        console.log(props.match)
        props.getHotel(props.match.params.id,this.data)
      }
    render(){
        let {history,match} = this.props;
        let {page_data} = this.props.hotel;
        return (
            <>
            { page_data && 
                <div className="o-detail-header">
                    <div className="search">
                    <span className="iconfont goback" onClick={()=>{history.go(-1)}}>&#xe62d;</span>
                    <span>{page_data.title}</span>
                        <span> 高档型</span>
                        <span className="iconfont shoucang">&#xeb2e;</span>
                    </div>
                </div>}
                <div className="o-title">高级大床房</div>
                <div className="o-nav">
                    <ul>
                        <li><a href="#" className="active">酒店预订</a></li>
                        <li><a href="#">住客评价</a></li>
                        <li><a href="#">其他酒店</a></li>
                    </ul>
                </div>
                <div className="o-banner">
                { page_data && <img src={window.baseUrl + page_data.detail.auth_icon} alt="" />}
                    
                    <div className="des">
                        <div className="top">
                            <div className="left">
                                <p>面积：36m<sup>2</sup></p>
                                <p>2-4层</p>
                                <p>可住：两人</p>
                                <p>卫浴：独立卫浴</p>
                            </div>
                            <div className="right">
                                <p>早餐：无早餐</p>
                                <p>窗户：有窗</p>
                                <p>宽带：免费WIFI</p>
                                <p>床型：1.8*2.0米一张</p>
                            </div>
                        </div>
                        <div className="bottom">
                            查看更多房间设施
                        </div>
                    </div>
                </div>
                
                <div className="o-detail">
                    <ul>
                        <li><p>房间数：<span>1间</span></p></li>
                        <li><p>入住人：<span>王玉晶</span></p></li>
                        <li><p>联系手机：<span>188 1222 4561</span></p></li>
                        <li><p>预计到点：<span>16：00 （房间整晚保留）</span></p></li>
                        <li><p>优惠：<span>-50最大优惠</span></p></li>
                        <li><p>发票：<span>如需发票请向酒店前台索取</span></p></li>
                    </ul>
                    <div className="active">
                        <h4>促销活动</h4>
                        <p>消费1单可获得高档酒店代金券30元</p>
                        <h4>限时取消</h4>
                        <p>9月25日18:00前取消免费，过时将无法取消房间将整晚为您保留。</p>
                        <h4>预定说明</h4>
                        <p>最多只能预定十五天</p>
                        <p>如果需要发票提前说明</p>
                        <h4>使用规则</h4>
                        <p>入住时一人一张身份证,</p>
                        <p>入住需要押金详情咨询店家</p>
                        <p>请在12:00以后入住并且在订单到期的14:00退房，如</p>
                        <p>果需要提前入住或者延迟退房，请咨询店家。</p>
                    </div>
                </div>
                <div className="btn">
                { page_data && <input type="button" defaultValue={"￥" + page_data.detail.price } className="btn1"/>}
					{/* <Link to='/pay_money'><input type="button" value="预订" className="btn2"/></Link>  */}
                    <Link to={{pathname:`/pay_money/${match.params.id}`,search:querystring.stringify({dataName:this.data})}} >
                    	<input type="button" value="预订" className="btn2"/>
                    </Link>
                </div>
            </> 
        )
    }
}    
const initMapStateToProps=state=>({
    hotel:state.detail
})
const initMapDispatchToProps=dispatch=>({
    getHotel:(id,dataName)=>dispatch(detail({
        url:`/api/detail`,
        dataName,
        type:UPDATE_DETAIL,
        id
    })),
    clearDetail:()=>dispatch({type:CLEAR_DETAIL})
    
}) 
export default connect(
    initMapStateToProps,
    initMapDispatchToProps
  )(Detail)   