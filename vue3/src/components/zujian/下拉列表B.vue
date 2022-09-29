<template>
 <div>
    <select name="" id="" @change="changeHandle" v-model="val"></select>
    <option :val="item" v-for="item in arr">{{item}}</option>
    
        <ul>
            <li v-for="(item,index) in arr"  >{{item}}</li>
        </ul>
    </div>
 </div>
</template>
<script>
export default {
    props:['arr'],
    data(){
        return{
            val:''
        }

    },
    methods:{
        changeHandle(){
            this.$emit('send',this.val)
        }
    }

    
}

</script>
<style>

</style>