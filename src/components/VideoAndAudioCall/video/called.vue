<template>
  <Wrap>
    <template #pre>
      <Background></Background>
      <Status>来电</Status>
    </template>

    <Avatar></Avatar>
    <Btns content="hangup,answer"></Btns>
  </Wrap>
</template>

<script setup>
import Wrap from '../common/Wrap.vue'
import Avatar from '../common/Avatar.vue'
import Background from '../common/Background.vue'
import Btns from '../common/Btns.vue'
import Status from '../common/Status.vue'
</script>

<style lang="scss" scoped>

</style>