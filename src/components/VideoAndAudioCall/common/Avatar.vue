<template>
  <section class="wrap--avatar">
    <img src="@public/demo.jpeg" alt="头像" class="avatar">
    <h2 class="uname">张三</h2>
  </section>
</template>

<style lang="scss" scoped>
.wrap--avatar {
  display: flex;
  flex-direction: column;
  align-items: center;

  >.avatar {
    width: 140px;
    height: 140px;
    border-radius: 10px;
    object-fit: cover;
  }

  >.uname {
    color: #fff;
    font-size: 20px;
    line-height: 1.4;
  }
}
</style>