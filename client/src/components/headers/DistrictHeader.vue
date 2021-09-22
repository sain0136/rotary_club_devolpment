<template>
  <nav>
    <ul>
      <li><h1>District: {{ this.districtName }}</h1>  </li>
      <li><router-link class="link" to="home">Home</router-link></li>
      <li><router-link class="link" to="about">About</router-link></li>
      <li><router-link class="link" to="clubs">Clubs</router-link></li>
      <li><router-link class="link" to="contactus">Contact Us</router-link></li>
      <li><router-link class="link" to="login">Login</router-link></li>

      <li v-if="$store.state.isDistrictAdminLoggedIn"><router-link class="link" to="/club/contactus">Admin</router-link></li>

      <li class="search-button"><font-awesome-icon icon="search" /></li>
      <li> <DonateButton/> </li>
  </ul>
  </nav>  
</template>

<script>

import store from '../../store/index'

export default {
  name: "DistrictHeader",
  data() {
    return {
      districtName: store.state.currentDistrictId
    }
  },
  async created() {
    const res = await fetch(`/api/districts/${store.state.currentDistrictId}`, { method: 'GET'})
    const data = await res.json()
    this.districtName = data.name
    console.log('District name: ', this.districtName)
  }
}
</script>

<style>

nav {
  text-align: center;
}

</style>