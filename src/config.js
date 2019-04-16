module.exports =  {
  baseUrl:{
    localhost:'http://localhost:3000',////前端 本地 -> 本地服务器
    // localhost_http:'http://47.110.139.198',//前端 本地  -> 服务器远端 注意ip和域名存在跨域
    localhost_http:'http://uncle9.top',//前端 本地  -> 服务器远端
    localhost_https:'https://uncle9.top',//前端本地 -> 服务器远端(https)
    https:'',//前后端，远端
    http:'http://chenzhihai.top:3030',//前后端，远端
    python:'xxx'
  },
  ws:{
    socket_local_port:'http://localhost:3000',
    socket_http_port:'http://47.110.139.198:80',//http://uncle9.top
    socket_https_port:'https://uncle9.top:443',//https://uncle9.top
  }
  // key:value
};