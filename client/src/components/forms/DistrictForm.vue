<template>
  <div>
    <form onsubmit="event.preventDefault();">
      <h2
        v-if="isEditOrCreate=='Create'">
        Create District
      </h2>
      <h2
        v-else>
        Edit District
      </h2> <br>
      <span 
        class="district-error" 
        id="district-name-error"
        v-if="v$.name.$error">
        Please enter a district name
      </span> <br>
      <input type="text"
        v-model="name"
        placeholder="Name"> <br> <br>
      <span 
        class="district-error" 
        id="district-email-error"
        v-if="v$.email.$error">
        Please enter a valid email address
      </span> <br>
      <input type="text"
        v-model="email"
        placeholder="Email"> <br> <br>
      <span 
        class="district-error" 
        id="district-meetinglocation-error"
        v-if="v$.meetingLocation.$error">
        Please enter a valid meeting location
      </span> <br>
      <input type="text"
        v-model="meetingLocation"
        placeholder="Meeting Location"> <br> <br>  
      <span 
        class="district-error" 
        id="district-meetingfrequency-error"
        v-if="v$.meetingFrequency.$error">
        Please enter a valid meeting frequency
      </span> <br>
      <input type="text"
        v-model="meetingFrequency"
        placeholder="Meeting Frequency"> <br> <br>
      <span 
        class="district-error" 
        id="district-charterdate-error"
        v-if="v$.charterdate.$error">
        Please enter a charter date
      </span> <br>
      <input type="date"
        v-model="charterdate"
        placeholder="Charter Date"> <br> <br>
      <span 
        class="district-error" 
        id="district-president-error"
        v-if="v$.president.$error">
        Please choose a president for the district
      </span> <br>
      <input type="text"
        v-model="president"
        placeholder="President"> <br> <br>
      <span 
        class="district-error" 
        id="district-description-error"
        v-if="v$.description.$error">
        Please enter a description between 100-1000 characters
      </span> <br>
      <input type="text"
        v-model="description"
        placeholder="Description"> <br> <br>
      <button 
        v-if="isEditOrCreate=='Create'"
        @click="validateDistrict">
        Submit
      </button>
      <button 
        v-else
        @click="validateDistrict">
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

import useValidate from '@vuelidate/core'
import { required, maxLength, minLength, email } from '@vuelidate/validators'

export default {
  name: 'NewDistrictForm',
  props: {
    isEditOrCreate: String
  },
  data() {
    return {
        v$: useValidate(),
        name: '',
        email: '',
        meetingLocation: '',
        meetingFrequency: '',
        charterdate: '',
        president: '',
        description: ''
    }
  },
    validations() {
      return {
        name: { 
          required,
          maxLength: maxLength(30), 
        },
        email: { //This needs to be validated on the server via a verification email
          required,
          email,
        },
        meetingLocation: {
          required,
          maxLength: maxLength(50)
        },
        meetingFrequency: {
          required,
          maxLength: maxLength(255)
        },
        charterdate: {
          required,
        },
        president: {
          required
        },
        description: {
          required,
          minLength: minLength(100),
          maxLength: maxLength(1000),
        },
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
      this.email = await districtInfo.district_email
      this.meetingLocation = await districtInfo.meeting_location
      this.meetingFrequency = await districtInfo.meeting_frequency
      this.charterdate = await districtInfo.charter_date
      this.president = await districtInfo.district_president
      this.description = await districtInfo.district_description

      console.log(await districtInfo)
    }
  },

  methods: {
    validateDistrict() {

      this.v$.$validate()
      
      if(!this.v$.$error) {
        if(this.isEditOrCreate == 'Create') {
          this.addNewDistrict()
        } else {
          this.updateExistingDistrict()
        }
      }
    },

    async addNewDistrict() {

      console.log(this.meetingLocation)
      console.log(this.meetingFrequency)

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

.district-error {
  color: red;
  font-size: 12px;
  padding: 0%;
}

</style>