<template>
   <div class="wrap">
    <form action="">
     账号：<br>
     <input type="text" placeholder="请填写手机号或者邮箱" v-model="val1" @blur="sjh" v-if="sj"><br>
     密码：<br>
     <input type="password" placeholder="请输入密码" v-model="val2" @blur="mm" v-if="sjj"><br>
     </form>
     <div class="photo">
     图片验证码: <br>
    <div class="block ">
         <span class="demonstration  fl "></span>
         <el-slider v-model="value1"></el-slider>
         <i class="el-icon-lock fr "></i>
    </div>
    <div class="fl">
        <input type="checkbox" v-model="rember"><span>七天免登录</span>
        
        </div>
       <span class="fr">忘记密码?</span>
    </div>
     <div class="submit" >
    <input type="text" placeholder="登录" @click="login">
    </div>
   </div>
</template>
<script>
export default {
   name: '',
   components: {
     
   },
  
   data() {
     return {
       value1: 0,
       val1:'',
       val2:'',
       sj:true,
       sjj:true,
       rember:false
     }
   },
   computed: {
     
   },
   watch: {
     
   },
   mounted() {
     if(this.getCookie('val1')){
      this.val1=this.getCookie('val1')
      this.val2=this.getCookie('val2')
      this.rember=true
     }
   },
   methods: {
      login(){
           if(this.rember){  //记住密码
            
            var d=new Data()
            d.setSeconds(d.getSeconds()+30)
            document.cookie = 
            "val1=" +this.val1 +"; expires =" +d.toUTCString()
            "val2=" +this.val2 +"; expires =" +d.toUTCString()
      }else{
         this.setCookie('val1',null,-1)
         this.setCookie('val2',null,-1)
      }
    },  
      
      
    
   setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    var expires = "expires="+ d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
} ,
    getCookie(cname) {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for(var i = 0; i <ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
         }
         if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
         }
     }
    return "";
     } 
   
   }
};
</script>
<style lang='scss' scoped>
.wrap{

    margin: 130px ;
    font-size: 20px;
    // text-align: center;
}
 input{
    width: 400px;
    height: 45px;
    background-color: rgb(225, 225, 173);
    margin: 20px;
    border-radius: 10px;
    padding-left: 10px;

 }
 .photo{
    width: 100%;
 }
 .photo input{
    width: 20px;
    height: 20px;
 }
 .submit input{
    width: 400px;
    height: 45px;
    background-color: green;
    
 }
::-webkit-input-placeholder{
    color: #fff;
 }
 .block{
    width: 320px;
 }

</style>