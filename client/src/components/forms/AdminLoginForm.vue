<template>
  <div>
    <form>
      <legend>Admin</legend> <br> <br>
      <p v-if="$store.state.isSiteAdminRejected" id="error">Credentials not valid!</p>
      <div v-if="$store.state.isSiteAdminLoggedIn && !$store.state.isSiteAdminRejected">
        <p id="success">Logged In!</p>
        <router-link id="admin-page" to="/admin/home">Admin Page</router-link> <br> <br> 
      </div>
      <input type="text" name="username" placeholder="username"
        v-model="username"> <br> <br>
      <input type="password" placeholder="password"
        v-model="password"> <br> <br> <br>
    </form>
      <button @click="adminLoginHandler">
      Login</button>
  </div>
</template>

<script>

import store from '../../store/index'

export default {
  name: 'AdminLogin',
  data() {
    return {
      username: '',
      password: ''
    }
  },
  methods: {
    adminLoginHandler() {
      store.dispatch('validateAdminCredentials', {
        userId: this.username,
        password: this.password,
        roleId: 0
      })
    }
  }
}

</script>

<style scoped>

form {
  text-align: center;
  margin: auto;
  width: 50%;
  margin-top: 10%;
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
  opacity: 0.8;
  border: none;
  padding: 8px;
  margin: 0;
  position: absolute;
  left: 50%;
  -ms-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
}

button:hover {
  opacity: 0.5;
}

#error {
  color: red;
  font-weight: bolder;
}

#success {
  color: green;
  font-weight: bolder;
}

#admin-page {
  text-decoration: none;
}

#admin-page:hover {
  color: #ffb607;
}

</style>