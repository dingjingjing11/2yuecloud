<template>

    <ul class="ul">
                <li @click='goodsSort("mr")'>默认</li>
                <li @click='goodsSort("xiaoliang")'>销量</li>
                <li @click='goodsSort("price")'>价格</li>
                <li @click='goodsSort("time")'>上新</li>
                <li @click="qh">切换</li>
            </ul>
            <showB ></showB>
</template>
<script>
export default{
    data(){
        return{
            tabIndex:0
        }
    },
    methods:{
        goodSort(index,str){
            this.tabIndex=index;
            this.$emit('send',str)
        },
        qh(){
            this.$emit('sendBool')
        }
    }
}
</script>
<style>

 .ul{
      height: 50rem;
     line-height: 25rem;
     display: flex;
     justify-content: space-around;
     border-bottom: 1px solid;
 }
 .ul li{
     margin-left: 25rem;
     width: 45%;
     padding: 10rem;
     border: 1px solid #000;
     background: #fff;
     margin-top: 10rem;
 }
 ul li:hover{
     border-bottom: 1px solid #ff5500;
 }
</style>
