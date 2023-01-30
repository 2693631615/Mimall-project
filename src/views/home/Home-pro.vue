<template>
  <div class="home-pro">
    <div class="pro-wrapper flex container">
      <h2>手机</h2>
      <div class="pro-bar">
        <a href="/product/39"><img v-lazy="'imgs/mix-alpha.jpg'" alt=""></a>
      </div>
      <!-- v-for 不可以和v-if同级，v-if是数据变化驱动页面渲染，用v-show或者不用v-if 页面dom会提前渲染 -->
      <!-- 如果页面渲染完成，数据变化了，但是页面dom没变化，很可能数据响应式传递出了问题，导致页面没变化-->
      <div class="pro-content" v-if="( prolist &&  prolist.length)">
        <ul class="pro-list flex" v-for="(list, index) in prolist" :key="index ">
          <li v-for="(item, indey) in list" :key= "item.id">
            <span class="pro-sign new-pro" v-show="((indey % 2) === 0)">新品</span>
            <span class="pro-sign hot-pro" v-show="!((indey % 2) === 0)">秒杀</span>
            <a :href="'/product/' + item.id" v-if="item &&  item.id ">
              <img v-lazy="item.mainImage" alt="">
            </a>
            <div class="item-info">
              <h3 class="item-name">{{item.name}}</h3>
              <p class="item-desc">{{item.subtitle}}</p>
              <span class="item-price">
                {{getprice(item.price)}}
                <span class="item-cart" @click="cartClick(item.id)"></span>
              </span>
            </div>
          </li>
        </ul>
      </div>
    </div>
    <modal-box v-show="showModal" @calClick="cartClick(0)" :showBox="showModal">
      <template v-slot:modal-box>
        <div class="modal-inside">
          <div class="modal-header">
            <h3 class="modal-title">提示</h3>
            <span class="detele">&#10005;</span>
          </div>
          <p class="modal-content">商品添加成功，请到购物车付款！</p>
          <div class="modal-footer">
            <button class="modal-btn" @click="btnClick">查看详情</button>
          </div>
        </div>
      </template>
    </modal-box>
  </div>
</template>

<script>
import ModalBox from 'components/Modal-box'
export default {
  name: 'home-pro',
  data () {
    return {
      prolist: [],
      showModal: false
    }
  },
  components: {
    ModalBox
  },
  computed: {
    getprice () {
      return (price) => {
        if (!price) return '0.00'
        return '￥' + price + '元'
      }
    }
  },
  created () {
    // 一般获取数据，建议在dom渲染前完成数据处理
    // https://blog.csdn.net/qq_43654065/article/details/114579507
    // this.getProdata()
    this.getprodata()
  },
  methods: {
    btnClick () {
      this.$router.push('/cart')
    },
    cartClick (id) {
      // console.log(id)
      this.showModal = !this.showModal
      if (id !== 0) {
        // console.log('123')
        this.axios.post('/carts', {
          productId: id,
          selected: true
        }).then((res) => {
          // console.log(res)
          this.$store.dispatch('getCartCount', res.cartTotalQuantity)
        })
      // console.log(this.showModal)
      }
    },
    getprodata () {
      this.axios.get('/products', {
        params: {
          categoryId: 100012,
          pageSize: 6
        }
      }).then((res) => {
        // console.log(res)
        const data = res.list
        const length = data.length
        // data.length的值是随着数组的操作而发生变化的，所以在下面的for循环中不能直接使用data.length
        for (let j = 0; j < 8 - length; j++) {
          data.push(data[j])
        }
        // console.log(data)
        for (let i = 0; i < 2; i++) {
          // this.prolist[i] = data.slice(i * 4, (i + 1) * 4)
          let newlist = []
          newlist = data.slice(i * 4, (i + 1) * 4)
          this.prolist.push(newlist)
        }
        // console.log(this.prolist, this.prolist.length)
        // return this.prolist
      })
    }
    // getProdata () {
    //   this.axios
    //     .get('/products', {
    //       params: {
    //         categoryId: 100012,
    //         pageSize: 6
    //       }
    //     }).then(res => {
    //       // console.log('res====>', res)
    //       // 接口接口的返回的时候，要初始化将数据清空，prolist = [],再进行重新赋值处理
    //       this.prolist = []
    //       // 解构对象，严谨一点，当没有返回res属性或者res=null或res=undefined，要用或默认一个初始化空对象 || {}
    //       // data = [] ，也是严谨写法，当res没有data属性返回，或者data=null,或data=undefined 的的时候，要初始化默认一下data为空数组 data=[]
    //       // const 是常量，不可对data数据进行更改
    //       // res.list解构重命名list为变量data,lis没有返回或=null或=undefined，需要初始化数组=[]
    //       const { list: data = [] } = res || {}
    //       // console.log('data====>', data)
    //       // 定义的长度，不建议这样子取js属性的字符length， const length = data.length
    //       // 定义长度，可以用三元判断的简写： ?.  或者用三元写法的全写： const dataLen = data&& data.length ? data.length : 0
    //       const dataLen = data?.length || 0
    //       if (!dataLen) {
    //         return false
    //       }
    //       // for(let j=0;j<8-dataLen;j++){
    //       //   data.push(data[j])
    //       // }
    //       // for 循环的逻辑优化成：
    //       // 用一个新的变量存放计算的数据
    //       const diffData = [] // 前面0到sublen-1索引的值集合数组
    //       // 有用到加减乘数，要注意数据，比如除法，分母不能为0, 你这里是减法，要判断计算出来为负数的情况
    //       let subLen = 8 - dataLen
    //       // 计算结果为负数subLen < 0，看业务需要如何处理，为负数我按常规思维，给你默认为0
    //       subLen = subLen < 0 ? 0 : subLen
    //       for (let j = 0; j < subLen; j++) {
    //         // 循环处理，用新的变量diffData接收数据
    //         diffData.push(data[j])
    //       }

    //       const newData = [...data, ...diffData]

    //       // for (let i = 0; i < 2; i++) {
    //       //   this.prolist[i] = data.splice(i * 4, (i + 1) * 4)
    //       // }
    //       // for循环优化成：
    //       // 需要你自己判断一下，是否用newData来处理下面的业务逻辑
    //       for (let i = 0; i < 2; i++) {
    //         // newData.splice(i * 4, (i + 1) * 4) ，第一个参数为第一项位置，第二个参数为要删除几个,不清楚你是想要什么，为啥要处理这个逻辑
    //         // 严谨一点，i*4, (i + 1) * 4 长度的判断，如果截取不到，就默认一个空数据 || []
    //         // newData.splice (n,num) 这样是删除，会改变原数组对象，因为数组对象是引用型变量，因此要解构数组赋值为一个新新数组进行运算，才不影响原数组
    //         const itemList = [...newData].splice(i * 4, (i + 1) * 4) || []
    //         // 要$set处理，因为prolist初始化为空数据，里面的prolist[i]是不存在的属性i，不能直接赋值,要用$set
    //         // 方法1：如果要保持i的顺序一致，在prolist就这样
    //         this.$set(this.prolist, i, itemList)
    //         // 方法2：如果不需要保持i的顺序,就这样： this.prolist.push(itemList)
    //         // this.prolist.push(itemList)
    //         // itemList是一个数据，因为不管你是用方法1，还是方法2，你的prolist最后是一个二维数组
    //         // 如果可以满足你的业务，你可以用数组解构+push:this.prolist.push(...itemList)，将prolist处理成一个一维数组
    //         // this.prolist.push(...itemList)
    //       }
    //       // console.log(this.prolist)
    //       // 在结尾不用return this.prolist, 因为变量prolist在this.$set(this.prolist, i, itemList)就接收到数据了
    //     })
    //     .catch(err => {
    //       // 接口请求异常处理，一般都是做抛错提示
    //       console.log('接口请求异常=>', err)
    //     })
    // }
  }
}
</script>

<style scoped lang="scss">
@import 'assets/scss/config.scss';
@import 'assets/scss/mixin.scss';
.home-pro {
  margin-top: 30px;
  background-color: $colorJ;
}
.pro-wrapper {
  flex-wrap: wrap;
  h2 {
    width: 100%;
    line-height: 42px;
  }
}
.pro-bar img {
  display: block;
  width: 224px;
  height: 600px;
}
.pro-content {
  width: 980px;
}
.pro-list li {
  height: 300px;
  width: 236px;
  text-align: center;
  .pro-sign {
    padding: 3px 20px;
    color: $colorG
  }
}
.new-pro {
  background-color: rgb(42, 162, 42);
}
.hot-pro {
  background-color: rgb(246, 45, 45);
}
.pro-list img {
  display: block;
  width: 100%;
  height: 162px;
  padding: 18px 0 10px;
}
.item-desc {
  color: $colorD;
  line-height: 25px;
}
.item-info .item-price {
  @include flex(center, center);
  color: #F20A0A;
  font-size: $fontJ;
  font-weight: bold;
  cursor: pointer;
}
.item-cart::after {
    content: '';
    @include bgImg(22px, 22px, '/imgs/icon-cart-hover.png');
  }
  .modal-inside {
    padding: 10px 20px;
  }
  .modal-header {
    height: 50px;
    font-size: 14px;
    color: $colorB;
    @include flex(space-between, center);
  }
  .modal-header .detele {
    font-size: 18px
  }
  .detele:hover {
    transform:scale(1.1, 1.1);
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
