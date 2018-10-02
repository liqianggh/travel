// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
// 导入初始化css
import 'styles/reset.css'
// 1像素边框解决文件，兼容多倍屏幕
import 'styles/border.css'
// 导入fastClick
import fastClick from 'fastclick'
// 引入全局得iconfont
import 'styles/iconfont.css'

Vue.config.productionTip = false
// fastclick 使用
fastClick.attach(document.body)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router: router,
  components: { App: App },
  template: '<App/>'
})
