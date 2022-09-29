<template>
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
            <!-- < class="swiper-scrollbar"></div> -->
        </div>
</template>
<script>
// import axios from 'axi
import {findBanner} from '@/api/home'
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
        // axios
        //     .get('https://apipc-xiaotuxian-front.itheima.net/home/banner')
        //     .then((res) => {
        //         if (res.data.msg == '操作成功') {
        //             this.bannerList = res.data.result;
        //             this.$nextTick(() => {
        //                 this.swiperInit()
        //             })


        //         }
        //    })
        findBanner().then((res)=>{
       if (res.msg == '操作成功') {
                    this.bannerList = res.result;
                    this.$nextTick(() => {
                        this.swiperInit()
                    })


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

</style>