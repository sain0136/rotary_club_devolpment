<template>
  <div>
    <div class="district-page-head">
      <h1 class="district-page-title">
        Welcome to District 
        {{ $store.state.currentDistrictData.district_name}} !
      </h1>
      <!-- <h2 v-if="$store.state.isDistrictAdminLoggedIn">
        <br> District Admin!
      </h2>
      <h2 v-if="$store.state.isSiteAdminLoggedIn">
        <br> Site Admin!
      </h2> -->
    </div>
    <br /><br />
    <img src="../assets/rotary-logo.png" alt="">
  </div>
</template>

<script>
export default {
  name: 'DistrictHome',
}
</script>

<style scoped>

h1, h2 {
  font-family: 'Montserrat', sans-serif;
  font-weight: 700;
  color: whitesmoke;
}

img {
  margin-left: 33%;
  height: 500px;
  margin-bottom: -250px;
}
</style>
