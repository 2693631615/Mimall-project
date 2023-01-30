import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutation'
import actions from './action'
Vue.use(Vuex)
// localStorage本地永久存储
let defaultname = ''
let defaultCount = 0
try { // 通过try-catch方法判断在浏览器支持本地缓存且本地缓存变量有值时使用本地缓存的变量
  if (localStorage.name && localStorage.Count) {
    defaultname = localStorage.name
    defaultCount = localStorage.Count
  }
} catch (e) { console.log('浏览器不支持本地缓存！') }

const state = {
  username: defaultname, // 保存登录用户名
  cartCount: defaultCount // 获取购物车商品数量
  // defaultname: localStorage.name,
  // defaultCount: localStorage.Count
}

const store = new Vuex.Store({
  state,
  mutations,
  actions
})
export default store
