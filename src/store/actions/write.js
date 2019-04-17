
// export const write = ({url,dataName,_id,title,des,time,price,hotelname,roomlevel,num,usetime,totalprice,htdataName,htId}) => dispatch=>{
 


import {CHECK_ORDER} from "../types";

export const write = ({url,dataName,title,des,time,price,hotelname,roomlevel,num,usetime,totalprice,htdataName,htId}) => dispatch=>{


  dispatch( {type:'VIEW_LOADING',payload:true});

  var form_data = new FormData();
  form_data.append('dataName',dataName);
  form_data.append('title',title);
  form_data.append('des',des);
  form_data.append('time',time);
  form_data.append('price',price);
  form_data.append('hotelname',hotelname);
  form_data.append('roomlevel',roomlevel);
  form_data.append('num',num);
  form_data.append('usetime',usetime);
  form_data.append('totalprice',totalprice);
  form_data.append('htdataName',htdataName);
  form_data.append('htId',htId);
  // form_data.append('icon',new FormData($('#uploadForm')[0]))

  return fetch(
    url,
    {
      method:'POST',
      body:form_data,
    }
  ).then(
   
    res=>res.json(),

  ).then(
    data=>{
      dispatch({type:CHECK_ORDER,payload:data});
      dispatch({type:'VIEW_LOADING',payload:false});
      
    }
  );
};