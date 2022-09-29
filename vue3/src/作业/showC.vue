<template>
 <main>
            <ul :class="{flex:show}">
                <li v-for="(item, index) in arrnew" :key="index">
                    <img :src="item.pic" alt="" :class = '{"flex-img":show}'>
                    <div :class="{'flex-box':show}">
                        <p>{{item.title}}</p>
                        <p>￥ {{item.price}}</p>
                        <span>{{item.pj}}条评价</span> <span>{{item.xiaoliang}}销量</span>
                    </div>

                </li>
            </ul>
        </main>
</template>
<script>
 export default{
        data() {
            return {
              show:false,
              val:'',
              arrnew:[],
              arr:[
        {
          
          title:
            "西铁城(CITIZEN)男士腕表 光动能小蓝针小牛皮表带时尚休闲生活防水商务手表 AO9000-06B七夕情人节礼物 送男友送老公",
          price: "1282.00",
          pic: "https://img13.360buyimg.com/mobilecms/s590x590_jfs/t1/196187/1/16714/305624/610a36ccEf9349195/64f8f711da208f9e.jpg!q70.dpg.webp",
          manjian: false,
          pj: "2000+",
          xiaoliang:239,
          mr: "0",
          time:"23"
        },
        {
          title:
            "西铁城(CITIZEN)蓝天使男士手表 光动能电波机芯AT8020-03L/AT8020-54L七夕情人节礼物 送男友送老公",
          price: "3760.00",
          pic: "https://img13.360buyimg.com/mobilecms/s590x590_jfs/t1/194054/40/16577/523427/610a000eEa27451d2/24f7b056d28d06bf.jpg!q70.dpg.webp",
          manjian: true,
          pj: "500+",
          xiaoliang: 9000,
          mr: "1",
           time:"43"
        },
        {
          title:
            "天王表(TIANWANG)手表 【七夕送男友】昆仑系列钢带机械表商务男士手表情侣表白色GS5876S.D.S.W",
          price: "1399",
          pic: "https://img14.360buyimg.com/n2/s270x270_jfs/t1/199554/32/1753/350997/610c9ec1E43982f9d/2c21fa606477fe19.jpg!q70.dpg",
          manjian: true,
          pj: "50000+",
          xiaoliang:800,
          mr: "2",
           time:"20"
        },
        {
          title:
            "智能手表2021新款男表多功能太空人运动电子表手环防水男士手表学生男腕表【安卓苹果通用】 升级钢带黑【接听拨打电话  运动计步等】",
          price: "288.00",
          pic: "https://m.360buyimg.com/mobilecms/s750x750_jfs/t1/186817/13/9533/156499/60d051d7Ebe810c18/109b553f64b4aea1.jpg!q80.dpg.webp",
          manjian: true,
          pj: "2000+",
          xiaoliang: 5000,
          mr: "3",
           time:"29"
        },
        {
          title:
            "特步男鞋跑步鞋2021新款夏季潮流男士厚底旅游透气轻便缓震网面休闲运动鞋黑色板鞋皮面慢跑鞋子夏网鞋 黑色-【店长推荐】 42码",
          price: "128.00",
          pic: "https://m.360buyimg.com/mobilecms/s750x750_jfs/t1/181325/5/17955/392791/610c0805E8b6c1f92/bb1ec332d0fae741.jpg!q80.dpg.webp",
          manjian: true,
          pj: "200000+",
          xiaoliang: 2000,
          mr: "4",
           time:"12"
        },
        {
          title:
            "【滔搏运动】adidas阿迪达斯男鞋ULTRABOOST21运动鞋爆米花跑步鞋topsports S23863 44",
          price: "1089.00",
          pic: "https://m.360buyimg.com/mobilecms/s750x750_jfs/t1/185982/7/17389/166075/6108b443E55414ae1/f06710ab5999b289.jpg!q80.dpg.webp",
          manjian: true,
          pj: "30",
          xiaoliang: 9823,
          mr: "5",
           time:"34"
        },
        {
          title:
            "ECCO爱步男鞋运动鞋休闲打孔透气鞋缓震耐磨舒适牦牛皮男鞋 837514发货新版 侧边ECCO字母 黑色-01001 42",
          price: "1389.00",
          pic: "https://m.360buyimg.com/mobilecms/s750x750_jfs/t1/194157/9/14649/145208/60fce2a5E13fb2475/53d38ea268fad1d9.jpg!q80.dpg.webp",
          manjian: true,
          pj: "2000+",
          xiaoliang:922,
          mr: "6",
           time:"56"
        },
        {
          title:
            "乔丹【巭PRO】【飞影PB】官方旗舰运动鞋男碳板跑步鞋2021夏季新款透气减震马拉松竞速跑鞋男女 男-冰川蓝/绿（现货可发）（专属鞋盒） 41",
          price: "699.00",
          pic: "https://m.360buyimg.com/mobilecms/s750x750_jfs/t1/198940/38/1710/263372/610b81a3E6e613206/8b69b58f8752adbc.jpg!q80.dpg.webp",
          manjian: false,
          pj: "10000+",
          xiaoliang: 2100,
          mr: "7",
           time:"21"
        },
        {
          title:
            "联想小新Air15酷睿版大屏轻薄本 英特尔酷睿i5 15.6英寸全面屏办公笔记本电脑 (i5-1155G7 16G 512G 高色域 )",
          price: "4999.00",
          pic: "https://m.360buyimg.com/mobilecms/s750x750_jfs/t1/175942/19/11191/227351/60ab27bfE5c85ec1f/81f3b33a174bf11a.jpg!q80.dpg.webp",
          manjian: false,
          pj: "200000+",
          xiaoliang: 1200,
          mr: "8",
           time:"67"
        },
        {
          title:
            "ROG幻16  16英寸高端全能本 11代英特尔酷睿i7-11800H 8核 16G 512G RTX3060 165Hz 2.5K高刷高分屏 100% DCI-P3专业广色域 轻薄游戏笔记本电脑",
          price: "10999.00",
          pic: "https://m.360buyimg.com/mobilecms/s750x750_jfs/t1/192951/3/2415/300801/609a4f96E6e6ac811/023e46c8a25998f6.jpg!q80.dpg.webp",
          manjian: false,
          pj: "5000+",
          xiaoliang: 9000,
          mr: "9",
           time:"78"
        },
        {
          title:
            "荣耀MagicBook 14 2021 锐龙版 14英寸全面屏轻薄笔记本电脑(R5 5500U 16G 512G 7nm 多屏协同 高色域)冰河银",
          price: "4399.00",
          pic: "https://m.360buyimg.com/mobilecms/s750x750_jfs/t1/187857/17/16905/105283/610bb28cE54bea0b7/6a329c374190cb0e.jpg!q80.dpg.webp",
          manjian: false,
          pj: "10000+",
          xiaoliang: 3000,
          mr: "10",
           time:"43"
        },
        {
          title:
            "苹果（Apple）新款MacBook Air 13.3英寸M1轻薄办公大学生全能笔记本电脑 免息分期 【2020款】MacBook Air 【深空灰】 【标准版】八核M1/8G/256G/7核图形处理",
          price: "7788.00",
          pic: "https://m.360buyimg.com/mobilecms/s750x750_jfs/t1/188474/32/16017/83482/610ab64aEa6feeb86/1f92ee849afe00ac.jpg!q80.dpg.webp",
          manjian: false,
          pj: "2000+",
          xiaoliang: 4000,
          mr: "11",
           time:"23"
        },
        {
          title:
            "MEZO【两件装】POLO衫男 95棉夏季男士短袖纯色打底衫潮牌休闲上衣服宽松潮流半袖体恤男装T 三杠灰色+纯色蓝色 XL(建议135-150斤)",
          price: "99.00",
          pic: "https://m.360buyimg.com/mobilecms/s750x750_jfs/t1/136552/16/16592/203817/60b2143bEac75dfba/9a5217b1935d21ff.jpg!q80.dpg.webp",
          manjian: false,
          pj: "5000+",
          xiaoliang: 2300,
          mr: "12",
           time:"26"
        },
        {
          title:
            "JEEP吉普短袖T恤男POLO男士半袖保罗衫时尚翻领体恤半截袖上衣夏季新款中青年条纹休闲百搭潮流男装 A216-1715绿条 XL（推荐120斤-140斤）",
          price: "118.00",
          pic: "https://m.360buyimg.com/mobilecms/s750x750_jfs/t1/192451/15/4620/234843/60a9beddE5c160ffb/45e9aa042d0a11cf.jpg!q80.dpg.webp",
          manjian: false,
          pj: "1000+",
          xiaoliang: 200,
          mr: "13",
           time:"78"
        },
        {
          title:
            "宠琳纯棉t恤女2件装印花短袖T恤女2021年夏季新款韩版宽松大码胖mm百搭打底衫上衣潮 1 黄花环+蓝680 XL 116-135斤",
          price: "69.90",
          pic: "https://m.360buyimg.com/mobilecms/s750x750_jfs/t1/192511/27/379/131558/60897883Eeaf8f875/d285bf3d97605859.jpg!q80.dpg.webp",
          manjian: false,
          pj: "1000+",
          xiaoliang: 10000,
          mr: "14",
           time:"123"
        },
        {
          title:
            "邦伊芙短袖t恤女士夏季半袖上衣 精梳棉2021年夏季新款韩版洋气百搭短袖印花T恤女宽松碎花半袖女 E8248梅花 2XL 【建议125-140斤】",
          price: "33.30",
          pic: "https://m.360buyimg.com/mobilecms/s750x750_jfs/t1/186252/40/11296/143994/60d787feEf7d34106/062fc6feb5343199.jpg!q80.dpg.webp",
          manjian: false,
          pj: "500+",
          xiaoliang: 2500,
          mr: "15",
           time:"42"
        },
        {
          title:
            "金盾休闲裤男夏天男裤直筒裤男士商务宽松大码春季男装裤子正装裤中年长裤春装裤夏季薄款夏装裤子 【1件装】宝蓝 32",
          price: "399.00",
          pic: "https://m.360buyimg.com/mobilecms/s750x750_jfs/t1/166843/6/15345/107259/606019d9E909d8401/97fb3404f7afd433.jpg!q80.dpg.webp",
          manjian: false,
          pj: "20000+",
          xiaoliang:4000,
          mr: "16",
           time:"203"
        },
        {
          title:
            "(买一送衣服 免邮）裤子男运动卫裤夏季薄款直筒宽松抽绳阔腿裤港风潮流大码束脚裤休闲男裤帅气衣服 灰色款送T恤 XL码",
          price: "58.00",
          pic: "https://m.360buyimg.com/mobilecms/s750x750_jfs/t1/178386/38/17967/118449/610ca0a5E166b4f1a/61763b2c951009cb.jpg!q80.dpg.webp",
          manjian: false,
          pj: "100+",
          xiaoliang: 1000,
          mr: "17",
           time:"54"
        },
        {
          title:
            "南极人冰丝休闲裤男裤子夏季薄款直筒运动长裤ins潮韩版潮流商务男装衣服速干裤2021新款 【2条装】黑色+灰色 XL_(115-130斤)",
          price: "88.00",
          pic: "https://m.360buyimg.com/mobilecms/s750x750_jfs/t1/188391/4/15562/176255/61011e26E3dccf518/e1a7a3af3cf50504.jpg!q80.dpg.webp",
          manjian: false,
          pj: "10000+",
          xiaoliang: 2000,
          mr: "18",
           time:"121"
        },
        {
          title:
            "【两条79】休闲裤男宽松百搭夏季学生冰丝裤男直筒裤子男潮流2021薄款束脚九分裤阔腿运动男裤工装裤 黑色单条B款 XL",
          price: "49.00",
          pic: "https://m.360buyimg.com/mobilecms/s750x750_jfs/t1/176370/29/5639/76340/607e939bE48b05b39/21fb9c6622fc27dd.jpg!q80.dpg.webp",
          manjian: false,
          pj: "2000+",
          xiaoliang: 3000,
          mt: "19",
           time:"223"
        },
      ]
            }
        },
        mothods:{
          
        }
 }
</script>
<style>
main {
    background: #ccc;
}

main>ul {
    width: 750rem;
    padding: 10rem;
    display: flex;
    flex-wrap: wrap;
    border: 1px solid #000;
}

main>ul li {
    margin-left: 25rem;
    width: 45%;
    padding: 10rem;
    border: 1px solid #000;
    background: #fff;
    margin-top: 10rem;
}

main>ul li p {
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
}
main>ul li span{
    color: #333;
}

main>ul li img {
    width: 300rem;

}
.flex{
    width: 100%;
    flex-direction: column;
}
.flex li{
    
    width: 100%;
    display: flex;
    line-height:50rem;
}
.flex li p{
    padding-left: 50rem;
    padding-top: 20rem;
}
.flex li span{
    padding: 10rem;
       padding-left: 50rem;
}
</style>