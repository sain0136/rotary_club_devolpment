<template>
  <nav>
    <ul>
      <li>
        <h1>District: {{ $store.state.currentDistrictData.district_name }}</h1>
      </li>
      <li>
          <router-link class="link" :to="{name: 'DistrictHome', params: {id: this.districtId}}">Home</router-link>
      </li>
      <li>
        <router-link class="link" :to="{name: 'DistrictAbout', params: {id: this.districtId}}">About</router-link>
      </li>
      <li>
        <router-link class="link" :to="{name: 'ViewClubs', params: {id: this.districtId}}">Clubs</router-link>
      </li>
      <li>
        <router-link class="link" :to="{name: 'DistrictProjects', params: {id: this.districtId}}">Projects</router-link>
      </li>
      <li>
        <router-link class="link" :to="{name: 'DistrictContactUs', params: {id: this.districtId}}">Contact Us</router-link>
        </li>
      <li>
        <router-link class="link" :to="{name: 'EditDistrict', params: {id: this.districtId}}">Edit District</router-link>
        </li>
      <li v-if="!($store.state.isSiteAdminLoggedIn || $store.state.isDistrictAdminLoggedIn)">
        <router-link class="link" :to="{name: 'DistrictLogin', params: {id: this.districtId}}">Login</router-link>
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
      districtId: this.$router.currentRoute.value.params.id
    };
  },
  methods: {
    logout() {
      store.dispatch("logout", 1);
      this.$router.push(`/district/${this.districtId}/login`);
    },
  },
}
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

#logout:hover {
  cursor: pointer;
}
</style>
