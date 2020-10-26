
import { ActionTree } from 'vuex'

import { Ship, Upgrade } from '@/interfaces'

import { ShipState } from './types'
import { RootState } from '../types'

import { 
  removeUpgradesFromShip,
  determineExtraActionForUpgrade, 
  removeUniqueUpgradeFromList,
  removeDualUpgrade
} from '@/store/helpers'

export const actions: ActionTree<ShipState, RootState> = {
  addShipToFleet({ commit, dispatch }, shipToBeAdded: Ship){
    const points = shipToBeAdded.points
    commit('ADD_SHIP_TO_FLEET', shipToBeAdded)
    dispatch('fleet/updateFleetPoints', { points, action: 'add'}, {root: true})
    dispatch('fleet/addToFleetNotifications', {}, {root: true})
    dispatch('fleet/updateTargetShip', shipToBeAdded, {root: true})
  },
  removeShipFromFleet({ commit, dispatch, state }, { idOfShipToBeRemoved, points}){
    dispatch('fleet/updateFleetPoints',  { points, action: 'subtract' }, {root: true})
    const shipToBeRemoved = state.ships[idOfShipToBeRemoved]
    removeUpgradesFromShip(shipToBeRemoved, dispatch)
    commit('REMOVE_SHIP', idOfShipToBeRemoved)
  },
  addUpgradeToShip({ commit, dispatch, rootGetters }, upgradeToBeAdded: Upgrade){
    const targetShipId = rootGetters['fleet/targetShip'].trackableId
    const points = upgradeToBeAdded.points
    dispatch('fleet/updateFleetPoints', { points, action: 'add'}, {root: true})
    determineExtraActionForUpgrade(dispatch, commit, targetShipId, upgradeToBeAdded)
  },
  removeUpgradeFromShip({ commit, dispatch, rootGetters }, upgradeToBeRemoved: Upgrade){
    const targetShipId = rootGetters['fleet/targetShip'].trackableId as string
    const points = upgradeToBeRemoved.points
    const upgradeType = upgradeToBeRemoved.set
    commit('REMOVE_UPGRADE_FROM_SHIP', { targetShipId, upgradeType })
    dispatch('fleet/updateFleetPoints', { points, action: 'subtract'}, {root: true})
    if(upgradeToBeRemoved.isUnique){
      removeUniqueUpgradeFromList(upgradeToBeRemoved, dispatch)
    }
    if(upgradeToBeRemoved.isDual){
      removeDualUpgrade(commit, upgradeToBeRemoved, targetShipId)
    }
    if(upgradeToBeRemoved.set === 'commander'){
      dispatch('fleet/updateCommanderStatus', {}, {root: true})
    }
  },
}