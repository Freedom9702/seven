import React from "react";
import "./login.css"
import {Link} from 'react-router-dom'
import connect from "react-redux/es/connect/connect";
import {login} from "../../store/actions/login";
class Login extends React.Component{
    state={
        username:'',
        password:'',
        mess:''
      };
      changeIpt(ev){
        this.setState({
          [ev.target.name]:ev.target.value
        })
      }
    render(){
        let {username,password,mess}=this.state;
        let {login}=this.props;
        let {history} = this.props;
        return(
            <div id="login"> 
                <span className="iconfont"onClick={()=>{
                     history.replace("/reg")
                }} style={{fontSize:"0.2rem" , marginLeft:"0.1rem"}}>&#xe60e; 跳转注册页...</span>
               
                <div className="banner"></div>
                <h1>用户登陆</h1>
                <form>
                    <span>账号</span>
                    <input type="text" name="username" value={username} onChange={this.changeIpt.bind(this)} />
                    <br/>
                    <span>密码</span>
                    <input type="text" name="password" value={password} onChange={this.changeIpt.bind(this)}/>
                    <div>
                        <p>
                            <input type="checkbox" className="remeber"/><span>记住密码</span>
                        </p>
                        <span className="forget">忘记密码?</span>
                    </div>
                </form>
                <button onClick={()=>login(username, password,this)} >登陆</button>
                <p className="tip">{mess}</p>
                <div className="agree">
                    <p>首次登路即送88元</p>
                    <ul>
                        <li>微信</li>
                        <li>微博</li>
                        <li>QQ</li>
                    </ul>
                    <p>登陆即代表您同意我们的服务协议和隐私政策</p>
                </div>
            </div>
        )
    }  
}

const initMapStateToProps=state=>({

});

const initMapDispatchToProps=dispatch=>({
  login:(username,password,_this)=>{
    // console.log(_this,username,password)
    dispatch(login({
      url:`/api/login`,
      username,password
    })).then(
      res=>{
        res.error === 0  && _this.props.history.push({pathname:'/user'})
        res.error === 1 && _this.setState({mess:res.msg})
      }
    )
  }
});

export default connect(
  initMapStateToProps,
  initMapDispatchToProps
)(Login)