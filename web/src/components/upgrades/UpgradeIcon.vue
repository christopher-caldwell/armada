<template lang="pug">
  span.armada-font.upgrade-icon( :style="styles") {{ iconText }}
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
    iconColor(){
      if(this.isUnableToBeFilled){
        return '#d9534f' // gray
      } else {
        return this.equippedCard
        ? '#5cb85c' // success
        : '#84848c' //error
      }
    },
    styles(){
      return this.addShadow ? {
        filter: `drop-shadow(-1px 0 3px ${this.shadowColor})`
      } : {
        color: this.iconColor
      }
    },
    iconText(){
      return fontMapping[this.upgradeName]
    }
  }
}
</script>

<style lang='sass' scoped>
  .upgrade-icon
    font-size: 2em
</style>