<template>
  <div class="container">
    <h3>About District</h3> <br>
    <div class="description-container">
      {{this.districtDescription}}
    </div>
  </div>
</template>

<script>

import { fetchDistrictData } from '../../data-bank/district-data'

export default {
  name: 'DistrictAbout',
  data() {
    return {
      districtDescription: ''
    }
  },
  async created() {
    const districtInfo = await fetchDistrictData()
    this.districtDescription = await districtInfo.district_description
  }
}

</script>

<style scoped>

.container {
  text-align: center;
  width: 50%;
  word-wrap: break-word;
}

</style>