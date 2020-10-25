<template lang='pug'>
.main-cont
  Crawl
</template>

<script lang='ts'>
import Vue from 'vue'
import { Component } from 'vue-property-decorator'

import Crawl from '@/components/util/Crawl'

@Component({
  components: {
    Crawl,
  },
})
class Root extends Vue {}

export default Root
</script>

<style lang='sass' scoped>
.main-cont
  position: relative
  z-index: 1
  height: 92vh
  background-color: black
  overflow: hidden
.shown-menu
  background-color: white
  height: 100px
  width: 100px
</style>
