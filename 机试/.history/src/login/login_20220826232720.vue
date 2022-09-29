<template>
  <div class="login">
        <div class="UIN">
            <h2>欢迎使用</h2>
            <div class="uname">
                <el-input v-model="account" @input></el-input>
            </div>
            <div class="unss">
                <el-input placeholder="请输入密码" v-model="password" show-password></el-input>
            </div>
            <div class="dl">
                <button @click="gohome">立即登录</button>
            </div>
        </div>
    </div>
</template>

<script>

export default {
  data() {
    return {
      account,
      password
    };
  },
  methods: {
  }
}
</script>

<style  scoped>
.s1 {
  position: absolute;
  font-size: 12px;
  line-height: 28px;
  color: #cf4444;
  left: 37px;
  top: 33px;
}
.login-header[data-v-6a03148c] {
  background: #fff;
  border-bottom: 1px solid #e4e4e4;
}
.login-header .container[data-v-6a03148c] {
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
}
.login-header .logo[data-v-6a03148c] {
  width: 200px;
}
.login-header .logo a[data-v-6a03148c] {
  display: block;
  height: 132px;
  width: 100%;
  text-indent: -9999px;
  background: url(../assets/a40fbe485926cba4d318cc76ac03f53.png) no-repeat
    center 18px / contain;
}
.login-header .sub[data-v-6a03148c] {
  flex: 1;
  font-size: 24px;
  font-weight: 400;
  margin-bottom: 38px;
  margin-left: 20px;
  color: #666;
}
.login-header .entry[data-v-6a03148c] {
  width: 120px;
  margin-bottom: 38px;
  font-size: 16px;
}
.login-header .entry i[data-v-6a03148c] {
  font-size: 14px;
  color: #27ba9b;
  letter-spacing: -5px;
}
.login-footer[data-v-58300caa] {
  padding: 30px 0 50px;
  background: #fff;
}
.login-footer p[data-v-58300caa] {
  text-align: center;
  color: #999;
  padding-top: 20px;
}
.login-footer p a[data-v-58300caa] {
  line-height: 1;
  padding: 0 10px;
  color: #999;
  display: inline-block;
}
.login-footer p a ~ a[data-v-58300caa] {
  border-left: 1px solid #ccc;
}
.account-box .toggle[data-v-7bdf9132] {
  padding: 15px 40px;
  text-align: right;
}
.account-box .toggle a[data-v-7bdf9132] {
  color: #27ba9b;
}
.account-box .toggle a i[data-v-7bdf9132] {
  font-size: 14px;
}
.account-box .form[data-v-7bdf9132] {
  padding: 0 40px;
}
.account-box .form-item[data-v-7bdf9132] {
  margin-bottom: 28px;
}
.login-header {
  height: 130px;
}
.account-box .form-item .input[data-v-7bdf9132] {
  position: relative;
  height: 36px;
}
.account-box .form-item .input > i[data-v-7bdf9132] {
  width: 34px;
  height: 34px;
  background: #cfcdcd;
  color: #fff;
  position: absolute;
  left: 1px;
  top: 1px;
  text-align: center;
  line-height: 34px;
  font-size: 18px;
}
.account-box .form-item .input input[data-v-7bdf9132] {
  padding-left: 44px;
  border: 1px solid #cfcdcd;
  height: 36px;
  line-height: 36px;
  width: 100%;
}
.account-box .form-item .input input.error[data-v-7bdf9132] {
  border-color: #cf4444;
}
.account-box .form-item .input input.active[data-v-7bdf9132],
.account-box .form-item .input input[data-v-7bdf9132]:focus {
  border-color: #27ba9b;
}
.account-box .form-item .input .code[data-v-7bdf9132] {
  position: absolute;
  right: 1px;
  top: 1px;
  text-align: center;
  line-height: 34px;
  font-size: 14px;
  background: #f5f5f5;
  color: #666;
  width: 90px;
  height: 34px;
  cursor: pointer;
}
.account-box .form-item > .error[data-v-7bdf9132] {
  position: absolute;
  font-size: 12px;
  line-height: 28px;
  color: #cf4444;
}
.account-box .form-item > .error i[data-v-7bdf9132] {
  font-size: 14px;
  margin-right: 2px;
}
.account-box .form .agree a[data-v-7bdf9132] {
  color: #069;
}
.account-box .form .btn[data-v-7bdf9132] {
  display: block;
  width: 100%;
  height: 40px;
  color: #fff;
  text-align: center;
  line-height: 40px;
  background: #27ba9b;
}
.account-box .form .btn.disabled[data-v-7bdf9132] {
  background: #cfcdcd;
}
.account-box .action[data-v-7bdf9132] {
  padding: 20px 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.account-box .action .url a[data-v-7bdf9132] {
  color: #999;
  margin-left: 10px;
}
.login-section[data-v-7095baca] {
  background: url(../assets/214469d806848bf0d290374288d8570.png) no-repeat 50% /
    cover;
  height: 488px;
  position: relative;
}
.login-section .wrapper[data-v-7095baca] {
  width: 380px;
  background: #fff;
  min-height: 400px;
  position: absolute;
  left: 50%;
  top: 54px;
  transform: translate3d(100px, 0, 0);
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);
}
.login-section .wrapper nav[data-v-7095baca] {
  height: 55px;
  border-bottom: 1px solid #f5f5f5;
  display: flex;
  padding: 0 40px;
  text-align: right;
  align-items: center;
}
.login-section .wrapper nav a[data-v-7095baca] {
  flex: 1;
  line-height: 1;
  display: inline-block;
  font-size: 18px;
  position: relative;
}
.login-section .wrapper nav a[data-v-7095baca]:first-child {
  border-right: 1px solid #f5f5f5;
  text-align: left;
}
.login-section .wrapper nav a.active[data-v-7095baca] {
  color: #27ba9b;
  font-weight: 700;
}
.login-section .qrcode-box[data-v-7095baca] {
  text-align: center;
  padding-top: 40px;
}
.login-section .qrcode-box p[data-v-7095baca] {
  margin-top: 20px;
}
.login-section .qrcode-box p a[data-v-7095baca] {
  color: #27ba9b;
  font-size: 16px;
}
.agree a {
  float: left;
}
.container {
  width: 1240px;
  margin: 0 auto;
}
</style>