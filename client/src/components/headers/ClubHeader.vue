<template>
  <nav>
    <ul>
      <li><img class="logo" src="../../assets/club-logo.png"></li>
      <li><router-link class="link" to="home">Home</router-link></li>
      <li><router-link class="link" to="/club/about">About</router-link></li>
      <li>
        <div class="dropdown">
          <button class="link dropbtn">Projects</button>
          <div class="dropdown-content">
            <router-link to="/club/projects">All Projects</router-link>
            <router-link 
              v-if="$store.state.isClubAdminLoggedIn || $store.state.isClubUserLoggedIn"
              to="/club/createproject">
              Create Project
            </router-link>
            <router-link 
              v-if="$store.state.isClubAdminLoggedIn || $store.state.isClubUserLoggedIn"
              to="/club/userprojects">
              Your Projects
            </router-link>
          </div>
        </div>
      </li>
      <li
        v-if="$store.state.isClubAdminLoggedIn || $store.state.isSiteAdminLoggedIn">
        <router-link class="link" to="/club/users">Users</router-link>
      </li>
      <li><router-link class="link" to="/club/contactus">Contact Us</router-link></li>
      

      <li v-if="$store.state.isLoggedIn"><router-link class="link" to="/club/contactus">Admin</router-link></li>

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


.dropbtn {
  background-color: #ffff;
  color: black;
  font-family: 'Montserrat';
  padding: 16px;
  font-size: 16px;
  border: none;
}

/* The container <div> - needed to position the dropdown content */
.dropdown {
  position: relative;
  display: inline-block;
}

/* Dropdown Content (Hidden by Default) */
.dropdown-content {
  display: none;
  position: absolute;
  background-color: #f1f1f1;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
  z-index: 1;
}

/* Links inside the dropdown */
.dropdown-content a {
  color: black;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
}

/* Change color of dropdown links on hover */
.dropdown-content a:hover {background-color: #ddd;}

/* Show the dropdown menu on hover */
.dropdown:hover .dropdown-content {
  display: block;
  /* transition: display 1s; */
}

/* Change the background color of the dropdown button when the dropdown content is shown */
/* .dropdown:hover .dropbtn {background-color: #3e8e41;} */

</style>