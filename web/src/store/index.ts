import Vue from 'vue'
import Vuex from 'vuex'

import { ships } from '@/store/modules/ships'
import { fleet } from '@/store/modules/fleet'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    ships,
    fleet
  }
})
