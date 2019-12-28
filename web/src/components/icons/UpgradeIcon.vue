<template lang="pug">
  Icon.upgrade-icon(height='25px' width='25px' :isFilled="!!equippedCard" :addShadow="addShadow")
</template>

<script>
export default {
  name: 'UpgradeIcon',
  beforeCreate() {
    this.$options.components.Icon = () => import(`@/components/icons/${this.upgradeName}.vue`)
  },
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
}
</script>

<style lang='sass' scoped>
  .upgrade-icon
    margin: 0 3px
</style>