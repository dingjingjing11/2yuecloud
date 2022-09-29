<template>
<div>
    <div>
        <el-row class="tac">
            <el-col :span="12">
    <el-menu
      default-active="1"
      class="el-menu-vertical-demo" >
      <el-submenu index="1">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span>系统首页</span>
        </template>     
      </el-submenu>
      <el-menu-item index="2">
        <i class="el-icon-menu"></i>
        <span slot="title">媒体信息</span>
      </el-menu-item>
      <el-menu-item index="3" disabled>
        <i class="el-icon-document"></i>
        <span slot="title">企业信息</span>
      </el-menu-item>
      <el-menu-item index="4">
        <i class="el-icon-setting"></i>
        <span slot="title">知识库</span>
      </el-menu-item>
       <el-menu-item index="5">
        <i class="el-icon-setting"></i>
        <span slot="title">系统管理</span>
      </el-menu-item>
       
    </el-menu>
  </el-col>



        </el-row>
    </div>
 
 </div>
</template>
<script>
export default{


}
</script>
<style>
</style>


