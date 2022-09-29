<template>
      <nav  class="show animated fadeInDownBig" v-show="xsnav">
      <div class="gtkd">
       <h1 class="logo">
        <a href="javascript:;">小兔仙</a>
       </h1>
       <ul class="u2">
     <router-link tag="li" active-class="bs" @click.native="xsbs"  exact to="/"><a  href="jacascript:;">首页</a></router-link>
     <router-link  tag="li" class="i11"  @mouseover.native="ycbox_cx(index,$event)" @mouseout.native="ycbox_xs" to="/banner2"   @click.native="cs(item,index)"  v-for="item,index in nav" :key="item.uid"><a :class="kg==index?'bv':''" href="javascript:;">{{item.name}}</a>
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
       <div class="show-right">
         <a href="javascript:">品牌</a>
       <a href="javascript:">专题</a>
       </div>
      
       
         
      </div>
    </nav>
</template>
<script>
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
       ycbox_cx(e){
         this.lixb = this.nav[e]
         this.ycboxkg = e
       
      
       },
       ycbox_xs(){
         this.ycboxkg = -1
       },
       cs(a,b){
        console.log(a,b);
       bus.$emit('cs',a,b)
       this.kg = b
       },
       xsbs(){
        this.kg = -1
        console.log(1);
       },
      showIcon() {
      if (
        !!document.documentElement.scrollTop &&
        document.documentElement.scrollTop >110
       ) {            
            this.xsnav = true
        } else {
             this.xsnav = false
        }
    },
  
      
     },
     mounted(){
    axios.get('https://apipc-xiaotuxian-front.itheima.net/home/category/head').then((a)=>{
       if(a.data.msg == '操作成功'){
        this.nav = a.data.result;
        
       }
  
    }),
     window.addEventListener("scroll", this.showIcon);
      
   }
};
</script>
<style lang="scss" scoped>

</style>
