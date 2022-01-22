<template>
  <div class="login-container">
    <br>
    <img src="../assets/login-icon.png" alt="">
    <form>
      <p 
        v-if="$store.state.isClubAdminRejected || $store.state.isClubUserRejected"
        id="error">
        Credentials not valid!
        <br>
      </p>
      <div v-if="$store.state.isClubAdminLoggedIn && !$store.state.isClubAdminRejected">
        <p id="success">Logged In!</p>
      </div>
      <input type="text" name="id" placeholder="ID"
        v-model="userId"> <br> <br>
      <input type="password" placeholder="password"
        v-model="password"> <br> <br> <br>
    </form>
      <button @click="clubAdminLoginHandler">
      Login</button>
  </div>
</template>

<script>

import store from '../../../store/index'

export default {
  name: 'ClubLogin',
  data() {
    return {
      userId: '',
      password: '',
    }
  },
  methods: {

    async clubAdminLoginHandler() {
      await store.dispatch('validateClubUser', {
        id: parseInt(this.$router.currentRoute.value.params.id),
        user_id: parseInt(this.userId),
        password: this.password,
      })
      this.redirect()
    },
    
    redirect() {
      if(store.state.isClubAdminLoggedIn || store.state.isClubUserLoggedIn) {
        this.$router.push('./home');
      }
    }
  }
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
  background-color: rgba(0, 0, 0, 0.171);
  width: 20%;
  height: 350px;
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
  border-bottom: 1px solid rgba(255,0,0,0.5);
}

button {
  background-color: #ffb607;
  color: whitesmoke;
  font-family: 'Montserrat', sans-serif;
  font-weight: bolder;
  border: none;
  width: 30%;
  box-shadow: 0px 1px 5px 0 rgba(0, 0, 0, 0.425);
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


