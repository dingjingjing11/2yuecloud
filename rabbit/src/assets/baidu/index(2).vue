<template>
  <div class="id">
    <div class="mod-new-reg-content">
      <div class="new-reg-guide-login">
        <h3>欢迎注册</h3>
        <p>
          已有帐号？
          <span id="login_btn">登录</span>
        </p>
      </div>
      <div class="reg-content">

        <p class="reg-p">
          <span class="left-name">用户名</span>
          <input type="text" placeholder="请设置用户名"  autofocus
          
          :class="[yhmborderColor]"
          @focus="focusyhm"
          @blur="bluryhm"
          
          @input="inputyhm"
          >
          <span class="jg" v-show="yhm1" v-text="lenerror"></span>
          <span class="szh" v-show="yhm">设置后不可更改，中英文均可，最长14个英文或7个汉字
             <span class="xsj"></span> 
          </span>
          
          <i class="icon-check2" v-show="yhdh"></i>
        </p>

        <p class="reg-p">
          <span class="left-name">手机号</span>
          <input type="text" placeholder="可用于登录和找回密码" 
          :class="[bordercolorMobile]"
          @focus="focussjh"
          @blur="blursjh"
          v-model="mobile"
          @input="inputsjh"
          >
          <span class="jg" v-show="mobileError">手机号码格式不正确</span>
        </p>
        <p class="reg-p">
          <span class="left-name">密&emsp;码</span>
          <input type="password" placeholder="请设置登录密码"  autofocus
          :class="[pwdborderColor]"
          @focus="focusmmk"
          @blur="blurmmk"
          v-model="password"
          @input="inputmmk"
          >
          <span class="jg" v-show="pwdRegResult==false">密码格式不正确</span>
        </p>

        <p class="reg-p">
          <span class="left-name">验证码</span>
          <input type="text" placeholder="请输入验证码" 
          :class="{borderred:red==7,borderblue:red==8}"
          @focus="focusyzm"
          @blur="bluryzm"
          >
          <button>获取验证码</button>
          <i class="icon-check2" v-show="mmdh"></i>
        </p>
        <ul class="ul" v-show="pwdtitle">
            <li :class="{ulli:lengthred}">长度为8~14个字符</li>
            <li :class="{ulli:makeupred}">字母/数字以及标点符号至少包含2种</li>
            <li :class="{ulli:spacered}">不允许有空格、中文</li>
            <span></span>
        </ul>

        <div class="a"> <a href="javascript:;">注册</a></div>
        <p class="pass-form-item pass-form-item-isAgree">
          <input
            name="isAgree"
            id="TANGRAM__PSP_4__isAgree"
            type="checkbox"
            class="pass-checkbox-input pass-checkbox-isAgree"
            autocomplete="off"
          />
          <label for="TANGRAM__PSP_4__isAgree">阅读并接受</label>
          <a id="TANGRAM__PSP_4__user-agreement" target="_blank">《百度用户协议》</a>及
          <a id="TANGRAM__PSP_4__personal-agreement" target="_blank">《百度隐私权保护声明》</a>
          <span id="TANGRAM__PSP_4__isAgreeError" class="pass-item-error pass-item-error-isAgree"></span>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
    data() {
        return {
          username:'',
          yhmborderColor:'',
          lenerror:false,
          mobile:'',
          bordercolorMobile:'',
          mobileError:false,
          password:'',
          pwdborderColor:'',
          pwdtitle:false,
          lengthred:false,
          makeupred:false,
          spacered:false,
          pwdRegResult:true,

            yhm:false,
            yhdh:false,
            yhm1:false,
            red:false,
            sjh:false,
            sjhtext:false,
            mmk:false,
            mmk1:false,
            mmdh:false,
            mmksj:'',
            mmkmmk:'',
            mmkli:0,
            mmkall:false,
            moyhm:'',
            bool1:false
        }
    },
    methods:{
      //用户名聚焦
        focusyhm(){
            this.yhm=true;
           this.yhmborderColor='borderblue'
            //聚焦时错误提示关闭
            this.yhm1=false
        },
        bluryhm(){
             this.yhm=false;
             //根据输入内容决定颜色
             if(this.username==''){
            this.yhmborderColor='borderred'
             }else{
              //验证规则：用户名仅支持中英文，数字和下划线，切不能为纯数字  长度
              var reg1= /^[0-9_a-zA-Z\u4e00-\u9fa5]{1,14}$/ 
              var bool1 =reg1.test(this.username) // true时用户名仅支持中英文，数字和下划线
              console.log(reg1.test(this.username));
              var reg2= /^\d+$/  //找出纯数字不能通过
              var bool2 =!reg2.test(this.username)//true时纯数字
              var reg3 =/[\u4e00-\u9fa5]/
              // var len = this.username.match(reg3).length;  //中文长度
                var sum = 0
            for (var i = 0; i < username.length; i++) {
                if (/[\u4e00-\u9fa5]/.test(username[i])) {
                    sum += 2
                } else {
                    sum += 1
                }
            }
            var bool3 =sum <= 14        //判断长度
            if(bool1==false || bool2==false){
              //提示：
              this.yhm1=true
              this.lenerror='用户名仅支持中英文、数字和下划线,且不能为纯数字'
            }
            if(bool3==false){
              this.yhm1=true
              this.lenerror='用户名不能超过7个汉字或14个字符'
            }

             }
              
            //  if(this.bool1==true){
            //      this.red=0
            //      this.yhm1=false
            //      this.yhdh=true
            //  }else{
            //      this.red=1
            //      this.yhm1=true
            //      this.yhdh=false
            //  }
        },
        inputyhm(){
            var reg3 = /[\u4e00-\u9fa5]/g
             var matchres = this.moyhm.match(reg3)
             var bool
            if(matchres){ 
               var len = matchres.length;
                bool = len*2 + this.moyhm.length-len <=14; 
              this.bool1=bool
            }else{ 
                bool = this.moyhm.length<=14
                this.bool1=bool
            }
            console.log(this.bool1);
            
        },
        //手机号聚焦
        focussjh(){
          
           this.bordercolorMobile='borderblue'   //边框颜色变蓝
           this.mobileError=false   //错误提示关闭
        },
        blursjh(){
    //如果内容为空时
            if(this.mobile==''){
              //边框颜色为原来的颜色
               this.bordercolorMobile=''
            }else{
    // 输入内容时
              // 正则表达式：11位手机号
              var reg = /^1[3456789]\d{9}$/
              //如果输入不是11位手机号
              if(!reg.test(this.mobile)){
                // 提示的错误信息会出现
                this.mobileError=true
                //边框颜色变为红色
                this.bordercolorMobile='borderred'
              }else{

                this.bordercolorMobile=''
              }
            }  
        },
        inputsjh(){
            var str=this.mmksj;
            var reg = /^1[3456789]\d{9}$/
             var text = reg.test(str)
             if(text==true){
                    this.sjhtext=true
             }else if(text==false){
                 this.sjhtext=false
             }
            
        },

       
        focusmmk(){     //密码聚焦
            this.pwdborderColor='borderred'; // 边框
            this.pwdtitle=true
            this.pwdRegResult=false   
            //  this.mmk1=false
            //  this.mmk=true
            //  if(this.mmkall==true){
            //      this.red=6;
            //  }
        },
        
        blurmmk(){
          // 1.长度为8~14个字符  2.字母/数字以及标点符号至少包含2种  3.不允许有空格、中文
            this.pwdtitle=false  


            // if(this.password==''){
            //     this.mmdh=true
            //     this.red=0;
            // }else if(this.mmkall==false){
            // this.mmk1=true;
            //  this.mmdh=false
            // }
            // this.mmk=false
             
        },
        
         
        inputmmk(){
          //密码正在输入时的验证
          var regResult = true
          if(this.password !=''){
            var reg1= /[\u4e00-\u9fa5\s ]/
            //第三种情况  不允许有空格、中文
          var bool1=reg1.test(this.password)  //bool1  true 中文和空格
          // 第二种情况 的组合  字母/数字以及标点符号至少包含2种
          var reg2=/([a-zA-Z]+[0-9]+)/ | /([0-9]+[a-zA-Z]+)/  //数字加字母
          var reg3 = /[0-9]+[^0-9a-zA-Z]+/ | /[^0-9a-zA-Z]+[0-9]+/ //数字加标点
          var reg4 =/[^0-9a-zA-Z]+[a-zA-Z]+/ | /[a-zA-Z]+[^0-9a-zA-Z]+/   //字母加标点
          if(reg2.test(this.password)||reg3.test(this.password)|| reg4.test(this.password)){
            this.makeupred= false
          }else{
            this.makeupred=true
             regResult= false;
          }
          //第一种 情况   长度为8~14个字符
          if(this.password.length>=8 && this.password.length<=14){
            this.lengthred=false
          }else{
            this.lengthred=true
             regResult= false;
          }
          if(!bool1){
            this.spacered=false
          }else{
            this.spacered=true
             regResult= false;
          }

          }else{
           this.lengthred=false
           this.makeupred=false
           this.spacered=false
            regResult= false;
          }

        //     var reg1 =  /(?!^[0-9]+$)(?!^[A-z]+$)(?!^[^A-z0-9]+$)^.{8,14}$/
        //     var reg2 = /[\u4e00-\u9fa5 ]/
        //     var all=reg1.test(this.mmkmmk)
        //     var all2=reg2.test(this.mmkmmk)
        //    if(all){
        //        this.mmkli=0
        //        this.mmkall=true
        //    }else if(all2==false){
        //         this.mmkli=2
        //         this.mmkall=false
        //    }
            
         },
        focusyzm(){
            this.red=8
        },
        bluryzm(){
             this.red=0
        },
    }
};
</script>

<style  scoped>
.ulli{
    color: red !important;
}
.borderred{
    border: 1px solid red !important;
}
.borderblue{
    border: 1px solid blue !important;
}
.icon-check2{
color: rgb(18, 243, 74);
position: absolute;
right: 50px;
top: 13px;
}
.reg-p:nth-of-type(4) .icon-check2{
    position: absolute;
    top: -60px;
}
.id{
    width: 100%;
    height: 1000px;
    /* background: url('@/assets/reg.jpg') */
}
#login_btn{
    color: rgb(28, 74, 202);
}
.ul{
    position: absolute;
    border: 0;
    right: 44px;
    bottom: 274px;
    border-radius: 6px;
    padding: 8.8px 0;
    text-align: left;
    font-size: 12px;
    line-height: 18px;
    width: 317px;
    background: #000;
}
.ul li{
    width: 100%;
    height: 18px;
    color: #fff;
}
.ul span{
    display: block;
    width: 10px;
    height: 10px;
    background: #000;
    position: absolute;
    bottom: -4px;
    right: 10px;
    transform:rotate(45deg);
}
.mod-new-reg-content {
  width: 480px;
  position: absolute;
  right: 200px;
  margin-top: 100px;
  background: rgb(250, 250, 250,.9);
  border-radius: 12px;
  border-radius: 12px;
  overflow: hidden;
}
.mod-new-reg-content .new-reg-guide-login h3 {
  font-size: 36px;
  color: #000;
  padding-bottom: 4px;
}
.mod-new-reg-content .new-reg-guide-login {
  margin: 30px 0 0 39px;
}
.reg-content {
  padding-top: 40px;
  overflow: initial;
}
.reg-content p {
  width: 100%;
  height: 40px;
  margin-bottom: 32px;
}
.reg-p .left-name {
  display: inline-block;
  font-size: 14px;
  color: #333;
  letter-spacing: 0;
  text-align: right;
  width: 82px;
  height: 40px;
  line-height: 40px;
  margin-right: 15px;
  font-weight: 200;
}
.reg-p input {
  padding: 11px 10px;
  max-height: 40px;
  background: #fff;
  border: 1px solid #e0e0e0;
  border-radius: 4px;
  font-size: 14px;
  width: 341px;
  color: #000;
}
.reg-p:nth-of-type(4) input {
  width: 206px;
  margin-right: 9px;
}
.reg-p:nth-of-type(4) button {
  height: 40px;
  width: 126px;
  border-radius: 4px;
  background: #fff;
  border: 1px solid #e0e0e0;
  font-size: 12px;
  color: #333;
  letter-spacing: 0;
  text-align: center;
  line-height: 24px;
}
.reg-p{
    position: relative;
}
.reg-p span:nth-of-type(2){
    position: absolute;
    top: 44px;
    left: 98px;
    font-size: 12px;
    color: red;
}
.reg-p .szh{
    position: absolute;
    display: inline-block;
    padding: 8.8px 6px;
    left: 100px;
    font-size: 12px;
    background: #000;
    color: #fff;
    border-radius: 8px;
    bottom: 48px;
}
.xsj{
    display: block;
    width: 10px;
    height: 10px;
    background: #000;
    position: absolute;
    bottom: -4px;
    right: 270px;
    transform:rotate(45deg);
}
.pass-form-item a{
    display: inline-block;
    color: rgb(45, 90, 214);
}
.pass-form-item{
    display: flex;
    justify-content: center;
    justify-items: center;
    line-height: 40px;
}
.a{
    display: flex;
    justify-content: center;
}
.a a{
    width: 400px;
    height: 50px;
    display: block;
    background: #3f89ec;
    color: #fff;
    text-decoration: none;
    line-height: 50px;
    text-align: center;
    font-weight: 700;
    border-radius: 50px;
}
</style>