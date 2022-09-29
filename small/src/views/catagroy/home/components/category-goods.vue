<template>
    <div class="goods">
        <div class="goods-title">
            {{name}}
            <a href="" class="more"> 查看全部</a>
        </div>
        <div class="tag">
            温暖柔软 品质之选
        </div>
        <div class="body">
            
                <router-link to="/product" class="goods-item" v-for="item in goods" >
                    <img :src="item.picture" alt="">
                    <p class="name ellipsis" >{{item.name}}</p>
                    <p class="desc ellipsis" >{{item.desc}}</p>
                    <p class="price">¥{{item.price}}</p>
                </router-link>
        </div>
    </div>
</template>
<script>
   export default {
    props:['goods','name']
   }
</script>
<style scoped lang="scss">
.goods {
    width: 100%;
    height: 457px;
    background: white;
}
.ellipsis, .ellipsis-2 {
     text-overflow: ellipsis; 
    overflow: hidden;
        white-space: nowrap;
}
.goods-item p {
    padding-top: 10px;
}
.goods-title {
    height: 100px;
    width: 100%;
    font-size: 28px;
    color: #666;
    font-weight: 400;
    text-align: center;
    line-height: 100px;
    position: relative;
}

.tag {
    text-align: center;
    color: #999;
    font-size: 20px;
    position: relative;
    top: -20px
}

.more {
    position: absolute;
    top: 20px;
    right: 20px;
    font-size: 20px;
    color: #999;

}

.body {
    display: flex;
    justify-content: flex-start;
    flex-wrap: wrap;
    padding: 0 65px 30px;
}

.goods-item{
    display: block;
    width: 200px;
    padding: 20px 5px;
    text-align: center;
    transition: all .5s;
}
.goods-item img{
    width: 160px;
    height: 160px;
}
.goods-item .name {
    font-size: 16px;
    color:#666;
}

.goods-item .desc {
    color: #999;
    height: 29px; 
}
.goods-item .price {
    color: #cf4444;
    font-size: 20px;
}
</style>