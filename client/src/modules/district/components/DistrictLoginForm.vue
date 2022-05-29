<template>
  <div class="wrapper">
    <div class="login-container">
      <br />
      <div class="image-wrapper">
        <img
          src="../assets/login-icon.png"
          alt=""
        />
      </div>
      <form>
        <p
          v-if="
            $store.state
              .isDistrictAdminRejected
          "
          id="error"
        >
          Credentials not valid!
        </p>
        <div
          v-if="
            $store.state
              .isDistrictAdminLoggedIn &&
            !$store.state
              .isDistrictAdminRejected
          "
        >
          <p id="success">Logged In!</p>
          <!-- <router-link id="admin-page" to="/admin">Admin Page</router-link> <br> <br>  -->
        </div>
        <label for="email"
          >Email Address:</label
        >
        <input
          type="text"
          name="userId"
          placeholder="ID"
          v-model="email"
        />
        <br />
        <br />
        <label for="password"
          >Password:</label
        >
        <input
          type="password"
          placeholder="password"
          v-model="password"
        />
        <br />
        <br />
      </form>
      <button
        @click="
          districtAdminLoginHandler
        "
      >
        Login
      </button>
    </div>
  </div>
</template>

<script>
import store from '../../../store/index'

export default {
  name: 'DistrictLoginForm',
  data() {
    return {
      email: '',
      password: '',
    }
  },
  methods: {
    async districtAdminLoginHandler() {
      await store.dispatch(
        'validateDistrictAdmin',
        {
          id: this.$router.currentRoute
            .value.params.id,
          email: this.email,
          password: this.password,
        },
      )
      if (
        store.state
          .isDistrictAdminLoggedIn
      ) {
        this.redirect()
      } else {
        var x = document.getElementById(
          'error',
        )
        x.style.display = 'none'
        await this.timeOut(500)
      }
    },
    async timeOut(ms) {
      setTimeout(() => {
        var x = document.getElementById(
          'error',
        )
        x.style.display = 'block'
      }, ms)
    },
    redirect() {
      window.location.replace(
        `/district/${this.$router.currentRoute.value.params.id}/home`,
      )
    },
  },
}
</script>

<style scoped>
/* Wrapper */
.wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2em 0;
  font-family: 'Montserrat', sans-serif;

}
/* login */
.login-container {
  display: flex;
  flex-direction: column;
  background-color: rgba(
    0,
    0,
    0,
    0.171
  );
  padding: 2em;
}
.image-wrapper {
  display: flex;
  justify-content: center;
}
img {
  height: 4em;
}
/* login */
#error {
  color: red;
  font-weight: bolder;
  padding-top: .2em;
}
form {
  text-align: center;
  margin: auto;
  font-size: 1em;
}
label {
  font-weight: bolder;
}

legend {
  font-weight: bolder;
}

input {
  border: none;
  display: block;
  font-size: 1em;
}
/* submit button */
button {
  background-color: #ffb607;
  color: whitesmoke;
  font-weight: bolder;
  border: none;
  box-shadow: 0px 1px 5px 0
    rgba(0, 0, 0, 0.425);
  border-radius: 5%;
  padding: .8em;
}

button:hover {
  opacity: 0.5;
}
</style>
