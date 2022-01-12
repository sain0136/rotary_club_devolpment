<template>
  <div>
    <form>
      <legend>District Login</legend> <br> <br>
      <p v-if="$store.state.isDistrictAdminRejected" id="error">Credentials not valid!</p>
      <div v-if="$store.state.isDistrictAdminLoggedIn && !$store.state.isDistrictAdminRejected">
        <p id="success">Logged In!</p>
        <!-- <router-link id="admin-page" to="/admin">Admin Page</router-link> <br> <br>  -->
      </div>
      <input type="text" name="userId" placeholder="ID"
        v-model="userId"> <br> <br>
      <input type="password" placeholder="password"
        v-model="password"> <br> <br> <br>
    </form>
      <button @click="districtAdminLoginHandler">
      Login</button>
  </div>
</template>

<script>

import store from '../../../store/index'

export default {
  name: 'DistrictLogin',
  data() {
    return {
      userId: '',
      password: ''
    }
  },
  methods: {
    async districtAdminLoginHandler() {
      await store.dispatch('validateAdminCredentials', {
        userId: this.userId,
        password: this.password,
        roleId: 1
      })
      this.redirect()
    },
    redirect() {
      if(store.state.isDistrictAdminLoggedIn) {
        console.log('hello')
        this.$router.push('./home')
      }
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