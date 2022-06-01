<template>
  <!-- SiteAdmin Home -->
  <div class="sections" id="admin-home" key="one">
    <h2>
      Welcome to the admin portal!<br />
      This is the admin portal.
    </h2>
    <br />
    <div class="image">
      <img
        src="../assets/admin-logo-2.png"
      />
    </div>

    <p>
      From this page you can create,
      edit, and delete districts. <br />
      You can additionally assign admins
      to the districts once they are
      created.
    </p>
  </div>
</template>

<script>
export default {
  name: 'SiteAdminHome',
  components: {},
}
</script>

<style scoped>
/* Site Admin Home Styling */
.sections {
  display: flex;
  flex-direction: column;
  margin-bottom: 3em;
}
.image {
  display: flex;
  justify-content: center;
}
img {
 max-width: 10%;
  height: auto;}

h2 {
  margin-top: 5%;
  text-align: center;
  text-transform: uppercase;
  color: #1a374d;
}

p {
  margin-top: 2em;
  color: #1a374d;
  text-align: center;
  font-weight: normal;
  font-size: 20px;
}
</style>
