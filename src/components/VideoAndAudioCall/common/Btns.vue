<template>
  <section class="container-btn">
    <el-tooltip content="挂断" v-if="aEle.includes('hangup')">
      <el-button type="danger" size="large" circle>
        <template #icon>
          <div style="transform: rotate(135deg)">
            <el-icon color="#fff">
              <PhoneFilled />
            </el-icon>
          </div>
        </template>
      </el-button>
    </el-tooltip>

    <el-tooltip content="接听" v-if="aEle.includes('answer')">
      <el-button type="success" size="large" circle>
        <template #icon>
          <el-icon color="#fff">
            <PhoneFilled />
          </el-icon>
        </template>
      </el-button>
    </el-tooltip>
  </section>
</template>

<script setup>
import { computed } from 'vue'
import { PhoneFilled } from '@element-plus/icons-vue'
const props = defineProps({
  content: {
    type: String,
    default: ''
  }
})

const aEle = computed(() => {
  return props.content.split(',')
})
</script>

<style lang="scss" scoped>
.container-btn {
  display: flex;
  justify-content: center;
}

:deep {
  .el-button {
    position: relative;
    z-index: 16;
    font-size: 34px;
  }

  .el-button--large.is-circle {
    padding: 34px
  }

  .el-button+.el-button {
    margin-left: 100px;
  }
}
</style>