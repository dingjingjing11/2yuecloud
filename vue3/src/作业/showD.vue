<template>
<div>
    <showA :is="com"></showA>
    <showB :is="com"></showB>
    <showC :is="com"></showC>
    
    
</div>
</template>
<script>
// import index from '../$nextTick/index'
// import Swiper from '../$nextTick/Swiper'
 
import ShowA from './showA.vue'
import ShowB from './showB.vue'
 import ShowC from './showC.vue'
   

export default{
    components:{
    // index,Swiper
   
    ShowA,
    ShowB,
    ShowC
},
    data(){
        return{
            
        }
    }
}
</script>