<template>
    <div>
         <nav>
      <div class="gtkd">
       <h1 class="logo">
        <a href="javascript:;">小兔仙</a>
       </h1>
       <ul class="u2">
     <router-link tag="li" active-class="bs" @click.native="xsbs"  exact to="/"><a  href="jacascript:;">首页</a></router-link>
     <router-link  tag="li" class="i11"  @mouseover.native="ycbox_cx(index,$event)" @mouseout.native="ycbox_xs" :to="item.id"    v-for="item,index in nav" :key="item.uid"><a :class="kg==index?'bv':''" href="javascript:;">{{item.name}}</a>
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
     </router-link>
       </ul>
  
       <div class="search">
        <i><img src="../assets/放大镜.png" alt=""></i>
        <input type="text" placeholder="搜一搜">
       </div>
       
       <div class="car">
        <i class="iconfont icon-gouwuche cari" ></i>
        <em class="zero">0</em>
       </div>
      </div>
    </nav>
   
  
    </div>

   
</template>

<script>
import {findHeader} from '../api/home'

export default {
    components:{
  
    },
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
       ycbox_cx(e){
         this.lixb = this.nav[e]
         this.ycboxkg = e
       
      
       },
       ycbox_xs(){
         this.ycboxkg = -1
       },
      //  cs(a,b){
      //   console.log(a,b);
      //  bus.$emit('cs',a,b)
      //  this.kg = b
      //  },
       xsbs(){
        this.kg = -1
        console.log(1);
       },

  
      
     },
     mounted(){
    findHeader().then((res)=>{
       if(res.msg == '操作成功'){
        this.nav = res.result;
      }
      console.log(res);
         
    })
     window.addEventListener("scroll", this.showIcon);
      
   }
};
</script>
<style lang="scss" scoped>

</style>

