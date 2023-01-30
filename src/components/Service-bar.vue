<template>
  <div class="service-bar">
    <ul class="service-list container flex">
      <li><span class="icon-setting"></span>预约维修服务</li>
      <li><span class="icon-7day"></span>7天无理由退换货</li>
      <li><span class="icon-15day"></span>15天免费换货</li>
      <li><span class="icon-post"></span>满150元包邮</li>
    </ul>
  </div>
</template>

<script>
export default {
}
</script>

<style scoped lang="scss">
@import 'assets/scss/mixin.scss';
.service-bar {
  padding: 32px 0;
  color: #666;
  font-size: 16px;
}
.service-list li {
  width: 24.9%;
  @include flex(center, center)
}
.icon-setting {
  @include bgImg(20px, 20px, '/imgs/icon-setting.png', 6px)
}
.icon-7day {
  @include bgImg(20px, 20px, '/imgs/icon-7day.png', 6px)
}
.icon-15day {
  @include bgImg(20px, 20px, '/imgs/icon-15day.png', 6px)
}
.icon-post {
  @include bgImg(20px, 20px, '/imgs/icon-post.png', 6px)
}
</style>
