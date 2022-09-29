import Vue from 'vue'
import App from './App.vue'
import router from './router'
// import 'normalize.css'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

Vue.use(ElementUI);

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router,
}).$mount('#app')

// router.afterEach((to,from,next) => {
//   window.scrollTo(0,0);
//   next()
// });
