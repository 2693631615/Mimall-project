<template>
  <div class="index-page">
    <home-swiper></home-swiper>
    <advert-bar></advert-bar>
    <home-pro></home-pro>
    <service-bar></service-bar>
  </div>
</template>

<script>
import HomeSwiper from './home/Home-Swiper'
import ServiceBar from 'components/Service-bar'
import AdvertBar from './home/advert-bar'
import HomePro from './home/Home-pro'
export default {
  components: {
    ServiceBar,
    HomeSwiper,
    AdvertBar,
    HomePro
  }

}
</script>

<style>

</style>
