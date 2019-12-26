<template lang='pug'>
  v-card
    v-img(
      :src="require(`@/assets/cards/ships/imperial/${ship.image}`)"
      max-height='130px'
      position='top'
    )
    v-row(justify='start')
      v-col.truncate.ship-title(cols='10' align='start') {{ ship.title }}
    v-row(justify='space-between')
      v-col(cols='5')
        v-card-actions
          v-btn(text) Exlpore
      v-col(cols='5')
        v-card-actions
          v-btn(@click="addShip(ship)" text) Add
</template>

<script>
import uuid from 'uuid/v4'
import { mapActions } from 'vuex'
  export default {
    name: 'ShipCard',
    props: {
      ship: {
        type: Object,
        required: true
      }
    },
    methods: {
      ...mapActions('ships',['addShipToFleet']),
      addShip(selectedShip){
        const shipToAdd = {
          ...selectedShip,
          trackableId: uuid()
        }
        this.addShipToFleet(shipToAdd)
      }
    }
  }
</script>

<style lang='sass' scoped>
  .ship-title
    margin-left: 10px
  .truncate
    width: 150px !important
    white-space: nowrap
    overflow: hidden
    text-overflow: ellipsis

</style>