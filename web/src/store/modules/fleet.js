export default {
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
  getters: {
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
  },
  actions: {
    updateFleetPoints({ commit, state }, { points, action }){
      const newPointTotal = action === 'add'
      ? state.totalPoints + points
      : state.totalPoints - points
      commit('UPDATE_TOTAL_POINTS', newPointTotal)
    },
    addToFleetNotifications({ commit }){
      commit('ADD_TO_NUMBER_OF_FlEET_NOTIFICATIONS')
    },
    clearFleetNotifications({ commit }){
      commit('CLEAR_FlEET_NOTIFICATIONS')
    },
    updateFleetName({ commit }, fleetName){
      commit('UPDATE_FLEET_NAME', fleetName)
    },
    updateFaction({ commit }, factionName){
     commit('UPDATE_FACTION', factionName) 
    },
    updateCommanderStatus({ commit }){
     commit('UPDATE_COMMANDER_STATUS') 
    },
    updateTargetShip({ commit }, targetShip){
     commit('UPDATE_TARGET_SHIP', targetShip) 
    },
    trackUniqueUpgrades({ commit }, { upgradeTitle, action }){
      action === 'add'
      ? commit('ADD_UNIQUE_UPGRADE', upgradeTitle)
      : commit('REMOVE_UNIQUE_UPGRADE', upgradeTitle)
    },
  },
  mutations: {
    UPDATE_TOTAL_POINTS(state, newTotalPoints){
      state.totalPoints = newTotalPoints
    },
    ADD_TO_NUMBER_OF_FlEET_NOTIFICATIONS(state){
      state.numberOfFleetNotifications++
    },
    CLEAR_FlEET_NOTIFICATIONS(state){
      state.numberOfFleetNotifications = 0
    },
    UPDATE_FLEET_NAME(state, fleetName){
      state.fleetName = fleetName
    },
    UPDATE_COMMANDER_STATUS(state){
      state.hasCommanderBeenChosen = !state.hasCommanderBeenChosen
    },
    UPDATE_FACTION(state, chosenFaction){
      state.chosenFaction = chosenFaction
    },
    UPDATE_TARGET_SHIP(state, targetShip){
      state.targetShip = targetShip
    },
    ADD_UNIQUE_UPGRADE(state, upgradeTitle){
      state.unavailableUniqueUpgrades[upgradeTitle] = true
    },
    REMOVE_UNIQUE_UPGRADE(state, upgradeTitle){
      delete state.unavailableUniqueUpgrades[upgradeTitle]
    }
  }
}