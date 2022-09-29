<template>
    <div class="view">
        <!-- 面包屑 -->
        <div class="mianbaoxie">
            <span>首页</span> 
            <i>></i>
            <span @change="changeTitle">{{$store.state.catagroy.title}}</span>
        </div>
        <app-swiper></app-swiper>
        <div class="category-all"></div>

        <div class="category-all"></div>
        <!-- 
            list: 
            [
                {name: "T恤/polo/衬衫",goods:[{id: "4007887", name: "度假风儿童", desc: "宽松短款版", price: "79.00"}]},
                {name: },
            ]
         -->
        <category-goods v-for = 'item in list' :name="item.name" :goods="item.goods"></category-goods>
    </div>
</template>
<script>
import appSwiper from '@/components/app-swiper.vue';
import categoryGoods from '@/views/category/components/category-goods'
import {findCategory} from '@/api/category'
   export default {
        components:{
            appSwiper,
            categoryGoods
        },

        data(){
            return{
                title:'',
                list:[]
            }
        },
     
        mounted() {
           
            // 使用$watch 监听 路由变化
            this.$watch(
               
                () => {
                    // console.log(this.$route.params.id);
                    // 对路由变化做出响应...
                    findCategory(this.$route.params.id).then(res=>{
                      
                        if(res.msg== '操作成功'){
                            this.list = res.result.children;
                            console.log(this.list);
                        }
                    })
                }
            )
        },
       
        
   }
</script>
<style lang="scss">
    .mianbaoxie{
        padding: 25px 10px;
        font-size: 13px;
        color: #666;
    }
    .view{
        position: relative;
    }

    .category-all{
          width: 100%;
          height: 457px;
    }
    
 
</style>