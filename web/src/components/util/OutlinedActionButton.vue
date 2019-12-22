<template lang='pug'>  
  div.link-container.flex-centered(@click="emitClick")
    div.action-link {{ ctaText }}
</template>
<script>
  export default {
    name: 'ActionButton',
    props: {
      ctaText: {
        type: String,
        required: true
      }
    },
    methods: {
      emitClick(){
        this.$emit('buttonClick')
      }
    }
  }
</script>

<style lang='sass' scoped>
  @import '@/styles/variables.sass'
  .link-container
    width: 100%
    padding: 10px
    border: 1px $star-wars-yellow solid
    border-radius: 5%
    cursor: pointer
  .action-link
    color: $star-wars-yellow
    font-family: 'star-wars', arial
    font-size: 0.9em
</style>