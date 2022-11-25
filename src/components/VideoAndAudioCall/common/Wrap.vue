<template>
  <div class="wrap-component">
    <slot name="pre"></slot>
    <div class="content">
      <slot></slot>
    </div>
    <slot name="suf"></slot>
  </div>
</template>

<style lang="scss" scoped>
.wrap-component {
  height: 100%;
  display: flex;
  flex-direction: column;

  >.content {
    position: relative;
    height: 60%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    top: 20%;
  }
}
</style>