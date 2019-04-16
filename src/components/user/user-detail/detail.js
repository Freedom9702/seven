import React from "react" ;
import {Route,Redirect,Link} from 'react-router-dom'
import "./detail.css"

export default class Detail extends React.Component{
    render(){
        let  {history} = this.props;
        return(
            <div id="user-detail">
                 <div className="me">
                    <a  onClick={()=>history.go(-1)}>
                        <span className="iconfont">&#xe60e;</span>
                    </a>
                     个人资料
                 </div>
                 <div className="change-head"> 
                       <div className="change">
                            <img src="/img/user.jpg"/>
                       </div>
                       <p>修改头像</p>
                 </div>
                 <ul className="set">
                     <li>
                         <p>昵称</p>
                         <input text="input" placeholder="这是用户名" maxLength="16"/>
                     </li>
                     <li>
                         <p>性别</p>
                         <select>
                            <option>男</option>
                            <option>女</option>
                         </select>
                     </li>
                     <li>
                         <p>出生日期</p>
                          <div>
                              <input type="number" placeholder="2000" className="num" onInput={this.four.bind(this,4)}/>-
                              <input type="number" placeholder="01" className="num1" onInput={this.four.bind(this,2)}/>-
                              <input type="number" placeholder="01" className="num1" onInput={this.four.bind(this,2)}/>
                          </div>
                     </li>
                     <li>
                         <p>身份证号码</p>
                          <div>
                              <input type="number" placeholder="320xxx199912121212" onInput={this.four.bind(this,18)}/>
                          </div>
                     </li>
                     <li>
                         <p>所在城市</p>
                          <div>
                              <input type="text" placeholder="北京市朝阳区"/>
                          </div>
                     </li>
                     <li>
                         <p>邮箱地址</p>
                          <div>
                              <input type="tel" placeholder="xxxx@163.com" maxLength="23"/>
                          </div>
                     </li>
                 </ul>
                 <button className="conmmit">提交修改</button>
            </div>
        )
    }
    four(num,ev){
        switch(num){
            case 4:
                ev.target.value = ev.target.value.slice(0,4);
            break;
            case 2:
                ev.target.value = ev.target.value.slice(0,2);
                ev.target.onblur=(ev)=>{
                    ev.target.value = ev.target.value>10?ev.target.value:"0"+ev.target.value
                };
            break;
            case 18:
                ev.target.value = ev.target.value.slice(0,18);
            break;
        }
    }
}