<template>
  <Wrap>
    <template #pre>
      <Background></Background>
      <Status>通话中</Status>
      <talking-video></talking-video>
      <time-count></time-count>
    </template>

    <Avatar></Avatar>
    <Btns content="hangup"></Btns>
  </Wrap>
</template>

<script setup>
import Wrap from '../common/Wrap.vue'
import Background from '../common/Background.vue'
import Btns from '../common/Btns.vue'
import TimeCount from '../common/TimeCount.vue'
import TalkingVideo from '../common/TalkingVideo.vue'
import Status from '../common/Status.vue'

</script>

<style lang="scss" scoped>

</style>