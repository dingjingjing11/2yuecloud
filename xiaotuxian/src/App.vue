<template>
  <div id="app">
   
      <header>
        <ul>
          <li><span>请先登录</span> </li> <span>|</span>
          <li><span>免费注册 </span> </li> <span>|</span>
          <li><span>我的订单</span>  </li> <span>|</span>
          <li><span>会员中心</span></li> <span>|</span>
          <li><span>帮助中心</span></li> <span>|</span>
          <li><span>关于我们</span></li><span>|</span>
          <li><img src="./sj.png" alt=""> 手机版</li>
        </ul>
      </header>
      <!-- 头部导航 -->
      <nav>
        <div class="logo"><img src="./logo.0940ebb5.png" alt=""></div>
        <div class="daohang">
          <ul>
            <li>首页</li>
            <li v-for="(item,index) in arr" :key="index" @mouseover="over(index)"  @mouseout="out()">{{item.name}}
            <!-- 隐藏的盒子 -->
                  <div class="nav-box" v-show="d==index">
                    <ul>
                      <li v-for="(a,d) in item.children" :key="d">
                        <img :src="a.picture" alt="">
                        <p>{{a.name}}</p>
                      </li>
                    </ul>
                  </div> 
            </li>
          </ul>
        </div>
        <div class="search">
          <img src="./suo (5).png" alt="">
          <input type="text" placeholder="搜一搜">
        </div>
        <div class="car"><img src="./car.png" alt=""></div>
        </nav>
      
       <home></home>
  </div>
</template>
<script>
import axios from 'axios'
import home from './Home/home.vue'
export default {
  name: 'App',
  components:{
    home
  },
  data(){
    return{
      arr:[],
      list:[],
      d:-1,
     
      
      
  }
  },
  methods:{
    over(index){
      // this.show=true,
      this.d=index
    },
    out(){
      // this.show=false
      this.d=-1
    }
  },
  mounted(){
    axios
    .get('https://apipc-xiaotuxian-front.itheima.net/home/category/head')
    .then((res)=>{
      if(res.data.msg=='操作成功'){
        this.arr=res.data.result;
       this.list=res.data.result;
      }
    })
  }
  

}
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
nav{
  width: 1240px;
  height: 132px;
  margin: 0 auto;
  line-height: 132px;
  display: flex;
  /* flex-direction: row; */
  position: relative;

}
.logo{
  width: 200px;
  height: 132px;
  
  /* margin-right: 40px; */
}
.logo img{
  width: 200px;
  vertical-align: middle;
}
.daohang{
  width: 820px;
  height: 132px;
  
}
.daohang ul{
  width: 820px;
  height: 132px;
  display: flex;
  justify-content: space-around;
  
  
}
.daohang ul li{
  width: 38px;
  height: 32px;
  
}
.home{
  width: 38px;
  height: 32px;
}
.search{
  width: 170px;
  height: 32px;
  border-bottom: 1px solid#000;
  margin-top: 40px;
  vertical-align: middle;
  line-height: 32px;
  position: relative;

 
}
.search img{
  width: 170px;
  height: 32px;
}
input{
  border: 0;
  padding-left: 25px;
}
.sou{
  width: 18px;
  height: 18px;
  
}
.search img{ 
  width: 18px;
  height: 18px;
  position: absolute;
  bottom: 4px;
  
}
.car{
  width: 50px;
  height: 132px;
  vertical-align: middle;
  /* margin-bottom: -4px; */
  margin-left: 16px;
}
.car img{
  width: 22px;
  height: 22px;
  vertical-align: middle;
}
.nav-box{
  width: 1240px;
  height: 132px;
  /* margin: 0 auto; */
  /* border: 1px solid #000; */
  
  box-shadow: 0 0 5px #ccc;
    transition: all .2s .1s;
  
  position: absolute;
  top:100px;
  left: 0px;
  z-index: 10000;
  background-color: #fff;
  padding: 40px 0px;
  box-sizing: border-box;
  /* padding: 10px; */
}
.nav-box img{
  width: 60px;
  height: 60px;

}
.nav-box ul{

  display: flex;
  justify-content: flex-start;
   
    padding: 0px 70px;
    
}
 

.nav-box ul li{ 
  height: 50px; 
  float: left;
   display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 110px;
  text-align: center;
  align-items: center;
}







</style>
