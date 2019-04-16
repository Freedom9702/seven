import React from "react" ;
import {Link} from 'react-router-dom';
import "./banner.css";

import Swiper from 'swiper/dist/js/swiper.js'
import 'swiper/dist/css/swiper.min.css'

import { connect } from 'react-redux'
import { product } from '../../../store/actions/product'
import {UPDATE_PRODUCT} from '../../../store/types'

class Banner extends React.Component{
    constructor(props){
        super();
        props.getBanner();//发送action
      }
    render(){
        let {page_data} = this.props.banner;
        return (
            <div className="swiper-container banner">
                <ul className="swiper-wrapper">
                {page_data && page_data.map(item=>(
                    <li className="swiper-slide" key={item._id}>
                    <Link to="">
                        <img src={window.baseUrl+item.banner} alt=""/>
                        <div className="text-box">
                            <h4>{item.title}</h4>
                            <p>{item.sub_title}</p>
                        </div>
                    </Link>
                </li>
                ))}
                </ul>
            </div>
        )
    }
    componentDidUpdate() {
        var mySwiper = new Swiper ('.swiper-container', {
			loop: true, // 循环模式选项
			autoplay:{
				autoplay:true,
			},
			scrollbar: {
			  el: '.swiper-scrollbar',
			},
		})        
      }
}  

const initMapStateToProps=state=>({
    banner:state.banner,
    
  });
  
  const initMapDispatchToProps=dispatch=>({
    getBanner:()=>dispatch(product({
      url:`/api/banner`,
      dataName:'banner',
      count:40,
      type:UPDATE_PRODUCT,
      stateName:'banner'
    })),
    
  });
  
  export default connect(
    initMapStateToProps,
    initMapDispatchToProps
  )(Banner)