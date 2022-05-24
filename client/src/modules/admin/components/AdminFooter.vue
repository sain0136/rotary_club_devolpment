<template>
<!-- Site Admin Footer -->
  <nav>
    <p>RotaryProjects<br><a href="mailto:labelle@payfines.ca">info@rotaryprojects.com</a></p>

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
@import url('https://fonts.googleapis.com/css?family=Lato:100,100i,300,300i,400,400i,700,700i,900,900i|Lobster+Two:400,400i,700,700i|Montserrat:100,100i,200,200i,300,300i,400,400i,500,500i,600,600i,700,700i,800,800i,900,900i|Roboto:100,100i,300,300i,400,400i,500,500i,700,700i,900,900i');
/* Site Amin Footer Styling */
nav {
  background-color: #000000;
  box-shadow: 0px 3px 5px 0 rgba(0,0,0,.9);
  padding-top: 1em;
  margin-top: auto;
  background-color: #232323;
	border-top:1px solid #2e2e2e;
  color: #ffffff;
  display: flex;
  flex-direction: column;
}

p {
  text-align: center;
  font-weight: 500;
  font-size: 1.2rem;
  font-family: 'Lato', sans-serif;
}


</style>
