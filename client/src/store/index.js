import { createStore } from 'vuex'
import createPersistedState from 'vuex-persistedstate'

import { isSiteAdminValid } from './authentication-calls'
import { isValid } from './authentication-calls'

import district from '../api-factory/district'
import club from '../api-factory/club'
import project from '../api-factory/project'
import social_links from '../api-factory/social_links'
import club_user from '../api-factory/club_user'

export default createStore({

  state: {
    //Global States 
    isSiteAdminLoggedIn: false,
    isSiteAdminRejected: false,

    isDistrictAdminLoggedIn: false,
    isDistrictAdminRejected: false,

    isClubAdminLoggedIn: false,
    isClubAdminRejected: false,

    isClubUserLoggedIn: false,
    isClubUserRejected: false,
    // track current district or club logged in 
    loggedInDistrictId: 0,
    loggedInClubId: Number,
    // important for tracking who is currrently logged in 
    loggedInClubUserId: Number,
    loggedInDistrictUserId: Number,
    //data obect for logged in user 
    currentDistrictData: Object,
    currentClubData: Object,
    //the project focused on for CRUD 
    currentProjectData: Object,
    //deleteable? -poss
    currentClubUsers: Object,
    currentClubUserData: Object,
    // district or club social links
    districtSocials: [],
    clubSocials: [],
  },
  mutations: {
    adminLogin(state, loginData) {
      const roleId = loginData.roleId
      switch (roleId) {
        //Site Admin
        case 0:
          state.isSiteAdminLoggedIn = true
          state.isSiteAdminRejected = false
          window.location.replace(
            '/admin/home',
          )
          break
        //District Admin
        case 1:
          state.isDistrictAdminLoggedIn = true
          state.isDistrictAdminRejected = false
          state.loggedInDistrictId =
            loginData.districtId
          state.loggedInDistrictUserId =
            loginData.adminId
          break
        //Club Admin
        case 5:
          state.isClubAdminLoggedIn = true
          state.isClubAdminRejected = false
          break
      }
    },
    adminReject(state, roleId) {
      switch (roleId) {
        case 0:
          state.isSiteAdminRejected = true
          break
        case 1:
          state.isDistrictAdminRejected = true
          break
        case 5:
          state.isClubAdminRejected = true
          break
        case 10:
          state.isSiteAdminRejected = false
          break
      }
    },
    //mutation for clubuser logging in 
    async clubUserLogin(
      state,
      loginData,
    ) {
      state.isClubUserLoggedIn = true
      state.isClubUserRejected = false

      console.log(
        'login data: ',
        loginData,
      )
      state.loggedInClubUserId =
        loginData.user_id
      state.currentClubUserData = await club_user.show(
        loginData.user_id,
      )
      state.loggedInClubId =
        loginData.club_id

      console.log(
        'here you resting:',
        state.loggedInClubId,
      )

      if (
        state.currentClubUserData
          .role[0].role_type == 5
      ) {
        state.isClubAdminLoggedIn = true
        state.isClubAdminRejected = false
      }
    },
    //district user logging in the will be an admin or titled admin i.e d chair 
    async districtUserLogin(
      state,
      loginData,
    ) {
      state.isDistrictAdminLoggedIn = true
      state.isClubAdminRejected = false

      console.log(
        'login data: ',
        loginData,
      )
    },
    // rejection
    clubUserReject(state) {
      state.isClubUserRejected = true
    },
    //signout
    signout(state) {
      state.isSiteAdminLoggedIn = false
      state.isDistrictAdminLoggedIn = false
      state.loggedInDistrictId = Number
      state.isClubAdminLoggedIn = false
      state.isClubUserLoggedIn = false
      state.currentClubUserData = {}
      state.loggedInDistrictUserId = 0
      state.loggedInClubUserId = 0
    },
    //set district data
    changeCurrentDistrictData(
      state,
      districtData,
    ) {
      state.currentDistrictData = districtData
    },
    //set district data

    changeCurrentClubData(
      state,
      clubData,
    ) {
      state.currentClubData = clubData
    },
    //deleteAble
    changeCurrentClubUsers(
      state,
      clubUsers,
    ) {
      state.currentClubUsers = clubUsers
    },
    //change current project
    changeCurrentProjectData(
      state,
      projectData,
    ) {
      state.currentProjectData = projectData
    },
    //changge socials 
    changeDistrictSocials(
      state,
      districtSocialsArray,
    ) {
      state.districtSocials = districtSocialsArray
    },
    //changge socials 

    changeClubSocials(
      state,
      clubSocialsArray,
    ) {
      state.clubSocials = clubSocialsArray
    },
  },
  actions: {
    async validateSiteReload(
      { commit },
      data,
    ) {
      commit('adminReject', 10)
    },
    //sitr admin 
    async validateSiteAdmin(
      { commit },
      data,
    ) {
      const loginData = {
        roleId: 0,
      }
      if (
        await isSiteAdminValid(
          data.userId,
          data.password,
        )
      ) {
        commit('adminLogin', loginData)
      } else {
        commit('adminReject', 0)
      }
    },
    //District admin 

    async validateDistrictAdmin(
      { commit },
      data,
    ) {
      const loginData = {
        districtId: data.id,
        roleId: 1,
        adminId: 0
      }
      const response = await isValid(data)
      if (response.Verified) {
        loginData.adminId = response.user_id
        commit('adminLogin', loginData)
        console.log('valid')
      } else {
        commit('adminReject', 1)
      }
    },
    //club user 

    async validateClubUser(
      { commit },
      data,
    ) {
      const loginData = {
        user_id: data.user_id,
        club_id: data.id,
      }

      if (await isValid(data)) {
        commit(
          'clubUserLogin',
          loginData,
        )
      } else {
        commit(
          'clubUserReject',
          data.user_id,
        )
      }
    },
    //change actions
    async changeCurrentDistrictData(
      { commit },
      districtId,
    ) {
      const districtData = await district.show(
        districtId,
      )
      commit(
        'changeCurrentDistrictData',
        districtData,
      )
    },
    //change actions

    async changeCurrentClubData(
      { commit },
      clubId,
    ) {
      const clubData = await club.show(
        clubId,
      )
      commit(
        'changeCurrentClubData',
        clubData,
      )
    },
    //change actions deleteable?

    async changeCurrentClubUsers(
      { commit },
      clubId,
    ) {
      const clubUsers = await club_user.index(
        clubId,
      )
      commit(
        'changeCurrentClubUsers',
        clubUsers,
      )
    },
    //change actions

    async changeCurrentProjectData(
      { commit },
      projectId,
    ) {
      const projectData = await project.show(
        projectId,
      )
      commit(
        'changeCurrentProjectData',
        projectData,
      )
    },
    //change actions

    async unsetCurrentProjectData(
      { commit },
    ) {
      commit(
        'changeCurrentProjectData',
        {},
      )
    },
    //change actions

    async changeDistrictSocials(
      { commit },
      queryObject,
    ) {
      const districtSocialsArray = await social_links.index(
        queryObject,
      )
      commit(
        'changeDistrictSocials',
        districtSocialsArray,
      )
    },
    //change actions

    async changeClubSocials(
      { commit },
      queryObject,
    ) {
      const clubSocialsArray = await social_links.index(
        queryObject,
      )
      commit(
        'changeClubSocials',
        clubSocialsArray,
      )
    },

    signOut({ commit }) {
      commit('signout')
    },
  },
  getters: {
    getLogged(state) {
      return state.loggedInDistrictId
    }

  },
  modules: {},
  plugins: [createPersistedState()],
})

// States can be accessed directly
// Commit is for accessing the mutations and dispatch is for the actions
// Use the actions for async code, and then trigger the mutations from inside them
