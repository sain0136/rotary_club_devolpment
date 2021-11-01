<template>
  <nav>
    <ul>
      <li>
        <h1>District: {{ this.districtName }}</h1>
      </li>
      <li>
        <button type="button" class="btn btn-primary">
          <router-link class="link" to="home">Home</router-link>
        </button>
      </li>
      <li><router-link class="link" to="about">About</router-link></li>
      <li><router-link class="link" to="clubs">Clubs</router-link></li>
      <li><router-link class="link" to="contactus">Contact Us</router-link></li>
      <li><router-link class="link" to="editdistrict">Edit District</router-link></li>

      <li v-if="!($store.state.isSiteAdminLoggedIn || $store.state.isDistrictAdminLoggedIn)">
        <router-link class="link" to="login">Login</router-link>
      </li>
      <li v-if="$store.state.isDistrictAdminLoggedIn">
        <button class="link" @click="logout">Logout</button>
      </li>

      <li class="search-button"><font-awesome-icon icon="search" /></li>
    </ul>
  </nav>
</template>

<script>
import store from "../../store/index";

export default {
  name: "DistrictHeader",
  data() {
    return {
      districtName: null,
    };
  },
  methods: {
    logout() {
      store.dispatch("logout", 1);
      this.$router.push(`/login`);
    },
  },
  async created() {
    const res = await fetch(`/api/district/${store.state.currentDistrictId}`, {
      method: "GET",
    });
    const data = await res.json();
    this.districtName = data.districtById.district_name;
    console.log("District name: ", this.districtName);
  },
};
</script>

<style>
img {
  height: 100px;
}

nav {
  background-color: rgb(74, 233, 180);
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
  font-family: "Montserrat";
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
