<template>
  <div class="container">
    <!-- Make a call to the API and generate these districts -->
    <router-link to="/district/1">District 1</router-link> <br>
    <router-link to="/district/2">District 2</router-link> <br>
    <router-link to="/district/3">District 3</router-link> <br>
  </div>
</template>

<script>

export default {
  name: 'ViewtDistricts'
}

</script>

<style scoped>

.container {
  text-align: center;
}

</style>