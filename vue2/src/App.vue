<template>
  <div id="app">
   <Dir></Dir>

  </div>
</template>

<script>

import Dir from './components/兄弟组件/Index.vue'

export default {

  components: {
    
    Dir:Dir
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
