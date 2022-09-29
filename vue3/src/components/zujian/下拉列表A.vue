<template>
 <div>
    
    <div class="box-list" @click="clk()">
        <ul  v-show="show">
            <li v-for="(item,index) in arr">{{item}}</li>
        </ul>
 </div>
 </div>
</template>
<script>
    import B from './下拉列表B'
   export default{
       components:{
            B
       },
    data(){
        val:'';
        name:'';
        show:false;

        return{

             arr: [
                {name:'选项1', val:'黄金糕'},
                {name:'选项2', val:'双皮奶'},
                {name:'选项3', val:'蚵仔煎'},
                {name:'选项4', val:'北京烤鸭'},
                {name:'选项5', val:'龙须面'},

            ]
        }
    },
    mothods:{
        clk(){
            this.show=true;

        },

    }

}

</script>
<style>
input{
    width: 200px;
    height: 20px;
    position: relative;
}
li{
    list-style: none;
}
.box-list{
    width: 200px;
    height: 300px;
    border:1px solid #ccc;
    position: absolute;
    top:50px;
}
</style>