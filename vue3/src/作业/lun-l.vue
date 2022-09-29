<template>
    <div class="tu">
        <div class="button">
        <button @click="clk">top</button>
        <button @click="click">right</button>
        <button>bottom</button><button>left</button>
        <div class="guanli">
            <ul>
            <li v-for="(item,index) in tbp" @click="clkHandle"> {{item.name}}</li>
            </ul>
            <div class="gray">
                <div></div>
            </div>
            <span>{{val}}</span>
        </div>
    </div>
    <lun-l :tabList=" tabList"></lun-l>
    </div>

</template>
<script>
export default{
   
    data(){
        return{
            backgroundColor:false,
           
        }
    },
    methods:{
        clk(){
            this.backgroundColor=true;
            
        },
        clkHandle(item){
            this.$emit('send',item)
        }

    }
}
</script>
<style>
button{
    width: 50px;
    height: 30px;
   
}
.guanli{
    margin: 30px 0;
}
.guanli span{
    margin-right: 30px;
}
.tu{
    width: 600px;
    height: 500px;
     margin: 0 auto;
      }
.gray{
        width:80px;
        height: 2px;
        margin-top: 30px;
        background-color: #ccc;
}
.gray div{
    border-bottom: 2px solid #409eff;
}
/* .backgroundStyle{
    background-color: #0b4ba9;
} */
.active{
    background-color: #176ae8;
}
</style>