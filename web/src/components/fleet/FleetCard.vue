<template lang='pug'>
  v-list-item
    v-list-item-action
      v-img(:src="require(`@/assets/cards/ships/imperial/${item.image}`)" max-height='25px' max-width='70px' position='top')
    v-list-item-content
      v-list-item-title {{item.title}}
    v-list-item-action
      v-btn(text @click="removeShip(item.id, item.points)")
        v-icon mdi-delete
</template>

<script>
import { mapActions } from 'vuex'
  export default {
    name: 'FleetCard',
    props: {
      item: {
        type: Object,
        required: true
      }
    },
    methods: {
      ...mapActions('ships', ['removeShipFromFleet']),
      removeShip(idOfShipToBeRemoved){
        this.removeShipFromFleet(idOfShipToBeRemoved)
      }
    }
  }
</script>