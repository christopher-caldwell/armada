// profile/getters.ts
import { GetterTree } from 'vuex'
import { ShipState } from './types'
import { RootState } from '../types'

export const getters: GetterTree<ShipState, RootState> = {
  ships(state){
    return state.ships
  },
}