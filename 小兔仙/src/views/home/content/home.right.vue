<template>
           <div class="banner-right">
          <div class="swiper">
            <div class="swiper-wrapper">
              <div
                class="swiper-slide"
                v-for="(item, index) in Imgs"
                :key="index"
              >
                <img :src="item.imgUrl" alt="" />
              </div>
            </div>
            <!-- 如果需要分页器 -->
            <div class="swiper-pagination"></div>

            <!-- 如果需要导航按钮 -->
            <div class="swiper-button-prev"></div>
            <div class="swiper-button-next"></div>

            <!-- 如果需要滚动条 -->
            <!-- <div class="swiper-scrollbar"></div> -->
          </div>
        </div>
</template>
<script>
import { findBanner } from "@/api/home";
export default {
   data() {
      return {
         Imgs:''
      }
   },
   created(){
   },
   computed:{
   },
   methods:{
        Swiper() {
      var mySwiper = new Swiper(".swiper", {
        // direction: 'vertical', // 垂直切换选项
        loop: true, // 循环模式选项
        autoplay: {
          delay: 1500, //1秒切换一次
        },
         loop: true,
        keyboard: true,
        effect: 'fade',

        // 如果需要分页器
        pagination: {
          el: ".swiper-pagination",
        },
        // 如果需要前进后退按钮
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },

        // 如果需要滚动条
        scrollbar: {
          el: ".swiper-scrollbar",
        },
      });
    },
  
   },
   mounted(){
   findBanner().then((a)=>{
             if (a.msg == "操作成功") {
          this.Imgs = a.result;
          this.$nextTick(() => {
            this.Swiper();
          });
        }
   })
   }
}
</script>
<style  scoped>
.banner-left {
  width: 250px;
  height: 500px;
  background: rgba(0, 0, 0, 0.8);
  position: relative;
  z-index: 99;
}
.banner-right {
  width: 1240px;
  height: 500px;
  position: absolute;
  left: 0;
  top: 0;
  z-index: 98;
}
.banner > .gtkd {
  position: relative;
}
.xh1 {
  padding-left: 40px;
  height: 50px;
  line-height: 50px;
}
.xh1 > a {
  margin-right: 5px;
  color: #fff;
  font-size: 16px;
  display: inline-block !important;
}
.a2 {
  font-size: 14px !important;
}
.ycbox2 {
  width: 990px;
  height: 500px;
  background: hsla(0, 0%, 100%, 0.8);
  position: absolute;
  left: 250px;
  top: 0;
  /* display: none; */
  padding: 0 15px;
  z-index: 400;
}
.ycbox2 h4 {
  font-size: 20px;
  font-weight: 400;
  line-height: 70px;
}
.ycbox2 li:hover {
  background: #e3f9f4;
}
.ycbox2 small {
  font-size: 16px;
  color: #666;
}
.u3 {
  display: flex;
  flex-wrap: wrap;
  width: 975px;
}
.u3 li {
  width: 310px;
  height: 120px;
  margin-right: 15px;
  margin-bottom: 15px;
  border: 1px solid #eee;
  border-radius: 4px;
  background: #fff;
}
.u3 a {
  display: flex !important;
  width: 100% !important;
  height: 100% !important;
  align-items: center !important;
  padding: 10px !important;
}
.u3 img {
  width: 95px;
  height: 95px;
}
.xhdiv {
  padding-left: 10px;
  line-height: 24px;
  width: 190px;
}
.p1 {
  font-size: 16px;
  color: #666;
  word-break: break-all;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
}
.p2 {
  color: #999;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  padding: 7px 0;
  text-overflow: ellipsis;
  overflow: hidden;
}

.p3 {
  font-size: 22px;
  color: #cf4444;
}
.p3 i {
  font-size: 16px !important;
}
.ycbox3 {
  width: 990px;
  height: 500px;
  background: hsla(0, 0%, 100%, 0.8);
  position: absolute;
  left: 250px;
  top: 0;
  padding: 0 15px;
}
.ycbox3 h4 {
  font-size: 20px;
  font-weight: 400;
  line-height: 70px;
}
.ycbox3 small {
  font-size: 16px;
  color: #666;
}
.ycbox3 li:hover {
  background: #e3f9f4;
}
.ycbox3 ul {
  display: flex;
  flex-wrap: wrap;
  width: 975px;
}
.ycbox3 li {
  width: 310px;
  height: 180px;
  margin-right: 15px;
  margin-bottom: 15px;
  border: 1px solid #eee;
  border-radius: 4px;
  background: #fff;
}
.ycbox3 a {
  display: flex;
  width: 100%;
  height: 100%;
  align-items: center;
  padding: 10px;
  align-items: flex-start;
}
.ycbox3 img {
  width: 120px;
  height: 160px;
}
.ycbox3 .smbox {
  padding-left: 20px;
  line-height: 24px;
  width: 190px;
}
.smbox .p4 {
  color: #999;
  font-size: 14px;
}
.smbox .p5 {
  padding: 8px 0;
  font-size: 16px;
  color: #666;
}
.smbox .p6 {
  color: #999;
  font-size: 14px;
}
.xh1:hover {
  background: #27ba9b;
}
.xh2:hover {
  background: #27ba9b;
}
.xh2 {
  padding-left: 40px;
  height: 50px;
  line-height: 50px;
}
.xh2 > a {
  margin-right: 5px;
  color: #fff;
  font-size: 16px;
  display: inline-block !important;
}
.xh3:hover {
  background: #27ba9b;
}
.xh3 {
  padding-left: 40px;
  height: 50px;
  line-height: 50px;
}
.xh3 > a {
  margin-right: 5px;
  color: #fff;
  font-size: 16px;
  display: inline-block !important;
}
.swiper-pagination{
    bottom: 20px !important;
    left: 65px !important;
}
.swiper-button-prev{
    left: 275px;
}


</style>
