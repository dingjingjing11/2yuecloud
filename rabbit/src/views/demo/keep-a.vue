<template>
<div>
    <h3>keep-a</h3>
    <input type="text">
</div>
</template>
<script>
export default{
    name:'a',
    mounted(){
        console.log('mounted')
    },
    activated(){ //渲染出来le
        console.log('被缓存的组件，被激活')
    },
    deactivated(){//页面消失了
        console.log('被缓存的组件 被隐藏')
    }

}
</script>