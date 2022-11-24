<template>
  <section class="wrap-bg">
    <img src="@public/demo.jpeg" alt="头像背景" class="bg">
  </section>
</template>

<style lang="scss" scoped>
.wrap-bg {
  width: 100%;
  height: 100%;
  position: absolute;

  >.bg {
    width: 100%;
    height: 100%;
    object-fit: cover;
    filter: blur(45px);
  }
}
</style>