import Vue from 'vue'
import VueRouter from 'vue-router'
const Layout =()=>import('@/views/Layout.vue')





Vue.use(VueRouter)

const routes = [    //声明常量 值不能改变
  {
    path: '/',
    na
    component: Layout,
  },
  {
    path:'/login',
    component:()=> import ('@/login/login.vue'),
    
  },
 
  


 
  


  

]

const router = new VueRouter({
  routes
})

export default router
