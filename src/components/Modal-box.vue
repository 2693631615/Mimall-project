<template>
  <transition name="modal">
    <div class="modal-wrapper" @click="cancelClick()">
      <transition>
        <div class="modal-box" :class="{'modal-bgc': modalBgc}" key="modal" v-show="showBox">
          <slot name="modal-box"></slot>
          <!-- <slot name="header"></slot>
          <slot name="body"></slot>
          <slot name="select-btn"></slot> -->
        </div>
      </transition>
    </div>
  </transition>
</template>

<script>
export default {
  name: 'modal-box',
  props: {
    showBox: {
      type: Boolean,
      default: false
    },
    modalBgc: Boolean
  },
  emits: ['calClick'],
  methods: {
    cancelClick () {
      this.$emit('calClick')
      // console.log(123)
    }
  }

}
</script>

<style scoped lang="scss">
@import 'assets/scss/config.scss';
@import 'assets/scss/mixin.scss';
.modal-wrapper {
  z-index: 10;
  @include fixed(0, 0, 0, 0);
  background-color: rgba(0, 0, 0, .5);
  cursor: pointer;
  transition: all .5s
}
.modal-box {
  @include fixed(50%, 50%);
  transform: translate(-50%, -50%);
  background-color: $colorJ;
  transition: all .5s
}
.modal-bgc {
  background-color: rgba(255, 255, 255, 0);
}
.v-enter {
  @include fixed(0, 50%);
}
.v-enter-to {
  @include fixed(50%, 50%);
}
.modal-enter {
  opacity: 0;
}
.modal-enter-to {
  opacity: 1;
}
.modal-leave-to {
  opacity: 0;
  .modal-box{
    @include fixed(-40%, 50%);
  }
}
</style>
