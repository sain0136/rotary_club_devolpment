import { createStore } from 'vuex'
import createPersistedState from "vuex-persistedstate";

import social_links from '../../../api-factory/social_links'

export default createStore({
  state: {
    clubData: {},
    clubSocials: []
  },
  mutations: {
    changeClubSocials(state, clubSocialsArray) {
      state.clubSocials = clubSocialsArray
    }
  },
  actions: {
    async changeClubSocials({commit}, queryObject) {
      const clubSocialsArray = await social_links.index(queryObject)
      commit('changeClubSocials', clubSocialsArray)
    },
  },
  plugins: [createPersistedState()]
})