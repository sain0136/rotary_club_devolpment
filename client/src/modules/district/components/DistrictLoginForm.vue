<template>
  <div class="login-container">
    <br />
    <img
      src="../assets/login-icon.png"
      alt=""
    />
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
      <input
        type="text"
        name="userId"
        placeholder="ID"
        v-model="userId"
      />
      <br />
      <br />
      <input
        type="password"
        placeholder="password"
        v-model="password"
      />
      <br />
      <br />
    </form>
    <button
      @click="districtAdminLoginHandler"
    >
      Login
    </button>
  </div>
</template>

<script>
import store from '../../../store/index'

export default {
  name: 'DistrictLogin',
  data() {
    return {
      userId: '',
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
          user_id: this.userId,
          password: this.password,
        },
      )
      if (store.state
          .isDistrictAdminLoggedIn) {
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
     
 window.location.replace(`/district/${this.$router.currentRoute.value.params.id}/home`);
      
    },
  },
}
</script>

<style scoped>
img {
  height: 50px;
  margin-left: 40%;
}

.login-container {
  margin-left: auto;
  margin-right: auto;
  background-color: rgba(
    0,
    0,
    0,
    0.171
  );
  width: 20%;
  height: 350px;
  margin-bottom: 10%;
}

form {
  text-align: center;
  margin: auto;
  /* width: 50%; */
  margin-top: 10%;

  font-size: 18px;
}

legend {
  font-weight: bolder;
}

input {
  border: none;
  background-color: transparent;
  border-bottom: 1px solid
    rgba(255, 0, 0, 0.5);
}

button {
  background-color: #ffb607;
  color: whitesmoke;
  font-family: 'Montserrat', sans-serif;
  font-weight: bolder;
  border: none;
  width: 30%;
  box-shadow: 0px 1px 5px 0
    rgba(0, 0, 0, 0.425);
  border-radius: 5%;
  padding: 12px;
  margin-left: 35%;
}

button:hover {
  opacity: 0.5;
}

#error {
  color: red;
  font-weight: bolder;
}
</style>
