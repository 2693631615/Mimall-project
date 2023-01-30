<template>
  <div class="nav-param">
    <div class="nav-bar" :class="{fixed: isFixed}" ref="nav">
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
        <!-- <button class="buy-btn" @click="buyClick">立即购买</button> -->
        <slot name="btn"></slot>
        </div>
      </div>
    </div>
    <div class="position" v-show="isFixed"></div>
  </div>
</template>

<script>
export default {
  name: 'nav-param',
  data () {
    return {
      isFixed: '',
      top: ''
    }
  },
  mounted () {
    window.addEventListener('scroll', this.scrollToTop)
    // console.log(this.$refs.nav)
    if (this.$refs.nav) {
      this.top = this.$refs.nav.offsetTop
      // console.log(this.top)
    }
  },
  beforeRouteLeave (to, form, next) { // vue路由监听的方式beforeRouteEnter和beforeRouteLeave
    // beforeRouteLeave导航离开当前路由时被调用
    window.removeEventListener('scroll', this.scrollToTop, false)
    next()
  },
  methods: {
    scrollToTop () {
      var scrollTop = window.pageYOffset || document.documentElement.scrollTop ||
      document.body.scrollTop // 获取当前浏览器滚动的高度
      // console.log(scrollTop)
      scrollTop <= this.top ? this.isFixed = false : this.isFixed = true
    }
  }

}
</script>

<style scoped lang="scss">
@import 'assets/scss/mixin.scss';
@import 'assets/scss/config.scss';
.nav-bar {
  height: 64px;
  line-height: 64px;
  z-index: 1;
}
.position {
  height: 64px;
}
.nav-bar span {
  padding: 0 6px;
  color: #ccc;
}
.fixed {
  @include fixed(0,0,0);
  z-index: 2;
  /* padding: 0 40px; */
  background-color: #fff;
  box-shadow: 0 3px 3px $colorE;
}
.product-title {
  @include flex(flex-start, center);
  color: $colorB;
  h3 {
    font-size: 15px;
  }
  h5 {
    // font-size: 14px;
    color: $colorC;
    font-weight: 500;
  }
}
.product-param a {
  color: #444;
}
.buy-btn {
  @include BtnSize(110px, 30px, $colorA);
  padding-bottom: 3px;
  color: #fff;
  font-size: 14px;
  font-weight: bold;
  margin-left: 12px;
}
</style>
