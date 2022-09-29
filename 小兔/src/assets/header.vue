<template>
     <header>
      <div class="gtkd">
        <ul class="u1">
          <li> 
            <a v-if="!$store.state.demo.arr1.account"  href="javascript:;" class="" data-v-4fb12e10=""  @click="fh">请先登录</a>
            <a href="javascript:;" class="" data-v-4fb12e10="" v-else >{{$store.state.demo.arr1.account}}</a>
            <span>丨</span>
          </li>
          <li>
            <a  v-if="!$store.state.demo.arr1.account" href="javascript:;" data-v-4fb12e10="">免费注册</a>
            <a  v-else href="javascript:;"  @click="dj">退出登录</a>
          </li>
          <span>丨</span>
          <li>
            <a href="#/member/order" class="" data-v-4fb12e10="">我的订单</a>
          </li>
          <span>丨</span>
          <li>
            <a href="javascript:;" data-v-4fb12e10="">会员中心</a>
          </li>
          <span>丨</span>
          <li>
            <a href="javascript:;" data-v-4fb12e10="">帮助中心</a>
          </li>
          <span>丨</span>
          <li>
            <a href="javascript:;" data-v-4fb12e10="">关于我们</a>
          </li>
          <span>丨</span>
          <li>
            
            <a href="javascript:;" class="a1">
              <i class="iconfont icon-shouji"></i>
              手机版</a>
            
          </li>
        </ul>
      </div>
    </header>
</template>
<script>
export default {
   data() {
      return {
        zhi:'',
       
      }
   },
   created(){
   },
   computed:{
   },
   methods:{
    dj(){
       this.$store.commit('djqk')
       this.$router.push({path:'/login'})
      
    },
    fh(){
        this.$router.push({path:'/login'})
    }
   },
   mounted(){
  //  this.username =JSON.parse(localStorage.userinfo).account
   }
}
</script>
<style  scoped>

</style>
