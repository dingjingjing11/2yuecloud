<template>
<header>
     <ul>   
        
        <template v-if="$store.state.login.userInfo.account">

      <router-link tag="li" to="/member"><span>退出登录</span>{{$store.state.login.userInfo.account}}</router-link>
      </template>
        
      
           <template  v-else>
          <router-link tag="li" to="/login"><span>请先登录</span></router-link> <span>|</span>
           <li><span>免费注册 </span> </li> <span>|</span>
          </template> 
            
  
         
          <li><span>我的订单</span>  </li> <span>|</span>
          <li><span>会员中心</span></li> <span>|</span>
          <li><span>帮助中心</span></li> <span>|</span>
          <li><span>关于我们</span></li><span>|</span>
          <li><img src="../sj.png" alt=""> 手机版</li>
          
        </ul>
      
        
      </header>
</template>
<script>


  
// import axios from 'axios'
export default {
 
  data(){
    return{
      username:''
     
      
      
  }
  },
  // methods:{
  //   over(index){
  //     // this.show=true,
  //     this.d=index
  //   },
  //   out(){
  //     // this.show=false
  //     this.d=-1
  //   }
  // },
  mounted(){
    // this.username=JSON.parse(localStorage.userInfo).account
  }
  

}
</script>

</script>
<style>
header{
  width: 100%;
  height: 53px;
  background: #333;
  color: #fff;
  line-height: 53px;
  font-size: 15px;

}
header ul li{
  float: left;
  width: 86px;
  height: 20px;
  text-align: center;
}
header ul{
  width: 1250px;
  height: 53px;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  margin: 0 auto;
}
header ul li img{
 vertical-align: middle;
  width: 18px;
  height: 18px;
}
li:hover{
  color:#10d5b8;
}
</style>