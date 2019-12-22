export default {
  namespaced: true,
  state: {
    level: null,
    timeToComplete: null,
    accuracyPercentage: null
  },
  actions: {
    updateMostRecentGameSummary({ commit }, gameStats){
      commit('UPDATE_GAME_STATS', gameStats)
    }
  },
  mutations: {
    UPDATE_GAME_STATS(state, gameStats){
      // sets the state value with whatever was passed into game stats
      Object.keys(gameStats).forEach(stat => {
        state[stat] = gameStats[stat]
      })
    }
  }
}