<template>
  <div class="wrap--video-and-audio-call minimize">
    <section class="container--action">
      <div class="icon">
        <el-tooltip content="最小化">
          <el-icon color="#fff">
            <Minus />
          </el-icon>
        </el-tooltip>
      </div>
      <div class="icon">
        <el-tooltip content="全屏">
          <el-icon color="#fff">
            <FullScreen />
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
import { Minus, FullScreen } from '@element-plus/icons-vue'
import VideoItem from './video/called.vue'
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

  &.minimize {
    width: 25vw;
    height: 25vh;

    >.container--action {
      right: 12px;
      top: 12px;

      >.icon {
        font-size: 16px;

        &+.icon {
          margin-left: 10px;
        }
      }
    }

    :deep {

      // 覆盖el-button
      .el-button {
        font-size: 20px;
      }

      .el-button--large.is-circle {
        padding: 16px
      }

      // 覆盖Wrap
      .wrap-component>.content {
        top: 10%;
      }

      // 覆盖Avatar样式
      .avatar {
        width: 60px;
        height: 60px;
      }

      .uname {
        font-size: 16px;
        margin: 10px 0;
      }

      .subname {
        font-size: 12px;
        margin-bottom: 12px;
      }

      // 覆盖Status状态
      .wrap-status>span {
        font-size: 12px;
      }
    }
  }

  &:hover {
    >.container--action {
      display: flex;
    }
  }

  >.content {
    width: 100%;
    height: 100%;
  }

  >.container--action {
    position: absolute;
    right: 40px;
    top: 40px;
    display: none;
    z-index: 2;

    >.icon {
      cursor: pointer;
      font-size: 34px;

      &+.icon {
        margin-left: 20px;
      }
    }
  }
}
</style>