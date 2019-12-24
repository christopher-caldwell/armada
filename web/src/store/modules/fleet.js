export default {
  namespaced: true,
  state: {
    numberOfFleetNotifications: 0,
    totalPoints: 0,
    fleetName: ''
  },
  getters: {
    totalPoints(state){
      return state.totalPoints
    },
    numberOfFleetNotifications(state){
      return state.numberOfFleetNotifications
    },
  },
  actions: {
    updateFleetPoints({ commit, state }, { shipPoints, action }){

      const newPointTotal = action === 'add'
      ? state.totalPoints + shipPoints
      : state.totalPoints - shipPoints
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
    }
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
    }
  }
}