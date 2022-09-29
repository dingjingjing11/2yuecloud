<template>
    <div>
    <ul>
        <li v-for="item,index in arr" :key="index">
            <p>{{item.name}}</p>
             <p>{{item.id}}</p>
             <p @click="dj(item)">加入购物车</p>
        </li>
    </ul>
    </div>
</template>
<script>
export default {
   data() {
      return {
           arr:[{name:'水壶',id:110,num:1},{name:'茶叶',id:190,num:1},{name:'吸尘器',id:930,num:1}]
      }
   },
   created(){
   },
   computed:{
   },
   methods:{
    dj(a){
           this.$store.commit('addshopcar',a)
    }
   },
}
</script>
<style  scoped>
 li{margin-top: 5px;
    margin-bottom: 50px;
    border: 1px solid black;
 }
</style>
