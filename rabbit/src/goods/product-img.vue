<template>
    <div>
        <div class="box-img" ref="box" @mouseenter="enterImg($event)">
            <img  src="https://yanxuan-item.nosdn.127.net/34408ad262b83e68c98cd7b6855bb1e4.jpg" width="400px" alt="">
            <div v-show="showBlackDiv" ref="blackdiv"  class="black-div"></div>

             <div class='box-big-img' v-show="showBlackDiv">
                  <img :style="{'margin-left':left+'px','margin-top':top+'px'}" src="https://yanxuan-item.nosdn.127.net/34408ad262b83e68c98cd7b6855bb1e4.jpg" alt="">
             </div>
        </div>
        <div>
            <!-- 5个小图 -->
        </div>

        <div></div>
        <button @click="addCart">加入购物车</button>
    </div>
</template>
<script>
   import axios from 'axios';
    // import {addCart} from '@/api/cart.js';
 
   export default {
    data(){
        return{
            showBlackDiv:false,
            left:0,
            top:0
            
        }
    },
    methods: {
        enterImg(event){
            this.showBlackDiv = true;
            console.log(event.target);
             // 1.创建出一个小盒子,并跟随鼠标移动
            event.target.onmousemove = (event)=>{
                var blackdiv =  this.$refs.blackdiv;// 小黑快
                var box = this.$refs.box; // 绑定鼠标移入的 大盒子
                //     鼠标的坐标  >  黑块宽的一半 + 大盒子的距离屏幕的边距
                //并且 鼠标的坐标  <  大盒子的距离屏幕的边距 + 大盒子自身宽 - 小黑块宽的一半
                if(event.clientX  > 100 + box.offsetLeft && event.clientX < box.offsetLeft+box.offsetWidth - 100 ){ // 鼠标相对大盒子的距离  大于小黑快的 宽
                   blackdiv.style.left =  event.clientX - box.offsetLeft -100   +'px' 
                }
                // event.pageY > 大盒子的上边距 + 小黑块高的一半  并且 event.pageY <  大盒子的上边距+300
                if(event.pageY > box.offsetTop + 100 &&event.pageY<box.offsetTop + 300){
                   blackdiv.style.top =  event.pageY - box.offsetTop -100  +'px'  
                }     
                   // 2.控制大图的位置
                this.left = - 2*parseInt( blackdiv.style.left) ;
                this.top = - 2*parseInt( blackdiv.style.top) ;
            }
            event.target.onmouseleave = ()=>{
                event.target.onmousemove = null;
                this.showBlackDiv = false;
            }
           
        

        },
        addCart(){
            // 木耳边领-姜黄  120cm   
            // addCart({skuId: "300238690", count: 1}).then(res=>{
            // })
            console.log(this.$store.state.login.userInfo.token);
            var token = this.$store.state.login.userInfo.token;
            
            axios({
                method:'post',
                url:'http://pcapi-xiaotuxian-front-devtest.itheima.net/member/cart',
                data:{skuId: "300238690", count: 1}, // 请求参数
                headers:{Authorization:'Bearer '+ token },
                success:(res)=>{
                    console.log(res);
                    
                }
            })
        }
    },
   }
</script>
<style scoped lang="scss">
    .black-div{
        width: 200px;
        height: 200px;
        background-color: black;
        opacity: 0.3;
        position: absolute;
        cursor: move;

    }
    .box-img img ,div{
        float: left;
    }
    .box-img{
     
        height: 600px;
        position: relative;
       
    }
    .box-big-img{
        position: absolute;
        left: 400px;
        width: 400px;
        height: 400px;
        overflow: hidden;
        margin-left: 10px;
        img{
            width: 200%;
        }
    }
</style>