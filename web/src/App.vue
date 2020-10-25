<template lang="pug">
v-app
  Header
  v-content
    router-view
</template>

<script lang='ts'>
import Vue from 'vue'
import { Component } from 'vue-property-decorator'

import Header from '@/components/header/Header.vue'

@Component({
  name: 'App',
  components: {
    Header,
  },
})
class App extends Vue {}

export default App
</script>

<style lang='sass'>
@import '@/styles/main.sass'
</style>
