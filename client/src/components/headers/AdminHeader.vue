<template>
  <nav>
    <ul>
      <li><img class="logo" src="../../assets/admin-logo.png"></li>
      <li><router-link class="link" to="/admin/viewdistricts">View Districts</router-link></li>
      <li><router-link class="link" to="/admin/viewusers">View Users</router-link></li>
      <li><router-link class="link" to="/admin/viewclubs">View Clubs</router-link></li>
      <li v-if="$store.state.isSiteAdminLoggedIn">
        <button class="link" @click="logout">Logout</button>
      </li>
  </ul>
  </nav>
</template>

<script>

import store from '../../store/index'

export default {
  name: "AdminHeader",
  methods: {
    logout() {
      store.dispatch('logout', 0)
      this.$router.push('/adminlogin')
    }
  }
}
</script>

<style scoped>

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

</style>