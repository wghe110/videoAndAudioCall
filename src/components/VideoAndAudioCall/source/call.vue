<template>
  <div class="wrap--video-call">
    <Background></Background>
    <Status>呼叫中</Status>
    <section class="content">
      <div class="h20"></div>
      <Avatar></Avatar>

      <section class="content--inner"></section>

      <Btns content="hangup"></Btns>
      <div class="h20"></div>
    </section>
  </div>
</template>

<script setup>
import Avatar from '../common/Avatar.vue'
import Background from '../common/Background.vue'
import Btns from '../common/Btns.vue'
import Status from '../common/Status.vue'
</script>

<style lang="scss" scoped>
.wrap--video-call {
  height: 100%;
  width: 100%;

  >.content {
    width: 100%;
    height: 100%;
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    box-sizing: border-box;

    >.content--inner {
      flex: 1;
      min-height: 200px;
    }
  }
}

.h20 {
  height: 20%;
}
</style>