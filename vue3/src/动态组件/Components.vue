<template>
<div>
    <components :is="com"></components>
    <command :is="com"></command>
</div>
</template>
<script>
// import index from '../$nextTick/index'
// import Swiper from '../$nextTick/Swiper'
  import  lun from '../作业/lun-l'
  import  Lun from '../作业/lun-r'
  

export default{
    components:{
        // index,Swiper
        lun,Lun

    },
    data(){
        return{
            com:Swiper,
            com:lun-l
        }
    }
}
</script>