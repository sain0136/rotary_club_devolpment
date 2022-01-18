<template>
  <nav>
    <ul>
      <li>
        <img class="img-fluid" src="../assets/admin-logo.png" />
      </li>
      <li>
        <router-link class="link" to="/admin/home">
          Home</router-link
        >
      </li>
      <li>
        <router-link class="link" to="/admin/districts/view">
          Administer Districts</router-link
        >
      </li>
      <li>
        <router-link class="link" to="/admin/district-admins/view"
          >Manage District Admins</router-link
        >
      </li>
      <li v-if="$store.state.isSiteAdminLoggedIn" class="nav-item" id=logout-area>
        <button class="logout" @click="logout">
          <font-awesome-icon
            class="social-icon" icon="sign-in-alt"></font-awesome-icon>
        </button>
      </li>
    </ul>
  </nav>
</template>

<script>
import store from "../../../store/index";

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
  background-color: #406882;
  box-shadow: 0px 3px 5px 0 rgba(0,0,0,.9);
}

.link {
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
