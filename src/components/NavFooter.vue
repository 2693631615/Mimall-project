<template>
  <div class="nav-footer">
    <div class="footer-logo">
      <img src="imgs/logo-footer.png" alt="">
      <p>小米商城</p>
    </div>
    <div class="footer-link">
      <a href="https://www.imooc.com/u/1343480" target="_blank">河畔一脚主页</a> <span>|</span>
      <a href="https://www.imooc.com/u/1343480" target="_blank">Vue全栈课程</a> <span>|</span>
      <a href="https://www.imooc.com/u/1343480" target="_blank">React全家桶课程</a> <span>|</span>
      <a href="https://www.imooc.com/u/1343480" target="_blank">微信支付专线课程（H5+小程序+Node+Mongo）</a>
    </div>
    <div class="copyright">Copyright @2019 <span class="domain">mi futurefe.com</span> All Right Reserved.</div>
  </div>
</template>

<script>
export default {
  name: 'nav-footer',
  components: {
  }

}
</script>

<style scoped lang="scss">
.nav-footer {
  height: 232px;
  background-color: #333;
  text-align: center;
  color: #999;
  font-size: 16px;
  border-top: 2px solid #f60 ;
}
.footer-logo {
  margin: 30px 0;
}
.footer-logo img {
  width: 53px;
  height: auto;
  padding: 12px 0 10px 0;
}
.footer-link a {
  color: #999;
}
.footer-link span {
  padding: 0 8px;
}
.copyright {
  margin-top: 12px;
}
.domain {
  color: #f60;
}
</style>
