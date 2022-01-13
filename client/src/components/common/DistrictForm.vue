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
      <div class="form-field">
        <span 
          class="district-error" 
          id="district-name-error"
          v-if="v$.name.$error">
          Please enter a district name
        </span> <br>
        <input type="text"
          v-model="name"
          placeholder="Name"> <br> <br>
      </div>
      <div class="form-field">
        <span 
          class="district-error" 
          id="district-email-error"
          v-if="v$.email.$error">
          Please enter a valid email address
        </span> <br>
        <input type="text"
          v-model="email"
          placeholder="Email"> <br> <br>
      </div>
      <div class="form-field">
        <span 
          class="district-error" 
          id="district-meetinglocation-error"
          v-if="v$.meetingLocation.$error">
          Please enter a valid meeting location
        </span> <br>
        <input type="text"
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
          id="district-president-error"
          v-if="v$.president.$error">
          Please choose a president for the district
        </span> <br>
        <select name="admins" v-model="president">
          <option disabled selected>Admins</option>
          <option 
            v-for="admin in admins"
            :key="admin.user_id"
            value="{{admin.user_id}}"> 
            {{admin.firstname}} 
          </option>
        </select> <br>
      </div>
      <div class="form-field">
        <span 
          class="district-error" 
          id="district-description-error"
          v-if="v$.description.$error">
          Please enter a description between 100-1000 characters
        </span> <br>
        <input type="text"
          v-model="description"
          placeholder="Description"> <br> <br>
      </div>
      <DistrictSocialLinks v-if="isEditOrCreate=='Edit'"/> <br>
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
        v-if="pageAccessed == 'Admin'"
        @click="() => this.$router.push('../view')">
        Cancel
      </button>
    </form>

  </div>
</template>

<script>

import DistrictSocialLinks from './DistrictSocialLinks.vue'

import store from '../../store/index'
import user from '../../api-factory/user'
import district from '../../api-factory/district'

import useValidate from '@vuelidate/core'
import { required, maxLength, minLength, email } from '@vuelidate/validators'

export default {
  name: 'NewDistrictForm',
  components: {
    DistrictSocialLinks
  },
  props: {
    isEditOrCreate: String,
    pageAccessed: String
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
        description: '',

        admins: []
    }
  },
    validations() {
      return {
        name: { 
          required,
          maxLength: maxLength(30), 
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
    this.admins = await user.index() //TODO change to admins from users
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
      this.email = await districtInfo.district_email
      this.meetingLocation = await districtInfo.meeting_location
      this.meetingFrequency = await districtInfo.meeting_frequency
      this.charterdate = await districtInfo.charter_date
      this.president = await districtInfo.district_president
      this.description = await districtInfo.district_description
    },

    getDistrictData() {
      return {
        district_name: this.name,
        district_email: this.email,
        meeting_location: this.meetingLocation,
        meeting_frequency: this.meetingFrequency,
        charter_date: this.charterdate,
        district_president: this.president,
        district_description: this.description
      }
    },
    
    validateDistrict() {
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
      const districtToCreate = this.getDistrictData()
      await district.create(districtToCreate)
      this.$router.push('./view');
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
      if(window.location.pathname == '/admin/districts/edit') {
        this.$router.push('./view')
      //if it's from the district portal
      } else {
        this.$router.push('home')
      }
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