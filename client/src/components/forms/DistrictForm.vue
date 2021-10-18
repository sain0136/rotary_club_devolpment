<template>
  <div>
    <form>
      <input type="text"
        v-model="name"
        placeholder="Name"> <br> <br>
      <input type="text"
        v-model="email"
        placeholder="Email"> <br> <br>
      <input type="text"
        v-model="meetingLocation"
        placeholder="Meeting Location"> <br> <br>  
      <input type="text"
        v-model="meetingFrequency"
        placeholder="Meeting Frequency"> <br> <br>
      <input type="date"
        v-model="charterdate"
        placeholder="Charter Date"> <br> <br>
      <input type="text"
        v-model="president"
        placeholder="President"> <br> <br>
      <input type="text"
        v-model="description"
        placeholder="Description"> <br> <br>
      <button 
        v-if="isEditOrCreate=='Create'"
        @click="addNewDistrict">
        Submit
      </button>
      <button 
        v-else
        @click="updateExistingDistrict">
        Update
      </button>
      <button
        @click="() => this.$router.push('viewdistricts')">
        Cancel
      </button>
    </form>
  </div>
</template>

<script>

import store from '../../store/index'

export default {
  name: 'NewDistrictForm',
  props: {
    isEditOrCreate: String
  },
  data() {
    return {
        name: '',
        email: '',
        meetingLocation: '',
        meetingFrequency: '',
        charterdate: '',
        president: '',
        description: ''
    }
  },

  async created() {
    //If the form is to be used for update, the data is pre-populated 
    //with the specific district's data coming from the API. If it's to be 
    //created, data is empty by default.
    if(this.isEditOrCreate == 'Edit') {
      const res = await fetch(`/api/district/${store.state.currentDistrictId}`, 
        {method: 'GET'}
      )
      const data = await res.json()
      const districtInfo = await data.districtById

      this.name = await districtInfo.district_name
      this.location = await districtInfo.meeting_location
      this.meeting = await districtInfo.meeting_frequency
      this.charterdate = await districtInfo.charter_date
      this.email = await districtInfo.district_email
      this.description = await districtInfo.district_description
    }
  },

  methods: {

    async addNewDistrict(event) {
      event.preventDefault()
      
      let districtToAdd = {
        district_name: this.name,
        district_email: this.email,
        meeting_location: this.meetingLocation,
        meeting_frequency: this.meetingFrequency,
        charter_date: this.charterdate,
        district_president: this.president,
        district_description: this.description
      }

      const res = await fetch('/api/district', { 
        method: 'POST', 
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(districtToAdd)
      })

      this.$router.push('viewdistricts');
    },

    async updateExistingDistrict(event) {
      event.preventDefault()

      let districtToUpdate = {
        district_name: this.name,
        district_email: this.email,
        meeting_location: this.meetingLocation,
        meeting_frequency: this.meetingFrequency,
        charter_date: this.charterdate,
        district_president: this.president,
        district_description: this.description
      }

      const res = await fetch(`/api/district/${store.state.currentDistrictId}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(districtToUpdate)
      })

      this.$router.push('viewdistricts');
    },
  },
}
</script>

<style scoped>

form {
  text-align: center;
}

</style>