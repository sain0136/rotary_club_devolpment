<template>
  <!-- Admin Login Form Conatiner -->
  <div class="container">
    <img
      src="../assets/logo-rotary.png"
      alt=""
    />
    <form>
      <!-- Verification Error -->
      <p
        v-if="
          $store.state
            .isSiteAdminRejected
        "
        id="error"
      >
        Credentials are not valid!
      </p>
      <div class="wrapper">

        <span
        >Username:</span>
        <input
          type="text"
          name="username"
          placeholder="username"
          v-model="username"
      />
      </div>
      <div class="wrapper">
           <span>
        Password:</span>
        <input
          type="password"
          placeholder="password"
          v-model="password"
      />
</div>
      <br />
      <br />
 

      <button
        @click="adminLoginHandler"
      >
        Login
      </button>
    </form>
  </div>
</template>

<script>
import store from '../../../store/index'

export default {
  name: 'AdminLoginForm',
  data() {
    return {
      username: '',
      password: '',
    }
  },
  methods: {
    adminLoginHandler() {
      store.dispatch(
        'validateSiteAdmin',
        {
          userId: this.username,
          password: this.password,
        },
      )
      var x = document.getElementById(
        'error',
      )
      x.style.display = 'none'
      function sleep(ms) {
        return new Promise(resolve =>
          setTimeout(resolve, ms),
        )
      }
      sleep(500).then(() => {
        x.style.display = 'block'
      })
      //
    },
  },
}
</script>

<style scoped>
/* Form Styling */
.container {
  margin-left: auto;
  background-color: #ffffff;
  margin-top: 10%;
  border-radius: 15px;
  border: 4px solid #ffb607;
  padding: 1em 2.5em 2.5em 2em;
  max-width: fit-content;
}
img {
  margin-bottom: 2em;
  max-width: 100%;
  height: auto;
  margin-left: auto;
  margin-right: auto;
  display: block;
}
p {
  display: block;
  text-align: center;
  margin-top: 2em;
  color: crimson;
}
form {
  text-align: left;
  font-size: 1.1em;
}

legend {
  color: #ffb607;
  font-weight: bolder;
}

button {
  padding: 0.5em 3em;
  line-height: 24px;
  color: #ffffff;
  font-size: 1em;
  font-weight: 500;
  margin: auto;
  background-color: #ffb607;
  border: 2px solid #ffb607;
  text-transform: uppercase;
  display: block;
}

button:hover {
  color: #ffb607;
  background: none;
}


#admin-page {
  text-decoration: none;
}

#admin-page:hover {
  color: #ffb607;
}
span {
  font-size: larger;
}
.wrapper{
margin-bottom: 1em;
display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
      column-gap: .2em;
    place-content: flex-end;

}
</style>
