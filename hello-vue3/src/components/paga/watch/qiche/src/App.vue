<template>
  <div id="app" >
    <div class="zzc" v-if="zzc"></div>
    <header>
      <span class="s1">
        <img class="im1" src="./assets/img/左箭头 (1).png" alt="" />
        <img class="im2" src="./assets/img/小房子.png" alt="" />
      </span>
      <h2 class="s2">多条件选车</h2>
      <span class="s3">
        <img class="im3" src="./assets/img/放大镜 (1).png" alt="" />
        <img class="im4" src="./assets/img/44_点点点.png" alt="" />
      </span>
    </header>
    <div class="changebox"  v-if="cx1">
     <div class="scroll">
        <div class="changebox1">
        <div  v-for="(item, index) in tynr" :key="index"  class="tuoyuan">{{item}} <span @click="s11(index)">X</span> </div>
      </div>
     </div>
      <div class="changebox2" @click="qc()">清除 X</div>
    </div>
    <div class="banner">
      <div class="banner-left">
        <ul>
          <li class="i1">基本信息</li>
          <li>动力参数</li>
          <li>车身参数</li>
          <li>地盘制动</li>
          <li>安全配置</li>
          <li>辅助/操控配置</li>
          <li>外部/放盗配置</li>
          <li>内部配置</li>
          <li>座椅配置</li>
          <li>多媒体配置</li>
          <li>灯光配置</li>
          <li>玻璃后视镜配置</li>
          <li>空调</li>
        </ul>
      </div>
      <div class="banner-right">
        <div class="title">基本信息</div>
        <div class="title1">级别</div>
        <div class="content">
          <dl @click="bs2(0)" :class="bs333?'bs333':''">
            <dt class="iconfont icon-paoche"></dt>
            <dd>轿车 <span class="s22">{{sanjiao}}</span></dd>
          </dl>
          <dl  @click="bs2(1)" :class="bs444?'bs333':''" >
            <dt class="iconfont icon-mpv"></dt>
            <dd>SUV <span class="s22">{{sanjiao1}}</span> </dd>
          </dl>
          <dl @click="bs2(2)"  :class="bs555?'bs333':''" >
            <dt class="iconfont icon-paoche"></dt>
            <dd>MPV  <span class="s22">{{sanjiao2}}</span> </dd>
          </dl>
          <dl @click="bs2(3)"  :class="bs666?'bs333':''" >
            <dt class="iconfont icon-mpv"></dt>
            <dd>跑车  <span class="s22">{{sanjiao3}}</span></dd>
          </dl>
          <dl @click="bs2(4)" :class="bs777?'bs333':''" >
            <dt class="iconfont icon-paoche"></dt>
            <dd>皮卡  <span class="s22">{{sanjiao4}}</span></dd>
          </dl>
          <dl @click="bs2(5)" :class="bs888?'bs888':''"  >
            <dt class="iconfont icon-mpv"></dt>
            <dd>其他  <span class="s22">{{sanjiao5}}</span></dd>
          </dl>
        </div>
        <div class="title1">价格</div>
        <div class="content">
          <div v-for="(item, index) in jiage" :key="index" class="xr1"   :class="[item.bl? 'bl' : '', bh?'bh':'']"  @click="dj(item)">
            {{ item.jg}}
          </div>
        </div>

  

 
        
      </div>
    </div>
    <footer>
      <a href="javascript:;" class="a1" @click="qd()">{{footernr}}</a>
   
    </footer>
       <div class="footerbox" v-if="cx2">
      <span v-for="(item, index) in jiaoche" :key="index" class="footerspan"  @click="spanbs(item)" :class="item.bl22?'bl': '' " >{{item.jg}} </span>
      </div>
      <div class="footerbox" v-if="cx3">
      <span v-for="(item, index) in suv" :key="index" class="footerspan"   @click="spanbs(item)" :class="item.bl22?'bl': '' ">{{item.jg}}</span>
      </div>
       <div class="footerbox" v-if="cx4">
        <span v-for="(item, index) in mpv" :key="index" class="footerspan" @click="spanbs(item)" :class="item.bl22?'bl': '' ">{{item.jg}}</span>
      </div>
       <div class="footerbox" v-if="cx5">
        <span v-for="(item, index) in paoche" :key="index" class="footerspan" @click="spanbs(item)" :class="item.bl22?'bl': '' ">{{item.jg}} </span>
      </div>
       <div class="footerbox" v-if="cx6">
        <span v-for="(item, index) in pika" :key="index" class="footerspan" @click="spanbs(item)" :class="item.bl22?'bl': '' ">{{item.jg}}  </span>
      </div>
       <div class="footerbox" v-if="cx7">
        <span v-for="(item, index) in qita" :key="index" class="footerspan" @click="spanbs(item)" :class="item.bl22?'bl': '' ">{{item.jg}} </span>
      </div>
   
  </div>
</template>
<script>
import { home } from "./assets/rem";
home();
export default {

  name: "app",
  data() {
    return {
      sanjiao:'⏷',
      sanjiao1:'⏷',
      sanjiao2:'⏷',
      sanjiao3:'⏷',
      sanjiao4:'⏷',
      sanjiao5:'⏷',
    
      zzc :false,
   bl22: false,
   
      jiaoche:[
      {jg:'紧凑轿车',bl22:this.bl22},
      {jg:'小型轿车',bl22:this.bl22},
      {jg:'大型轿车',bl22:this.bl22},
      ],
      suv:[
      {jg:'紧凑suv',bl22:this.bl22},
      {jg:'小型suv',bl22:this.bl22},
      {jg:'大型suv',bl22:this.bl22},
      ],
               mpv:[
      {jg:'小型mpv',bl22:this.bl22},
      {jg:'中型mpv',bl22:this.bl22},
      {jg:'大型mpv',bl22:this.bl22},
      ],
               paoche:[
      {jg:'跑车',bl22:this.bl22},
    
      ],
               pika:[
      {jg:'皮卡',bl22:this.bl22},
     
      ],
              qita:[
      {jg:'其他',bl22:this.bl22},
    
      ],
  bs333:false,
  bs444:false,
  bs555:false,
  bs666:false,
  bs777:false,
  bs888:false,
   zzc:false,
     
         jiage:[
      {jg:'5万以下',bl:this.bl},
      {jg:'5-8万',bl:this.bl},
      {jg:'8-10万',bl:this.bl},
      {jg:'10-15万',bl:this.bl},
      {jg:'15-20万',bl:this.bl},
      {jg:'20-25万',bl:this.bl},
      {jg:'25-35万',bl:this.bl},
      {jg:'35-59万',bl:this.bl},
      {jg:'50-100万',bl:this.bl},
      {jg:'100万以上',bl:this.bl},
    
      ],
     
      cx1: false,
      tynr: [],
      bl:false,
      bh:false,
      cx2:false,
      cx3:false,
      cx4:false,
      cx5:false,
      cx6:false,
      cx7:false,
     footernr:'共126个车系837个车型符合条件'
   
    };
  },
  methods: {
       qc(){
      this.cx1 = false
      this.bh = true
      this.tynr = []
      window.location.reload()

     
    },
       s11(a){
      this.tynr.splice(a,1)
      if(this.tynr==''){
           this.cx1 =false
      }
      },
    dj(e) {
        this.cx1 = true
        this.tynr.push(e.jg)
        e.bl =!e.bl
        console.log(this.tynr.indexOf(e.jg));
        this.tynr.forEach(a=>{
        
       if(this.tynr.indexOf(e.jg) == -1){
         
       }
        })
    },
    bs2(res){
      if(res == 0){
         this.cx2 = true
         this.footernr = '确定'
          this.bs333 = true
          this.zzc = true
          this.zzc = true
          this.sanjiao='▴'

      }
      if(res == 1){
         this.cx3 = true
         this.footernr = '确定'
         this.bs444= true
          this.zzc = true
          this.sanjiao1='▴'
       
      }
      if(res == 2){
         this.cx4 = true
         this.footernr = '确定'
         this.bs555 = true
         this.zzc = true
         this.sanjiao2='▴'
         
        
      }
      if(res == 3){
         this.cx5 = true
         this.footernr = '确定'
         this.bs666 = true
         this.zzc = true
         this.sanjiao3='▴'
         
      }
      if(res == 4){
         this.cx6 = true
         this.footernr = '确定'
         this.bs777 = true
         this.zzc = true
         this.sanjiao4='▴'
         
      }
      if(res == 5){
         this.cx7 = true
         this.footernr = '确定'
         this.bs888= true
         this.zzc = true
         this.sanjiao5='▴'
       
         
      }
    },
    qd(){
     this.cx2=false,
     this.cx3=false,
     this.cx4=false,
     this.cx5=false,
     this.cx6=false,
     this.cx7=false,
     this.cx1= true,
     this.zzc = false
     this.footernr ='共126个车系837个车型符合条件'
      this.sanjiao='⏷'
      this.sanjiao1='⏷'
      this.sanjiao2='⏷'
      this.sanjiao3='⏷'
      this.sanjiao4='⏷'
      this.sanjiao5='⏷'
     

    },
    spanbs(e){
        e.bl22 = !e.bl22;
        if(e.bl22 =true){
          this.tynr.push(e.jg)
        }
    }

  },


};
</script>
<style >
@import url(./assets/qiche.css);
@import url(./assets/reset.css);
@import url(./assets/font_3475945_gnueudv8auj/iconfont.css);
</style>
