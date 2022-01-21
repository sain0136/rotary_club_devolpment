<template>
  <div>
    <form>
      <legend>Club Login</legend> <br> <br>
      <p 
        v-if="$store.state.isClubAdminRejected || $store.state.isClubUserRejected"
        id="error">
        Credentials not valid!
        <br>
      </p>
      <div v-if="$store.state.isClubAdminLoggedIn && !$store.state.isClubAdminRejected">
        <p id="success">Logged In!</p>
      </div>
      <input type="text" name="username" placeholder="username"
        v-model="username"> <br> <br>
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
      username: '',
      password: '',
    }
  },
  methods: {

    async clubAdminLoginHandler() {
      console.log(this.roleType)
      await store.dispatch('validateAdminCredentials', {
        userId: this.username,
        password: this.password,
        roleId: parseInt(this.roleType)
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

form {
  text-align: center;
  margin-left: auto;
  margin-right: auto;
  margin-top: auto;
  border: none;
  width: 20%;
  font-size: 18px;
}

legend {
  font-weight: bolder;
}

input {
  border: none;
  border-bottom: 1px solid rgba(255,0,0,0.5);;
}

button {
  background-color: #ffb607;
  font-size: 18px;
  opacity: 0.8;
  border: none;
  padding: 8px;
}

button:hover {
  opacity: 0.5;
}

</style>