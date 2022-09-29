<template>
    <div id="app">
    
     <div class="search-box" >
        <span class="inp-box" >
            <input type="text" class="inp" :class="{'border-style':boderStyle,'border-bottom':bottomStyle}"
            @focus="focusHandle" 
            @blur="blurHandle"
            @input="inputHandle"
            v-model="val"
            @keydown="keydownHandle($event)"
            >
            <i class="qk"></i>
        </span>
    

        <div class="content" v-show="showContent">
           <ul>
           <li :class="{'li-hover':mouseIndex==index}"
           v-for="(item,index) in arr" :key="index"
           @mouseover="mouseoverHandle(index)"></li>
        
           <li></li>
           <li></li>
           <li></li></ul>
        </div>
    </div>
    
    
    </div>
</template>
<script>

    export default {
        data(){
            return{
                style:'',
                val:'',
                showContent:false,
             boderStyle:false,
             bottomStyle:false,
             mouseIndex:-1,
             arr:[{name:'苹果'},{name:'苹果13'},{name:'英雄联盟'},{name:'苹果13pro'},{name:'苹果语言怎么改回中文'}]


            }
           
        },
         mothods:{
            focusHandle(){
                this.boderStyle=true;
                this.bottomStyle=true
            },
            blurHandle(){
                this.boderStyle=false;
                this.bottomStyle=false
            },

                keydownHandle(e){
                    if(e.key=='ArrowDown'){
                        if(this.mouseIndex=this.arr.length-1){
                             this.mouseIndex =0;
                        }else{
                            this.mouseIndex ++
                        }
                       
                    }
                    if(e.key=='ArrowUp'){
                        if(this.mouseIndex<=0){
                            this.mouseIndex=this.arr.length-1
                        }else{
                            this.mouseIndex --;
                        }
                        
                    }
                    this.val=this.arr[this.mouseIndex].name
                },
                inputHandle(){
                    if(this.val){
                        this.showContent = true;
                        this.bottomStyle = true;
                    }
                },
                mouseoverHandle(index){
                    this.mouseIndex=index
                }
            },

    }

</script>
<style>
* {
    margin: 0;
    padding: 0;
}
li {
    list-style: none;
}
.border-style{
    border-bottom:2px solid #117be4;
}


textarea {
    resize:  none;
    width: 600px;
    height: 200px;
    border: 1px solid #000;
}

section img {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    vertical-align: middle;
    margin-right: 30px;
    margin-top: 20px;
}
button {
    margin-left: 200px;
    width: 50px;
    height: 30px;
    border: 1px solid #000;
}
.ul1 {
    padding: 30px 30px 30px 10px;
}

.ul1 img{
    width: 50px;
    height: 50px;
    border-radius: 50%;
    margin: 10px;
}

li {
    overflow: hidden;
}
.fl {
    float: left;
}

.ul1 div {
    width: 500px;
}
 li{
        list-style: none;
    }
    .search-box{
        position: relative;
    }
    .content{
        display: none;
        width: 479px;
        height: 500px;
        border: 2px solid blue;
        position: absolute;
        left:0px;
        top:42px;
        border-top: 0px;
    }
    .content >div{
        width: 96%;
        border-top:2px solid #ccc;
        margin:0 auto;
    }


</style>