import React from "react" ;
import {Route,Redirect,Switch,NavLink} from 'react-router-dom'
import "./order.css";

import OrderIng from "./order-ing/ing"
import OrderDid from "./order-did/did"

export default class Order extends React.Component{
    render(){
        return(
            <div>
                <div className="o-header">订单详情</div>
                <div className="oo-btn">
                    <NavLink to="/order/order-did" className="btn1">进行中的</NavLink>
                    <NavLink to="/order/order-did" className="btn2">已完成的</NavLink>
                </div>
                <Switch>
                    
                    <Route path="/order/order-did" component={OrderDid}/>
                    <Redirect exact from="/order" to="/order/order-did"/>
                </Switch>
            </div>
        )
    }
}