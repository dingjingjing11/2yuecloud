<template>
  <div>
    <div id="app1" data-v-app>
      <header class="login-header" data-v-6a03148c data-v-7095baca>
        <div class="container" data-v-6a03148c>
          <h1 class="logo" data-v-6a03148c>
            <a href="#/" class data-v-6a03148c>小兔鲜</a>
          </h1>
          <h3 class="sub" data-v-6a03148c>欢迎登录</h3>
          <a href="#/" class="entry" data-v-6a03148c>
            进入网站首页
            <i class="iconfont icon-angle-right" data-v-6a03148c></i>
            <i class="iconfont icon-angle-right" data-v-6a03148c></i>
          </a>
        </div>
      </header>
      <section class="login-section" data-v-7095baca>
        <div class="wrapper" data-v-7095baca>
          <nav data-v-7095baca>
            <a class="active" href="javascript:;" data-v-7095baca>账户登录</a>
            <a class href="javascript:;" data-v-7095baca>扫码登录</a>
          </nav>
          <div class="account-box" data-v-7bdf9132 data-v-7095baca>
            <div class="toggle" data-v-7bdf9132>
              <a href="javascript:;" data-v-7bdf9132>
                <i class="iconfont icon-msg" data-v-7bdf9132></i> 使用短信登录
              </a>
            </div>
            <form novalidate class="form" autocomplete="off" data-v-7bdf9132>
              <div class="form-item" data-v-7bdf9132>
                <div class="input" data-v-7bdf9132>
                  <i class="iconfont icon-user" data-v-7bdf9132></i>
                  <input
                    class
                    type="text"
                    placeholder="请输入用户名"
                    name="account"
                    data-v-7bdf9132
                    v-model="xh"
                    @blur="sj"
                  />
                  <span v-if="cx1" class="s1">请输入用户名</span>
                </div>
                <!---->
              </div>
              <div class="form-item" data-v-7bdf9132>
                <div class="input" data-v-7bdf9132>
                  <i class="iconfont icon-lock" data-v-7bdf9132></i>
                  <input
                    class
                    type="password"
                    placeholder="请输入密码"
                    name="password"
                    data-v-7bdf9132
                    v-model="xh1"
                    @blur="sj1"
                  />
                  <span v-if="cx2" class="s1">请输入密码</span>
                </div>
                <!---->
              </div>
              <div class="form-item" data-v-7bdf9132>
                <div class="agree" data-v-7bdf9132>
                  <div
                    class="xtx-checkbox"
                    name="isAgree"
                    value="true"
                    data-v-c98f0e58
                    data-v-7bdf9132
                  >
                    <i class="iconfont icon-checked" data-v-c98f0e58></i>
                    <!---->
                  </div>
                  <span data-v-7bdf9132>我已同意</span>
                  <a href="javascript:;" data-v-7bdf9132>《隐私条款》</a>
                  <span data-v-7bdf9132>和</span>
                  <a href="javascript:;" data-v-7bdf9132>《服务条款》</a>
                </div>
                <!---->
              </div>
              <a
                href="javascript:;"
                class="btn"
                data-v-7bdf9132
                @click="login()"
              >
                登录
              </a>
            </form>
            <div class="action" data-v-7bdf9132>
              <a
                href="https://graph.qq.com/oauth2.0/authorize?client_id=101984921&amp;response_type=token&amp;scope=all&amp;redirect_uri=http%3A%2F%2Frabbit.mmsmd.top%2F%23%2Flogin%2Fcallback"
                data-v-7bdf9132
              >
                <img
                  src="https://qzonestyle.gtimg.cn/qzone/vas/opensns/res/img/Connect_logo_7.png"
                  alt
                  data-v-7bdf9132
                />
              </a>
              <div class="url" data-v-7bdf9132>
                <a href="javascript:;" data-v-7bdf9132>忘记密码</a>
                <a href="javascript:;" data-v-7bdf9132>免费注册</a>
              </div>
            </div>
          </div>
          <!---->
        </div>
      </section>
      <footer class="login-footer" data-v-58300caa data-v-7095baca>
        <div class="container" data-v-58300caa>
          <p data-v-58300caa>
            <a href="javascript:;" data-v-58300caa>关于我们</a>
            <a href="javascript:;" data-v-58300caa>帮助中心</a>
            <a href="javascript:;" data-v-58300caa>售后服务</a>
            <a href="javascript:;" data-v-58300caa>配送与验收</a>
            <a href="javascript:;" data-v-58300caa>商务合作</a>
            <a href="javascript:;" data-v-58300caa>搜索推荐</a>
            <a href="javascript:;" data-v-58300caa>友情链接</a>
          </p>
          <p data-v-58300caa>CopyRight © 小兔鲜儿</p>
        </div>
      </footer>
    </div>
    <div id="model"></div>
    <div class="xtx-message-container"></div>
    <div class="xtx-confirm"></div>
  </div>
</template>

<script>
import { findlogin } from "@/api/login";

export default {
  data() {
    return {
      xh: "",
      xh1: "",
      arr: "",
      cx1: false,
      cx2: false,
      xinxi: "",
    };
  },
  methods: {
    sj() {
      if (this.xh) {
        this.cx1 = false;
      } else {
        this.cx1 = true;
      }
    },
    sj1() {
      if (this.xh1) {
        this.cx2 = false;
      } else {
        this.cx2 = true;
      }
    },

    login() {
      if (this.xh) {
        this.cx1 = false;
      } else {
        this.cx1 = true;
      }

      if (this.xh1) {
        this.cx2 = false;
      } else {
        this.cx2 = true;
      }

      if (this.cx1 == false && this.cx2 == false) {
        findlogin({ account: this.xh, password: this.xh1 })
          .then((res) => {
            if (res.msg == "操作成功") {
              // localStorage.userinfo = JSON.stringify(res.result)
        

              this.arr = res.result;
              this.$store.commit("usercontent", res.result);
              this.$router.push({ path: "/" });
              this.$message({
                message: "恭喜你，登陆成功",
                type: "success",
                showClose: true,
              });
            }
          })
          .catch((error) => {
            this.xinxi = error.response.data.message;
            console.log(this.xinxi);
            this.$message.error(this.xinxi);
            
          });
      }
    },
  },
};
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