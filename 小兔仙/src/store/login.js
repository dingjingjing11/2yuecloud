export default{
    state:{
        userInfo:{}
    },
    mutations:{
        setUserInfo(state,userinfo){
            state.userInfo=userinfo
            console.log(state.userInfo);
        }
    }

}