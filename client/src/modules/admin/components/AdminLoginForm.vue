<template>
  <div>
    <form>
      <img src="../assets/logo-rotary.png" class="logo-img" alt="">
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
      store.dispatch('validateSiteAdmin', {
        userId: this.username,
        password: this.password,
      })
    }
  }
}

</script>

<style scoped>

img {
  height:auto;
}

div {
  background-color: #ffffff;
  width: 350px;
  margin-top: 10%;
  margin-left: auto;
  margin-right: auto;
  border-radius: 15px;
  border: 2px solid #ffb607;
  width: 400px;
  height: 400px;
  padding: 35px 100px 15px 100px;
  align: center;
}
.logo-img{
	width:250px;
	margin-bottom: 50px;
	padding-right: 20px;
}

form {
  text-align: center;
  font-size: 18px;
}

legend {
  color: #ffb607;
  font-weight: bolder;
}


button{
	position: relative;
    padding: 5px 75px;
    line-height: 24px;
    color: #ffffff;
    font-size: 14px;
    font-weight: 500;
	margin: auto;
    background-color: #ffb607;
    border: 2px solid #ffb607;
    text-transform: uppercase;
	}

button:hover {
	color:#ffb607;
	background:none;
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