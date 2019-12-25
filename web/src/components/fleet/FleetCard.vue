<template lang='pug'>
  v-row(align='start' justify='space-between')
    v-col.no-padding(cols='2' align='center') 
      v-icon.delete-icon(@click="removeShip(item.id, item.points)") mdi-delete
    v-col(cols='10')
      v-expansion-panels
        v-expansion-panel
          v-expansion-panel-header 
            v-row 
              v-col.truncate {{ item.title }}
              v-col(cols='3' align='start') {{ item.points }}
          v-expansion-panel-content
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
  width: 200px !important
  white-space: nowrap
  overflow: hidden
  text-overflow: ellipsis
.delete-icon
  margin-left: 10px
  margin-top: 60%

</style>