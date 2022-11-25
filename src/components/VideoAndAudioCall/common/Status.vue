<template>
  <section class="wrap-status">
    <span>
      <slot></slot>
    </span>
  </section>
</template>

<style lang="scss" scoped>
.wrap-status {
  position: absolute;
  left: 50%;
  bottom: 3%;
  transform: translateX(-50%);

  >span {
    color: rgba(255, 255, 255, .5);
    font-size: 14px;
  }
}
</style>