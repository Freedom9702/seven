import {CLEAR_USER} from "../types";

export const logout = () => dispatch=>{
  // baseUrl = https://uncle9.top
  // url /api/logout

  return fetch(
    `/api/logout`
  ).then(
    res=>res.json()
  ).then(
    res=>{
      if (res.error === 0){
        //同步状态state
        dispatch({type:CLEAR_USER})
      }
      return res;
    }
  )
};

