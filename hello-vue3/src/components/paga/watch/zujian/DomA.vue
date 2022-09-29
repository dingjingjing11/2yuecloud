<template>
<div>
    <com-b v-on:send="massage"></com-b>{{n}}
    <com-b v-on:send="mass"></com-b>{{n}}
    
</div>
</template>
<script>
import comB from './DomB.vue'
export default{
    components:{
        comB
    },
    data(){
        return{
            n:0
        }
    },
    methods:{
        massage(val){
            this.n++
        },
        mass(val){
            this.n--
        },
       


    }
}
</script>
<style>
</style>