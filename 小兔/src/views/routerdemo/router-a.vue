<template>
    <div>
     <!-- <router-link  tag="li"  :to="'rb?id='+ item.id" v-for="item,index in arr" :key="index">{{item.name}} </router-link> -->
     <router-link  tag="li"  :to="'rb/'+ item.id" v-for="item,index in arr" :key="index">{{item.name}} </router-link>
     <!-- <button @click="dj(item.id)" v-for="item,index in arr" :key="index">{{item.name}}</button>   编程式跳转 -->
     <h1>{{$store.state.xh}}</h1>
    </div>
</template> 


<script>
export default {
   data() {
      return {
    arr:[{name:'水壶',id:110},{name:'茶叶',id:190},{name:'吸尘器',id:930}]
        
      }
   },
   created(){
   },
   computed:{
   },
   methods:{
    dj(id){
        this.$router.push({path:'rb',query:{id:id}})
        // this.$router.push('/rb?id=10')
        // this.$router.push({path:'/rb'})
        // this.$router.push({name:'rb'})
        //  this.$router.replace('rb')   替换当前   

    }
   },
}
</script>
<style  scoped>

</style>
