import React from "react" ;
import "./detail.css"
import {connect} from 'react-redux'
import {detail} from "../../../../store/actions/detail";
import {UPDATE_DETAIL,CLEAR_DETAIL} from "../../../../store/types";
import querystring from 'query-string';
// import date from "../../api/date";
class Detail extends React.Component{
    constructor(props){
        super();
        props.getDetail(querystring.parse(props.location.search).dataName,props.match.params.id)
      }
    render(){
        console.log(this.props.detail)
        let {history} = this.props;
        let {page_data}=this.props.detail;
        // console.log('...',page_data);
        if (!page_data) return null;
        let {title,des, detail:{auth,commentNum,content,price,price_old,star,auth_icon}} = page_data;
        return (
            <div>
                 <div className="detail-header">
                    <span className="iconfont goback" onClick={()=>{history.go(-1);}}>&#xe62d;</span>
                    <span className="iconfont xiaoxi">&#xe69a; 10</span>
                    <span className="iconfont fenxiang">&#xe633;</span>
                </div>
                <div className="content">
                    <img src={window.baseUrl+auth_icon} alt=""/>
                    <div className="des">
                        <i className="title">文章 | {price_old}</i>
                        <i className="count">阅读量{commentNum}</i>
                    </div>
                    <h3>{title}</h3>
                    <p dangerouslySetInnerHTML={{__html: content}}></p>
                </div>
            </div>
        )
    }
    componentWillUnmount(){
        this.props.clearDetail()
      }
} 
const initMapStateToProps=state=>({
    detail:state.detail
  });
  
const initMapDispatchToProps=dispatch=>({
  getDetail:(dataName,id)=>dispatch(detail({
    url:`/api/detail`,
    dataName:dataName,
    type:UPDATE_DETAIL,
    id:id
  })),
  clearDetail:()=>dispatch({type:CLEAR_DETAIL})
});

export default connect(
  initMapStateToProps,
  initMapDispatchToProps
)(Detail)   