<template>
    <div>
{{$store.state.demo.n}}
<button @click="odd">-</button>
<h1>2</h1>
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
    odd(){
          this.$store.commit('oddn')
    }
   },
}
</script>
<style lang="scss" scoped>

</style>
