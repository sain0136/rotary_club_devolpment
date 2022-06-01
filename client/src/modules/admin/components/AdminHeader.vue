<template>
  <!-- Site Admin Top Header -->
  <header>
    <div class="nav2">
      <div class="top-left">
        <font-awesome-icon
          class="envelope"
          icon="envelope"
        ></font-awesome-icon>
        info@rotaryprojects.com
      </div>
    </div>
  </header>
  <!-- SiteAdmin Navbar -->
  <nav>
    <div class="image-div">
      <img
        src="../assets/rotary-logo-800px-w.png"
      />
    </div>
    <ul>
      <li>
        <router-link
          class="link"
          to="/admin/home"
        >
          Home</router-link
        >
      </li>
      <li>
        <router-link
          class="link"
          to="/admin/districts/view"
        >
          Administer<br>
          Districts</router-link
        >
      </li>
      <li>
        <router-link
          class="link"
          to="/admin/district-admins/view"
          >Manage District<br>
          Admins</router-link
        >
      </li>
      <li>
        <SignInAndOutButton
          class="link"
          pageAccessed="Admin"
        />
      </li>
    </ul>
  </nav>
</template>

<script>
import SignInAndOutButton from '../../../components/common/SignInAndOutButton.vue'
import store from '../../../store/index'

export default {
  name: 'AdminHeader',
  components: {
    SignInAndOutButton,
  },
  methods: {
    logout() {
      store.dispatch('logout', 0)
      this.$router.push('/adminlogin')
    },
  },
}
</script>

<style scoped>
/* header-top Styling */
header .nav2 {
  display: flex;
  flex-direction: row;
  padding: 0.8em 5em;
  background-color: #ffb607;
}
.nav2 .top-left {
  position: relative;
  float: left;
}
/* nav-bar  Styling */
@media only screen and (max-width: 899px) {
  nav {
    background-color: #ffffff;
    box-shadow: 0px 2px 4px 0
      rgba(0, 0, 0, 0.2);
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
  }
  ul {
  list-style-type: none;
  padding: 0;
  display: flex;
  flex-direction: row;
  margin-bottom: unset;
  align-items: center;
  justify-content: center;
}
}
@media only screen and (min-width: 900px) {
  nav {
    background-color: #ffffff;
    box-shadow: 0px 2px 4px 0
      rgba(0, 0, 0, 0.2);
    display: flex;
    justify-content: center;
    flex-wrap: nowrap;
        column-gap: 1em;
  }
  ul {
  list-style-type: none;
  padding: 0;
  display: flex;
  flex-direction: row;
  margin-bottom: unset;
  align-items: center;
  justify-content: center;
  flex-grow: 2;
}
}
nav img {
  max-width: 100%;
  height: auto;
  display: block;
}

li {
  display: inline;
  flex: 1 1 0;
  text-align: center;
}
.link {
  text-decoration: none;
  font-family: 'Montserrat';
  transition: color 0.5s;
  color: #020d13;
  font-size: 1em;
  font-weight: 500;
  text-align: center;
}
.link:hover {
  color: #ffb607;
  transition: color 0.5s;
}
.logout {
  background-color: #406882;
  border: none;
  margin-left: 200px;
}
</style>
