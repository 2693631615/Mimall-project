<template>
  <div class="header-logo"><a href="/" ></a></div>
</template>

<script>
export default {
  name: 'logo-icon'

}
</script>

<style scoped lang="scss">
@import 'assets/scss/mixin.scss';
@import 'assets/scss/config.scss';
.header-logo {
  width: 55px;
  height: 55px;
  background-color: #f60;
}
.header-logo a {
  display: inline-block;
  width: 110px;
  height: 55px;
  &::before {
    content: "";
    @include bgImg(55px,55px,'/imgs/mi-logo.png');
    transition: margin .5s;
  }
  &::after {
    content: "";
    @include bgImg(55px,55px,'/imgs/mi-home.png');
  }
  &:hover::before {
    margin-left: -55px;
    transition: margin .5s;
  }
}
</style>
