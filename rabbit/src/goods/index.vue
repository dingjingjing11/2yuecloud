<template>
    <div class="app-body">
        <div class="xtx-goods-page">
            <div class="container">
                <!-- 面包屑 -->
                <div class="xtx-bread" data-v-b185dbf4="">
                    <div class="xtx-bread-item" data-v-b185dbf4="">
                        <a href="#/" class="router-link-active">首页</a>
                    </div>
                    <i class="iconfont icon-angle-right"></i>
                    <div class="xtx-bread-item" :to="'/categroy/'+goods.categories[0].id" data-v-b185dbf4="">
                    <a href="#/category/1010000" class="">服饰{{goods.categories[0].id}}</a></div><i
                        class="iconfont icon-angle-right"></i>
                    <div class="xtx-bread-item" data-v-b185dbf4=""><a href="#/category/sub/109303000" class="">钱包/胸包
                         {{goods.categories}}</a>
                    </div><i class="iconfont icon-angle-right"></i>
                    <div class="xtx-bread-item" data-v-b185dbf4=""><span>自我态度男式多功能多层格局休闲胸包</span></div>
                </div>
             <div class="goods-info" data-v-b185dbf4="">
                        <div class="media" data-v-b185dbf4="">
                            <div class="goods-image" data-v-d1fd3ff6="" data-v-b185dbf4="">
                                <!-- 右边放大镜盒子 -->
                                <div class="large" data-v-d1fd3ff6=""  
                                  ref="box" @mouseenter="enterImg($event)"  @mouseleave="leaveImg($event)"
                                    style="background-image: url(&quot;https://yanxuan-item.nosdn.127.net/ac33cf37023facd976dd46dc637c45a8.jpg&quot;); background-position: -400px 0px; display: none;">
                                </div>
                                <!-- 左侧盒子 -->
                                <div class="middle" data-v-d1fd3ff6=""  
                                ><img
                                        src="" 
                                        alt="" data-v-d1fd3ff6="">
                                        <!-- 小黑块盒子 -->
                                    <div class="layer"   v-show="showBlackDiv"  ref="blackdiv"
                                       data-v-d1fd3ff6=""  style="left: 200px; top: 0px; display: none;">
                                    </div>
                                </div>
                                <ul class="small" data-v-d1fd3ff6="">
                                    <li class="active" data-v-d1fd3ff6="" v-for="(img,i) in images" :key="img" :class="{active:i===currIndex}"><img
                                            src="https://yanxuan-item.nosdn.127.net/ac33cf37023facd976dd46dc637c45a8.jpg"
                                            alt="" data-v-d1fd3ff6=""></li>
                                    <li class="" data-v-d1fd3ff6=""><img
                                            src="https://yanxuan-item.nosdn.127.net/39370719831a73c0ff9b27fef44a3086.jpg"
                                            alt="" data-v-d1fd3ff6=""></li>
                                    <li class="" data-v-d1fd3ff6=""><img
                                            src="https://yanxuan-item.nosdn.127.net/c1b8791274ee4154fbec445f7048714d.jpg"
                                            alt="" data-v-d1fd3ff6=""></li>
                                    <li class="" data-v-d1fd3ff6=""><img
                                            src="https://yanxuan-item.nosdn.127.net/67c24da6368166dff63b769af8d0c1d8.jpg"
                                            alt="" data-v-d1fd3ff6=""></li>
                                    <li class="" data-v-d1fd3ff6=""><img
                                            src="https://yanxuan-item.nosdn.127.net/bc3d657e7702e0fc9e973da701752573.jpg"
                                            alt="" data-v-d1fd3ff6=""></li>
                                </ul>
                            </div>
                            <ul class="goods-sales" data-v-34ceb5ea="" data-v-b185dbf4="">
                                <li data-v-34ceb5ea="">
                                    <p data-v-34ceb5ea="">销量人气</p>
                                    <p data-v-34ceb5ea="">200+</p>
                                    <p data-v-34ceb5ea=""><i class="iconfont icon-task-filling"
                                            data-v-34ceb5ea=""></i>销量人气</p>
                                </li>
                                <li data-v-34ceb5ea="">
                                    <p data-v-34ceb5ea="">商品评价</p>
                                    <p data-v-34ceb5ea="">400+</p>
                                    <p data-v-34ceb5ea=""><i class="iconfont icon-comment-filling"
                                            data-v-34ceb5ea=""></i>查看评价</p>
                                </li>
                                <li data-v-34ceb5ea="">
                                    <p data-v-34ceb5ea="">收藏人气</p>
                                    <p data-v-34ceb5ea="">600+</p>
                                    <p data-v-34ceb5ea=""><i class="iconfont icon-favorite-filling"
                                            data-v-34ceb5ea=""></i>收藏商品</p>
                                </li>
                                <li data-v-34ceb5ea="">
                                    <p data-v-34ceb5ea="">品牌信息</p>
                                    <p data-v-34ceb5ea="">苏宁电器</p>
                                    <p data-v-34ceb5ea=""><i class="iconfont icon-dynamic-filling"
                                            data-v-34ceb5ea=""></i>品牌主页</p>
                                </li>
                            </ul>
                        </div>
                        <div class="spec" data-v-b185dbf4="" v-for="item in specList">
                            <p class="g-name" data-v-ebc66f80="">自我态度男式多功能多层格局休闲胸包 {{res.result.name}}</p>
                            <p class="g-desc" data-v-ebc66f80="">休闲潮流男士斜挎包{{res.result.desc}}</p>
                            <p class="g-price" data-v-ebc66f80=""><span data-v-ebc66f80="">146.00{{res.result.price}}</span><span
                                    data-v-ebc66f80="">169.00</span></p>
                            <div class="g-service" data-v-ebc66f80="">
                                <dl data-v-ebc66f80="">
                                    <dt data-v-ebc66f80="">促销</dt>
                                    <dd data-v-ebc66f80="">12月好物放送，App领券购买直降120元</dd>
                                </dl>
                                <dl data-v-ebc66f80="">
                                    <dt data-v-ebc66f80="">配送</dt>
                                    <dd data-v-ebc66f80="">至 <div class="xtx-city" data-v-3ebccf2f=""
                                            data-v-ebc66f80="">
                                            <div class="select" data-v-3ebccf2f=""><span class="value"
                                                    data-v-3ebccf2f="">北京市 市辖区 东城区</span><i
                                                    class="iconfont icon-angle-down" data-v-3ebccf2f=""></i></div>
                                            <!---->
                                        </div>
                                    </dd>
                                </dl>
                                <dl data-v-ebc66f80="">
                                    <dt data-v-ebc66f80="">服务</dt>
                                    <dd data-v-ebc66f80=""><span data-v-ebc66f80="">无忧退货</span><span
                                            data-v-ebc66f80="">快速退款</span><span data-v-ebc66f80="">免费包邮</span><a
                                            href="javascript:;" data-v-ebc66f80="">了解详情</a></dd>
                                </dl>
                            </div>
                            <div class="goods-sku" data-v-3d8edf08="" data-v-b185dbf4="">
                                <dl data-v-3d8edf08="">
                                    <dt data-v-3d8edf08="">颜色</dt>
                                    <dd data-v-3d8edf08=""><img class=""
                                            src="https://yanxuan-item.nosdn.127.net/b07140f544c269f5e775a67886a2df24.png"
                                            title="黑色" alt="" data-v-3d8edf08=""></dd>
                                </dl>
                            </div>
                            <div class="xtx-numbox" data-v-3abe1060="" data-v-b185dbf4="">
                                <div class="label" data-v-3abe1060="">数量</div>
                                <div class="numbox" data-v-3abe1060=""><a href="javascript:;"
                                        data-v-3abe1060="">-</a><input type="text" readonly="" data-v-3abe1060=""><a
                                        href="javascript:;" data-v-3abe1060="">+</a></div>
                            </div><button class="xtx-button ellipsis middle primary" data-v-34af3967=""
                                data-v-b185dbf4="" style="margin-top: 20px;">加入购物车</button>
                        </div>
                    </div>
                <div class="goods-relevant" data-v-f1713bb2="" data-v-b185dbf4="">
                    <div class="header" data-v-f1713bb2=""><i class="icon" data-v-f1713bb2=""></i><span class="title"
                            data-v-f1713bb2="">猜你喜欢</span></div>
                    <div class="xtx-carousel" data-v-51374c56="" data-v-f1713bb2="">
                        <ul class="carousel-body" data-v-51374c56="">
                            <li class="carousel-item fade" data-v-51374c56="">
                                <div class="slider" data-v-51374c56=""><a href="#/product/3997974" class=""
                                        data-v-51374c56=""><img
                                            src="https://yanxuan-item.nosdn.127.net/8f0c15f981c5cbcb1aa17215a259fa62.png"
                                            alt="" data-v-51374c56="">
                                        <p class="name ellipsis" data-v-51374c56="">入门首选，语音播报电子血压计</p>
                                        <p class="price" data-v-51374c56="">¥109.00</p>
                                    </a><a href="#/product/3996270" class="" data-v-51374c56=""><img
                                            src="https://yanxuan-item.nosdn.127.net/59b98ddea6422e71de8cec507865984f.png"
                                            alt="" data-v-51374c56="">
                                        <p class="name ellipsis" data-v-51374c56="">超能装多功能出行胸包</p>
                                        <p class="price" data-v-51374c56="">¥49.00</p>
                                    </a><a href="#/product/3998535" class="" data-v-51374c56=""><img
                                            src="https://yanxuan-item.nosdn.127.net/ef01de6dfac9cc4c548f317f2feddafe.jpg"
                                            alt="" data-v-51374c56="">
                                        <p class="name ellipsis" data-v-51374c56="">学步更自如，婴幼童机能学步鞋4-6码</p>
                                        <p class="price" data-v-51374c56="">¥109.00</p>
                                    </a><a href="#/product/4007784" class="" data-v-51374c56=""><img
                                            src="https://yanxuan-item.nosdn.127.net/a9f428091f172db89977a511f6639fec.jpg"
                                            alt="" data-v-51374c56="">
                                        <p class="name ellipsis" data-v-51374c56="">婴幼儿童透气网面学步鞋小童鞋4-6码</p>
                                        <p class="price" data-v-51374c56="">¥119.00</p>
                                    </a></div>
                            </li>
                            <li class="carousel-item" data-v-51374c56="">
                                <div class="slider" data-v-51374c56=""><a href="#/product/4011360" class=""
                                        data-v-51374c56=""><img
                                            src="https://yanxuan-item.nosdn.127.net/7693195de927cc9fef8c468e33968cf5.jpg"
                                            alt="" data-v-51374c56="">
                                        <p class="name ellipsis" data-v-51374c56="">【明星单品】霸道轻量版大物竿钓竿鱼竿</p>
                                        <p class="price" data-v-51374c56="">¥251.00</p>
                                    </a><a href="#/product/4000277" class="" data-v-51374c56=""><img
                                            src="https://yanxuan-item.nosdn.127.net/6efe85e63ab1e09896e1c99a9fe09d9e.png"
                                            alt="" data-v-51374c56="">
                                        <p class="name ellipsis" data-v-51374c56="">21春季新品，宝宝舒适四季连体衣0-3岁</p>
                                        <p class="price" data-v-51374c56="">¥79.00</p>
                                    </a><a href="#/product/3995432" class="" data-v-51374c56=""><img
                                            src="https://yanxuan-item.nosdn.127.net/eac6c40fdb0f977fdf80048d7b181ffa.png"
                                            alt="" data-v-51374c56="">
                                        <p class="name ellipsis" data-v-51374c56="">软牛皮少女系英伦鞋</p>
                                        <p class="price" data-v-51374c56="">¥236.00</p>
                                    </a><a href="#/product/3995844" class="" data-v-51374c56=""><img
                                            src="https://yanxuan-item.nosdn.127.net/f17d6260e7eb0cb805b796296f5f54b5.jpg"
                                            alt="" data-v-51374c56="">
                                        <p class="name ellipsis" data-v-51374c56="">优质90%白鸭绒，儿童轻薄羽绒裤1-6岁</p>
                                        <p class="price" data-v-51374c56="">¥129.00</p>
                                    </a></div>
                            </li>
                            <li class="carousel-item" data-v-51374c56="">
                                <div class="slider" data-v-51374c56=""><a href="#/product/3997933" class=""
                                        data-v-51374c56=""><img
                                            src="https://yanxuan-item.nosdn.127.net/839aea5622be52830fadd8ccdede4fec.png"
                                            alt="" data-v-51374c56="">
                                        <p class="name ellipsis" data-v-51374c56="">复古阿甘女式休闲运动鞋</p>
                                        <p class="price" data-v-51374c56="">¥258.00</p>
                                    </a><a href="#/product/4013432" class="" data-v-51374c56=""><img
                                            src="https://yanxuan-item.nosdn.127.net/09723c372699a2c5a92b2204d58bd61e.png"
                                            alt="" data-v-51374c56="">
                                        <p class="name ellipsis" data-v-51374c56="">KJE金属色系轻量电动车骑行盔男女通用</p>
                                        <p class="price" data-v-51374c56="">¥129.00</p>
                                    </a><a href="#/product/4005109" class="" data-v-51374c56=""><img
                                            src="https://yanxuan-item.nosdn.127.net/1f79f14fd666bda2be3d100e90ef6b37.jpg"
                                            alt="" data-v-51374c56="">
                                        <p class="name ellipsis" data-v-51374c56="">条纹CHIC风，女童字母条纹连衣裙73-130cm</p>
                                        <p class="price" data-v-51374c56="">¥99.00</p>
                                    </a><a href="#/product/4007970" class="" data-v-51374c56=""><img
                                            src="https://yanxuan-item.nosdn.127.net/1457b3631892a975c8a8f6dbaabea8e8.jpg"
                                            alt="" data-v-51374c56="">
                                        <p class="name ellipsis" data-v-51374c56="">舒适条纹，纯棉凉爽无袖连体衣59-90cm</p>
                                        <p class="price" data-v-51374c56="">¥79.00</p>
                                    </a></div>
                            </li>
                            <li class="carousel-item" data-v-51374c56="">
                                <div class="slider" data-v-51374c56=""><a href="#/product/4018446" class=""
                                        data-v-51374c56=""><img
                                            src="https://yanxuan-item.nosdn.127.net/c570b87e7f5f2ab77567e0f537eaee37.jpg"
                                            alt="" data-v-51374c56="">
                                        <p class="name ellipsis" data-v-51374c56="">麦瑞克智能磁控轻音椭圆机</p>
                                        <p class="price" data-v-51374c56="">¥1899.00</p>
                                    </a><a href="#/product/4003104" class="" data-v-51374c56=""><img
                                            src="https://yanxuan-item.nosdn.127.net/48ad67400b3097d730ef0a5d6e7fb84a.png"
                                            alt="" data-v-51374c56="">
                                        <p class="name ellipsis" data-v-51374c56="">法式清新，长袖格纹连衣裙/衬衫110-160cm</p>
                                        <p class="price" data-v-51374c56="">¥129.00</p>
                                    </a><a href="#/product/3993828" class="" data-v-51374c56=""><img
                                            src="https://yanxuan-item.nosdn.127.net/a6939f41c48fa9e9c8f7a7ed855351f1.jpg"
                                            alt="" data-v-51374c56="">
                                        <p class="name ellipsis" data-v-51374c56="">七夕礼物·姐姐同款，穿出自信体态矫姿带</p>
                                        <p class="price" data-v-51374c56="">¥159.00</p>
                                    </a><a href="#/product/3994870" class="" data-v-51374c56=""><img
                                            src="https://yanxuan-item.nosdn.127.net/ccf7aa782c3a1daf2cd53bf6f1ade697.jpg"
                                            alt="" data-v-51374c56="">
                                        <p class="name ellipsis" data-v-51374c56="">冬日穿搭利器，女童加绒打底裤73-140cm</p>
                                        <p class="price" data-v-51374c56="">¥79.00</p>
                                    </a></div>
                            </li>
                        </ul><a href="javascript:;" class="carousel-btn prev" data-v-51374c56=""><i
                                class="iconfont icon-angle-left" data-v-51374c56=""></i></a><a href="javascript:;"
                            class="carousel-btn next" data-v-51374c56=""><i class="iconfont icon-angle-right"
                                data-v-51374c56=""></i></a>
                        <div class="carousel-indicator" data-v-51374c56=""><span class="active"
                                data-v-51374c56=""></span><span class="" data-v-51374c56=""></span><span class=""
                                data-v-51374c56=""></span><span class="" data-v-51374c56=""></span></div>
                    </div>
                </div>
                <div class="goods-footer" data-v-b185dbf4="">
                    <div class="goods-article" data-v-b185dbf4="">
                        <div class="goods-tabs" data-v-b185dbf4="">
                            <div class="goods-tabs" data-v-5dc77adc="" data-v-b185dbf4="">
                                <nav data-v-5dc77adc=""><a class="active" href="javascript:;"
                                        data-v-5dc77adc="">商品详情</a><a class="" href="javascript:;"
                                        data-v-5dc77adc="">商品评价<span data-v-5dc77adc="">(0)</span></a></nav>
                                <div class="goods-detail" data-v-4d87a5c2="" data-v-5dc77adc="">
                                    <ul class="attrs" data-v-4d87a5c2="">
                                        <li data-v-4d87a5c2=""><span class="dt" data-v-4d87a5c2="">适用人群</span><span
                                                class="dd" data-v-4d87a5c2="">青少年、男士</span></li>
                                        <li data-v-4d87a5c2=""><span class="dt" data-v-4d87a5c2="">材质</span><span
                                                class="dd" data-v-4d87a5c2="">织物</span></li>
                                        <li data-v-4d87a5c2=""><span class="dt" data-v-4d87a5c2="">包型</span><span
                                                class="dd" data-v-4d87a5c2="">胸包/腰包</span></li>
                                        <li data-v-4d87a5c2=""><span class="dt" data-v-4d87a5c2="">适用电脑尺寸</span><span
                                                class="dd" data-v-4d87a5c2="">不可放电脑</span></li>
                                    </ul><img
                                        src="https://yanxuan-item.nosdn.127.net/aea7bd7dce4335ecdf9d0630972d445b.jpg"
                                        alt="" data-v-4d87a5c2=""><img
                                        src="https://yanxuan-item.nosdn.127.net/bdd366f5588e874fa171e4ee342c78f2.jpg"
                                        alt="" data-v-4d87a5c2=""><img
                                        src="https://yanxuan-item.nosdn.127.net/ce3053e21626465cc64abb141ca0df0d.jpg"
                                        alt="" data-v-4d87a5c2=""><img
                                        src="https://yanxuan-item.nosdn.127.net/e83a85811f999547ef4eb17a39233a26.jpg"
                                        alt="" data-v-4d87a5c2=""><img
                                        src="https://yanxuan-item.nosdn.127.net/e3a3a7a9cae51cdb92fc55f1759fabf4.jpg"
                                        alt="" data-v-4d87a5c2=""><img
                                        src="https://yanxuan-item.nosdn.127.net/bb1240d7c93f697df2742bd57af1c8a4.jpg"
                                        alt="" data-v-4d87a5c2=""><img
                                        src="https://yanxuan-item.nosdn.127.net/d3a41f0a0878054cf53ada8ecf0872a9.jpg"
                                        alt="" data-v-4d87a5c2=""><img
                                        src="https://yanxuan-item.nosdn.127.net/80d7c4d92c0c802eef0e1d5848f6b2e6.jpg"
                                        alt="" data-v-4d87a5c2=""><img
                                        src="https://yanxuan-item.nosdn.127.net/4b5989e4ec37a5a3b72835b06f3b73e0.jpg"
                                        alt="" data-v-4d87a5c2=""><img
                                        src="https://yanxuan-item.nosdn.127.net/9d2734ed67b76b7242cbacda998a8772.jpg"
                                        alt="" data-v-4d87a5c2=""><img
                                        src="https://yanxuan-item.nosdn.127.net/216486092d5b4f98432404c6632c5ef9.jpg"
                                        alt="" data-v-4d87a5c2=""><img
                                        src="https://yanxuan-item.nosdn.127.net/32d295b3a7f138c991452a52aa4330e7.jpg"
                                        alt="" data-v-4d87a5c2=""><img
                                        src="https://yanxuan-item.nosdn.127.net/54dbb624e854ebb937ca5b5b6fe84320.jpg"
                                        alt="" data-v-4d87a5c2=""><img
                                        src="https://yanxuan-item.nosdn.127.net/4b3958fd2ccd83e9899a8a3f91f5613f.jpg"
                                        alt="" data-v-4d87a5c2=""><img
                                        src="https://yanxuan-item.nosdn.127.net/ed2bd12ad8e15db3e0e63cf37a0ee1fc.jpg"
                                        alt="" data-v-4d87a5c2=""><img
                                        src="https://yanxuan-item.nosdn.127.net/bfa5313e6135b2dac16a14abb65245d3.jpg"
                                        alt="" data-v-4d87a5c2=""><img
                                        src="https://yanxuan-item.nosdn.127.net/b36a987b3a3745e65b93310b89c13669.jpg"
                                        alt="" data-v-4d87a5c2=""><img
                                        src="https://yanxuan-item.nosdn.127.net/d8aa6a28232793118062675ee2f1b5c9.jpg"
                                        alt="" data-v-4d87a5c2=""><img
                                        src="https://yanxuan-item.nosdn.127.net/39c06df9274ab97e1edc55f3bc604ddc.jpg"
                                        alt="" data-v-4d87a5c2=""><img
                                        src="https://yanxuan-item.nosdn.127.net/e2ea5d682d179fe8dbbf01a851b0874f.jpg"
                                        alt="" data-v-4d87a5c2=""><img
                                        src="https://yanxuan-item.nosdn.127.net/a3a1255953cea8fa83f1876aab8568db.jpg"
                                        alt="" data-v-4d87a5c2=""><img
                                        src="https://yanxuan-item.nosdn.127.net/68d036ec49bb6ee1e0c5c2f3a7c96e4a.jpg"
                                        alt="" data-v-4d87a5c2=""><img
                                        src="https://yanxuan-item.nosdn.127.net/b21b6fb040b8e189c1fef04d53c74ba7.jpg"
                                        alt="" data-v-4d87a5c2=""><img
                                        src="https://yanxuan-item.nosdn.127.net/ce03b448bac885e451bcfa1620cc3d71.jpg"
                                        alt="" data-v-4d87a5c2=""><img
                                        src="https://yanxuan-item.nosdn.127.net/c2bdfc6210102f4cc1fb6def2075ea7a.jpg"
                                        alt="" data-v-4d87a5c2=""><img
                                        src="https://yanxuan-item.nosdn.127.net/3b5be7f185f212c8dbf8d0c6cc3f9926.jpg"
                                        alt="" data-v-4d87a5c2=""><img
                                        src="https://yanxuan-item.nosdn.127.net/d568ed4b75add8ce67b6b573c57fd1e3.jpg"
                                        alt="" data-v-4d87a5c2=""><img
                                        src="https://yanxuan-item.nosdn.127.net/f7f6bc74e570ec98442bdd89735bcc32.jpg"
                                        alt="" data-v-4d87a5c2=""><img
                                        src="https://yanxuan-item.nosdn.127.net/e6c35004ed0200653cd5ad93a28980c5.jpg"
                                        alt="" data-v-4d87a5c2=""><img
                                        src="https://yanxuan-item.nosdn.127.net/b009566191e818b83982dcd7e1c9aba5.jpg"
                                        alt="" data-v-4d87a5c2=""><img
                                        src="https://yanxuan-item.nosdn.127.net/31816ad5f80b560780b7ec25ccb996e8.jpg"
                                        alt="" data-v-4d87a5c2=""><img
                                        src="https://yanxuan-item.nosdn.127.net/9bef719e2e3c9964c8964f0ee3ab5d8b.jpg"
                                        alt="" data-v-4d87a5c2=""><img
                                        src="https://yanxuan-item.nosdn.127.net/1fe5c0114cdeebaf88e84d4999f5f4c2.jpg"
                                        alt="" data-v-4d87a5c2=""><img
                                        src="https://yanxuan-item.nosdn.127.net/858205712a48751c36cdfc8a52f3d594.jpg"
                                        alt="" data-v-4d87a5c2=""><img
                                        src="https://yanxuan-item.nosdn.127.net/aca6b5b75035d5d1f0eee52d85980edf.jpg"
                                        alt="" data-v-4d87a5c2=""><img
                                        src="https://yanxuan-item.nosdn.127.net/aeda86bbd2f14006a02f83b04a0336a6.jpg"
                                        alt="" data-v-4d87a5c2=""><img
                                        src="https://yanxuan-item.nosdn.127.net/b36fa0b1b546b1b679e0e91078f21911.jpg"
                                        alt="" data-v-4d87a5c2=""><img
                                        src="https://yanxuan-item.nosdn.127.net/d77425232ad662e408e5c129b71df1c2.jpg"
                                        alt="" data-v-4d87a5c2=""><img
                                        src="https://yanxuan-item.nosdn.127.net/33bb2bbe8e4f95dee3bc9834f07228cf.jpg"
                                        alt="" data-v-4d87a5c2=""><img
                                        src="https://yanxuan-item.nosdn.127.net/ffc91646cef4c72f0f1521756f617548.jpg"
                                        alt="" data-v-4d87a5c2=""><img
                                        src="https://yanxuan-item.nosdn.127.net/8b2eb1a7eb618c91d425342dba1dda96.jpg"
                                        alt="" data-v-4d87a5c2=""><img
                                        src="https://yanxuan-item.nosdn.127.net/22ef9155f8c190cb1c250dbf3d1e8235.jpg"
                                        alt="" data-v-4d87a5c2=""><img
                                        src="https://yanxuan-item.nosdn.127.net/f9a4bca6355e28afb52431dc5d86f444.jpg"
                                        alt="" data-v-4d87a5c2=""><img
                                        src="https://yanxuan-item.nosdn.127.net/d83d3ac87c17f10c775607f2ac5b33bf.jpg"
                                        alt="" data-v-4d87a5c2=""><img
                                        src="https://yanxuan-item.nosdn.127.net/42334047b3bc32935914c32b7a5f65dc.jpg"
                                        alt="" data-v-4d87a5c2=""><img
                                        src="https://yanxuan-item.nosdn.127.net/5ef7b034dee60ecae9bf43c32b7d6102.jpg"
                                        alt="" data-v-4d87a5c2=""><img
                                        src="https://yanxuan-item.nosdn.127.net/a04f1dde124750b68c39460f4aab773d.jpg"
                                        alt="" data-v-4d87a5c2=""><img
                                        src="https://yanxuan-item.nosdn.127.net/94ec67f427325aa61bb5e6f74ad7ac58.jpg"
                                        alt="" data-v-4d87a5c2=""><img
                                        src="https://yanxuan-item.nosdn.127.net/854de568799b322cada63c2467588f45.jpg"
                                        alt="" data-v-4d87a5c2=""><img
                                        src="https://yanxuan-item.nosdn.127.net/109ce0fc1bf4bd70dd0eca2ee1120922.jpg"
                                        alt="" data-v-4d87a5c2=""><img
                                        src="https://yanxuan-item.nosdn.127.net/241cbea27828f5dc2f94c2d2fa593940.jpg"
                                        alt="" data-v-4d87a5c2=""><img
                                        src="https://yanxuan-item.nosdn.127.net/2a31b0dc845331406ca833fb9bdb6ee2.jpg"
                                        alt="" data-v-4d87a5c2=""><img
                                        src="https://yanxuan-item.nosdn.127.net/e9349009b036631cf9a85b073bebac41.jpg"
                                        alt="" data-v-4d87a5c2=""><img
                                        src="https://yanxuan-item.nosdn.127.net/844900f10fb724ddc8336b47ca936f5e.jpg"
                                        alt="" data-v-4d87a5c2=""><img
                                        src="https://yanxuan-item.nosdn.127.net/92793faf680a86d7e95001969f7b61b7.jpg"
                                        alt="" data-v-4d87a5c2=""><img
                                        src="https://yanxuan-item.nosdn.127.net/a3df4dace6bd41690f038970c4242790.jpg"
                                        alt="" data-v-4d87a5c2=""><img
                                        src="https://yanxuan-item.nosdn.127.net/c2b3c35b8a8f1cb105cbe4647660b30b.jpg"
                                        alt="" data-v-4d87a5c2=""><img
                                        src="https://yanxuan-item.nosdn.127.net/df213962f874e51270cf33abf8f5976b.jpg"
                                        alt="" data-v-4d87a5c2=""><img
                                        src="https://yanxuan-item.nosdn.127.net/7d5c27e3e3b7d7d58239c2eeb539fff5.jpg"
                                        alt="" data-v-4d87a5c2=""><img
                                        src="https://yanxuan-item.nosdn.127.net/5e479b4eadfd59fe95ebf298f95ceeae.jpg"
                                        alt="" data-v-4d87a5c2=""><img
                                        src="https://yanxuan-item.nosdn.127.net/89d8d409959a1a97cb4c2ae1f09de570.jpg"
                                        alt="" data-v-4d87a5c2=""><img
                                        src="https://yanxuan-item.nosdn.127.net/8b86a8dacc4bf220b14c5ae8eca60b27.jpg"
                                        alt="" data-v-4d87a5c2=""><img
                                        src="https://yanxuan-item.nosdn.127.net/119b9e893bc5e3230c481b318be73758.jpg"
                                        alt="" data-v-4d87a5c2=""><img
                                        src="https://yanxuan-item.nosdn.127.net/67dc7fd8f14a5e4b37a02721cc281f71.jpg"
                                        alt="" data-v-4d87a5c2=""><img
                                        src="https://yanxuan-item.nosdn.127.net/e7abf51cf851152fa020299572790674.jpg"
                                        alt="" data-v-4d87a5c2=""><img
                                        src="https://yanxuan-item.nosdn.127.net/cbd3fa40ce9226f47ff37d782b416e87.jpg"
                                        alt="" data-v-4d87a5c2=""><img
                                        src="https://yanxuan-item.nosdn.127.net/5aa8bc398d67eedca0c22c980dafce26.jpg"
                                        alt="" data-v-4d87a5c2=""><img
                                        src="https://yanxuan-item.nosdn.127.net/ea33db35f87de28adad7ebc18d863b82.jpg"
                                        alt="" data-v-4d87a5c2=""><img
                                        src="https://yanxuan-item.nosdn.127.net/d743fcf8972da191de591e23eb961656.jpg"
                                        alt="" data-v-4d87a5c2=""><img
                                        src="https://yanxuan-item.nosdn.127.net/6c3df987743ee7041afa87587b4adf3e.jpg"
                                        alt="" data-v-4d87a5c2=""><img
                                        src="https://yanxuan-item.nosdn.127.net/777081ed01f42d7477ee0e7a879929f0.jpg"
                                        alt="" data-v-4d87a5c2=""><img
                                        src="https://yanxuan-item.nosdn.127.net/eb4478cca84988aa2e380dd90c7ebcba.jpg"
                                        alt="" data-v-4d87a5c2=""><img
                                        src="https://yanxuan-item.nosdn.127.net/723b715742e68ae0e20a57e5e806b0ea.jpg"
                                        alt="" data-v-4d87a5c2=""><img
                                        src="https://yanxuan-item.nosdn.127.net/b5be7d44f7d3523e3ebf52fe9f26ff7f.jpg"
                                        alt="" data-v-4d87a5c2=""><img
                                        src="https://yanxuan-item.nosdn.127.net/9a18fd4828e3c9c041f551416dd54fcf.jpg"
                                        alt="" data-v-4d87a5c2=""><img
                                        src="https://yanxuan-item.nosdn.127.net/677a42e38e25dc4838efc2648b89a47a.jpg"
                                        alt="" data-v-4d87a5c2=""><img
                                        src="https://yanxuan-item.nosdn.127.net/39b5afd9127e0845c1f3aafead73879f.jpg"
                                        alt="" data-v-4d87a5c2=""><img
                                        src="https://yanxuan-item.nosdn.127.net/bf7d7ecf704143520b9ee882fb3d36b8.jpg"
                                        alt="" data-v-4d87a5c2=""><img
                                        src="https://yanxuan-item.nosdn.127.net/6ad6f89c1aabfc44fd82dc6b5173ef19.jpg"
                                        alt="" data-v-4d87a5c2=""><img
                                        src="https://yanxuan-item.nosdn.127.net/4eac8a868f5d7296e173c9041166cc6f.jpg"
                                        alt="" data-v-4d87a5c2=""><img
                                        src="https://yanxuan-item.nosdn.127.net/cfa4516c6fa99194762c0372ad6bc49e.jpg"
                                        alt="" data-v-4d87a5c2=""><img
                                        src="https://yanxuan-item.nosdn.127.net/4dc0e4ada1e5e46b2cbffb9179f86b7b.jpg"
                                        alt="" data-v-4d87a5c2=""><img
                                        src="https://yanxuan-item.nosdn.127.net/fa34cca4e3f49292c37e6762a8ec7fa1.jpg"
                                        alt="" data-v-4d87a5c2=""><img
                                        src="https://yanxuan-item.nosdn.127.net/7955c28530cdacfd7a4252b11efdc7f9.jpg"
                                        alt="" data-v-4d87a5c2=""><img
                                        src="https://yanxuan-item.nosdn.127.net/be2ca69a1b0819483b80fc0f01a0b566.jpg"
                                        alt="" data-v-4d87a5c2=""><img
                                        src="https://yanxuan-item.nosdn.127.net/6a01ffbf52d2e4d9909d317378a7f48a.jpg"
                                        alt="" data-v-4d87a5c2="">
                                </div>
                            </div>
                        </div>
                        <div class="goods-warn" data-v-b185dbf4="">
                            <div class="goods-warn" data-v-6867108e="" data-v-b185dbf4="">
                                <h3 data-v-6867108e="">注意事项</h3>
                                <p class="tit" data-v-6867108e="">• 购买运费如何收取？</p>
                                <p data-v-6867108e="">
                                    单笔订单金额(不含运费)满88元免邮费；不满88元，每单收取10元运费。（港澳台地区需满500元免邮费；不满500元，每单收取30元运费)
                                </p><br data-v-6867108e="">
                                <p class="tit" data-v-6867108e="">• 使用什么快递发货?</p>
                                <p data-v-6867108e="">默认使用顺丰快递发货(个别商品使用其他快递）</p>
                                <p data-v-6867108e="">配送范围覆盖全国大部分地区(港澳台地区除外）</p><br data-v-6867108e="">
                                <p class="tit" data-v-6867108e="">• 如何申请退货?</p>
                                <p data-v-6867108e=""> 1.自收到商品之日起30日内，顾客可申请无忧退货，退款将原路返还，不同的银行处理时间不同，预计1-5个工作日到账； </p>
                                <p data-v-6867108e="">2.内裤和食品等特殊商品无质量问题不支持退货；</p>
                                <p data-v-6867108e=""> 3.退货流程： 确认收货-申请退货-客服审核通过-用户寄回商品-仓库签收验货-退款审核-退款完成； </p>
                                <p data-v-6867108e="">
                                    4.因小兔鲜儿产生的退货，如质量问题，退货邮费由小兔鲜儿承担，退款完成后会以现金券的形式报销。因客户个人原因产生的退货，购买和寄回运费由客户个人承担。 </p>
                            </div>
                        </div>
                    </div>
                    <div class="goods-aside" data-v-b185dbf4="">
                        <div class="goods-hot" data-v-3e75e67a="" data-v-b185dbf4="">
                            <h3 data-v-3e75e67a="">24小时热销榜</h3>
                            <div data-v-3e75e67a=""><a href="#/product/3996270" class="goods-item" data-v-1089b770=""
                                    data-v-3e75e67a=""><img
                                        src="https://yanxuan-item.nosdn.127.net/59b98ddea6422e71de8cec507865984f.png"
                                        alt="" data-v-1089b770="">
                                    <p class="name ellipsis" data-v-1089b770="">超能装多功能出行胸包</p>
                                    <p class="desc ellipsis" data-v-1089b770="">小身材，大容量，时尚出行</p>
                                    <p class="price" data-v-1089b770="">¥49.00</p>
                                </a><a href="#/product/3997974" class="goods-item" data-v-1089b770=""
                                    data-v-3e75e67a=""><img
                                        src="https://yanxuan-item.nosdn.127.net/8f0c15f981c5cbcb1aa17215a259fa62.png"
                                        alt="" data-v-1089b770="">
                                    <p class="name ellipsis" data-v-1089b770="">入门首选，语音播报电子血压计</p>
                                    <p class="desc ellipsis" data-v-1089b770="">全程语音指导，一键测量，监测心率，贴心守护爸妈健康</p>
                                    <p class="price" data-v-1089b770="">¥109.00</p>
                                </a><a href="#/product/3998535" class="goods-item" data-v-1089b770=""
                                    data-v-3e75e67a=""><img
                                        src="https://yanxuan-item.nosdn.127.net/ef01de6dfac9cc4c548f317f2feddafe.jpg"
                                        alt="" data-v-1089b770="">
                                    <p class="name ellipsis" data-v-1089b770="">学步更自如，婴幼童机能学步鞋4-6码</p>
                                    <p class="desc ellipsis" data-v-1089b770="">宝宝的第一双鞋，成长不将就</p>
                                    <p class="price" data-v-1089b770="">¥109.00</p>
                                </a></div>
                        </div>
                        <div class="goods-hot" data-v-3e75e67a="" data-v-b185dbf4="">
                            <h3 data-v-3e75e67a="">周热销榜</h3>
                            <div data-v-3e75e67a=""><a href="#/product/3996270" class="goods-item" data-v-1089b770=""
                                    data-v-3e75e67a=""><img
                                        src="https://yanxuan-item.nosdn.127.net/59b98ddea6422e71de8cec507865984f.png"
                                        alt="" data-v-1089b770="">
                                    <p class="name ellipsis" data-v-1089b770="">超能装多功能出行胸包</p>
                                    <p class="desc ellipsis" data-v-1089b770="">小身材，大容量，时尚出行</p>
                                    <p class="price" data-v-1089b770="">¥49.00</p>
                                </a><a href="#/product/3997974" class="goods-item" data-v-1089b770=""
                                    data-v-3e75e67a=""><img
                                        src="https://yanxuan-item.nosdn.127.net/8f0c15f981c5cbcb1aa17215a259fa62.png"
                                        alt="" data-v-1089b770="">
                                    <p class="name ellipsis" data-v-1089b770="">入门首选，语音播报电子血压计</p>
                                    <p class="desc ellipsis" data-v-1089b770="">全程语音指导，一键测量，监测心率，贴心守护爸妈健康</p>
                                    <p class="price" data-v-1089b770="">¥109.00</p>
                                </a><a href="#/product/3998535" class="goods-item" data-v-1089b770=""
                                    data-v-3e75e67a=""><img
                                        src="https://yanxuan-item.nosdn.127.net/ef01de6dfac9cc4c548f317f2feddafe.jpg"
                                        alt="" data-v-1089b770="">
                                    <p class="name ellipsis" data-v-1089b770="">学步更自如，婴幼童机能学步鞋4-6码</p>
                                    <p class="desc ellipsis" data-v-1089b770="">宝宝的第一双鞋，成长不将就</p>
                                    <p class="price" data-v-1089b770="">¥109.00</p>
                                </a></div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </div>
</template>
<script>
import {findGoods} from '../api/home'
import {findHot}  from '../api/home'
import {findRelevant} from '../api/home'
export default {
    component:{
        findGoods,
        findHot,
        findRelevant
    },
    data(){
        return{
           showBlackDiv:false
        }
    },
    methods:{
        enterImg(event){
            //创建小盒子
            this.showBlackDiv=true
             event.target.onmousemove=(event)=>{
                var blackdiv=this.$refs.blackdiv
                var box=this.$refs.box
                //鼠标向右移动控制小黑块移动
                if(event.clientX > 100+ box.offsetLeft && event.clientX < box.offsetLeft + box.offsetWidth){
                    blackdiv.style.left= event.clientX - box.offsetLeft +100
                }
                //鼠标向上移动控制小黑块移动
                if(event.pageY > box.offsetTop + 100 && event.pageY < box.offsetTop + box.offsetHeight){
                    blackdiv.style.top=event.clientY -box.offsetTop +100
                }
                //放大镜的效果
                this.left=-parseInt(2*blackdiv.style.left)
                this.top=-parseInt(2*blackdiv.style.top)

            }
        
            //鼠标离开的
            event.target.ommouseleave=(event)=>{
                this.showBlackDiv=false,
                event.target.onmousemove=null

            }
}
       
}}
</script>
<style>
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
    transition: all .4s;
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
    z-index: 500;
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
.slider>a[data-v-51374c56] {
    width: 240px;
    text-align: center;
}
.xtx-carousel .carousel-item img[data-v-51374c56] {
    width: 100%;
    height: 100%;
}
.slider>a img[data-v-51374c56] {
    padding: 20px;
    width: 230px!important;
    height: 230px!important;
}
.goods-image .middle .layer[data-v-d1fd3ff6] {
    width: 200px;
    height: 200px;
    background: rgba(0,0,0,.2);
    left: 0;
    top: 0;
    position: absolute;
}
.goods-image .small[data-v-d1fd3ff6] {
    width: 80px;
}
.goods-image .small li.active[data-v-d1fd3ff6], .goods-image .small li[data-v-d1fd3ff6]:hover {
    border: 2px solid #27ba9b;
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
    width: 68px;
    height: 68px;
    margin-left: 12px;
    margin-bottom: 15px;
    cursor: pointer;
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
}
.goods-sku dl dt[data-v-3d8edf08] {
    width: 50px;
    color: #999;
}
.goods-sku dl dd[data-v-3d8edf08] {
    flex: 1;
    color: #666;
}
.goods-sku dl dd>img[data-v-3d8edf08] {
    width: 50px;
    height: 50px;
    border: 1px solid #e4e4e4;
    margin-right: 10px;
    cursor: pointer;
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
.xtx-numbox .numbox>a[data-v-3abe1060]:first-of-type {
    border-right: 1px solid #e4e4e4;
}
.xtx-numbox .numbox>a[data-v-3abe1060] {
    width: 29px;
    line-height: 28px;
    text-align: center;
    background: #f8f8f8;
    font-size: 16px;
    color: #666;
}
.xtx-numbox .numbox>a[data-v-3abe1060] {
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
button, select {
    text-transform: none;
}
button, input, optgroup, select, textarea {
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
    background: #fff;
    text-align: center;
    border: 1px solid transparent;
    border-radius: 4px;
    cursor: pointer;
}
.ellipsis, .ellipsis-2 {
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
    background: rgba(0,0,0,.2);
    color: #fff;
    border-radius: 50%;
    position: absolute;
    top: 228px;
    z-index: 2;
    text-align: center;
    line-height: 44px;
    opacity: 0;
    transition: all .5s;
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
    background: rgba(0,0,0,.2);
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
    transition: opacity .5s linear;
}
.xtx-carousel .carousel-indicator span~span[data-v-51374c56] {
    margin-left: 12px;
}
.xtx-carousel .carousel-indicator span[data-v-51374c56] {
    display: inline-block;
    width: 12px;
    height: 12px;
    background: rgba(0,0,0,.2);
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
.goods-tabs nav a>span[data-v-5dc77adc] {
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
.goods-detail>img[data-v-4d87a5c2] {
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
    transition: all .5s;
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
.ellipsis, .ellipsis-2 {
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

</style>