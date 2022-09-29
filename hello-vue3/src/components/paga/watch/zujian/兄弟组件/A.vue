<template>
<div>
    A组件<button @click="clk()">给B 发信息</button>
</div>
</template>
<script>
//给B 发消息
import bus from '../../qiche/src/utils/bus'
export default{
    mothods:{
        clk(){
            bus.$emit('send','hello')
        }
    }

}
</script>