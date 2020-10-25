import { Module } from 'vuex'
import { getters } from './getters'
import { actions } from './actions'
import { mutations } from './mutations'
import { ShipState } from './types'
import { RootState } from '../types'


export const ships: Module<ShipState, RootState> = {
  namespaced: true,
  state: {
    ships: {}
  },
  getters,
  actions,
  mutations
}
