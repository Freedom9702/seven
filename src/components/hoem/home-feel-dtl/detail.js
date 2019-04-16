import React from "react" ;
import {Link} from 'react-router-dom'
import "./detail.css";
import QueueAnim from 'rc-queue-anim';

import { connect } from 'react-redux'
import {detail} from "../../../store/actions/detail";
import {VIEW_SHARE, UPDATE_DETAIL,CLEAR_DETAIL} from '../../../store/types'
class Detail extends React.Component{
    constructor(props){
        super();
        props.getDetail("food",props.match.params.id);//发送action
    }
    render(){
        let {history,bl,foodDetail} = this.props;
        let {page_data} = foodDetail;
        return (
            <div>
                <div className="ld_header">
                    <i className="iconfont" onClick={()=>{history.go(-1)}}>&#xe60e;</i>
                    <i className="iconfont">&#xe69a;</i>
                    <i className="iconfont">10</i>
                    <i className="iconfont" onClick={()=>{
                        this.props.viewShare(true)
                    }}>&#xe633;</i>
                </div>
                {page_data && 
                <div className="ld_main">
                    <div className="ld_container">
                        <img src={window.baseUrl + page_data.detail.auth_icon} />
                        <h3>{page_data.title}</h3>
                        <div dangerouslySetInnerHTML={{__html: page_data.detail.content}}></div>
                    </div>
                </div>}
                <QueueAnim
                type={['bottom','top']}
                >
                {bl && <div className="mb_share" key="aa" ></div>}
                {bl && (
                    <div className="s_share" key="bb">
                        <h3>常常分享的人运气都不会太差</h3>
                        <ul>
                            <li></li>
                            <li></li>
                            <li></li>
                            <li></li>
                        </ul>
                        <span onClick={()=>{
                            this.props.viewShare(false)
                        }}>取消</span>
                </div>)}
                </QueueAnim>
            </div>
        )
    }
    componentWillUnmount(){
        this.props.clearDetail();
    }
}  
const initMapStateToProps=state=>({
    foodDetail:state.detail,
    bl:state.bShare,
});

const initMapDispatchToProps=dispatch=>({
    getDetail:(dataName,id)=>dispatch(detail({
    url:`/api/detail`,
    dataName,
    id:id,
    count:40,
    type:UPDATE_DETAIL,
    })),
    viewShare:(bl)=>dispatch({type:VIEW_SHARE,payload:bl}),
    clearDetail:()=>dispatch({type:CLEAR_DETAIL}),
});
export default connect(
    initMapStateToProps,
    initMapDispatchToProps
)(Detail)