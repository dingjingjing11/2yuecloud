import Vue from 'vue'
import App from './App.vue'
import router from './router'
// import 'normalize.css'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import store from './store/index.js'

import 'echarts'
import * as echarts from 'echarts';
import Echarts from 'vue-echarts'
// import vue from 'public/vue';
Vue.use(ElementUI);
vue.component('v-chart',Echarts)
Vue.config.productionTip = false
Vue.use(VueAxios)
Vue.prototype.$echarts = echarts

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
