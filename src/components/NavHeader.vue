<template>
  <div class="Header">
    <div class="nav-topbar">
      <div class="container flex">
        <div class="topbar-menu">
          <a href="javascript:;">小米商城</a>
          <a href="javascript:;">MUl</a>
          <a href="javascript:;">云服务</a>
          <a href="javascript:;">协议规则</a>
        </div>
        <div class="topbar-user">
          <div v-if="username">
            <a href="javascript:;" >{{username}}</a>
            <a href="/order/list">我的订单</a>
          </div>
          <a href="javascript:;" v-if="!username" @click="goLogin">登录</a>
          <a href="javascript:;" v-else @click="loginOut">退出登录</a>
          <a href="javascript:;" class="my-cart" @click="goTocart">
            <i class="icon-cart"></i>购物车{{getCount}}
          </a>
        </div>
      </div>
    </div>
    <div class="nav-header container flex">
        <!-- <div class="header-logo"><a href="/" ></a></div> -->
        <logo-icon></logo-icon>
        <ul class="nav-list flex">
          <li class="list-item">
          <span>小米手机</span>
          <div class="nav-children container">
            <ul>
              <li class="list-product" v-for="item of XiaoMiList" :key="item.id">
                <!-- target="_blank"页面跳转时跳转到新页面 -->
                <a :href="('/product/' + item.id)" target="_blank">
                  <div class="pro-img">
                    <img v-lazy="item.mainImage" :alt="item.subtitle">
                  </div>
                  <div class="pro-name">{{item.name}}</div>
                  <div class="products-price">{{getPrice(item.price)}}</div>
                </a>
              </li>
            </ul>
          </div>
          </li>
          <li class="list-item">
          <span>Redmi红米</span>
          <div class="nav-children container">
            <ul>
              <li class="list-product" v-for="item of RedMiList" :key="item.id">
                <a :href="('/product/' + item.id)" target="_blank">
                  <div class="pro-img">
                    <img v-lazy="item.mainImage" :alt="item.subtitle">
                  </div>
                  <div class="pro-name">{{item.name}}</div>
                  <div class="products-price">{{getPrice(item.price)}}</div>
                </a>
              </li>
            </ul>
          </div>
          </li>
          <li class="list-item">
          <span>电视</span>
          <div class="nav-children container">
            <ul>
              <li class="list-product" v-for="item of RedMiList" :key="item.id">
                <a :href="('/product/' + item.id)" target="_blank">
                  <div class="pro-img">
                    <img v-lazy="item.mainImage" :alt="item.subtitle">
                  </div>
                  <div class="pro-name">{{item.name}}</div>
                  <div class="products-price">{{getPrice(item.price)}}</div>
                </a>
              </li>
            </ul>
          </div>
          </li>
        </ul>
        <div class="header-search">
          <div class="wrapper">
            <input type="text" class="search-input">
            <a href="javascript:;" class="icon-search" ></a>
          </div>
        </div>
    </div>
  </div>
</template>

<script>
import LogoIcon from './Logo-icon'
import { mapState } from 'vuex'
export default {
  name: 'nav-header',
  data () {
    return {
      // username: this.$store.state.username,
      // cartCount: this.$store.state.cartCount,
      // 这种赋值给变量再用变量进行渲染的方式会导致响应式出现,问题如在页面不更新改变vuex状态时会无法响应,
      // 以后做项目时要注意Vuex状态的引用
      XiaoMiList: [],
      RedMiList: []
    }
  },
  components: {
    LogoIcon
  },
  methods: {
    getphonelist () {
      this.axios.get('/products', {
        params: {
          categoryId: '100012',
          pageSize: 19
        }
      }).then((res) => {
        // console.log(res)
        if (res.list.length >= 12) {
          this.XiaoMiList = res.list.slice(0, 6)
          // console.log(this.XiaoMiList)
          this.RedMiList = res.list.slice(6, 12)
          // console.log(this.RedMiList)
        }
      })
    },
    goTocart () {
      this.$router.push('/cart')
    },
    goLogin () {
      this.$router.push('/login')
    },
    loginOut () {
      this.axios.post('/user/logout').then(() => {
        this.$message.success('登录退出成功！')
        this.$cookie.set('userId', '', { expires: '-1' })
        this.$store.dispatch('getUsername', '')
        this.$store.dispatch('getCartCount', '0')
      })
    }
  },
  computed: {
    ...mapState(['username', 'cartCount']),
    getPrice () {
      return val => {
        // console.log(val)
        if (!val) return '0.00'
        return '￥' + val.toFixed(2) + '元'
      }
    },
    getCount () {
      if (this.cartCount !== '0' && this.cartCount !== 0) {
        return '(' + this.cartCount + ')'
      } else {
        return ''
      }
    }
  },
  mounted () {
    this.getphonelist()
  }
}
</script>

<style scoped lang="scss">
@import 'assets/scss/mixin.scss';
@import 'assets/scss/config.scss';
.nav-topbar {
  background-color: #333;
  line-height: 39px;
}
.nav-topbar a {
  display: inline-block;
  margin-right: 18px;
  color: #b0b0b0;
  font-size: 14px;
}
.topbar-user {
  @include flex();
  .my-cart {
    width: 110px;
    text-align: center;
    background-color: #f60;
    font-weight: 700;
    color: #fff;
    margin-right: 0;
    &:hover {
      opacity: .9;
    }
  }
}
.icon-cart {
  @include bgImg(16px,12px,'/imgs/icon-cart-checked.png',5px);
}
.nav-header {
  position: relative;
  height: 112px;
  align-items: center;
}
// .header-logo {
//   width: 55px;
//   height: 55px;
//   background-color: #f60;
// }
// .header-logo a {
//   display: inline-block;
//   width: 110px;
//   height: 55px;
//   &::before {
//     content: "";
//     @include bgImg(55px,55px,'/imgs/mi-logo.png');
//     transition: margin .5s;
//   }
//   &::after {
//     content: "";
//     @include bgImg(55px,55px,'/imgs/mi-home.png');
//   }
//   &:hover::before {
//     margin-left: -55px;
//     transition: margin .5s;
//   }
// }
.nav-list {
  margin-right: 180px;
}
.list-item {
  margin: 0 12px;
}
.nav-list span {
  line-height: 72px;
  color: #333;
  font-size: 16px;
  font-weight: 700;
  cursor: pointer;
}
.nav-list span:hover {
  color: $colorA;
}
.header-search {
  width: 319px;
}
.wrapper {
  @include flex();
  border: 1px solid #e0e0e0;
  line-height: 50px;
}
.search-input {
  width: 250px;
  height: 50px;
  padding-left: 14px;
  border: none;
  border-right: 1px solid #e0e0e0;
}
.icon-search {
 @include bgImg(18px,18px,'/imgs/icon-search.png',18px);
}
.nav-children {
  position: absolute;
  top: 112px;
  left: 0;
  z-index: 9;
  height: 0;
  opacity: 0;
  overflow: hidden;
  border: 1px solid #e5e5e5;
  box-shadow: 0 4px 5px 0px rgba(0, 0, 0, .12);
  background-color: #fff;
  transition: all .5s;
}
.nav-list li:hover .nav-children {
    height: 218px;
    opacity: 1;
  }
.list-product {
  float: left;
  width: 16.6%;
  padding-top: 26px;
  text-align: center;
  @include flex(center, center);
}
.list-product a {
  display: inline-block;
  width: 100%;
}
.pro-img {
  height: 112px;
  border-right: 1px solid $colorF;
}
.nav-children li:last-child .pro-img {
  border-right: none;
}
.pro-img img {
  width: auto;
  height: 112px;
  text-align: center;
}
.pro-name {
  color: $colorB;
  font-size: 15px;
  padding-top: 16px;
  font-weight: bold;
}
.products-price {
  color: $colorA;
  line-height: 28px;
  font-weight: bold;
}
</style>
