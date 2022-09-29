/*
    对axios进行封装
        1.封装 接口地址固定部分
            生产环境： http://pcapi-xiaotuxian-front-devtest.itheima.net/home/banner
            开发环境： http://192.168.32.18:9090/home/banner
            baseUrl/home/banner
            服务器地址 / 接口地址
        2.请求超时时间  axios 请求时间限制

        3.请求拦截，响应拦截 
            一次网络请求分为  请求头 和  响应体
            
            请求拦截： 添加token  添加cookie
            响应拦截:  统一处理 错误状态码        20 每个接口都有可能返回 msg:您未登录

*/ 

// import axios from 'axios';

// 导出基准地址,方便后期修改这个地址
var baseURL = 'http://pcapi-xiaotuxian-front-devtest.itheima.net/';

 var http = axios.create({
  // axios 的一些配置，baseURL  timeout
  baseURL,
  timeout: 200000  // 10 毫秒就结束  规定时间内结束请求
})


http.interceptors.request.use(config => {
    // console.log('请求拦截');
    return config
  }, err => {
    return Promise.reject(err)
  })
  
  // res => res.data  取出data数据，将来调用接口的时候直接拿到的就是后台的数据
  http.interceptors.response.use( 
    (res) =>{ 
        console.log(res);
        return res.data 
    },
     
    err => {return Promise.reject(err)}
  )

   
   export default  function(url, method, submitData){
        return http({url,method, [method.toLowerCase() === 'get' ? 'params' : 'data']: submitData})
   }

  
  // 请求工具函数
//   export default (url, method, submitData) => {
//     // 负责发请求：请求地址，请求方式，提交的数据
//     return instance({
//       url,
//       method,
//       // 1. 如果是get请求  需要使用params来传递submitData   ?a=10&c=10
//       // 2. 如果不是get请求  需要使用data来传递submitData   请求体传参
//       // [] 设置一个动态的key, 写js表达式，js表达式的执行结果当作KEY
//       // method参数：get,Get,GET  转换成小写再来判断
//       // 在对象，['params']:submitData ===== params:submitData 这样理解
//       [method.toLowerCase() === 'get' ? 'params' : 'data']: submitData
//     })
//   }
  
