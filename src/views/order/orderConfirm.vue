<template>
  <div class="order-confirm container">
    <!-- svg图片引入方法代码一： -->
    <!-- <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" style="position: absolute; width: 0px; height: 0px; overflow: hidden;">
      <defs>
        <symbol id="icon-add" viewBox="0 0 31 32">
          <title>add</title>
          <path d="M30.745 15.152h-14.382v-14.596c0-0.308-0.243-0.557-0.543-0.557s-0.543 0.249-0.543 0.557v14.596h-14.665c-0.3 0-0.543 0.249-0.543 0.557s0.243 0.557 0.543 0.557h14.665v15.177c0 0.307 0.243 0.557 0.543 0.557s0.543-0.249 0.543-0.557v-15.177h14.382c0.3 0 0.543-0.249 0.543-0.557s-0.243-0.557-0.543-0.557z" class="path1"></path>
        </symbol>
        <symbol id="icon-edit" viewBox="0 0 32 32">
          <title>edit</title>
          <path d="M28.287 8.51l-4.805-4.806 0.831-0.831c0.472-0.472 1.086-0.777 1.564-0.777 0.248 0 0.452 0.082 0.622 0.253l3.143 3.144c0.539 0.54 0.133 1.529-0.524 2.186l-0.831 0.831zM26.805 9.992l-1.138 1.138-4.805-4.806 1.138-1.138 4.805 4.806zM24.186 12.612l-14.758 14.762-4.805-4.806 14.758-14.762 4.805 4.806zM7.379 28.288l-4.892 1.224 1.223-4.894 3.669 3.67zM31.123 4.011l-3.143-3.144c-0.567-0.567-1.294-0.867-2.103-0.867-1.036 0-2.174 0.52-3.045 1.391l-20.429 20.436c-0.135 0.134-0.23 0.302-0.276 0.487l-2.095 8.385c-0.089 0.355 0.017 0.736 0.276 0.995 0.198 0.198 0.461 0.307 0.741 0.307 0.085 0 0.171-0.010 0.254-0.031l8.381-2.096c0.185-0.047 0.354-0.142 0.487-0.276l20.43-20.436c1.409-1.41 2.042-3.632 0.524-5.15v0z" class="path1"></path>
        </symbol>
        <symbol id="icon-del" viewBox="0 0 32 32">
          <title>delete</title>
          <path d="M11.355 4.129v-2.065h9.29v2.065h-9.29zM6.194 29.935v-23.742h19.613v23.742h-19.613zM30.968 4.129h-8.258v-3.097c0-0.569-0.463-1.032-1.032-1.032h-11.355c-0.569 0-1.032 0.463-1.032 1.032v3.097h-8.258c-0.569 0-1.032 0.463-1.032 1.032s0.463 1.032 1.032 1.032h3.097v24.774c0 0.569 0.463 1.032 1.032 1.032h21.677c0.569 0 1.032-0.463 1.032-1.032v-24.774h3.097c0.569 0 1.032-0.463 1.032-1.032s-0.463-1.032-1.032-1.032v0z" class="path1"></path>
          <path d="M10.323 9.806c-0.569 0-1.032 0.463-1.032 1.032v14.452c0 0.569 0.463 1.032 1.032 1.032s1.032-0.463 1.032-1.032v-14.452c0-0.569-0.463-1.032-1.032-1.032z" class="path2"></path>
          <path d="M16 9.806c-0.569 0-1.032 0.463-1.032 1.032v14.452c0 0.569 0.463 1.032 1.032 1.032s1.032-0.463 1.032-1.032v-14.452c0-0.569-0.463-1.032-1.032-1.032z" class="path3"></path>
          <path d="M21.677 9.806c-0.569 0-1.032 0.463-1.032 1.032v14.452c0 0.569 0.463 1.032 1.032 1.032s1.032-0.463 1.032-1.032v-14.452c0-0.569-0.463-1.032-1.032-1.032z" class="path4"></path>
        </symbol>
      </defs>
    </svg> -->

    <svg style="position: absolute; width: 0px; height: 0px; overflow: hidden;">
      <symbol id="icon-add" viewBox="0 0 1024 1024">
        <path d="M703.335746 550.266535l-153.069211 0 0 153.069211-76.535117 0 0-153.069211-153.069211 0 0-76.535117 153.069211 0 0-153.069211 76.535117 0 0 153.069211 153.069211 0L703.335746 550.266535zM511.998977 129.327484c-210.469526 0-382.672516 172.201967-382.672516 382.672516s172.20299 382.672516 382.672516 382.672516c210.469526 0 382.672516-172.201967 382.672516-382.672516S722.469526 129.327484 511.998977 129.327484z" fill="#CCCCCC" >
        </path>
      </symbol>
      <symbol id="icon-del" viewBox="0 0 1024 1024">
        <path d="M511.993349 831.827189c11.780301 0 21.324678-9.544377 21.324678-21.312398L533.318026 362.740558c0-11.781324-9.544377-21.323655-21.324678-21.323655-11.768021 0-21.312398 9.54233-21.312398 21.323655l0 447.774233C490.68095 822.282812 500.225327 831.827189 511.993349 831.827189zM405.386332 831.827189c11.780301 0 21.323655-9.544377 21.323655-21.312398L405.386332 362.740558c0-11.781324-9.543354-21.323655-21.323655-21.323655-11.769045 0-21.323655 9.54233-21.323655 21.323655l21.323655 447.774233C384.062678 822.282812 393.607054 831.827189 405.386332 831.827189zM895.797641 213.485209 703.894983 213.485209l0-63.970964c0-47.099714-38.183647-85.284385-85.294618-85.284385L405.386332 64.22986c-47.099714 0-85.294618 38.183647-85.294618 85.284385l0 63.970964L128.190079 213.485209c-11.769045 0-21.312398 9.543354-21.312398 21.324678 0 11.769045 9.543354 21.322631 21.312398 21.322631l89.422635 0 59.842946 618.34198c0 47.109947 38.182624 85.294618 85.283362 85.294618l298.508651 0c47.110971 0 85.295642-38.183647 85.295642-85.294618l59.832713-618.34198 89.421612 0c11.779278 0 21.323655-9.553587 21.323655-21.322631C917.120272 223.028563 907.575896 213.485209 895.797641 213.485209zM362.740046 149.515269c0-23.550369 19.097964-42.636053 42.647309-42.636053l213.214033 0c23.559579 0 42.647309 19.085684 42.647309 42.636053l0 63.970964-298.508651 0L362.740046 149.515269zM703.894983 874.474498c0 23.551392-19.085684 42.647309-42.647309 42.647309l-298.508651 0c-23.549346 0-42.647309-19.095917-42.647309-42.647309l-59.833737-618.34198 503.479953 0L703.894983 874.474498zM618.601388 831.827189c11.780301 0 21.334911-9.544377 21.334911-21.312398l21.312398-447.774233c0-11.781324-9.532097-21.323655-21.312398-21.323655-11.781324 0-21.334911 9.54233-21.334911 21.323655l-21.312398 447.774233C597.28899 822.282812 606.832344 831.827189 618.601388 831.827189z"  >
        </path>
      </symbol>
      <symbol id="icon-edit" viewBox="0 0 1024 1024"><path d="M813.1072 246.2208l-94.8224-94.8224a71.3216 71.3216 0 0 0-41.6768-18.9952 53.9136 53.9136 0 0 0-44.4416 13.4656l-9.984 9.9328c-192.768 191.488-325.9392 324.2496-374.8864 373.76a142.0288 142.0288 0 0 0-37.9904 67.3792l-33.3312 135.6288a63.3344 63.3344 0 0 0 16.2816 59.0336l0.3584 0.4096a62.0032 62.0032 0 0 0 43.4176 19.2512 50.5344 50.5344 0 0 0 17.0496-2.9184c0.8192-0.3072 83.0976-31.4368 137.4208-51.2a193.1264 193.1264 0 0 0 64.5632-41.8816l358.0928-358.0928a78.1312 78.1312 0 0 0 0-110.6944z m-143.616-59.9552a19.2512 19.2512 0 0 1 9.5232 3.328l94.8224 94.8224a22.8864 22.8864 0 0 1 0 33.2288l-27.7504 27.7504-117.76-117.76c8.8576-8.8064 16.6912-16.5376 23.1936-22.8864 8.96-9.1648 14.4896-14.6944 17.9712-18.4832zM588.8 267.776l117.76 118.016-290.816 288.8192-3.3792 3.2768L384 620.032l-0.8192-1.4336-1.28-1.9968a38.1952 38.1952 0 0 0-8.9088-10.752 75.4688 75.4688 0 0 0-11.2128-8.6528l-67.9424-35.4304C356.0448 498.3808 501.76 353.536 588.8 267.776z m-223.9488 438.3232c-48.5888 19.0976-117.76 44.4928-129.1776 48.64a11.7248 11.7248 0 0 1-5.12-3.1232 9.0112 9.0112 0 0 1-3.2256-6.144l34.4576-135.6288v-1.024c0-0.768 0.256-1.4848 0.4608-2.2528l71.3728 37.0176zM823.296 901.12H220.8768a32.256 32.256 0 1 1 0-64.512H823.296a32.256 32.256 0 1 1 0 64.512z"  >
      </path>
    </symbol>
  </svg>
    <div class="address-wrapper">
      <h3>收货地址</h3>
      <ul class="address-list" v-if="this.addresslist.length">
        <li v-for="(item, index) in addresslist" :class="{isActive: checkIndex === index}"
        @click="(checkIndex = index)" :key="index">
          <h5>{{item.receiverName}}</h5>
          <p>{{item.receiverMobile}}</p>
          <address>{{item.receiverProvince + '' + item.receiverCity + '' + item.receiverAddress}}</address>
          <div class="address-icon flex">
            <a href="javascript:;" class="address-detele" @click="delAddress(item)">
              <svg class="icon icon-del">
                <use xlink:href="#icon-del"></use>
              </svg>
            </a>
            <a href="javascript:;" class="address-edit" @click="editAddress(item)">
              <svg class="icon icon-edit">
                <use xlink:href="#icon-edit"></use>
              </svg>
            </a>
          </div>
        </li>
        <li class="address-add">
            <a href="javascript:;" @click="addAddress()">
              <svg class="icon icon-add">
                <use xlink:href="#icon-add"></use>
              </svg>
              <i>添加新地址</i>
            </a>
            <AddressModal v-show="showModal" :showBox="showModal" :showData="checkedItem"
             @keepClick="keepClick" @delClick="closeModel"></AddressModal>
        </li>
      </ul>
      <modal-item class="model-items" v-show="(userAction === 2)"
      @delClick="closeModel" :showModal="(userAction === 2)">
        <template v-slot:header>
          <h3 class="modal-title">删除确认</h3>
        </template>
        <template v-slot:content>
          <p class="modal-content">你确认要删除此收货地址吗？</p>
        </template>
        <template v-slot:footer>
          <button class="modal-btn" @click="submitAddress()">确认删除</button>
        </template>
      </modal-item>
    </div>
    <div class="goods-message clearfix">
      <h3>商品</h3>
      <tr class="goods-list" v-for="(item, index) in cartList" :key="index">
        <td class="goods-Image">
          <img :src="item.productMainImage" alt="商品图片">
          <span>{{(item.productName + ' ' + item.productSubtitle)}}</span>
        </td>
        <td>
          {{item.productPrice}}元×{{item.quantity}}
        </td>
        <td class="total-price">
          {{item.productTotalPrice}}元
        </td>
      </tr>
      <div class="goods-ship">
        <tr>
          <th>配送方式</th>
          <td>包邮</td>
        </tr>
        <tr>
          <th>发票</th>
          <td>电子发票</td>
          <td>个人</td>
        </tr>
      </div>
      <div class="goods-induce">
        <tr>
          <th>商品件数：</th>
          <td><span>{{count}}件</span></td>
        </tr>
        <tr>
          <th>商品总价：</th>
          <td><span>{{cartTotalPrice}}元</span></td>
        </tr>
        <tr>
          <th>优惠活动：</th>
          <td><span>0元</span></td>
        </tr>
        <tr>
          <th>运费：</th>
          <td><span>0元</span></td>
        </tr>
        <tr>
          <th>应付金额：</th>
          <td><span class="goods-pay">{{cartTotalPrice}}元</span></td>
        </tr>
      </div>
    </div>
    <div class="leave-btn">
      <button class="back-cart">返回购物车</button>
      <button class="Topay" @click="orderSubmit">去结算</button>
    </div>
  </div>
</template>

<script>
import ModalItem from 'components/Modal-item'
import AddressModal from 'components/Address-modal'
export default {
  name: 'order-confirm',
  components: {
    ModalItem,
    AddressModal
  },
  data () {
    return {
      addresslist: [], // 收货地址列表
      cartList: [], // 购物车中需要结算的商品列表
      cartTotalPrice: '',
      count: '',
      checkedItem: {}, // 选中的商品对象
      userAction: '', // 用户行为 0：新增 1：编辑 2：删除
      // showModel: false
      checkIndex: 0
    }
  },
  created () {
    this.getAddress()
    this.getCartList()
  },
  computed: {
    showModal () {
      return (this.userAction === 0 || this.userAction === 1)
    }
  },
  methods: {
    getAddress () {
      this.axios.get('/shippings').then((res) => {
        this.addresslist = res.list
        // console.log(this.addresslist)
      })
    },
    // 删除地址
    delAddress (item) {
      this.checkedItem = item
      this.userAction = 2
    },
    // 新增地址
    addAddress () {
      this.userAction = 0
    },
    // 编辑地址功能
    editAddress (item) {
      this.checkedItem = item
      this.userAction = 1
    },
    keepClick (AdressItem) {
      this.checkedItem = AdressItem
      this.submitAddress()
      // console.log(item)
    },
    // 地址删除、编辑、新增时网络请求功能
    submitAddress () {
      const { checkedItem, userAction } = this
      let method, url, params
      if (userAction === 0) {
        method = 'post'
        url = '/shippings/'
      } else if (userAction === 1) {
        method = 'put'; url = `/shippings/${checkedItem.id}`
        // 语法规范当两个赋值语句放到同一行的时候，需要使用分号隔开
      } else {
        method = 'delete'; url = `/shippings/${checkedItem.id}`
      }
      if (userAction === 0 || userAction === 1) {
        const { name, phone, province, city, area, address, zip } = checkedItem
        const errMsg = this.$message.error
        if (!name) {
          errMsg('请输入收货人名称！')
          return
        } else if (!phone || !/\d{11}/.test(phone)) {
          errMsg('请输入正确格式的手机号码！')
          return
        } else if (!province) {
          errMsg('请选择对应的省份！')
          return
        } else if (!city) {
          errMsg('请选择对应的城市！')
          return
        } else if (!area || !address) {
          errMsg('请选择收货的详细地址！')
          return
        } else if (!zip || !/\d{6}/.test(zip)) {
          errMsg('请输入正确格式的邮政编码！')
          return
        }
        params = {
          receiverName: name,
          receiverMobile: phone,
          receiverProvince: province,
          receiverCity: city,
          receiverDistrict: area,
          receiverAddress: address,
          receiverZip: zip
        }
      }
      this.axios[method](url, params).then(() => {
        this.getAddress()
        this.closeModel()
        this.$message.success('操作成功！')
      })
    },
    closeModel () {
      this.userAction = ''
      setTimeout(() => {
        this.checkedItem = {}
      }, 500)
    },
    getCartList () {
      this.axios.get('/carts').then((res) => {
        const list = res.cartProductVoList
        // console.log(res)
        this.cartTotalPrice = res.cartTotalPrice
        this.cartList = list.filter(item => item.productSelected)
        // console.log(this.cartList)
        this.cartList.map((item) => {
          this.count += item.quantity
        })
      })
    },
    orderSubmit () {
      const item = this.addresslist[this.checkIndex]
      if (!item) {
        this.$message.error('请选择收货地址！')
        return
      }
      this.axios.post('/orders', {
        shippingId: item.id
      }).then((res) => {
        this.$router.push({
          path: '/order/pay',
          query: {
            orderNo: res.orderNo
          }
        })
      })
    }
  }

}
</script>

<style lang="scss">
@import 'assets/scss/mixin.scss';
@import 'assets/scss/config.scss';
.address-wrapper {
  padding: 30px;
  h3 {
    font-size: 24px;
  }
}
.address-list {
  @include flex(flex-start);
  flex-wrap: wrap;
  padding: 30px 0;
  font-size: 14px;
  color: #999;
  li {
    box-sizing: border-box;
    width: 23.9%;
    height: 170px;
    padding: 12px;
    margin: 0 1% 2% 0;
    border: 1px solid #ccc;
    cursor: pointer;
  }
  .isActive {
    color: #f60;
    border: 1px solid #f60;
  }
  h5 {
    font-size: 18px;
    padding-bottom: 12px;
  }
  .address-icon {
    padding-top: 30px;
    .icon {
      width: 24px;
      height: 24px;
    }
  }
}
.address-add {
  @include flex(center, center);
  a {
    @include flex(center);
    flex-wrap: wrap;
    .icon-add {
      width: 48px;
      height: 48px;
    }
    i {
      width: 100%;
      text-align: center;
      font-size: 16px;
      color: #999;
      line-height: 32px;
    }
  }
}
#icon-edit {
  color: #fff;
  font-weight: 600;
}
.goods-message {
  h3 {
    font-size: 20px;
    line-height: 36px;
  }
  & tr:last-of-type {
    border-bottom: 1px solid #eee;
  }
  .goods-list {
    box-sizing: border-box;
    display: inline-block;
    width: 100%;
    padding: 20px;
    font-size: 16px;
    border-top: 1px solid #eee;
    .goods-Image {
      min-width: 50%;
      text-align: start;
      img {
        width: 36px;
        height: auto;
        vertical-align: middle;
        padding-right: 5px;
      }
    }
    td {
      text-align: end;
      display: inline-block;
      min-width: 24.9%;
    }
    .total-price {
      color: #f60;
    }
  }
}
.goods-ship {
  tr {
    display: inline-block;
    width: 100%;
    margin-top: 20px;
    &:last-child {
      border: none;
    }
    th {
      min-width: 100px;
      font-size: 20px;
      text-align: start;
    }
    td {
        font-size: 15px;
        font-weight: 600;
        color: #f60;
        padding-left: 20px;
    }
  }
}
.goods-induce {
  float: right;
  font-size: 16px;
  padding-right: 20px;
  text-align: end;
  th {
    padding-right: 10px;
    font-weight: 500;
  }
  td {
    .goods-pay {
      font-size: 20px;
      font-weight: 600;
    }
  }
  span {
    color: #f60;
  }
}
.leave-btn {
  float: right;
  padding: 40px 0;
  button {
    color: #fff;
    font-size: 16px;
    font-weight: 600;
  }
  .back-cart {
    @include BtnSize(160px, 36px, #999);
    margin-right: 12px;
  }
  .Topay {
    @include BtnSize(160px, 36px);
  }
}
.model-items {
  .modal-title {
    font-size: 16px;
    color: $colorB;
  }
}
.modal-content {
    font-size: 16px;
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
