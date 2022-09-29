<template>
    <div id="app">
        <div>
            <!---->
            <div data-v-0b97e5f4="" class="city_container">
                <header data-v-cec0c0c0="" data-v-0b97e5f4="" id="head_top">
                    <section data-v-cec0c0c0="" class="head_goback">
                        <svg data-v-cec0c0c0="" width="100%" height="100%"
                            xmlns="http://www.w3.org/2000/svg" version="1.1">
                            <polyline data-v-cec0c0c0="" points="12,18 4,9 12,0"
                                style="fill: none; stroke: rgb(255, 255, 255); stroke-width: 2;">
                            </polyline>
                        </svg>
                    </section>
                    <!---->
                    <section data-v-cec0c0c0="" class="title_head ellipsis">
                        <span data-v-cec0c0c0=""
                            class="title_text">哈尔滨</span></section>
                             <a data-v-0b97e5f4="" href="#/home"
                        class="change_city" data-v-cec0c0c0="">切换城市</a>
                </header>
                <form data-v-0b97e5f4="" class="city_form">
                    <div data-v-0b97e5f4="">
                        <input data-v-0b97e5f4="" type="search" name="city"
                            placeholder="输入学校、商务楼、地址" required="required" class="city_input input_style"></div>
                    <div data-v-0b97e5f4="">
                        <input data-v-0b97e5f4="" type="submit" name="submit" value="提交"
                            class="city_submit input_style"></div>
                </form>
                <header data-v-0b97e5f4="" class="pois_search_history">搜索历史</header>
                <ul data-v-0b97e5f4="" class="getpois_ul">
                    <li data-v-0b97e5f4="">
                        <h4 data-v-0b97e5f4="" class="pois_name ellipsis">上海市人民政府</h4>
                        <p data-v-0b97e5f4="" class="pois_address ellipsis">上海市黄浦区人民大道200号(人民广场地铁站3号口步行340米)</p>
                    </li>
                </ul>
                <footer data-v-0b97e5f4="" class="clear_all_history">清空所有</footer>
                
            </div> <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
                style="position: absolute; width: 0px; height: 0px; visibility: hidden;">

            </svg>
        </div>
    </div>
</template>
<script>

export default {
    name: '',
    components: {

    },
    data() {
        return {

        }
    },
    computed: {

    },
    watch: {

    },
    mounted() {
        this.id=this.$route.params.id
    },
    methods: {

    }
};
</script>
<style lang='scss' scoped>
// /* .city_container[data-v-0b97e5f4] {
//     padding-top: 2.35rem;
// } */
#head_top[data-v-cec0c0c0] {
    background-color: #3190e8;
    position: fixed;
    z-index: 100;
    left: 0;
    top: 0;
    width: 100%;
    height: 1.95rem;
}
a, article, aside, b, body, button, dd, div, dl, dt, figcaption, 
figure, footer, h1, h2, h3, h4, h5, h6, header, i, input, li, nav,
 p, section, select, span, textarea, ul {
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
.head_goback[data-v-cec0c0c0] {
    left: 0.4rem;
    width: 0.6rem;
    height: 1rem;
    line-height: 2.2rem;
    margin-left: 0.4rem;
}
svg:not(:root) {
    overflow: hidden;
}
.head_goback[data-v-cec0c0c0] {
   
    line-height: 2.2rem;
    /* margin-left: 0.4rem; */
}
::-webkit-scrollbar {
    width: 0;
    height: 0;
    background-color: #f5f5f5;
}
::-webkit-scrollbar-thumb {
    border-radius: 10px;
    // -webkit-box-shadow: inset 0 0 6px rgb(0 0 0 / 30%);
    background-color: #555;
}
::-webkit-scrollbar-track {
    // -webkit-box-shadow: inset 0 0 1px transparent;
    border-radius: 10px;
    background-color: #f5f5f5;
}
element.style {
    fill: none;
    stroke: rgb(255, 255, 255);
    stroke-width: 2;
}
user agent stylesheet
:not(svg) {
    transform-origin: 0px 0px;
}
.title_head[data-v-cec0c0c0] {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    width: 50%;
    color: #fff;
    text-align: center;
}
.ellipsis {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
}
.title_head .title_text[data-v-cec0c0c0] {
    font-size: .8rem;
    color: #fff;
    text-align: center;
    font-weight: 700;
}
.change_city[data-v-0b97e5f4] {
    right: 0.4rem;
    font-size: .6rem;
    color: #fff;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
}
.city_form[data-v-0b97e5f4] {
    background-color: #fff;
    border-top: 1px solid #e4e4e4;
    border-bottom: 1px solid #e4e4e4;
    padding-top: 0.4rem;
}

form {
    display: block;
    margin-top: 0em;
    // overflow: hidden;
    margin-top: 90px;

}
.city_form div .city_input[data-v-0b97e5f4] {
    border: 1px solid #e4e4e4;
    padding: 0 0.3rem;
    font-size: .65rem;
    color: #333;
}
.city_form div .input_style[data-v-0b97e5f4] {
    border-radius: 0.1rem;
    margin-bottom: 0.4rem;
    width: 100%;
    height: 1.4rem;
}
input {
    writing-mode: horizontal-tb !important;
    /* font-style: ; */
    // // font-variant-ligatures: ;
    // font-variant-caps: ;
    // font-variant-numeric: ;
    // font-variant-east-asian: ;
    /* font-weight: ; */
    // font-stretch: ;
    // font-size: ;
    /* font-family: ; */
    text-rendering: auto;
    color: fieldtext;
    letter-spacing: normal;
    word-spacing: normal;
    line-height: normal;
    text-transform: none;
    text-indent: 0px;
    text-shadow: none;
    display: inline-block;
    text-align: start;
    appearance: auto;
    -webkit-rtl-ordering: logical;
    cursor: text;
    background-color: field;
}
.city_form div .city_submit[data-v-0b97e5f4] {
    background-color: #3190e8;
    font-size: .65rem;
    color: #fff;
    text-align: center;
}
.city_form div .input_style[data-v-0b97e5f4] {
    border-radius: 0.1rem;
    margin-bottom: 0.4rem;
    width: 100%;
    height: 1.4rem;
}
.pois_search_history[data-v-0b97e5f4] {
    border-top: 1px solid #e4e4e4;
    border-bottom: 1px solid #e4e4e4;
    padding-left: 0.5rem;
    font: 0.475rem/0.8rem Microsoft YaHei;
}
.getpois_ul[data-v-0b97e5f4] {
    background-color: #fff;
    border-top: 1px solid #e4e4e4;
}
.getpois_ul li[data-v-0b97e5f4] {
    margin: 0 auto;
    padding-top: 0.65rem;
    border-bottom: 1px solid #e4e4e4;
}
li {
    display: list-item;
    text-align: -webkit-match-parent;
}
.getpois_ul li .pois_address[data-v-0b97e5f4] {
    width: 90%;
    margin: 0 auto 0.55rem;
    font-size: .45rem;
    color: #999;
}
.getpois_ul li .pois_name[data-v-0b97e5f4] {
    margin: 0 auto 0.35rem;
    width: 90%;
    font-size: .65rem;
    color: #333;
}
h4 {
    display: block;
    margin-block-start: 1.33em;
    margin-block-end: 1.33em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    /* font-weight: bold; */
}
.getpois_ul li .pois_address[data-v-0b97e5f4] {
    width: 90%;
    margin: 0 auto 0.55rem;
    font-size: .45rem;
    color: #999;
}
.clear_all_history[data-v-0b97e5f4] {
    font-size: .7rem;
    color: #666;
    text-align: center;
    line-height: 2rem;
    background-color: #fff;
}
</style>