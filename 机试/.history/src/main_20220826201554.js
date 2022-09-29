import Vue from 'vue'
import App from './App.vue'
// import router from './router'
// import 'normalize.css'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
// import store from './store/index.js'
Vue.use(ElementUI);
import * as echarts from 'echarts/lib/echarts'

Vue.config.productionTip = false

new Vue({
  // router,
  // store,
  render: h => h(App)
}).$mount('#app')

// router.afterEach((to,from,next) => {
//   window.scrollTo(0,0);
// });

