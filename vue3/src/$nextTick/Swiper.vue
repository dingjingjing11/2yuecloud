<template>
    <div>

        <div>
            <div class="swiper">
                <div class="swiper-wrapper">
                    <div class="swiper-slide" v-for="item in bannerList">Slide 1
                    <img :src="item.imgUrl" alt="">
                    </div>
                    <div class="swiper-slide">Slide 2</div>
                    <div class="swiper-slide">Slide 3</div>
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
    </div>
</template>
<script>
// import axios from 'axios'
export default {
    data(){
        return{
            bannerList:[]
        }
    },       

   methods:{
    
    swiperInit(){  

        // console.log(Swiper);
        var mySwiper = new Swiper('.swiper', {
            direction: 'vertical', // 垂直切换选项
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
    }
     },
    
     mounted() {
        axios
        .get ('https://apipc-xiaotuxian-front.itheima.net/home/banner')
        .then((res)=>{
            if(res.data.msg=='操作成功'){
                this.bannerList=res.data.result;
                this.$nextTick(()=>{
                    this.swiperInit()
                })
            }
        })
     }

}
</script>
<style>
.swiper{
    width: 600px;
    height: 300px;
}
</style>