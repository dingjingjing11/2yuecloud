<template>
    <div class="login">
        <div class="UIN">
            <h2>UNI-ADMIN</h2>
            <div class="uname">
                <el-input v-model="account" placeholder="请输入用户名"></el-input>
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
import { login } from '@/api/api.js'
export default {

    data() {
        return {
            account: '',
            password: '',
        };
    },

    methods: {
        async gohome() {
            let res = await login({ username: this.account, password: this.password })
            if (res.data.msg == 'ok') {
                localStorage.token = res.data.data.token
                this.$store.commit('loginuser', res.data.data);
                setTimeout(() => {
                    this.$router.push({ path: '/' })
                }, 1000)
            }
        }
    },
};
</script>

<style lang="scss" scoped>
.login {
    overflow-y: hidden
}

.UIN {
    width: 500px;
    height: 260px;
    border: 1px solid #000;
    margin: auto;
    margin-top: 100px;

    h2 {
        padding: 10px;
        text-align: center;
        border-bottom: 1px solid #000;
    }
}

.uname,
.unss {
    padding-left: 20px;
    padding-right: 20px;
}

.uname {
    margin-bottom: 20px;
    margin-top: 20px;
}

.dl {
    margin-top: 20px;
    text-align: center;

    button {
        width: 460px;
        background: #118080;
        border: 0;
        border-radius: 5px;
        height: 30px;
        color: aliceblue;
    }
}
</style>