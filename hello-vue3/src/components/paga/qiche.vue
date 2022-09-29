<template>
  <div id="app">
    <header>
      <div class="fl">
        <img class="jiantou" src="./jt.png" alt="" />
        <img class="fangzi" src="./fang.png" alt="" />
      </div>
      <span>多条件选车</span>
      <div class="fr">
        <img class="sousuo" src="./搜索 (4)(1).png" alt="" />
        <img class="dian" src="./微信图片_20220621041736.png" alt="" />
      </div>
    </header>
    <nav>
      <div class="daohang fl">
        <span>5万以下x</span>
        <span>5-8万x</span>
      </div>
      <span class="qingchu fr">清除x</span>
    </nav>
    <div class="center">
      <div class="left">
        <ul>
          <li>基本信息</li>
          <li>动力参数</li>
          <li>车身参数</li>
          <li>地盘制动</li>
          <li>安全配置</li>
          <li>辅助/操控配置</li>
          <li>外部/防盗配置</li>
          <li>内部配置</li>
          <li>座椅配置</li>
          <li>多媒体配置</li>
        </ul>
      </div>
      <div class="right">
        <p>基本信息</p>
        <p>级别</p>
        <div class="che">
          <ul>
            <li>
              <i
                class="iconpng iconpng-jinchou-small"
                @click="shop - list()"
              ></i>
              <p>轿车</p>
            </li>
            <li>
              <i class="iconpng iconpng-suv-small" @click="shop - list()"></i>

              <p>suv</p>
            </li>
            <li class="iconpng iconpng-mpv-small" @click="shop - list()">
              <p>mpv</p>
            </li>
          </ul>
          <ul>
            <li class="iconpng iconpng-paoche-small" @click="shop - list()">
              <p>跑车</p>
            </li>

            <li class="iconpng iconpng-pika-small" @click="shop - list()">
              <p>皮卡</p>
            </li>

            <li class="iconpng iconpng-qita-small" @click="shop - list()">
              <p>其他</p>
            </li>
          </ul>
        </div>
        <p class="price">价格</p>
        <div class="jiage">
          <ul>
            <li>5万以下</li>
            <li>5-8万</li>
            <li>8-10万</li>
          </ul>
          <ul>
            <li>10-15万</li>
            <li>15-20万</li>
            <li>20-25万</li>
          </ul>
          <ul>
            <li>25-35万</li>
            <li>35-50万</li>
            <li>50-100万</li>
          </ul>
          <ul>
            <li>100万以上</li>
          </ul>
        </div>
        <div class="jiage">
          <p>用途</p>
          <ul>
            <li>舒适性好</li>
            <li>想买suv</li>
            <li>购置税减半</li>
          </ul>
          <ul>
            <li>7座大空间</li>
            <li>入门带步</li>
            <li>撩妹利器</li>
          </ul>
          <ul>
            <li>创业伙伴</li>
            <li>空间宽敞</li>
            <li>硬派越野</li>
          </ul>
        </div>
      </div>
    </div>
    <!-- 遮罩层 -->
    <div class="mask-list" v-show="maskkg">
      <div class="footer" >
        <ul>
        <li class="mask-li" 
        v-for="(item,index) in maskList" :key="index"
        @click="maskActive(index,item)"
        >
       <p class="mask-p" :class="{'mask-active':item.checked}">
       {{item.name}}</p>

        </li>
         
        </ul>

        <div class="queding" @click="mask(maskList)">确定</div>
      </div>
    </div>
  </div>
</template>
<script>


import qiChe from '../paga/qiche'
export default{
    components:{
        qiChe:qiChe
    },
    data(){
        return{
            backgroundStyle:false,
            colorStyle:false,
            show:false,
        
          level: [
            {
              title: "轿车",
              arr: [{name:"微型车",checked:false},{name:"小型车",checked:false}],
            //   icon: [require('../assets/SUVHUI.png'),require('../assets/SUV.png')],
            },
            {
              title: "suv",
            //   arr: [{name:"小型suv",checked:false},{name:"中型suv",checked:false}],
            //   icon: ['../assets/SUVHUI.png','../assets/SUV.png'],
            },
            {
              title: "mpv",
            //   arr: [{name:"微型mpv",checked:false},{name:"小型mpv",checked:false}],
            //   icon: ['../assets/SUVHUI.png','../assets/SUV.png'],
            },
            {
              title: "跑车",
              arr: [],
            //   icon: ['../assets/SUVHUI.png','../assets/SUV.png'],
            },
            {
              title: "皮卡",
              arr: [],
            //   icon: ['../assets/SUVHUI.png','../assets/SUV.png'],
            },
          ],
        
        
          price:[
            {name:'5万以下',checked:false},
            {name:'5-10万',checked:false},
            {name:'10-20',checked:false},
            {name:'20-50万',checked:false},
            {name:'50-100万',checked:false},
          ],
          data:{
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
        }
        }

     methods:{
        //
    //    shop - list(item){
    //         this.maskKg=true;//弹出遮罩层
    //          this.maskList=item.arr
    //    }
     }
          
       
     

   






       
    





</script>
<style>
.background-style {
  background-color: hsl(221, 74%, 62%) !important;
}
.color-style {
  color: #105cfb;
}
.queding {
  background-color: #105cfb !important;
  width: 100%;
  z-index: 900;
  overflow: hidden;
  font-size: 14rem;
  line-height: 30rem;
  text-align: center;
  background-color: #fff;
  padding: 8rem 20rem !important;
  box-sizing: border-box;
  border-radius: 8rem;
  color: #fff;
}

.fl {
  margin-left: 15rem;
}

.price {
  height: 42rem;
  font-weight: 800;
}
header img {
  width: 15rem;
  height: 15rem;
}
.fr {
  margin-right: 20rem;
}
.dian {
  width: 12rem;
  margin-left: 15rem;
}
.jiantou {
  display: inline-block;
  width: 15rem;
  height: 15rem;
}
.fangzi {
  display: inline-block;
  margin-left: 15rem;
}

header {
  height: 42rem;
  width: 100%;
  text-align: center;
  line-height: 42rem;
}
header span {
  font-size: 15rem;
  line-height: 42rem;
  text-align: center;
  font-weight: 800;
}
nav {
  text-align: center;
  line-height: 32rem;
  width: 100%;
  height: 32rem;
  background: rgb(244, 242, 242);
  font-size: 10rem;
}
.daohang span {
  display: inline-block;
  width: 60rem;
  height: 15rem;
  background: #fff;
  border-radius: 7rem;
  line-height: 15rem;
  text-align: center;
  margin-top: 8rem;
}
.center {
  font-size: 12rem;
}
.left {
  box-sizing: border-box;
}
.left li {
  padding: 22rem 13rem 0rem 13rem;
  text-align: center;

  height: 40rem;
  white-space: rap;
}
.qingchu {
  display: inline-block;
  width: 40rem;
  height: 15rem;
  background: #fff;
  border-radius: 7rem;
  line-height: 15rem;
  text-align: center;
  margin-top: 8rem;
  margin-right: 5rem;
}
.daohang span:nth-child(1) {
  margin: 0 5rem 0 8rem;
}
.left {
  float: left;
  width: 20%;
  height: 100%;

  background-color: rgb(244, 242, 242);
}
.right {
  width: 100%;

  float: right;
  overflow-y: auto;
  flex: 1;
  width: 80%;
  height: 100%;
  border: #ff5500;
  padding: 0 15rem;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.footer {
  position: fixed;
  bottom: 0;
  left: 0;
  border-radius: 8rem;
  background-color: bisque;
  width: 100%;
  height: 180rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  font-size: 10rem;
}
.footer > ul {
  width: 300rem;
  height: 150rem !important;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
.footer li {
  width: 80rem !important;
  height: 30rem;
  min-width: 33.333%;

  float: left;
  box-sizing: border-box;
  width: 25%;
  padding: 4px 5px;
  background-color: #f8f2f2;
  border-radius: 5rem 5rem 0 0;
}

.jiage {
  width: 300rem;
  height: 150rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.jiage > ul {
  width: 300rem;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
.jiage li {
  height: 30rem;
  min-width: 33.333%;

  float: left;
  box-sizing: border-box;
  width: 25%;
  padding: 4px 5px;
  background-color: #f8f2f2;
  border-radius: 5rem;
}
.jiage p {
  width: 100%;
  height: 45rem;
  text-align: left;
  line-height: 45rem;
  font-weight: 800;
}

.che {
  width: 300rem;
  height: 100rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.che ul {
  width: 300rem;
  height: 75rem;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
.che > li {
  height: 75rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.right > p {
  width: 100%;
  height: 45rem;
  text-align: left;
  line-height: 45rem;
  font-weight: 800;
}
.right > p:nth-child(1) {
  font-size: 20rem;
}
.iconpng {
  display: inline-block;
  vertical-align: top;
  margin-bottom: 14px;
}
.iconpng::before {
  content: "";
  display: inline-block;
  vertical-align: top;
  background: url(//s.autoimg.cn/car/findcar/cars.png) no-repeat;
  background-size: cover;
  background-size: 59px auto;
  width: 60px;
  height: 24px;
}
.iconpng-pika-small::before {
  background-position: 0 -233rem;
}
.iconpng-suv-small::before {
  background-position: 0 -207rem;
}

.iconpng-jinchou-small::before {
  background-position: 0 -178rem;
}
.iconpng-mpv-small::before {
  background-position: 0 -182rem;
}
.iconpng-paoche-small::before {
  background-position: 0 -259.2px;
}
.iconpng-qita-small::before {
  background-position: 0 -285.2px;
}

@import url("./reset.css");
</style>