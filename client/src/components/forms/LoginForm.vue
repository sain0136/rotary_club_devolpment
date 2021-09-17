<template>
  <div>
    <form>
      <legend>Admin</legend> <br> <br>
      <input type="text" name="username" placeholder="username"> <br> <br>
      <input type="password" placeholder="password"> <br> <br> <br>
    </form>
      <button @click="$store.dispatch('login', true)">Login</button>
  </div>
</template>

<script>

export default {
  name: 'ClubLogin',
  computed: {

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
  opacity: 0.8;
  border: none;
  padding: 8px;
}

button:hover {
  opacity: 0.5;
}

</style>