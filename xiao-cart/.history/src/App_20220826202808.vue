<template>
    <div>
        <!-- 侧边栏 -->
        <div class="sidebar">
            <el-row class="tac">
                <el-col :span="12">
                    <el-menu class="el-menu-vertical-demo">
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
                        <el-menu-item index="3">
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
        <!-- 中间部分 -->
        <div>
            
        </div>

    </div>
</template>
<script>
import * as echarts from 'echarts';
export default {
   data() {
      return {
      }
   },
   methods:{
    var chartDom = document.getElementById('main')



     myChart.setOption({
  title: {
    text: 'ECharts 入门示例'
  },
  tooltip: {},
  xAxis: {
    data: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子']
  },
  yAxis: {},
  series: [
    {
      name: '销量',
      type: 'bar',
      data: [5, 20, 36, 10, 10, 20]
    }
  ]
})

   }


}
</script>
<style>
.sidebar {
    width: 300px;
    height: 100%;
    margin: 150px 0;
}
</style>


