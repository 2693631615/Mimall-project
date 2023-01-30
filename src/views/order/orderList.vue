<template>
  <div class="order-list container">
    <loading v-if="loading"></loading>
    <nodata v-if="!loading && orderList.length === 0"></nodata>
    <ul class="order-ProList">
      <li v-for="(orderItem, index) in orderList" :key="index">
        <div class="order-mess clearfix">
          {{orderItem.createTime}} <span>|</span>
          {{orderItem.receiverName}} <span>|</span>
          订单号：{{orderItem.orderNo}} <span>|</span>
          在线支付
          <p class="order-price">应付金额：<i>{{orderItem.payment}}</i>元</p>
        </div>
        <div class="order-info">
          <div class="goods-list">
            <div class="order-desc" v-for="(item, index) in orderItem.orderItemVoList" :key="index">
              <img v-lazy="item.productImage" alt="">
              <h4>{{item.productName}}<br/>
                <span>{{item.totalPrice}} X {{item.quantity}}元</span>
              </h4>
            </div>
          </div>
          <div class="order-payment" v-if="orderItem.status === 10">
            <a href="javascript:;" @click="Topaypage(orderItem.orderNo)">{{orderItem.statusDesc}}</a>
          </div>
          <div class="order-payment" v-else>
            <a href="javascript:;">{{orderItem.statusDesc}}</a>
          </div>
        </div>
      </li>
    </ul>
    <el-pagination class="pagenation"
    background
    layout="prev, pager, next"
    :pageSize="pageSize"
    :total="total"
    @current-change="handleChange"
    ></el-pagination>
  </div>
</template>

<script>
import Loading from 'components/Loading'
import Nodata from 'components/Nodata'
import { Pagination } from 'element-ui'
export default {
  name: 'order-list',
  components: {
    Loading,
    Nodata,
    [Pagination.name]: Pagination
  },
  data () {
    return {
      orderList: [],
      loading: true,
      pageSize: 10,
      pageNum: 1,
      total: 0
    }
  },
  created () {
    this.getOrderList()
  },
  methods: {
    getOrderList () {
      this.axios.get('/orders', {
        params: {
          pageNum: this.pageNum
        }
      }).then((res) => {
        this.orderList = res.list
        this.loading = false
        this.total = res.total
        // console.log(res)
      }).catch(() => {
        this.loading = false
      })
    },
    Topaypage (orderNo) {
      // 路由跳转方式一：
      // this.$router.push('/order/pay?orderNo=' + orderNo)
      // 路由跳转方式二：
      this.$router.push({
        name: 'OrderPay',
        query: {
          orderNo
        }
      })
      // 路由跳转方式三：
      // this.$router.push({
      //   path: '/order/pay',
      //   query: {
      //     orderNo
      //   }
      // })
    },
    handleChange (pageNum) {
      this.pageNum = pageNum
      this.getOrderList()
    }
  }

}
</script>

<style lang="scss">
@import 'assets/scss/mixin.scss';
@import 'assets/scss/config.scss';
.order-ProList {
  li {
    margin-top: 20px;
    padding: 15px 25px;
    border: 1px solid #ccc;
    .order-mess {
      span {
        padding: 0 6px;
      }
      .order-price {
        float: right;
        i {
          font-size: 22px;
        }
      }
    }
    .order-info {
      @include flex(space-between, center);
      padding-top: 15px;
      font-size: 16px;
      .order-desc {
        @include flex(flex-start, center);
        padding: 10px 0;
        img {
          width: 100px;
          height: auto;
        }
      }
      .order-payment {
        cursor: pointer;
        a {
          color: $colorA;
        }
      }
    }
  }
}
.pagenation {
  text-align: center;
  margin: 16px 0;
}
</style>
