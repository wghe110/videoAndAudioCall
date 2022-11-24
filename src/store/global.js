import { defineStore } from 'pinia'

const globalStore = defineStore('global', {
  state() {
    return {
      showMenu: true,
    }
  }
})

export default globalStore