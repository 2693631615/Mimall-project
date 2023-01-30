<template>
  <modal-box :showBox="showModal">
    <template v-slot:modal-box>
      <div class="modal-inside">
        <div class="modal-header">
          <slot name="header"></slot>
          <span class="detele" @click="delClick">&#10005;</span>
        </div>
        <slot name="content"></slot>
        <div class="modal-footer">
          <slot name="footer"></slot>
        </div>
      </div>
    </template>
  </modal-box>
</template>

<script>
import ModalBox from './Modal-box'
export default {
  name: 'modal-items',
  props: {
    showModal: Boolean
  },
  // updated () {
  //   if (this.showModal) {
  //     this.isShow = this.showModal
  //   }
  // },
  components: {
    ModalBox
  },
  emits: ['delClick'],
  methods: {
    delClick () {
      this.$emit('delClick')
    }
  }

}
</script>

<style scoped lang="scss">
@import 'assets/scss/mixin.scss';
@import 'assets/scss/config.scss';
.modal-inside {
    min-width: 270px;
    padding: 10px 20px;
  }
  .modal-header {
    height: 50px;
    @include flex(space-between, center);
  }
  .modal-header .detele {
    font-size: 20px
  }
  .detele:hover {
    transform:scale(1.1, 1.1);
  }
</style>
