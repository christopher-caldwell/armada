export default {
  namespaced: true,
  state: {
    goalSeconds: null,
    isGameRunning: false,
    isRandomizingOrder: false,
    maxNumberOfWords: null
  },
  getters: {
    settings(state){
      return {
        isRandomizingOrder: state.isRandomizingOrder,
        goalSeconds: state.goalSeconds,
        maxNumberOfWords: state.maxNumberOfWords
      }
    },
    gameStatus(state){
      return state.isGameRunning
    }
  },
  actions: {
    updateGameSettings({ commit }, newGameSettings){
      commit('UPDATE_GAME_SETTINGS', newGameSettings)
    },
    toggleGameStatus({ commit }, newGameStatus){
      commit('UPDATE_GAME_STATUS', newGameStatus)

    }
  },
  mutations: {
    UPDATE_GAME_SETTINGS(state, newGameSettings){
      const { isRandomizingOrder, goalSeconds, maxNumberOfWords } = newGameSettings
      state.isRandomizingOrder = isRandomizingOrder
      state.goalSeconds = goalSeconds
      state.maxNumberOfWords = maxNumberOfWords
    },
    UPDATE_GAME_STATUS(state, newGameStatus){
      state.isGameRunning = newGameStatus
    }
  }
}
