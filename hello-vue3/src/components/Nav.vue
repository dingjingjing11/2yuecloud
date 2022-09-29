<template>
  <div id="box">
   <ul>
   <li v-for="(item,index ) in arr" @click="click(index)" :key="index" :class="{active:index==tabIndex}">{{item}}</li>
   </ul>
  </div>
</template>

<script>

export default {

  data(){
    return{
      arr:['新闻','娱乐','体育'],
      tabIndex:0,

    }


  },
  methods:{
    click(index){
      this.tabIndex=index
    }
  },
  //生命周期
  beforeCreate(){ //组件创建前
    console.log('beforeCreate' +this.tabIndex);
   
  },
  created(){
    console.log('create 组件创建完成'+this.tabIndex);
   console.log( document.querySelector('#box')); 
  },
  beforeMount(){
    console.log('beforeMount  挂载之前');
    console.log(document.querySelector('#box')); 
  },
  mounted(){
    console.log('mounted  挂载完成');
    console.log(document.querySelector('#box')); 
  },
  beforeUpdate(){// 数据更新之前
    console.log('beforeUpdate  数据更新之前');
  },
  updated(){
    console.log('updated data中的数据更新完成');
  },
  beforeDestroy(){
    console.log('beforeDestroy 组件销毁之前');
  },
  destroyed(){
    console.log('destroy 组件销毁');
  }

}

</script>

<style scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
li{
  list-style: none;
  float: left;
  width: 80px;
  height: 30px;
}
.active{
  background-color: aquamarine;
}
p{
    color:aquamarine
}
</style>
;