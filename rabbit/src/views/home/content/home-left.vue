<template>
  <div>
    <div class="banner">
      <div class="gtkd">
        <div class="banner-left">
          <ul>
            <li
              v-for="(item, index) in banner"
              :key="index"
              @mouseover="liycbox2(index)"
              @mouseout="liycbox3"
              class="xh1"
            >
              <a href="javascript:;">{{ item.name }}</a>
              <a href="javascript:;" class="a2">{{ item.children[0].name }}</a>
              <a href="javascript:;" class="a2">{{ item.children[1].name }}</a>
              <div class="ycbox2" v-show="ycboxkg1 == index">
                <h4>
                  分类推荐
                  <small> 根据您的购买或浏览记录推荐 </small>
                </h4>
                <ul class="u3">
                  <li v-for="(item, index) in lixb2.goods" :key="index">
                    <a href="">
                      <img :src="item.picture" alt="" />
                      <div class="xhdiv">
                        <p class="p1">{{ item.name }}</p>
                        <p class="p2">{{ item.desc }}</p>
                        <p class="p3"><i>￥</i>{{ item.price }}</p>
                      </div>
                    </a>
                  </li>
                </ul>
              </div>
            </li>
            <li @mouseover="sololikg" @mouseout="sololigb" class="xh2">
              <a href="javascript:;">{{ banner1.name }}</a>
              <a href="" class="a2">{{ banner1Children }}</a>
              <div class="ycbox2" v-show="ycboxkg2">
                <h4>
                  分类推荐
                  <small> 根据您的购买或浏览记录推荐 </small>
                </h4>
                <ul class="u3">
                  <li v-for="(item, index) in banner3" :key="index">
                    <a href="">
                      <img :src="item.picture" alt="" />
                      <div class="xhdiv">
                        <p class="p1">{{ item.name }}</p>
                        <p class="p2">{{ item.desc }}</p>
                        <p class="p3"><i>￥</i>{{ item.price }}</p>
                      </div>
                    </a>
                  </li>
                </ul>
              </div>
            </li>
            <li @mouseover="ppbox" @mouseout="ppbox1" class="xh3">
              <a href="javascript:;">品牌</a>
              <a class="a2" href="">品牌推荐</a>
              <div class="ycbox3" v-show="ppboxkg">
                <h4>
                  品牌推荐
                  <small>根据您的购买或浏览记录推荐</small>
                </h4>

                <ul class="u5">
                  <li v-for="(item, index) in banner4" :key="index">
                    <a href="">
                      <img :src="item.logo" alt="" />
                      <div class="smbox">
                        <p class="p4">{{ item.place }}</p>
                        <p class="p5">{{ item.name }}</p>
                        <p class="p6">{{ item.desc }}</p>
                      </div>
                    </a>
                  </li>
                </ul>
              </div>
            </li>
          </ul>
        </div>


      </div>
    </div>
  </div>
</template>
<script>
import { findHeader,findLastli } from "@/api/home";

export default {

  data() {
    return {
      banner: "",
      banner1: "",
      banner1Children: "",
      banner2: "",
      lixb2: "",
      ycboxkg1: -1,
      lixb3: "",
      ycboxkg2: false,
      banner3: "",
      banner4: "",
      ppboxkg: false,
      Imgs:''
    };
  },

  methods: {
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
    liycbox2(e) {
      this.lixb2 = this.banner2[e];
      console.log(this.banner3);
      this.ycboxkg1 = e;
    },
    liycbox3() {
      this.ycboxkg1 = -1;
    },
    sololikg() {
      this.ycboxkg2 = true;
    },
    sololigb() {
      this.ycboxkg2 = false;
    },
    ppbox() {
      this.ppboxkg = true;
    },
    ppbox1() {
      this.ppboxkg = false;
    },
  },
  mounted() {
    // axios
    //   .get("https://apipc-xiaotuxian-front.itheima.net/home/category/head")
    //   .then((a) => {
    //     if (a.data.msg == "操作成功") {
    //       this.banner1 = a.data.result.pop();
    //       this.banner = a.data.result;
    //       this.banner1Children = this.banner1.children[0].name;
    //       this.banner2 = a.data.result;
    //       this.banner3 = this.banner1.goods;
    //     }
    //   });

       findHeader().then((a)=>{
       if(a.msg == '操作成功'){
          this.banner1 = a.result.pop();
        this.banner = a.result;
       this.banner1Children = this.banner1.children[0].name;
         this.banner2 = a.result;
        this.banner3 = this.banner1.goods;
      }
      console.log(a);
         
    })

    // axios
    //   .get("https://apipc-xiaotuxian-front.itheima.net/home/brand?limit=6")
    //   .then((a) => {
    //     if (a.data.msg == "操作成功") {
    //       this.banner4 = a.data.result;
    //     }
    //   });
      findLastli().then((a)=>{
             if (a.msg == "操作成功") {
          this.banner4 = a.result;
        }
      })
    
  },
};
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
