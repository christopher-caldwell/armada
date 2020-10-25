import { MutationTree } from 'vuex'
import { SessionState } from './types'

export const mutations: MutationTree<SessionState> = {
  UPDATE_TOTAL_POINTS(state, newTotalPoints) {
    state.totalPoints = newTotalPoints
  },
  ADD_TO_NUMBER_OF_FlEET_NOTIFICATIONS(state) {
    state.numberOfFleetNotifications++
  },
  CLEAR_FlEET_NOTIFICATIONS(state) {
    state.numberOfFleetNotifications = 0
  },
  UPDATE_FLEET_NAME(state, fleetName) {
    state.fleetName = fleetName
  },
  UPDATE_COMMANDER_STATUS(state) {
    state.hasCommanderBeenChosen = !state.hasCommanderBeenChosen
  },
  UPDATE_FACTION(state, chosenFaction) {
    state.chosenFaction = chosenFaction
  },
  UPDATE_TARGET_SHIP(state, targetShip) {
    state.targetShip = targetShip
  },
  ADD_UNIQUE_UPGRADE(state, upgradeTitle) {
    state.unavailableUniqueUpgrades[upgradeTitle] = true
  },
  REMOVE_UNIQUE_UPGRADE(state, upgradeTitle) {
    delete state.unavailableUniqueUpgrades[upgradeTitle]
  }
}