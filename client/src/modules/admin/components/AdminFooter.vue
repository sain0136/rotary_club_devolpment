<template>
  <nav>
    <p>Rotary Club</p>
    <p>All rights reserved &copy</p>
  </nav>
</template>

<script>
import store from "../../../store/index";

export default {
  name: "AdminFooter",
  methods: {
    logout() {
      store.dispatch("logout", 0);
      this.$router.push("/adminlogin");
    },
  },
};
</script>

<style scoped>

nav {
  background-color: #406882;
  box-shadow: 0px 3px 5px 0 rgba(0,0,0,.9);
  height: 100px;
  padding: 5px;
  margin-top: auto;
}

p {
  text-align: center;
  font-weight: 500;
  font-size: 16px;
  font-family: 'Lato', sans-serif;
}


</style>
