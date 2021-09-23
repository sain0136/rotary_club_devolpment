<template>
  <nav>
    <ul>
      <li><h1>District: {{ this.districtName }}</h1>  </li>
      <li><router-link class="link" to="home">Home</router-link></li>
      <li><router-link class="link" to="about">About</router-link></li>
      <li><router-link class="link" to="clubs">Clubs</router-link></li>
      <li><router-link class="link" to="contactus">Contact Us</router-link></li>
      <li><router-link class="link" to="login">Login</router-link></li>
      
      <li><a class="link" id="logout">Logout</a></li>

      <li v-if="$store.state.isDistrictAdminLoggedIn"><router-link class="link" to="newclub">New Club</router-link></li>
      <li v-if="$store.state.isDistrictAdminLoggedIn"><router-link class="link" to="clubs">View Clubs</router-link></li>

      <li class="search-button"><font-awesome-icon icon="search" /></li>
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

img {
  height: 100px;
}

nav {
  background-color: white;
  height: 8%;
}

ul {
  list-style-type: none;
  margin-left: 200px;
  padding: 0;
}

li {
  display: inline;
  margin-right: 40px;
}

.link {
  text-decoration: none;
  color: black;
  font-family: 'Montserrat';
  font-size: 16px;
  transition: color 0.5s;
}

.link:hover {
  color: #ffb607;
  transition: color 0.5s;
}

/* #logout {
  margin-right: 50px;
} */

#logout:hover {
  cursor: pointer;
}


</style>