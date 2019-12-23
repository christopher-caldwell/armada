export default {
  namespaced: true,
  state: {
    ships: []
  },
  getters: {
    ships(state){
      return state.ships
    }
  },
  actions: {
    addShipToFleet({ commit, dispatch }, shipToBeAdded){
      const shipPoints = shipToBeAdded.points
      commit('ADD_SHIP_TO_FLEET', shipToBeAdded)
      dispatch('fleet/updateFleetPoints', shipPoints , {root: true})
      dispatch('fleet/addToFleetNotifications', {}, {root: true})
    },
    removeShipFromFleet({ commit, dispatch, state }, idOfShipToBeRemoved){
      const newShips = state.ships.filter(ship => ship.id !== idOfShipToBeRemoved)
      dispatch('fleet/updateFleetPoints', shipPoints , {root: true})
      commit('SET_NEW_SHIPS', newShips)
    },
  },
  mutations: {
    ADD_SHIP_TO_FLEET(state, newShipToBeAdded){
      state.ships.push(newShipToBeAdded)
    },
    SET_NEW_SHIPS(state, newShips){
      state.ships = newShips
    }
  }
}
