<template>
  <div class="container">
    <form onsubmit="event.preventDefault();">
      <h2
        v-if="isEditOrCreate=='Create'">
        Create District
      </h2>
      <h2
        v-else>
        Edit District
      </h2> <br>
      <div class="form-field">
        <!-- <label for="name">District Name</label> <br> -->
        <span 
          class="district-error" 
          id="district-name-error"
          v-if="v$.name.$error">
          Please enter a district name
          <br>
        </span>
        <input type="text"
          name="name"
          v-model="name"
          placeholder="District Name"> <br> <br>
      </div>
      <div class="form-field">
        <!-- <label for="president">District President</label> <br> -->
        <span 
          class="district-error" 
          id="district-president-error"
          v-if="v$.president.$error">
          Please enter a district president 
          <br>
        </span>
        <input 
          name="president"
          type="text"
          v-model="president"
          placeholder="President"> <br> <br>
      </div>
      <div class="form-field">
        <!-- <label for="Email">Email</label> <br> -->
        <span 
          class="district-error" 
          id="district-email-error"
          v-if="v$.email.$error">
          Please enter a valid email address <br>
        </span> 
        <input type="text"
          name="email"
          v-model="email"
          placeholder="Email"> <br> <br>
      </div>
      <div class="form-field">
        <!-- <label for="meeting-location"></label> -->
        <span 
          class="district-error" 
          id="district-meetinglocation-error"
          v-if="v$.meetingLocation.$error">
          Please enter a valid meeting location  <br>
        </span>
        <input type="text"
          name="meeting-location"
          v-model="meetingLocation"
          placeholder="Meeting Location"> <br> <br>  
      </div>
      <div class="form-field">
        <span 
          class="district-error" 
          id="district-meetingfrequency-error"
          v-if="v$.meetingFrequency.$error">
          Please enter a valid meeting frequency
        </span> <br>
        <input type="text"
          v-model="meetingFrequency"
          placeholder="Meeting Frequency"> <br> <br>
      </div>
      <div class="form-field">
        <span 
          class="district-error" 
          id="district-charterdate-error"
          v-if="v$.charterdate.$error">
          Please enter a charter date
        </span> <br>
        <input type="date"
          v-model="charterdate"
          placeholder="Charter Date"> <br> <br>
      </div>
      <div class="form-field">
        <span 
          class="district-error" 
          id="district-description-error"
          v-if="v$.description.$error">
          Please enter a description between 100-1000 characters
        </span> <br>
        <textarea 
          cols="30" 
          rows="10"
          v-model="description"
          placeholder="Description"></textarea><br> <br>
      </div>
      <SocialLinksSection 
        isDistrictOrClub = 'District'
        v-if="isEditOrCreate=='Edit'"/> <br>
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
        @click="() => redirect()">
        Cancel
      </button>
    </form>

  </div>
</template>

<script>

import SocialLinksSection from './SocialLinksSection.vue'

import store from '../../store/index'
import user from '../../api-factory/user'
import district from '../../api-factory/district'

import useValidate from '@vuelidate/core'
import { required, maxLength, minLength, email } from '@vuelidate/validators'

export default {
  name: 'NewDistrictForm',
  components: {
    SocialLinksSection
  },
  props: {
    isEditOrCreate: String,
    pageAccessed: String
  },
  data() {
    return {
        v$: useValidate(),
        name: '',
        president: '',
        email: '',
        meetingLocation: '',
        meetingFrequency: '',
        charterdate: '',
        description: '',

    }
  },
    validations() {
      return {
        name: { 
          required,
          maxLength: maxLength(30), 
        },
        president: {
          required
        },
        email: { //This needs to be validated on the server too via a verification email
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
        description: {
          required,
          minLength: minLength(100),
          maxLength: maxLength(1000),
        },
      }
    },

  async created() {
     /**
     * If the form is to be used for update, the data is pre-populated 
     * with the specific district's data coming from the API. If it's to be 
     * created, data is empty by default.
     */
    if(this.isEditOrCreate == 'Edit') {
      this.prePopulateFields()
    }
  },

  methods: {
    async prePopulateFields() {
      // const districtInfo = store.state.currentDistrictData
      const districtIdToEdit = this.$router.currentRoute.value.params.id
      const districtInfo = await district.show(districtIdToEdit)

      this.name = await districtInfo.district_name
      this.president = await districtInfo.district_president
      this.email = await districtInfo.district_email
      this.meetingLocation = await districtInfo.meeting_location
      this.meetingFrequency = await districtInfo.meeting_frequency
      this.charterdate = await districtInfo.charter_date
      this.description = await districtInfo.district_description
    },

    getDistrictData() {
      return {
        district_name: this.name,
        district_president: this.president,
        district_email: this.email,
        meeting_location: this.meetingLocation,
        meeting_frequency: this.meetingFrequency,
        charter_date: this.charterdate,
        district_description: this.description
      }
    },
    
    validateDistrict() {
      console.log('validating')

      this.v$.$validate()
      console.log(this.v$.$errors)

      if(!this.v$.$error) {
        if(this.isEditOrCreate == 'Create') {
          this.createDistrict()
        } else {
          this.updateExistingDistrict()
        }
      }
    },

    async createDistrict() {
      console.log('creatin')
      const districtToCreate = this.getDistrictData()
      await district.create(districtToCreate)
      this.redirect()
    },

    async updateExistingDistrict() {
      const districtIdToEdit = this.$router.currentRoute.value.params.id
      const districtToUpdate = this.getDistrictData()

      await district.update(districtIdToEdit, districtToUpdate)

      //To dynamically update right after making the edit
      store.dispatch('changeCurrentDistrictData', this.$router.currentRoute.value.params.id)
      this.redirect()
    },

    redirect() {
      //if the edit is being made from the admin portal
      if(this.pageAccessed == 'District') {
        this.$router.push('./home')
      //if it's from the district portal
      } else {
        if(this.isEditOrCreate == 'Create') {
          this.$router.push('./view')
        } else {
          this.$router.push('../view')
        }
      }
    },
  },
}
</script>

<style scoped>

form {
  text-align: center;
  display: grid;
}

input {
  background-color: #B1D0E0;
  border: none;
  border-bottom: 1px solid #00090e25;
}

label {
  font-weight: bold;
  
}

.container {
  box-shadow: 0px 3px 20px 0 rgba(0,0,0,.8);
  width: 70%; 
  overflow: auto; 
  height: 600px;
  margin-bottom: 50px;
}

h2 {
  font-size: 42px;
}

.district-error {
  color: red;
  font-size: 12px;
  padding: 0%;
}

</style>