<template lang='pug'>
  v-row.ship-row(align='start' justify='space-between')
    v-col(cols='10' align='center')
      v-expansion-panels
        v-expansion-panel
          v-expansion-panel-header 
            v-row 
              v-col.truncate {{ ship.title }}
              v-col(cols='3' align='start') {{ ship.points }}
          v-expansion-panel-content
            v-row
              v-col.no-padding(v-for="upgrade in allowableUpgrades" cols='2')
                router-link( 
                  :to="`/upgrades?type=${upgrade[0]}&shipType=${ship.type}`"
                  @click.native="updateTarget(ship, upgrade[0])"
                )
                  UpgradeIcon(:upgradeName="upgrade[0]" :equippedCard="upgrade[1]" :addShadow="determineAddShadow(upgrade[0], ship)")
            v-row(v-if="ship.upgrades[targetUpgrade]")
              v-col(cols='2') {{ ship.upgrades[targetUpgrade].points }}
              v-col.truncate(cols='8') {{ ship.upgrades[targetUpgrade].title }}
              v-col(cols='1')
                v-icon(@click="removeUpgrade(ship.upgrades[targetUpgrade])") mdi-delete
    v-col.no-padding(cols='2' align='start') 
      v-icon.delete-icon(@click="removeShip(ship.trackableId, ship.points)") mdi-delete
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import UpgradeIcon from '@/components/icons/UpgradeIcon.vue'
  export default {
    name: 'FleetCard',
    props: {
      ship: {
        type: Object,
        required: true
      }
    },
    data(){
      return {
        targetUpgrade: null
      }
    },
    components: {
      UpgradeIcon
    },
    computed: {
      ...mapGetters('fleet', ['targetShip']),
      allowableUpgrades(){
        return Object.entries(this.ship.upgrades)
      },
    },
    methods: {
      ...mapActions('ships', ['removeShipFromFleet', 'removeUpgradeFromShip']),
      ...mapActions('fleet', ['updateTargetShip']),
      removeShip(idOfShipToBeRemoved, points){
        this.removeShipFromFleet({ idOfShipToBeRemoved, points })
      },
      removeUpgrade(upgrade){
        this.removeUpgradeFromShip(upgrade)
      },
      updateTarget(targetShip, upgradeType){
        this.targetUpgrade = upgradeType
        this.updateTargetShip(targetShip)
      },
      determineAddShadow(upgrade, ship){
        return this.targetUpgrade === upgrade && this.targetShip.trackableId === ship.trackableId
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
.ship-row
  padding-left: 10px

</style>