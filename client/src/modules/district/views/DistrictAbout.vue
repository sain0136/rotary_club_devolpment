<template>
<div>
  <div class="district-page-head">
    <h1 class="district-page-title">About the District</h1>
  </div> <br> <br>
  <div class="description-container">
    {{ $store.state.currentDistrictData.district_description }}
  </div>
</div>
</template>

<script>
export default {
  name: 'DistrictAbout',
  data() {
    return {}
  },
}
</script>

<style scoped>

.description-container {
  text-align: center;
  width: 60%;
  word-wrap: break-word;
  margin: auto;
  font-family: 'Lato' sans-serif;
  font-size: 26px;
  color: #27282d;
  margin-bottom: -200px;
}

</style>
