<template>
  <nav>
    <ul>
      <li><img class="logo" src="../assets/club-logo.png"></li>
      <li>
        <router-link class="link" :to="{name: 'ClubHome', params: {id: this.clubId}}">Home</router-link>
      </li>
      <li>
        <router-link class="link" :to="{name: 'ClubAbout', params: {id: this.clubId}}">About</router-link>
      </li>
      <li>
        <div class="dropdown">
          <button class="link dropbtn">Projects</button>
          <div class="dropdown-content">
            <router-link :to="{name: 'ClubProjectsView', params: {id: this.clubId}}">All Projects</router-link>
            <router-link 
              v-if="$store.state.isClubAdminLoggedIn || $store.state.isClubUserLoggedIn"
              :to="{name: 'ProjectCreate', params: {id: this.clubId}}">
              Create Project
            </router-link>
            <router-link 
              v-if="$store.state.isClubAdminLoggedIn || $store.state.isClubUserLoggedIn"
              :to="{name: 'UserProjectsView', params: {id: this.clubId}}">
              Your Projects
            </router-link>
          </div>
        </div>
      </li>
      <li
        v-if="$store.state.isDistrictAdminLoggedIn ||  
              $store.state.isClubAdminLoggedIn || 
              $store.state.isSiteAdminLoggedIn">
        <router-link class="link" :to="{name: 'ClubUsersView', params: {id: this.clubId}}">Users</router-link>
      </li>
      <li>
        <router-link class="link" :to="{name: 'ClubContactUs', params: {id: this.clubId}}">Contact Us</router-link>
      </li>
      <li> 
        <DonateButton/> 
      </li>
  </ul>
  </nav>
</template>

<script>

import DonateButton from '../../../components/ui/DonateButton.vue'
import store from '../../../store/index'

export default {
  name: 'ClubHeader',
  components: {
    DonateButton
  },
  data() {
    return {
      clubId: this.$router.currentRoute.value.params.id
    }
  },
  created() {
    this.clubId = this.$router.currentRoute.value.params.id
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
  font-size: 18px;
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