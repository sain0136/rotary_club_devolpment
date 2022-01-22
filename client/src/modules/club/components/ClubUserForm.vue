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
            value="5"
            v-model="roleType">
          <br><br>
          <label for="Admin">User</label>
          <input 
            type="radio" 
            name="User" 
            value="7"
            v-model="roleType">          
         <br> <br>
      </div>
      <div class="form-field">
        <input type="text"
          placeholder="Membership Id"
          v-model="membershipId"> <br> <br>
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
        @click="() => this.$router.push(`/club/${this.$router.currentRoute.value.params.id}/users/view`)">
        Cancel
      </button>
    </form>
  </div>
</template>

<script>

import store from '../../../store/index'

import useValidate from '@vuelidate/core'
import { required, email, requiredIf } from '@vuelidate/validators'

import user from '../../../api-factory/user'
import club from '../../../api-factory/club'

export default {
  name: 'ClubUserForm',
  props: {
    isEditOrCreate: String
  },
  data() {
    return {

      //Validation variable
      v$: useValidate(),

      clubRole: '', 
      roleType: 0,

      clubId: this.$router.currentRoute.value.params.id,
      membershipId: '',
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
    }
  },
  validations() {
    return {
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
        required: requiredIf(function () {
          return this.isEditOrCreate == 'Create'
        })
      }
    }
  },
  async created() {
    //If the form is to be used for update, the data is pre-populated 
    //with the specific district's data coming from the API. If it's to be 
    //created, data is empty by default.
    if(this.isEditOrCreate == 'Edit') {
      this.prePopulateFields()
    }
  },
  methods: {
    async prePopulateFields() {
      const userInfo = await user.show(this.$router.currentRoute.value.params.userid)

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
    },

    getUserData() {
      
      if(this.roleType == '5') {
        this.clubRole = 'Admin'
      } else if (this.roleType == '7'){
        this.clubRole = 'User'
      }

      return {
        club_id: this.clubId,
        membership_id: this.membershipId,
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
    },

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
      const userToCreate = this.getUserData()
      await user.create(userToCreate)
      this.redirect(true)
    },

    async updateExistingUser() {
      const clubUserToUpdate = this.getUserData()
      await user.update(this.$router.currentRoute.value.params.userid, clubUserToUpdate)
      this.redirect(false)
    },

    redirect(fromCreate) {
      if(fromCreate) {
        this.$router.push('./view');
      } else {
        this.$router.push('../view')
      }
    }
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