<template>
  <div class="wrap--video">
    <Background></Background>
    <time-count></time-count>
    <section class="content">
      <Avatar></Avatar>

      <section class="content--inner"></section>

      <Btns></Btns>
    </section>
  </div>
</template>

<script setup>
import Avatar from '../common/Avatar.vue'
import Background from '../common/Background.vue'
import Btns from '../common/Btns.vue'
import TimeCount from '../common/TimeCount.vue'
</script>

<style lang="scss" scoped>
.wrap--video {
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