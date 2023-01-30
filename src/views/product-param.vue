<template>
  <div class="product-detail">
    <!-- <div class="nav-bar" :class="{fixed: isFixed}" ref="nav">
      <div class="container flex">
        <div class="product-title">
        <h3>小米8 透明探索版</h3><span>|</span>
        <h5>小米8</h5><span>|</span>
        <h5>小米8 SE</h5>
        </div>
        <div class="product-param">
        <a href="javascript;;">概述</a><span>|</span>
        <a href="javascript;;">参数</a><span>|</span>
        <a href="javascript;;">用户评价</a>
        <button class="buy-btn" @click="buyClick">立即购买</button>
        </div>
      </div>
    </div> -->
    <nav-param>
      <template v-slot:btn>
        <button class="buy-btn" @click="buyClick">立即购买</button>
      </template>
    </nav-param>
    <div class="bar-image">
      <div class="bar-desc">
        <h2>{{Prodata.name}}</h2>
        <h4>{{Prodata.subtitle}}</h4>
        <ul class="param-list">
          <li v-for="(item, index) of paramList" :key="index">
            {{item}}<span v-show="(index !== paramList.length - 1)">|</span>
            <!-- v-show="(index !== this.paramList.length - 1)"这是错误的写法，不用加this -->
          </li>
        </ul>
        <p class="pro-price">{{'￥' + Prodata.price}}</p>
      </div>
      <div class="bar-primary"><img src="product-bg-1.png" alt=""></div>
      <div class="bar-center container"><img src="product-bg-2.png" alt=""></div>
      <div><img src="product-bg-3.png" alt=""></div>
    </div>
    <swiper-item class="swiper-box" :isLoop="false" :autoplay="false" :showNum="3">
      <template v-slot:swiperImage>
        <swiper-slide v-for="item in ImageList" :key="item">
          <img class="swiper-img" :src="item" alt="">
        </swiper-slide>
      </template>
    </swiper-item>
    <div class="swiper-desc">{{Prodata.name}} AI变焦双摄拍摄</div>
  </div>
</template>

<script>
import navParam from 'components/nav-param'
import SwiperItem from '../components/Swiper-item'
import { SwiperSlide } from 'vue-awesome-swiper'
export default {
  name: 'product-param',
  data () {
    return {
      Prodata: '',
      paramList: ['全球首款双频GP', '骁龙845', 'AI变焦双摄', '红外人脸识别'],
      ImageList: [
        'gallery-2.png', 'gallery-3.png', 'gallery-4.png', 'gallery-5.jpg', 'gallery-6.jpg'
      ]
    }
  },
  components: {
    navParam,
    SwiperItem,
    SwiperSlide
  },
  created () {
    this.getProductData()
  },
  methods: {
    getProductData () {
      const id = this.$route.params.id
      // this.axios.get(`/products/${id}`).then((res) => {
      this.axios.get('/products/' + id).then((res) => {
        // console.log(res)
        this.Prodata = res
      })
    },
    buyClick () {
      const id = this.$route.params.id
      this.$router.push(`/detail/${id}`)
    }
  }

}
</script>

<style lang="scss">
@import 'assets/scss/mixin.scss';
@import 'assets/scss/config.scss';
.bar-image {
  position: relative;
}
.bar-desc {
  position: absolute;
  top: 32px;
  left: 50%;
  transform: translate(-50%, 0);
  text-align: center;
  color: $colorB;
  h2 {
    font-size: 44px;
  }
  h4 {
    font-size: 16px;
    line-height: 48px;
  }
}
.param-list {
  display: flex;
  font-size: 14px;
  span {
    padding: 0 8px;
  }
}
.pro-price {
  font-size: 24px;
  padding-top: 20px;
}
.bar-image {
  width: 100%;
  overflow: hidden;
  img {
    width: 100%;
    height: auto;
  }
}
.bar-primary img {
  border: 1px solid #f60;
  border-style: dotted;
}
.bar-center {
  padding: 18px 0;
}
.swiper-box {
  height: auto;
  padding: 20px 0 0;
  .swiper-img {
    width: 97%;
    height: auto;
  }
}
.swiper-desc {
  width: 100%;
  text-align: center;
  font-size: 16px;
  color: #333;
  padding-bottom: 40px;
}
</style>
