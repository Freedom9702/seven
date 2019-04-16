import React from "react" ;
import {Link} from 'react-router-dom'
import "../home-list/list.css"

import { connect } from 'react-redux'
import { product } from '../../../store/actions/product'
import {UPDATE_PRODUCT,CLEAR_PRODUCT} from '../../../store/types'

class HomeFeel extends React.Component{
	constructor(props){
        super();
        // props.getfood();//发送action
      }
    render(){
		let {food} = this.props;
        return (
            <div className="home_list margin">
				<h3>探索体验</h3>
				<ul>
					<li>
						<Link to="/feel_content/food"><img src="img/home_list/feel01.png" /></Link>
						<p>美食</p>
					</li>
					<li>
						<Link to="/feel_content/food"><img src="img/home_list/feel02.png" /></Link>
						<p>历史</p>
					</li>
					<li>
						<Link to="/feel_content/food"><img src="img/home_list/feel03.png" /></Link>
						<p>娱乐</p>
					</li>
				</ul>
			</div>
        )
    }
}    
const initMapStateToProps=state=>({
    food:state.food,
  });
  
  const initMapDispatchToProps=dispatch=>({
    // getfood:()=>dispatch(product({
    //   url:`/api/product`,
    //   dataName:"",
    //   count:40,
    //   type:UPDATE_PRODUCT,
    //   stateName:"",
    // })),
    // clearProduct:(id)=>dispatch({type:CLEAR_PRODUCT,payload:id}),
  });
  export default connect(
    initMapStateToProps,
    initMapDispatchToProps
  )(HomeFeel) 