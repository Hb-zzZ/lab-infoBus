<template>
  <div class="page-wrap">
    <page-main />
    <button style="display: block;" @click="infobus.footerText += 'x'">
      点击改变footerText
    </button>
    <button style="display: block;" @click="infobus.changeFooterText">
      点击改变footerText(infobus内方法)
    </button>
    <page-footer />
  </div>
</template>

<script>
import pageFooter from './components/page-footer'
import pageMain from './components/page-main'
import infobus from './infobus'
import $BusPd from '@/utils/BusPd.js'

export default {
  mixins: [$BusPd.infobusMixin(infobus)],
  components: {
    pageFooter,
    pageMain
  },
  created() {
    this.infobus.$on('test', () => {
      console.log('test')
    })

    this.infobus.$emit('test')
  }
}
</script>

<style lang="scss" scoped>
.page-wrap {
  background: yellowgreen;
  text-align: center;
}
</style>
