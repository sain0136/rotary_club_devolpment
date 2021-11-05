<template>
  <div class="container">
    <h3>Contact Information</h3> <br>
    <div class="description-container">
      Address: {{this.districtAddress}} <br>
      Email: {{this.districtEmail}}
    </div>
  </div>
</template>

<script>

import { fetchDistrictData } from '../../data-bank/district-data'

export default {
  name: 'DistrictContactUs',
  data() {
    return {
      districtEmail: '',
      districtAddress: ''
    }
  },
  async created() {
    const contactInfo = await fetchDistrictData()
    
    this.districtEmail = await contactInfo.district_email
    this.districtAddress = await contactInfo.meeting_location
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