<template>
  <div class="shot-page">
    <div class="video-desc">
      <h2>
        <p>60帧超慢动作摄影</p>
        <p>慢慢回味每一瞬间的精彩</p>
      </h2>
      <h5>后置960帧电影般超慢动作视频，将眨眼间的美妙展示得淋漓尽致！<br/>
          更能AI精准分析视频内容，15个场景智能匹配背景音效。</h5>
    </div>
    <div class="video-bg" @click="videoClick">
      <img src="gallery-1.png" alt="">
    </div>
    <modal-box v-show="isWatch" :showBox="isWatch">
      <template v-slot:modal-box>
        <div class="video-box">
          <video src="video.mp4" autoplay="autoplay" loop="loop" muted="muted" controls="controls"></video>
          <!-- autoplay属性用于设置标签的音频在打开时自动播放 muted属性则设置音频默认静音输出
            loop循环播放 -->
          <span @click="videoClick"  class="video-close">&#10005;</span>
        </div>
      </template>
    </modal-box>
  </div>
</template>

<script>
import ModalBox from '../components/Modal-box'
export default {
  name: 'product-shot',
  data () {
    return {
      isWatch: false
    }
  },
  methods: {
    videoClick () {
      this.isWatch = !this.isWatch
    }
  },
  components: {
    ModalBox
  }
}
</script>

<style scoped lang="scss">
@import 'assets/scss/mixin.scss';
.video-desc {
  text-align: center;
  color: #fff;
  background-color: #000;
  h2 {
    font-size: 40px;
    padding: 40px 0 25px;
    p {
    line-height: 60px;
    }
  }
  h5 {
    font-size: 18px;
    line-height: 27px;
    padding-bottom: 30px;
    font-weight: 500;
  }
}
.video-bg {
  width: 100%;
  img {
    width: 100%;
    height: auto;
  }
}
.video-box {
  background-color: #000;
}
.video-box video {
    width: 640px;
    height: 420px;
    object-fit: cover;
    // outline: none; // 视频文件的样式设置属性，可以查一下它的作用？
    // 视频的范围大小完全覆盖父级标签的大小
  }
.video-box span:hover {
  transform:scale(1.1, 1.1);
}
.video-close {
  position: absolute;
  top: 8px;
  right: 8px;
  width: 20px;
  line-height: 20px;
  text-align: center;
  border-radius: 100%;
  color: #ccc;
  background-color: #666;
}
</style>
