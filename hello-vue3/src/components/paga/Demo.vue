<template>
    <div id="app">
    <input type="text" v-model="val">
    <ul>
    <li v-for="(item,index) in arrNew" :key="index" >{{item}}</li>
    </ul>
    </div>
</template>
<script>
    export default {
        data(){
            return{
                val:'',
                arr:['小王','小宋','小张'],
                arrNew:[]

            }
        },
        mounted(){      
            this.arrNew=this.arr.slice(0)
        },
        watch:{
            val(newval,oldval){
                this.arrNew=this.arr.filter(function(item){
                    return item.indexOf(newval)!=-1
                })
            }
        }
    }
</script>
<style>
</style>

