import React from "react";
import "./reg.css"
import {reg} from "../../store/actions/reg";
import connect from "react-redux/es/connect/connect";

class Reg extends React.Component{
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
        let {reg}=this.props;
        let {history} = this.props;
        return(
            <div id="reg"> 
                <span className="iconfont"onClick={()=>{
                     history.replace("/login")
                }} style={{fontSize:"0.2rem" , marginLeft:"0.1rem"}}>&#xe60e; 跳转登陆页...</span>
                   <div className="banner"></div>
                <h1>欢迎注册</h1>

                <form> 
                    <span>账 号</span>
                    <input type="text" name="username" value={username} onChange={this.changeIpt.bind(this)} />
                    <br/>
                    <span>密 码</span>
                    <input type="text" name="password" value={password} onChange={this.changeIpt.bind(this)}/>
                    <br/>
                    <span>密 码</span>
                    <input type="password" maxLength="24"/>
                </form>
                <button onClick={()=>reg(username, password,this)}>立即注册</button>
                <div style={{textAlign:"center",fontSize:".15rem",marginTop:".05rem",color:"pink"}}>{mess}</div>
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
  reg:(username,password,_this)=>{
    // console.log(_this,username,password)
    dispatch(reg({
      url:`/api/reg`,
      username,password
    })).then(
      res=>{
        if (res.error === 0)   _this.props.history.push({pathname:'/login'});
        if ( res.error === 1)  _this.setState({mess:res.msg})
      }
    )
  }
});

export default connect(
  initMapStateToProps,
  initMapDispatchToProps
)(Reg)