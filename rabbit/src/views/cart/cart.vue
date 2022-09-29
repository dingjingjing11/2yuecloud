
 <template>
  <div class="gtkd">
    <div class="xtx-bread container">
      <div class="xtx-bread-item">
        <a href=" " class="router-link-active">首页</a>
      </div>
      <i class="el-icon-arrow-right icon-angle-right"></i>
      <div class="xtx-bread-item"><span>购物车</span></div>
    </div>
    <div class="cart container">
      <table>
        <thead>
          <tr>
            <th width="120">
              <div class="xtx-checkbox">
                <!-- 全选框 -->
                <input
                  type="checkbox"
                  class="icon-checked"
                  name=""
                  id=""
                  
                  @change="ckAll"
                />
                <span>全选</span>
              </div>
            </th>
            <th width="400">商品信息</th>
            <th width="220">单价</th>
            <th width="180">数量</th>
            <th width="180">小计</th>
            <th width="140">操作</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(item, index) in arrList" :key="index">
            <td>
                <!-- 单选框 -->
              <div class="xtx-checkbox">
                <input
                  type="checkbox"
                  class="icon-checked"
                  name=""
                  id=""
                  v-model="item.selected"
                  @change="selectOne(item)"
                />
              </div>
            </td>
            <td>
              <div class="goods">
                <a href="#/product/3994470" class=""
                  ><img :src="item.picture" alt=""
                /></a>
                <div>
                  <p class="name ellipsis">{{ item.name }}</p>
                  <div class="cart-sku">
                    <div class="attrs">
                      <span class="ellipsis">{{ item.attrsText }}</span
                      ><i class="iconfont icon-angle-down"></i>
                    </div>
                    <!---->
                  </div>
                </div>
              </div>
            </td>
            <td class="tc">
              <p>￥{{ item.price }}</p>
              <!---->
            </td>
            <td class="tc">
              <div class="xtx-numbox">
                <div class="label"></div>
                <div class="numbox">
                  <a href="javascript:;" @click="add">-</a>
                  <input type="text" readonly="" :value="item.count" />
                  <a href="javascript:;" @click="odd">+</a>
                </div>
              </div>
            </td>
            <td class="tc">
              <p class="f16 red">￥{{ item.price * item.count }}</p>
            </td>
            <td class="tc">
              <p><a href="javascript:;">移入收藏夹</a></p>
              <p><a class="green" href="javascript:;" @delete="deleteOne(item)">删除</a></p>
              <p><a href="javascript:;">找相似</a></p>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <div class="action container">
      <div class="batch">
        <div class="xtx-checkbox">
          <i class="iconfont icon-checked"></i>
          <input type="checkbox"   @change="ckAll" />
          <span>全选</span>
        </div>
        <span @click="deleteAll(item)">删除商品</span>
        <span>移入收藏夹</span>
        <span>清空失效商品</span>
      </div>
      <div class="total">
        共 {{getsum}} 件商品，已选择 {{getsum}} 件，商品合计： <span class="red">¥88782</span
        ><button class="xtx-button ellipsis middle primary">下单结算</button>
      </div>
    </div>
  </div>
</template>
<script>
import axios from 'axios'
import {addCart, cartSelectOne} from '@/api/home'
export default {
   
    data() {
        return {
            arrList:[],
            checked: true
        }
    },
     mounted(){
           var token = this.$store.state.demo.arr1.token;
        axios({
            method: "get",
            url: "http://pcapi-xiaotuxian-front-devtest.itheima.net/member/cart",
            headers: { Authorization: "Bearer " + token },
        }).then((res) => {
            if (res.msg == "操作成功") {
                this.arrList = res.result;
            }
        });
         this.addCart()
    },
   

    methods: {
        
        addCart(){

           addCart().then((res) => {
            if (res.msg == "操作成功") {
                this.arrList = res.result;
                this.$store.commit('updatashopCart',res.result)
            }

        }) 
       },
       selectedOne(item){
        var selected =item.selected
        cartSelectOne(item.skuId,{selected:selected}).then(res=>{
            if(res.msg=='操作成功'){
                this. addCart()
            }
        })
       },
       ckAll(item){
         cartSelect(item.skuId,{selected:selected}).then(res=>{
            if(res.msg=='操作成功'){
                this.addCart()
            }
         })   
       },


       add(item){
        var count=item.count
        count++;
         cartSelectOne(item.skuId,{count:count}).then(res=>{
            if(res.msg=='操作成功'){
                this. addCart()
            }
        })

       },
       odd(item){
        var count=item.count
        count--;
         cartSelectOne(item.skuId,{count:count}).then(res=>{
            if(res.msg=='操作成功'){
                this. addCart()
            }
        })

       },

       deleteOne(item){
         cartDelete(item.skuId,{count:count},{selected:selected}).then(res=>{
            if(res.msg=='操作成功'){
                this.addCart()
            }
         })
       }



    },
   



     
}

</script>
<style scoped lang="scss">
.xtx-bread {
  display: flex;
  padding: 25px 10px;
}
input{
 width: 10px;
height: 10px;
border: 1px solid#000;
}
.xtx-bread-item a {
  color: #666;
  transition: all 0.4s;
}

.xtx-bread i {
  font-size: 12px;
  margin-left: 5px;
  margin-right: 5px;
  line-height: 22px;
}

.cart {
  background: #fff;
  color: #666;
}
 .batch span[data-v-a291c938] {
    margin-left: 20px;
}
span {
    text-decoration: none;
    color: #333;
    outline: none;
}

.cart {
  background: #fff;
  color: #666;
}

.cart table {
  border-spacing: 0;
  border-collapse: collapse;
  line-height: 24px;
}

.cart table th:first-child {
  text-align: left;
  padding-left: 30px;
  color: #999;
}

.cart table th {
  font-size: 16px;
  font-weight: 400;
  line-height: 50px;
}

.cart table td,
.cart table th {
  padding: 10px;
  border-bottom: 1px solid #f5f5f5;
}

.xtx-checkbox {
  display: inline-block;
  margin-right: 2px;
}

.xtx-checkbox .icon-checked,
.xtx-checkbox .icon-checked ~ span {
  color: #27ba9b;
}

.xtx-checkbox span {
  margin-left: 2px;
}

.goods {
  display: flex;
  align-items: center;

  img {
    width: 100px;
    height: 100px;
    vertical-align: middle;
  }
}

.goods > div {
  width: 280px;
  font-size: 16px;
  padding-left: 10px;
}

.ellipsis,
.ellipsis-2 {
  text-overflow: ellipsis;
  overflow: hidden;
}

.ellipsis {
  white-space: nowrap;
}

.cart-sku {
  height: 28px;
  border: 1px solid #f5f5f5;
  padding: 0 6px;
  position: relative;
  margin-top: 10px;
  display: inline-block;
}

.cart-sku .attrs {
  line-height: 24px;
  display: flex;
}

.cart-sku .attrs span {
  max-width: 230px;
  font-size: 14px;
  color: #999;
}

.tc .xtx-numbox {
  margin: 0 auto;
  width: 120px;
}

.tc {
  text-align: center;
}

.xtx-numbox .label {
  width: 60px;
  color: #999;
  padding-left: 10px;
}

.xtx-numbox .numbox {
  width: 120px;
  height: 30px;
  border: 1px solid #e4e4e4;
  display: flex;
}

.xtx-numbox .numbox > a:first-of-type {
  border-right: 1px solid #e4e4e4;
}

.xtx-numbox .numbox > a {
  width: 29px;
  line-height: 28px;
  text-align: center;
  background: #f8f8f8;
  font-size: 16px;
  color: #666;
}

.xtx-numbox .numbox > input {
  width: 60px;
  padding: 0 5px;
  text-align: center;
  color: #666;
}

// input[type=checkbox], input[type=password], input[type=search], input[type=text] {
//     padding: 0;
//     outline: none;
//     border: none;
//     -webkit-appearance: none;
// }
.cart table td:first-child,
.xtx-cart-page .cart table th:first-child {
  text-align: left;
  padding-left: 30px;
  color: #999;
}

button,
input {
  overflow: visible;
}

button,
input,
optgroup,
select,
textarea {
  font-family: inherit;
  font-size: 100%;
  line-height: 1.15;
  margin: 0;
}

.xtx-numbox .numbox > a:last-of-type {
  border-left: 1px solid #e4e4e4;
}

.f16 {
  font-size: 16px;
}

.red {
  color: #cf4444;
}

a {
  text-decoration: none;
  color: #333;
  outline: none;
}

.green {
  color: #27ba9b;
}

.action .xtx-checkbox {
  color: #999;
}

.xtx-checkbox {
  display: inline-block;
  margin-right: 2px;
}

.action .batch a {
  margin-left: 20px;
}

.primary {
  border-color: #27ba9b;
  background: #27ba9b;
  color: #fff;
}

.middle {
  width: 180px;
  height: 50px;
  font-size: 16px;
}

.xtx-button {
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  border: none;
  outline: none;
  text-align: center;
  border: 1px solid transparent;
  border-radius: 4px;
  cursor: pointer;
}

.action .red {
  font-size: 18px;
  margin-right: 20px;
  font-weight: 700;
}

.action {
  display: flex;
  background: #fff;
  margin-top: 20px;
  height: 80px;
  align-items: center;
  font-size: 16px;
  justify-content: space-between;
  padding: 0 30px;
}
</style>