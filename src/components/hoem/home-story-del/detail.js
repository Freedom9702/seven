    import React from "react" ;
    import "./detail.css"
    import QueueAnim from 'rc-queue-anim';
    import Share from "../../../common/share/share"

    import { connect } from 'react-redux'
    import {detail} from "../../../store/actions/detail";
    import {VIEW_SHARE, UPDATE_DETAIL,CLEAR_DETAIL} from '../../../store/types'
    class Detail extends React.Component{
        constructor(props){
            super();
            props.getDetail("story",props.match.params.id);//发送action
        }
        render(){
            let {history,bl,storyDetail} = this.props;
            let {page_data} = storyDetail;
            return (
                <div>
                    <div className="td_header">
                        <i className="iconfont" onClick={()=>{history.go(-1)}}>&#xe60e;</i>
                        <i className="iconfont">&#xe69a;</i>
                        <i className="iconfont">10</i>
                        <i className="iconfont" onClick={()=>{
                            this.props.viewShare(true)
                        }}>&#xe633;</i>
                    </div>
                    {page_data && 
                    <div className="td_main">
                        <div className="td_container">
                            <img src={window.baseUrl + page_data.detail.auth_icon} />
                            <h4>{page_data.title}</h4>
                            <h3>{page_data.des}</h3>
                            <div className="td_person">
                                <a href="javascript:;"></a>
                                <div className="td_infor">
                                    <span>子明</span>
                                    <b>4周前</b>
                                </div>
                            </div>
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
        // componentWillMount(){
        //     this.props.bLoding(true);
        // }
        // componentDidMount(){
        //     this.props.bLoding(false);
        // }
    }  

    const initMapStateToProps=state=>({
        storyDetail:state.detail,
        bl:state.bShare,
        // viewBloding:state.bLoding,
    });
    
    const initMapDispatchToProps=dispatch=>({
        getDetail:(dataName,id)=>dispatch(detail({
        url:`/api/detail`,
        dataName,
        id:id,
        count:40,
        type:UPDATE_DETAIL,
        })),
        viewShare:(b)=>dispatch({type:VIEW_SHARE,payload:b}),
        clearDetail:()=>dispatch({type:CLEAR_DETAIL}),
        // bLoding:(loding)=>dispatch({type:VIEW_LOADING,payload:loding}),
    });
    export default connect(
        initMapStateToProps,
        initMapDispatchToProps
    )(Detail)