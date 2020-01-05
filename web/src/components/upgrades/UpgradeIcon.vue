<template lang="pug">
  span.armada-font.upgrade-icon(:style="styles") {{ iconText }}
</template>

<script>
import { fontMapping, successColor, grayColor, errorColor, linkColor } from '@/data/config'
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
    isUnableToBeFilled(){
      return this.equippedCard
        ? this.equippedCard.isUnableToBeFilled
        : null
    },
    iconColor(){
      if(this.isUnableToBeFilled){
        return errorColor // error
      } else {
        return this.equippedCard !== null
          ? successColor // success
          : grayColor // gray
      }
    },
    styles(){
      return this.addShadow
        ? { filter: `drop-shadow(0px 0px 15px ${linkColor})`, color: this.iconColor }
        : { color: this.iconColor }
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