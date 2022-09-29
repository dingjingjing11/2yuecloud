<template>
    <div>
   <h1>1</h1>
   {{$store.state.demo.n}}
   <button @click="add">+</button>
    </div>
</template>
<script>
export default {
   data() {
      return {
      }
   },
   created(){
   },
   computed:{
   },
   methods:{
    add(){
        this.$store.commit('addn')
    }
   },
}
</script>
<style lang="scss" scoped>

</style>
