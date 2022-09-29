<template>
<div>
<ul>
    <li v-for="item in arr">{{item}}</li>
</ul>
</div>
</template>

<script>

export default {
//     props:['arr']
   props:{
      arr:{
        type:Array,//类型判断
        default:['1','2']//默认值 
        //当父组件没有给子组件传递数据时使用默认数据
      },
      mounted:{
        // console.log(this.arr);
      }
   }
 }

</script>
<style scoped>
li{
    width: 80px;
    height: 40px;
    text-align: center;
    float: left;
    line-height: 40px;
}

</style>