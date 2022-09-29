<template>

    <div class="goods-article" data-v-b185dbf4="">
        <div class="goods-tabs" data-v-b185dbf4="">
            <div class="goods-tabs" data-v-5dc77adc="" data-v-b185dbf4="">
                <nav data-v-5dc77adc=""><a class="" href="javascript:;" data-v-5dc77adc="">商品详情</a><a class="active"
                        href="javascript:;" data-v-5dc77adc="" @click="clk()">商品评价<span
                            data-v-5dc77adc="">(0)</span></a></nav>
                <div class="goods-comment" data-v-0d5919e4="" data-v-5dc77adc="">
                    <div class="head" data-v-0d5919e4="">
                        <div class="data" data-v-0d5919e4="">
                            <p data-v-0d5919e4=""><span data-v-0d5919e4="">{{ arrList.salesCount }}</span><span
                                    data-v-0d5919e4="">人购买</span></p>
                            <p data-v-0d5919e4=""><span data-v-0d5919e4="">{{ arrList.praisePercent }}</span><span
                                    data-v-0d5919e4="">好评率</span></p>
                        </div>
                        <div class="tags" data-v-0d5919e4="">
                            <div class="dt" data-v-0d5919e4="">大家都在说：</div>
                            <div class="dd" data-v-0d5919e4="">
                                <el-button v-for="(item, index) in evaluateData.tags" :key="index"
                                    @click="select(index, item)" :type="tabIndex == index ? 'primary' : ''">
                                    {{ item.title }}({{ item.tagCount }})</el-button>
                                <a href="javascript:;" class="active" data-v-0d5919e4="">全部评价（{{ arrList.evaluateCount
                                }}）</a><a href="javascript:;" class="" data-v-0d5919e4="">有图（{{
        arrList.hasPictureCount
}}）</a><a href="javascript:;" class="" data-v-0d5919e4="">{{ arrList.tags[0].title
}}（{{ arrList.tags[0].tagCount }}）</a><a href="javascript:;" class=""
                                    data-v-0d5919e4="">{{ arrList.tags[1].title }}（{{ arrList.tags[1].tagCount }}）</a><a
                                    href="javascript:;" class="" data-v-0d5919e4="">{{ arrList.tags[2].title }}（{{
                                            arrList.tags[2].tagCount
                                    }}）</a><a href="javascript:;" class=""
                                    data-v-0d5919e4="">{{ arrList.tags[3].title }}（{{ arrList.tags[3].tagCount }}）</a>
                            </div>
                        </div>
                    </div>
                    <div class="sort" data-v-0d5919e4="">
                        <span data-v-0d5919e4="">排序：</span>
                        <a class="active" href="javascript:;" data-v-0d5919e4="" @click="sort('默认')">默认</a>

                        <a class="" href="javascript:;" data-v-0d5919e4="" @click="sort('最新')">最新</a>
                        <a class="" href="javascript:;" data-v-0d5919e4="" @click="sort('最热')">最热</a>
                    </div>
                    <div class="list">
                        <div class="item" data-v-0d5919e4="" v-for="a in arrshop">
                            <div class="user" data-v-0d5919e4="">
                                <img :src="a.member.avatar" alt="" data-v-0d5919e4=""><span
                                    data-v-0d5919e4="">兔****y</span>
                            </div>
                            <div class="body" data-v-0d5919e4="">
                                <div class="score" data-v-0d5919e4="">
                                    <el-rate :value="a.score" disabled show-score text-color="#ff9900"
                                        score-template="">
                                    </el-rate>

                                    <span class="attr" data-v-0d5919e4="">颜色：白色 尺寸：10cm 产地：美国</span>
                                </div>
                                <div class="text" data-v-0d5919e4="">
                                    {{ a.content }}</div>
                                <div class="goods-comment-image" data-v-9ed3b0c6="" data-v-0d5919e4="">
                                    <div class="list" data-v-9ed3b0c6="" v-if="a.pictures != ''"><a class=""
                                            href="javascript:;" data-v-9ed3b0c6="" v-for="a in arrshop[1].pictures"><img
                                                :src="a" alt="" data-v-9ed3b0c6=""></a><a class="" href="javascript:;"
                                            data-v-9ed3b0c6="">
                                        </a></div>

                                </div>
                                <div class="time" data-v-0d5919e4=""><span data-v-0d591>{{ a.createTime }}
                                    </span><span class="zan" data-v-0d5919e4="">

                                        {{ a.praiseCount }}</span></div>
                            </div>
                        </div>
                    </div>
                    <div class="xtx-pagination" dataf17b2f6e="">
                        <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange"
                            :current-page="currentPage4" :page-sizes="[100, 200, 300, 400]" :page-size="100"
                            layout="total, sizes, prev, pager, next, jumper" :total="400">
                        </el-pagination>
                        <a href="javascript:;" class="disabled" data-v-f17b2f6e="">上一页</a>
                        <a href="javascript:;" class="active" data-v-f17b2f6e="">1</a><a href="javascript:;" class=""
                            data-v-f17b2f6e="">2</a><a href="javascript:;" class="" data-v-f17b2f6e="">3</a><a
                            href="javascript:;" class="" data-v-f17b2f6e="">4</a><a href="javascript:;" class=""
                            data-v-f17b2f6e="">5</a><span data-v-f17b2f6e="">...</span><a href="javascript:;"
                            data-v-f17b2f6e="">下一页</a>
                    </div>
                </div>
            </div>
        </div>

    </div>
</template>
<script>

import axios from 'axios'
export default {
    //      components:{
    //     evaluateCount,page
    //   },
    data() {
        return {
            arrList: [],
            arrshop: [],
            value: '',
            hasPicture: false,
            sortField: '',
            tabIndex: 0,
            page: 1,
            tag: '',
            evaluateData: ''
        }

    },
    methods: {
        getEventListeners() {
            axios({
                method: 'get',
                url: `https://mock.boxuegu.com/mock/1175/goods/4026116/evaluate/page`,
                params: { page: this.page, pageSize: 5, tag: this.tag, sortField: this.sortField, hasPicture: this.hasPicture }
            }).then(res => {
                this.arrshop = res.result;
                console.log(this.arrshop);
            })
        },
        handleSizeChange(val) {
            console.log(val);
        },
        //当前页
        handleCurrentChange(val) {
            this.page = val;
            this.getEventListeners()
        },

        sort(str) {
            this.page = 1
            if (str == '默认') {
                this.sortField = ''
            } else if (str == '最新') {
                this.sortField = 'createTime'
            } else if (str == '最热') {
                this.sortField = 'praiseCount'
            }
            this.getEventListeners()
        },
        select(index, item) {
            this.page = 1
            this.tabIndex = index
            console.log(item); //item 有图
            //掉接口
            if (item.title == '全部评价') {
                this.hasPicture = false;
                this.tag = ''
            }
            if (item.msg == 'hasPicture') {
                this.hasPicture
            }
            if (item.msg == 'tag') {
                this.tag = item.title
            }
            this.getEventListeners()
        }


    },
    mounted() {


        axios.get('https://mock.boxuegu.com/mock/1175/goods/4026116/evaluate').then(res => {
            if (res.data.msg == '查询成功') {
                this.arrList = res.data.result;
                this.arrList.tags.forEach(i => {
                    i.msg = 'tag'
                })

                console.log();
            }
        })
        this.arrList.tags.unshift({ title: '全部评价', tagCount: this.arrList.hasPictureCount, msg: 'hasPicture' })
        this.arrList.tags.unshift({ title: '有图' })

        axios.get('https://mock.boxuegu.com/mock/1175/goods/4026116/evaluate/page?page=1&pageSize=10').then(str => {
            this.arrshop = str.data.result.items
            console.log(this.arrshop);
        })

    }
}
</script>
<style>
.goods-comment .head .tags .dd[data-v-0d5919e4] {
    flex: 1;
    display: flex;
    flex-wrap: wrap;
}

.goods-footer .goods-article[data-v-b185dbf4] {
    width: 940px;
    margin: 0 auto;
}

.goods-comment-image .list[data-v-9ed3b0c6] {
    display: flex;
    flex-wrap: wrap;
    margin-top: 10px;
}

.goods-comment-image .list a[data-v-9ed3b0c6] {
    width: 120px;
    height: 120px;
    border: 1px solid #e4e4e4;
    margin-right: 20px;
    margin-bottom: 10px;
}

img {
    max-width: 100%;
    max-height: 100%;
    vertical-align: middle;
}

.goods-tabs nav[data-v-5dc77adc] {
    height: 70px;
    line-height: 70px;
    display: flex;
    border-bottom: 1px solid #f5f5f5;
}

.goods-tabs nav a[data-v-5dc77adc]:first-child {
    border-right: 1px solid #f5f5f5;
}

.goods-tabs nav a[data-v-5dc77adc] {
    padding: 0 40px;
    font-size: 18px;
    position: relative;
}

a {
    text-decoration: none;
    color: #333;
    outline: none;
}

a {
    background-color: transparent;
}

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

.goods-tabs nav a.active[data-v-5dc77adc]:before {
    content: "";
    position: absolute;
    left: 40px;
    bottom: -1px;
    width: 72px;
    height: 2px;
    background: #27ba9b;
}

.goods-tabs nav a>span[data-v-5dc77adc] {
    color: #cf4444;
    font-size: 16px;
    margin-left: 10px;
}

.goods-comment .head[data-v-0d5919e4] {
    display: flex;
    padding: 30px 0;
}

.goods-comment .head .data[data-v-0d5919e4] {
    width: 340px;
    display: flex;
    padding: 20px;
}

.goods-comment .head .data p[data-v-0d5919e4] {
    flex: 1;
    text-align: center;
}

.goods-comment .head .data p span[data-v-0d5919e4]:first-child {
    font-size: 32px;
    color: #cf4444;
}

.goods-comment .head .data p span[data-v-0d5919e4] {
    display: block;
}

.goods-comment .head .data p span[data-v-0d5919e4]:last-child {
    color: #999;
}

.goods-comment .head .data p span[data-v-0d5919e4] {
    display: block;
}

.goods-comment .head .tags[data-v-0d5919e4] {
    flex: 1;
    display: flex;
    border-left: 1px solid #f5f5f5;
}

.goods-comment .head .tags .dt[data-v-0d5919e4] {
    font-weight: 700;
    width: 100px;
    text-align: right;
    line-height: 42px;
}

.goods-comment .head .tags .dd[data-v-0d5919e4] {
    flex: 1;
    display: flex;
    flex-wrap: wrap;
}

.goods-comment .head .tags .dd>a.active[data-v-0d5919e4] {
    border-color: #27ba9b;
    background: #27ba9b;
    color: #fff;
}

.goods-comment .head .tags .dd>a[data-v-0d5919e4] {
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

.goods-comment .sort[data-v-0d5919e4] {
    height: 60px;
    line-height: 60px;
    border-top: 1px solid #f5f5f5;
    border-bottom: 1px solid #f5f5f5;
    margin: 0 20px;
    color: #666;
}

.goods-comment .sort>span[data-v-0d5919e4] {
    margin-left: 20px;
}

* {
    box-sizing: border-box;
}

.goods-comment .sort[data-v-0d5919e4] {
    /* float: left; */
    height: 60px;
    width: 900px;
    /* line-height: 60px; */
}

a {
    text-decoration: none;
    color: #333;
    outline: none;
}

a {
    background-color: transparent;
}

.goods-comment .sort>a.active[data-v-0d5919e4],
.goods-comment .sort>a[data-v-0d5919e4]:hover {
    color: #27ba9b;
}

.goods-comment .sort>a[data-v-0d5919e4] {
    margin-left: 30px;
}

goods-comment .sort>a[data-v-0d5919e4] {
    margin-left: 30px;
}

.goods-comment .list[data-v-0d5919e4] {
    padding: 0 20px;
}

.goods-comment .list .item[data-v-0d5919e4] {
    display: flex;
    padding: 25px 10px;
    border-bottom: 1px solid #f5f5f5;
}

.goods-comment .list .item .user[data-v-0d5919e4] {
    width: 160px;
}

.goods-comment .list .item .user img[data-v-0d5919e4] {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    overflow: hidden;
}

img {
    max-width: 100%;
    max-height: 100%;
    vertical-align: middle;
}

.goods-comment .list .item .user span[data-v-0d5919e4] {
    padding-left: 10px;
    color: #666;
}

.goods-comment .list .item .body[data-v-0d5919e4] {
    flex: 1;
}

.goods-comment .list .item .body .score[data-v-0d5919e4] {
    line-height: 40px;
}

.goods-comment .list .item .body .score .iconfont[data-v-0d5919e4] {
    color: #ff9240;
    padding-right: 3px;
}

.iconfont {
    font-family: "iconfont" !important;
    font-size: 16px;
    font-style: normal;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}

.goods-comment .list .item .body .score .attr[data-v-0d5919e4] {
    padding-left: 10px;
    color: #666;
}

.goods-comment .list .item .text[data-v-0d5919e4] {
    color: #666;
    line-height: 24px;
}

.goods-comment .list .item .time[data-v-0d5919e4] {
    color: #999;
    display: flex;
    justify-content: space-between;
    margin-top: 5px;
}

.goods-comment .list .item .time[data-v-0d5919e4] {
    color: #999;
}

.xtx-pagination[data-v-f17b2f6e] {
    display: flex;
    justify-content: center;
    padding: 30px;
}

.xtx-pagination>a.disabled[data-v-f17b2f6e] {
    cursor: not-allowed;
    opacity: .4;
}

.xtx-pagination>a[data-v-f17b2f6e] {
    display: inline-block;
    padding: 5px 10px;
    border: 1px solid #e4e4e4;
    border-radius: 4px;
    margin-right: 10px;
}

a {
    text-decoration: none;
    color: #333;
    outline: none;
}

.xtx-pagination>a.active[data-v-f17b2f6e] {
    background: #27ba9b;
    color: #fff;
    border-color: #27ba9b;
}

.xtx-pagination>a[data-v-f17b2f6e] {
    display: inline-block;
    padding: 5px 10px;
    border: 1px solid #e4e4e4;
    border-radius: 4px;
    margin-right: 10px;
}

.xtx-pagination>a[data-v-f17b2f6e] {
    display: inline-block;
    padding: 5px 10px;
    border: 1px solid #e4e4e4;
    border-radius: 4px;
    margin-right: 10px;
}

.xtx-pagination>span[data-v-f17b2f6e] {
    margin-right: 10px;
}

.xtx-pagination>a[data-v-f17b2f6e] {
    display: inline-block;
    padding: 5px 10px;
    border: 1px solid #e4e4e4;
    border-radius: 4px;
    margin-right: 10px;
}
</style>