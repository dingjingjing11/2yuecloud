<template>
    <div>
         <nav>
      <div class="gtkd">
       <h1 class="logo">
        <a href="javascript:;">小兔仙</a>
       </h1>
       <ul class="u2">
     <router-link tag="li" active-class="bs" @click.native="xsbs"  exact to="/"><a  href="jacascript:;">首页</a></router-link>
     <!-- <router-link  tag="li" class="i11"  @mouseover.native="ycbox_cx(index,$event)" @mouseout.native="ycbox_xs" :to="'category/'+item.id"   @click.native="cs(index)"   v-for="item,index in nav" :key="item.uid"><a :class="kg==index?'bv':''" href="javascript:;">{{item.name}}</a> -->
       <li class="i11" v-for="item,index in nav" :key="index"  @mouseover="ycbox_cx(index)" @mouseout="ycbox_xs"  @click="cs(item,index)" ><a :class="kg==index?'bv':''" href="javascript:;">{{item.name}}</a>
    <transition  name="fade">
          <div v-show="ycboxkg==index"  class="ycbox ">
        <ul>
          <li v-for="item1,index1 in lixb.children" :key="index1">
            <img :src="item1.picture" alt="">
            <p>{{item1.name}}</p>
          </li>
        </ul>
      </div>
    </transition>
    </li>
       </ul>
  
       <div class="search">
        <i><img src="../assets/放大镜.png" alt=""></i>
        <input type="text" placeholder="搜一搜">
       </div>
       <div class="car" @click="shopcar(id)">
        <i class="iconfont icon-gouwuche cari" ></i>
        <em class="zero">{{$store.getters.getSum}}</em>
       </div>
      </div>
    </nav>
   
  
    </div>

   
</template>

<script>
import {findHeader} from '../api/home'

export default {

     data() {
      return {
         nav:[],
         ycboxkg:-1,
         lixb:'',
         kg:-1,
         xsnav:false
         
          
      }
     },
     methods:{
      shopcar(id){
      this.$router.push({path:'/cart'})
    },
       ycbox_cx(e){
         this.lixb = this.nav[e]
         this.ycboxkg = e
      
       },
       ycbox_xs(){
         this.ycboxkg = -1
       },
       xsbs(){
        this.kg = -1
       },
        cs(a,b){
         this.$router.push('/category/'+a.id)
         this.kg = b
         this.$store.commit('changetitle',a.name)
          
       },
  
      
     },
     mounted(){
    findHeader().then((res)=>{
       if(res.msg == '操作成功'){
        this.nav = res.result;
         
      }
         
    })
     window.addEventListener("scroll", this.showIcon);
      
   }
};
</script>
<style  scoped>
   .bv{
    color: #27ba9b !important;
    border-bottom: 1px solid  
  }
</style>
