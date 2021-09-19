import { createStore } from 'vuex'

export default createStore({
  state: {
    isAdminLoggedIn: false,
    isAdminRejected: false
  },
  mutations: {
    adminLogin(state) {
      state.isAdminLoggedIn = true
      state.isAdminRejected = false
      console.log('logged In!')
    },
    adminReject(state) {
      state.isAdminRejected = true
    }
  },
  actions: {
    validateAdminCredentials({commit}, username, password) {
      console.log(password)
      if(username == 'apo') {
        console.log('loggedin')
        commit('adminLogin')
      } else {
        console.log('rejected')
        commit('adminReject')
      }
    } 
  },
  getters: {

  },

  modules: {

  }
})

// States can be accessed directly
// Commit is for accessing the mutations and dispatch is for the actions
// Use the actions for async code, and then trigger the mutations from inside them
