import Vue from 'vue'
import App from './App.vue'
// import App from '../src/$nextTick/Swiper'
// import App from './作业/lun-l.vue'
// import './components/rem'
// import App from './作业/showD.vue'
import router from './router/index.js'
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
