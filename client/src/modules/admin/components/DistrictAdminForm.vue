<template>
  <div>
    <form onsubmit="event.preventDefault();">
      <div class="form-field">
        <span 
          class="admin-error" 
          id="admin-district-error"
          v-if="v$.districtId.$error">
          Please select a district to assign the admin 
        </span> <br>
        <select name="districts" v-model="districtId">
          <option disabled selected>Districts</option>
          <option 
            v-for="district in districts"
            :key="district.district_id"
            :value="district.district_id"> 
            {{district.district_name}} 
          </option>
        </select> <br> <br>
      </div>
      <div class="form-field">
        <span 
          class="admin-error" 
          id="admin-firstname-error"
          v-if="v$.firstName.$error">
          Please enter the first name
        </span> <br>
        <input type="text"
          placeholder="First Name"
          v-model="firstName"> <br> <br>
      </div>
      <div class="form-field">
        <span 
          class="admin-error" 
          id="admin-lastname-error"
          v-if="v$.lastName.$error">
          Please enter the last name
        </span> <br>
        <input type="text"
          placeholder="Last Name"
          v-model="lastName"> <br> <br>
      </div>
      <div class="form-field">
        <span 
          class="admin-error" 
          id="admin-address-error"
          v-if="v$.address.$error">
          Please enter the address
        </span> <br>
        <input type="text"
          placeholder="Address"
          v-model="address"> <br> <br> 
      </div>
      <div class="form-field">
        <span 
          class="admin-error" 
          id="admin-city-error"
          v-if="v$.city.$error">
          Please enter the city
        </span> <br>
        <input type="text"
          placeholder="City"
          v-model="city"> <br> <br>
      </div>
      <div class="form-field">
        <span 
          class="admin-error" 
          id="admin-postal-error"
          v-if="v$.postal.$error">
          Please enter the postal code
        </span> <br>
        <input type="text"
          placeholder="Postal Code"
          v-model="postal"> <br> <br>
      </div>
      <div class="form-field">
        <span 
          class="admin-error" 
          id="admin-province-error"
          v-if="v$.province.$error">
          Please enter the province
        </span> <br>
        <select name="roles" v-model="province">
          <option disabled>Province</option>
          <option value="Ontario">Ontario</option>
          <!-- Rest of 'em will to be added later -->
        </select> <br> <br>
      </div>
      <div class="form-field">
        <input type="text"
          placeholder="Canada"
          readonly
          v-model="country"> <br> <br>
      </div>
      <div class="form-field">
        <span 
          class="admin-error" 
          id="admin-phone-error"
          v-if="v$.phone.$error">
          Please enter the phone number
        </span> <br>
        <input type="tel"
          placeholder="Phone"
          v-model="phone"> <br> <br>      
      </div>
      <div class="form-field">
        <span 
          class="admin-error" 
          id="admin-email-error"
          v-if="v$.phone.$error">
          Please enter a valid email address
        </span> <br>
        <input type="email"
          placeholder="Email"
          v-model="email"> <br> <br>
      </div>
      <div class="form-field"
        v-if="isEditOrCreate=='Create'">
        <span 
          class="admin-error" 
          id="admin-password-error"
          v-if="v$.password.$error">
          Please enter a valid password
        </span> <br>
        <input type="password"
          placeholder="Password"
          v-model="password"> <br> <br>  
      </div>
      <button 
        v-if="isEditOrCreate=='Create'"
        @click="validateDistrictAdmin">
        Submit
      </button>
      <button 
        v-else
        @click="validateDistrictAdmin">
        Update
      </button>
      <button
        @click="() => this.$router.push('../view')">
        Cancel
      </button>
    </form>
  </div>
</template>

<script>

import store from '../../../store/index'

import useValidate from '@vuelidate/core'
import { required, maxLength, minLength, email } from '@vuelidate/validators'

const roles = new Map()
roles.set(1, 'Admin')
roles.set(2, 'District Admin')

export default {
  name: 'DistrictAdminForm',
  props: {
    isEditOrCreate: String
  },
  data() {
    return {
      //Validation variables
      v$: useValidate(),

      //Const values
      districtRole: 'District Admin', 
      roleType: 1,

      districtId: 0,
      membershipId: 0,
      firstName: '',
      lastName: '',
      address: '',
      city: '',
      postal: '',
      province: '',
      country: '',
      phone: '',
      email: '',
      password: '',

      districts: [],
    }
  },
  validations() {
    return {
      districtId: {
        required
      },
      firstName: {
        required
      },
      lastName: {
        required
      },
      address: {
        required
      },
      city: {
        required
      },
      postal: {
        required
      },
      province: {
        required
      },
      phone: {
        required
      },
      email: {
        required,
        email
      },
      password: {
        required
      }
    }
  },
  async created() {

    this.districts = await this.fetchDistricts()

    //If the form is to be used for update, the data is pre-populated 
    //with the specific district's data coming from the API. If it's to be 
    //created, data is empty by default.
    if(this.isEditOrCreate == 'Edit') {
      
      
      const res = await fetch(`/api/user/${store.state.currentUserIdToEdit}`, 
        {method: 'GET'}
      )
      const data = await res.json()
      const userInfo = await data.userById

      this.districtId = await userInfo.district_id
      this.membership_id = await userInfo.membership_id
      this.districtRole = await userInfo.district_role
      this.roleType = await userInfo.role_type
      this.firstName = await userInfo.firstname
      this.lastName = await userInfo.lastname
      this.address = await userInfo.address
      this.city = await userInfo.user_city
      this.postal = await userInfo.user_postal
      this.province = await userInfo.user_province
      this.country = await userInfo.user_country
      this.phone = await userInfo.phone
      this.email = await userInfo.email
      this.password = await userInfo.password
    }
  },
  methods: {
    validateDistrictAdmin() {

      this.v$.$validate()
      console.log(this.v$.$errors)
      
      if(!this.v$.$error) {
        if(this.isEditOrCreate == 'Create') {
          this.createNewAdmin()
        } else {
          console.log('here')
          this.updateExistingAdmin()
        }
      } 
    },

    async createNewAdmin() {
      
      let userToCreate = {
        district_id: this.districtId,
        membership_id: Date.now(), //Temporarily as a random value
        role_type: this.roleType,
        district_role: this.districtRole,
        firstname: this.firstName,
        lastname: this.lastName,
        address: this.address,
        user_city: this.city,
        user_postal: this.postal,
        user_province: this.province,
        user_country: this.country,
        phone: this.phone,
        email: this.email,
        password: this.password,
      }

      const res = await fetch('/api/user', { 
        method: 'POST', 
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(userToCreate)})

      console.log(userToCreate)
      console.log(await res.json())

      this.$router.push('./view')
    },

    async updateExistingAdmin() {

      console.log('updated!')

      let districtAdminToUpdate = {
        district_id: this.districtId,
        membership_id: Date.now(),
        district_role: this.districtRole,
        role_type: this.roleType,
        firstname: this.firstName,
        lastname: this.lastName,
        address: this.address,
        user_city: this.city,
        user_postal: this.postal,
        user_province: this.province,
        user_country: this.country,
        phone: this.phone,
        email: this.email,
      }

      const res = await fetch(`/api/user/${store.state.currentUserIdToEdit}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(districtAdminToUpdate)
      })

      this.$router.push('../view')
    },

    async fetchDistricts() {
      const res = await fetch('/api/district/', {method: 'GET'})
      const data = await res.json()
      return await data.districts 
    }
  },
}
</script>

<style scoped>

form {
  text-align: center;
}

.admin-error {
  color: red;
  font-size: 12px;
  padding: 0%;
}

</style>