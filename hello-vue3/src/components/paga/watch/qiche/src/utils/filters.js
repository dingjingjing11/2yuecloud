
import Vue from 'vue'
Vue.filter('upper',function(val){
    return val[0].toUpperCase() + val.slice(1)
  })