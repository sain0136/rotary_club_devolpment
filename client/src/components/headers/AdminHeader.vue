<template>
  <nav
    class="navbar navbar-expand-lg navbar-dark  justify-content-center px-0 py-3 flex-sm-column"
  >
    <ul class="nav ">
      <li class="nav-item">
        <img class="img-fluid" src="../../assets/Rotary_Admin.png" />
      </li>
      <li class="nav-item">
        <router-link class="link" to="/admin/viewdistricts">
          Administer Districts</router-link
        >
      </li>
      <li class="nav-item">
        <router-link class="link" to="/admin/viewdistrictadmins"
          >Manage District Admins</router-link
        >
      </li>
      <!--      <li>
        <router-link class="link" to="/admin/viewclubs">View Clubs</router-link>
      </li> -->
      <li v-if="$store.state.isSiteAdminLoggedIn" class="nav-item">
        <button class="link" @click="logout">Logout</button>
      </li>
    </ul>
  </nav>
</template>

<script>
import store from "../../store/index";

export default {
  name: "AdminHeader",
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
  background-color: white;
  height: 8%;
}
/* 
ul {
  list-style-type: none;
  margin-left: 200px;
  padding: 0;
}

li {
  display: inline;
  margin-right: 40px;
} */
@media only screen and (max-width: 320px) {
  .link {
    text-decoration: none;
    color: whitesmoke;
    font-family: "Montserrat";
    font-size: 2em;
    transition: color 0.5s;
    font-family: Impact, Haettenschweiler, "Arial Narrow Bold", sans-serif;
  }
}
@media only screen and (min-width: 768px) {
  .link {
    text-decoration: none;
    color: whitesmoke;
    font-family: cursive;
    font-size: 3em;
    transition: color 0.5s;
  }
}
.link:hover {
  color: #ffb607;
  transition: color 0.5s;
}

button {
  background-color: rgb(1, 69, 100);
  border-radius: 10px;
}

nav {
  background-color: #212529;
}
</style>
