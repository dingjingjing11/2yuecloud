<template>
   <div>
     <ul>
     <li v-for="item in arr.slice(pageIndex*4,pageIndex*4+4)" :key="item">{{item}}</li>
     </ul>
     <button @click="clk">next page</button>
   </div>
</template>
<script>
export default {
   name: '',
   components: {
     
   },
   
   data() {
     return {
       arr:[1,2,3,4,5,6,7,8,9,10],
       pageIndex:0
     }
   },
   
   methods: {
     clk(){
        this.pageIndex++
     }
   }
};
</script>
<style lang='' scoped>
</style>