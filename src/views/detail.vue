<template>
  <div class="product-detail">
    <nav-param></nav-param>
    <div class="detail-content flex">
      <swiper-item class="swiper-image">
        <template v-slot:swiperImage>
          <swiper-slide v-for="item in 4" :key="item">
            <img :src="'phone-' + item + '.jpg'" alt="">
          </swiper-slide>
        </template>
      </swiper-item>
      <div class="content-desc">
        <h3>{{detailData.name}}</h3>
        <p>相机全新升级 / 960帧超慢动作 / 手持超级夜景 / 全球首款双频GPS / 骁龙845处理器
        / 红外人人脸解锁 / AI变焦双摄 / 三星AMOLED屏</p>
        <h5>
          <span>小米自营</span><br/>
          <span class="new-price">{{detailData.price}}</span>
          <span class="old-price">{{getOldPrice}}</span>
        </h5>
        <div class="detail-address">
          <address>北京 北京市 朝阳区 安定门街道</address>
          <span>有现货</span>
        </div>
        <div class="detail-style">
          <h3>选择版本</h3>
          <span v-for="(item,index) of configureList" :key="index" :class
          ="{'isActive': selectIndex === index}" @click="selectClick(index)">{{item}}</span>
          <h3>选择颜色</h3>
          <span v-for="(item,indey) of colorList" :key="(indey + 10)" :class
          ="{'isActive': colorIndex === indey, 'grey': indey === 0, 'blue': indey === 1}"
          @click="colorClick(indey)">{{item}}</span>
        </div>
        <div class="product-settle">
          <p class="style-select">{{detailData.name}} {{configureList[this.selectIndex]}}
          {{colorList[this.colorIndex]}}</p>
          <p class="total-price">总计：{{detailData.price}}元</p>
          <button class="cart-btn" @click="addclick">加入购物车</button>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
import navParam from 'components/nav-param'
import SwiperItem from 'components/Swiper-item'
import { SwiperSlide } from 'vue-awesome-swiper'

export default {
  components: {
    navParam,
    SwiperItem,
    SwiperSlide
  },
  name: 'detail-page',
  data () {
    return {
      id: this.$route.params.id,
      detailData: '',
      configureList: ['6GB+64GB 全网通', '4GB+64GB 移动4G'],
      colorList: ['深灰色', '天蓝色'],
      selectIndex: 0,
      colorIndex: 0
    }
  },
  mounted () {
    this.getDetaildata()
  },
  methods: {
    getDetaildata () {
      // const id = this.$route.params.id
      this.axios.get(`/products/${this.id}`).then((res) => {
        // console.log(res)
        this.detailData = res
      })
    },
    addclick () {
      this.axios.post('/carts', {
        productId: this.id,
        selected: true
      }).then((res) => {
        console.log(res)
        this.$store.dispatch('getCartCount', res.cartTotalQuantity)
        this.$router.push('/cart')
      })
    },
    selectClick (index) {
      this.selectIndex = index
    },
    colorClick (indey) {
      this.colorIndex = indey
    }
  },
  computed: {
    getOldPrice () {
      return (this.detailData.price + 1000) + '元'
    }
  }

}
</script>

<style lang="scss">
@import 'assets/scss/mixin.scss';
@import 'assets/scss/config.scss';
// .detail-content {
// }
.swiper-image {
  flex: 1;
}
.content-desc {
  flex: 1;
  padding: 20px 10px;
  color: #333;
  font-size: 14px;
  span {
    color: #f60;
    line-height: 30px;
  }
  h3 {
    font-size: 30px;
  }
  h5 {
    margin: 15px 0 20px;
    border-bottom: 1px solid #eee;
    span {
      font-size: 16px;
    }
    .new-price {
      font-size: 22px;
    }
    .old-price {
      font-size: 16px;
      padding-left: 8px;
      color: #999;
      font-weight: 500;
      text-decoration: line-through;
    }
  }
}
.detail-address {
  padding: 15px 36px;
  border: 1px solid #ccc;
  font-size: 14px;
  address {
    color: #666;
  }
  // span {
  //   // color: #f60;
  //   // line-height: 30px;
  // }
}
.detail-style {
  padding: 10px 0 40px;
  @include flex();
  flex-wrap: wrap;
  h3 {
    width: 100%;
    font-size: 15px;
    padding: 20px 0;
  }
  span {
    @include flex(center, center);
    width: 48%;
    height: 34px;
    color: #333;
    font-weight: 600;
    border: 1px solid #ccc;
    cursor: pointer;
  }
}
span.isActive {
  color: #f60;
  border-color: #f60;
}
.grey::before {
  content: '';
  display: inline-block;
  width: 16px;
  height: 16px;
  margin-right: 6px;
  background-color: darkgrey;
}
.blue::before {
  content: '';
  display: inline-block;
  width: 16px;
  height: 16px;
  margin-right: 6px;
  background-color: skyblue;
}
.product-settle {
  p {
    padding: 10px 15px;
    // text-indent: 2em;
  }
  .total-price {
    font-size: 20px;
    color: #f60;
  }
  .cart-btn {
    @include BtnSize(300px, 36px);
    margin-top: 10px;
    line-height: 36px;
    color: #fff;
    font-weight: 600;
  }
  // button有默认样式text-align: center
}

</style>
