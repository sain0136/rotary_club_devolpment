<template>
  <div>
    <form onsubmit="event.preventDefault();">
      <div class="form-field">
        <span 
          class="user-error" 
          id="user-roletype-error"
          v-if="v$.roleType.$error">
          Please select a role type
        </span> <br>
          <label for="Admin">Admin</label>
          <input 
            type="radio" 
            name="User" 
            value="1"
            v-model="roleType">
          <br><br>
          <label for="Admin">User</label>
          <input 
            type="radio" 
            name="User" 
            value="2"
            v-model="roleType">          
         <br> <br>
      </div>
      <div class="form-field">
        <span 
          class="user-error" 
          id="user-firstname-error"
          v-if="v$.firstName.$error">
          Please enter the first name
        </span> <br>
        <input type="text"
          placeholder="First Name"
          v-model="firstName"> <br> <br>
      </div>
      <div class="form-field">
        <span 
          class="user-error" 
          id="user-lastname-error"
          v-if="v$.lastName.$error">
          Please enter the last name
        </span> <br>
        <input type="text"
          placeholder="Last Name"
          v-model="lastName"> <br> <br>
      </div>
      <div class="form-field">
        <span 
          class="user-error" 
          id="user-address-error"
          v-if="v$.address.$error">
          Please enter the address
        </span> <br>
        <input type="text"
          placeholder="Address"
          v-model="address"> <br> <br> 
      </div>
      <div class="form-field">
        <span 
          class="user-error" 
          id="user-city-error"
          v-if="v$.city.$error">
          Please enter the city
        </span> <br>
        <input type="text"
          placeholder="City"
          v-model="city"> <br> <br>
      </div>
      <div class="form-field">
        <span 
          class="user-error" 
          id="user-postal-error"
          v-if="v$.postal.$error">
          Please enter the postal code
        </span> <br>
        <input type="text"
          placeholder="Postal Code"
          v-model="postal"> <br> <br>
      </div>
      <div class="form-field">
        <span 
          class="user-error" 
          id="user-province-error"
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
          class="user-error" 
          id="user-phone-error"
          v-if="v$.phone.$error">
          Please enter the phone number
        </span> <br>
        <input type="tel"
          placeholder="Phone"
          v-model="phone"> <br> <br>      
      </div>
      <div class="form-field">
        <span 
          class="user-error" 
          id="user-email-error"
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
          class="user-error" 
          id="user-password-error"
          v-if="v$.password.$error">
          Please enter a valid password
        </span> <br>
        <input type="password"
          placeholder="Password"
          v-model="password"> <br> <br>  
      </div>
      <button 
        v-if="isEditOrCreate=='Create'"
        @click="validateClubUser">
        Submit
      </button>
      <button 
        v-else
        @click="validateClubUser">
        Update
      </button>
      <button
        @click="() => this.$router.push('users')">
        Cancel
      </button>
    </form>
  </div>
</template>

<script>

import store from '../../store/index'

import useValidate from '@vuelidate/core'
import { required, email } from '@vuelidate/validators'

export default {
  name: 'NewClubUserForm',
  props: {
    isEditOrCreate: String
  },
  data() {
    return {

      //Validation variable
      v$: useValidate(),

      clubRole: '', 
      roleType: 0,

      clubId: store.state.currentClubId,
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

      roles: new Map()
    }
  },
  validations() {
    return {
      // clubRole: {
      //   required        
      // },
      roleType: {
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
    
    this.roles.set(1, 'Admin')
    this.roles.set(2, 'User')

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
    validateClubUser() {

      this.v$.$validate()
      console.log(this.v$.$errors)
      
      if(!this.v$.$error) {
        if(this.isEditOrCreate == 'Create') {
          this.createNewUser()
        } else {
          console.log('here')
          this.updateExistingUser()
        }
      } 
    },

    async createNewUser() {

      if(this.roleType == 1) {
        this.clubRole = 'Admin'
      } else {
        this.clubRole = 'User'
      }
      
      let userToCreate = {
        club_id: this.clubId,
        membership_id: Date.now(), //Temporarily as a random value
        role_type: this.roleType,
        club_role: this.clubRole,
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

      console.log(await res.json())

      this.$router.push('/club/users');
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

      this.$router.push('viewdistrictadmins');
    },
  },
}
</script>

<style scoped>

form {
  text-align: center;
  font-size: 14px;
}

.user-error {
  color: red;
  font-size: 12px;
  padding: 0%;
}

</style>