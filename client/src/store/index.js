import { createStore } from 'vuex'

export default createStore({
  state: {
    isLoggedIn: false
  },
  mutations: {
    login(state, isValidCredentials) {
      if(isValidCredentials) {
        state.isLoggedIn = true
        console.log('logged In!')
      }
    }
  },
  actions: {
    login({commit}, isValidCredentials) {
      commit('login', isValidCredentials)
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
