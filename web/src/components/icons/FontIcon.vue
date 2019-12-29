<template lang="pug">
  component.upgrade-icon(
    height='25px' 
    width='25px' 
    :isFilled="!!equippedCard" 
    :addShadow="addShadow" 
    :is="componentFile"
  )
</template>

<script>
import { fontMapping } from '@/data/config'
export default {
  name: 'UpgradeIcon',
  props: {
    upgradeName: {
      type: String,
      required: true
    },
    equippedCard: {
      required: true,
      validator: prop => typeof prop === 'object' || prop === null
    },
    addShadow: {
      type: Boolean,
      required: true
    }
  },
  computed: {
    componentFile(){
      const upgradeName = this.upgradeName
      return () => import(`@/components/icons/${upgradeName}.vue`)
    }
  }
}
</script>

<style lang='sass' scoped>
  .upgrade-icon
    margin: 0 3px
</style>