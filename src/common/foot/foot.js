import React from "react" ;
import "./foot.css"
import {NavLink} from 'react-router-dom'
export default class Foot extends React.Component{
    render(){
        return (
            // <div id="foot">
            //     <NavLink to="/home">首页</NavLink>
            //     <NavLink to="/find">发现</NavLink>
            //     <NavLink to="/order">订单</NavLink>
            //     <NavLink to="/user">用户</NavLink>
            // </div>
            <div id="foot">
                <ul>
                    <li>
                        <NavLink to="/home"><img src="/img/ft_1_1.png" /></NavLink>
                        <p>推荐</p>
                    </li>
                    <li>
                        <NavLink to="/find"><img src="/img/ft_2_2.png" /></NavLink>
                        <p>发现</p>
                    </li>
                    <li>
                        <NavLink to="/order"><img src="/img/ft_3_3.png" /></NavLink>
                        <p>订单</p>
                    </li>
                    <li>
                        <NavLink to="/user"><img src="/img/ft_4_4.png" /></NavLink>
                        <p>我的</p>
                    </li>
                </ul>
            </div>
        )
    }
}  