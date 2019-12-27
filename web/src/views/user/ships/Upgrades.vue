<template lang="pug">
  v-container
    v-row(justify='center' align='center')
      v-col(cols='5')
        FilterCards
      v-col(cols='5')
        SearchCards(@updateSearchTerm="updateSearchTerm")
      v-col(cols='5')
    v-row
      v-col(cols='3' v-for="(upgrade, index) in availableUpgrades" v-if="determineIsValidUpgrade(upgrade)")
        UpgradeCard(:upgrade="upgrade")
</template>

<script>
import FilterCards from '@/components/ships/FilterCards.vue'
import SearchCards from '@/components/ships/SearchCards.vue'
import UpgradeCard from '@/components/upgrades/UpgradeCard.vue'
import { filterShips } from '@/utilities/filtering'
import { upgradeCards } from '@/data/cards'
import { mapGetters } from 'vuex'
  export default {
    name: 'Upgrades',
    components: {
      UpgradeCard,
      FilterCards,
      SearchCards
    },
    data(){
      return {
        searchTerm: '',
        upgradeCards,
        baseUpgradeSet: [],
        availableUpgrades: []
      }
    },
    created(){
      const upgradeType = this.$route.query.type
      const faction = this.$store.state.fleet.chosenFaction
      let selectedUpgradeCardSet
      if(upgradeType === 'commander'){
        selectedUpgradeCardSet = upgradeCards[upgradeType][faction]
      } else {
        selectedUpgradeCardSet = upgradeCards[upgradeType]
      }
      this.baseUpgradeSet = selectedUpgradeCardSet
      this.availableUpgrades = selectedUpgradeCardSet
    },
    computed: {
      ...mapGetters('fleet', ['totalPoints']),
    },
    methods: {
      updateSearchTerm(newTerm){
        this.availableUpgrades = filterShips(this.baseUpgradeSet, newTerm)
      },
      determineIsValidUpgrade(upgrade){
        return this.totalPoints + upgrade.points < 400
      }
    }
  }
</script>