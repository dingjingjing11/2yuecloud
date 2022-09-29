<template>
  <div class="app-body">
    <div class="xtx-goods-page">
      <div class="container">
        <div class="xtx-bread" data-v-b185dbf4="">
          <div class="xtx-bread-item" data-v-b185dbf4="">
            <a href="#/" class="router-link-active sxh">首页</a>
          </div>
          <i class="iconfont icon-angle-right"></i>
          <div class="xtx-bread-item" data-v-b185dbf4="">
            <a class="sxh" href="#/category/1010000">{{
              $store.state.demo.bt2
            }}</a>
          </div>
          <i class="iconfont icon-angle-right"></i>
          <div class="xtx-bread-item" data-v-b185dbf4="">
            <a class="sxh" href="#/category/sub/109303000">{{
              $store.state.demo.bt1
            }}</a>
          </div>
          <i class="iconfont icon-angle-right"></i>
          <div class="xtx-bread-item" data-v-b185dbf4="">
            <span class="sxh">{{ $store.state.demo.bt }}</span>
          </div>
        </div>
        <div class="goods-info" data-v-b185dbf4="">
          <div class="media" data-v-b185dbf4="">
            <div class="goods-image" data-v-d1fd3ff6="" data-v-b185dbf4="">
              <div
                class="large"
                data-v-d1fd3ff6=""
                style="
                  background-image: url('https://yanxuan-item.nosdn.127.net/ac33cf37023facd976dd46dc637c45a8.jpg');
                  background-position: -400px 0px;
                  display: none;
                "
              ></div>
              <div class="middle" data-v-d1fd3ff6="">
                <el-image
                  class="imageItem"
                  title="点击大图预览"
                  :src="hgimg"
                  fit="contain"
                />
                <!-- 鼠标层罩 -->
                <div
                  v-show="coverLayerShow"
                  class="coverLayerMouse"
                  :style="coverLayerStyle"
                ></div>
                <!-- 最顶层覆盖了整个原图空间的透明层罩 -->
                <div
                  class="coverLayerMaskTop"
                  @mouseenter="enterHandler"
                  @mousemove="moveHandler"
                  @mouseout="outHandler"
                ></div>
                <div v-show="coverLayerShow" class="coverLayerRight">
                  <el-image
                    :style="coverLayerImg"
                    class="coverLayerRightImg"
                    :src="hgimg"
                    fit="contain"
                  />
                </div>
                <!-- <div
                  class="layer"
                  data-v-d1fd3ff6=""
                  style="left: 200px; top: 0px; display: none"
                ></div> -->
              </div>
              <ul class="small" data-v-d1fd3ff6="">
                <li class="active" data-v-d1fd3ff6="">
                  <img
                    :src="item"
                    alt=""
                    data-v-d1fd3ff6=""
                    v-for="(item, index) in arr.mainPictures"
                    :key="index"
                    :class="bl == index ? 'bv2' : ''"
                    @mouseover="hg(item, index)"
                  />
                </li>
              </ul>
            </div>
            <ul class="goods-sales" data-v-34ceb5ea="" data-v-b185dbf4="">
              <li data-v-34ceb5ea="">
                <p data-v-34ceb5ea="">销量人气</p>
                <p data-v-34ceb5ea="">200+</p>
                <p data-v-34ceb5ea="">
                  <i class="iconfont icon-task-filling" data-v-34ceb5ea=""></i
                  >销量人气
                </p>
              </li>
              <li data-v-34ceb5ea="">
                <p data-v-34ceb5ea="">商品评价</p>
                <p data-v-34ceb5ea="">400+</p>
                <p data-v-34ceb5ea="">
                  <i
                    class="iconfont icon-comment-filling"
                    data-v-34ceb5ea=""
                  ></i
                  >查看评价
                </p>
              </li>
              <li data-v-34ceb5ea="">
                <p data-v-34ceb5ea="">收藏人气</p>
                <p data-v-34ceb5ea="">600+</p>
                <p data-v-34ceb5ea="">
                  <i
                    class="iconfont icon-favorite-filling"
                    data-v-34ceb5ea=""
                  ></i
                  >收藏商品
                </p>
              </li>
              <li data-v-34ceb5ea="">
                <p data-v-34ceb5ea="">品牌信息</p>
                <p data-v-34ceb5ea="">苏宁电器</p>
                <p data-v-34ceb5ea="">
                  <i
                    class="iconfont icon-dynamic-filling"
                    data-v-34ceb5ea=""
                  ></i
                  >品牌主页
                </p>
              </li>
            </ul>
          </div>
          <div class="spec" data-v-b185dbf4="">
            <p class="g-name" data-v-ebc66f80="">{{ arr.name }}</p>
            <p class="g-desc" data-v-ebc66f80="">{{ arr.desc }}</p>
            <p class="g-price" data-v-ebc66f80="">
              <span data-v-ebc66f80="">{{ arr.price }}</span
              ><span data-v-ebc66f80="">{{ arr.oldPrice }}</span>
            </p>
            <div class="g-service" data-v-ebc66f80="">
              <dl data-v-ebc66f80="">
                <dt data-v-ebc66f80="">促销</dt>
                <dd data-v-ebc66f80="">12月好物放送，App领券购买直降120元</dd>
              </dl>
              <dl data-v-ebc66f80="">
                <dt data-v-ebc66f80="">配送</dt>
                <dd data-v-ebc66f80="">
                  至
                  <div class="xtx-city" data-v-3ebccf2f="" data-v-ebc66f80="">
                    <div class="select" data-v-3ebccf2f="">
                      <span class="value" data-v-3ebccf2f=""
                        >北京市 市辖区 东城区</span
                      ><i
                        class="iconfont icon-angle-down"
                        data-v-3ebccf2f=""
                      ></i>
                    </div>
                    <!---->
                  </div>
                </dd>
              </dl>
              <dl data-v-ebc66f80="">
                <dt data-v-ebc66f80="">服务</dt>
                <dd data-v-ebc66f80="">
                  <span data-v-ebc66f80="">无忧退货</span
                  ><span data-v-ebc66f80="">快速退款</span
                  ><span data-v-ebc66f80="">免费包邮</span
                  ><a href="javascript:;" data-v-ebc66f80="">了解详情</a>
                </dd>
              </dl>
            </div>
            <div class="goods-sku" data-v-3d8edf08="" data-v-b185dbf4="">
              <dl data-v-3d8edf08="">
                <dt data-v-3d8edf08="">{{arr1.name}}</dt>
                <dd
                  @click="djbs(index, item)"
                  :class="{ bv1: item.checked == true,dis:item.disabled==true }"
                  data-v-3d8edf08=""
                  v-for="(item, index) in arr1.values"
                  :key="index"
                >
                  <img
                    v-if="item.picture"
                    class=""
                    :src="item.picture"
                    alt=""
                    data-v-3d8edf08=""
                  />
                  <div v-else>
                    {{ item.name }}
                  </div>
                </dd>
              </dl>
            </div>
            <div
              class="goods-sku xh1"
              data-v-3d8edf08=""
              data-v-b185dbf4=""
              v-if="arr3"
            >
              <dl data-v-3d8edf08="">
                <dt data-v-3d8edf08="">{{ arr3.name }}</dt>
                <dd
                  @click="djbs1(index, item)"
                 :class="{ bv1: item.checked == true,dis:item.disabled==true }"
                  data-v-3d8edf08=""
                  v-for="(item, index) in arr3.values"
                  :key="index"
                >
                  <span class="s12">{{ item.name }}</span>
                </dd>
              </dl>
            </div>
            <div class="xtx-numbox" data-v-3abe1060="" data-v-b185dbf4="">
              <div class="label" data-v-3abe1060="">数量</div>
              <div class="numbox" data-v-3abe1060="">
                <a href="javascript:;" data-v-3abe1060="" @click="odd()">-</a
                ><input
                  type="text"
                  readonly=""
                  data-v-3abe1060=""
                  v-model="val"
                  class="in1"
                />
                <a @click="add()" href="javascript:;" data-v-3abe1060="">+</a>
              </div>
            </div>
            <button
              @click="addcar"
              class="xtx-button ellipsis middle primary"
              data-v-34af3967=""
              data-v-b185dbf4=""
              style="margin-top: 20px"
            >
              加入购物车
            </button>
          </div>
        </div>
        <div class="goods-relevant" data-v-f1713bb2="" data-v-b185dbf4="">
          <div class="header" data-v-f1713bb2="">
            <i class="icon" data-v-f1713bb2=""></i
            ><span class="title" data-v-f1713bb2="">猜你喜欢</span>
          </div>
          <div class="xtx-carousel">
            <el-carousel :interval="5000" arrow="always">
              <el-carousel-item>
                <ul class="carousel-body">
                  <li class="carousel-item fade">
                    <div class="slider">
                      <a
                        href="javascript:;"
                        v-for="(item, index) in arrgos.slice(0, 4)"
                        :key="index"
                      >
                        <img :src="item.picture" alt="" />
                        <p class="name ellipsis">{{ item.name }}</p>
                        <p class="price">${{ item.price }}</p>
                      </a>
                    </div>
                  </li>
                </ul>
              </el-carousel-item>
              <el-carousel-item>
                <ul class="carousel-body">
                  <li class="carousel-item fade">
                    <div class="slider">
                      <a
                        href="javascript:;"
                        v-for="(item, index) in arrgos.slice(4, 8)"
                        :key="index"
                      >
                        <img :src="item.picture" alt="" />
                        <p class="name ellipsis">{{ item.name }}</p>
                        <p class="price">${{ item.price }}</p>
                      </a>
                    </div>
                  </li>
                </ul>
              </el-carousel-item>
              <el-carousel-item>
                <ul class="carousel-body">
                  <li class="carousel-item fade">
                    <div class="slider">
                      <a
                        href="javascript:;"
                        v-for="(item, index) in arrgos.slice(8, 12)"
                        :key="index"
                      >
                        <img :src="item.picture" alt="" />
                        <p class="name ellipsis">{{ item.name }}</p>
                        <p class="price">${{ item.price }}</p>
                      </a>
                    </div>
                  </li>
                </ul>
              </el-carousel-item>
              <el-carousel-item>
                <ul class="carousel-body">
                  <li class="carousel-item fade">
                    <div class="slider">
                      <a
                        href="javascript:;"
                        v-for="(item, index) in arrgos.slice(12, 16)"
                        :key="index"
                      >
                        <img :src="item.picture" alt="" />
                        <p class="name ellipsis">{{ item.name }}</p>
                        <p class="price">${{ item.price }}</p>
                      </a>
                    </div>
                  </li>
                </ul>
              </el-carousel-item>
            </el-carousel>
          </div>
        </div>
        <div class="goods-footer" data-v-b185dbf4="">
          <div class="goods-article" data-v-b185dbf4="">
            <div class="goods-tabs" data-v-b185dbf4="">
              <div class="goods-tabs" data-v-5dc77adc="" data-v-b185dbf4="">
                <nav data-v-5dc77adc="">
                  <a class="active" href="javascript:;" data-v-5dc77adc=""
                    >商品详情</a
                  ><a class="" href="javascript:;" data-v-5dc77adc=""
                    >商品评价<span data-v-5dc77adc="">(0)</span></a
                  >
                </nav>
                <div class="goods-detail" data-v-4d87a5c2="" data-v-5dc77adc="">
                  <ul class="attrs" data-v-4d87a5c2="">
                    <li
                      data-v-4d87a5c2=""
                      v-for="(item, index) in arr2.properties"
                      :key="index"
                    >
                      <span class="dt" data-v-4d87a5c2="">{{ item.name }}</span
                      ><span class="dd" data-v-4d87a5c2="">{{
                        item.value
                      }}</span>
                    </li>
                  </ul>
                  <img
                    :src="item"
                    alt=""
                    v-for="(item, index) in arr2.pictures"
                    :key="index"
                  />
                </div>
              </div>
            </div>
            <div class="goods-warn" data-v-b185dbf4="">
              <div class="goods-warn" data-v-6867108e="" data-v-b185dbf4="">
                <h3 data-v-6867108e="">注意事项</h3>
                <p class="tit" data-v-6867108e="">• 购买运费如何收取？</p>
                <p data-v-6867108e="">
                  单笔订单金额(不含运费)满88元免邮费；不满88元，每单收取10元运费。（港澳台地区需满500元免邮费；不满500元，每单收取30元运费)
                </p>
                <br data-v-6867108e="" />
                <p class="tit" data-v-6867108e="">• 使用什么快递发货?</p>
                <p data-v-6867108e="">
                  默认使用顺丰快递发货(个别商品使用其他快递）
                </p>
                <p data-v-6867108e="">
                  配送范围覆盖全国大部分地区(港澳台地区除外）
                </p>
                <br data-v-6867108e="" />
                <p class="tit" data-v-6867108e="">• 如何申请退货?</p>
                <p data-v-6867108e="">
                  1.自收到商品之日起30日内，顾客可申请无忧退货，退款将原路返还，不同的银行处理时间不同，预计1-5个工作日到账；
                </p>
                <p data-v-6867108e="">
                  2.内裤和食品等特殊商品无质量问题不支持退货；
                </p>
                <p data-v-6867108e="">
                  3.退货流程：
                  确认收货-申请退货-客服审核通过-用户寄回商品-仓库签收验货-退款审核-退款完成；
                </p>
                <p data-v-6867108e="">
                  4.因小兔鲜儿产生的退货，如质量问题，退货邮费由小兔鲜儿承担，退款完成后会以现金券的形式报销。因客户个人原因产生的退货，购买和寄回运费由客户个人承担。
                </p>
              </div>
            </div>
          </div>
          <div class="goods-aside" data-v-b185dbf4="">
            <div class="goods-hot" data-v-3e75e67a="" data-v-b185dbf4="">
              <h3 data-v-3e75e67a="">24小时热销榜</h3>
              <div data-v-3e75e67a="">
                <a
                  href="#/product/3996270"
                  class="goods-item"
                  data-v-1089b770=""
                  data-v-3e75e67a=""
                  ><img
                    src="https://yanxuan-item.nosdn.127.net/59b98ddea6422e71de8cec507865984f.png"
                    alt=""
                    data-v-1089b770=""
                  />
                  <p class="name ellipsis" data-v-1089b770="">
                    超能装多功能出行胸包
                  </p>
                  <p class="desc ellipsis" data-v-1089b770="">
                    小身材，大容量，时尚出行
                  </p>
                  <p class="price" data-v-1089b770="">¥49.00</p> </a
                ><a
                  href="#/product/3997974"
                  class="goods-item"
                  data-v-1089b770=""
                  data-v-3e75e67a=""
                  ><img
                    src="https://yanxuan-item.nosdn.127.net/8f0c15f981c5cbcb1aa17215a259fa62.png"
                    alt=""
                    data-v-1089b770=""
                  />
                  <p class="name ellipsis" data-v-1089b770="">
                    入门首选，语音播报电子血压计
                  </p>
                  <p class="desc ellipsis" data-v-1089b770="">
                    全程语音指导，一键测量，监测心率，贴心守护爸妈健康
                  </p>
                  <p class="price" data-v-1089b770="">¥109.00</p> </a
                ><a
                  href="#/product/3998535"
                  class="goods-item"
                  data-v-1089b770=""
                  data-v-3e75e67a=""
                  ><img
                    src="https://yanxuan-item.nosdn.127.net/ef01de6dfac9cc4c548f317f2feddafe.jpg"
                    alt=""
                    data-v-1089b770=""
                  />
                  <p class="name ellipsis" data-v-1089b770="">
                    学步更自如，婴幼童机能学步鞋4-6码
                  </p>
                  <p class="desc ellipsis" data-v-1089b770="">
                    宝宝的第一双鞋，成长不将就
                  </p>
                  <p class="price" data-v-1089b770="">¥109.00</p>
                </a>
              </div>
            </div>
            <div class="goods-hot" data-v-3e75e67a="" data-v-b185dbf4="">
              <h3 data-v-3e75e67a="">周热销榜</h3>
              <div data-v-3e75e67a="">
                <a
                  href="#/product/3996270"
                  class="goods-item"
                  data-v-1089b770=""
                  data-v-3e75e67a=""
                  ><img
                    src="https://yanxuan-item.nosdn.127.net/59b98ddea6422e71de8cec507865984f.png"
                    alt=""
                    data-v-1089b770=""
                  />
                  <p class="name ellipsis" data-v-1089b770="">
                    超能装多功能出行胸包
                  </p>
                  <p class="desc ellipsis" data-v-1089b770="">
                    小身材，大容量，时尚出行
                  </p>
                  <p class="price" data-v-1089b770="">¥49.00</p> </a
                ><a
                  href="#/product/3997974"
                  class="goods-item"
                  data-v-1089b770=""
                  data-v-3e75e67a=""
                  ><img
                    src="https://yanxuan-item.nosdn.127.net/8f0c15f981c5cbcb1aa17215a259fa62.png"
                    alt=""
                    data-v-1089b770=""
                  />
                  <p class="name ellipsis" data-v-1089b770="">
                    入门首选，语音播报电子血压计
                  </p>
                  <p class="desc ellipsis" data-v-1089b770="">
                    全程语音指导，一键测量，监测心率，贴心守护爸妈健康
                  </p>
                  <p class="price" data-v-1089b770="">¥109.00</p> </a
                ><a
                  href="#/product/3998535"
                  class="goods-item"
                  data-v-1089b770=""
                  data-v-3e75e67a=""
                  ><img
                    src="https://yanxuan-item.nosdn.127.net/ef01de6dfac9cc4c548f317f2feddafe.jpg"
                    alt=""
                    data-v-1089b770=""
                  />
                  <p class="name ellipsis" data-v-1089b770="">
                    学步更自如，婴幼童机能学步鞋4-6码
                  </p>
                  <p class="desc ellipsis" data-v-1089b770="">
                    宝宝的第一双鞋，成长不将就
                  </p>
                  <p class="price" data-v-1089b770="">¥109.00</p>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { detail, findnewbannerlunbo } from "../../api/home";
export default {
  data() {
    return {
      token: "",
      val: 1,
      bl: -1,
      hgimg: "",
      arr: [],
      arr1: [],
      arrgos: [],
      arr2: [],
      arr3: [],
      bs2: -1,
      bs3: -1,
      duibi: "",
      bj: "",
      bj1: "",
      bigarr1: "",
      bjid: "",
      Loading: false,
      coverLayerStyle: {
        transform: "",
      },
      coverLayerImg: {},
      coverLayerShow: false,
      arrkong:[],
      arrkong1:[],
      
    };
  },

  methods: {
    addcar() {
      
      if(this.arr3 != undefined){
        if (this.bs2.checked == true && this.bs3.checked == true) {
           this.$message({
          showClose: true,
          message: "恭喜你，您刚刚加入一条商品进入购物车",
          type: "success",
        });
        

      }else{
           this.$message({
          showClose: true,
          message: "请选择完整规格",
          type: "warning",
        });
      }
      }else{
         if(this.bs2.checked == true)  {
           this.$message({
          showClose: true,
          message: "恭喜你，您刚刚加入一条商品进入购物车",
          type: "success",
        });
      }else{
               this.$message({
          showClose: true,
          message: "请选择完整规格",
          type: "warning",
        });
      }

      }


      this.duibi.forEach((a) => {
        if (this.bj1 != "") {
          if (
            this.bj == a.specs[0].valueName &&
            this.bj1 == a.specs[1].valueName
          ) {
            this.bigarr1 = a.id;
          }
        } else {
          if (this.bj == a.specs[0].valueName) {
            this.bigarr1 = a.id;
          }
        }
       
      });
     console.log(this.token);
      axios({
        method: "post",
        url: "http://pcapi-xiaotuxian-front-devtest.itheima.net/member/cart",
        data: { skuId: this.bigarr1, count: this.val }, // 请求参数 headers:{Authorization:'Bearer '+ token }, success:(res)=>{
        headers: { Authorization: "Bearer " + this.token },
        success: (res) => {
          console.log(res);
        },
      });
    },
    djbs(e, i) {
     
      this.bs2 = i
      console.log(this.bs2);
      this.bj = i.name;
        this.arr1.values.forEach(item => {
        if (item !== i) {
          this.$set(item, 'checked', false);
        }
      })
      // 点击取反
      this.$set(i, 'checked', !i.checked);
      console.log(this.arr1.name);
      var ysname = i.name
      
      //  var arr =[];
      //   var xh =''
       this.duibi.forEach(i => {
        i.specs.forEach((item, index) => {
         
                if (item.name == this.arr1.name && item.valueName == ysname) {
             this.arrkong.push(i.specs[1].valueName)
            
          }
        
        })
      })

        console.log(this.arrkong,this.arr3.values); 

          for(var i=0;i<this.arrkong.length;i++){
       this.arr3.values.forEach(item=>{
          if(this.arrkong.indexOf(item.name)==-1){
            // item.disabled = true;
            this.$set(item,'disabled',true)
          }else{
            this.$set(item,'disabled',false)
          }
        })
      }
      console.log(this.arr3.values);
       
      
    },
    djbs1(e, i) {
      this.bs3 = i
      this.bj1 = i.name;
       this.arr3.values.forEach(item => {
        if (item !== i) {
          this.$set(item, 'checked', false);
        }
      })
      // 点击取反
      this.$set(i, 'checked', !i.checked);
      var ccname = i.name
       this.duibi.forEach(i => {
        i.specs.forEach((item, index) => {
          if (item.name == this.arr3.name && item.valueName == ccname) {
          
             this.arrkong1.push(i.specs[0].valueName)
            
          }
        })
      })

        console.log(this.arrkong1,this.arr1.values); 

          for(var i=0;i<this.arrkong1.length;i++){
       this.arr1.values.forEach(item=>{
          if(this.arrkong1.indexOf(item.name)==-1){
            // item.disabled = true;
            this.$set(item,'disabled',true)
          }else{
            this.$set(item,'disabled',false)
          }
        })
      }
   
   
    },
    add() {
      this.val++;
    },
    odd() {
      this.val--;
    },
    hg(e, i) {
      console.log(e);
      this.hgimg = e;
      this.bl = i;
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
  },

  mounted() {
 
    this.token = this.$store.state.demo.arr1.token;
    detail(this.$route.params.id).then((a) => {
      if (a.msg == "操作成功") {
        this.arr = a.result;
        this.arr1 = this.arr.specs[0]
        this.arr2 = this.arr.details;
        this.hgimg = this.arr.mainPictures[0];
        this.arr3 = this.arr.specs[1];
        this.duibi = this.arr.skus;
        //  this.$set(this.arr1, 'checked', false)
        //  this.$set(this.arr1, 'checked', false)

                this.arr.specs.forEach(i => {
          i.values.forEach(item => {
            // item.checked= false  //  arr[0] = 1  视图不会更新 
            this.$set(item, 'checked', false)
            this.$set(item, 'disabled', false) // 不禁用
          })

        })
        console.log(this.arr1);
        
        
       

      }
    });
    findnewbannerlunbo().then((a) => {
      if (a.msg == "操作成功") {
        this.arrgos = a.result;
      }
    });
  },
};
</script>
<style>
.xh1 {
  padding-top: 0 !important;
}
.s12 {
  display: inline-block;
  height: 30px;
  line-height: 28px;
  padding: 0 20px;
  text-align: center;
}
.in1 {
  width: 60px;
  padding: 0 5px;
  text-align: center;
  color: #666;
  border: 0;
}
.app-body {
  min-height: 600px;
}
.container {
  width: 1240px;
  margin: 0 auto;
  position: relative;
}
.xtx-bread {
  display: flex;
  padding: 25px 10px;
}
.xtx-bread-item a {
  color: #666;
  transition: all 0.4s;
}
a {
  text-decoration: none;
  color: #333;
  outline: none;
}
a {
  background-color: transparent;
}
.xtx-bread i {
  font-size: 12px;
  margin-left: 5px;
  margin-right: 5px;
  line-height: 22px;
}
.iconfont {
  font-family: "iconfont" !important;
  font-size: 16px;
  font-style: normal;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
.goods-info {
  min-height: 600px;
  background: #fff;
  display: flex;
}
.goods-info .media[data-v-b185dbf4] {
  width: 580px;
  height: 600px;
  padding: 30px 50px;
}
.goods-image[data-v-d1fd3ff6] {
  width: 480px;
  height: 400px;
  position: relative;
  display: flex;
  z-index: 1;
}
.goods-image .large[data-v-d1fd3ff6] {
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
.goods-image .middle[data-v-d1fd3ff6] {
  width: 400px;
  height: 400px;
  background: #f5f5f5;
  position: relative;
  cursor: move;
}
.slider[data-v-51374c56] {
  display: flex;
  justify-content: space-around;
  padding: 0 40px;
}
.slider > a[data-v-51374c56] {
  width: 240px;
  text-align: center;
}
.xtx-carousel .carousel-item img[data-v-51374c56] {
  width: 100%;
  height: 100%;
}
.slider > a img[data-v-51374c56] {
  padding: 20px;
  width: 230px !important;
  height: 230px !important;
}
.goods-image .middle .layer[data-v-d1fd3ff6] {
  width: 200px;
  height: 200px;
  background: rgba(0, 0, 0, 0.2);
  left: 0;
  top: 0;
  position: absolute;
}
.goods-image .small[data-v-d1fd3ff6] {
  width: 80px;
}

.goods-image .small li[data-v-d1fd3ff6] {
  width: 68px;
  height: 68px;
  margin-left: 12px;
  margin-bottom: 15px;
  cursor: pointer;
}
.goods-sales[data-v-34ceb5ea] {
  display: flex;
  width: 400px;
  align-items: center;
  text-align: center;
  height: 140px;
}
ul {
  list-style: none;
}
.g-name[data-v-ebc66f80] {
  font-size: 22px;
}
.g-desc[data-v-ebc66f80] {
  color: #999;
  margin-top: 10px;
}
.g-price[data-v-ebc66f80] {
  margin-top: 10px;
}
.g-price span[data-v-ebc66f80]:first-child {
  color: #cf4444;
  margin-right: 10px;
  font-size: 22px;
}
.g-price span[data-v-ebc66f80]:last-child {
  color: #999;
  text-decoration: line-through;
  font-size: 16px;
}
.goods-image .small li[data-v-d1fd3ff6] {
  width: 100%;
  height: 100%;
  margin-left: 12px;
  margin-bottom: 15px;
  cursor: pointer;
}
.small li img {
  width: 64px;
  height: 64px;
  margin-bottom: 15px;
}
img {
  max-width: 100%;
  max-height: 100%;
  vertical-align: middle;
}
.goods-sales li p[data-v-34ceb5ea]:first-child {
  color: #999;
}
.goods-sales li p[data-v-34ceb5ea]:nth-child(2) {
  color: #cf4444;
  margin-top: 10px;
}
.goods-sales li p[data-v-34ceb5ea]:last-child {
  color: #666;
  margin-top: 10px;
}
.goods-info .spec[data-v-b185dbf4] {
  flex: 1;
  padding: 30px 30px 30px 0;
}
.g-service[data-v-ebc66f80] {
  background: #f5f5f5;
  width: 500px;
  padding: 20px 10px 0 10px;
  margin-top: 10px;
}
.g-service dl[data-v-ebc66f80] {
  padding-bottom: 20px;
  display: flex;
  align-items: center;
}
.g-service dl dt[data-v-ebc66f80] {
  width: 50px;
  color: #999;
}
.g-service dl dd[data-v-ebc66f80] {
  color: #666;
}
.goods-sku[data-v-3d8edf08] {
  padding-left: 10px;
  padding-top: 20px;
}
.goods-sku dl[data-v-3d8edf08] {
  display: flex;
  padding-bottom: 20px;
  align-items: center;
  justify-content: flex-start;
}
.goods-sku dl dt[data-v-3d8edf08] {
  width: 50px;
  color: #999;
}
.goods-sku dl dd[data-v-3d8edf08] {
  color: #666;
  border: 1px solid #e4e4e4;
  margin-right: 10px;
}
.goods-sku dl dd > img[data-v-3d8edf08] {
  width: 50px;
  height: 50px;
}
.xtx-numbox[data-v-3abe1060] {
  display: flex;
  align-items: center;
}
.xtx-numbox .label[data-v-3abe1060] {
  width: 60px;
  color: #999;
  padding-left: 10px;
}
.xtx-numbox .numbox[data-v-3abe1060] {
  width: 120px;
  height: 30px;
  border: 1px solid #e4e4e4;
  display: flex;
}
.xtx-numbox .numbox > a[data-v-3abe1060]:first-of-type {
  border-right: 1px solid #e4e4e4;
}
.xtx-numbox .numbox > a[data-v-3abe1060] {
  width: 29px;
  line-height: 28px;
  text-align: center;
  background: #f8f8f8;
  font-size: 16px;
  color: #666;
}
.xtx-numbox .numbox > a[data-v-3abe1060] {
  width: 29px;
  line-height: 28px;
  text-align: center;
  background: #f8f8f8;
  font-size: 16px;
  color: #666;
}
.primary[data-v-34af3967] {
  border-color: #27ba9b;
  background: #27ba9b;
  color: #fff;
}
.middle[data-v-34af3967] {
  width: 180px;
  height: 50px;
  font-size: 16px;
}
button,
select {
  text-transform: none;
}
button,
input,
optgroup,
select,
textarea {
  font-family: inherit;
  font-size: 100%;
  line-height: 1.15;
  margin: 0;
}
.xtx-button[data-v-34af3967] {
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  border: none;
  outline: none;
  text-align: center;
  border: 1px solid transparent;
  border-radius: 4px;
  cursor: pointer;
}
.ellipsis,
.ellipsis-2 {
  text-overflow: ellipsis;
  overflow: hidden;
}
.ellipsis {
  white-space: nowrap;
}
.goods-relevant[data-v-f1713bb2] {
  background: #fff;
  min-height: 460px;
  margin-top: 20px;
}
.goods-relevant .header[data-v-f1713bb2] {
  height: 80px;
  line-height: 80px;
  padding: 0 20px;
}
.goods-relevant .header .icon[data-v-f1713bb2] {
  width: 16px;
  height: 16px;
  display: inline-block;
  border-top: 4px solid #27ba9b;
  border-right: 4px solid #27ba9b;
  box-sizing: border-box;
  position: relative;
  transform: rotate(45deg);
}
i {
  font-style: normal;
}
.goods-relevant .header .title[data-v-f1713bb2] {
  font-size: 20px;
  padding-left: 10px;
}
.goods-relevant .header[data-v-f1713bb2] {
  height: 80px;
  line-height: 80px;
  padding: 0 20px;
}
.goods-relevant .header .icon[data-v-f1713bb2]:before {
  content: "";
  width: 10px;
  height: 10px;
  position: absolute;
  left: 0;
  top: 2px;
  background: #bcf1e6;
}
[data-v-f1713bb2] .xtx-carousel {
  height: 380px;
}
.xtx-carousel[data-v-51374c56] {
  width: 100%;
  height: 100%;
  min-width: 300px;
  min-height: 150px;
  position: relative;
}
.xtx-carousel .carousel-body[data-v-51374c56] {
  width: 100%;
  height: 100%;
}
.xtx-carousel .carousel-btn.prev[data-v-51374c56] {
  left: 20px;
}

a {
  text-decoration: none;
  color: #333;
  outline: none;
}
[data-v-f1713bb2] .xtx-carousel .carousel-btn {
  top: 110px;
  opacity: 1;
  background: transparent;
  color: #ddd;
}

.xtx-carousel .carousel-btn.next[data-v-51374c56] {
  right: 20px;
}

.xtx-carousel .carousel-btn[data-v-51374c56] {
  width: 44px;
  height: 44px;
  background: rgba(0, 0, 0, 0.2);
  color: #fff;
  border-radius: 50%;
  position: absolute;
  top: 228px;
  z-index: 2;
  text-align: center;
  line-height: 44px;
  opacity: 0;
  transition: all 0.5s;
}
[data-v-f1713bb2] .xtx-carousel .carousel-indicator {
  bottom: 30px;
}
.xtx-carousel .carousel-indicator[data-v-51374c56] {
  position: absolute;
  left: 0;
  bottom: 20px;
  z-index: 2;
  width: 100%;
  text-align: center;
}
[data-v-f1713bb2] .xtx-carousel .carousel-indicator span.active {
  background: #27ba9b;
}
.xtx-carousel .carousel-indicator span.active[data-v-51374c56] {
  background: #fff;
}
.xtx-carousel .carousel-indicator span[data-v-51374c56] {
  display: inline-block;
  width: 12px;
  height: 12px;
  background: rgba(0, 0, 0, 0.2);
  border-radius: 50%;
  cursor: pointer;
}
.xtx-carousel .carousel-item.fade[data-v-51374c56] {
  opacity: 1;
  z-index: 1;
}
.xtx-carousel .carousel-item[data-v-51374c56] {
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0;
  top: 0;
  opacity: 0;
  transition: opacity 0.5s linear;
}
.xtx-carousel .carousel-indicator span ~ span[data-v-51374c56] {
  margin-left: 12px;
}
.xtx-carousel .carousel-indicator span[data-v-51374c56] {
  display: inline-block;
  width: 12px;
  height: 12px;
  background: rgba(0, 0, 0, 0.2);
  border-radius: 50%;
  cursor: pointer;
}
.goods-footer[data-v-b185dbf4] {
  display: flex;
  margin-top: 20px;
}
.goods-footer .goods-article[data-v-b185dbf4] {
  width: 940px;
  margin-right: 20px;
}
.goods-tabs[data-v-5dc77adc] {
  min-height: 600px;
  background: #fff;
}
.goods-tabs nav[data-v-5dc77adc] {
  height: 70px;
  line-height: 70px;
  display: flex;
  border-bottom: 1px solid #f5f5f5;
}
.goods-tabs nav a[data-v-5dc77adc]:first-child {
  border-right: 1px solid #f5f5f5;
}
.goods-tabs nav a[data-v-5dc77adc] {
  padding: 0 40px;
  font-size: 18px;
  position: relative;
}
.goods-tabs nav a.active[data-v-5dc77adc]:before {
  content: "";
  position: absolute;
  left: 40px;
  bottom: -1px;
  width: 72px;
  height: 2px;
  background: #27ba9b;
}
.goods-tabs nav a > span[data-v-5dc77adc] {
  color: #cf4444;
  font-size: 16px;
  margin-left: 10px;
}
.goods-detail[data-v-4d87a5c2] {
  padding: 40px;
}
.goods-detail .attrs[data-v-4d87a5c2] {
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 30px;
}
.goods-detail .attrs li[data-v-4d87a5c2] {
  display: flex;
  margin-bottom: 10px;
  width: 50%;
}
.goods-detail .attrs li .dt[data-v-4d87a5c2] {
  width: 100px;
  color: #999;
}
.goods-detail .attrs li .dd[data-v-4d87a5c2] {
  flex: 1;
  color: #666;
}
.goods-detail > img[data-v-4d87a5c2] {
  width: 100%;
}
img {
  max-width: 100%;
  max-height: 100%;
  vertical-align: middle;
}
.goods-warn[data-v-6867108e] {
  margin-top: 20px;
  background: #fff;
  padding-bottom: 40px;
}
.goods-warn h3[data-v-6867108e] {
  height: 70px;
  line-height: 70px;
  border-bottom: 1px solid #f5f5f5;
  padding-left: 50px;
  font-size: 18px;
  font-weight: 400;
  margin-bottom: 10px;
}
.goods-warn p.tit[data-v-6867108e] {
  color: #333;
}
.goods-warn p[data-v-6867108e] {
  line-height: 40px;
  padding: 0 25px;
  color: #666;
}
.goods-footer .goods-aside[data-v-b185dbf4] {
  width: 280px;
  min-height: 1000px;
}
.goods-hot h3[data-v-3e75e67a] {
  height: 70px;
  background: #e26237;
  color: #fff;
  font-size: 18px;
  line-height: 70px;
  padding-left: 25px;
  margin-bottom: 10px;
  font-weight: 400;
}
.goods-hot[data-v-3e75e67a] .goods-item {
  background: #fff;
  width: 100%;
  margin-bottom: 10px;
}
.goods-item[data-v-1089b770] {
  display: block;
  width: 220px;
  padding: 20px 30px;
  text-align: center;
  transition: all 0.5s;
}
.goods-hot[data-v-3e75e67a] .goods-item img {
  width: 200px;
  height: 200px;
}
.goods-item img[data-v-1089b770] {
  width: 160px;
  height: 160px;
}
.goods-hot[data-v-3e75e67a] .goods-item p {
  margin: 0 10px;
}
.goods-item .name[data-v-1089b770] {
  font-size: 16px;
}
.goods-item p[data-v-1089b770] {
  padding-top: 10px;
}
.ellipsis,
.ellipsis-2 {
  text-overflow: ellipsis;
  overflow: hidden;
}
.ellipsis {
  white-space: nowrap;
}

.goods-item .price[data-v-1089b770] {
  color: #cf4444;
  font-size: 20px;
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

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
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
  transition: opacity 0.5s linear;
}

.slider {
  display: flex;
  justify-content: space-between;
  padding: 0 40px;
}

.slider > a {
  width: 240px;
  text-align: center;
}

.slider > a img {
  padding: 20px;
  width: 230px !important;
  height: 230px !important;
}

.slider > a .name {
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

.slider > a .price {
  font-size: 16px;
  color: #cf4444;
  margin-top: 15px;
}
.mainImage {
  width: 400px;
  height: 400px;
  position: relative;
}

.mainImage .imageItem {
  border: 1px solid #dcdcdc;
  width: 400px;
  height: 400px;
  position: relative;
}

/* 放大的图片，通过定位将左上角定位到(0,0) */
.coverLayerRightImg {
  display: inline-block;
  width: 800px;
  height: 800px;
  position: absolute;
  top: 0;
  left: 0;
}

/* 右边的区域图片放大空间 */
.coverLayerRight {
  background-color: #ffffff;
  width: 400px;
  height: 400px;
  border: 1px solid #dcdcdc;
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
  z-index: 11;
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
.bv2 {
  border: 2px solid #27ba9b !important;
}
.bv1 {
  border: 1px solid #27ba9b !important;
}
.sxh {
  color: #666;
  font-size: 14px;
}
.sxh:hover {
  color: #27ba9b;
}
/* .middle{
    z-index: 10000000;
  } */

  .dis{
  border:1.5px dashed  !important;
  cursor: not-allowed !important;
      opacity: .6 !important;
}
</style>