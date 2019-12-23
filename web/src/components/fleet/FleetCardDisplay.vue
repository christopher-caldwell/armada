<template lang='pug'>
  v-list.internal-drawer-container.listing-listy.list(dense)
    v-subheader
    v-row(align='baseline')
      v-col(cols='1')
      v-col(cols='4') Fleet Name: 
      v-col(cols='6') 
        v-text-field(outlined dense label='Name')
    v-divider
    v-row(align='baseline')
      v-col(cols='1')
      v-col(cols='4') Points: 
      v-col {{ totalPoints }}
    v-divider
    v-subheader
    v-subheader Ships
    v-divider
    FleetCard( v-for="(ship, index) in ships" :item="ship")
</template>

<script>
import { mapGetters } from 'vuex'
import FleetCard from '@/components/fleet/FleetCard'
  export default {
    name: 'FleetCardDisplay',
    components: {
      FleetCard
    },
    computed: {
      ...mapGetters('ships', ['ships']),
      ...mapGetters('fleet', ['totalPoints']),
    }
  }
</script>