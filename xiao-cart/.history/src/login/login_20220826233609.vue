<template>
  <div class="bgcbox">
    <div class="logincss">
      <el-form
        :model="loginForm"
        :rules="rules"
        ref="loginForm"
        label-width="100px"
        class="demo-loginForm"
      >
        <el-form-item label="用户名" prop="name">
          <el-input v-model="username"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="password">
          <el-input type="password" v-model="password"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submitForm">登录</el-button>
          <el-button @click="resetForm">重置</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>

export default {
  data() {
    return {
    
        username: "",
        password: "",
     

    };
  },
  methods: {
    islogin() {
      console.log();
    },


  },
};
</script>

<style>
.bgcbox {
  background-color: #2c414c;
  width: 100%;
  height: 100%;
}
.logincss {
  width: 460px;
  height: 350px;
  border: 1px solid #000;
  border-radius: 25px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #ffffff;
}
.demo-loginForm {
  width: 400px;
  height: 100%;
  padding-top: 100px;
}
</style>
