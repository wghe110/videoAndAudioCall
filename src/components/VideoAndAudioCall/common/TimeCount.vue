<template>
  <section class="wrap--timecount">
    <span>00:00</span>
  </section>
</template>

<style lang="scss" scoped>
.wrap--timecount {
  position: absolute;
  left: 50%;
  top: 4%;
  transform: translateX(-50%);

  >span {
    color: #fff;
    font-size: 18px;
  }
}
</style>