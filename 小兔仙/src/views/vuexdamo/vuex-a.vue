<template>
<div>
    vuex-a
    {{$store.state.n}}
    <button @click="add">+</button>
</div>
</template>
<script>
export default {
    methods:{
        add(){
       // 给vue中的n++
       // console.log(this.$store.state);
        //调用mutation 中的add方法
        this.$store.commit('addN')
        }
    },
      modules:{  //引入vuex 其他模块 
        demo:demo, //模块名称：模块
        categroy:categroy,
        login
    },
    plugins:[vueLocal.plugins]
}
</script>