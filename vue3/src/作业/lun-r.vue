<template>
    <div>
        <div class="button">
            <button @click="click" >right</button>
        </div>
        <div class="guanli">
            <ul ref="ul">
            <li v-for="(tab,index) in tablist" :key="index" 
             > {{tab}}</li>
            </ul>
            <div class="gray">
                <div :style="{width:w+'px',left:l+'px'}"></div>
            </div>
            <span>{{tab.name}}</span>
        </div>
    </div>
</template>
<script>

    export default{
        
        data(){
            return{
                w:80,
                l:0,
                tabList:[
                   
                    '用户管理',
                    
                    '配置管理',
                    
                   '角色管理',
                   
                   '定时任务补偿'],
                  
        methods:{
            changeTab(tab){
                this.tablistIndex=tabList.index;

            }
        }
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

</style>