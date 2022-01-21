import { createStore } from 'vuex'
import createPersistedState from "vuex-persistedstate";

import { isSiteAdminValid } from './authentication-calls';
import { isUserValid } from './authentication-calls'
import { isValid } from './authentication-calls'

import district from '../api-factory/district'
import club from '../api-factory/club'
import project from '../api-factory/project'
import social_links from '../api-factory/social_links'

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
    
    loggedInDistrictId: Number,
    loggedInClubUserId: Number,

    currentDistrictData: Object,
    currentClubData: Object,
    currentProjectData: Object,
    
    clubSocials: [],
  },
  mutations: {
    adminLogin(state, loginData) {

      const roleId = loginData.roleId

      switch(roleId) {
        //Site Admin
        case 0: 
          state.isSiteAdminLoggedIn = true
          state.isSiteAdminRejected = false
          window.location.replace('/admin/home')
        break
        //District Admin
        case 1:
          state.isDistrictAdminLoggedIn = true
          state.isDistrictAdminRejected = false
          state.loggedInDistrictId = loginData.districtId
        break
        //Club Admin
        case 5:
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
        case 5: 
        state.isClubAdminRejected = true
        break
      }
    },

    clubUserLogin(state, userId) {
      state.isClubUserLoggedIn = true
      state.isClubUserRejected = false
      state.loggedInClubUserId = userId
      console.log('logged in as: ', state.loggedInClubUserId)
    },
    clubUserReject(state, userId) {
      state.isClubUserRejected = true
    },
    logout(state, roleIdToLogOut) {
      switch(roleIdToLogOut) {
        case 0: 
          state.isSiteAdminLoggedIn = false
        break
        case 1: 
          state.isDistrictAdminLoggedIn = false
          state.loggedInDistrictId = Number
        break
        case 5:
          state.isClubAdminLoggedIn = false
        break
        case 7:
          state.isClubUserLoggedIn = false
      }
    },

    changeCurrentDistrictData(state, districtData) {
      state.currentDistrictData = districtData
    },

    changeCurrentClubData(state, clubData) {
      state.currentClubData = clubData
    },

    changeCurrentProjectData(state, projectData) {
      state.currentProjectData = projectData
    },

    changeClubSocials(state, clubSocialsArray) {
      state.clubSocials = clubSocialsArray
    },
  
  },
  actions: {
    async validateAdminCredentials({commit}, data) { //Also for the regular user
      let userId = data.userId
      let password = data.password
      let roleId = data.roleId

      switch(roleId) {
        case 0:
          if(await isSiteAdminValid(userId, password)) {
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
        case 5:
          if(await isUserValid(userId, password)) {
            commit('adminLogin', 5)
          } else {
            commit('adminReject', 5)
          } 
          break
        case 7:
          if(await isUserValid(userId, password)) {
            commit('clubUserLogin', userId)
          } else {
            commit('clubUserReject', userId)
          }
      }
    },

    async validateDistrictAdmin({commit}, data) {

      const loginData = {
        districtId: data.id,
        roleId: 1
      }

      if(await isValid(data)) {
        commit('adminLogin', loginData)
        console.log('valid')
      } else {
        commit('adminReject', 1)
      }
    },

  
    logout({commit}, roleIdToLogOut) {
      commit('logout', roleIdToLogOut)
    },
    async changeCurrentDistrictData({commit}, districtId) {
      // const districtData = await fetchDistrictDataById(districtId)
      const districtData = await district.show(districtId)
      commit('changeCurrentDistrictData', districtData)
    },
    async changeCurrentClubData({commit}, clubId) {
      // const clubData = await fetchClubDataById(clubId)
      const clubData = await club.show(clubId)
      commit('changeCurrentClubData', clubData)
    },
    async changeCurrentProjectData({commit}, projectId) {
      // const projectData = await fetchProjectDataById(projectId)
      const projectData = await project.show(projectId)
      commit('changeCurrentProjectData', projectData)
    },

    async changeClubSocials({commit}, queryObject) {
      const clubSocialsArray = await social_links.index(queryObject)
      commit('changeClubSocials', clubSocialsArray)
    },

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
