<template>
   <section class="chart-container">
        <el-row>                     
            <el-col :span="12">
                <div id="chartPie" style="width:100%; height:400px;"></div>
            </el-col>          
        </el-row>
    </section>
</template>
<script>
import * as echarts from 'echarts';
export default {
     data() {
            return {                                     
                chartPie: null
            }
        },
        methods: {                               
            drawPieChart() {
                this.chartPie = echarts.init(document.getElementById('chartPie'));
                this.chartPie.setOption({
                    title: {
                        text: 'Pie Chart',
                        subtext: '纯属虚构',
                        x: 'center'
                    },
                    tooltip: {
                        trigger: 'item',
                        formatter: "{a} <br/>{b} : {c} ({d}%)"
                    },
                    legend: {
                        orient: 'vertical',
                        left: 'left',
                        data: ['全部评价', '有图', '音质好', '充电快', '材质很软','性价比高']
                    },
                    series: [
                        {
                            name: '访问来源',
                            type: 'pie',
                            radius: '55%',
                            center: ['50%', '60%'],
                            data: [
                                { value: 832, name: '全部评价' },
                                { value: 46, name: '有图' },
                                { value: 34, name: '音质好' },
                                { value: 66, name: '充电快' },
                                { value: 32, name: '材质很软' },
                                { value: 97, name: '性价比高' }
                            ],
                            itemStyle: {
                                emphasis: {
                                    shadowBlur: 10,
                                    shadowOffsetX: 0,
                                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                                }
                            }
                        }
                    ]
                });
            },
            drawCharts() {
                this.drawPieChart()
            },
        },
        mounted: function () {
            this.drawCharts()
        },
       
    
   computed: {
     
   },
   watch: {
     
   },
   mounted() {
     
   },
   methods: {
     
   }
};
</script>
<style lang='scss' scoped>
 *{
    margin:0;
    padding:0;
    list-style: none;
 }
</style>