<template>
  <div id="app">
    <router-view/>
  </div>
</template>
<script>
export default {
  name: 'app',
  created () {
    // this.getUser()
    // this.getCartCount()
  },
  methods: {
    // getUser () {
    //   this.axios.get('/user').then((res) => {
    //     console.log(res)
    //   })
    // },
    // getCartCount () {
    //   this.axios.get('/carts/products/sum').then((res) => {
    //     console.log(res)
    //   })
    // }
  }
}
</script>
<style>
@import 'assets/scss/reset.scss';
</style>
