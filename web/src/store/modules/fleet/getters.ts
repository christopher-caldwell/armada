// profile/getters.ts
import { GetterTree } from 'vuex'
import { SessionState } from './types'
import { RootState } from '../types'

export const getters: GetterTree<SessionState, RootState> = {
  totalPoints(state){
    return state.totalPoints
  },
  numberOfFleetNotifications(state){
    return state.numberOfFleetNotifications
  },
  hasCommanderBeenChosen(state){
    return state.hasCommanderBeenChosen
  },
  targetShip(state){
    return state.targetShip
  },
  unavailableUniqueUpgrades(state){
    return state.unavailableUniqueUpgrades
  }
}