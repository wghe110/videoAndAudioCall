<template>
  <div class="wrap--video-called">
    <Background></Background>
    <Status>来电</Status>
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
import Status from '../common/Status.vue'
</script>

<style lang="scss" scoped>
.wrap--video-called {
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
</style>