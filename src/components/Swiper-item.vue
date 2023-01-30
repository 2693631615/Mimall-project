<template>
  <swiper :options="swiperOption" >
    <slot name="swiperImage"></slot>
    <template v-slot:pagination>
      <div class="swiper-pagination"></div>
    </template>
    <template v-slot:button-prev>
      <slot name="btn-left"></slot>
    </template>
    <template v-slot:button-next>
      <slot name="btn-right"></slot>
    </template>
  </swiper>
</template>

<script>
import { Swiper } from 'vue-awesome-swiper'
import 'swiper/css/swiper.css'
export default {
  name: 'swiper-page',
  components: {
    Swiper
  },
  props: {
    isLoop: {
      type: Boolean,
      default: true
    },
    showNum: {
      type: Number,
      default: 1
    },
    autoplay: {
      type: [Boolean, Object],
      default () {
        return {
          delay: 4000,
          disableOnInteraction: false // 用户操作swiper之后，是否禁止autoplay 默认为true
          // pauseOnMouseEnter: true // 鼠标置于swiper时暂停自动切换，鼠标离开时恢复自动切换。
          // 突然失效了，不知道是什么原因
        }
      }
    },
    nextEl: String,
    prevEl: String,
    swiperStyle: String
  },
  data () {
    return {
      swiperOption: {
        slidesPerView: this.showNum,
        // autoplay: true, // 这个设置和下面autoplay的设置是等同的，但delay的默认时间是3000
        autoplay: this.autoplay,
        loop: this.isLoop,
        effect: this.swiperStyle,
        cubeEffect: {
          shadowOffset: 60,
          shadowScale: 0.6
        },
        // 分页器
        pagination: {
          el: '.swiper-pagination',
          clickable: true // 分页器可点击进行跳转
        },
        // 前进后退按钮
        navigation: {
          nextEl: this.nextEl,
          prevEl: this.prevEl
        }
      }
    }
  }
}
</script>

<style>

</style>
