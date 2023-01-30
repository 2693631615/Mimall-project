import Vue from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'
import VueAxios from 'vue-axios'
import store from './store'
import VueLazyLoad from 'vue-lazyload'
import VueCookie from 'vue-cookie'
import { Message } from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css' // 引入插件样式

// 根据前端的跨域方式做调整
axios.defaults.baseURL = '/api'
axios.defaults.timeout = 8000
// 接口错误拦截
axios.interceptors.response.use(function (response) {
  const res = response.data
  if (res.status === 0) {
    return res.data
  } else if (res.status === 10) {
    // const path = location.hash // 获取当前页面的哈希路由地址
    // if (path !== '#/index') {
    //   window.location.href = '/login'
    // }
    window.location.href = '/login'
  } else {
    // alert(res.msg)
    Message.warning(res.msg)
    return Promise.reject(res)
  }
}, (error) => {
  const res = error.response
  Message.error(res.data.message)
  return Promise.reject(res)
})
Vue.use(VueAxios, axios)
Vue.use(VueLazyLoad, {
  loading: '/imgs/loading-svg/loading-spinning-bubbles.svg'
})
Vue.use(VueCookie)
// Vue.use(Message)
Vue.prototype.$message = Message // 全局引入Message的UI插件,在vue实例上挂载$message方法
Vue.config.productionTip = false

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')
