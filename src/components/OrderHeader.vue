<template>
  <div class="order-header clearfix">
    <div class="container">
      <div class="header-title">
        <logo-icon></logo-icon>
        <slot name="title"></slot>
      </div>
      <div class="user-name"><h5>{{username}}</h5></div>
    </div>
  </div>
</template>

<script>
import LogoIcon from './Logo-icon'
import { mapState } from 'vuex'
export default {
  name: 'order-header',
  components: {
    LogoIcon
  },
  computed: {
    ...mapState(['username'])
  }

}
</script>

<style scoped lang="scss">
@import 'assets/scss/mixin.scss';
@import 'assets/scss/config.scss';
.order-header {
  padding: 20px 0;
  line-height: 55px;
  border-bottom: 1px solid #f60;
  .header-title {
    float: left;
    @include flex(flex-start, flex-end);
    h3 {
      font-size: 22px;
      padding: 0 10px 0 40px;
    }
    span {
      line-height: 45px;
      font-size: 14px;
      color: #999;
    }
  }
  .user-name {
    float: right;
  }
}
</style>
