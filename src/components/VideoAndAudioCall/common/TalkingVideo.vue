<template>
  <section class="container-video" ref="containerRef">
    <div class="main-screen" ref="mainRef" @click="toggleMainFn">
      <slot>
        <video src="@public/video-mac.mp4" autoplay loop class="video"></video>
      </slot>
    </div>
    <div class="sub-screen" ref="subRef" @click="toggleSubFn">
      <slot name="sub-video">
        <video src="@public/video-phone.mp4" autoplay loop class="video"></video>
      </slot>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'

const mainRef = ref()
const subRef = ref()
const containerRef = ref()

const toggleSubFn = (event) => {
  const h_sub = subRef.value.clientHeight
  const w_sub = subRef.value.clientWidth
  const left_sub = subRef.value.offsetLeft
  const top_sub = subRef.value.offsetTop
  const w_win = containerRef.value.offsetWidth
  const h_win = containerRef.value.clientHeight

  const left_target = w_win / 2
  const top_target = h_win / 2
  const left_from = left_sub + w_sub / 2
  const top_from = top_sub + h_sub / 2

  subRef.value.style.transition = 'transform .38s ease-in'
  subRef.value.style.transform = `translate3d(${left_target - left_from}px, ${top_target - top_from}px, 0) scaleX(${w_win / w_sub}) scaleY(${h_win / h_sub})`
  mainRef.value.style.opacity = 0
  setTimeout(() => {
    subRef.value.style.transition = ''
    subRef.value.style.transform = ''
    subRef.value.className = 'main-screen'
    mainRef.value.className = 'sub-screen'
    mainRef.value.style.opacity = '1'
  }, 400);
}
const toggleMainFn = () => {
  const h_sub = mainRef.value.clientHeight
  const w_sub = mainRef.value.clientWidth
  const left_sub = mainRef.value.offsetLeft
  const top_sub = mainRef.value.offsetTop
  const w_win = containerRef.value.offsetWidth
  const h_win = containerRef.value.clientHeight

  const left_target = w_win / 2
  const top_target = h_win / 2
  const left_from = left_sub + w_sub / 2
  const top_from = top_sub + h_sub / 2

  mainRef.value.style.transition = 'transform .38s ease-in'
  mainRef.value.style.transform = `translate3d(${left_target - left_from}px, ${top_target - top_from}px, 0) scaleX(${w_win / w_sub}) scaleY(${h_win / h_sub})`
  subRef.value.style.opacity = 0
  setTimeout(() => {
    mainRef.value.style.transition = ''
    mainRef.value.style.transform = ''
    mainRef.value.className = 'main-screen'
    subRef.value.className = 'sub-screen'
    subRef.value.style.opacity = 1
  }, 400);
}
</script>

<style lang="scss" scoped>
.container-video {
  position: absolute;
  width: 100%;
  height: 100%;
  overflow: hidden;

  >.main-screen {
    width: 100%;
    height: 100%;
    color: #fff;
  }

  >.sub-screen {
    width: 25%;
    height: 25%;
    position: absolute;
    right: 2%;
    bottom: 2%;
    color: #fff;
    cursor: pointer;
    z-index: 6;
    transform-origin: center center;
  }
}

.video {
  width: 100%;
  height: 100%;
  object-fit: contain;
}
</style>