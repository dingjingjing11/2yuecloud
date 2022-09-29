<template>
<div class="dahezi">
 <p @click="clk()">点击打开</p>
 <div class="zhe" v-show="show">
    <div class="center">
        
        <p><span>标题内容</span> <span>x</span></p>
        <p><span>这是一段内容</span><button>确定</button></p>
    </div>
 </div>
</div>
</template>
<script>
import B from './消息弹框B'
export default{
    components:{
        B
    },
    data(){
        
        return{
           clk(){

           }
               
           
        }
    }
}

</script>
<style>
.dahezi{
    width: 800px;
    height: 500px;
    border: 1px solid #000;
}
p{
    color: #1a1acc;
    width: 200px;
    height: 40px;
    border-radius: 10px;
    background-color: #ccc;
    text-align: center;
    line-height: 40px;
    margin: 0 auto;
    position: relative;
}
.zhe{
    width:400px ;
    height: 100px;
    background: rgba(0, 0, 0, .5);
    position: absolute;
    top:0;
    left:0;
}
</style>