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
          <input type="text" placeholder="请设置用户名" autofocus :class="[yhmBorderColor]" @focus="focusyhm" @blur="bluryhm"
            v-model="username" >
          <span class="jg" v-show="yhmerror" v-text="lenerror">用户名仅支持中英文、数字和下划线,且不能为纯数字</span>
          <span class="szh" v-show="yhmtitle">设置后不可更改，中英文均可，最长14个英文或7个汉字
            <span class="xsj"></span>
          </span>

          <i class="icon-check2" v-show="yhdh"></i>
        </p>

        <p class="reg-p">
          <span class="left-name">手机号</span>
          <input type="text" placeholder="可用于登录和找回密码" :class="[borderColorMobile]"
           @focus="focusMobile"
            @blur="blurMobile" v-model="mobile" >
          <span class="jg" v-show="mobileError">手机号码格式不正确</span>
        </p>

        <p class="reg-p">
          <span class="left-name">密&emsp;码</span>
          <input type="text" placeholder="请设置登录密码" :class="[pwdBorderColor]" 
            @input="inputPwd"
            @focus="focusPwd"
            @blur="blurPwd" v-model="password" >
          <span class="jg" v-show="pwdRegResult==false">密码设置不符合要求</span>
        </p>

        <p class="reg-p">
          <span class="left-name">验证码</span>
          <input type="text" placeholder="请输入验证码" :class="{ borderred: red == 7, borderblue: red == 8 }" @focus="focusyzm"
            @blur="bluryzm">
          <button>获取验证码</button>
          <i class="icon-check2" v-show="mmdh"></i>
        </p>
        <ul class="ul" v-show="pwdTitle">
          <li :class="{ ulli: lengthred  }">长度为8~14个字符</li>
          <li :class="{ ulli: makeupred  }">字母/数字以及标点符号至少包含2种</li>
          <li :class="{ ulli: spacered  }">不允许有空格、中文</li>
          <span></span>
        </ul>

        <div class="a"> <a href="javascript:;">注册</a> </div>
        <p class="pass-form-item pass-form-item-isAgree">
          <input name="isAgree" id="TANGRAM__PSP_4__isAgree" type="checkbox"
            class="pass-checkbox-input pass-checkbox-isAgree" autocomplete="off" />
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
      yhmtitle: false,
      yhmerror: false,
      yhmBorderColor: '',
      username: '',
      lenerror:'用户名仅支持中英文、数字和下划线,且不能为纯数字',
      mobile:'',
      borderColorMobile:'', // 手机号 边框样式
      mobileError:false,
      pwdBorderColor:'',
      password:'',
      pwdTitle:false,
      passwordReg:'',
      lengthred:false,
      makeupred:false,
      spacered:false,
      pwdRegResult:true, // 出来
      

      yhm: false,
      yhdh: false,
      red: 0,
      sjh: false,
      sjhtext: false,
      mmk: false,
      mmk1: false,
      mmdh: false,
      mmksj: '',
      mmkmmk: '',
      mmkli: 0,
      mmkall: false,
      moyhm: '',
      bool1: false
    }
  },
  methods: {
    focusyhm() {
      this.yhmtitle = true;
      this.yhmBorderColor = 'borderblue';
      // 每次获取焦点，都关闭错误提示
        this.yhmerror = false;
    },
    bluryhm() {
      this.yhmtitle = false;
      // 根据输入内容决定 边框颜色
      if (this.username == '') {// 不做验证
        this.yhmBorderColor = '';
      } else {
        // 验证 规则：用户名仅支持中英文、数字和下划线,且不能为纯数字  长度
        var reg1 = /^[0-9_a-zA-Z\u4e00-\u9fa5]{1,14}$/
        var bool1 = reg1.test(this.username);// bool1：true ：仅支持中英文、数字和下划线 

        var reg2 = /^\d+$/;// 找出纯数字，不给通过
        var bool2 = !reg2.test(this.username);    // bool2:true  不是纯数字

        var reg3 = /[\u4e00-\u9fa5]/;
        var sum = 0;
        for (var i = 0; i < this.username.length; i++) {
          if (reg3.test(this.username[i])) {
            sum += 2;
          } else {
            sum++;
          }
        }
        var bool3 = sum <= 14;  // 长度符合  
        if(bool1==false||bool2==false){
            // 提示：用户名仅支持中英文、数字和下划线,且不能为纯数字
            this.yhmerror = true;
            this.lenerror = '用户名仅支持中英文、数字和下划线,且不能为纯数字'
        }
        console.log(bool3);
        if(bool3==false){
          this.yhmerror = true;
          this.lenerror = '用户名不能超过7个汉字或14个字符'
        }
      }
    },
  // 手机号
  focusMobile() {
    this.borderColorMobile = 'borderblue';
    this.mobileError = false;
  },
  blurMobile() {
    if(this.mobile==''){
      this.borderColorMobile = '';
    }else{
      // 验证
      var reg = /^1[3456789]\d{9}$/
      if (!reg.test(this.mobile) ){
        this.mobileError = true;
         this.borderColorMobile = 'borderred'
      }else{
        this.borderColorMobile = '';
      }
    }
  },

  focusPwd() {
    this.pwdBorderColor='borderred';  // 边框为红色
    this.pwdTitle = true;             // 提示文字必须出现
    this.pwdRegResult = true;         //  获取焦点 下方错误提示 必须消失
  },
  blurPwd() {
     this.pwdTitle = false;   //提示文字必须 消失

    this.pwdRegResult =  this.inputPwd();  // 根据验证结果 显示下方红色错误提示

    if(this.pwdRegResult){                // 根据验证结果  边框颜色显示   '' red
      this.pwdBorderColor = ''
    }
  },
  // 密码正在输入时的验证
  inputPwd(){
    var regResult = true;  
    // 当输入内容时，不符合要求  regResult=false
    if(this.password!=''){
      var reg1 = /[\u4e00-\u9fa5\s]/;
      var bool1 =  reg1.test(this.password);   // bool1:true  是中文 和 空格
      var reg2 = /([a-zA-Z]+[0-9]+)|([0-9]+[a-zA-Z]+)/;        
      var reg3 = /([0-9]+[^0-9a-zA-Z]+)|([^0-9a-zA-Z]+[0-9]+)/
      var reg4 = /([^0-9a-zA-Z]+[a-zA-Z]+)|([a-zA-Z]+[^0-9a-zA-Z]+)/
       //标点（除了数字和字母）   数组+字母 || 数字+标点 || 标点+字母 变白
      //  console.log(reg2.test(this.password));
      if( reg2.test(this.password) ||reg3.test(this.password)||reg4.test(this.password) ){
        // 2.字母/数字以及标点符号至少包含2种   提示变白
        this.makeupred = false;
      }else{
         regResult= false;
         this.makeupred = true;
      }

      if(this.password.length>=8&&this.password.length<=14){
         this.lengthred = false;
      }else{
        this.lengthred = true;
        regResult =false;
      }
      if(!bool1){
        this.spacered = false
      }else{
        this.spacered = true;
        regResult =false;
      }

    }else{
       this.lengthred=false;
       this.makeupred=false;
       this.spacered=false;
       regResult = false;    //输入为空 regResult=false
    }
    return regResult;
  },
  focusyzm() {
    this.red = 8
  },
  bluryzm() {
    this.red = 0
  }
  }
}

</script>

<style  scoped>
.ulli {
  color: red !important;
}

.borderred {
  border: 1px solid red !important;
}

.borderblue {
  border: 1px solid blue !important;
}

.icon-check2 {
  color: rgb(18, 243, 74);
  position: absolute;
  right: 50px;
  top: 13px;
}

.reg-p:nth-of-type(4) .icon-check2 {
  position: absolute;
  top: -60px;
}

.id {
  width: 100%;
  height: 1000px;
  background: url('https://ppui-static-pc.cdn.bcebos.com/static/passpc-account/img/reg_bg_min.jpg')
}

#login_btn {
  color: rgb(28, 74, 202);
}

.ul {
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

.ul li {
  width: 100%;
  height: 18px;
  color: #fff;
}

.ul span {
  display: block;
  width: 10px;
  height: 10px;
  background: #000;
  position: absolute;
  bottom: -4px;
  right: 10px;
  transform: rotate(45deg);
}

.mod-new-reg-content {
  width: 480px;
  position: absolute;
  right: 200px;
  margin-top: 100px;
  background: rgb(250, 250, 250, .9);
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

.reg-p {
  position: relative;
}

.reg-p span:nth-of-type(2) {
  position: absolute;
  top: 44px;
  left: 98px;
  font-size: 12px;
  color: red;
}

.reg-p .szh {
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

.xsj {
  display: block;
  width: 10px;
  height: 10px;
  background: #000;
  position: absolute;
  bottom: -4px;
  right: 270px;
  transform: rotate(45deg);
}

.pass-form-item a {
  display: inline-block;
  color: rgb(45, 90, 214);
}

.pass-form-item {
  display: flex;
  justify-content: center;
  justify-items: center;
  line-height: 40px;
}

.a {
  display: flex;
  justify-content: center;
}

.a a {
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