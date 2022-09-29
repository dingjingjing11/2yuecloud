<template>
<div>
    <button @click="clk('+')">+</button>
    <button @click="click">-</button>
    <button @click="clk('-')">-</button>
</div>
</template>
<script>
export default{
    methods:{
        clk(){
            //通知父组件 自定义一个
            this.$emit('send',123)
        },
        click(){
            this.$emit('send',123)
        }
        
    }
}
</script>