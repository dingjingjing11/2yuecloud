<template>
  <div class="home-category" @mouseleave="tabIndex=-1">
    <ul class="menu">
      <li :class="{active:tabIndex==index}" v-for="(item,index) in menuList" :key="item.id" @mouseenter="tabIndex=index">
        <RouterLink :to="'/category'">{{ item.name }}</RouterLink>
       
        <template v-if="item.children">
          <RouterLink
            v-for="sub in item.children.slice(0,2)"
            :key="sub.id"
            :to="`/category/sub/${sub.id}`"
            >{{ sub.name }}</RouterLink
          >
        </template>
      </li>
    
    </ul>
    <!-- 弹层 -->
    <div class="layer">
      <h4>{{tabIndex==menuList.length-1?'品牌':'分类'}}推荐 <small>根据您的购买或浏览记录推荐</small></h4>
      <!-- 商品 -->
      <ul v-if="menuList[tabIndex]&&menuList[tabIndex].goods">
      <!-- menuList :0-8   menuList[9]:undefined   -->
      
        <li v-for="(item,index) in menuList[tabIndex].goods" :key="index">
          <RouterLink to="/">
            <img :src="item.picture" alt="">
            <div class="info">
              <p class="name ellipsis-2">{{item.name}}</p>
              <p class="desc ellipsis">{{item.desc}}</p>
              <p class="price"><i>¥</i>{{item.price}}</p>
            </div>
          </RouterLink>
        </li>
      </ul>
      <!-- 品牌 -->
      <ul v-if="tabIndex==menuList.length-1">
        <li class="brand" v-for="brand in brands" :key="brand.id">
          <RouterLink to="/">
            <img :src="brand.picture">
            <div class="info">
              <p class="place"><i class="iconfont icon-dingwei"></i>{{brand.place}}</p>
              <p class="name ellipsis">{{brand.name}}</p>
              <p class="desc ellipsis-2">{{brand.desc}}</p>
            </div>
          </RouterLink>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>

import { findHeader,findBrand } from '@/api/home'
export default {
  name: 'HomeCategory',
  data(){
    return{
        menuList:[],
        tabIndex:-1,
        brands:[]
    }
  },
  mounted() {
    // 获取 导航数据
    findHeader().then(res=>{
        console.log(res);
        if(res.msg=='操作成功'){
            this.menuList = res.result;
            this.menuList.push({name:'品牌',children:[{name:'品牌推荐'}]})
            // console.log(this.menuList[this.tabIndex]);
        }
    })
    findBrand().then(res=>{
        if(res.msg =='操作成功'){
            this.brands = res.result;
            console.log(res);
        }
    })
  },

}
</script>

<style scoped lang='scss'>
.home-category {
  width: 250px;
  height: 500px;
  background: rgba(0, 0, 0, 0.8);
  position: relative;
  z-index: 99;
  .menu {
    li {
      padding-left: 40px;
      height: 50px;
      line-height: 50px;
      &:hover,&.active {
        background-color: #27ba9b;
      }
      a {
        margin-right: 4px;
        color: #fff;
        &:first-child {
          font-size: 14px;
        }
      }
    }
  }
  // 弹出层样式
    .layer {
    width: 990px;
    height: 500px;
    background: rgba(255,255,255,0.8);
    position: absolute;
    left: 250px;
    top: 0;
    display: none;
    padding: 0 15px;
    h4 {
      font-size: 15px;
      font-weight: normal;
      line-height: 80px;
      small {
        font-size: 13px;
        color: #666;
      }
    }
    ul {
      display: flex;
      flex-wrap: wrap;
      li {
        width: 310px;
        height: 120px;
        margin-right: 15px;
        margin-bottom: 15px;
        border: 1px solid #eee;
        border-radius: 4px;
        background: #fff;
        &:nth-child(3n) {
          margin-right: 0;
        }
        a {
          display: flex;
          width: 100%;
          height: 100%;
          align-items: center;
          padding: 5px;
          &:hover {
            background: #e3f9f4;
          }
          img {
              width: 95px;
              height: 95px;
          }
          .info {
            padding-left: 10px;
            line-height: 24px;
            width: 190px;
            .name {
              font-size: 15px;
              color: #666;
            }
            .desc {
              color: #999;
            }
            .price {
              font-size: 15px;
             
              i {
                font-size: 14px;
              }
            }
          }
        }
      }
      // 品牌的样式
      li.brand {
        height: 180px;
        a {
          align-items: flex-start;
          img {
            width: 120px;
            height: 160px;
          }
          .info {
            p {
              margin-top: 4px;
            }
            .place {
              color: #999;
            }
          }
        }
      }
    }
  }
  &:hover {
    .layer {
      display: block;
    }
  }
}
// 骨架动画
.xtx-skeleton {
  animation: fade 1s linear infinite alternate;
}
@keyframes fade {
  from {
    opacity: 0.2;
  }
  to {
    opacity: 1;
  }
}
</style>
