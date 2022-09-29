<template>
<div>
    <pass @click.native="clk"></pass>
</div>
</template>
<script>
import pass from '../demo/passive.vue'
export default{
 components:{
    pass
 },
 methods:{
    clk(){
        console.log('in');
    }
 }
}
</script>