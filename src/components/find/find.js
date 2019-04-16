import React from "react" ;
import {Route,Redirect,Switch,NavLink} from 'react-router-dom'
import "./find.css"
// import "../../liarbry/base.css"
import FindSpecial from "./find-special/special"
import FindStory from "./find-story/story"
import FindStrategy from "./find-strategy/strategy"
import FindTalk from "./find-talk/talk"
//我已经修改过了代码
export default class Find extends React.Component{
    render(){
        return(
            <div>
                <div className="nav">
                    <ul>
                        <li><NavLink activeClassName="active" to="/find/find_strategy">旅游攻略</NavLink></li>
                        <li><NavLink activeClassName="active" to="/find/find_special">出行专题</NavLink></li>
                        <li><NavLink activeClassName="active" to="/find/find_story">房东故事</NavLink></li>
                        <li><NavLink activeClassName="active" to="/find/find_talk">热门评论</NavLink></li>
                    </ul>
                </div>
                    <Switch>
                        <Route path="/find/find_strategy" component={FindStrategy}/>   
                        <Route path="/find/find_special" component={FindSpecial}/>
                        <Route path="/find/find_story" component={FindStory}/>
                        <Route path="/find/find_talk" component={FindTalk}/>
                        <Redirect exact from="/find" to="/find/find_strategy" />
                    </Switch>
            </div>
        )   
    }
}  