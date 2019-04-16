import React from "react" ;
import {Link} from 'react-router-dom'
import "./content.css"

import { connect } from 'react-redux'
import { product } from '../../../store/actions/product'
import {UPDATE_PRODUCT,CLEAR_PRODUCT} from '../../../store/types'
class FeelFood extends React.Component{
    constructor(props){
        super();
        props.getfood(props.match.params.id);//发送action
      }
    render(){
        let {page_data} = this.props.food;
        return (
            <div>
                <div className="h_header">
                    <Link to="/home"></Link>
                </div>
                <div className="l_variety margin">
                    <ul>
                        {page_data && page_data.map(item=>(
                            <li key={item._id}>
                                <Link to={{pathname:`/feel_detail/${item._id}`}}><img src={window.baseUrl + item.detail.auth_icon} /></Link>
                                <b></b>
                                <em>{item.title}</em>
                                <em>{item.des}</em>
                                <em>每人￥{item.detail.price}</em>
                                {/* <i>{item.detail.star}</i> */}
                                <i style={{paddingLeft:".5rem",width:".5rem"}}>{item.detail.star}</i>
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
    food:state.food,
    story:state.story,
  });
  
  const initMapDispatchToProps=dispatch=>({
    getfood:(name)=>dispatch(product({
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
  )(FeelFood) 