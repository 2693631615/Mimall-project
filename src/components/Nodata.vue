<template>
  <div class="no-data">
    <img src="/imgs/icon-no-data.png" alt="">
    <p>当前暂无订单记录。</p>
  </div>
</template>

<script>
export default {
  name: 'No-Data'
}
</script>

<style lang="scss">
.no-data {
  text-align: center;
  font-size: 20px;
  color: #999;
  margin: 30px 0;
  img {
    width: 270px;
    height: auto;
    margin: 20px;
  }
}
</style>
