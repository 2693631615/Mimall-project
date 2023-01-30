<template>
  <!-- <div>public\imgs\login-logo.png
    public\imgs\login-bg.jpg
  </div> -->
  <div class="login-page">
    <div class="login-header">
      <div class="container">
        <img src="imgs/login-logo.png" alt="logo">
        <div class="login-wrapper">
        <div class="from-header">
        <h3 class="login-account">账号登录</h3>
        <span>|</span>
        <h3 class="login-qr">扫码登录</h3>
        </div>
        <div name="login-form" class="login-form">
          <div><input type="text" placeholder="邮箱/手机号码/小米ID" v-model="username"></div>
          <div><input type="password" placeholder="密码" v-model="password"></div>
          <div class="login-btn">
            <button class="account" @click="login()">登录</button>
            <div class="login-prompt">
              <a href="" @click="register()">手机短信登录/注册</a>
              <div class="prompt-right"><a href="">立即注册</a><a href="">忘记密码？</a></div>
            </div>
          </div>
        </div>
        <!-- <div class="code-qr"><img src="" alt=""></div> -->
        </div>
      </div>
    </div>
    <div class="login-main">
      <img src="imgs/login-bg.jpg" alt="">
    </div>
    <div class="login-footer">
      <ul class="footer-list">
        <li>
          简体<span>|</span>
          繁体<span>|</span>
          English<span>|</span>
          常见问题<span>|</span>
          隐私政策
        </li>
        <li>小米公司版权所有-京ICP备 100464444-<i></i>京公网安局11010802020134号-京ICP证110507号</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'login-page',
  data () {
    return {
      username: '',
      password: '',
      userId: ''
    }
  },
  methods: {
    login () {
      const { username, password } = this // 解构赋值
      this.axios.post('/user/login', {
        username,
        password
      }).then((res) => {
        // console.log(res)
        // console.log(res.username)
        this.$store.dispatch('getUsername', res.username)
        this.$cookie.set('userId', res.id, { expires: '1M' })
        // 前端通过cookie插件保存用户id,保存时间为“1”一个月，‘Session’为浏览器窗口存在时间
        this.getCartCount()
        this.$router.replace('/index')
        // 1.this.$router.push('/index?from=login')
        // 2.this.$router.push({
        //   path:'/index',
        //   query:{
        //     from:'login'
        //    }
        //   })
        // 3.this.$router.push({
        //   name:'index', //路由配置时的name属性值
        //   params:{ // query和params传参的区别：query在路由跳转后，浏览器的网络地址上可以看到参数
        // params在路由跳转后，浏览器的网络地址上无法看到参数，参数隐藏在内存中
        //     from:'login' // 通过this.$route.params.from可以查看属性值
        //    }
        //   })
        // 直接在路由地址后面加上参数，通过路由地址验证这是从那个页面跳转过来的
        // this.$router.push({
        //   name: 'index',
        //   params: {
        //     from: 'login'
        //   }
        // })
      })
      // this.getCartCount()
    },
    getCartCount () {
      this.axios.get('/carts/products/sum').then((res) => {
        // console.log(res)
        this.$store.dispatch('getCartCount', res)
      })
    },
    register () {
      this.axios.post('/user/register', {
        username: 'LUOYILYX',
        password: 'LUOYILYX',
        email: 'LUOYILYX@163.com'
      }).then((res) => {
        // console.log(res)
        this.$message.info('账号注册成功！')
      })
    }
  }
}
</script>

<style scoped lang="scss">
@import 'assets/scss/config.scss';
@import 'assets/scss/mixin.scss';
.login-header {
  padding: 5px 0;
  background-color: #f5f5f5;
  img {
    height: 60px;
    width: auto;
  }
}
.container {
  position: relative;
}
.login-main {
  max-width: 100%;
  overflow: hidden;
}
.login-main img {
  box-sizing: border-box;
  width: 1680px;
  height: auto;
  border: 1px solid #f60;
  border-style: dotted;
}
.login-footer {
  height: 120px;
  padding-top: 100px;
  text-align: center;
}
.login-footer li {
  font-size: 12px;
  color: #555;
  line-height: 30px;
}
.footer-list span {
  padding: 0 4px;
}
.login-wrapper {
  position: absolute;
  top: 90px;
  right: 0px;
  width: 300px;
  height: 320px;
  border-radius: 5px;
  background-color: #fff;

}
.from-header {
  @include flex(center, center);
  height: 50px;
  margin-top: 18px;
  color: #333;
  font-size: 14px;
}
.from-header span {
  padding: 0 15px;
  color: #ccc;
}
.login-form {
  padding: 15px 12px;
}
.login-form input {
  box-sizing: border-box;
  width: 100%;
  height: 40px;
  padding: 0 8px;
  color: #666;
  margin: 8px 0;
  border: 1px solid #eee;
}
.login-btn {
  padding: 18px 5px;
  .account {
    width: 100%;
    line-height: 36px;
    color: #fff;
    font-size: 15px;
    font-weight: bold;
    text-align: center;
    background-color: #f60;
    border: none;
  }
}
.login-prompt {
  @include flex();
  line-height: 27px;
  a {
  color: #f60;
  font-size: 13px;
  }
}
.prompt-right a {
  color: #999;
  padding-left: 8px;
  white-space: nowrap;
}
.prompt-right a:last-child {
  margin-right: -8px;
}
</style>
