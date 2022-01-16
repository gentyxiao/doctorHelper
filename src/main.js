import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './plugins/element.js'
import './assets/css/gloabal.css'
import './assets/fonts/iconfont.css'
import bus from './utils/bus.js'

Vue.config.productionTip = false
Vue.prototype.$bus = bus
if (process.env.VUE_APP_MOCKING === 'true') { // 判断是否为mock模式，坑：环境变量必须是VUE_APP_开头，否则不能被识别
  require('../src/mock')
}

new Vue({
  router,
  render: (h) => h(App)
}).$mount('#app')
