<template>
  <div>
    <div class="gtkd">
      <div class="nav-title">
        <span class="s1">
          <a class="a1" href="">首页</a>
        </span>
        <span class="s2">></span>
        <span class="s3 animated bounceInRight">{{$store.state.category.title}}</span>
      </div>
      <div class="lunbo">
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
      <div class="footer">
        <h3>全部分类</h3>
        <ul>
          <li v-for="(item, index) in kong.children" :key="index">
            <img :src="item.picture" alt="" />
            <p>{{ item.name }}</p>
          </li>
        </ul>
      </div>
      <div
        class="contentbox"
        v-for="(item, index) in kong.children"
        :key="index"
      >
        <div class="head">
          <h3>{{ item.name }}</h3>
          <p>温暖柔软,品质之选</p>
        </div>
        <div class="bodybox">
          <a href="javascript:;" v-for="(item1, index1) in item.goods" :key="index1" @click="dj(item1.id,item1,item.name,$store.state.category.title)">
            <img :src="item1.picture" alt="" />
            <p class="p1">{{ item1.name }}</p>
            <p class="p2">{{ item1.desc }}</p>
            <p class="p3">¥{{ item1.price }}</p>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>
<script>

import { findBanner,findNew } from "@/api/home";
export default {
  components: {},
  data() {
    return {
      Imgs: "",
      content: "",
      kong: "",
      content: "",
      arr:'',
    };
  },
  created() {},
  computed: {},
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
        effect: "fade",

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
    dj(id,name,bigname,wname){
 
       this.$store.commit('hqtitle',name.name)
       this.$store.commit('hqtitle1',bigname)
       this.$store.commit('hqtitle2',wname)
      this.$router.push({path:'/product/' + id})
    }
  },
  mounted() {
    findBanner().then((a) => {
      if (a.msg == "操作成功") {
        this.Imgs = a.result;
        this.$nextTick(() => {
          this.Swiper();
        });
      }
    });

    this.$watch(() => {
        findNew(this.$route.params.id).then((res)=>{
       if(res.msg == '操作成功'){
        this.kong =  res.result
        console.log(this.kong);
      }
    
         
    })
    });
  },
};
</script>
<style  scoped>
.nav-title {
  display: flex;
  padding: 25px 10px;
}
.s2 {
  margin: 0 7px;
  position: relative;
  top: -2px;
}
.s1 {
  color: #666 !important;
  font-size: 14px;
  display: inline-block;
}
.s3 {
  font-size: 14px;
}
.lunbo {
  height: 500px;
  width: 1240px;
}
.footer {
  margin-top: 20px;
  background-color: #fff;
}
.footer h3 {
  font-size: 28px;
  color: #666;
  font-weight: 400;
  text-align: center;
  line-height: 100px;
}
.footer ul {
  display: flex;
  padding: 0 32px;
  flex-wrap: wrap;
  min-height: 160px;
}
.footer li {
  width: 168px;
  height: 160px;
}
.footer img {
  width: 100px;
  height: 100px;
}
.footer p {
  line-height: 40px;
  padding-left: 20px;
}
.footer li:hover {
  color: #27ba9b;
}
.a1:hover {
  color: #27ba9b;
}
.contentbox {
  background-color: #fff;
  margin-top: 20px;
  position: relative;
}
.contentbox h3 {
  font-size: 28px;
  color: #666;
  font-weight: 400;
  text-align: center;
  line-height: 100px;
}
.contentbox p {
  text-align: center;
  color: #999;
  font-size: 20px;
  position: relative;
  top: -20px;
}
.bodybox {
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
  padding: 0 65px 30px;
}
.bodybox a {
  display: block;
  width: 220px;
  padding: 20px 30px;
  text-align: center;
  transition: all 0.5s;
}
.bodybox img {
  width: 160px;
  height: 160px;
}
.bodybox .p1 {
  font-size: 16px;
  margin-top: 29px;
  text-overflow: ellipsis;
  overflow: hidden;
  color: #000;
  white-space: nowrap;
}
.bodybox .p2 {
  color: #999;
  height: 29px;
  padding-top: 10px;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  font-size: 14px;
}
.bodybox .p3 {
  color: #cf4444;
  font-size: 20px;
  padding-top: 10px;
}
.bodybox a:hover {
  transform: translate3d(0, -3px, 0);
  box-shadow: 0 3px 8px rgb(0 0 0 / 20%);
}
</style>
