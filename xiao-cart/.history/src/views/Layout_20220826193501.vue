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
      header1,
      nav1,
      nav2,
      footer1
    },
   data() {
      return {
      }
   },
   created(){
   },
   computed:{
    key(){
        return this.$router.id
    }
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
