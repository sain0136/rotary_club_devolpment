<template>
  <div>
    <form>
      <img
        src="../assets/logo-rotary.png" class="logo-img"
        alt=""
      />
      <p
        v-if="
          $store.state
            .isSiteAdminRejected
        "
        id="error"
      >
        Credentials are not valid!
      </p>
      <span>Username:    <input
        type="text"
        name="username"
        placeholder="username"
        v-model="username"
        
      /></span>
  
      <br />
      <br />
      <span> Password:    <input
        type="password"
        placeholder="password"
        v-model="password"
      /></span>
    
      <br />
      <br />
      <br />
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
      var x = document.getElementById("error");
       x.style.display = "none";
      function sleep(ms) {
       return new Promise(resolve => setTimeout(resolve, ms));
}
sleep(500).then(() => { x.style.display = "block";});
          //

    },
  },
}
</script>

<style scoped>
img {
  height:auto;
  margin-bottom: 0.1em;
}

div {
  background-color: #ffffff;
  width: 350px;
  margin-top: 10%;
  margin-left: auto;
  margin-right: auto;
  border-radius: 15px;
  border: 2px solid #ffb607;
  width: 420px;
  height: 420px;
  padding: 35px 100px 15px 100px;
  align: center;
}

form {
  text-align: left;
  
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
span{
    font-size: larger;

}
</style>
