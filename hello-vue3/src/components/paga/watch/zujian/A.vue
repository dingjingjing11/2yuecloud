<template>
<div>
<h1>A组件</h1>
<com-b v-bind:arr="arr"></com-b>
</div>
</template>

<script>
import comB from './B.vue'
export default {
 components:{
   comB
},
data(){
    return{
        arr:['新闻','体育','娱乐']
    }
  }
}
</script>

<style>

</style>