import Vue from "vue";
import Vuex from "vuex";
Vue.use(Vuex)
import category from './category'
import demo from './demo'
import cuncu from 'vuex-persist'

var vueLocal=new cuncu({
     // storage 存储方式  默认的是localStorage存储，可以修改成会话存储（window.sessionStorage）
     storage:window.localStorage // window.sessionStorage  window.cookie
    })

   
const store = new Vuex.Store({


    modules:{
       demo,
    category
    },
    plugins:[vueLocal.plugin]

})
export default store; //导出vuex仓库