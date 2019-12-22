<template lang='pug'>
  v-card
    v-img(
      :src="require(`@/assets/cards/ships/imperial/${ship.image}`)"
      max-height='130px'
      position='top'
    )
    v-card-title.ship-title {{ ship.title }}
    v-row(justify='space-between')
      v-col(cols='5')
        v-card-actions
          v-btn(text) Exlpore
      v-col(cols='5')
        v-card-actions
          v-btn(text) Add
</template>

<script>
  export default {
    name: 'ShipCard',
    props: {
      ship: {
        type: Object,
        required: true
      }
    }
  }
</script>

<style lang='sass' scoped>
  .ship-title
    font-size: 0.95em
</style>