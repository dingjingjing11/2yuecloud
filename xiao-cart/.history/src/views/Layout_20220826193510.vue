<template>
    <div class="bigbox">



<!-- layout容器 -->



<router-view :key="key"></router-view> 

     
<footer1></footer1>
    </div>
</template>
<script>

export default {
    components:{
     
    },
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
<style >
 .bigbox{
    width: 100%;
 }
</style>
