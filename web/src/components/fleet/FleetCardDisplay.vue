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
      v-col(cols='3') Points: 
      v-col 
        v-row(align='baseline')
          v-col(cols='3') {{ totalPoints }}
          v-col(cols='2') /
          v-col(cols='5')
            v-text-field(
              outlined 
              dense
              v-model="maxPoints" 
              @blur="sendUpdateFleetName"
              hide-details
              type='tel'
            )
    v-divider
    v-subheader
    v-subheader
      v-row
        v-col Ships
        v-col 
          router-link(to='/build') Add New
        v-col
          router-link(to='/fleet-viewer') Detailed View
    v-divider
    ShipFleetCard( v-for="(ship, index) in ships" :ship="ship" :key="ship.trackableId")
    v-subheader Squadrons
    v-divider
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import ShipFleetCard from '@/components/fleet/ShipFleetCard'
  export default {
    name: 'FleetCardDisplay',
    components: {
      ShipFleetCard
    },
    computed: {
      ...mapGetters('ships', ['ships']),
      ...mapGetters('fleet', ['totalPoints']),
    },
    data(){
      return {
        fleetName: '',
        maxPoints: 400
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