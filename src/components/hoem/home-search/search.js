import React from "react" ;
import "./search.css"
import {Link} from 'react-router-dom'
export default class HomeSearch extends React.Component{
    render(){
        return (
            <div className="header">
                <select name="city" id="city" className="home_city" placeholder="选择一个城市">
                    <option value="bj">北京</option>
                    <option value="sh">上海</option>
                    <option value="gz">广州</option>
                </select>
                <Link  to="/search_page/hotel" className="home_search">搜索</Link>			
                <button type="button" className="home_btn">消息</button>
            </div>
        )
    }
}  