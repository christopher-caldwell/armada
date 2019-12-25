<template lang='pug'>
  v-expansion-panel
    v-expansion-panel-header 
      v-row 
        v-col.truncate {{ item.title }}
        v-col(cols='3' align='start') {{ item.points }}
    v-expansion-panel-content
      v-row 
        v-col {{ item.size }}
        v-col 
          v-btn(text @click="removeShip(item.id, item.points)")
            v-icon mdi-delete
      v-row
        v-col
          UpgradeIcon(upgradeName='commander')
</template>

<script>
import { mapActions } from 'vuex'
// import CommanderIcon from '@/components/icons/Commander.vue'
import UpgradeIcon from '@/components/icons/UpgradeIcon.vue'
  export default {
    name: 'FleetCard',
    props: {
      item: {
        type: Object,
        required: true
      }
    },
    components: {
      UpgradeIcon
    },
    computed: {
      allowableUpgrades(){
        return Object.keys(this.item.upgrades)
      }
    },
    methods: {
      ...mapActions('ships', ['removeShipFromFleet']),
      removeShip(idOfShipToBeRemoved, shipPoints){
        this.removeShipFromFleet({ idOfShipToBeRemoved, shipPoints })
      }
    }
  }
</script>

<style lang="sass" scoped>
.truncate
  width: 280px !important
  white-space: nowrap
  overflow: hidden
  text-overflow: ellipsis

</style>