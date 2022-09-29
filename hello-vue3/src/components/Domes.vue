<template>
  <div>
    <div class="bigBox">
      <ul>
       
        <li class="images">
          <img class="smallimg" src="../assets/百度图片.jpg" alt="" />
        </li>
    
        <li class="inputt" :class = "{'border-style':borderStyle,'border-bottom':bottomStyle}">
          <input
            type="text"
            class="inputs" 
            @focus="focusHandle"
            @blur="blurHandle"
            @input="inputHandle"
            v-model="val"
            @keydown="keydownHandle($event)"
          />
          <button>百度一下</button>
          <span></span>
        </li>
        <!-- 数据列表 -->
        <li class="lowerList"  v-show="showContent">
          <ul class="lowerList_ul">
            <li :class="{ 'li-hover' :mouseIndex==index}"
              class="lowerList_li"
              @mouseover = "mouseoverHandle(index)"
              v-for="(item, index) in arr"
              :key="index"
           
            >
              {{ item.q }}
            </li>
          </ul>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import http from 'axios';  // ajax
export default {
  data() {
    return {
      arr: [
        { q: "翻译", sa: "h_1", type: "his_normal" },
        { q: "Vue.js", sa: "h_2", type: "his_normal" },
        { q: "安居客", sa: "h_3", type: "his_normal" },
        { q: "唐山芜湖", sa: "h_4", type: "his_normal" },
        { q: "超级英雄", sa: "h_5", type: "his_normal" },
        { q: "唐山大爆炸", sa: "h_8", type: "his_normal" },
        { q: "金陵十三钗", sa: "h_7", type: "his_normal" },
      ],
      showContent:false,
      borderStyle:false,
      val:'',
      bottomStyle:false,
      mouseIndex:-1

    };
  },
  mounted() {
    http.get('http://pcapi-xiaotuxian-front-devtest.itheima.net/home/category/head').then(res=>{
        debugger;
    })
  },
  methods: {
    focusHandle(){
      // 边框变成蓝色
      // console.log(123);
      this.borderStyle = true;
      // 当输入框不为空时，显示数据列表
      if(this.val){
         this.showContent = true;
         this.bottomStyle = true;
      }
      
    },
    blurHandle(){
       this.borderStyle = false;
        // 隐藏列表 
         this.showContent = false;
         this.bottomStyle = false;
    },
    keydownHandle(e){
      // 判断按的是上 还是 下
      if(e.key=='ArrowDown'){
        if(this.mouseIndex==this.arr.length-1){
           this.mouseIndex = 0;
        }else{
         this.mouseIndex ++; 
        }
      }
      if(e.key=='ArrowUp'){
        console.log('ArrowUp');
         if(this.mouseIndex<=0){ // 0的时候 在按上
           this.mouseIndex = this.arr.length-1;  // 5
        }else{
         this.mouseIndex --; 
        } 
      }
      this.val = this.arr[this.mouseIndex].q;
    },
    inputHandle(){
      if(this.val){
        this.showContent = true;
        this.bottomStyle = true;
      }
    },
    mouseoverHandle(index){
      this.mouseIndex = index;
    }
  },
  // 在事件监听的函数中监听val的变化
  watch: {
    
  },
};
</script>

<style scoped >
.border-style{
  border: 2px solid #4e6ef2 !important;
}
.li-hover{
  color:#4e6ef2;
  background-color: #ccc;
}
.border-bottom{  
   border-bottom: none !important;
   border-bottom-left-radius:0px !important;
   border-bottom-right-radius:0px !important;
}

.lowerList_li {
  width: 100%;
  height: 15%;
  line-height: 74px;
  padding-left: 10px;
  font-size: 30px;
}
.lowerList_ul {
  width: 100%;
  height: 100%;
  overflow: hidden;
}
.bigBox {
  width: 50%;
  height: 800px;
  margin: 200px auto;
}
.images {
  width: 100%;
  height: 40%;
  padding: 0 28%;
}
.smallimg {
  width: 100%;
}
.inputt {
  width: 100%;
  height: 100px;
  border: 2px solid #c4c7ce;
  margin-top: 30px;
  border-radius: 15px;
  position: relative;
}
.inputs {
  width: 80%;
  height: 100%;
  float: left;
  font-size: 35px;
  border: 0 solid #000;
  border-radius: 15px;
}
button {
  width: 20%;
  height: 100%;
  float: right;
  border: 0 solid #000;
  background: #4e6ef2;
  color: #fff;
  border-radius: 0 15px 15px 0;
  font-size: 35px;
}
span {
  width: 50px;
  height: 50px;
  /* background: url("../assets/相机的精灵图.jpg") 0 -354px; */
  background-size: 100%;
  position: absolute;
  right: 300px;
  top: 30px;
}
.lowerList {
  width: 80%;
  height: 500px;
  border: 2px solid #4e6ef2;
  border-top: none;
}
.active {
  background: rgb(238 238 244);
  color: rgb(90, 111, 230);
}
</style>