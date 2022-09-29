import Vue from 'vue'
import VueRouter from 'vue-router'
const Layout =()=>import('@/views/Layout.vue')
const Home =()=>import('@/views/home/index.vue')




Vue.use(VueRouter)

const routes = [    //声明常量 值不能改变
  {
    path: '/',
    component: Layout,
    children:[
       {path:'/',
        component:Home,

     },
     {
      path: '/login',
      name:'login',
      component: ()=> import('@/login/login.')
    },
    {
      path:'/product/:id',
      component: ()=> import('@/assets/newbanner/newbanner.vue')
  
    },
    {
      path:'/cart',
      component: ()=> import('@/assets/shoppcar/shoppcar.vue')
  
    }
    ]
  },
  {
    path:'/login',
    component:()=> import ('@/login/login.vue'),
    
  },
  {
    path:'/ra',
        component:()=> import ('@/views/vuexdemo/vuex-a.vue'),

  },
  {
    path:'/rb',
    component:()=> import ('@/views/vuexdemo/vuex-b.vue'),

  },
  {
    path:'/shopa',
    component:()=> import ('@/views/vuexdemo/shop-arr.vue'),

  },
  {
    path:'/shopb',
    component:()=> import ('@/views/vuexdemo/shop-car.vue'),

  },
  


 
  


  

]

const router = new VueRouter({
  routes
})

export default router
