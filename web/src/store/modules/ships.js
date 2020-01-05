import { removeUpgradesFromShip, determineExtraActionForUpgrade, removeUniqueUpgradeFromList } from '../helpers'

export default {
  namespaced: true,
  state: {
    ships: {}
  },
  getters: {
    ships(state){
      return state.ships
    },
  },
  actions: {
    addShipToFleet({ commit, dispatch }, shipToBeAdded){
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
    addUpgradeToShip({ commit, dispatch, rootGetters }, upgradeToBeAdded){
      const targetShipId = rootGetters['fleet/targetShip'].trackableId
      const points = upgradeToBeAdded.points
      dispatch('fleet/updateFleetPoints', { points, action: 'add'}, {root: true})
      determineExtraActionForUpgrade(dispatch, upgradeToBeAdded)
      commit('ADD_UPGRADE_TO_SHIP', { targetShipId, upgradeToBeAdded }) 
    },
    removeUpgradeFromShip({ commit, dispatch, rootGetters }, upgradeToBeRemoved){
      const targetShipId = rootGetters['fleet/targetShip'].trackableId
      const points = upgradeToBeRemoved.points
      const upgradeType = upgradeToBeRemoved.set
      commit('REMOVE_UPGRADE_FROM_SHIP', { targetShipId, upgradeType })
      dispatch('fleet/updateFleetPoints', { points, action: 'subtract'}, {root: true})
      if(upgradeToBeRemoved.unique){
        removeUniqueUpgradeFromList(upgradeToBeRemoved, dispatch)
      }
      if(upgradeToBeRemoved.set === 'commander'){
        dispatch('fleet/updateCommanderStatus', {}, {root: true})
      }
    },
  },
  mutations: {
    ADD_SHIP_TO_FLEET(state, newShipToBeAdded){
      state.ships[newShipToBeAdded.trackableId] = { ...newShipToBeAdded }
    },
    REMOVE_SHIP(state, idOfShipToBeRemoved){
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
}
