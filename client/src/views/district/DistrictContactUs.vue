<template>
  <div class="container">
    <h3>Contact Information</h3> <br>
    <div class="description-container">
      Address: {{$store.state.currentDistrictData.meeting_location}} <br>
      Email: {{$store.state.currentDistrictData.district_email}}
    </div>
  </div>
</template>

<script>

export default {
  name: 'DistrictContactUs',
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