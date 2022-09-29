export default {
    state:{
        title:'',
    },
    mutations:{
        changetitle(a,t){
            a.title = t
            console.log(t);
         }
    }
}