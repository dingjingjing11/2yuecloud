<template>
<div>
    <div class="startbg">
      <div class="start" :style="{width:rating*40+'px'}"></div>
    </div>
   
</div>
</template>
<script>
export default{
    props:['rating']
}
</script>
<style>
.startbg{
    width: 200px;
    height: 40px;
    background: url(./xing-hui.png);
    background-size: 20%;
}
.start{
    width: 100px;
    height: 40px;
    background: url(./xing.png);
    background-size: 40px;
}
</style>