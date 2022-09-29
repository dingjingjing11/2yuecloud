<template>
    <div class="cf">
        <div class="zuoce">
            <div class="box-top">
                <div class="box1">
                    <p>
                        <span class="span1">{{topping.salesCount}}</span>
                        <span class="span2">人购买</span>
                    </p>
                    <p>
                        <span class="span1">{{topping.praisePercent}}</span>
                        <span class="span2">好评率</span>
                    </p>
                </div>
                <div class="box2">
                    <div class="dt">大家都在说：</div>
                    <div class="dd">
                        <a href="javascript:;" class="aaa clk">全部评价（{{topping.evaluateCount}}）</a>
                        <a href="javascript:;" class="aaa">有图（{{topping.hasPictureCount}}）</a>
                        <a href="javascript:;" class="aaa">音质好（832）</a>
                        <a href="javascript:;" class="aaa">充电快（832）</a>
                        <a href="javascript:;" class="aaa">材质很软（832）</a>
                        <a href="javascript:;" class="aaa">性价比高（832）</a>
                    </div>
                </div>
            </div>
            <div class="nav">
                <span>排序：</span>
                <a href="javascript:;" class="lu">默认</a>
                <a href="javascript:;">最新</a>
                <a href="javascript:;">最热</a>
            </div>
            <div class="box-xia">
                <div class="xia1" v-for="(i,index) in xiaping" :key='index'>
                    <div class="xia1-left">
                        <img :src="i.member.avatar" alt="">
                        <span>兔****y</span>
                    </div>
                    <div class="xia1-right">
                        <div class="xia1-right-nav">
                            <el-rate  :value="i.score" disabled show-score text-color="#ff9900" score-template="">
                            </el-rate>
                            <span>{{i.orderInfo.specs[0].name}}：{{i.orderInfo.specs[0].nameValue}} {{i.orderInfo.specs[1].name}}：{{i.orderInfo.specs[1].nameValue}} {{i.orderInfo.specs[2].name}}：{{i.orderInfo.specs[2].nameValue}}</span>
                        </div>
                        <div class="zhong">{{i.content}}</div>
                        <div class="tu" v-if="i.pictures!=''">
                            <div class="tu1">
                                <a href="javascript:;" v-for="(j,ind) in xiaping[1].pictures" :key=ind>
                                    <img :src="j" alt="">
                                </a>
                            </div>
                        </div>
                        <div class="time">
                            <span>{{i.createTime}}</span>
                            <span><i></i>{{i.praiseCount}}</span>
                        </div>
                    </div>
                </div>
                <div class="block">
                    <el-pagination
                    background
                    layout="prev, pager, next"
                    :total="1000">
                    </el-pagination>
                </div>
            </div>
        </div>
    </div> 
</template>

<script>
import axios from 'axios'
export default {
    data() {
        return {
            topping:[],
            xiaping:[],
            btn:false,
        };
    },
    mounted() {
        axios.get('https://mock.boxuegu.com/mock/1175/goods/4026116/evaluate').then(res=>{
                if(res.data.msg=='查询成功'){
                    this.topping=res.data.result
                }
		})
        axios.get('https://mock.boxuegu.com/mock/1175/goods/4026116/evaluate/page?page=1&pageSize=10').then(str=>{
            this.xiaping=str.data.result.items
            console.log(this.xiaping);
		})
    },
    methods: {

    },
};
</script>

<style lang="scss" scoped>
.aaa:hover{
    background: #c7fbe4 !important;
    border: 1px solid #27ba9b !important;
    color: #27ba9b !important;
}
.clk{
    border-color: #27ba9b !important;
    background: #27ba9b !important;
    color: #fff !important;
}
.lu{
    color: #27ba9b !important;
}

.zuoce{
    width: 940px;
    margin-right: 20px;
}
.box-top{
    display: flex;
    padding: 30px 0;
    .box1{
        width: 340px;
        display: flex;
        padding: 20px;
        p{
            flex: 1;
            text-align: center;
            .span1{
                font-size: 32px;
                color: #cf4444;
            }
            .span2{
                color: #999;
                display: block;
            }
        }
    }
    .box2{
        flex: 1;
        display: flex;
        border-left: 1px solid #f5f5f5;
        .dt{
            font-weight: 700;
            width: 100px;
            text-align: right;
            line-height: 42px;
        }
        .dd{
            flex: 1;
            display: flex;
            flex-wrap: wrap;
            a{
                width: 132px;
                height: 42px;
                margin-left: 20px;
                margin-bottom: 20px;
                border-radius: 4px;
                border: 1px solid #e4e4e4;
                background: #f5f5f5;
                color: #999;
                text-align: center;
                line-height: 40px;
            }
        }
    }
}
.nav{
    height: 60px;
    line-height: 60px;
    border-top: 1px solid #f5f5f5;
    border-bottom: 1px solid #f5f5f5;
    margin: 0 20px;
    color: #666;
    >span{
        margin-left: 20px;
        font-size: 14px;
    }
    a{
        margin-left: 30px;
        color: #333;
        font-size: 14px;
    }
}
.box-xia{
    padding: 0 20px;
    .xia1{
        display: flex;
        padding: 25px 10px;
        border-bottom: 1px solid #f5f5f5;
        .xia1-left{
            width: 160px;
            >img{
                width: 40px;
                height: 40px;
                border-radius: 50%;
                overflow: hidden;
            }
            >span{
                padding-left: 10px;
                color: #666;
                font-size: 14px;
            }
        }
        .xia1-right{
            flex: 1;
            .xia1-right-nav{
                line-height: 40px;
                display: flex;
                align-items: center;
                >span{
                    padding-left: 10px;
                    color: #666;
                    font-size: 14px;
                }
            }
            .zhong{
                color: #666;
                line-height: 24px;
                font-size: 14px;
            }
            .time{
                color: #999;
                display: flex;
                justify-content: space-between;
                margin-top: 5px;
                >span{
                    color: #999;
                    display: flex;
                    justify-content: space-between;
                    margin-top: 5px;
                    >i{
                        width: 16px;   
                        height: 16.8px;
                        background: url(@/assets/imgs/点赞.png) center center no-repeat;
                        background-size: 16px;
                    }
                }
            }
        }
    }
}
.tu{
    .tu1{
        display: flex;
        flex-wrap: wrap;
        margin-top: 10px;
        >a{
            width: 120px;
            height: 120px;
            border: 1px solid #e4e4e4;
            margin-right: 20px;
            margin-bottom: 10px;
            >img{
                width: 100%;
                height: 100%;
                object-fit: contain;
            }
        }
    }
}
</style>