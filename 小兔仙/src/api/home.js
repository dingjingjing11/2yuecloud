/*
    具体业务逻辑 接口的封装
*/ 
import http from '../utils/request.js'
//  查找 轮播图
export const findBanner = () => {
    return http('/home/banner', 'get');
}
// 查找 导航头
export const findHeader = ()=>{
    return http('/home/category/head','get')
}
//最后一个li
export const findLastli = ()=>{
    return http('/home/brand?limit=6','get')
}
//新接口
export const findNew = (id)=>{
    return http('/category?id='+id,'get')
}
// new banner
export const detail = (id)=>{
     return http('/goods?id='+id,'get')
    }
    // relevant 端口
    export const findnewbannerlunbo = ()=>{
     return http('/goods/relevant?id=&limit=16','get')
    }





