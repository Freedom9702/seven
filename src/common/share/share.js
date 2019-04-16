import React from "react" ;
import {Link} from 'react-router-dom'
import "./share.css";
import QueueAnim from 'rc-queue-anim';

export default class Detail extends React.Component{
    render(){
        return (
            <div>
                <QueueAnim
                type={['bottom','top']}
                >
                {this.props.bl && <div className="mb_share" key="aa" ></div>}
                {this.props.bl && (
                    <div className="s_share" key="bb">
                        <h3>常常分享的人运气都不会太差</h3>
                        <ul>
                            <li></li>
                            <li></li>
                            <li></li>
                            <li></li>
                        </ul>
                        <span onClick={()=>{
                            this.setState({bl:!this.state.bl})
                        }}>取消</span>
                </div>)}
                </QueueAnim>
            </div>
        )
    }
}  