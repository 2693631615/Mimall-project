<template>
  <div class="cart-page">
    <order-header>
      <template v-slot:title>
        <h3>我的购物车</h3>
        <span>温馨提示：产品是否购买成功，以最终下单为准，请尽快结算</span>
      </template>
    </order-header>
    <div class="order-list">
      <table class="container">
        <tr>
          <th><span class="radio" :class="{isCheck: Allcheck}" @click="allClick">✔</span>全选</th>
          <th>商品名称</th>
          <th>单价</th>
          <th>数量</th>
          <th>单个合计</th>
          <th>操作</th>
        </tr>
        <tr v-for="item in cartList" :key="item.id">
          <td><span class="radio" :class="{isCheck: item.productSelected}" @click="changeCount(item)">✔</span></td>
          <td class="pro-items">
            <img :src="item.productMainImage" alt="">
            <span>{{item.productName}} {{item.productSubtitle}}</span>
          </td>
          <td>{{item.productPrice}}</td>
          <td><div class="increase-item"><button @click="changeCount(item,'-')">-</button>
            <span>{{item.quantity}}</span><button @click="changeCount(item, '+')">+</button></div></td>
          <td>{{item.productTotalPrice}}</td>
          <td @click="delClick(item)">&#10005;</td>
          <modal-box @calClick="btnClick" v-show="isDelete" :showBox="isDelete">
            <template v-slot:modal-box>
              <div class="modal-inside">
                <div class="modal-header">
                  <h3 class="modal-title">提示</h3>
                  <span class="detele">&#10005;</span>
                </div>
                <p class="modal-content">商品删除成功！</p>
                <div class="modal-footer">
                  <button class="modal-btn" @click="btnClick" >查看详情</button>
                </div>
              </div>
            </template>
          </modal-box>
        </tr>
      </table>
    </div>
    <div class="pro-settle flex container">
      <div class="pro-count">
        <a href="javascript">继续购物</a>
        共<span> {{cartList.length}} </span>件商品,已选择<span> {{checkedNum}} </span>件商品
      </div>
      <div class="pro-Totalprice">
        <span>合计：<i>{{cartTotalPrice}}</i>元</span>
        <button class="btn-pay" @click="Topay">去结算</button>
        <modal-box v-show="Noproduct" @calClick="btnClick" :showBox="Noproduct">
          <template v-slot:modal-box >
            <div class="modal-inside">
              <div class="modal-header">
                <h3 class="modal-title">提示</h3>
                <span class="detele">&#10005;</span>
              </div>
              <p class="modal-content">当前购物车没有商品,无法结算！</p>
              <div class="modal-footer">
                <button class="modal-btn" @click="btnClick" >查看详情</button>
              </div>
            </div>
          </template>
        </modal-box>
      </div>
    </div>
    <service-bar></service-bar>
    <nav-footer></nav-footer>
  </div>
</template>

<script>
import OrderHeader from 'components/OrderHeader'
import NavFooter from 'components/NavFooter'
import ModalBox from 'components/Modal-box'
import ServiceBar from 'components/Service-bar'
// import { Message } from 'element-ui' // 局部引入
// import 'element-ui/lib/theme-chalk/index.css' // 引入插件样式
export default {
  name: 'cart-page',
  components: {
    NavFooter,
    OrderHeader,
    ModalBox,
    ServiceBar
  },
  data () {
    return {
      cartList: [], // 商品列表
      Allcheck: false, // 是否全选
      cartTotalPrice: 0, // 商品总金额
      checkedNum: 0, // 选中商品数量
      // checkIndex: ''
      isDelete: false,
      Noproduct: false
    }
  },
  created () {
    this.getCartdata()
  },
  methods: {
    // 获取购物车数据
    getCartdata () {
      this.axios.get('/carts').then((res) => {
        // console.log(res)
        this.renderData(res)
      })
    },
    // 商品全选功能
    allClick () {
      const url = this.Allcheck ? '/carts/unSelectAll' : '/carts/selectAll'
      this.axios.put(url).then((res) => {
        // console.log(res)
        this.renderData(res)
      })
      // this.isCheck = !this.isCheck
    },
    renderData (res) {
      if (res) {
        this.cartList = res.cartProductVoList || []
        this.Allcheck = res.selectedAll
        this.cartTotalPrice = res.cartTotalPrice
        this.checkedNum = this.cartList.filter(item => item.productSelected).length
      }
    },
    // 改变购物车数量和商品单选功能
    changeCount (item, type) {
      let quantity = item.quantity
      let selected = item.productSelected
      if (type === '-') {
        if (quantity <= 1) {
          // Message.info('商品数不能少于1件！') // 弹出提示信息
          this.$message.info('商品数不能少于1件！')
          return 0
        }
        quantity--
      } else if (type === '+') {
        if (quantity > item.productStock) {
          // Message.warning('商品数不能超过库存！') // 弹出警告信息
          this.$message.warning('商品数不能超过库存！')
          return 0
        }
        quantity++
      } else {
        selected = !item.productSelected
      }
      this.axios.put(`/carts/${item.productId}`, {
        quantity,
        selected
      }).then((res) => {
        this.renderData(res)
      })
    },
    delClick (item) {
      this.axios.delete(`/carts/${item.productId}`).then((res) => {
        this.renderData(res)
      })
      this.isDelete = true
    },
    btnClick () {
      this.isDelete = false
      this.Noproduct = false
    },
    Topay () {
      const isCheck = this.cartList.every(item => !item.productSelected)
      if (isCheck) {
        this.Noproduct = true
      } else {
        this.$router.push('/order/confirm')
      }
    }
  }

}
</script>

<style scoped lang="scss">
@import 'assets/scss/mixin.scss';
@import 'assets/scss/config.scss';
table {
  border-collapse: collapse;
}
.order-list {
  border-top: 1px solid #f60;
  tr {
    height: 120px;
    text-align: center;
    border-bottom: 1px solid #eee;
    th {
      min-width: 120px;
      font-size: 14px;
      color: #999;
      font-weight: 500;
    }
    td {
      color: #333;
      font-size: 16px;
      cursor: pointer;
      img {
        height: 70px;
        width: auto;
        vertical-align: middle;
      }
    }
  }
}
.increase-item {
  border: 1px solid #ccc;
  button {
    width: 32px;
    height: 24px;
    font-size: 18px;
    border: none;
    background-color: #fff;
  }
  span {
    padding: 0 12px;
  }
}
.radio {
  display: inline-block;
  width: 18px;
  line-height: 18px;
  margin-right: 10px;
  color: #fff;
  text-align: center;
  border: 1px solid #ccc;
}
.isCheck {
  background-color: #f60;
  border-color: #fff;
}
.pro-items {
  // box-sizing: content-box;
  text-align: start;
  padding-left: 50px;
}
.pro-settle {
  line-height: 60px;
  font-size: 14px;
  a {
    padding-right: 20px;
    color: #333;
  }
  span {
    color: #f60;
  }
}
.pro-Totalprice {
  i {
    font-size: 20px;
    font-style: normal;
  }
  .btn-pay {
    @include BtnSize(150px, 40px);
    color: #fff;
    font-size: 16px;
    margin-left: 24px;
    cursor: pointer;
  }
}
.modal-inside {
    min-width: 270px;
    padding: 10px 30px;
  }
  .modal-header {
    height: 50px;
    font-size: 15px;
    color: $colorB;
    @include flex(space-between, center);
  }
  .modal-header .detele {
    font-size: 20px
  }
  .detele:hover {
    transform:scale(1.1, 1.1);
  }
  .modal-content {
    font-size: 18px;
    line-height: 36px;
    color: $colorB
  }
  .modal-btn {
    color: #fff;
    @include BtnSize(136px, 27px);
  }
  .modal-footer {
    line-height: 60px;
    text-align: center;
  }
</style>
