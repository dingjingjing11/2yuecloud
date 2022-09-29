<template>
    <div>
    <ul>
       <p>总数{{$store.getters.getNum}}</p>
        <li v-for="item,index in $store.state.demo.shopcar" :key="index">
         
            <p>{{item.name}}</p>
             <p>{{item.id}}</p>
             <P>{{item.num}}</P>
             
        </li>
    </ul>
    </div>
</template>
<script>
export default {
   data() {
      return {
           
      }
   },
   created(){
   },
   computed:{
   },
   methods:{
   
   },
}
</script>
<style  scoped>
 li{margin-top: 5px;
    margin-bottom: 50px;
    border: 1px solid black;
 }
</style>
