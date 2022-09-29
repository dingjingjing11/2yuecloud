<template>
  <div>
  <input type="text" v-focus>
  <p v-opacity="0.5">p</p>
   
  <div v-dragin class="wrap"></div>
</div>
   
</template>
<script>
//
export default{
    directives:{
        focus:{
            inserted(el){ //使用自定义指令的dom节点挂载
                console.log(el);
                el.focus()
            }
        },
        opacity:{
            inserted(el,val){
                console.log(val.value);
                el.style.opacity=val.value
            }
        },
        dragin:{
            inserted(el){
                console.log(el);
            }
        }
    }
}
</script>
<style>
.wrap{
    width: 100px;
    height: 100px;
    background-color: brown;
}
</style>