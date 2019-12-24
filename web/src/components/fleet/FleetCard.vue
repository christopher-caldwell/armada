<template lang='pug'>
  v-list-item
    v-list-item-action {{ item.points }}
    v-list-item-content
      v-list-item-title {{item.title}}
    v-list-item-action
      v-btn(text @click="removeShip(item.id, item.points)")
        v-icon mdi-delete
</template>

<script>
import { mapActions } from 'vuex'
import CommanderIcon from '@/components/icons/Commander.vue'
  export default {
    name: 'FleetCard',
    props: {
      item: {
        type: Object,
        required: true
      }
    },
    components: {
      CommanderIcon
    },
    methods: {
      ...mapActions('ships', ['removeShipFromFleet']),
      removeShip(idOfShipToBeRemoved, shipPoints){
        this.removeShipFromFleet({ idOfShipToBeRemoved, shipPoints })
      }
    }
  }
</script>