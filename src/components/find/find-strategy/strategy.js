import React from "react" ;
import {Link} from 'react-router-dom'
import "./strategy.css"
import querystring from 'query-string';
//引入状态管理组件
import { connect } from 'react-redux'
import { product } from '../../../store/actions/product'
import {UPDATE_PRODUCT} from '../../../store/types'
 class FindStrategy extends React.Component{
    constructor(props){
        super();
    
        props.getStrategy();//发送action
       
      }
    render(){
        let {strategy}=this.props;
        
        return (
            <div>
                <div className="list">
                    <ul>
                    {
                            strategy.page_data && strategy.page_data.map((item,index)=>(
                            <li key={item._id}>
                                <div className="list-top">
                                    <Link to={{
                                        pathname:`/find_strategy/detail/${item._id}`,
                                        search:querystring.stringify({dataName:'strategy'})
                                        }}><img src={window.baseUrl+item.detail.auth_icon} /></Link>
                                </div>

                                <div className="list-bottom">
                                    <p>{item.title}</p>
                                    <div className="zan">
                                        <div className="left">{item.detail.price_old}</div>
                                        <div className="right">
                                            <i className="iconfont">&#xf00fd; {item.detail.star}</i>
                                            <i className="iconfont">&#xe69a; {item.detail.commentNum}</i>
                                        </div>
                                    </div>
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
    strategy:state.strategy,
    
  });
  
  const initMapDispatchToProps=dispatch=>({
    getStrategy:()=>dispatch(product({
      url:`/api/product`,
      dataName:'strategy',
      // start:1,
      count:40,
      type:UPDATE_PRODUCT,
      stateName:'strategy'
    })),
    
  });
  
  export default connect(
    initMapStateToProps,
    initMapDispatchToProps
  )(FindStrategy)
  