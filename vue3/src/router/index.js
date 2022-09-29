import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)
// import Home from '../view/home/Home.vue'
// import Cata from '../view/cata/Cata.vue'
import Nav1 from '../view/Nav1/nav1.vue'
import nav2 from '../view/nav2/nav2.vue'
export default new Router({
  routes: [
    // {
    //   path: '/', //路由地址
    //   name: 'home', //路由名称
    //   component: Home//这是对应的页面
    // },
    // {
    //     path:'/cata',
    //     name:'cata',
    //     component:Cata
    // },
    {
        path:'/nav1',
        name:'nav1',
        component:Nav1
    },
    {
        path:'/nav2',
        name:'nav2',
        component:nav2
    }
  ]
})