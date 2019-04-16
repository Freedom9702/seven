import React from "react" ;
import {Link} from 'react-router-dom'

import querystring from 'query-string';
//引入状态管理组件
import { connect } from 'react-redux'
import { order } from '../../../store/actions/order'
import { product } from '../../../store/actions/product'
import { detail } from '../../../store/actions/detail'




import { UPDATE_ORDER, UPDATE_PRODUCT, UPDATE_DETAIL} from '../../../store/types'

class Did extends React.Component{
    constructor(props){
        super();
        // props.get({q:"老王"});//发送action
        // props.getHotel({dataName:"",id:""});
      }
    render(){
        let {page_data} = this.props.order;
        return(
            <div className="o-list">
                <ul>
                    {
                        page_data && page_data.map(item=>(
                            <li key={item._id}>
                                <div className="top">
                                    <p><input type="checkbox" value="" className="check"/>{item.detail.hotelname}></p>
                                    <a href="#" className="success">预订成功</a>
                                </div>
                                <div className="bottom">
                                    <p>{item.detail.num}间，{item.detail.roomlevel}</p>
                                    <p>使用时间：{item.detail.usetime}</p>
                                    <p>总价：￥{item.detail.totalprice}</p>
                                    <Link to={{pathname:`/hotel/${item._id}`}}className="angin">再次预订</Link>
                                    {/* <Link to={{pathname:`/hotel/${item._id}`,search:querystring.stringify({dataName:_id})}}></Link> */}
                                </div>
                            </li>
                        ))
                    }
                </ul>
            </div>
        )
    }
    componentDidMount(props){
        this.props.get({q:"张三"});
        this.props.getHotel();
        // setTimeout(()=>{console.log(this.props.order)},100)
        
        
    }
}
const initMapStateToProps=state=>({
    order:state.order, 
    order1:state.detail
  });
  
  const initMapDispatchToProps=dispatch=>({
    get:({q})=>dispatch(order({
      url:`/api/order`,
      dataName:'finished',
      q:q,
      count:40,
      type:UPDATE_ORDER,
      stateName:'order'
    })) ,

    getHotel:()=>dispatch(detail({
        url:`/api/detail`,
        id:'5cb09a7f80ad2c57b36518d3',
        dataName:'xiamen',
        type:UPDATE_DETAIL,
    }))
  });
  
  export default connect(
    initMapStateToProps,
    initMapDispatchToProps
  )(Did)