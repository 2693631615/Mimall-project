<template>
  <div class="orderAlipay">
    <Loading v-if="loading"></Loading>
    <div class="pay-form" v-html="content"></div>
  </div>
</template>

<script>
import Loading from 'components/Loading'
export default {
  name: 'order-alipay',
  components: {
    Loading
  },
  data () {
    return {
      orderId: this.$route.query.orderId,
      content: '',
      loading: true
    }
  },
  mounted () {
    this.paySubmit()
  },
  methods: {
    paySubmit () {
      this.axios.post('/pay', {
        orderId: this.orderId,
        orderName: 'Vue高仿小米商城',
        amount: 0.01,
        payType: 1 // 1.支付宝, 2.微信
      }).then((res) => {
        this.content = res.content
        // console.log(this.content)
        setTimeout(() => {
          document.forms[0].submit()
        }, 300)
      })
    }
  }

}
</script>

<style>

</style>
