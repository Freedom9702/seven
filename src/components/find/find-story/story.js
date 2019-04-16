import React from "react" ;
import {Link} from 'react-router-dom'
import "./story.css"

import querystring from "query-string"
import { connect } from 'react-redux'
import { product } from '../../../store/actions/product'
import { UPDATE_PRODUCT} from "../../../store/types"

class FindStory extends React.Component{

    constructor(props){
        super();
    
        props.getStory();//发送action
       
      }
    render(){
        let {story} = this.props ;
        console.log(story)
        return (   
            <div>
                <div className="list">
                    <ul>
 
                    {
                            story.page_data && story.page_data.map((item,index)=>(
                            <li key={item._id}>
                                <div className="list-top">
                                    <Link to={{
                                        pathname:`/find_story/detail/${item._id}`,
                                        search:querystring.stringify({dataName:'landlordStory'})
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
    story:state.story,
})

const initMapDispatchToProps=dispatch=>({
    getStory:()=>dispatch(product({
        url:`/api/product`,
        dataName:`landlordStory`,
        count:40,
        type:UPDATE_PRODUCT,
        stateName:'story'
    }))
})
export default connect(
    initMapStateToProps,
    initMapDispatchToProps
  )(FindStory)