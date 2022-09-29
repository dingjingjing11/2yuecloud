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
        meta:{keepAlive:false}

     },
     
     {
      path: '/category/:id',
      name:'category',
      component: ()=> import('@/category/category.vue')
    },
    {
      path:'/product/:id',
      component: ()=> import('@/assets/newbanner/newbanner.vue'),
      meta:{keepAlive:false}
  
    },
    {
      path:'/cart',
      component:()=> import ('@/views/cart/cart.vue'),
      meta:{keepAlive:false}
      
    },
    ]
  },
  {
    path:'/ra',
        component:()=> import ('@/views/demo/native.vue'),

  },
  {
    path:'/rb',
    component:()=> import ('@/views/demo/key.vue'),

 },
  // {
  //   path:'/shopa',
  //   component:()=> import ('@/views/vuexdemo/shop-arr.vue'),

  // },
  // {
  //   path:'/shopb',
  //   component:()=> import ('@/views/vuexdemo/shop-car.vue'),

  // },
  {
    path:'/login',
    component:()=> import ('@/login/login.vue'),
    
  },

  {
    path:'/ele',
    component:()=> import ('@/views/elementdemo/'),
    
  },
  {
    path:'/eva',
    component:()=> import ('@/assets/good-elevaluate/eva.vue'),
    
  },
  {
    path:'/bai',
    component:()=> import ('@/assets/baidu/index(2).vue'),
    
  },
  {
    path:'/ba',
    component:()=> import ('@/assets/baidu/baiduRegiser.vue'),
    
  },
  {
    path:'/chart',
    component:()=> import ('@/chart/chart.vue'),
    
  },


  // {
  //   path:'/eval',
  //   component:()=> import ('@/assets/good-elevaluate/eval.vue'),
    
  // },




 
  


  

]

const router = new VueRouter({
  routes
})

export default router
