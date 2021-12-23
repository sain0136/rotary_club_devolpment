<template>
  <div>
    <form>
      <legend>Club Login</legend> <br> <br>
      <p 
        v-if="$store.state.isClubAdminRejected" 
        id="error">
        Credentials not valid!
      </p>
      <div class="form-field">
        <label for="Admin">Admin</label>
        <input 
          type="radio" 
          name="Admin" 
          value="2"
          v-model="roleType">
        <br><br>
        <label for="User">User</label>
        <input 
          checked="checked"
          type="radio" 
          name="User" 
          value="3"
          v-model="roleType">          
        <br> <br>
      </div>
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

import store from '../../store/index'

export default {
  name: 'ClubLogin',
  data() {
    return {
      username: '',
      password: '',
      roleType: 3,
    }
  },
  methods: {
    clubAdminLoginHandler() {
      store.dispatch('validateAdminCredentials', {
        userId: this.username,
        password: this.password,
        roleId: this.roleType
      })
      if(store.state.isClubAdminLoggedIn || store.state.isClubUserLoggedIn) {
        this.$router.push('/club/home');
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