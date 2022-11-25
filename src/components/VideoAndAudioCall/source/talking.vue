<template>
  <div class="wrap--video-talking">
    <Background></Background>
    <Status>通话中</Status>
    <talking-video></talking-video>
    <time-count></time-count>
    <section class="content">

      <section class="content--inner"></section>

      <Btns content="hangup"></Btns>
    </section>
  </div>
</template>

<script setup>
import Background from '../common/Background.vue'
import Btns from '../common/Btns.vue'
import TimeCount from '../common/TimeCount.vue'
import TalkingVideo from '../common/TalkingVideo.vue'
import Status from '../common/Status.vue'

</script>

<style lang="scss" scoped>
.wrap--video-talking {
  height: 100%;
  width: 100%;

  >.content {
    width: 100%;
    height: 100%;
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20vh 0;
    box-sizing: border-box;

    >.content--inner {
      flex: 1;
      min-height: 200px;
    }
  }
}
</style>