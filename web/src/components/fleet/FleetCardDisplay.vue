<template lang='pug'>
  v-list.internal-drawer-container.listing-listy.list(dense)
    v-subheader
    v-row(align='baseline')
      v-col(cols='1')
      v-col(cols='4') Fleet Name: 
      v-col(cols='6') 
        v-text-field(
          outlined 
          dense 
          label='Name' 
          v-model="fleetName" 
          @blur="sendUpdateFleetName"
        )
    v-divider
    v-row(align='baseline')
      v-col(cols='1')
      v-col(cols='4') Points: 
      v-col {{ totalPoints }}
    v-divider
    v-subheader
    v-subheader Ships
    v-divider
    FleetCard( v-for="(ship, index) in ships" :ship="ship" :key="ship.id + index")
    v-subheader Squadrons
    v-divider
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import FleetCard from '@/components/fleet/ShipFleetCard'
  export default {
    name: 'FleetCardDisplay',
    components: {
      FleetCard
    },
    computed: {
      ...mapGetters('ships', ['ships']),
      ...mapGetters('fleet', ['totalPoints']),
    },
    data(){
      return {
        fleetName: ''
      }
    },
    methods: {
      ...mapActions('fleet', ['updateFleetName']),
      sendUpdateFleetName(){
        this.updateFleetName(this.fleetName)
      }
    }
  }
</script>