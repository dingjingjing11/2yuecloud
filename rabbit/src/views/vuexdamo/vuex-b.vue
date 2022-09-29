<template>
<div>
    vuex-b {{store.state.n}}
    <button @cllick="edd">-</button>
</div>
</template>
<script>
export default{
    methods:{
        edd(){
            this.$store.commit('eddN')
        }
    }
}
</script>