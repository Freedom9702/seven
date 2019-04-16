import {CHECK_USER} from "../types";

export const reg = ({url,username,password}) => dispatch=>{
  // baseUrl = https://uncle9.top
  // url /api/reg
  // 必选body username=xx password=xx

  dispatch( {type:'VIEW_LOADING',payload:true});

  var form_data = new FormData();
  form_data.append('username',username);
  form_data.append('password',password);
  // form_data.append('icon',new FormData($('#uploadForm')[0]))

  return fetch(
    url,
    {
      method:'POST',
      body:form_data,
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



