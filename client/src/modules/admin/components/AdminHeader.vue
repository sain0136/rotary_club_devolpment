<template>
  <header-top>
  <div class="nav2">
  	<div class="top-left">
  		<span class="icon fa fa-envelope"></span>info@cornwallrotary.com
  	</div>
  	<div class="top-right">
        <SignInAndOutButton 
          class="link" 
          pageAccessed="Admin"/>
	</div>	
  </div>
  </header-top>
  <nav>
    <ul>
      <li>
        <img class="img-fluid" src="../assets/club-logo.png" />
      </li>
      <li>
        <router-link class="link" to="/admin/home">
          Home</router-link>
      </li>
      <li>
        <router-link class="link" to="/admin/districts/view">
          Administer Districts</router-link>
      </li>
      <li>
        <router-link class="link" to="/admin/district-admins/view"
          >Manage District Admins</router-link>
      </li>
      <li>
        <SignInAndOutButton 
          class="link" 
          pageAccessed="Admin"/>
      </li>
    </ul>
  </nav>
</template>

<script>

import SignInAndOutButton from '../../../components/common/SignInAndOutButton.vue'

import store from "../../../store/index";

export default {
  name: "AdminHeader",
  components: {
    SignInAndOutButton
  },
  methods: {
    logout() {
      store.dispatch("logout", 0);
      this.$router.push("/adminlogin");
    },
  },
};
</script>

<style scoped>
img {
  height: 100px;
}
nav {
    background-color: #ffffff;
  	box-shadow: 0px 2px 4px 0 rgba(0,0,0,.2);
}
header-top .nav2 {    
	position: relative;
  	margin-left: auto;
  	margin-right: auto;
	height: 40px;
	padding: 10px 100px;
    background-color: #ffb607;
}
.nav2 .top-left {
    position: relative;
    float: left;
}
.nav2 .top-right {
    position: relative;
    float: right;
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
  font-family: "Montserrat";
  transition: color 0.5s;
  color: #B1D0E0;
  font-size: 20px;
  font-weight: 400;
}

.link:hover {
  color: #1A374D;
  transition: color 0.5s;
}

.logout {
  background-color: #406882;
  border: none;
  /* position: fixed;
  top: 4.5%;
  left: 80%; */
  margin-left: 200px;
}

.social-icon {
  color: #B1D0E0;
  font-size: 22px;
}

.social-icon:hover {
  opacity: 0.5;
  transition: opacity 200ms;
}

</style>
