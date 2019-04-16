import * as types from './types'

//纯函数 == 不修改输入，输出可控，定返回

const reducer = (state,{type,payload}) => {
  // console.log('reducer',state,type,payload);
  switch (type) {
    case types.VIEW_NAV:
      //payload 数据类型的校验
      return Object.assign({},state,{bNav:payload});
    case types.VIEW_FOOT:
      return {...state, bFoot:payload};
    case types.VIEW_LOADING:
      return {...state, bLoading:payload};
    case types.VIEW_SHARE:
      return {...state, bShare:payload};

    case types.UPDATE_PRODUCT: //要求payload过来的是个对象{type:xx,payload:{dataName,data}}==action
      return {...state, [payload.stateName]:payload.data};
    case types.UPDATE_ORDER: //要求payload过来的是个对象{type:xx,payload:{dataName,data}}==action
      return {...state, [payload.stateName]:payload.data};
    
    case types.CLEAR_PRODUCT:
      return {...state, [payload.stateName]:[]};
    case types.CLEAR_DETAIL:
      return {...state, detail:[]};
    case types.CLEAR_USER:
      return {...state, user:{error:1,msg:'未登录'}};
    case types.UPDATE_DETAIL: //要求payload过来的是个对象{type:xx,payload:{dataName,data}}==action
      return {...state, detail:payload};
    case types.CHECK_USER:
      return {...state, user:payload};
    default:
      return state;
  }

};

export default reducer;