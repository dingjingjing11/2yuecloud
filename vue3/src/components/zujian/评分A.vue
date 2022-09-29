<template>
 <div>
    <div>
        <input type="text" v-model="val" placeholder="请输入评分" >
        <A :arr="val"></A>

   </div>
 </div>
</template>
<script>
import A from './评分B'
export default{
    components:{
        A
    },
    data(){
        return{
            val:''
        }
    },
    
}

</script>
<style>

 *{
    margin: 0;
    padding: 0;
 }

</style>