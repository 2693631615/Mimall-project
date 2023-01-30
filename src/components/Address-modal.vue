<template>
  <modal-box class="address-modal" :showBox="showBox">
    <template v-slot:modal-box>
      <div class="modal-header">
        <h3 class="modal-title">添加收货地址</h3>
        <span class="detele" @click="delClick()">&#10005;</span>
      </div>
      <div class="form-mess" action="">
        <div><input class="form-name" type="text" placeholder="姓名" v-model="Addressdata.name">
          <input type="text" placeholder="手机号" v-model="Addressdata.phone"></div>
        <div class="address-select">
          <!-- <input type="text" placeholder="选择省/市/区"> -->
          <select name="" id="" v-model="Addressdata.province"
          @change="IndexClick($event.target.selectedIndex)">
            <option disabled selected value=''>请选择收货省份</option>
            <option v-for="(item, index) in provincedata"
            :key="index" :value="item">{{item}}</option>
          </select>
          <!-- select标签获取option元素的索引时，原生click和change事件的用法 -->
          <select name="" id="" v-model="Addressdata.city" @click="cityClick($event.target.selectedIndex)">
            <option disabled selected value=''>请选择收货城市</option>
            <option v-for="item in cityList[proIndex]"
            :key="item.id">{{item}}</option>
          </select>
          <div></div>
          <select name="" id="" v-model="Addressdata.area" @click="areaClick">
            <option disabled selected value=''>请选择市区/街道/村镇</option>
            <option v-for="item in areaList[proIndex][cityIndex]" :key="item.id">{{item}}</option>
          </select>
        </div>
        <div><input type="text" placeholder="详细地址" v-model="Addressdata.address"></div>
        <div><input type="text" placeholder="邮政编号" v-model="Addressdata.zip"></div>
      </div>
      <div class="modal-bot">
        <button class="keep" @click="keepClick()">保存</button>
        <button class="cancel" @click="delClick()">取消</button>
      </div>
    </template>
  </modal-box>
</template>

<script>
import ModalBox from './Modal-box.vue'
export default {
  components: { ModalBox },
  name: 'address-modal',
  data () {
    return {
      Addressdata: {
        id: '', name: '', phone: '', province: '', city: '', area: '', address: '', zip: ''
      },
      provincedata: ['广东省', '广西省', '湖南省', '江苏省', '四川省', '辽宁省'],
      proIndex: 0,
      cityList: [['暂无可选城市'
      ], ['广州市', '佛山市', '东莞市', '湛江市'
      ], ['桂林市', '南宁市', '柳州市', '梧州市'
      ], ['长沙市', '株洲市', '衡阳市', '越野市'
      ], ['广州市', '佛山市', '东莞市', '湛江市'
      ], ['广州市', '佛山市', '东莞市', '湛江市'
      ], ['广州市', '佛山市', '东莞市', '湛江市'
      ]],
      cityIndex: 0,
      areaList: [[['暂无可选区/街道']],
        [['天河区', '白云区', '黄埔区', '越秀区'], ['南海区', '顺德区', '三水区', '高明区'],
          ['天河区', '白云区', '黄埔区', '越秀区'], ['南海区', '顺德区', '三水区', '高明区']],
        [['秀峰区', '叠彩区', '象山区', '七星区'], ['兴宁区', '青秀区', '江南区', '武鸣区'],
          ['秀峰区', '叠彩区', '象山区', '七星区'], ['兴宁区', '青秀区', '江南区', '武鸣区']],
        [['芙蓉区', '天心区', '岳麓区', '望城区'], ['荷塘区', '芦淞区', '天元区', '石峰区'],
          ['芙蓉区', '天心区', '岳麓区', '望城区'], ['荷塘区', '芦淞区', '天元区', '石峰区']],
        [['天河区', '白云区', '黄埔区', '越秀区'], ['南海区', '顺德区', '三水区', '高明区'],
          ['天河区', '白云区', '黄埔区', '越秀区'], ['南海区', '顺德区', '三水区', '高明区']],
        [['秀峰区', '叠彩区', '象山区', '七星区'], ['兴宁区', '青秀区', '江南区', '武鸣区'],
          ['秀峰区', '叠彩区', '象山区', '七星区'], ['兴宁区', '青秀区', '江南区', '武鸣区']],
        [['芙蓉区', '天心区', '岳麓区', '望城区'], ['荷塘区', '芦淞区', '天元区', '石峰区'],
          ['芙蓉区', '天心区', '岳麓区', '望城区'], ['荷塘区', '芦淞区', '天元区', '石峰区']]
      ]
    }
  },
  props: {
    showBox: {
      type: Boolean
    },
    showData: {
      type: Object
    }
  },
  updated () {
    if (this.showData !== {}) {
      // console.log(this.showData)
      const {
        id, receiverName: name, receiverMobile: phone, receiverProvince: province,
        receiverCity: city, receiverDistrict: area, receiverAddress: address, receiverZip: zip
      } = this.showData
      this.Addressdata = { id, name, phone, province, city, area, address, zip }
      // console.log(this.Addressdata)
    }
  },
  emits: ['keepClick', 'delClick'],
  methods: {
    keepClick () {
      this.$emit('keepClick', this.Addressdata)
    },
    delClick () {
      this.$emit('delClick')
    },
    IndexClick (index) {
      if (index > 0) {
        this.proIndex = index
        // console.log(this.proIndex)
      }
    },
    cityClick (index) {
      if (!this.proIndex) {
        this.$message.warning('请先选择具体省份！')
      }
      if (index > 0) {
        this.cityIndex = index - 1
        // console.log(this.cityIndex)
      }
    },
    areaClick () {
      if (!this.proIndex) {
        this.$message.warning('请先选择具体城市！')
      }
    }
  }
}
</script>

<style scoped lang="scss">
@import 'assets/scss/config.scss';
@import 'assets/scss/mixin.scss';
.modal-header {
  @include flex();
  height: 44px;
  padding: 0 12px;
  color: #333;
  border-bottom: 1px solid #999;
  .modal-title {
    font-size: 16px;
  }
  .detele {
    font-size: 18px;
  }
}
.detele:hover {
  transform:scale(1.1, 1.1);
}
.form-mess {
  box-sizing: border-box;
  padding: 20px 8px;
}
.form-mess div {
  display: flex;
}
.form-mess input,
.form-mess select {
  flex: 1;
  height: 30px;
  font-size: 16px;
  color: $colorB;
  margin: 6px 0px;
  padding: 0 8px;
  border: 1px solid #eee;
  &::-webkit-input-placeholder {
    color: $colorB;
  }
}

.form-mess .form-name {
  margin-right: 15px;
}
.modal-bot button {
  color: #fff;
  font-size: 16px;
  margin: 0 5px;
}
.modal-bot {
  @include flex(center, center);
  margin-bottom: 15px;
  .keep {
  @include BtnSize(98px, 27px, #f60)
  }
  .cancel {
  @include BtnSize(98px, 27px, #999)
  }

}
</style>
