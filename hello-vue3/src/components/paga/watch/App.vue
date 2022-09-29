<template>
  
  <div id="app">
    <!-- <Nav v-if="show"></Nav> -->
    <!-- 使用子组件 -->
    <!-- <p>hello world</p >
     <div>hello world</div> -->
    <!-- <Com-nav></Com-nav> -->
    <!-- <GoShopVue></GoShopVue> -->
    <!-- <BaiduSearch></BaiduSearch> -->
     <!-- <XuanChe></XuanChe>  -->
     <!-- <indexVue></indexVue> -->
     <!-- <setVue></setVue> -->
     <!-- <guoLv></guoLv> -->
     <Directive></Directive>

  </div>
  
</template>

<script>
// import Nav from './components/NavCom';
// import ComNav from './page/watch/DomeVue'
// import GoShopVue from './page/watch/shop/GoShop.vue';
// import BaiduSearch from './page/watch/shop/baidu/search.vue'
// import XuanChe from "./page/QiChe/QiChe.vue";
// import indexVue from "../index.vue";
// import setVue from "../qiche/src/$set.vue";
// import guoLv from '../qiche/src/guolvqi.vue'
import Directive from './Directive.vue'
export default {
  components: {
    // Nav:Nav,
    // ComNav:ComNav,
    // GoShopVue: GoShopVue,
    // BaiduSearch:BaiduSearch
    // XuanChe,
    // indexVue:indexVue,
    // setVue: setVue
    //  guoLv:guoLv
     Directive: Directive

  },
  data() {
    return {
      show: true,
    };
  },
  mounted() {
    // var t = this;
    // setInterval(function(){
    //   t.show=false
    // },3000)
  },
};
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
li{
 list-style: none; 
}

</style>