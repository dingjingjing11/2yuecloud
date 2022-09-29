<template>
    <div>
     <h3>{{this.$route.params.id}}</h3>
     <button @click="fh">返回上一级</button>
    </div>
</template>
<script>
export default {
   data() {
      return {
        n:0
      }
   },
   created(){
   },
   computed:{
   },
   methods:{
    fh(){
        this.$router.go(-1)
    }
   },
    mounted() {
      
       console.log(this.$route.params.id);
    },
}
</script>
<style lang="scss" scoped>

</style>
