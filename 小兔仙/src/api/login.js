import http from '../utils/request.js'

export const findlogin = (data) =>{
    return http('/login','post',data);
}