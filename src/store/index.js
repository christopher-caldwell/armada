import Vue from 'vue'
import Vuex from 'vuex'

import gameSettings from '@/store/modules/gameSettings'
import gameSummary from '@/store/modules/gameSummary'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    gameSettings,
    gameSummary
  }
})
