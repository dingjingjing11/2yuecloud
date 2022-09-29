import Vue from 'vue'
import VueRouter from 'vue-router'
import header from '@/views/components/city/header.vue'


Vue.use(VueRouter)
const routes = [    //声明常量 值不能改变
  
       {path:'/',
        component:header
    },
    {path:'/city/:id',
    // component:search,
    component:()=>import('@/views/components/city/search.vue')
    },
    {path:'/login',
    // component:search,
    component:()=>import('@/login/login.vue')
    },

   
    ]
     

const router = new VueRouter({
    routes
  })
  
  export default router
  