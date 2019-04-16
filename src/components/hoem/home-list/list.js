import React from "react" ;
import "./list.css"
import {Link} from 'react-router-dom'

export default class HomeList extends React.Component{
    render(){
        return (
            <div className="home_list margin">
				<h3>房源推荐</h3>
				<ul>
					<li>
						<Link to="/list_detail/homestay" ><img src="img/home_list/list01.png" /></Link>
						<p>民宿</p>
					</li>
					<li>
						<Link to="/list_detail/hotel" ><img src="img/home_list/list02.png" /></Link>
						<p>酒店</p>
					</li>
					<li>
						<Link to="/list_detail/shortTerm" ><img src="img/home_list/list03.png" /></Link>
						<p>短租</p>
					</li>
				</ul>
			</div>
        )
    }
}    