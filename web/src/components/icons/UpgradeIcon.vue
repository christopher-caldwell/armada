<template lang="pug">
  Icon(height='30px' width='30px')
</template>

<script>
export default {
  name: 'UpgradeIcon',
  data () {
    return {
      current: 'upgrade-component'
    }
  },
  beforeCreate() {
  this.$options.components.Icon = () => import(`@/components/icons/${this.upgradeName}.vue`)
  },
  props: {
    upgradeName: {
      type: String,
      required: true
    }
  },
}
</script>