<template>
    <div class="mod-reg clearfix mod-reg- mod-new-reg-content ">
        <div class="new-reg-guide-login">
            <h3>
                欢迎注册 </h3>
            <p>
                已有帐号？ <span id="login_btn">
                    登录 </span></p>
        </div>
        <div class="reg-content tang-pass-reg" id="reg_content">
            <form autocomplete="off" id="TANGRAM__PSP_4__form" class="new-reg-v5" method="POST">

                <label for="TANGRAM__PSP_4__userName" id="TANGRAM__PSP_4__userNameLabel"
                    class="pass-label pass-label-userName">用户名</label>

                <input @blur="blur(val)" @focus="focus(val)" id="TANGRAM__PSP_4__userName" type="text" name="userName"
                    class="pass-text-input pass-text-input-userName" autocomplete="off" value="" placeholder="请设置用户名">
                <span id="TANGRAM__PSP_4__userNameTipText" v-show="show()"
                    class="pass-item-tiptext pass-item-tiptext-userName">设置后不可更改，中英文均可，最长14个英文或7个汉字</span>
                <el-button plain @click="open4">
                    用户名不能超过7个汉字或14个字符
                </el-button>
                <span>用户名不能超过7个汉字或者14个字符</span>
                <span v-show="show()" id="TANGRAM__PSP_4__userNameError"
                    class="pass-item-error pass-item-error-userName" style="display: inline;">用户名不能超过7个汉字或14个字符</span>

                <p id="TANGRAM__PSP_4__phoneWrapper" class="pass-form-item pass-form-item-phone" style="display:">

                    <label for="TANGRAM__PSP_4__phone" id="TANGRAM__PSP_4__phoneLabel"
                        class="pass-label pass-label-phone">手机号</label>
                        <input id="TANGRAM__PSP_4__phone" type="text"  @focus="shoufocus"
                        name="phone" class="pass-text-input pass-text-input-phone" maxlength="11" autocomplete="off"
                        value="" placeholder="可用于登录和找回密码"><span id="TANGRAM__PSP_4__phone_clearbtn"
                        class="pass-clearbtn pass-clearbtn-phone" style="display:none;"></span><span
                        id="TANGRAM__PSP_4__phoneError" class="pass-item-error pass-item-error-phone"></span><span
                        id="TANGRAM__PSP_4__phoneSucc" class="pass-item-succ pass-item-succ-phone"
                        style="display:none;"></span><span id="TANGRAM__PSP_4__phoneTip"
                        class="pass-item-tip pass-item-tip-phone" style="display:none"><span
                            id="TANGRAM__PSP_4__phoneTipText"
                            class="pass-item-tiptext pass-item-tiptext-phone">请输入中国大陆手机号,其他用户不可见</span></span><span
                        class="pass-item-placeholder" id="TANGRAM__PSP_4__Placeholder">可用于登录和找回密码</span>

                    <span id="TANGRAM__PSP_4__phoneError" class="pass-item-error pass-item-error-phone"
                        style="display: inline;">手机号码格式不正确</span>
                </p><input type="password" name="password" style="display:none">
                <p id="TANGRAM__PSP_4__passwordWrapper" class="pass-form-item pass-form-item-password" style="display:">
                    <label for="TANGRAM__PSP_4__password" id="TANGRAM__PSP_4__passwordLabel"
                        class="pass-label pass-label-password">密　码</label>
                        <input type="password"  @blur="pwdblur()"  @focus="pwdfocus()"
                        style="display: none;"><input id="TANGRAM__PSP_4__password" type="password" name="password"
                        class="pass-text-input pass-text-input-password" autocomplete="off" value=""
                        placeholder="请设置登录密码">
                    <span class="pwd-strength-detail">请输入密码</span>
                    <span id="TANGRAM__PSP_4__passwordTip" class="pass-item-tip pass-item-tip-password"
                        style="display:none"><span id="TANGRAM__PSP_4__passwordTipText"
                            class="pass-item-tiptext pass-item-tiptext-password">
                            <div class="pwd-checklist-wrapper"><span class="pwd-checklist-arrow"><em
                                        class="arrowa">◆</em><em class="arrowb">◆</em></span>
                                <ul id="TANGRAM__PSP_4__pwdChecklist" class="pwd-checklist">
                                    <li id="TANGRAM__PSP_4__pwd_checklist_len" data-rule="len"
                                        class="pwd-checklist-item">长度为8~14个字符</li>
                                    <li id="TANGRAM__PSP_4__pwd_checklist_cha" data-rule="cha"
                                        class="pwd-checklist-item">字母/数字以及标点符号至少包含2种</li>
                                    <li id="TANGRAM__PSP_4__pwd_checklist_spa" data-rule="spa"
                                        class="pwd-checklist-item">不允许有空格、中文</li>
                                </ul>
                            </div>
                        </span></span><span class="change-password-type" id="TANGRAM__PSP_4__changePwdType"
                        style="display:none;"></span><span class="new-password-tip"
                        id="TANGRAM__PSP_4__newPwdTip"></span>
                </p>
                <p id="TANGRAM__PSP_4__verifyCodeSendWrapper" class="pass-form-item pass-form-item-verifyCodeSend">
                    <label for="TANGRAM__PSP_4__verifyCode" id="TANGRAM__PSP_4__verifyCodeLabel"
                        class="pass-label pass-label-verifyCode">验证码</label><input id="TANGRAM__PSP_4__verifyCode"
                        type="text" name="verifyCode" class="pass-text-input pass-text-input-verifyCode"
                        autocomplete="off" maxlength="6" placeholder="请输入验证码"><span
                        id="TANGRAM__PSP_4__verifyCode_clearbtn" class="pass-clearbtn pass-clearbtn-verifyCode"
                        style="display:none;"></span><input id="TANGRAM__PSP_4__verifyCodeSend" type="button"
                        value="获取验证码" class="pass-button pass-button-verifyCodeSend" autocomplete="off"><span
                        id="TANGRAM__PSP_4__verifyCodeError"
                        class="pass-item-error pass-item-error-verifyCodeSend"></span><span
                        id="TANGRAM__PSP_4__verifyCodeSendTip"
                        class="pass-item-tip pass-item-tip-verifyCodeSend"></span>
                </p>
                <p id="TANGRAM__PSP_4__errorWrapper" class="pass-generalErrorWrapper"><span id="TANGRAM__PSP_4__error"
                        class="pass-generalError"></span></p>
                <p id="TANGRAM__PSP_4__submitWrapper"
                    class="pass-form-item pass-form-item-submit pass-form-item-submit-v5"><input
                        id="TANGRAM__PSP_4__submit" type="submit" value="注册" class="pass-button pass-button-submit"
                        disabled=""></p>
                <p id="TANGRAM__PSP_4__isAgreeWrapper" class="pass-form-item pass-form-item-isAgree"><input
                        name="isAgree" id="TANGRAM__PSP_4__isAgree" type="checkbox"
                        class="pass-checkbox-input pass-checkbox-isAgree" autocomplete="off"><label
                        for="TANGRAM__PSP_4__isAgree">阅读并接受</label><a id="TANGRAM__PSP_4__user-agreement"
                        target="_blank">《百度用户协议》</a>及<a id="TANGRAM__PSP_4__personal-agreement"
                        target="_blank">《百度隐私权保护声明》</a><span id="TANGRAM__PSP_4__isAgreeError"
                        class="pass-item-error pass-item-error-isAgree"></span></p>
            </form>
        </div>
    </div>
</template>
<script>


export default {

    data() {
        return {
            val:'',
            show: false
        }
    },
   
    methods: {


        focus() {
            //用户名是中文或者英文
            this.show = true
            var reg = /^[\u4e00-\u9fa5]{1,7}$|^[\A-Za-z]{1,14}$/
            var bool1 = true
            var bool1 = reg.test(val)
            if (!bool1) {
                this.show = true

            }
            var length = 0
            for (var i = 0; i < val.length; i++) {
                if (/[\u4e00-\u9fa5]/.test(val[i])) {
                    length += 2
                } else {
                    length += 1
                }
            }
            //判断长度是否满足
            if (length > 14) {
                bool1 = false
            }

        },
        blur(val) {
            if (val == ''){
    //              open4(){
    //           this.$notify.error({
    //           title: '错误',
    //             message: '这是一条错误的提示消息'
    //     });
    //   }
            }
        },
        shoufocus(){
            var reg = /^1[3-9]\d{9}$/
            var bool2=reg.test(val)
            if(!bool2){

            }

        },
        pwdfocus(){
            
        }
    }
};
</script>
<style lang='scss' scoped>
.mod-new-reg-content {
    height: 554px;
    margin-top: -277px;
}

.mod-new-reg-content {
    position: absolute;
    right: 139px;
    top: 50%;
    margin-top: -340px;
    width: 480px;
    height: 680px;

    background: #fff;
    background: rgba(255, 255, 255, .9);

    border-radius: 12px;
    overflow: hidden;
}

.clearfix {
    zoom: 1;
}

.clearfix:after {
    content: "\20";
    display: block;
    height: 0;
    clear: both;
    overflow: hidden;
    visibility: hidden;
}

.mod-new-reg-content .new-reg-guide-login {
    margin: 30px 0 0 39px;
}

.mod-new-reg-content .new-reg-guide-login h3 {
    font-size: 36px;
    color: #000;
    padding-bottom: 4px;
}

.mod-new-reg-content .new-reg-guide-login p span {
    color: #2e58ff;
    cursor: pointer;
}

.mod-new-reg-content .new-reg-guide-login p {
    font-size: 14px;
    // color: #9B9B9B;
}

.tang-pass-reg {
    padding-top: 40px;
    overflow: initial;
}

.tang-pass-reg {
    position: relative;
    width: 720px;
    // overflow: hidden;
}

.reg-content {
    float: left;
}

.tang-pass-reg .pass-form-item {
    margin-bottom: 32px;
}

.tang-pass-reg .pass-form-item {
    position: relative;
    clear: both;
    // margin-bottom: 20px;
    zoom: 1;
}

.tang-pass-reg .pass-label {
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

.tang-pass-reg .pass-text-input {
    padding: 11px 10px;
    max-height: 40px;
    background: #fff;
    border: 1px solid #E0E0E0;
    border-radius: 4px;
    font-size: 14px;
    width: 321px;
    color: #000;
}

.tang-pass-reg .pass-text-input {
    display: block;
    position: relative;
    float: left;
    height: 16px;
    // width: 328px;
    // padding: 11px 10px;
    // margin-right: 10px;
    // border: 1px solid #ddd;
    // font-size: 14px;
    // color: #666;
    transition: .3s;
}

.tang-pass-reg .pass-item-tip {
    width: 317px;
    height: 39px;
    position: absolute;
    left: 97px;
    top: -46px;
    text-align: center;
    color: #fff;
    // background: url(/static/passpc-account/img/reg/check-username-bg-2x.png) no-repeat;
    background-size: 100%;

}

.tang-pass-reg .pass-item-tiptext-userName {
    padding: 7px 0;
}

.tang-pass-reg .pass-form-item {
    margin-bottom: 32px;
}

.tang-pass-reg .pass-label {
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

.tang-pass-reg .pass-item-tiptext-userName {
    padding: 7px 0;
}

.tang-pass-reg .pass-item-tiptext {
    display: block;
    // padding-top: 12px;
}


.tang-pass-reg .pass-label {
    display: block;
    float: left;
}

.tang-pass-reg .pass-form-item-submit.pass-form-item-submit-v5 {
    padding-top: 40px;
    margin-top: 0;
}

.tang-pass-reg .pass-form-item-submit {
    left: 41px;
}

.mod-reg .tang-pass-reg .pass-button-submit {
    background: #BDCEFC;
    border-radius: 25px;
    width: 399px;
}

.tang-pass-reg .pass-button {
    display: block;
    height: 50px;
    font-size: 16px;
    font-weight: 700;
    cursor: pointer;
    color: #fff;

    border: 0;
}

.pass-item-error.pass-item-error-userName,
.pass-item-error.pass-item-error-phone {
    font-size: 12px;
    color: #F55;
    background: 0 0;
    padding-left: 0;
    padding-top: 0;
    position: absolute;
    left: 97px;
    top: 43px;
}

.tang-pass-reg .pass-form-item {
    margin-bottom: 32px;
}

.tang-pass-reg .pass-form-item-isAgree {
    margin-left: 41px;
    width: 399px;
    text-align: center;
}

.tang-pass-reg .pass-form-item-isAgree label {
    color: #666;
    font-size: 12px;
    margin-left: 5px;
}

.tang-pass-reg a {
    color: #2E58FF;
}

.tang-pass-reg .pass-item-error {
    width: 332px;
    // color: #fff;
    // padding-left: 0;
    // top: 3px;
    border-top-left-radius: 4px;
    border-top-right-radius: 4px;
    padding: 9px 0 6px 13px;
    // font-size: 12px;
}
</style>