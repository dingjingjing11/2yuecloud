/*
    具体业务逻辑 接口的封装
*/ 
import http from '../utils/request.js'
//  查找 热门城市
export const findehot = (id) => {
    return http('/cities?type=hot', 'get');
}
//查找 当前城市
export const findelocation = (id) => {
    return http('cities?type=guess','get')
}
//所有城市
export const findeAll = (id) => {
    return http('cities?type=group','get')
}