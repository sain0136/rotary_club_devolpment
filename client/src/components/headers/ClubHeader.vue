<template>
  <nav>
    <ul>
      <li><img class="logo" src="../../assets/club-logo.png"></li>
      <li><router-link class="link" to="home">Home</router-link></li>
      <li><router-link class="link" to="/club/about">About</router-link></li>
      <li><router-link class="link" to="/club/projects">Projects</router-link></li>
      <li><router-link class="link" to="/club/contactus">Contact Us</router-link></li>

      <li v-if="$store.state.isLoggedIn"><router-link class="link" to="/club/contactus">Admin</router-link></li>

      <li class="search-button"><font-awesome-icon icon="search" /></li>
      <li> <DonateButton/> </li>
  </ul>
  </nav>
</template>

<script>

import DonateButton from '../DonateButton.vue'

export default {
  name: 'ClubHeader',
  components: {
    DonateButton
  },
  data() {
    return {
      isLoggedIn: Boolean
    }
  },
  created() {
    this.isLoggedIn = false
  }
}

</script>

<style scoped>

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

.logo {
  height: 100px;
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

.search-button {
  margin-left: 200px;
}

</style>