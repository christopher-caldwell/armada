<template lang="pug">
  v-container
    v-row(justify='center' align='center')
      v-col(cols='6' md='5')
        FilterCards(:disabled="hasCommanderBeenChosen")
      v-col(cols='6' md='5')
        SearchCards(@updateSearchTerm="updateSearchTerm" :disabled="hasCommanderBeenChosen")
    v-row
      v-col.status-text
        h2 {{ statusText }}
    v-row
      v-col(cols='6' md='3' v-for="(upgrade, index) in availableUpgrades" v-if="determineIsValidUpgrade(upgrade)")
        UpgradeCard(:upgrade="upgrade")
</template>

<script>
import FilterCards from '@/components/ships/FilterCards.vue'
import SearchCards from '@/components/ships/SearchCards.vue'
import UpgradeCard from '@/components/upgrades/UpgradeCard.vue'
import { filterShips } from '@/utilities/filtering'
import { convertKebabToUpper } from '@/utilities/formatting'
import { determineCardsToBeShown } from '@/utilities/coreLogic'
import { upgradeCards } from '@/data/cards'
import { mapGetters } from 'vuex'
  export default {
    name: 'Upgrades',
    components: {
      UpgradeCard,
      FilterCards,
      SearchCards
    },
    beforeRouteEnter(to, from, next){
      next(vm => {
        const ships = Object.values(vm.$store._modules.root.state.ships.ships)
        ships.length
        ? next()
        : next('/build')
      })
    },
    data(){
      return {
        searchTerm: '',
        upgradeCards,
        baseUpgradeSet: [],
        availableUpgrades: [],
      }
    },
    created(){
      this.updateCards()
    },
    watch: {
      $route() {
        this.updateCards()
      }
    },
    computed: {
      ...mapGetters('fleet', ['totalPoints', 'hasCommanderBeenChosen', 'targetShip']),
      statusText(){
        if(this.targetShip){
          const type = convertKebabToUpper(this.$route.query.type)
          const shipTitle = this.targetShip.title
          return `Adding ${type} to ${shipTitle}`
        } else {
          return ''
        }
      },
    },
    methods: {
      updateSearchTerm(newTerm){
        this.availableUpgrades = filterShips(this.baseUpgradeSet, newTerm)
      },
      determineIsValidUpgrade(upgrade){
        const chosenFaction = this.$store.state.fleet.chosenFaction
        const isValidPoints = this.totalPoints + upgrade.points < 400
        // no faction, or matches the correct one
        const isValidFaction = !upgrade.faction || upgrade.faction === chosenFaction
        return isValidPoints && isValidFaction
      },
      updateCards(){
        const upgradeType = this.$route.query.type
        const faction = this.$store.state.fleet.chosenFaction
        const shipType = this.$route.query.shipType
        const config = { upgradeType, faction, upgradeCards, shipType }
        const selectedUpgradeCardSet = determineCardsToBeShown(config)
        this.baseUpgradeSet = selectedUpgradeCardSet
        this.availableUpgrades = selectedUpgradeCardSet
      }
    }
  }
</script>