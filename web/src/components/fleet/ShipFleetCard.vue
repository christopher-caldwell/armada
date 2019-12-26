<template lang='pug'>
  v-row(align='start' justify='space-between')
    v-col.no-padding(cols='2' align='center') 
      v-icon.delete-icon(@click="removeShip(ship.trackableId, ship.points)") mdi-delete
    v-col(cols='10')
      v-expansion-panels
        v-expansion-panel
          v-expansion-panel-header 
            v-row 
              v-col.truncate {{ ship.title }}
              v-col(cols='3' align='start') {{ ship.points }}
          v-expansion-panel-content
            v-row
              v-col
                router-link( v-for="upgrade in allowableUpgrades" :to="`/upgrades?type=${upgrade}&shipId=${ship.trackableId}`")
                  UpgradeIcon(upgradeName="commander" :equippedCard="upgrade[1]")
</template>

<script>
import { mapActions } from 'vuex'
import UpgradeIcon from '@/components/icons/UpgradeIcon.vue'
  export default {
    name: 'FleetCard',
    props: {
      ship: {
        type: Object,
        required: true
      }
    },
    components: {
      UpgradeIcon
    },
    computed: {
      allowableUpgrades(){
        return Object.entries(this.ship.upgrades)
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
  width: 200px !important
  white-space: nowrap
  overflow: hidden
  text-overflow: ellipsis
.delete-icon
  margin-left: 10px
  margin-top: 60%
  cursor: pointer

</style>