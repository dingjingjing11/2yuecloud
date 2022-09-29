export default{
    state:{
        title:''
    },
    mutations:{
     changeTitle(state,t){
        console.log(t);
        state.title=t
     }
    }
}