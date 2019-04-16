import React from "react" ;
import {Link} from 'react-router-dom'
import "./special.css"
export default class FindSpecial extends React.Component{
    render(){
        return (
            <div>
                <div className="travel-list">
                    <ul>
                        <li className="dali">
                            <Link to="/find_special/detail/dali">
                                <div className="place">大理</div>
                                <div className="des">渔船 古松古城 古街</div>
                                <div className="recommend">出行推荐</div> 
                            </Link>
                        </li>
                        <li className="chengdu">
                            <Link to={{pathname:"/find_special/detail/chengdu",search:'?a=11&b=12'}}>
                                <div className="place">成都</div>
                                <div className="des">跟着赵雷踏遍成都</div>
                                <div className="recommend">出行推荐</div> 
                            </Link>
                        </li>
                        <li className="wuhan">
                            <Link to={{pathname:"/find_special/detail/wuhan",search:'?a=11&b=12'}}>
                                <div className="place">武汉</div>
                                <div className="des">黛粉的花瓣遍布着整片天</div>
                                <div className="recommend">出行推荐</div> 
                            </Link>
                        </li>
                        <li className="xiamen">
                            <Link to={{pathname:"/find_special/detail/xiamen",search:'?a=11&b=12'}}>
                                <div className="place">厦门</div>
                                <div className="des">来寻一段小城的故事</div>
                                <div className="recommend">出行推荐</div> 
                            </Link>
                        </li>
                        <li className="shanghai">
                            <Link to={{pathname:"/find_special/detail/shanghai",search:'?a=11&b=12'}}>
                                <div className="place">上海</div>
                                <div className="des">看绿意草长莺飞</div>
                                <div className="recommend">出行推荐</div> 
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        )
    }
}    