import { createStore } from 'vuex'
import createPersistedState from "vuex-persistedstate";

import { isSiteAdminValid } from './authentication-calls';
import { isValid } from './authentication-calls'

import district from '../api-factory/district'
import club from '../api-factory/club'
import project from '../api-factory/project'
import social_links from '../api-factory/social_links'
import club_user from '../api-factory/club_user'

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
    loggedInClubId: Number,

    loggedInClubUserId: Number,

    currentDistrictData: Object,
    currentClubData: Object,
    currentProjectData: Object,
    currentClubUserData: Object,
    
    districtSocials: [],
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

    async clubUserLogin(state, loginData) {

      state.isClubUserLoggedIn = true
      state.isClubUserRejected = false

      console.log('login data: ', loginData)

      state.loggedInClubUserId = loginData.user_id
      state.currentClubUserData = await club_user.show(loginData.user_id)
      state.loggedInClubId = loginData.club_id

      console.log('here you resting:', state.loggedInClubId)

      if(state.currentClubUserData.role[0].role_type == 5) {
        state.isClubAdminLoggedIn = true
        state.isClubAdminRejected = false
      }
    },

    clubUserReject(state, userId) {
      state.isClubUserRejected = true
    },

    signout(state) {
      state.isSiteAdminLoggedIn = false
      state.isDistrictAdminLoggedIn = false
      state.loggedInDistrictId = Number
      state.isClubAdminLoggedIn = false
      state.isClubUserLoggedIn = false
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

    changeDistrictSocials(state, districtSocialsArray) {
      state.districtSocials = districtSocialsArray
    },

    changeClubSocials(state, clubSocialsArray) {
      state.clubSocials = clubSocialsArray
    },
  
  },
  actions: {

    async validateSiteAdmin({commit}, data) {

      const loginData = {
        roleId: 0
      }

      if(await isSiteAdminValid(data.userId, data.password)) {
        commit('adminLogin', loginData)
      } else {
        commit('adminReject', 0)
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

    async validateClubUser({commit}, data) {

      const loginData = {
        user_id: data.user_id,
        club_id: data.id
      }

      if(await isValid(data)) {
        commit('clubUserLogin', loginData)
      } else {
        commit('clubUserReject', data.user_id)
      }
    },

    async changeCurrentDistrictData({commit}, districtId) {
      const districtData = await district.show(districtId)
      commit('changeCurrentDistrictData', districtData)
    },
    async changeCurrentClubData({commit}, clubId) {
      const clubData = await club.show(clubId)
      commit('changeCurrentClubData', clubData)
    },
    async changeCurrentProjectData({commit}, projectId) {
      const projectData = await project.show(projectId)
      commit('changeCurrentProjectData', projectData)
    },
    async changeDistrictSocials({commit}, queryObject) {
      const districtSocialsArray = await social_links.index(queryObject)
      commit('changeDistrictSocials', districtSocialsArray)
    },
    async changeClubSocials({commit}, queryObject) {
      const clubSocialsArray = await social_links.index(queryObject)
      commit('changeClubSocials', clubSocialsArray)
    },

    signOut({commit}) {
      commit('signout')
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
