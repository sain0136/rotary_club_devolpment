import { createStore } from 'vuex'
import createPersistedState from "vuex-persistedstate";

import { getAdminsOfEachDistrict } from './credentials'

export default createStore({
  state: {
    isSiteAdminLoggedIn: false,
    isSiteAdminRejected: false,

    isDistrictAdminLoggedIn: false,
    isDistrictAdminRejected: false,

    currentDistrictId: 80,

    currentClubId: Number,

    currentUserIdToEdit: Number
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
      console.log(state.currentDistrictId)
    },
    changeCurrentClub(state, clubId) {
      state.currentClubId = clubId
    },
    changeCurrentUserIdToEdit(state, userId) {
      state.currentUserIdToEdit = userId
    },
    logout(state, roleIdToLogOut) {
      switch(roleIdToLogOut) {
        case 0: state.isSiteAdminLoggedIn = false; break
        case 1: state.isDistrictAdminLoggedIn = false; break
      }
    }
  },
  actions: {
    async validateAdminCredentials({commit}, data) {
      let username = data.username
      let password = data.password
      let roleId = data.roleId

      console.log(await getAdminsOfEachDistrict())
      
      // const districtsIncludingAdmins = await getAdminsOfEachDistrict() 
      //If the application grows

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
    },
    changeCurrentClub({commit}, clubId) {
      commit('changeCurrentClub', clubId)
    },  
    changeCurrentUserIdToEdit({commit}, userId) {
      commit('changeCurrentUserIdToEdit', userId)
    },
    logout({commit}, roleIdToLogOut) {
      commit('logout', roleIdToLogOut)
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
