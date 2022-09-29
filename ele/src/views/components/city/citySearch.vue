<template>
    <div>
        <input type="text" v-model="val">
        <button @click="search">提交</button>
        <ul v-if='showList'>
            <li v-for="item in list" @click="setHistory(item.address)">
                {{item.address}}
            </li>
        </ul>
     
     <div v-else>
       <p>历史记录</p>
       <ul>
            <li v-for='item in history'>{{item}}</li>
      </ul> 
     </div>
      
    </div>
</template>
<script>
import axios from 'axios'
export default {
    data(){
        return{
            id:'',
            val:'',
            list:[],
            history:[],
            showList:false

        }
    },
    methods:{
         setHistory(address){
            // 存本地
            if(this.history.indexOf(address)==-1){
                this.history.push(address);
                // 如果  this.history 里面有 没有address的话  才存！
                localStorage.history = JSON.stringify(this.history);
            }
           
         },
        search(){
             axios.get(`http://elm.cangdu.org/v1/pois?type=search&city_id=${this.id}&keyword=${encodeURI(this.val)}`).then(res=>{
              this.list = res.data;
              if(this.list.length>0){ // 搜到了地址
                this.showList = true; // 显示搜素列表
              }
            })
        }
    },
    mounted(){
        console.log(this.$route.params);
        this.id = this.$route.params.id;
        // 进入页面就去判断有没有历史记录
         if(localStorage.history){
              this.history  =  JSON.parse(localStorage.history)
        }
       
    }   
}
</script>