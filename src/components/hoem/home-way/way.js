import React from "react" ;
import {Link} from "react-router-dom";
import "./way.css";

export default class HomeStory extends React.Component{
    render(){
        return (
            <div className="travel_way margin">
				<h3>旅游攻略</h3>
				<ul>
					<li>
						<Link to="/find/find_strategy"><img src="img/home_list/way.png" /></Link>
						<p>三亚三日游，本地人带你体会...</p>
					</li>
				</ul>
			</div>
        )
    }
}     