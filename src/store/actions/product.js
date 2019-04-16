
export const product = ({url,dataName,start='',count='',type,stateName}) => dispatch=>{
  // baseUrl = https://uncle9.top
  // url /api/product
  // 必选params dataName=home
  // 可选params start=1&count=3

  dispatch( {type:'VIEW_LOADING',payload:true});

  fetch(
    // baseUrl + url + '?dataName'+ dataName +'&start'+start +'&count'+count
    url + '?dataName='+ dataName +'&start='+start +'&count='+count
  ).then(
    res=>res.json()
  ).then(
    data=>{
      dispatch({type:type,payload:{stateName,data}});
      dispatch({type:'VIEW_LOADING',payload:false});
    }
  );
};