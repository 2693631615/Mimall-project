<template>
  <div class="index-page">
    <home-swiper></home-swiper>
    <advert-bar></advert-bar>
    <home-pro></home-pro>
    <service-bar></service-bar>
  </div>
</template>

<script>
import HomeSwiper from './Home-Swiper'
import ServiceBar from 'components/Service-bar'
import AdvertBar from './advert-bar'
import HomePro from './Home-pro'
export default {
  components: {
    ServiceBar,
    HomeSwiper,
    AdvertBar,
    HomePro
  }
  // data () {
  //   return {
  //     prolist: []
  //   }
  // },
  // created () {
  //   this.getprodata()
  // },
  // methods: {
  //   getprodata () {
  //     this.axios.get('/products', {
  //       params: {
  //         categoryId: 100012,
  //         pageSize: 6
  //       }
  //     }).then((res) => {
  //       const data = res.list
  //       const length = data.length
  //       // data.length的值是随着数组的操作而发生变化的，所以在下面的for循环中不能直接使用data.length
  //       for (let j = 0; j < 8 - length; j++) {
  //         data.push(data[j])
  //       }
  //       // console.log(data)
  //       for (let i = 0; i < 2; i++) {
  //         this.prolist[i] = data.slice(i * 4, (i + 1) * 4)
  //       }
  //       console.log(this.prolist)
  //       return this.prolist
  //     })
  //   }
  // }

}
</script>

<style>

</style>
