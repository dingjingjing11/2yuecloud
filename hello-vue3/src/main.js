import Vue from 'vue'
// import './rem'
// import App from './components/paga/watch/App'
// import App from '@/components/paga/watch/zujian/A.vue'
// import App from './components/paga/watch/zujian/DomA.vue'
// import App from './components/paga/watch/zujian/下拉列表A'
// import App from './components/paga/watch/zujian/评分A'
// import App from './components/paga/watch/zujian/消息弹框A'

import App from './components/paga/watch/zujian/兄弟组件/index.vue'

Vue.config.productionTip = false

// import './components/paga/qiche/src/assets/'

new Vue({
  render: h => h(App),
}).$mount('#app')
