<template>
  <div class="home-swiper container">
    <!-- <swiper :options="swiperOption">
      <swiper-slide v-for="item in Imagelist" :key="item.id">
        <a :href="('/product/' + item.id)">
          <img v-lazy="item.img" alt="">
        </a>
      </swiper-slide>
      <template v-slot:pagination>
        <div class="swiper-pagination"></div>
      </template>
      <template v-slot:button-prev>
        <div class="swiper-button-prev" ></div>
      </template>
      <template v-slot:button-next>
        <div class="swiper-button-next" ></div>
      </template>
    </swiper> -->
    <swiper-item nextEl='.swiper-button-next' prevEl='.swiper-button-prev' swiperStyle='cube'>
      <template v-slot:swiperImage>
        <swiper-slide v-for="item in Imagelist" :key="item.id">
          <a :href="('/product/' + item.id)">
            <img v-lazy="item.img" alt="">
          </a>
        </swiper-slide>
      </template>
      <template v-slot:btn-left>
        <div class="swiper-button-prev" ></div>
      </template>
      <template v-slot:btn-right>
        <div class="swiper-button-next" ></div>
      </template>
    </swiper-item>
    <div class="menu-bar">
      <ul class="menu-list">
        <li v-for="(item, index) of menulist" :key="index">
          <a class="list-item" href="javascript:;">{{item}}</a>
          <div class="menu-children">
            <ul v-for="(item, indey) of menuImglist[index]" :key="indey">
              <li v-for="value of item" :key="value.id">
                <a :href="value ? '/product/' + value.id : '/'" target="_blank">
                  <img v-lazy="value.img || '/imgs/item-box-1.png'" alt="">
                  {{value ? value.name : '小米9'}}
                  <!-- 使用三目运算或者或逻辑运算进行处理-->
                </a>
              </li>
            </ul>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
// import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
// import 'swiper/css/swiper.css'
import SwiperItem from 'components/Swiper-item'
import { SwiperSlide } from 'vue-awesome-swiper'

export default {
  components: {
    SwiperItem,
    SwiperSlide
  },
  data () {
    return {
      menulist: ['手机 电话卡', '电视 盒子', '笔记本 平板', '家电 插线板', '出行 穿戴',
        '智能 路由器', '电源 配件', '生活 箱包'],
      menuImglist: [
        [
          [{
            id: 30,
            name: '小米CC9',
            img: '/imgs/item-box-1.png'
          }, {
            id: 31,
            name: '小米8青春版',
            img: '/imgs/item-box-2.png'
          }, {
            id: 32,
            name: 'Redmi k20 Pro',
            img: '/imgs/item-box-3.jpg'
          }, {
            id: 33,
            name: '移动4G专区',
            img: '/imgs/item-box-4.jpg'
          }], [0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0]
        ], [
          [{
            id: 30,
            name: '小米CC9',
            img: '/imgs/item-box-1.png'
          }, {
            id: 31,
            name: '小米8青春版',
            img: '/imgs/item-box-1.png'
          }, {
            id: 32,
            name: 'Redmi k20 Pro',
            img: '/imgs/item-box-1.png'
          }, {
            id: 33,
            name: '移动4G专区',
            img: '/imgs/item-box-1.png'
          }], [0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0]
        ], [
          [{
            id: 30,
            name: '小米CC9',
            img: '/imgs/item-box-1.png'
          }, {
            id: 31,
            name: '小米8青春版',
            img: '/imgs/item-box-2.png'
          }, {
            id: 32,
            name: 'Redmi k20 Pro',
            img: '/imgs/item-box-3.jpg'
          }, {
            id: 33,
            name: '移动4G专区',
            img: '/imgs/item-box-4.jpg'
          }], [0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0]
        ], [
          [{
            id: 30,
            name: '小米CC9',
            img: '/imgs/item-box-1.png'
          }, {
            id: 31,
            name: '小米8青春版',
            img: '/imgs/item-box-2.png'
          }, {
            id: 32,
            name: 'Redmi k20 Pro',
            img: '/imgs/item-box-3.jpg'
          }, {
            id: 33,
            name: '移动4G专区',
            img: '/imgs/item-box-4.jpg'
          }], [0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0]
        ], [
          [{
            id: 30,
            name: '小米CC9',
            img: '/imgs/item-box-1.png'
          }, {
            id: 31,
            name: '小米8青春版',
            img: '/imgs/item-box-2.png'
          }, {
            id: 32,
            name: 'Redmi k20 Pro',
            img: '/imgs/item-box-3.jpg'
          }, {
            id: 33,
            name: '移动4G专区',
            img: '/imgs/item-box-4.jpg'
          }], [0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0]
        ], [
          [{
            id: 30,
            name: '小米CC9',
            img: '/imgs/item-box-1.png'
          }, {
            id: 31,
            name: '小米8青春版',
            img: '/imgs/item-box-2.png'
          }, {
            id: 32,
            name: 'Redmi k20 Pro',
            img: '/imgs/item-box-3.jpg'
          }, {
            id: 33,
            name: '移动4G专区',
            img: '/imgs/item-box-4.jpg'
          }], [0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0]
        ], [
          [{
            id: 30,
            name: '小米CC9',
            img: '/imgs/item-box-1.png'
          }, {
            id: 31,
            name: '小米8青春版',
            img: '/imgs/item-box-2.png'
          }, {
            id: 32,
            name: 'Redmi k20 Pro',
            img: '/imgs/item-box-3.jpg'
          }, {
            id: 33,
            name: '移动4G专区',
            img: '/imgs/item-box-4.jpg'
          }], [0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0]
        ], [
          [{
            id: 30,
            name: '小米CC9',
            img: '/imgs/item-box-1.png'
          }, {
            id: 31,
            name: '小米8青春版',
            img: '/imgs/item-box-2.png'
          }, {
            id: 32,
            name: 'Redmi k20 Pro',
            img: '/imgs/item-box-3.jpg'
          }, {
            id: 33,
            name: '移动4G专区',
            img: '/imgs/item-box-4.jpg'
          }], [0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0]
        ]
      ],
      Imagelist: [{ // img图片的路径最前面可以不加'/'
        id: '01',
        img: 'imgs/slider/slide-1.jpg'
      }, {
        id: '02',
        img: 'imgs/slider/slide-2.jpg'
      }, {
        id: '03',
        img: 'imgs/slider/slide-3.jpg'
      }, {
        id: '04',
        img: 'imgs/slider/slide-4.jpg'
      }]
    }
  }

}
</script>

<style lang="scss">
@import 'assets/scss/mixin.scss';
@import 'assets/scss/config.scss';
.home-swiper {
  position: relative;
  overflow: hidden;
}
.swiper-container {
  height: 451px;
}
.swiper-container img {
  width: 100%;
  height: 100%;
}
.swiper-button-prev {
  left: 256px;
}
.menu-bar {
  height: 100%;
  width: 246px;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
  background-color: rgba(51, 51, 51, .6);
}
.menu-list {
  position: relative;
  padding: 24px 0;
}
.menu-list>li {
  // position: relative;
  height: 50px;
  line-height: 50px;
  padding: 0 30px;
  &:hover {
    background-color: $colorA;
    .menu-children {
      display: block;
    }
  }
}
.list-item {
  font-size: 16px;
  color: #fff;
  &::after {
    content: '';
    position: relative;
    top: 17.5px;
    float: right;
    @include bgImg(10px, 15px, '/imgs/icon-arrow.png')
  }
}
.menu-children {
  display: none;
  position: absolute;
  top: 0;
  left: 248px;
  height: 451px;
  width: 974px;
  border: 1px solid $colorA;
  background-color: #fff;
}
.menu-children ul {
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  padding: 12px 20px;
  height: 75px;
}
.menu-children li {
  width: 24.9%;
}
.menu-children a {
  display: inline-block;
  font-size: 16px;
  color: $colorB;
}
.menu-children img {
  width: 42px;
  height: auto;
  vertical-align: center;
  margin-right: 3px;
  vertical-align: middle;
}
</style>
