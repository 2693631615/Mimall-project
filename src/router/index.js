import Vue from 'vue'
import Router from 'vue-router'
// import { createRouter } from 'vue-router'
import Home from 'views/Home'
import Index from 'views/home/index'
import Product from 'views/product'
import Detail from 'views/detail'
import Login from 'views/login'
import Cart from 'views/cart'
import Order from 'views/order/order'
import OrderConfirm from 'views/order/orderConfirm'
import OrderList from 'views/order/orderList'
import OrderPay from 'views/order/orderPay'
import AliPay from 'views/order/orderAlipay'
Vue.use(Router)
const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    redirect: 'index',
    children: [{
      path: 'index',
      name: 'index',
      component: Index
    }, {
      path: 'product/:id',
      name: 'product',
      component: Product
    }, {
      path: 'detail/:id',
      name: 'detail',
      component: Detail
    }]
  }, {
    path: '/login',
    name: 'Login',
    component: Login
  }, {
    path: '/cart',
    name: 'Cart',
    component: Cart
  }, {
    path: '/order',
    name: 'Order',
    component: Order,
    children: [{
      path: 'confirm',
      name: 'OrderConfirm',
      component: OrderConfirm
    }, {
      path: 'list',
      name: 'OrderList',
      component: OrderList
    }, {
      path: 'pay',
      name: 'OrderPay',
      component: OrderPay
    }, {
      path: 'alipay',
      name: 'AliPay',
      component: AliPay
    }]
  }]

export default new Router({
  mode: 'history',
  routes
})
