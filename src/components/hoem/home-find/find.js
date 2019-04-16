import React from "react" ;
import {Link} from 'react-router-dom'
import "./find.css"
import querystring from 'query-string';
import { connect } from 'react-redux'
import { product } from '../../../store/actions/product'
import {UPDATE_PRODUCT,CLEAR_PRODUCT} from '../../../store/types'
class HomeFind extends React.Component{
	constructor(props){
        super();
        props.gethomestay(props.match.params.id);//发送action
      }
    render(){
        let {history,match} = this.props;
        let {homestay,hotel,shortTerm} = this.props;
        let obj = {homestay,hotel,shortTerm};
        let _id= this.props.match.params.id ; 
        for(let i in obj){
            if(i == this.props.match.params.id){
                var {page_data} = obj[i];
            }
        }
        return (
           <div>
               <div className="hh_header">
                    <div className="ss_select">
                        <a onClick={()=>{history.go(-1)}}></a>
                        <input type="text" id="" defaultValue="" placeholder="酒店/地名/关键词"/>
                        <span></span>
                    </div>
                    <div className="ss_downlist">
                        <ul>
                            <li className="triangle">位置区域</li>
                            <li className="triangle">价格/星级</li>
                            <li className="triangle">智能排序</li>
                            <li className="triangle">筛选</li>
                        </ul>
                    </div>
                </div>
                <div className="h_product">
                    <ul>
                        {page_data && page_data.map(item=>(
                            <li key={item._id}>
                                <Link to={{pathname:`/hotel/${item._id}`,search:querystring.stringify({dataName:_id})}} className="d_img"><img src={window.baseUrl + item.detail.auth_icon} /></Link>
                                {/* <Link to={{pathname:`/home_find/${match.params.id}`}}><div className="h_commit">开始查找</div></Link> */}
                                <div className="s_infor">
                                    <a href="javascript:;">{item.title}</a>
                                    <span>{item.detail.commentNum}</span>
                                    <p dangerouslySetInnerHTML={{__html: item.detail.content}}></p>
                                    <b>￥{item.detail.price}</b>
                                    <s>￥{item.detail.price_old}</s>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
           </div>
        )
    }
    componentWillUnmount(){
        this.props.clearProduct(this.props.match.params.id);
    }
}     
const initMapStateToProps=state=>({
    homestay:state.homestay,
    hotel:state.hotel,
    shortTerm:state.shortTerm,
  });
  
  const initMapDispatchToProps=dispatch=>({
    gethomestay:(name)=>dispatch(product({
      url:`/api/product`,
      dataName:name,
      count:40,
      type:UPDATE_PRODUCT,
      stateName:name,
    })),
    clearProduct:(stateName)=>dispatch({type:CLEAR_PRODUCT,payload:{stateName,}}),
  });
  export default connect(
    initMapStateToProps,
    initMapDispatchToProps
  )(HomeFind)