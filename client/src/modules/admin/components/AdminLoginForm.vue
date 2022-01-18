<template>
  <div>
    <form>
      <img src="../assets/admin-logo-2.png" alt="">
      <p v-if="$store.state.isSiteAdminRejected" id="error">Credentials not valid!</p>
      <input type="text" name="username" placeholder="username"
        v-model="username"> <br> <br>
      <input type="password" placeholder="password"
        v-model="password"> <br> <br> <br>
    </form>
      <button @click="adminLoginHandler">
        Login
      </button>
  </div>
</template>

<script>

import store from '../../../store/index'

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

div {
  border: 5px solid black;
  background-color: rgba(255, 255, 255, 0.103);
  width: 300px;
  margin-top: 10%;
  margin-left: auto;
  margin-right: auto;
  padding: 50px;
}

form {
  text-align: center;
  margin-top: 10%;
  font-size: 18px;
}

legend {
  color: #ffb607;
  font-weight: bolder;
}

input {
  border: none;
  border-bottom: 1px solid rgba(255,0,0,0.5);
  background-color: black;
  color: whitesmoke;
}

button {
  background-color: #ffb607;
  font-weight: bold;
  opacity: 0.8;
  border: none;
  padding: 8px;
  -ms-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  margin-left: 50%;
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