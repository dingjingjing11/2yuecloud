<template>
<div>
    B组件接收到的消息{{msg}}
</div>
</template>
<script>
//接收
import bus from '../ultil/bus'
export default{
    data(){
        return{
            msg:''
        }
    },

    mounted(){
        var t=this
        //页面加载完成，等待接受数据
        bus.$on('send',function(val){
         t.msg=val;
        })
    },
    
}
</script>