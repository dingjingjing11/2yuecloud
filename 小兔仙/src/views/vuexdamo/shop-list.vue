<template>
<div>
    
    <ul>
        <li v-for="item in $store.state.arr">
         <p>{{item.name}}</p>
         <p>{{item.price}}</p>
        </li>
        <button @click="addshopCar">加购物车</button>
        
    </ul>
    <router-link to="/rb">查看购物车</router-link>
    <button @click="setName">设置用户名</button>
</div>
</template>
<script>
export default{
    data(){
        return{
            arr:[{name:'李宁',price:200},{name:'阿迪',price:300},{name:'安踏',price:200}]
        }
    },
    methods:{
       addshopCar(state,item){
            this.$store.commit('addN')
        },
        setName(){
            //调用 vuex 中的action 中的setUserName
            this.$store.dispatch('setUserName','tom')
        }
    }
}
</script>
<style>
  
  

    
</style>