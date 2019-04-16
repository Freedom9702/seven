import React from "react";
import ReactDom from "react-dom";
import App from "./components/app"; 
import "./liarbry/base.css";

import store from './store/index.js';
import {Provider} from 'react-redux';

import {BrowserRouter,Route} from 'react-router-dom' //引用路由
//暴露全局 baseUrl
import config from './config'

window.baseUrl = config.baseUrl.http;


ReactDom.render(
  <Provider store={store}>
    <BrowserRouter>
      <Route component={App}/>
    </BrowserRouter>
  </Provider>,
    document.querySelector("#root")
)