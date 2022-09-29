<template>
    <div>
        <div class="swiper">
            <div class="swiper-wrapper">
                <div class="swiper-slide" v-for="item in bannerList">
                    <img :src="item.imgUrl" alt="">
                </div>
                <div class="swiper-slide"></div>
                <div class="swiper-slide"></div>
            </div>
            <!-- 如果需要分页器 -->
            <div class="swiper-pagination"></div>

            <!-- 如果需要导航按钮 -->
            <div class="swiper-button-prev"></div>
            <div class="swiper-button-next"></div>

            <!-- 如果需要滚动条 -->
            <!-- <div class="swiper-scrollbar"></div> -->
        </div>
        <div class="container">
            <!-- 侧边栏 -->
            <div class="side-bar fl">
                <ul>
                    <li v-for="(item, index ) in  tabList" :key="index"
                     @mouseover="mouseover(index)" @mouseout="mouseout">
                        <span>{{ item.name }}</span>
                        <span>{{ item.children[0].name }}</span>
                        <span>{{item.children[1]?item.children[1].name:''}}</span>
                        <!--侧边 右边盒子 -->

                        <div class="side-box fr" v-show="c==index" >
                            <div class="fenlei">
                                <span>分类推荐</span>
                                <span>根据您的购买或浏览记录推荐</span>
                            </div>
                            <ul>
                                <li v-for="(b, c) in item.goods" :key="c" >
                                    <img :src="b.picture" alt="">
                                    <div class="info">
                                        <p class="name ellipsis-2">{{ b.name }}</p>
                                        <p class="desc ellipsis">{{ b.desc }}</p>
                                        <p class="price">{{ b.price }}</p>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </li>
                </ul>
            </div>

        </div>
    </div>
</template>
<script>
import axios from 'axios'
export default {
    data() {
        return {
            bannerList: [],
            tabList: [],
            c:-1
        
        }
    },
    methods: {
        swiperInit() {

            // console.log(Swiper);
            var mySwiper = new Swiper('.swiper', {
                // direction: 'vertical', // 垂直切换选项
                loop: true, // 循环模式选项
                keyboard: true,
                freeMode: true,

                // 如果需要分页器
                pagination: {
                    el: '.swiper-pagination',
                },

                // 如果需要前进后退按钮
                navigation: {
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                },

                // 如果需要滚动条
                scrollbar: {
                    el: '.swiper-scrollbar',
                },
            })
        },

        mouseover(index){
            this.c=index
        
        },
        mouseout(){
            this.c=-1
        }

    },
    mounted() {
        axios
            .get('https://apipc-xiaotuxian-front.itheima.net/home/banner')
            .then((res) => {
                if (res.data.msg == '操作成功') {
                    this.bannerList = res.data.result;
                    this.$nextTick(() => {
                        this.swiperInit()
                    })


                }

            })
     axios
    .get('https://apipc-xiaotuxian-front.itheima.net/home/category/head')
    .then((res)=>{
      if(res.data.msg=='操作成功'){
        this.tabList=res.data.result;

       
      }
    })


    }
}


</script>
<style>
.swiper {
    width: 1240px;
    height: 500px;
    position: relative;
    margin: 0 auto;
}

.swiper-wrapper img {
    position: absolute;
    left: 0;
    top: 0;
}

/* .swiper-button-prev{
    margin-left: 250px;
} */

.swiper-button-prev,
.swiper-button-next {
    width: 50px;
    height: 50px;
    background: rgba(0, 0, 0, .5);
    border-radius: 50%;
    font-size: 5px;
    color: aliceblue;
}

.container {
    width: 1240px;
    height: 500px;
    margin: 0 auto;
    /* background-color: #9ea8a5; */
    position: absolute;
    top: 185px;
    left: 115px;
    z-index: 1;
   

}

.side-bar {
    width: 250px;
    height: 500px;
    
    background: rgba(0, 0, 0, .8);
}

.fenlei span:nth-of-type(1) {
    /* font-size: 16px;
    font-weight: 800; */
    font-size: 20px;
    font-weight: 400;
    line-height: 80px;
    margin-right: 5px;
}

.fenlei span:nth-of-type(2) {
    font-size: 16px;
    color: #666;
}

.fenlei {
    font-size: 20px;
    font-weight: 400;
    line-height: 80px;
    width: 960px;
    height: 80px;
    background-color: #ccc;
}

.side-bar ul>li {
    width: 250px;
    height: 50px;
    color: #fff;
    margin-right: 4px;
    /* padding-top: 20px; */
    padding-left: 25px;
    height: 50px;
    line-height: 50px;
    box-sizing: border-box;

}
.side-bar ul>li:hover{
    /* padding-top: 20px; */
    padding-left: 25px;
    background: #27ba9b;
};

.side-bar ul>li span{
    margin-right: 5px;
}

.side-box {
    width: 990px;
    height: 500px;
    border: #999;
    z-index: 10000;
    margin: 0 auto;
    background-color: #cf4444;
    position: absolute;
    left:250px;
    top: 0;

}

.side-box ul >li {
    width: 310px;
    height: 120px;
    border: 1px solid #ccc;
    margin-right: 15px;
    margin-bottom: 15px;
    border-radius: 4px;
    background: #fff;

}
.side-box ul >li:hover{
    background: #e3f9f4;;
}

.side-box ul {
    display: flex;
    flex-wrap: wrap;
}

.side-box ul li {
    display: flex;
    justify-content: space-between;
}

.side-box ul img {
    width: 95px;
    height: 95px;
}

.info {
    padding-left: 10px;
    line-height: 24px;
    width: 190px;
}

.name {
    font-size: 16px;
    color: #666;
}

.ellipsis-2 {
    word-break: break-all;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
}

.desc {
    color: #999;
}

.ellipsis {
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
}

.price {
    font-size: 22px;
    color: #cf4444;
}
</style>