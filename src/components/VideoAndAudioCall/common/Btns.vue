<template>
  <section class="btn-box">
    <el-tooltip content="挂断">
      <el-button type="danger" size="large" circle>
        <template #icon>
          <div style="transform: rotate(135deg)">
            <el-icon size="34" color="#fff">
              <PhoneFilled />
            </el-icon>
          </div>
        </template>
      </el-button>
    </el-tooltip>

    <el-tooltip content="接听">
      <el-button type="success" size="large" circle>
        <template #icon>
          <el-icon size="34" color="#fff">
            <PhoneFilled />
          </el-icon>
        </template>
      </el-button>
    </el-tooltip>
  </section>
</template>

<script setup>
import { PhoneFilled } from '@element-plus/icons-vue'
</script>

<style lang="scss" scoped>
:deep {
  .el-button--large.is-circle {
    padding: 34px
  }

  .el-button+.el-button {
    margin-left: 100px;
  }
}
</style>