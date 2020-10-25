import { ActionTree } from 'vuex'
import { SessionState } from './types'
import { RootState } from '../types'

export const actions: ActionTree<SessionState, RootState> = {

  updateFleetPoints({ commit, state }, { points, action }) {
    const newPointTotal = action === 'add'
      ? state.totalPoints + points
      : state.totalPoints - points
    commit('UPDATE_TOTAL_POINTS', newPointTotal)
  },
  addToFleetNotifications({ commit }) {
    commit('ADD_TO_NUMBER_OF_FlEET_NOTIFICATIONS')
  },
  clearFleetNotifications({ commit }) {
    commit('CLEAR_FlEET_NOTIFICATIONS')
  },
  updateFleetName({ commit }, fleetName) {
    commit('UPDATE_FLEET_NAME', fleetName)
  },
  updateFaction({ commit }, factionName) {
    commit('UPDATE_FACTION', factionName)
  },
  updateCommanderStatus({ commit }) {
    commit('UPDATE_COMMANDER_STATUS')
  },
  updateTargetShip({ commit }, targetShip) {
    commit('UPDATE_TARGET_SHIP', targetShip)
  },
  trackUniqueUpgrades({ commit }, { upgradeTitle, action }) {
    action === 'add'
      ? commit('ADD_UNIQUE_UPGRADE', upgradeTitle)
      : commit('REMOVE_UNIQUE_UPGRADE', upgradeTitle)
  },
}