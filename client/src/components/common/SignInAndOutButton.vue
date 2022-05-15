<template>
  <button 
    v-if="isAnybodyLoggedIn"
    @click="redirect(true)">
    Sign Out
    <span>Hi your are signed in as the Website{{pageAccessed}}</span>
  </button>
  <button 
    v-else
    @click="redirect(false)">
    Sign In
  </button>
</template>

<script>

import store from '../../store/index'

export default {
  name: 'SignInAndOutButton',
  props: {
    pageAccessed: String,
    districtId: String,
  },
  computed: {
    isAnybodyLoggedIn() {
      if(store.state.isSiteAdminLoggedIn ||
         store.state.isDistrictAdminLoggedIn ||
         store.state.isClubAdminLoggedIn ||
         store.state.isClubUserLoggedIn) {
         return true
      }
      return false
    }
  },
  methods: {
    redirect(isAlsoSignOut) {
      if(isAlsoSignOut) {
        store.dispatch('signOut')
      }
      
      if(this.pageAccessed == 'Admin') {
        this.$router.push("/adminlogin")

      } else if(this.pageAccessed == 'District') {
        console
        this.$router.push(`/district/${this.districtId}/login`)

      } else if(this.pageAccessed == 'Club') {
        this.$router.push(`/club/${this.$router.currentRoute.value.params.id}/login`)
      }
    }
  }
}
</script>

<style scoped>

button {
  border: none;
  background-color: transparent;
  font-family: 'Montserrat', sans-serif;
  font-size: 18px;
}

button:hover {
  color: #ffb607;
  transition: color 0.5s;
}
span {
  font-size: .8rem;
  display: block;
}

</style>