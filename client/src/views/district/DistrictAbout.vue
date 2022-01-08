<template>
  <div class="container">
    <h3>About District</h3> <br>
    <div class="description-container">
      {{$store.state.currentDistrictData.district_description}}
    </div>
  </div>
</template>

<script>

export default {
  name: 'DistrictAbout',
  data() {
    return {
    }
  },
}

</script>

<style scoped>

.container {
  text-align: center;
  width: 50%;
  word-wrap: break-word;
}

</style>