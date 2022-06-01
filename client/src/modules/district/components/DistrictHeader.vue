<template>
  <nav>
    <div class="side">
      <ul>
        <li>
          <img
            src="../assets/rotary-logo.png"
            alt="District Logo"
            class="img-fluid" />
          <!-- <h1>{{ $store.state.currentDistrictData.district_name }}</h1> -->
        </li>
      </ul>
    </div>
    <div class="side-r">
      <nav
        class="
          navbar
          navbar-expand-lg
          navbar-light
          bg-white
        ">
        <div class="container-fluid">
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarTogglerDemo01"
            aria-controls="navbarTogglerDemo01"
            aria-expanded="false"
            aria-label="Toggle navigation">
            <span
              class="
                navbar-toggler-icon
              "></span>
          </button>
          <div
            class="
              collapse
              navbar-collapse
            "
            id="navbarTogglerDemo01">
            <ul
              class="
                navbar-nav
                me-auto
                mb-2 mb-lg-0
              ">
              <li class="nav-item">
                <router-link
                  class="link"
                  :to="{
                    name: 'DistrictHome',
                    params: {
                      id: this
                        .districtId,
                    },
                  }"
                  >Home</router-link
                >
              </li>
              <li class="nav-item">
                <router-link
                  class="link"
                  :to="{
                    name: 'DistrictAbout',
                    params: {
                      id: this
                        .districtId,
                    },
                  }"
                  >About</router-link
                >
              </li>
              <li class="nav-item">
                <router-link
                  class="link"
                  :to="{
                    name: 'ClubsView',
                    params: {
                      id: this
                        .districtId,
                    },
                  }"
                  >Clubs</router-link
                >
              </li>
              <li class="nav-item">
                <router-link
                  class="link"
                  :to="{
                    name: 'DistrictProjects',
                    params: {
                      id: this
                        .districtId,
                    },
                  }"
                  >Projects</router-link
                >
              </li>
              <li class="nav-item">
                <router-link
                  class="link"
                  :to="{
                    name: 'DistrictContactUs',
                    params: {
                      id: this
                        .districtId,
                    },
                  }"
                  >Contact
                  Us</router-link
                >
              </li>
              <div
                class="dropdown"
                v-if="
                  $store.state
                    .isDistrictAdminLoggedIn ||
                  $store.state
                    .isSiteAdminLoggedIn
                ">
                <button
                  class="
                    btn btn-secondary
                    dropdown-toggle
                  "
                  type="button"
                  id="dropdownMenuButton1"
                  data-bs-toggle="dropdown"
                  aria-expanded="false">
                  Admin
                </button>
                <ul
                  class="dropdown-menu"
                  aria-labelledby="dropdownMenuButton1">
                  <li>
                  <router-link
                   class="
                        dropdown-item
                      "
                  :to="{
                    name: 'ProfileView',
                    params: {
                      id: this
                        .districtId,
                    },
                  }"
                  >My Profile</router-link
                >
              
                  </li>
                  <li>
               <router-link
                   class="
                        dropdown-item
                      "
                  :to="{
                    name: 'DistrictEdit2',
                    params: {
                      id: this
                        .districtId,
                    },
                  }"
                  >Edit District</router-link
                >
                  </li>
                  <li>
                  <router-link
                   class="
                        dropdown-item
                      "
                  :to="{
                    name: 'DistrictProjectsView',
                    params: {
                      id: this
                        .districtId,
                    },
                  }"
                  >My District Projects</router-link
                >
                  </li>
                   <li>
                  <router-link
                   class="
                        dropdown-item
                      "
                  :to="{
                    name: 'DistrictProjectPledgesView',
                    params: {
                      id: this
                        .districtId,
                        isThisMyPledges:'yes'
                    },
                  }"
                  >My Pledges</router-link
                >
                  </li>
                </ul>
              </div>
              <li v-if="!loggin">
                <SignInAndOutButton
                  v-if="!loggin"
                  class="link"
                  pageAccessed="District"
                  :districtId="
                    districtId
                  " />
              </li>
              <li v-else>
                <a
                  id="signout"
                  @click="logout()"
                  >Sign out</a
                >
              </li>
            </ul>
            <form class="d-flex">
              <input
                class="
                  form-control
                  me-2
                "
                type="search"
                placeholder="Search"
                aria-label="Search" />
              <button
                class="
                  btn
                  btn-outline-success
                "
                type="submit">
                Search
              </button>
            </form>
          </div>
        </div>
      </nav>
    </div>
  </nav>
</template>

<script>
import SignInAndOutButton from '../../../components/common/SignInAndOutButton.vue'

import store from '../../../store/index'
import { watchEffect } from 'vue'

export default {
  name: 'DistrictHeader',
  components: {
    SignInAndOutButton,
  },
  data() {
    return {
      districtName: null,
      districtId:
        this.$router.currentRoute.value
          .params.id,
      loggin: false,
    }
  },

  created() {
    watchEffect(() => {
      if (
        store.state
          .isSiteAdminLoggedIn ||
        store.state
          .isDistrictAdminLoggedIn
      ) {
        this.loggin = true
      } else {
        this.loggin = false
      }
    })
  },
  methods: {
    logout() {
      store.dispatch('signOut')
      window.location.replace(
        `/district/${this.districtId}/home`,
      )
    },
  },
}
</script>

<style scoped>
.btn-outline-success:hover {
  color: #000;
  background-color: #ffb607;
  border-color: #ffb607;
}
.btn {
  color: black;
}
img {
  height: 69px;
  margin-top: 15px;
}
.side-r {
  align-self: center;
  flex-grow: 1;
}
nav {
  background-color: #ffffff;
  height: 12%;
  display: flex;
}

ul {
  list-style-type: none;
  padding: 0;
}

li,
h1 {
  display: inline;
  margin-right: 40px;
}

.link,
a {
  text-decoration: none;
  color: #27282d;
  font-family: 'Montserrat';
  font-size: 1em;
  transition: color 0.5s;
}

.link:hover {
  color: #ffb607;
  transition: color 0.5s;
}
#signout:hover {
  color: #ffb607;
  transition: color 0.5s;
}
#logout:hover {
  cursor: pointer;
}

button {
  background-color: white;
  border: none;
}
.btn{
  padding: unset;
  margin-right: 2.0em;
  text-decoration: none;
  color: #27282d;
  font-family: 'Montserrat';
  font-size: 1em;
 
}
.btn:hover{
    color: #ffb607;
  transition: color 0.5s;
    background-color: #ffffff;

}
 .btn-secondary:focus {
    color: rgb(0, 0, 0);
    background-color: #ffffff;
    border-color: rgb(255, 182, 7);
    box-shadow: none;
}
 .btn-secondary:active{
    color: rgb(0, 0, 0);
    background-color: #ffffff;
    border-color: transparent;

 }
 .btn-secondary:active:focus{
   box-shadow:transparent;
   
 }
.dropdown-item:active {
      color: #fff;
    text-decoration: none;
    background-color:rgb(255, 182, 7);
}
.btn-secondary:active:focus{
  box-shadow: unset;
}
</style>
