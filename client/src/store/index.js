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
  // States can be accessed directly
  // Commit is for accessing the mutations and dispatch is for the actions
  // Use the actions for async code, and then trigger the mutations from inside them

  state: {
    //Global States of logged in behavoir
    isSiteAdminLoggedIn: false,
    isSiteAdminRejected: false,

    isDistrictAdminLoggedIn: false,
    isDistrictAdminRejected: false,

    isClubAdminLoggedIn: false,
    isClubAdminRejected: false,

    isClubUserLoggedIn: false,
    isClubUserRejected: false,
    // track current district or club logged in
    loggedInDistrictId: Number,
    loggedInClubId: Number,
    // important for tracking who is currrently logged in
    loggedInClubUserId: Number,
    loggedInDistrictUserId: Number,
    //store current user login infromation
    loggedInUserData: {},
    //data obect for logged district or club
    currentDistrictData: {},
    currentClubData: {
      club_name: '',
    },
    //the project focused on for CRUD
    currentProjectData: {},
    //deleteable? -poss
    currentClubUsers: {},
    currentClubUserData: {},
    // district or club social links
    districtSocials: [],
    clubSocials: [],
  },
  mutations: {
    //succeful at log in
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
          state.loggedInUserData =
            loginData.adminData
          break
        //Club Admin
        case 5:
          state.isClubAdminLoggedIn = true
          state.isClubAdminRejected = false
          break
        //Club user
        case 7:
          state.isClubUserLoggedIn = true
          state.isClubUserRejected = false
          break
      }
    },
    //fail at  log in
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
        case 7:
          state.isClubUserRejected = true
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
      if (loginData.roleId == 5) {
        state.isClubAdminLoggedIn = true
        state.isClubAdminRejected = false
      } else {
        state.isClubUserLoggedIn = true
        state.isClubUserRejected = false
      }
      console.log(
        'login data: ',
        loginData,
      )
      state.loggedInClubUserId =
        loginData.userOrAdminId
      state.currentClubUserData = await club_user.show(
        loginData.userOrAdminId,
      )
      state.loggedInClubId =
        state.currentClubUserData.club_id

      console.log(
        'here you resting:',
        state.loggedInClubId,
      )
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
      state.isClubAdminLoggedIn = false
      state.isClubUserLoggedIn = false
      state.isClubUserRejected = false
      state.isClubAdminRejected = false

      state.loggedInDistrictId = Number
      state.loggedInClubId = Number

      state.loggedInDistrictUserId = Number
      state.loggedInClubUserId = Number

      state.loggedInUserData = {}
      state.currentClubUserData = {}
    },
    //set district data
    changeCurrentDistrictData(
      state,
      districtData,
    ) {
      state.currentDistrictData = districtData
    },
    //set club data
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
    //change socials
    changeDistrictSocials(
      state,
      districtSocialsArray,
    ) {
      state.districtSocials = districtSocialsArray
    },
    //change socials
    changeClubSocials(
      state,
      clubSocialsArray,
    ) {
      state.clubSocials = clubSocialsArray
    },
    changeCurrentUserData(
      state,
      userData,
    ) {
      state.loggedInUserData = userData
    },
  },
  actions: {
    /*     ///reload d
    async validateSiteReload(
      { commit },
      data,
    ) {
      commit('adminReject', 10)
    }, */

    //site admin login validation
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
    //District admin login validation
    async validateDistrictAdmin(
      { commit },
      data,
    ) {
      const loginData = {
        districtId: data.id,
        roleId: 1,
        adminId: 0,
        adminData: {},
      }
      const response = await isValid(
        data,
      )
      if (response.Verified) {
        loginData.adminId =
          response.user_id
        loginData.adminData = await club_user.show(
          loginData.adminId,
        )
        commit('adminLogin', loginData)
        console.log('valid')
      } else {
        commit('adminReject', 1)
      }
    },
    //club user\ admin login validation
    async validateClubUser(
      { commit },
      data,
    ) {
      const loginData = {
        clubId: data.id,
        roleId: 0,
        userOrAdminId: 0,
      }
      const response = await isValid(
        data,
      )
      if (response.Verified) {
        loginData.userOrAdminId =
          response.user_id
        loginData.roleId =
          response.role[0].role_type
        commit(
          'clubUserLogin',
          loginData,
        )
        return true
      } else {
        commit('adminReject', 5)
        commit('adminReject', 7)
      }
    },
    //change CurrentDistrictData
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
    //change actions changeCurrentProjectData

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
    //change actions unsetProjectData

    async unsetCurrentProjectData({
      commit,
    }) {
      commit(
        'changeCurrentProjectData',
        {},
      )
    },
    //change actions for socials

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
    //change actions for club socials

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
    //signout
    signOut({ commit }) {
      commit('signout')
    },
  },
  getters: {},
  modules: {},
  plugins: [createPersistedState()],
})
