export default {
  namespaced: true,
  state: {
    numberOfFleetNotifications: 0,
    totalPoints: 0,
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
    updateFleetPoints({ commit, state }, incomingPoints){
      const newPointTotal = state.totalPoints + incomingPoints
      commit('UPDATE_TOTAL_POINTS', newPointTotal)
    },
    addToFleetNotifications({ commit }){
      commit('ADD_TO_NUMBER_OF_FlEET_NOTIFICATIONS')
    },
    clearFleetNotifications({ commit }){
      commit('CLEAR_FlEET_NOTIFICATIONS')
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
    }
  }
}