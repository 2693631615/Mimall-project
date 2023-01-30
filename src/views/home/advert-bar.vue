<template>
  <div class="advert-bar container">
    <div class="ads-list flex">
      <a :href="('/product/' + item.id)" v-for="item of adsList" :key="item.id">
        <img v-lazy="item.img" alt="">
      </a>
    </div>
    <div class="ads-banner">
      <a href="/product/30">
        <img v-lazy="'/imgs/banner-1.png'" alt="">
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'advert-bar',
  data () {
    return {
      adsList: [{
        id: 40,
        img: 'imgs/ads/ads-1.png' // img图片的路径最前面可以不加'/'
      }, {
        id: 41,
        img: 'imgs/ads/ads-2.jpg'
      }, {
        id: 42,
        img: 'imgs/ads/ads-3.png'
      }, {
        id: 43,
        img: 'imgs/ads/ads-4.jpg'
      }]
    }
  }
  // methods: {
  //   getprodata () {
  //     this.axios.get('/products', {
  //       params: {
  //         categoryId: 100012,
  //         pageSize: 30
  //       }
  //     }).then((res) => {
  //       console.log(res)
  //     })
  //   }
  // },
  // created () {
  //   this.getprodata()
  // }
}
</script>

<style scoped lang="scss">
.ads-list {
  margin: 15px 0;
}
.ads-list img {
  width: 296px;
  height: 167px;
}
.ads-banner img {
  display: block;
  width: 100%;
  height: auto;
}
</style>
