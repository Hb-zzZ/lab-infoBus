import Vue from 'vue'

const newVue = (config) => new Vue(config)

const infobusMixin = (config) => {
  return {
    provide() {
      return {
        infobus: this.infobus
      }
    },
    data() {
      return {
        infobus: newVue(config)
      }
    },
    beforeDestroy() {
      this.infobus.$destroy()
      this.infobus = null
    }
  }
}

export default {
  infobusMixin
}
