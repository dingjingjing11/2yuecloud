import Vue from 'vue'
import App from './App.vue'
import "../"


// import HelloWorld from './components/HelloWorld.vue'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
