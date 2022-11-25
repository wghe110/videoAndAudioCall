<template>
  <section class="wrap--avatar">
    <img src="@public/avatar--default.png" alt="头像" class="avatar">
    <h2 class="uname">张三</h2>
    <p class="subname">某个网格员</p>
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
    margin-bottom: 14px;
  }

  >.subname {
    color: #fff;
    font-size: 14px;
    margin: 0;
  }
}
</style>