import { createStore } from 'vuex'
import createPersistedState from "vuex-persistedstate";

import { isUserValid } from './credentials'

export default createStore({
  state: {
    isSiteAdminLoggedIn: false,
    isSiteAdminRejected: false,

    isDistrictAdminLoggedIn: false,
    isDistrictAdminRejected: false,

    isClubAdminLoggedIn: false,
    isClubAdminRejected: false,

    isClubUserLoggedIn: false,
    isClubUserRejected: false,
    loggedInClubUserId: 0,

    currentDistrictId: 80,

    currentClubId: Number,

    currentProjectId: Number,

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
        case 2:
          state.isClubAdminLoggedIn = true
          state.isClubAdminRejected = false
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
        case 2: 
        state.isClubAdminRejected = true
        break
      }
    },

    clubUserLogin(state, userId) {
      state.isClubUserLoggedIn = true
      state.isClubUserRejected = false
      state.loggedInClubUserId = userId
    },
    clubUserReject(state, userId) {
      state.isClubUserRejected = true
    },

    changeCurrentDistrict(state, districtId) {
      state.currentDistrictId = districtId
      console.log(state.currentDistrictId)
    },
    changeCurrentClub(state, clubId) {
      state.currentClubId = clubId
    },
    changeCurrentProject(state, projectId) {
      state.currentProjectId = projectId
    },
    changeCurrentUserIdToEdit(state, userId) {
      state.currentUserIdToEdit = userId
    },
    logout(state, roleIdToLogOut) {
      switch(roleIdToLogOut) {
        case 0: 
        state.isSiteAdminLoggedIn = false
        break
        case 1: 
        state.isDistrictAdminLoggedIn = false
        break
        case 2:
        state.isClubAdminLoggedIn = false
        break
        case 3:
        state.isClubUserLoggedIn = false
      }
    }
  },
  actions: {
    async validateAdminCredentials({commit}, data) { //Also for the regular user
      let userId = data.userId
      let password = data.password
      let roleId = data.roleId

      switch(roleId) {
        case 0:
          if(isUserValid(userId, password)) {
            commit('adminLogin', 0)
          } else {
            commit('adminReject', 0)
          }
          break
        case 1:
          if(await isUserValid(userId, password)) {
            commit('adminLogin', 1)
            console.log('valid')
          } else {
            commit('adminReject', 1)
            console.log('hero')
          }
          break
        case 2:
          if(await isUserValid(userId, password)) {
            commit('adminLogin', 2)
          } else {
            commit('adminReject', 2)
          } 
          break
        case 3:
          if(await isUserValid(userId, password)) {
            commit('clubUserLogin', userId)
          }
      }
    },
    changeCurrentDistrict({commit}, districtId) {
      commit('changeCurrentDistrict', districtId)
    },
    changeCurrentClub({commit}, clubId) {
      commit('changeCurrentClub', clubId)
    },  
    changeCurrentProject({commit}, projectId) {
      commit('changeCurrentProject', projectId)
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
