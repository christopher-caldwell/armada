import { Module } from 'vuex'
import { getters } from './getters'
import { actions } from './actions'
import { mutations } from './mutations'
import { SessionState } from './types'
import { RootState } from '../types'

export const fleet: Module<SessionState, RootState> = {
  namespaced: true,
  state: {
    numberOfFleetNotifications: 0,
    totalPoints: 0,
    fleetName: '',
    hasCommanderBeenChosen: false,
    chosenFaction: 'imperial',
    targetShip: null,
    unavailableUniqueUpgrades: {}
  },
  getters,
  actions,
  mutations,
}
