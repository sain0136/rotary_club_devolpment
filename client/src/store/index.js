import { createStore } from 'vuex'
import createPersistedState from "vuex-persistedstate";

export default createStore({
  state: {
    isSiteAdminLoggedIn: false,
    isSiteAdminRejected: false,

    isDistrictAdminLoggedIn: false,
    isDistrictAdminRejected: false,

    currentDistrictId: Number
  },
  mutations: {
    adminLogin(state, roleId) {
      switch(roleId) {
        case 0: 
          state.isSiteAdminLoggedIn = true
          state.isSiteAdminRejected = false
        break
        case 1:
          state.isDistrictAdminLoggedIn = true
          state.isDistrictAdminRejected = false
        break
      }
    },
    adminReject(state, roleId) {
      switch(roleId) {
        case 0:
          state.isSiteAdminRejected = true
        break
        case 1: 
        state.isDistrictAdminRejected = true
        break
      }
    },
    changeCurrentDistrict(state, districtId) {
      state.currentDistrictId = districtId
    }
  },
  actions: {
    validateAdminCredentials({commit}, data) {
      let username = data.username
      let password = data.password
      let roleId = data.roleId

      switch(roleId) {
        case 0:
          if(username == 'apo' && password == 'apo88') {
            commit('adminLogin', 0)
          } else {
            commit('adminReject', 0)
          }
          break
        case 1:
          if(username == 'dapo' && password == 'dapo88') {
            commit('adminLogin', 1)
          } else {
            commit('adminReject', 1)
          }
          break
      }
    },
    changeCurrentDistrict({commit}, districtId) {
      commit('changeCurrentDistrict', districtId)
    }
  },
  getters: {

  },
  modules: {

  },
  plugins: [createPersistedState()]
})

// States can be accessed directly
// Commit is for accessing the mutations and dispatch is for the actions
// Use the actions for async code, and then trigger the mutations from inside them
