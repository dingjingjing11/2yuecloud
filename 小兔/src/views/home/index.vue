<template>
    <div class="banner">
    <div class="gtkd">
  <bannerLeft></bannerLeft>
   <bannerRight></bannerRight>
    </div>
    </div>
</template>
<script>

import bannerLeft from './content/home-left.vue'
import bannerRight from './content/home.right.vue'
export default {
    components:{
      bannerLeft,
      bannerRight
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
   mounted(){

   }
}
</script>
<style  scoped>
.banner>.gtkd{
    position: relative;
}
</style>
