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
      dispatch('fleet/updateFleetPoints', { shipPoints, action: 'add'}, {root: true})
      dispatch('fleet/addToFleetNotifications', {}, {root: true})
    },
    removeShipFromFleet({ commit, dispatch, state }, { idOfShipToBeRemoved, shipPoints}){
      const newShips = state.ships.filter(ship => ship.id !== idOfShipToBeRemoved)
      dispatch('fleet/updateFleetPoints',  { shipPoints, action: 'subtract' }, {root: true})
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
