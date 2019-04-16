import React from "react" ;
import {Link} from 'react-router-dom'
import "./talk.css"
import {connect} from "react-redux"
import {product} from "../../../store/actions/product"
import {UPDATE_PRODUCT} from "../../../store/types"

class FindTalk extends React.Component{
    constructor(props){
        super();
        props.getTalk()
    }
    render(){
        let {talk} = this.props ;
        return (
            <div>
                <div className="comment">
                    <ul>
                        {
                             talk&&talk.page_data.map(item=>(
                                <li key={item._id}>
                                    <div className="message">
                                        <div className="icon"><img src={window.baseUrl + item.detail.auth_icon} /></div>
                                        <div className="name">{item.detail.commentNum}</div>
                                        <div className="place">{item.title}</div>
                                        <Link to="/find_talk/detail/001" className="jump">查看房源</Link>
                                    </div>
                                    <p>{item.detail.price_old}</p>
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
    talk : state.talk,
})
const initMapDispatchToProps=dispatch=>({
    getTalk:()=>dispatch(product({
        url:`/api/product`,
        dataName:`hotComments`,
        count:40,
        type:UPDATE_PRODUCT,
        stateName:'talk'
    }))
})
export default connect(
    initMapStateToProps,
    initMapDispatchToProps
)(FindTalk)