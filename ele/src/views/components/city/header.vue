<template>
    <div>
        <header id="head_top">
            <span class="head_logo">ele.me</span>
            <a href="#/login" class="head_login"><span class="login_span">登录|注册</span></a>

        </header>
        <nav class="city_nav">
            <div class="city_tip"><span>当前定位城市：</span>
                <span>定位不准时，请在城市列表中选择</span>
            </div>
            <a href="#/city/+id" class="guess_city">
                <span>{{objsort.name}}</span>
                <svg class="arrow_right">
                    <!-- <i class="el-icon-arrow-right"></i> -->
                </svg>
            </a>
        </nav>
        <section data-v-3ea254f4="" id="hot_city_container">
            <h4 data-v-3ea254f4="" class="city_title">热门城市</h4>
            <ul data-v-3ea254f4="" class="citylistul clear">
                <li data-v-3ea254f4="" class="" v-for="(item) in obj">
                <route-link :to="'/city/'+ item.id">
                    {{item.name}}
                </route-link>
                </li>
            </ul>
        </section>
        <section data-v-3ea254f4="" class="group_city_container">
            <ul data-v-3ea254f4="" class="letter_classify">
                <li data-v-3ea254f4="" class="letter_classify_li" v-for="(item,index,key ) in objAll"  :key="key">
                    <h4 data-v-3ea254f4="" class="city_title" >
                    {{index}}
                        <span data-v-3ea254f4="">按字母排序</span>
                    </h4>
                    <ul data-v-3ea254f4="" class="groupcity_name_container citylistul clear">
                        
                                <li data-v-3ea254f4="" class="ellipsis" v-for="a in item" :key="a.id">
                                <route-link :to="'/city/'+ a.id">
                                     {{a.name}}
                                 </route-link>
                               </li>
                        
                        
                    </ul>
                </li>
            </ul>
        </section>
    </div>
</template>
<script>

import { findehot,findelocation,findeAll } from '@/api/index.js';
export default {

    data() {
        return {
            obj: {},
            objsort:{},
            objAll:{}
        }
    },
    computed: {
        objAll(){
            
        }
    },
    watch: {

    },
    mounted() {
        //热门城市
        findehot().then(res => {
            console.log(res);
            this.obj = res
            console.log(this.obj);
        })
        //定位城市
         findelocation().then(res => {
            console.log(res);
            this.objsort = res
            console.log(this.objsort);
        })
        //所有城市
        findeAll().then(res=>{
             console.log(res);
            this.objAll = res
            console.log(this.objAll);
        })
        


        
    },
    methods: {
      
    }
};
</script>
<style lang='scss' scoped>
#head_top {
    background-color: #3190e8;
    position: fixed;
    z-index: 100;
    left: 0;
    top: 0;
    width: 100%;
    height: 1.95rem;
}

header {

    padding: 0;
    margin: 0;
    list-style: none;
    font-style: normal;
    text-decoration: none;
    border: none;
    color: #333;
    font-weight: 400;
    font-family: Microsoft Yahei;
    box-sizing: border-box;
    -webkit-tap-highlight-color: transparent;
    -webkit-font-smoothing: antialiased;
}

.head_logo {
    left: 0.4rem;
    font-weight: 400;
    font-size: .7rem;
    color: #fff;
    width: 2.3rem;
    height: 0.7rem;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
}

.head_login {
    right: 0.55rem;
    font-size: .65rem;
    color: #fff;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
}

.head_login .login_span {
    color: #fff;
}

.head_login {
    // right: 0.55rem;
    font-size: .65rem;
}

::-webkit-scrollbar {
    width: 0;
    height: 0;
    background-color: #f5f5f5;
}

a,
span {
    padding: 0;
    margin: 0;
    list-style: none;
    font-style: normal;
    text-decoration: none;
    border: none;
    color: #333;
    font-weight: 400;
    font-family: Microsoft Yahei;
    box-sizing: border-box;
    -webkit-tap-highlight-color: transparent;
    -webkit-font-smoothing: antialiased;
}

.city_nav {
    padding-top: 2.35rem;
    border-top: 1px solid #e4e4e4;
    background-color: #fff;
    margin-bottom: 0.4rem;
}

nav {
    padding: 0;
    margin: 0;
    list-style: none;
    font-style: normal;
    text-decoration: none;
    border: none;
    color: #333;
    font-weight: 400;
    font-family: Microsoft Yahei;
    box-sizing: border-box;
    -webkit-tap-highlight-color: transparent;
    -webkit-font-smoothing: antialiased;
}

.city_nav .city_tip {
    display: -ms-flexbox;
    display: flex;
    -ms-flex-pack: justify;
    justify-content: space-between;
    line-height: 1.45rem;
    padding: 0 0.45rem;
}

.city_nav .city_tip span:first-of-type {
    font-size: .55rem;
    color: #666;
}

.city_nav .city_tip span:nth-of-type(2) {
    font-weight: 900;
    font-size: .475rem;
    color: #9f9f9f;
}

.city_nav .guess_city {
    display: -ms-flexbox;
    display: flex;
    -ms-flex-pack: justify;
    justify-content: space-between;
    -ms-flex-align: center;
    align-items: center;
    height: 1.8rem;
    padding: 0 0.45rem;
    border-top: 1px solid #e4e4e4;
    border-bottom: 2px solid #e4e4e4;
    font: 0.75rem/1.8rem Microsoft YaHei;
}

.city_nav .guess_city span:first-of-type {
    color: #3190e8;
}

.city_nav .guess_city .arrow_right {
    width: 0.6rem;
    height: 0.6rem;
    fill: #999;
}

::-webkit-scrollbar {
    width: 0;
    height: 0;
    background-color: #f5f5f5;
}

.city_nav .guess_city {

    font: 0.75rem/1.8rem Microsoft YaHei;
}

.city_nav .guess_city .arrow_right {
    width: 0.6rem;
    height: 0.6rem;
    fill: #999;
}

#hot_city_container {
    background-color: #fff;
    margin-bottom: 0.4rem;
}

.city_title {
    color: #666;
    font-weight: 400;
    text-indent: 0.45rem;
    border-top: 2px solid #e4e4e4;
    border-bottom: 1px solid #e4e4e4;
    font: 0.55rem/1.45rem Helvetica Neue;
}

h4 {
    display: block;
    margin-block-start: 1.33em;
    margin-block-end: 1.33em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    // font-weight: bold;

}

.clear {
    zoom: 1;
}

a,
article,
aside,
b,
body,
button,
dd,
div,
dl,
dt,
figcaption,
figure,
footer,
h1,
h2,
h3,
h4,
h5,
h6,
header,
i,
input,
li,
nav,
p,
section,
select,
span,
textarea,
ul {
    padding: 0;
    margin: 0;
    list-style: none;
    font-style: normal;
    text-decoration: none;
    border: none;
    color: #333;
    font-weight: 400;
    font-family: Microsoft Yahei;
    box-sizing: border-box;
    -webkit-tap-highlight-color: transparent;
    -webkit-font-smoothing: antialiased;
}

ul ul {
    list-style-type: circle;
    margin-block-start: 0px;
    margin-block-end: 0px;
}

.clear:after {
    content: "";
    display: block;
    clear: both;
}

.citylistul li {
    float: left;
    text-align: center;
    color: #3190e8;
    border-bottom: 0.025rem solid #e4e4e4;
    border-right: 0.025rem solid #e4e4e4;
    width: 25%;
    height: 1.75rem;
    font: 0.6rem/1.75rem Microsoft YaHei;
}

::-webkit-scrollbar {
    width: 0;
    height: 0;
    background-color: #f5f5f5;
}

li {
    display: list-item;
    text-align: -webkit-match-parent;
}

style attribute {
    font-size: 23.4375px;
}

.letter_classify_li {
    margin-bottom: 0.4rem;
    background-color: #fff;
    border-bottom: 1px solid #e4e4e4;
}

.city_title {
    color: #666;
    font-weight: 400;
    text-indent: 0.45rem;
    border-top: 2px solid #e4e4e4;
    border-bottom: 1px solid #e4e4e4;
    font: 0.55rem/1.45rem Helvetica Neue;
}

h4 {
    // display: block;
    margin-block-start: 1.33em;
    margin-block-end: 1.33em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    font-weight: bold;
}

li {
    text-align: -webkit-match-parent;
}

.city_title span[data-v-3ea254f4] {
    font-size: .475rem;
    color: #999;
}

.city_title[data-v-3ea254f4] {
    color: #666;
    font-weight: 400;
    text-indent: 0.45rem;
    border-top: 2px solid #e4e4e4;
    border-bottom: 1px solid #e4e4e4;
    font: 0.55rem/1.45rem Helvetica Neue;
}

h4 {
    display: block;
    margin-block-start: 1.33em;
    margin-block-end: 1.33em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    // font-weight: bold;
}

.city_title span[data-v-3ea254f4] {
    font-size: .475rem;
    color: #999;
}

.city_title[data-v-3ea254f4] {
    // color: #666;
    // font-weight: 400;
    text-indent: 0.45rem;
    // border-top: 2px solid #e4e4e4;
    // border-bottom: 1px solid #e4e4e4;
    font: 0.55rem/1.45rem Helvetica Neue;
}

.letter_classify_li .groupcity_name_container li[data-v-3ea254f4] {
    color: #666;
}

.citylistul li[data-v-3ea254f4] {
    float: left;
    text-align: center;
    color: #3190e8;
    border-bottom: 0.025rem solid #e4e4e4;
    border-right: 0.025rem solid #e4e4e4;
    width: 25%;
    height: 1.75rem;
    font: 0.6rem/1.75rem Microsoft YaHei;
}

.ellipsis {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
}
</style>