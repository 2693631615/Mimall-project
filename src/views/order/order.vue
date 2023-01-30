<template>
  <div class="order">
    <order-header>
      <template v-slot:title>
        <h3>{{title}}</h3>
        <span>{{tip}}</span>
      </template>
    </order-header>
    <router-view></router-view>
    <service-bar></service-bar>
    <nav-footer></nav-footer>
  </div>
</template>

<script>
import NavFooter from 'components/NavFooter'
import OrderHeader from 'components/OrderHeader'
import ServiceBar from 'components/Service-bar'
export default {
  name: 'order-page',
  components: {
    OrderHeader,
    NavFooter,
    ServiceBar
  },
  data () {
    return {
      title: '',
      tip: ''
    }
  },
  methods: {
    getheaderData () {
      const path = this.$route.path // 获取当前页面的路由地址
      if (path === '/order/confirm') {
        this.title = '订单确认'
        this.tip = '请填写收货地址！'
      } else if (path === '/order/list') {
        this.title = '订单列表'
        this.tip = '请谨防钓鱼链接或诈骗链接或诈骗电话，了解更多>'
      } else if (path === '/order/pay' || path === '/order/alipay') {
        this.title = '订单支付'
        this.tip = '请谨防钓鱼链接或诈骗链接或诈骗电话，了解更多>'
      }
    }
  },
  created () {
    this.getheaderData()
  },
  updated () {
    this.getheaderData()
  }

}
</script>

<style>

</style>
