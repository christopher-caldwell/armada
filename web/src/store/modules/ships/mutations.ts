import { MutationTree } from 'vuex'
import { Ship } from '@/interfaces'

import { ShipState } from './types'

export const mutations: MutationTree<ShipState> = {
  ADD_SHIP_TO_FLEET(state, newShipToBeAdded: Ship){
      state.ships[newShipToBeAdded.trackableId as string] = { ...newShipToBeAdded }
    },
    REMOVE_SHIP(state, idOfShipToBeRemoved: string){
      delete state.ships[idOfShipToBeRemoved]
    },
    ADD_UPGRADE_TO_SHIP(state, { targetShipId, upgradeToBeAdded }){
      const upgradeType = upgradeToBeAdded.set
      state.ships[targetShipId].upgrades = {
        ...state.ships[targetShipId].upgrades,
        [upgradeType]: upgradeToBeAdded
      }
    },
    REMOVE_UPGRADE_FROM_SHIP(state, { targetShipId, upgradeType }){
      const shipUpgrades = state.ships[targetShipId].upgrades
      shipUpgrades[upgradeType] = null
    }
}