<template>
  <div class="wrap-minimize">
    <section class="container--action">
      <div class="icon">
        <el-tooltip content="最小化">
          <el-icon size="20" color="#fff">
            <Minus />
          </el-icon>
        </el-tooltip>
      </div>
    </section>

    <section class="content">
      <video-item></video-item>
    </section>
  </div>
</template>

<script setup>
import { Minus } from '@element-plus/icons-vue'
import VideoItem from '../video/call.vue'
</script>

<style lang="scss" scoped>
.wrap-minimize {
  position: fixed;
  z-index: 2000;
  width: 25vw;
  height: 25vh;
  left: 0;
  top: 0;
  background-color: rgba(0, 0, 0, .5);

  >.content {
    width: 100%;
    height: 100%;
  }

  >.container--action {
    position: absolute;
    right: 12px;
    top: 12px;
    display: flex;
    z-index: 2;

    >.icon {
      cursor: pointer;

      &+.icon {
        margin-left: 20px;
      }
    }
  }
}
</style>