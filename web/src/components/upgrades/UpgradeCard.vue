<template lang='pug'>
  v-card
    v-img(
      :src="require(`@/assets/cards/upgrades/${upgradeType}/${upgrade.image}`)"
      max-height='130px'
      position='top'
      @load="finishLoading"
    )
      template(name='placeholder')
        v-skeleton-loader(
          v-if="!imageDoneLoading"
          class="mx-auto"
          max-height='130px'
          type="image"
        )
    v-row(justify='start')
      v-col.truncate.ship-title(cols='7' md='9' align='start') {{ upgrade.title }}
      v-col(cols='3' md='2' align='start') {{ upgrade.points }}
    v-row(justify='space-between')
      v-col(cols='5')
        v-card-actions
          v-btn(text) Exlpore
      v-col(cols='5')
        v-card-actions
          v-btn(@click="addUpgrade(upgrade)" text :disabled="isAddButtonDisabled") Add
</template>

<script>
import uuid from 'uuid/v4'
import { mapActions, mapGetters } from 'vuex'
import { determineIfAddButtonIsDisabled } from '@/utilities/coreLogic'
  export default {
    name: 'ShipCard',
    props: {
      upgrade: {
        type: Object,
        required: true
      }
    },
    data(){
      return {
        imageDoneLoading: false
      }
    },
    computed: {
      ...mapGetters('fleet', ['hasCommanderBeenChosen']),
      isAddButtonDisabled(){
        const config = {
          upgrade: this.upgrade,
          hasCommanderBeenChosen: this.hasCommanderBeenChosen
        }
        return determineIfAddButtonIsDisabled(config)
      },
      upgradeType(){
        return this.$route.query.type
      }
    },
    methods: {
      ...mapActions('ships',['addUpgradeToShip']),
      addUpgrade(selectedUpgrade){
        const upgradeToAdd = {
          ...selectedUpgrade,
          trackableId: uuid()
        }
        this.addUpgradeToShip(upgradeToAdd)
      },
      finishLoading(){
        this.imageDoneLoading = true
      }
    }
  }
</script>

<style lang='sass' scoped>
  .ship-title
    margin-left: 10px
  .truncate
    width: 150px !important
    white-space: nowrap
    overflow: hidden
    text-overflow: ellipsis

</style>