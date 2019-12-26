<template lang="pug">
  Icon(height='20px' width='20px' :isFilled="!!equippedCard")
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
      validator: prop => typeof prop === 'string' || prop === null
    }
  },
}
</script>