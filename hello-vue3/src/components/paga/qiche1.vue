<template>
  <div>
    <!-- 头部导航 -->
    <header-view />
    <div class="main">
      <header>
        <div class="header_left">
          <ul>
            <li v-for="item in selectArr">
              <span>{{ item.name }}</span>
            </li>
          </ul>
        </div>
        <div class="header_right">
          清除 <img src="../assets/错误.png" alt="" />
        </div>
      </header>
      <main>
        <div class="mian_left">
          <ul>
            <li>基本信息</li>
            <li>动力参数</li>
            <li>车身参数</li>
            <li>底盘制动</li>
            <li>安全配置</li>
            <li>辅助/操控配置</li>
            <li>外部/防盗配置</li>
            <li>内部配置</li>
            <li>座椅配置</li>
            <li>多媒体配置</li>
            <li>灯光配置</li>
            <li>玻璃/后视镜配置</li>
            <li>空调</li>
            <li>智能硬件</li>
          </ul>
        </div>
        <div class="main_right">
          <h2>基本信息</h2>
          <h3>级别</h3>
          <ul class="jiBenXinXi">
            <!-- 五种车型 -->
            <li @click="shopList(item)"  v-for='(item,index) in list[0].level'>
                <img width="50rem" 
                :src="item.arr.filter(function(i){return i.checked == true}).length==0?item.icon[0]:item.icon[1]" alt="">
              <div>
                <span>{{item.title}}</span>
                <img src="../assets/下拉列表.png" class="sanJiao" />
              </div>
            </li>

          </ul>
          <h3>价格</h3>
          <ul class="priceContent">
            <li class="priceContentLi" v-for="item in data.price">
              {{ item }}
            </li>
            <!-- <li class="priceContentLi"><p>5万以下</p></li>
            <li class="priceContentLi priceContentLis"><p>5万以下</p></li>
            <li class="priceContentLi"><p>5万以下</p></li>
            <li class="priceContentLi"><p>5万以下</p></li> -->
          </ul>
        </div>
      </main>
    </div>
    <!-- 遮罩层 -->
    <div class="mask_box" v-show="maskKg">
      <div class="mask_botton">
        <ul>
          <!-- maskList : level[index].arr -->
          <li
            class="mask_li"
            v-for="(item, index) in maskList"   
            :key="index"
            @click="maskActive(index,item)"
          >
            <p class="mask_p" :class="{'mask_active':item.checked}" >
              <!-- 01 -->
              {{ item.name }}
            </p>
          </li>
        </ul>
        <button class="mask_button" @click="maskOver(maskList)">确定</button>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import headerView from "./headerShop.vue";
export default {
  components: {
    headerView,
  },
  data() {
    return {
      selectArr: [], // 选择的车型
      selectIndex:0,
      list: [
        {
          level: [
            {
              title: "轿车",
              arr: [{name:"微型车",checked:false},{name:"小型车",checked:false}],
              icon: [require('../assets/SUVHUI.png'),require('../assets/SUV.png')],
              showBlue:false
            },
            {
              title: "suv",
              arr: [{name:"小型suv",checked:false},{name:"中型suv",checked:false}],
              icon: [require('../assets/SUVHUI.png'),require('../assets/SUV.png')],
            },
            {
              title: "mpv",
              arr: [{name:"微型mpv",checked:false},{name:"小型mpv",checked:false}],
              icon: [require('../assets/SUVHUI.png'),require('../assets/SUV.png')],
            },
            {
              title: "跑车",
              arr: [],
              icon: [require('../assets/SUVHUI.png'),require('../assets/SUV.png')],
            },
            {
              title: "皮卡",
              arr: [],
              icon: [require('../assets/SUVHUI.png'),require('../assets/SUV.png')],
            },
          ],
        },
        {
          price:[
            {name:'5万以下',checked:false},
            {name:'5-10万',checked:false},
            {name:'10-20',checked:false},
            {name:'20-50万',checked:false},
            {name:'50-100万',checked:false},
          ]
        },
      ],

      data: {
        level: {
          jiaoche: ["微型车", "小型车", "大型车"],
          suv: ["紧凑型suv", "小型suv", "大型suv"],
          mpv: ["小型mpv", "中型mpv", "大型mpv"],
          paoche: ["跑车"],
          pika: ["皮卡"],
        },
        price: ["5万以下", "5-8万", "8-20万", "20-30万", "30-50万", "50-100万"],
      },
      maskKg: false,
      maskList: []

    
    };
  },
  methods: {
    // 当选择级别的时候点击li获取当前点击的item
    shopList(item) {  //item  {title:'轿车',arr:[{name:'小车',checked:false}]}
        this.maskKg = true; // 弹出遮罩层
        this.maskList = item.arr;  //遮罩层渲染的数据
    },
    // 点击遮罩层确定的时候
    maskOver(maskList) {
      this.maskKg = false; // 关闭 遮罩层
    },
    // 在遮罩层中点击li并获取当前点击的id
    maskActive(index,item) {  // item {name:'小车',checked:false}
      // 改变点击的汽车图标蓝色
        item.checked = !item.checked;
 
    },
  },
  watch:{
    // maskKg 遮罩层
    maskKg(bool){  // 每次变化的值
      if(bool==false){  // 遮罩层关闭 才开始重新计算
        var arr= [];
        for(var i=0;i<this.list[0].level.length;i++){
          for(var j=0;j<this.list[0].level[i].arr.length;j++){
              if(this.list[0].level[i].arr[j].checked==true){
                arr.push(this.list[0].level[i].arr[j])
              }
          }
        }
        this.selectArr = arr;
      }
    }
  }
};
</script>

<style scoped>
.mask_button {
  width: 90%;
  height: 50rem;
  font-size: 16rem;
  color: #fff;
  line-height: 50rem;
  text-align: center;
  cursor: pointer;
  background-color: #05f;
  border-radius: 6rem;
  margin: 11rem 20rem 8rem;
  border: 0 solid #000;
}
.mask_active {
  color: #2873ff !important;
  background-color: rgba(40, 115, 255, 0.1) !important;
}
.mask_li {
  float: left;
  min-width: 33.3333%;
  padding: 5rem 3rem;
}
.mask_p {
  font-size: 12rem;
  color: #111e36;
  line-height: 36rem;
  text-align: center;
  background-color: #f8f9fc;
  border-radius: 2rem;
  overflow: hidden;
}
.mask_botton {
  position: fixed;
  bottom: 0;
  left: 0;
  z-index: 1010;
  width: 100%;
  background-color: #fff;
  overflow: hidden;
  border-radius: 16rem 16rem 0 0;
}
.mask_botton ul {
  padding: 13rem 16rem 0;
}
.mask_box {
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: 1009;
  background: rgba(27, 27, 27, 0.3);
}
.priceContentLi {
  float: left;
  width: 33.333%;
  padding: 4rem 5rem;
  line-height: 40rem;
  white-space: nowrap;
  text-align: center;
  border-radius: 4rem;
  overflow: hidden;
}

.priceContentLis p {
  color: #2873ff !important;
  background-color: rgba(40, 115, 255, 0.1) !important;
}
.priceContentLi p {
  font-size: 12rem;
  color: #111e36;
  line-height: 40rem;
  white-space: nowrap;
  text-align: center;
  background-color: #f8f9fc;
}
.priceContent {
  padding-left: 11rem;
  padding-right: 21rem;
}
.sanJiao {
  width: 14rem;
  height: 14rem;
}

.jiBenXinXi_A {
  width: 60rem;
  height: 24rem;
  display: inline-block;
  /* background: url("../assets/cars.png") no-repeat; */
  /* background-size: 100%; */
  /* background-position: 0 -90rem; */
}
.jiBenXinXi_A img{
  width: 60rem !important;
  height: 42rem;
}

.jiBenXinXi li {
  width: 33.33%;
  float: left;
  position: relative;
  padding: 11rem 0 0;
  font-size: 12rem;
  color: #111e36;
  text-align: center;
}
.jiBenXinXi {
  width: 100%;
  height: 160rem;
  padding: 2rem 21rem 0 12rem;
}
h3 {
  padding: 18rem 15rem 5rem;
  font-size: 16rem;
  overflow: hidden;
  padding-top: 14rem;
  color: #333;
}
h2 {
  padding: 20rem 15rem 5rem;
  font-size: 22rem;
  font-weight: 700;
  color: #111e36;
}
.main_right {
  margin-left: 85rem;
  padding-bottom: 100rem;
  background-color: #fff;
}
.mian_left {
  width: 87rem;
  float: left;
}
.mian_left > ul > li {
  padding: 16.5rem 13rem;
  font-size: 13rem;
  color: #111e36;
  line-height: 16rem;
  min-height: 50rem;
}
.mian_left > ul > li:hover {
  font-weight: 700;
  color: #111e36;
  background-color: #fff;
}
main {
  width: 100%;
  height: 80vh;
}
.main {
  position: relative;
  background-color: #f8f9fc;
}
header {
  height: 50rem;
}
.header_left > ul {
  width: 100%;
  height: 74rem;
  overflow-x: auto;
  white-space: nowrap;
}
.header_right > img {
  /* float: right; */
  width: 20rem;
  height: 20rem;
  margin-top: 16rem;
}
.header_left > ul > li {
  display: inline-block;
  padding: 4rem 12rem;
  margin-right: 8rem;
  background-color: #fff;
  border-radius: 16rem;
  vertical-align: middle;
}
.header_left > ul > li > img {
  width: 22rem;
  height: 22rem;
  margin-left: 5rem;
  margin-top: 2rem;
}
.header_left > ul > li > span {
  display: inline-block;
  font-size: 12rem;
  color: #111e36;
  vertical-align: middle;
}
.header_left {
  width: 80%;
  height: 100%;
  float: left;
  padding: 11rem 20rem;
  overflow: hidden;
}
.header_right {
  float: right;
  width: 20%;
  height: 100%;
  padding-left: 10rem;
  font-size: 12rem;
  color: #666d7f;
  line-height: 50rem;
  text-align: left;
}
</style>