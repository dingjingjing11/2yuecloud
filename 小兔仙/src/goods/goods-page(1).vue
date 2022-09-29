<template>
  <div>
    <div class="goods-info">
      <div class="media">
        <div class="goods-image">
          <div class="goodsUpload ">
            <!-- 商品图片 -->
            <div class="mainImage">
              <!-- 图片 -->
              <img class="imageItem" title="点击大图预览" :src="imageUrl" fit="contain" />
              <!-- 鼠标层罩 -->
              <div v-show="coverLayerShow" class="coverLayerMouse" :style="coverLayerStyle"></div>
              <!-- 最顶层覆盖了整个原图空间的透明层罩 -->
              <div class="coverLayerMaskTop" @mouseenter="enterHandler" @mousemove="moveHandler" @mouseout="outHandler">
              </div>
              <!-- 放大的图片 -->
              <div v-show="coverLayerShow" class="coverLayerRight">
                <img :style="coverLayerImg" style="width:1600px;height:1600px" class="coverLayerRightImg"
                  :src="imageUrl" />
              </div>
            </div>
            <!-- 商品图片 -->
          </div>
          <div class="middle">
            <!-- Cannot read properties of undefined (reading '0')     xxx.sss[0]-->
            <img v-if="arr.mainPictures" :src="arr.mainPictures[over]" alt="">
            <div class="layer" style="left: 200px; top: 73px; display: none;"></div>
          </div>
          <ul class="small">
            <li v-if="arr.mainPictures" v-for="(item, index) in arr.mainPictures"
              @mouseover="mouseoverHaddle(item, index)" :class="{ lyh: over == index }">
              <img :src="item" alt="">
            </li>
          </ul>
        </div>
        <ul class="goods-sales">
          <li>
            <p>销量人气</p>
            <p>200+</p>
            <p><i></i>销量人气</p>
          </li>
          <li>
            <p>商品评价</p>
            <p>400+</p>
            <p><i></i>查看评价</p>
          </li>
          <li>
            <p>收藏人气</p>
            <p>600+</p>
            <p><i></i>收藏商品</p>
          </li>
          <li>
            <p>品牌信息</p>
            <p>苏宁电器</p>
            <p><i></i>品牌主页</p>
          </li>
        </ul>
      </div>
      <div class="spec">
        <p class="g-name">{{ arr.name }}</p>
        <p class="g-desc">{{ arr.desc }}</p>
        <p class="g-price">
          <span> {{ arr.price }}</span>
          <span>{{ arr.oldPrice }}</span>
        </p>
        <div class="g-service">
          <dl>
            <dt>促销</dt>
            <dd>12月好物放送，App领卷购买直降100</dd>
          </dl>
          <dl>
            <dt>配送</dt>
            <dd>至 <div class="xtx-city">
                <div class="select">
                  <span class="value">北京市 市辖区 东城区</span>
                  <i></i>
                </div>
              </div>
            </dd>
          </dl>
          <dl>
            <dt>服务</dt>
            <dd>
              <span>无忧退货</span>
              <span>无忧退货</span>
              <span>无忧退货</span>
              <a href="javascript:;">了解详情</a>
            </dd>
          </dl>
        </div>
        <div class="goods-sku">
          <!-- 
          specs: [
          {name:'颜色',values:[{name:"xx",picture:'http://xxx'}]},
          {name:'尺寸',values:[{name: "38",picture: null}]}]
         -->

          <dl v-for="item in arr.specs ">
            <dt>
              {{ item.name }}

            </dt>
            <dd>
              <img v-if="i.picture" :src="i.picture" alt="" v-for="i in item.values" @click="clkSpecs(i, item.values,item.name)"
                :class="{ lyh: i.checked == true,dis:i.disabled==true }" >
              <span v-if="i2.picture == null" v-for="i2 in item.values" @click="clkSpecs(i2, item.values,item.name)"
                :class="{ lyh: i2.checked == true,dis:i2.disabled==true }">{{ i2.name }}</span>
            </dd>
          </dl>


          <!-- <dl v-for="item in arr.specs ">
            <dt>
              {{ item.name }}
            </dt>
            <dd>
              <span v-if="i2.picture==null" v-for="i2 in item.values" @click="clkSpecs(i2,item.values)" :class="{ lyh: i2.checked==true }">{{i2.name}}</span>
            </dd>
          </dl> -->


        </div>
        <div class="xtx-numbox">
          <div class="label">数量</div>
          <div class="numbox">
            <a href="javascript:;" @click="minus">-</a>
            <input type="text" v-model="num">
            <a href="javascript:;" @click="add">+</a>
          </div>
        </div>
        <button class="xtx-button ellipsis middle primary" style="margin-top: 20px;">加入购物车</button>
      </div>

    </div>

    <div class="goods-relevant">
      <div class="header">
        <i></i>
        <span class="title">猜你喜欢</span>
      </div>
      <!--  
      <div class="block  xtx-carousel">
        <span class="demonstration"><img src="" alt=""></span>
        <el-carousel>
          <el-carousel :interval="5000" arrow="always">
            <el-carousel-item>
              <ul class="carousel-body">
                <li class="carousel-item fade">
              <div class="slider">

                    <a href="javascript:;" v-for="(item, index) in arrgos.slice(0, 4)" :key="index">
                      <img :src="item.picture" alt="">
                      <p class="name ellipsis">{{ item.name }}</p>
                      <p class="price">￥{{ item.price }}</p>
                    </a>
                  </div> 
                </li>

              </ul>
            </el-carousel-item>
            <el-carousel-item>
              <ul class="carousel-body">
                <li class="carousel-item fade">
                  <div class="slider">

                    <a href="javascript:;" v-for="(item, index) in arrgos.slice(4, 8)" :key="index">
                      <img :src="item.picture" alt="">
                      <p class="name ellipsis">{{ item.name }}</p>
                      <p class="price">￥{{ item.price }}</p>
                    </a>
                  </div>
                </li>

              </ul>
            </el-carousel-item>
            <el-carousel-item>
              <ul class="carousel-body">
                <li class="carousel-item fade">
                  <div class="slider">

                    <a href="javascript:;" v-for="(item, index) in arrgos.slice(8, 12)" :key="index">
                      <img :src="item.picture" alt="">
                      <p class="name ellipsis">{{ item.name }}</p>
                      <p class="price">￥{{ item.price }}</p>
                    </a>
                  </div>
                </li>

              </ul>
            </el-carousel-item>
            <el-carousel-item>
              <ul class="carousel-body">
                <li class="carousel-item fade">
                  <div class="slider">

                    <a href="javascript:;" v-for="(item, index) in arrgos.slice(12, 16)" :key="index">
                      <img :src="item.picture" alt="">
                      <p class="name ellipsis">{{ item.name }}</p>
                      <p class="price">￥{{ item.price }}</p>
                    </a>
                  </div>
                </li>

              </ul>
            </el-carousel-item>
          </el-carousel>
        </el-carousel>
      </div>
    -->

    </div>
    <div class="goods-footer">
      <div class="goods-article">
        <div class="goods-tabs">
          <div class="goods-tabs">
            <nav>
              <a href="javascript:;">商品详情</a>
              <a href="javascript:;">商品评价
                <span>(0)</span>
              </a>
            </nav>
            <div class="goods-detail">
              <!-- <ul class="attrs">
                <li v-for="(m, i) in arrzd.properties" :key="i">
                  <span class="dt">{{ m.name }}</span>
                  <span class="dd">{{ m.value }}</span>
                </li>
              </ul>
              <img  :src="m" alt="" v-for="(m, i) in arrzd.pictures" :key="i"> -->
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- 快递说明 -->
    <div class="goods-warn" data-v-b185dbf4="">
      <div class="goods-warn" data-v-6867108e="" data-v-b185dbf4="">
        <h3 data-v-6867108e="">注意事项</h3>
        <p class="tit" data-v-6867108e="">• 购买运费如何收取？</p>
        <p data-v-6867108e=""> 单笔订单金额(不含运费)满88元免邮费；不满88元，每单收取10元运费。（港澳台地区需满500元免邮费；不满500元，每单收取30元运费) </p><br
          data-v-6867108e="">
        <p class="tit" data-v-6867108e="">• 使用什么快递发货?</p>
        <p data-v-6867108e="">默认使用顺丰快递发货(个别商品使用其他快递）</p>
        <p data-v-6867108e="">配送范围覆盖全国大部分地区(港澳台地区除外）</p><br data-v-6867108e="">
        <p class="tit" data-v-6867108e="">• 如何申请退货?</p>
        <p data-v-6867108e=""> 1.自收到商品之日起30日内，顾客可申请无忧退货，退款将原路返还，不同的银行处理时间不同，预计1-5个工作日到账； </p>
        <p data-v-6867108e="">2.内裤和食品等特殊商品无质量问题不支持退货；</p>
        <p data-v-6867108e=""> 3.退货流程： 确认收货-申请退货-客服审核通过-用户寄回商品-仓库签收验货-退款审核-退款完成； </p>
        <p data-v-6867108e=""> 4.因小兔鲜儿产生的退货，如质量问题，退货邮费由小兔鲜儿承担，退款完成后会以现金券的形式报销。因客户个人原因产生的退货，购买和寄回运费由客户个人承担。 </p>
      </div>
    </div>
  </div>

</template>
<script>
import { findGoods } from '@/api/product.js'
import { findRelevant } from '@/api/product.js'
export default {
  components: {
  },
  data() {
    return {
      arr: [],
      num: 1,
      over: 0,
      show: false,
      bool: false,
      arrgos: [],
      arrzd: [],
      // 商品图片
      imageUrl: '',
      Loading: false,
      coverLayerStyle: {
        transform: ""
      },
      coverLayerImg: {},
      coverLayerShow: false,
      skus: []  // 就收商品sku
    }
  },
  methods: {
    add() {
      this.num += 1
    },
    minus() {
      if (this.num == 1) {
        this.num = 1
      } else {
        this.num -= 1
      }
    },
    mouseoverHaddle(item, index) {
      // console.log(index);
      this.over = index
      this.imageUrl = item
    },
    // 鼠标进入原图空间函数
    enterHandler() {
      // 层罩及放大空间的显示
      this.coverLayerShow = true;
    },
    // 鼠标移动函数
    moveHandler(event) {
      // 鼠标的坐标位置
      let x = event.offsetX;
      let y = event.offsetY;
      // 层罩的左上角坐标位置，并对其进行限制：无法超出原图区域左上角
      let topX = x - 100 < 0 ? 0 : x - 100;
      let topY = y - 100 < 0 ? 0 : y - 100;
      // 对层罩位置再一次限制，保证层罩只能在原图区域空间内
      if (topX > 200) {
        topX = 200;
      }
      if (topY > 200) {
        topY = 200;
      }
      // 通过 transform 进行移动控制

      this.coverLayerStyle.transform = `translate(${topX}px,${topY}px)`;
      this.coverLayerImg.transform = `translate(-${2 * topX}px,-${2 * topY}px)`;
    },
    // 鼠标移出函数
    outHandler() {
      // 控制层罩与放大空间的隐藏
      this.coverLayerShow = false;
    },
    clkSpecs(item, values,name) {
      if(item.disabled==false){
      // 将values 数组中的所有对象(除了当前点击的对象) 的checked 改为false   全部取消边框效果
      values.forEach(i => {
        if (i !== item) {
          this.$set(i, 'checked', false);
        }
      })
      // 点击取反
      this.$set(item, 'checked', !item.checked);

      // 重新计算 颜色 和尺寸的渲染
  
      var categoryName = name;
      if(item.checked==true){
        var valueName = item.name;
      }
      
    // console.log(categoryName,valueName);

    /*
        skus:[ 
          {id,price,specs:[{name: "颜色", valueName: "翻领款-姜黄"}, {name: "尺码", valueName: "73cm"}]},
          {},
          {}
          ]
      */
      var arr = [];
      var tabIndex;
      this.skus.forEach(i => {
        i.specs.forEach((item, index) => {
          if (item.name == categoryName && item.valueName == valueName) {
            
            if (index == 0) {
              arr.push(i.specs[1].valueName)
              tabIndex = 1;
            } else {
              arr.push(i.specs[0].valueName)
              tabIndex = 0;
            }
          }
        })
      })

      console.log(arr,this.arr.specs[tabIndex].values); 
      for(var i=0;i<arr.length;i++){
        this.arr.specs[tabIndex].values.forEach(item=>{
          if(arr.indexOf(item.name)==-1){
            // item.disabled = true;
            this.$set(item,'disabled',true)
          }else{
            this.$set(item,'disabled',false)
          }
        })
      }
      console.log(this.arr.specs);
    
       // [{values:[110]},{values:['姜黄']}]  



    }
    }
  },
  watch: {
    // 深度监听 
    // arr: {
    //   handler: function (newVal) {
    //     console.log(newVal);  // 拿到name  skus 里面进行对比
    //     var categoryName;
    //     var valueName;
    //     newVal.specs.forEach(i => {
    //       i.values.forEach(item => {
    //         if (item.checked == true) {
    //           console.log(item.name);  // item.name 颜色值 和 尺寸值
    //           console.log(i.name);   // i.name  分类(颜色/尺寸)    i.name  item.name
    //           categoryName = i.name;         // 颜色              // 尺码
    //           valueName = item.name;        //木耳边领-姜黄        // 110cm
    //         }
    //       })
    //     })
    //     var arr = [];
    //     this.skus.forEach(i => {
    //       i.specs.forEach((item, index) => {
    //         if (item.name == categoryName && item.valueName == valueName) {
    //           if (index == 0) {
    //             arr.push(i.specs[1].valueName)
    //           } else {
    //             arr.push(i.specs[0].valueName)
    //           }
    //         }
    //       })
    //     })

    //     console.log(arr); // []
    //     this.arr.specs  // [{name:颜色，values:[name:姜黄]},{name:尺寸,values:[{name:'130cm'}]}]


   




    //   },
    //   deep: true
    // }

  },
  mounted() {
    console.log('进入商品页');
    //  this.$watch  在已经加载完成的路由页面中，只有路由参数的发生变化，这是使用
    //
    // this.$watch(() => {
    findGoods(this.$route.params.id).then(res => {
      if (res.msg == '操作成功') {
        this.skus = res.result.skus;

        this.arr = res.result; // {}
        //  specs: [
        // {name:'颜色',values:[{name:"xx",picture:'http://xxx',checked:false}]},
        // {name:'尺寸',values:[{name: "38",picture: null}]}]
        this.arr.specs.forEach(i => {
          i.values.forEach(item => {
            // item.checked= false  //  arr[0] = 1  视图不会更新 
            this.$set(item, 'checked', false)
            this.$set(item, 'disabled', false) // 不禁用
          })

        })
        if (this.arr.mainPictures) {
          this.imageUrl = this.arr.mainPictures[0]
        }

        this.arrzd = this.arr.details
      }
    })
    findRelevant().then(res => {
      if (res.msg == '操作成功') {
        // console.log(res.result);
        this.arrgos = res.result

      }
    })
    // })

  },
}
</script>
<style lang="scss" scoped>
.dis{
  border:2px dashed #ccc !important;
   cursor:not-allowed !important;
}
* {
  box-sizing: border-box;
}

.lyh {
  border: 2px solid #27ba9b !important;
}

img {
  max-width: 100%;
  max-height: 100%;
  vertical-align: middle;
}

.mainImage {
  width: 400px;
  height: 400px;
  position: relative;
}

.mainImage .imageItem {
  border: 1px solid #DCDCDC;
  width: 400px;
  height: 400px;
  position: relative;
}

/* 放大的图片，通过定位将左上角定位到(0,0) */
.coverLayerRightImg {
  max-width: none;
  max-height: none;
  width: 800px !important;
  height: 800px !important;

}

/* 右边的区域图片放大空间 */
.coverLayerRight {
  background-color: #FFFFFF;
  width: 400px;
  height: 400px;
  border: 1px solid #DCDCDC;
  position: relative;
  overflow: hidden;
  position: absolute;
  left: 412px;
  top: 0;
  z-index: 1001;
}

/* 一个最高层层罩 */
.coverLayerMaskTop {
  width: 400px;
  height: 400px;
  position: absolute;
  z-index: 1;
  top: 0;
  left: 0;
  cursor: move;
}

/* 层罩，通过定位将左上角定位到(0,0) */
.coverLayerMouse {
  width: 200px;
  height: 200px;
  background: rgba(0, 0, 0, 0.3);
  opacity: 0.4;
  position: absolute;
  top: 0;
  left: 0;
}


.goods-info {
  min-height: 600px;
  background: #fff;
  display: flex;

  .media {
    width: 580px;
    height: 600px;
    padding: 30px 50px;
  }

  .goods-image {
    width: 480px;
    height: 400px;
    position: relative;
    display: flex;
    z-index: 500;

    .large {

      position: absolute;
      top: 0;
      left: 412px;
      width: 400px;
      height: 400px;
      box-shadow: 0 0 10px rgb(0 0 0 / 10%);
      background-repeat: no-repeat;
      background-size: 800px 800px;
      background-color: #f8f8f8;
    }

    .middle {
      width: 400px;
      height: 400px;
      background: #f5f5f5;
      position: relative;
      cursor: move;

      .layer {
        width: 200px;
        height: 200px;
        background: rgba(0, 0, 0, .2);
        left: 0;
        top: 0;
        position: absolute;
      }
    }

    .small {
      width: 80px;

      li {
        width: 68px;
        height: 68px;
        margin-left: 12px;
        margin-bottom: 15px;
        cursor: pointer;

      }
    }
  }

  .goods-sales {
    display: flex;
    width: 400px;
    align-items: center;
    text-align: center;
    height: 140px;

    li {
      flex: 1;
      position: relative;

      p:first-child {
        color: #999;
      }

      p:nth-child(2) {
        color: #cf4444;
        margin-top: 10px;
      }

      p:last-child {
        color: #666;
        margin-top: 10px;
      }
    }


  }

  .spec {
    flex: 1;
    padding: 30px 30px 30px 0;
  }
}

.g-naem {
  font-size: 22px;
}

.g-desc {
  color: #999;
  margin-top: 10px;
}

.g-price {
  margin-top: 10px;

  span:first-child {
    color: #cf4444;
    margin-right: 10px;
    font-size: 22px;
  }

  span:last-child {
    color: #999;
    text-decoration: line-through;
    font-size: 16px;
  }

  span:before {
    content: '￥';
    font-size: 14px;
  }
}

.g-service {
  background: #f5f5f5;
  width: 500px;
  padding: 20px 10px 0 10px;
  margin-top: 10px;

  dl {
    padding-bottom: 20px;
    display: flex;
    align-items: center;

    dt {
      width: 50px;
      color: #999;
    }

    dd {
      color: #999;
    }

    dd:last-child span {
      margin-right: 10px;

    }

    dd:last-child span:before {
      content: "•";
      color: #27ba9b;
      margin-right: 2px;
    }

    dd:last-child a {
      color: #27ba9b;
    }
  }
}

.xtx-city {
  display: inline-block;
  position: relative;
  z-index: 400;

  .select {
    border: 1px solid #e4e4e4;
    height: 30px;
    padding: 0 5px;
    line-height: 28px;
    cursor: pointer;

    .value {
      color: #666;
      font-size: 12px;
    }
  }
}

.goods-sku {
  padding-left: 10px;
  padding-top: 20px;

  dl {
    display: flex;
    padding-bottom: 20px;
    align-items: center;

    dt {
      width: 50px;
      color: #999;
    }

    dd {
      flex: 1;
      color: #666;
    }

    dd>img {
      width: 50px;
      height: 50px;
      border: 1px solid #e4e4e4;
      margin-right: 10px;
      cursor: pointer;
    }

    dd>span {
      display: inline-block;
      height: 30px;
      line-height: 28px;
      padding: 0 20px;
      border: 1px solid #e4e4e4;
      margin-right: 10px;
      cursor: pointer;
    }
  }
}

.xtx-numbox {
  display: flex;
  align-items: center;

  .label {
    width: 60px;
    color: #999;
    padding-left: 10px;
  }

  .numbox {
    width: 120px;
    height: 30px;
    border: 1px solid #e4e4e4;
    display: flex;
  }

  .numbox>a {
    width: 29px;
    line-height: 28px;
    text-align: center;
    background: #f8f8f8;
    font-size: 16px;
    color: #666;
  }

  .numbox>a:first-of-type {
    border-right: 1px solid #e4e4e4;
  }

  .numbox>a:last-of-type {
    border-left: 1px solid #e4e4e4;
  }

  .numbox>input {
    width: 60px;
    padding: 0 5px;
    text-align: center;
    color: #666;
    border: 0 solid #000;
  }
}

.ellipsis {
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
}

.xtx-button {
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  border: none;
  outline: none;
  background: #fff;
  text-align: center;
  border: 1px solid transparent;
  border-radius: 4px;
  cursor: pointer;
}

.middle {
  width: 180px;
  height: 50px;
  font-size: 16px;
}

.primary {
  border-color: #27ba9b;
  background: #27ba9b;
  color: #fff;
}

.goods-relevant {
  background: #fff;
  min-height: 460px;
  margin-top: 20px;

  .header {
    height: 80px;
    line-height: 80px;
    padding: 0 20px;

    i {
      width: 16px;
      height: 16px;
      display: inline-block;
      border-top: 4px solid #27ba9b;
      border-right: 4px solid #27ba9b;
      box-sizing: border-box;
      position: relative;
      transform: rotate(45deg);
    }

    .title {
      font-size: 20px;
      padding-left: 10px;
    }
  }
}

.xtx-carousel {
  height: 380px;
}



.el-carousel__item h3 {
  color: #475669;
  font-size: 18px;
  opacity: 0.75;
  line-height: 300px;
  margin: 0;
}




.el-carousel__button {


  border-radius: 10px !important;
}


.xtx-carousel .carousel-body {
  width: 100%;
  height: 100%;
}


.xtx-carousel .carousel-item.fade {
  opacity: 1;
  z-index: 1;
}


.xtx-carousel .carousel-item {
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0;
  top: 0;
  opacity: 0;
  transition: opacity .5s linear;
}


.slider {
  display: flex;
  justify-content: space-between;
  padding: 0 40px;
}


.slider>a {
  width: 240px;
  text-align: center;
}


.slider>a img {
  padding: 20px;
  width: 230px !important;
  height: 230px !important;
}


.slider>a .name {
  font-size: 16px;
  color: #666;
  padding: 0 40px;
}


.ellipsis,
.ellipsis-2 {
  text-overflow: ellipsis;
  overflow: hidden;
}


.ellipsis {
  white-space: nowrap;
}


.slider>a .price {
  font-size: 16px;
  color: #cf4444;
  margin-top: 15px;
}

.goods-footer {
  display: flex;
  margin-top: 20px;
}


.goods-footer .goods-article {
  width: 940px;
  margin-right: 20px;
}


.goods-tabs {
  min-height: 600px;
  background: #fff;
}


.goods-tabs nav {
  height: 70px;
  line-height: 70px;
  display: flex;
  border-bottom: 1px solid #f5f5f5;
}


.goods-tabs nav a:first-child {
  border-right: 1px solid #f5f5f5;
}


.goods-tabs nav a {
  padding: 0 40px;
  font-size: 18px;
  position: relative;
}


.goods-tabs nav a.active:before {
  content: "";
  position: absolute;
  left: 40px;
  bottom: -1px;
  width: 72px;
  height: 2px;
  background: #27ba9b;
}


.goods-tabs nav a>span {
  color: #cf4444;
  font-size: 16px;
  margin-left: 10px;
}


.goods-detail {
  padding: 40px;
}


.goods-detail .attrs {
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 30px;
}


.goods-detail .attrs li {
  display: flex;
  margin-bottom: 10px;
  width: 50%;
}


.goods-detail .attrs li .dt {
  width: 100px;
  color: #999;
}


.goods-detail .attrs li .dd {
  flex: 1;
  color: #666;
}


.goods-detail>img {
  width: 100%;
}

.goods-warn {
  margin-top: 20px;
  background: #fff;
  padding-bottom: 40px;
}

.goods-warn h3 {
  height: 70px;
  line-height: 70px;
  border-bottom: 1px solid #f5f5f5;
  padding-left: 50px;
  font-size: 18px;
  font-weight: 400;
  margin-bottom: 10px;
}

.goods-warn p.tit {
  color: #333;
}

.goods-warn p {
  line-height: 40px;
  padding: 0 25px;
  color: #666;
}
</style>
