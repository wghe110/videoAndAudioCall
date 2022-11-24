<template>
  <div class="wrap--video-and-audio-call">
    <section class="container--action">
      <div class="icon">
        <el-tooltip content="最小化">
          <el-icon size="44" color="#fff">
            <Minus />
          </el-icon>
        </el-tooltip>
      </div>
      <div class="icon">
        <el-tooltip content="关闭">
          <el-icon size="44" color="#fff">
            <Close />
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
import { Close, Minus } from '@element-plus/icons-vue'
import VideoItem from './video/index.vue'
</script>

<style lang="scss" scoped>
.wrap--video-and-audio-call {
  position: fixed;
  z-index: 2000;
  width: 100vw;
  height: 100vh;
  left: 0;
  top: 0;
  background-color: rgba(0, 0, 0, .5);

  >.content {
    width: 100%;
    height: 100%;
  }

  >.container--action {
    position: absolute;
    right: 40px;
    top: 40px;
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