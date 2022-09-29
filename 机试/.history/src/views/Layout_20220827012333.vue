<template>
    <div class="box">
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
        <div class="center" v-show="kg">
            <div id="main"></div>
            <div id="main1"></div>
            <div id="main2"></div>
            <div id="main3"></div>
        </div>

    </div>
</template>
<script>
import * as echarts from 'echarts';
export default {
    data() {
        return {
            kg: false

        }
    },
    methods: {
        myCharts() {

            var myChart = echarts.init(document.getElementById('main'));

            // 绘制图表
            // console.log(document.getElementById('main'));

            myChart.setOption({
                title: {
                    text: '第三方平台账户（境内）'
                },
                tooltip: {},
                xAxis: {
                    data: ['微信', '微博', '头条', '抖音', '快手', '微信', '微博', '头条',]
                },
                yAxis: {},
                series: [
                    {
                        name: '销量',
                        type: 'bar',
                        data: [0, 5, 20, 36, 10, 10, 20]
                    }
                ]
            });
        },
        myChart1() {
            var myChart = echarts.init(document.getElementById('main1'));
            myChart.setOption({
                title: {
                    text: '集团企业分布领域'
                },
                tooltip: { trigger: 'item' },

                series: [
                    {
                        name: 'Access From',
                        type: 'pie',
                        radius: ['40%', '70%'],
                        avoidLabelOverlap: false,
                        label: {
                            show: false,
                            position: 'center'
                        },
                        emphasis: {
                            label: {
                                show: true,
                                fontSize: '40',
                                fontWeight: 'bold'
                            }
                        },
                        labelLine: {
                            show: false
                        },
                        data: [
                            { value: 369, name: '5g' },
                            { value: 108, name: '大数据' },
                            { value: 19, name: '云计算' },
                            { value: 12, name: '区块链' },
                            { value: 8, name: '人工智能' }
                        ]
                    }
                ]
            });
        },
        myChart2() {
            var myChart = echarts.init(document.getElementById('main2'));
            myChart.setOption({
                title: {
                    text: '涉及领域'
                },
                tooltip: {},
                series: [
                    {
                        name: 'pie',
                        type: 'pie',
                        selectedMode: 'single',
                        selectedOffset: 30,
                        clockwise: true,
                        label: {
                            fontSize: 18,
                            color: '#235894'
                        },
                        labelLine: {
                            lineStyle: {
                                color: '#235894'
                            }
                        },
                        data: [
                            { value: 1048, name: '美食' },
                            { value: 735, name: '视频' },
                            { value: 580, name: '政法新闻' },
                            { value: 484, name: '科技财经' },
                            { value: 300, name: '民生' },
                            { value: 300, name: '科技' },
                            { value: 300, name: '健康教育' },
                            { value: 300, name: '娱乐' },
                            { value: 300, name: '体育' },
                            { value: 300, name: '美食旅游' },
                            { value: 300, name: '文学艺术' },
                            { value: 300, name: '图书资讯' },

                        ],
                        itemStyle: {
                            opacity: 0.7,
                            color: {
                                // image: piePatternImg,
                                // repeat: 'repeat'
                            },
                            borderWidth: 3,
                            borderColor: '#235894'
                        }
                    }
                ]
            });
        },
        myChart3() {
            var myChart = echarts.init(document.getElementById('main3'));
            myChart.setOption({
                title: {
                    text: '集团企业所在园区'
                },
                tooltip: {
                    trigger: 'axis',
                    axisPointer: {
                        type: 'shadow'
                    }
                },
                grid: {
                    left: '3%',
                    right: '4%',
                    bottom: '3%',
                    containLabel: true
                },
                xAxis: {
                    type: 'value',

                },
                yAxis: {
                    type: 'category',
                    data: ['环普国际科技园', '创客空间', '软件园', '软件新城二期', '北大科技园']
                },

                series: [
                    {
                        name: '2012',
                        type: 'bar',
                        data: [19325, 23438, 31000, 121594, 134141, 681807]
                    }
                ]
            });
        },

    },
    mounted() {
        this.
 
        if (this.$route.params.name == 'A') {
            this.kg = true

        } else {
            this.kg = false
        }
        ;

    }
}

</script>
<style>
.sidebar {
    float: left;
    height: 100%;
    width: 20%;
    /* margin-top: 150px; */
}

.center {
    float: left;
    height: 300px;
    width: 80%;
    border: 1px solid#ccc;

}

/* .center-bt {
    height: 300px;
    width: 50%;
    border: 1px solid#ccc;
} */

#main {
    float: left;
    /* margin-top: 200px; */
    width: 40%;
    height: 300px;
}

#main1 {
    float: left;
    /* margin-top: 200px; */
    width: 40%;
    height: 300px;
}

#main2 {
    float: left;
    width: 40%;
    height: 300px;
}

#main3 {
    float: left;
    width: 40%;
    height: 300px;
}

/* .top {
    height: 400px;
} */

/* .center-bt {
    margin-top: 10px;
} */
</style>


