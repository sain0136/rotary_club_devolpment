<template>
  <div class="sections" id="admin-home">
    <h2>Welcome to the admin portal!</h2> <br>
    <img src="../assets/admin-logo-2.png">
    <p>
      From this page; you can create, edit, and delete districts and district admins. <br>
      You can also assign admins to the districts once they are created.
    </p>
    
  </div>
</template>

<script>
export default {
  name: 'AdminHome',
  components: {},
}
</script>

<style scoped>

.sections {
  height: 500px;
}

img {
  margin-left: 45%;
  height: 150px;
}

h2 {
  margin-top: 5%;
  text-align: center;
  text-transform: uppercase;
  color: #1A374D;
}

p {
  color: #1A374D;
  text-align: center;
  font-weight: normal;
  font-size: 20px;
}

</style>
