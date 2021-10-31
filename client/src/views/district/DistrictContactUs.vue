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

import store from '../../store/index'

export default {
  name: 'DistrictContactUs',
  data() {
    return {
      districtEmail: '',
      districtAddress: ''
    }
  },
  methods: {
    async fetchDistrictContactInfo() {
      const res = await fetch(`/api/district/${store.state.currentDistrictId}`, {
        method: 'GET'
      })
      const data = await res.json()
      const districtInfo = await data.districtById
      return {
        email: await districtInfo.district_email,
        address: await districtInfo.meeting_location
      }
    }
  },
  async created() {
    const contactInfo = await this.fetchDistrictContactInfo()
    
    this.districtEmail = await contactInfo.email
    this.districtAddress = await contactInfo.address
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