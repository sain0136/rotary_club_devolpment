<template>
  <nav>
    <div class="side">
      <ul>
        <li>
          <img
            src="../assets/club-logo.png"
            alt="Club Logo"
            class="img-fluid"
          />
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
        "
      >
        <div class="container-fluid">
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarTogglerDemo01"
            aria-controls="navbarTogglerDemo01"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span
              class="
                navbar-toggler-icon
              "
            ></span>
          </button>
          <div
            class="
              collapse
              navbar-collapse
            "
            id="navbarTogglerDemo01"
          >
            <ul
              class="
                navbar-nav
                me-auto
                mb-2 mb-lg-0
              "
            >
              <li class="nav-item">
                <router-link
                  class="link"
                  :to="{
                    name: 'ClubHome',
                    params: {
                      id: this.clubId,
                    },
                  }"
                  >Home</router-link
                >
              </li>
              <li class="nav-item">
                <router-link
                  class="link"
                  :to="{
                    name: 'ClubAbout',
                    params: {
                      id: this.clubId,
                    },
                  }"
                  >About</router-link
                >
              </li>

              <li class="nav-item">
                <router-link
                  class="link"
                  :to="{
                    name:
                      'ClubProjects',
                    params: {
                      id: this.clubId,
                    },
                  }"
                  >Projects</router-link
                >
              </li>
              <li class="nav-item">
                <router-link
                  class="link"
                  :to="{
                    name:
                      'ClubContactUs',
                    params: {
                      id: this.clubId,
                    },
                  }"
                  >Contact
                  Us</router-link
                >
              </li>
              <div
                class="dropdown"
                v-if="
                  this.$store.state
                    .isSiteAdminLoggedIn ||
                    this.$store.state
                      .isDistrictAdminLoggedIn ||
                    this.$store.state
                      .isClubAdminLoggedIn ||
                    this.$store.state
                      .isClubUserLoggedIn
                "
              >
                <button
                  class="
                    btn btn-secondary
                    dropdown-toggle
                  "
                  type="button"
                  id="dropdownMenuButton1"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Admin
                </button>
                <ul
                  class="dropdown-menu"
                  aria-labelledby="dropdownMenuButton1"
                >
                  <li>
                    <router-link
                      class="
                        dropdown-item
                      "
                      :to="{
                        name:
                          'MyClubProfile',
                        params: {
                          id: this
                            .clubId,
                        },
                      }"
                      v-if="
                        this.$store
                          .state
                          .isClubAdminLoggedIn ||
                          this.$store
                            .state
                            .isClubUserLoggedIn
                      "
                      >My
                      Profile</router-link
                    >
                  </li>
                  <li>
                    <router-link
                      class="
                        dropdown-item
                      "
                      :to="{
                        name:
                          'EditClub',
                      }"
                      v-if="
                        isTheClubAdminLoggedIn ==
                          true ||
                          this.$store
                            .state
                            .isSiteAdminLoggedIn ||
                          this.$store
                            .state
                            .isDistrictAdminLoggedIn
                      "
                      >Edit
                      Club</router-link
                    >
                  </li>
                  <li>
                    <router-link
                      class="
                        dropdown-item
                      "
                      :to="{
                        name:
                          'ClubMembers',
                        params: {
                          id: this
                            .clubId,
                        },
                      }"
                      v-if="
                        isTheClubAdminLoggedIn ==
                          true ||
                          this.$store
                            .state
                            .isSiteAdminLoggedIn ||
                          this.$store
                            .state
                            .isDistrictAdminLoggedIn
                      "
                      >Club
                      Members</router-link
                    >
                  </li>
                  <li>
                    <router-link
                      class="
                        dropdown-item
                      "
                      :to="{
                        name:
                          'ClubProjectsView',
                        params: {
                          id: this
                            .clubId,
                        },
                      }"
                      v-if="
                        this.$store
                          .state
                          .isClubAdminLoggedIn ||
                          this.$store
                            .state
                            .isClubUserLoggedIn
                      "
                      >My Club
                      Projects</router-link
                    >
                  </li>
                  <li>
                    <router-link
                      class="
                        dropdown-item
                      "
                      :to="{
                        name:
                          'ClubProjectPledgesView',
                        params: {
                          userIdProp: this
                            .userId,
                          isThisMyPledges:
                            'yes',
                        },
                      }"
                      v-if="
                        this.$store
                          .state
                          .isClubAdminLoggedIn ||
                          this.$store
                            .state
                            .isClubUserLoggedIn
                      "
                      >My
                      Pledges</router-link
                    >
                  </li>
                </ul>
              </div>
              <li v-if="!loggin">
                <SignInAndOutButton
                  v-if="!loggin"
                  class="link"
                  pageAccessed="Club"
                  :clubId="clubId"
                />
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
                aria-label="Search"
              />
              <button
                class="
                  btn
                  btn-outline-success
                "
                type="submit"
              >
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
  name: 'ClubHeader',
  components: {
    SignInAndOutButton,
  },
  data() {
    return {
      userId:
        store.state.loggedInClubUserId,
      clubId: this.$router.currentRoute
        .value.params.id,
      loggin: false,
      clubName: null,
      isTheClubAdminLoggedIn: false,
    }
  },
  beforeMount() {
    if (
      store.state.isClubAdminLoggedIn ==
      true
    ) {
      this.isTheClubAdminLoggedIn = true
    }
  },
  beforeUpdate() {
    if (
      store.state.isClubAdminLoggedIn ==
      true
    ) {
      this.isTheClubAdminLoggedIn = true
    }
  },

  created() {
    if (
      store.state.isClubAdminLoggedIn ==
      true
    ) {
      this.isTheClubAdminLoggedIn = true
    }
    watchEffect(() => {
      if (
        store.state
          .isSiteAdminLoggedIn ||
        store.state
          .isDistrictAdminLoggedIn ||
        store.state
          .isClubAdminLoggedIn ||
        store.state.isClubUserLoggedIn
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
        `/club/${this.clubId}/home`,
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
.btn {
  padding: unset;
  margin-right: 2em;
  text-decoration: none;
  color: #27282d;
  font-family: 'Montserrat';
  font-size: 1em;
}
.btn:hover {
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
.btn-secondary:active {
  color: rgb(0, 0, 0);
  background-color: #ffffff;
  border-color: transparent;
}
.btn-secondary:active:focus {
  box-shadow: transparent;
}
.dropdown-item:active {
  color: #fff;
  text-decoration: none;
  background-color: rgb(255, 182, 7);
}
.btn-secondary:active:focus {
  box-shadow: unset;
}
</style>
