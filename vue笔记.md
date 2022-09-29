#  Vue

### 生命周期

 		  beforeCreate 创建前     找不到dom元素 data中的数据没有初始化

​            created      创建完成   找不到dom元素 可以找到data中的数据

​            beforeMount  渲染到页面（挂载）前     找不到dom元素     

​            mounted      挂载完成               可以找到dom元素

​            beforeUpdate 更新前    在更新前可以做一些逻辑处理       

​            updated      更新完成   更新后可以做一些逻辑处理

​            beforeDestroy卸载前     可以解绑window上的事件 或着清空sessionStorage数据

​            destroyed    卸完完成

​			

### vue获得事件对象 $event  

@click="add"    add(event){ }     此时默认第一个参数就是 event 

@click ="add(index,$event)"    add(index,e){ }    当有参数列表时 最后一个参数是事件对象



### 事件修饰符 

​		prevent  取消默认事件

​        stop     取消冒泡

​        self     只触发自身事件

### 按键修饰符 

​	 .enter =>    enter键  .13

​        .tab => tab键

​        .delete (捕获“删除”和“退格”按键) =>  删除键

​        .esc => 取消键

​        .space =>  空格键

​        .up =>  上

​        .down =>  下

​        .left =>  左

​        .right =>  右 

### 表单修饰符 

​	    v-model.trim    去掉前后空格

​        v-model.number  将input输入的数字值转化为number类型

​        v-model.lazy    失去焦点的时候 在获取绑定的值

### watch  

​        什么是watch?

​        watch是用来响应data中的数据的变化，一般用于异步或者开销较大的操作

​        \- 当需要监听一个对象的改变时，普通的watch方法无法监听到对象内部属性的改变，只有data中的数据才能够监听到变化，此时就需要deep属性对对象进行深度监听

​    

### computed

  \- 什么是计算属性？

​        计算属性是基于它们的响应式依赖进行缓存的 

​        意思就是 (计算属性依赖的值发生变化时，会重新计算，如果依赖的值不发生变化，计算属性会使用之前缓存的值)

​        \- computed 使用场景多用于

​        对多个变量或者对象进行处理后返回一个结果值，也就是多个变量中的某一个值发生了变化，则我们监控的这个值也就会发生变化

### computed 和watch的区别

​        \- 两者都能达到根据data中数据变化，就触发函数的结果。

​        \- 计算属性是基于他们的依赖进行缓存的，只有在相关依赖发生改变时，他们才会重新求值，也就是说，只要他的依赖没有发生变化，那么每次访问的时候计算属性都会立即返回之前的计算结果，不再执行函数

​        \- computed 多用于处理多个变量返回一个值，watch多用于异步处理或者逻辑比较复杂的处理。比如实时搜索效果

### vue自定义指令

 什么是自定义指令？

​        可以自己定义指令，在自定义指令中可以实现使用原生js方法操作dom，比如自定义拖拽功能

​    怎么写？

​        分两种全局和局部

​        1.全局自定义指令在Vue.directive上声明

​        2.局部自定义指令在组件内部 directives对象声明

​        3.函数 inserted 代表指令所在的dom渲染后调用

​        4.函数 bind 指令绑定后，dom渲染前调用

​        5.这两个函数都有两个参数 参数1代表 指令所在的dom节点 参数2是一个对象.value

​          可以找到指令接收到的参数 



全局

```
Vue.derictive('指令名称',{
​	 bind: 元素被插入文档调用，只调用一次
   inserted: 元素被渲染到页面
​			(el,binding,vnode)
​			 el:      dom元素  
			 binding: 自定义指令的相关信息 binding.value就是接收自定义指令传递的值
​			 vnode :  虚拟dom
			 update: （VNODE） 虚拟dom 更新时，或者 自定义指令 接收的值 发生变化 都会调用update
})
```



局部

```
derictives:{
​ fn(){     // 函数名 时指令名
​			bind(){}
​			inserted(){}
​			update(){}
​	}
}
```





### vue 过滤器    

可以将模版语法中的数据的值进行二次处理，比如 数字取两位小数

全局

```
Vue.filter('过滤器名称',function(val){
  ​	val 参数就是 要处理的数据    {{n|filter}}
  ​	return  最终返回值
})
```

局部

```
		filters: {
​        capitalize: function (value) {
​            if (!value) return ''
​            value = value.toString()
​            return value.charAt(0).toUpperCase() + value.slice(1)
​        },
​        moneyFormData(val){
​            return val.toFixed(2);
​        }
​    }
```

### vue数组的变异方法

​    说说什么vue中 数组的变异操作方法

​    当我们直接操作数组比如 this.arr[0]=1 视图是不会更新的

​    只有我们使用数组的变异方法视图才能更新，vue中已经把数组的大部分常用方法都进行了扩展 

### $set 、$delete

​    不使用数组的变异方法去操作数组时，视图默认不会更新，

​    或者给一个对象添加新的属或删除属性时，视图也不会更新，

​    这是使用$set $delete 可以强制更新视图。

​    比如：this.$set(this.arr,0,3) 或者删除使用 this.$delete(this.arr,0); 这样就更新视图了

​    在比如 this.$set(this.obj,'age',20); 或者删除属性 this.$delete(this.obj,'name');



### 组件通信

#### 父子通信-父传子

1. 在父组件中使用子组件时 ，在自组件的标签上 使用v-bind:传递的字段名=要传递的值

2. 在子组件中 使用 props:['传递的字段名'] 

3. 子组件中不建议修改  接受到的 props 的值。

4. props 的两种接受方式

   ```
   props:{
           arr:{
               type:Array, // type 类型判断
               default:['1','2'] // 默认值 当父组件没有给子组件传递数据时使用默认数据
           }
       },
   ```

   ```
   props:['字段1','字段2']
   ```

   



#### 父子通信-子传父

在子组件中 使用$emit(‘事件名’,'要传递的参数1','要传递的参数2'...)

在父组件中使用子组件标签时  使用 v-on:事件名 = 处理函数fn    在methods中声明 fn 形参 就是传递的参数



#### 兄弟组件通信(事件中心 bus Vue实例)

1. 创建bus.js文件 在里面导出vue实例
2. 在组件中 引入bus.js
3. 传数据的组件 使用bus.$emit(事件名,值)
4. 接收数据的组件 使用 bus.$on(事件名，回调函数) 回调函数 的形参就是 接收到的值



### 动态组件

```
<component v-bind:is='变量名' />
```



### $nextTick

因为vue数据变化更新视图是异步的，所有有的时候，更新数据后获取的不是最新的dom

在修改数据之后立即使用$nextTick，可以获取更新后的 DOM。



### MVC、MVP与MVVM模式

**MVC angular.js 中使用：**Model（ 模型 ）`、`Controller（ 控制器 ）`、`View（ 视图 ）`。

![img](http://www.ruanyifeng.com/blogimg/asset/2015/bg2015020105.png)

> 1、View 传送指令到 Controller
> 2、Controller 完成业务逻辑后，要求 Model 改变状态
> 3、Model 将新的数据发送到 View，用户得到反馈

**MVP：**
![img](http://www.ruanyifeng.com/blogimg/asset/2015/bg2015020109.png)



**MVVM**
![img](http://www.ruanyifeng.com/blogimg/asset/2015/bg2015020110.png)

view: template  视图  

model ：就是 data中的数据

viewmodel：就是整个 vue对象 作为数据和视图的链接桥梁

### 说一下你对渐进式框架的理解？

- 就是主张最少，可以只用一部分功能，而不必使用全部，而且可以跟其他框架结合使用。比如，vuex  路由导航守卫 等这些是选择性使用

### 请描述vue的优点(特点优势)是什么？缺点是什么？

- vue的优点:
  - 简单易用
  - 灵活渐进式
  - 轻量高效
    - 压索之后20KB大小
    - 虚拟DOM
  - MVVM
  - 组件化
    - 组件化优点
      - 提高开发效率
      - 方便重复使用
      - 简化调试步骤
      - 提升整个项目的可维护性
      - 便于协同开发
- vue的缺点：
  - VUE不支持IE8 

### vue过渡（动画）

< transition  name="前缀名称"> 



1. `v-enter`：在元素被插入之前的开始状态
2. `v-enter-active`：定义进入时的过渡状态。
3. `v-enter-to`：**2.1.8 版及以上**定义进入过渡的结束状态。
4. `v-leave`：定义即将离开时的状态。
5. `v-leave-active`：定义离开时的过渡状态。
6. `v-leave-to`：**2.1.8 版及以上**定义已经离开的状态。

![image-20210901161047871](file:///Users/zhaihongwei/Library/Application%20Support/typora-user-images/image-20210901161047871.png?lastModify=1645149085)

### vue双向数据绑定原理？

1、Vue 实例会把 `data`中的 对象的属性使用 [`Object.defineProperty`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperty) 处理，并把这些属性全部使用 set  和 get 处理。

2、每个组件实例都对应一个 **watcher** 实例，它会在组件渲染的过程中监听数据属性的变化。之后当数据的 set 触发时，会通知 watcher，从而使它关联的组件重新渲染。



da ta  n :10      [`Object.defineProperty`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperty) (data,n,{set, get})    =>  **watcher** = > view 



<img src="/Users/zhaihongwei/Library/Application Support/typora-user-images/image-20220218154807194.png" alt="image-20220218154807194" style="zoom:50%;" />

### Object.defineProperty()方法的作用是什么？

> `Object.defineProperty() 方法`会直接在一个对象上定义一个新属性，或者修改一个对象的现有属性， 并给这个属性添加一些权限配置，比如是否可删除，是否可修改等

语法：

```
Object.defineProperty(对象, 对象的属性, {
    configurable:true, //   属性是否可删除
    enumerable:true,   //  是否可遍历
    value:'world',     // 设置值
    writable:true,     // 是否可修改值
    
    set:function(val){  // 在我修改属性值的时候会自动调用
    },
    get:function(){   // 取值的时候调用
    }
})


```



###  什么是虚拟DOM及diff算法

  Virtual DOM 其实就是用 js 以对象的形式描述dom节点  ，实际上它只是一层对真实 DOM 的抽象。

最终再把这棵虚拟dom树，映射成为真实dom树。  

通过js操作DOM的代价很高，因为会引起页面的重排重绘，增加浏览器的性能开销，降低页面渲染速度。有了虚拟dom之后，我们可以在虚拟节点映射到视图的过程之前，进行diff算法就是：【将虚拟节点与上一次渲染视图所使用的虚拟节点(oldVnode)做对比，找出真正需要更新的节点来进行DOM操作，避免了不必要的DOM操作】，从而节省了浏览器的性能开销使得页面的渲染速度得到提升。

例子：比如说让一百个人按照身高排队，直接排100个人，会很麻烦让这100个人很累。但是如果我虚拟一张身高信息表，在表里面将100人进行排队，排好后在通知每个人的位置，这样消耗体能比较小。



###  key的作用

vue 使用虚拟dom 进行渲染时，为了提高性能会选择性的复用元素。加上 key之后，可以让虚拟dom复用元素时，加以区别。两个不一样的key 不会复用。避免bug（比如使用 v-for循环渲染数据的时候，进行翻页，此时li会被复用，里面的input会被复用，导致input的值还在) 。



### solt 如何使用

​	插槽:可以 给子组件传递标签

​	具名插槽：   

```
  <ComA>
            <h1 slot='slot1'>1</h1>
            <h3 slot='slot3'>3</h3>
   </ComA>
   
   // ComA组件中
   <slot name="slot1"></slot>
   <slot name="slot3"></slot>
```

​	 

### vue mixins （混入）

我们把 一些组件中可以复用的方法或生命周期等，封装到混入对象中，这样就可以把 这些选项合并到组件中。

举例：说代码使用过程



# Vue 路由



### 路由跳转两类

  1.<router-link  tag='li'  to='路径' / >

2. 编程式跳转
   this.$router.push({path:路径)    注意 跳转自路由 /shop/goods

   this.$router.push('/b'); 

   this.$router.push({name:'路由name名称'})   

​       this.$router.replace()  刷新

​	   this.$router.go()    前进后退

​     

### 路由跳转传参数

##### router-link跳转传参数

1. 配置路由 path :create/:id 

2. ```
   <router-link  :to="/shop/create+item.id" />  注意： to=的内容如果需要变量前面就加:
   ```

3.  接收参数  this.$route.params.id 

##### 编程式跳转传参数



### 路由传参 query和params的区别

  区别1.

​            params  在router-link 或 name跳转时使用,   接受参数使用this.$route.params.属性名

​            query      跳转可以使用 path 或 name  接受参数使用this.$route.query.属性名

   区别2.  

​            query 地址栏会显示传递的参数

​            params 地址栏不会显示传递过来的参数

   区别3.

​             query 刷新页面 参数不会丢失

​             params 刷新页面参数丢失



### 子路由（嵌套路由）

1.

```
{
​	path:'/a',
​    component:{A},
​    children:[
​		{path:xx,component:xxx}
​	]
}
```

2. 在A 组件中配置 router-view
3. 子路由的默认路由



### 路由重定向

 redirect:'/b1', 



### 路由懒加载（动态路由）

写法：

const A = ()=> import('@/routerdemo/A') 

const A = resolve => require(['@/routerdemo/A'],resolve) ;   

原理 ：

就是在webpack打包时（npm run build），会按照路模块进行打包。

优点：

路由懒加载，是在进入某个路由的时候，再去加载这个路由对应页面所需要的静态资源。

这样的好处是项目在启动的时候，加载更快，首页显示的时间更短。



### 路由导航守卫 （路由钩子函数）

一、全局

1.全局前置守卫

```
router.beforeEach((to,from,next)=>{
​    to: 路由去的地址
​    from: 路由从哪里来的
​    next()  :默认true 是允许跳转
​    next(true);
})
```

2.全局后置守卫

router.afterEach((to, from)=>{}) 注意：只有两个参数 没有next 



二、组件内路由守卫 

beforeRouteEnter  : 路由进入之前

beforeRouteUpdate : 子路由变化，或者路由参数更新

beforeRouteLeave ：路由离开之前



三、独享守卫  

 beforeEnter: (to, from, next) => {

​        next();

  }



四、路由守卫 结合 vuex相关问题

因为在  某些路由守卫中 无法访问 this  所以也就无法访问 this.$store

解决： 可以在使用vuex时 引入store/index.js 之后就可以使用了



### 路由模式

mode:'history'   地址栏没有#      需要后端配置访问路径之后才可以使用 

​							 HTML5新特性history pushState

 mode:'hash'     默认模式  地址栏有#



### 路由元信息

在路由配置中添加 meta:{key:val}   在访问这个路由时，那就可以访问 $route.meta.key 数据



### keep-alive 缓存指定路由

1.在路由配置中 设置路由元信息

{

​	path:'/a'

​    component:A,

​    meta:{key:true}

}

2.在路由视图上设置

```
 <!-- 当我们访问 /fenlei  $route.meta.keepAlive= true  -->

<keep-alive>

​        <router-view v-if="$route.meta.keepAlive">

​        </router-view>

</keep-alive>

<!-- 当我们访问 /keepalive  $route.meta.keepAlive= false -->

<router-view v-if="!$route.meta.keepAlive">

</router-view>

```

或者

```
<keep-alive  include='组件的namd'  exclude='组件的name' />
```

activated  当被缓存的组件，被激活时调用

deactivated   当被缓存的组件，被隐藏时调用

# vuex

数据状态管理，把多个组件中用到的数据，按照功能模块都集中在一起。方便数据的通信，和同步。

### vuex 的属性

state    				声明vuex的数据

mutations          定义修改state中的数据的方法

actions               在actions中定义异步操作的方法, 最后在提交给mutations中的方法

							 1. 在组件中 this.$store.dispatch('actions中的方法名'，参数)		
							 2. 在actions中的方法 里面进行异步处理后，使用commit() 再提交给 mutations中的方法去修改数据		  

getters      			相当于state的计算属性

modules             可以引入其他 vuex 模块

plugins                使用插件 ，比如说 vuex长久储存 vuex-persist



### 辅助函数 

把vuex 中的数据 映射到 vue组件的中

​	mapState    mapGetters 的辅助函数写法 

```
import {mapState}  from 'vuex' 
computed:{
    ...mapState(['n'])
    //或者 
     ...mapState({
        ComN : state=>state.n, 
        userId :state=>state.user.userId   // 适用于将vuex 中某个模块的 state 取出
    }),
    ...mapGetters(['getsum'])
    //或者
    ...mapGetters({
    		getsum:'user/get'  //于命名空间时  模块明/方法名
    })
}

```

 mapMutations   mapActions 的辅助函数写法

```
methods:{
        //  将 vuex   mutations actions 中的方法 引入到 vue 组件中
        ...mapMutations({
            add:'add',
            login:'user/login'  // 加入命名模块
        }) 
        // 或者没有简写
        ...mapMutations(['add'])
    },
```





# vue2.0 和vue3.0的区别（安文生自被组过pv）

### 1.安装 

```bash
安装 cli3+
【npm install -g @vue/cli】  或 yarn global add @vue/cli
创建vue项目
【vue create hello-vue3】
# 选择 vue 3 preset
```

### 2.文件结构变化

​	新增public 文件夹,替换static 文件夹，用于放置不被webpack编译的静态文件

​    package.json 变成可选项

### 3.生命周期的变化

​	destroyed 改为  unmounted

​    beforeDestory 改为  beforeUnmount

### 4.自定义指令

​	在 Vue 2 中，自定义指令通过使用下列钩子来创建，以对齐元素的生命周期，它们都是可选的：

- **bind** - 指令绑定到元素后调用。只调用一次。

- **inserted** - 元素插入父 DOM 后调用。

- **update** - 当元素更新，但子元素尚未更新时，将调用此钩子。

- **componentUpdated** - 一旦组件和子级被更新，就会调用这个钩子。

- **unbind** - 一旦指令被移除，就会调用这个钩子。也只调用一次。

  vue3.x 改变

  - **created** - 新增！在元素的 attribute 或事件监听器被应用之前调用。

  - **beforeUpdate**：新增！在元素本身被更新之前调用，与组件的生命周期钩子十分相似。

  - **beforeUnmount**：新增！与组件的生命周期钩子类似，它将在元素被卸载之前调用。

    bind → **beforeMount**

    inserted → **mounted**

    unbind -> **unmounted**

    update → 移除！该钩子与 `updated` 有太多相似之处，因此它是多余的。请改用 `updated`。


  ### 5.过渡的class 命名更改

  ​	过渡类名 `v-enter` 修改为 `v-enter-from`、

  ​    过渡类名 `v-leave` 修改为 `v-leave-from`

  ### 6.被移除的kpi 

  不再支持使用数字 (即键码) 

  不再支持

  ```
  Vue.config.keyCodes = {f1: 112}
  ```

  ```
  <!-- Vue 3 在 v-on 上使用按键修饰符 -->
  <input v-on:keyup.page-down="nextPage">
  
  <!-- 同时匹配 q 和 Q -->
  <input v-on:keypress.q="quit">
  ```

  

### 7.组合api

#### 意义/优点/为什么使用 ：

vue2.0 处理单个逻辑关注点时，我们必须不断地“跳转”相关代码的选项块（data methods watch computed ...）

vue3.0 使用sutup 将同一个逻辑关注点相关代码收集在一起

#### 在setup中 使用组合api

​    引入  import { ref toRefs reactive computed watch onMounted  } 

​	ref  定义基本类型的响应数据

​	reactive   定义复杂类型的响应数据  

​	toRefs   可以使用 ...toRefs(state) 将state对象中的属性，直接应用到页面

setup(props, context)

props:  代表父传子数据

context : 代表setup可能用到的其他值，比如 子传父的时候 使用 context.emit()

### 8.proxy  

类似于 Object.definProperty('对象'，属性，{  }) 也是用来自定义对象的属性 

vue3.0中使用它来 实现双向数据绑定

### 9.v-model

vue3 中可以使用 多个 v-model：属性名 = " "  向子组件传递数据

子传父的时候    $emit('update:foo'，9)   这样父组件中 foo就会自动更新





# 其他vue相关问题



### 项目环境判断

process.env.NODE_ENV 是webpack中的一个变量

process.env.NODE_ENV 有两个值

development  开发环境 npm run dev

production   生产环境 nom run build 



有时我们需要在代码中判断目前项目是处于开发环境、还是生产环境，然后根据不同环境执行不同的逻辑代码。比如切换接口地址

if (process.env.NODE_ENV === "development") { 

​	 // 开发环境配置

}else {  

​	//生产环境配置

 }



### axios

```


axios({
  method: 请求方式,      
  url: 接口地址,
  data: {} post请求的参数
  params:{} get请求的参数
  baseURL: 设置接口地址前缀
  headers: {}, 修改请求头设置 content-type:
  timeout: 1000, 允许请求超时时间
  withCredentials: 默认false, 表示跨域请求时是否需要使用凭证（cookie）
  responseType: 'json', // default
  onUploadProgress: 上传进度
  onDownloadProgress:下载进度
  proxy:设置代理
  
});



{
  // `data` 由服务器提供的响应
  data: {},
  // `status` 来自服务器响应的 HTTP 状态码
  status: 200,
  // `statusText` 来自服务器响应的 HTTP 状态信息
  statusText: 'OK',
  // `headers` 服务器响应的头
  headers: {},
   // `config` 是为请求提供的配置信息
  config: {},
 // 'request'
  // `request` is the request that generated this response
  // It is the last ClientRequest instance in node.js (in redirects)
  // and an XMLHttpRequest instance the browser
  request: {}
}

请求方式有：
axios.request(config)
axios.get(url[, config])
axios.delete(url[, config])
axios.head(url[, config])
axios.options(url[, config])
axios.post(url[, data[, config]])
axios.put(url[, data[, config]])
axios.patch(url[, data[, config]])


拦截器 
请求拦截   1.设置headers比如token验证 携带cookie  2.接口请求的loading动画

axios.interceptors.request.use(function (config) {
    // 在发送请求之前做些什么   比如token验证 携带cookie  
    return config;
  }, function (error) {
    // 对请求错误做些什么
    return Promise.reject(error);
  });
  
响应拦截  1.比如对某种返回结果进行统一处理，比如错网络误提示 2.接口请求的loading动画

// 添加响应拦截器  
axios.interceptors.response.use(function (response) {
    // 对响应数据做点什么   比如对某种返回结果进行统一处理
    return response;
  }, function (error) {
    // 对响应错误做点什么
    return Promise.reject(error);
  });

```





axios.all( [ axios.get('/user/12345'), axios.get('/user/12345'), axios请求] ).then(res=>{

  // res=>  [结果1，结果2]

})

### HTTP协议  

#### 什么是http协议

HTTP协议定义Web客户端如何从Web服务器请求Web页面，以及服务器如何把Web页面传送给客户端。HTTP协议采用了请求/响应模型。客户端向服务器发送一个请求报文，请求报文包含请求的方法、URL、协议版本、请求头部和请求数据。服务器以一个状态行作为响应，响应的内容包括协议的版本、成功或者错误代码、服务器信息、响应头部和响应数据。



#### HTTP 请求/响应的步骤：

客户端连接到Web服务器->发送Http请求->服务器接受请求并返回HTTP响应->释放连接TCP连接->客户端浏览器解析HTML内容

#### HTTPS的默认端口为80

####  请求方式

1、OPTIONS

返回服务器针对特定资源所支持的HTTP请求方法，也可以利用向web服务器发送‘*’的请求来测试服务器的功能性

2、HEAD

向服务器索与GET请求相一致的响应，只不过响应体将不会被返回。这一方法可以再不必传输整个响应内容的情况下，就可以获取包含在响应小消息头中的元信息。

3、GET

向特定的资源发出请求。注意：GET方法不应当被用于产生“副作用”的操作中，例如在Web Application中，其中一个原因是GET可能会被网络蜘蛛等随意访问。Loadrunner中对应get请求函数：web_link和web_url

4、POST

向指定资源提交数据进行处理请求（例如提交表单或者上传文件）。数据被包含在请求体中。POST请求可能会导致新的资源的建立和/或已有资源的修改。 Loadrunner中对应POST请求函数：web_submit_data,web_submit_form

5、PUT

向指定资源位置上传其最新内容

6、DELETE

请求服务器删除Request-URL所标识的资源

7、TRACE

回显服务器收到的请求，主要用于测试或诊断

8、CONNECT

HTTP/1.1协议中预留给能够将连接改为管道方式的代理服务器。



### request

##### 第一部分：请求行，用来说明请求类型,要访问的资源以及所使用的HTTP版本.

##### 第二部分：请求头部，紧接着请求行（即第一行）之后的部分，用来说明服务器要使用的附加信息如 请求的目的地（域名）浏览器信息

##### 第三部分：空行，请求头部后面的空行是必须的

##### 第四部分：请求数据也叫主体，可以添加任意的其他数据。

### http状态码

**200** OK 当您的操作将在响应正文中返回数据时，出现此结果。

**204** No Content 当您的操作成功，但不在响应正文中返回数据时，出现此结果。

**304** Not Modified（重定向） 上次访问服务器之后没有变化（缓存），出现此结果。

**413** Payload Too Large（客户端错误） 当请求长度过长时，出现此结果。

**400** BadRequest（客户端错误） 当参数无效时，出现此结果。

**404** Not Found（客户端错误） 当资源不存在时，出现此结果。

**500** 服务端错误





### HTTPS协议  

​	HTTPS的默认端口为443

​    HTTPS可以将数据加密传输，也就是传输的是密文，即便黑客在传输过程中拦截到数据也无法破译，这就保证了网络通信的安全。



### promise 见全栈面试宝典



### 接口封装

1. 写一个url.js文件来确定 开发环境和上线环境使用的 接口地址

2. 基于axios进行二次封装，处理get post等请求方式，

   在axios的请求拦截中 处理token验证，loading加载动画，headers的配置处理接口地址的baseURL

   携带cookie；在axios的响应拦截中 对接口返回的数据进行统一处理，比如网络错误提示，loading处理等

3. 使用promise 在进行封装，目的就是将异步代码同步化（ promise+ await +async）

4. 在封装一个 api.js 里面是针对业务逻辑的接口进行处理。 

### 跨域

当浏览器和服务器存在 

不同的域名，不同的协议，不同的ip地址，不同的端口号 时，进行【ajax访问】会产生【跨域】



### vue在webpack中设置反响代理

可以解决跨域，原来就是浏览器访问服务器的时候会有跨域问题，可以使用反向代理搭建本地虚拟服务器

，因为服务器和服务器之间的通信没有跨域问题，所以反向代理可以解决跨域。

```
    `proxyTable: {`
​      `'/api': {`
​        `target: "https://elm.cangdu.org", // API服务所在IP及端口号`
​        `changeOrigin: true, // 如果设置为true,那么本地会虚拟一个服务器接收你的请求并代你发送该请求，这样就不会有跨域问题（只适合开发环境）`
​        `pathRewrite: {`
​          `'^/api': '' // 重写路径`
​        `}`
​      `}`
  `},
```





# vue开发遇到的问题

#### 1、使用element-ui 修改组件样式 不生效

审查元素找到具体要修改的元素，使用样式穿透  >>>  完成样式修改

#### 2、如何进行项目优化





#### axios 拦截

请求拦截：axios.interceptors.request     可以做携带token 和允许携带cookie的设置

响应拦截：axios.interceptors.response  可以做统一的接口处理，比如接口返回 203代表未登录，直接可以跳转





#### 环境判断

​    process.env.NODE_ENV有两个值 在没打包之前他的值是 development,打包后production

​    development 开发环境 npm run dev

​    production 生产环境  npm run build



#### 接口封装

1、封装url.js文件 在文件中判断 开发环境

2、封装请求函数，使用promise 将axios的 请求结果进行返回，最后这个方法在返回promise

3、封装每个接口调用的函数，传递 接口地址，参数

4、在组件中使用 async await 处理接口返回的 promise结果



#### vue3  配置反向代理

在项目的根目录下新建 `vue.config.js` 文件

```
module.exports = {
    devServer: {
        proxy: {
            '/api': {
                target: 'http://m.baidu.com',//目标地址
                ws: true, //// 是否启用websockets
                changeOrigin: true, //开启代理：在本地会创建一个虚拟服务端，然后发送请求的数据，并同时接收请求的数据，这样服务端和服务端进行数据的交互就不会有跨域问题
                pathRewrite: {'^/api': '/'}    //这里重写路径
            }

        }
    }
}
```



#### 动态路由

https://segmentfault.com/a/1190000015419713

