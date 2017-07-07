import Vue from 'vue'
import VueResource from 'vue-resource'
import app from './app'
import router from './router'
import './mock/mockServer' // 引入加载模块
import './common/stylus/fonts.styl'

Vue.use(VueResource)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  render: h => h(app),
  router
})
