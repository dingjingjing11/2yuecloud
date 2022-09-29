<template>
  <div id="app">
    <!-- <ul>
      <导航可以跳转页面 -->
      <!-- <router-link tag="li" to="/">首页</router-link>
      <router-link tag="li" to="/Cata">分类</router-link>
      
    </ul>
   <router-view></router-view> --> 
   <!-- 路由窗口，配置的路由都在这里显示 -->
   <div class="nav-left">
    <!-- 给导航加点击背景颜色 -->
    <router-link tag="li" active-class="active" exact  to="/nav1">nav1</router-link>
    <router-link tag="li" active-class="active" to="/nav2">nav2</router-link>
   </div>
   <div class="view-right"></div>
    <router-view></router-view>
  </div>
</template>

<script>


export default {
  name: 'App',
 
}
</script>

<style>
.nav-left{
  width: 200px;
  height: 500px;
  border: 1px solid #ccc;
  float: left;
}
.view-right{
  width: 200px;
  height: 500px;
  border: 1px solid #ccc;
  float: left;
}
.li{
  list-style: none;
}
.active{
  background-color: aqua;
}

</style>
