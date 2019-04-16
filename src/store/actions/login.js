import {CHECK_USER, VIEW_FOOT, VIEW_NAV} from "../types";

export const login = ({url,username,password}) => dispatch=>{
  // baseUrl = https://uncle9.top
  // url /api/login
  // 必选body username=xx password=xx

  dispatch( {type:'VIEW_LOADING',payload:true});

  let params = new URLSearchParams();
  params.append('username',username);
  params.append('password',password);

  return fetch(
    url,
    {
      method:'POST',
      body:params,
      // credentials: 'include'//fetch携带跨源凭证
    }
  ).then(
    res=>res.json()
  ).then(
    data=>{
      dispatch({type:CHECK_USER,payload:data});
      dispatch({type:'VIEW_LOADING',payload:false});
      return {error:data.error, msg:data.msg};
    }
  );
};

