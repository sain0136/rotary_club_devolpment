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
        <span 
          class="admin-error" 
          v-if="v$.membershipId.$error">
          Please enter the membership id
        </span> <br>
        <input type="text"
          placeholder="Membership ID"
          v-model="membershipId"> <br> <br>
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
        @click="() => {
          if(this.isEditOrCreate == 'Create') {
            this.redirect(true)
          } else {
            redirect(false)
          }
        }">
        Cancel
      </button>
    </form>
  </div>
</template>

<script>

import district from '../../../api-factory/district'
import district_admin from '../../../api-factory/district_admin'
import user from '../../../api-factory/user'

import useValidate from '@vuelidate/core'
import { required, maxLength, minLength, email, requiredIf } from '@vuelidate/validators'

export default {
  name: 'DistrictAdminForm',
  props: {
    isEditOrCreate: String
  },
  data() {
    return {
      /**
       * for the roles dropdown to show the text instead
       * of the number that'll be sent to the server
       */
      roles: new Map(),
      /**
       * In case the form is opened to edit a user, populated on create,
       * otherwise won't be populated
       */
      userIdToEdit: Number,

      //Validation variables
      v$: useValidate(),

      //Const values
      districtRole: 'District Admin', 
      roleType: 1,

      //Others
      districtId: 0,
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
      
      /**
       * For the dropdown to choose which district 
       * the admin will be assigned
       */
      districts: Array,
    }
  },
  validations() {
    return {
      districtId: {
        required
      },
      membershipId: {
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
    this.districts = await district.index()
    this.setUserRoles()
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
    setUserRoles() {
      this.roles.set(1, 'Admin')
      this.roles.set(2, 'District Admin')

      this.roles.set('Admin', 1)
      this.roles.set('District Admin', 2)
    },

    async prePopulateFields() {
      const userIdToEdit = this.$router.currentRoute.value.params.userid
      const userInfo = await user.show(userIdToEdit)

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
        return {
          district_id: this.districtId,
          membership_id: this.membershipId,
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
    },

    validateDistrictAdmin() {
      this.v$.$validate()
      console.log(this.v$.$errors)
      
      if(!this.v$.$error) {
        if(this.isEditOrCreate == 'Create') {
          this.createAdmin()
        } else {
          console.log('here')
          this.updateExistingAdmin()
        }
      } 
    },

    async createAdmin() {
      const userToCreate = this.getUserData()
      await district_admin.create(userToCreate)
      this.redirect(true)
    },

    async updateExistingAdmin() {
      const id = this.$router.currentRoute.value.params.userid
      const userToUpdate = this.getUserData()
      await district_admin.update(id, userToUpdate)
      this.redirect(false)
    },

    redirect(fromCreate) {
      if(fromCreate) {
        this.$router.push('./view')
      } else {
        this.$router.push('../view')
      }
    },
    
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