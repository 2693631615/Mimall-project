<template>
  <div class="order-pay">
    <div class="container">
      <div class="order-content">
        <div class="icon-succ"></div>
        <ul class="order-info">
          <li>
            <h3>订单提交成功！请尽快付款~~</h3>
            <p>应付金额：<span class="order-price">{{payment}}元</span></p>
          </li>
          <li>
            <div class="order-mess">
              <span>请在30分钟内完成支付,超时后取消订单</span><br/>
              <span>收货信息：{{postMess}}</span>
            </div>
            <p>
              订单详情
              <i class="icon-down" :class="{'icon-up': showMess}" @click="showMess=!showMess"></i>
            </p>
          </li>
        </ul>
      </div>
      <transition name="table">
        <div class="order-table" v-show="showMess">
          <tr>
            <td>订单号：</td>
            <td>{{orderId}}</td>
          </tr>
          <tr>
            <td>收货信息：</td>
            <td>{{postMess}}</td>
          </tr>
          <tr>
            <td>商品名称：</td>
            <td class="pro-data">
              <div class="pro-item" v-for="item in proDataList" :key="item.productId">
                <img v-lazy="item.productImage" alt="">
                {{item.productName}}
              </div>
            </td>
          </tr>
          <tr>
            <td>发票信息：</td>
            <td>电子发票 个人</td>
          </tr>
        </div>
      </transition>
      <div class="pay-method">
        <h3>选择以下支付方式付款</h3>
        <div class="pay-platform">
          <h5>支付平台</h5>
          <a href="javascript:;" :class="{'checked': payType === 1}" @click="payClick(1)">
            <img src="/imgs/pay/icon-ali.png" alt="">
          </a>
          <a href="javascript:;" :class="{'checked': payType === 2}" @click="payClick(2)">
            <img src="/imgs/pay/icon-wechat.png" alt="">
          </a>
        </div>
      </div>
      <modal-box v-show="showScan" :showBox="showScan" :modalBgc="true">
        <template v-slot:modal-box>
          <div class="scan-wrap">
            <div class="scan-img"></div>
            <div class="scan-pay">
              <div class="scan-title">微信支付<span @click="closePayModal">&#10005;</span></div>
              <div class="scan-qrcode">
                <img :src="payImg" alt="">
              </div>
              <div class="scan-tip">
                <p>请使用<span class="scan-color">微信</span>扫一扫</p>
                <p>二维码完成支付</p>
              </div>
            </div>
          </div>
        </template>
      </modal-box>
      <modal-item v-show="confirmPay" :showModal="confirmPay" @delClick="confirmPay=false">
        <template v-slot:header>
          <h3>支付确认</h3>
        </template>
        <template v-slot:content>
          <p>请确认是否完成订单支付！</p>
        </template>
        <template v-slot:footer>
          <div class="footer-btn">
            <button @click="Topaylist">查看订单</button>
            <button class="Nopay" @click="confirmPay=false">未支付</button>
          </div>
        </template>
      </modal-item>
    </div>
  </div>
</template>

<script>
import QRcode from 'qrcode'
import ModalBox from 'components/Modal-box'
import ModalItem from 'components/Modal-item'
export default {
  name: 'order-pay',
  components: {
    ModalBox,
    ModalItem
  },
  data () {
    return {
      orderId: this.$route.query.orderNo,
      postMess: '', // 收货地址
      proDataList: [], // 订单详情，包含商品列表
      showMess: false, // 是否显示订单详情
      payment: 0, // 支付总金额
      payType: '', // 支付类型
      showScan: false, // 是否显示微信支付弹框
      payImg: '', // 微信支付的二维码图片的编码
      confirmPay: false, // 显示二次支付确认弹框
      T: ''
    }
  },
  created () {
    this.getOrderDetail()
  },
  methods: {
    getOrderDetail () {
      this.axios.get(`/orders/${this.orderId}`).then((res) => {
        // console.log(res)
        this.payment = res.payment
        const item = res.shippingVo
        this.postMess = `${item.receiverName} ${item.receiverMobile} ${item.receiverProvince} 
          ${item.receiverCity} ${item.receiverDistrict} ${item.receiverAddress}`
        this.proDataList = res.orderItemVoList
      })
    },
    payClick (payType) {
      this.payType = payType
      if (payType === 1) {
        window.open(`/order/alipay?orderId=${this.orderId}`, '_blank')
      } else {
        this.axios.post('/pay', {
          orderId: this.orderId,
          orderName: 'Vue高仿小米商城',
          amount: 0.01,
          payType: 2 // 1.支付宝, 2.微信
        }).then((res) => {
          QRcode.toDataURL(res.content).then(url => {
            // console.log(url)
            this.showScan = true
            this.payImg = url
            this.loopOrderState()
          }).catch(() => {
            // console.error(err)
            this.$message.error('微信二维码生成失败！')
          })
        })
      }
    },
    closePayModal () {
      this.showScan = false
      this.confirmPay = true
      clearInterval(this.T)
    },
    Topaylist () {
      this.$router.push('/order/list')
    },
    // 轮询当前订单支付状态
    loopOrderState () {
      this.T = setInterval(() => {
        this.axios.get(`/orders/${this.orderId}`).then((res) => {
          if (res.status === 20) {
            clearInterval(this.T)
            this.Topaylist()
          }
        })
      }, 1000)
    }
  }

}
</script>

<style lang="scss">
@import 'assets/scss/mixin.scss';
@import 'assets/scss/config.scss';
.order-pay {
  padding-top: 70px;
  .icon-succ {
    width: 80px;
    height: 80px;
    margin: 20px;
    border-radius: 100%;
    background: url('/imgs/icon-gou.png') #80c58a no-repeat center;
  }
}
.order-content {
  @include flex(flex-start, center);
  border-bottom: 1px solid #ccc;
  margin-bottom: 30px;
}
.order-info {
  color: #333;
  flex: 1;
  font-size: 14px;
  li {
      @include flex(space-between, center);
      padding: 10px 0;
      h3 {
        font-size: 20px;
      }
    p {
      width: 300px;
      .icon-down {
        display: inline-block;
        width: 16px;
        height: 16px;
        vertical-align: middle;
        margin: 0 3px;
        background: url('/imgs/icon-down.png') no-repeat center;
        background-size: contain;
        transition: all .5s;
        cursor: pointer;
      }
      .icon-up {
        transform: rotate(180deg);
      }
    }
    .order-price {
      color: #f60;
      font-size: 18px;
    }
  }
}
.order-table {
  font-size: 15px;
  padding: 0 120px;
  height: 170px;
  opacity: 1;
  overflow: hidden;
  transition: all .5s;
    td {
      min-width: 120px;
      line-height: 38px;
      text-align: start;
    }
  .pro-data {
    @include flex(flex-start, center);
    flex-wrap: wrap;
    .pro-item {
      padding-right: 12px;
      img {
        height: 18px;
        width: auto;
        margin-left: -6px;
        vertical-align: middle;
      }
    }
  }
}
.table-enter {
  height: 0;
  opacity: 0;
}
// .table-enter-to {
//   height: 170px;
//   opacity: 1;
// }
// .table-leave {
//   height: 170px;
//   opacity: 1;
// }
.table-leave-to {
  height: 0;
  opacity: 0;
}
.pay-method {
  padding-top: 40px;
  h3 {
    line-height: 50px;
    font-size: 20px;
    font-weight: 500;
  }
}
.pay-platform {
  border-top: 1px solid #ccc;
  h5 {
    font-size: 18px;
    line-height: 40px;
    padding-top: 8px;
    font-weight: 500;
  }
  a {
    display: inline-block;
    padding: 8px 20px;
    margin-right: 15px;
    border: 1px solid #ccc;
    img {
      height: 30px;
      width: 100px;
    }
  }
  .checked {
    border: 1px solid red;
  }
}
.scan-wrap {
  @include flex(space-between, center);
  min-width: 270px;
  // padding: 10px 30px;
  background-color: rgba(250, 250, 250, 0);
  .scan-img {
    @include bgImg(240px, 400px, '/imgs/pay/icon-scan.png')
  }

  .scan-pay {
    box-sizing: border-box;
    height: 360px;
    padding: 12px;
    margin: 20px 0;
    font-size: 14px;
    background-color: #fff;
    img {
      width: 250px;
      height: auto;
      margin: 20px 28px 8px;
      border: 1px dashed #f60;
    }
    .scan-title {
      width: 100%;
      span {
        float: right;
      }
    }
    .scan-tip {
      text-align: center;
      .scan-color {
        color: #f60;
      }
    }
  }
}
.footer-btn {
  padding-top: 20px;
  button {
    color: #fff;
    font-size: 14px;
    @include BtnSize(120px, 28px);
    margin: 6px;
  }
  .Nopay {
    background-color: #666;
  }
}
</style>
