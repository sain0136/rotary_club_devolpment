<template>
  <div>
    <form onsubmit="event.preventDefault();">
      <h2>
        Club Form
      </h2>
      <div class="form-field">
        <span 
          class="club-error" 
          id="club-name-error"
          v-if="v$.name.$error">
          Please enter a valid club name
        </span> <br>
        <input type="text"
          v-model="name"
          placeholder="Name"> <br> <br>
      </div>
      <div class="form-field">
        <span 
          class="club-error" 
          id="club-address-error"
          v-if="v$.address.$error">
          Please enter a valid address
        </span> <br>
        <input type="text"
          v-model="address"
          placeholder="Address"> <br> <br>
      </div>  
      <div class="form-field">
        <span 
          class="club-error" 
          id="club-city-error"
          v-if="v$.city.$error">
          Please enter a valid city
        </span> <br>
        <input type="text"
          v-model="city"
          placeholder="City"> <br> <br>
      </div>
      <div class="form-field">
        <span 
          class="club-error" 
          id="club-postal-error"
          v-if="v$.postal.$error">
          Please enter a valid postal code
        </span> <br>
        <input type="text"
          v-model="postal"
          placeholder="Postal"> <br> <br>
      </div>
      <div class="form-field">
        <input type="text"
          v-model="province"
          placeholder="Province"> <br> <br>
      </div>
      <div class="form-field">
        <input type="text"
          v-model="country"
          placeholder="Country"> <br> <br>
      </div>
      <div class="form-field">
        <span 
          class="club-error" 
          id="club-phone-error"
          v-if="v$.phone.$error">
          Please enter a valid phone number
        </span> <br>
        <input type="text"
          v-model="phone"
          placeholder="Phone"> <br> <br>
      </div>
      <div class="form-field">
        <span 
          class="club-error" 
          id="club-description-error"
          v-if="v$.description.$error">
          Please enter a valid club description
        </span> <br>
        <input type="text"
          v-model="description"
          placeholder="Description"> <br> <br>
      </div>
      <div class="form-field">
        <span 
          class="club-error" 
          id="club-email-error"
          v-if="v$.email.$error">
          Please enter a valid email
        </span> <br>
        <input type="text"
          v-model="email"
          placeholder="Email"> <br> <br>
      </div>
      <div class="form-field">
        <span 
          class="club-error" 
          id="club-charter-error"
          v-if="v$.charterDate.$error">
          Please enter a charter date
        </span> <br>
        <input type="date"
          v-model="charterDate"
          placeholder="Charter Date"> <br> <br>
      </div>
      <div class="form-field">
        <input type="text"
          v-model="motherClub"
          placeholder="Mother Club"> <br> <br>
      </div>
      <button 
        v-if="isEditOrCreate=='Create'"
        @click="validateClub">
        Submit
      </button>
      <button 
        v-else
        @click="validateClub">
        Update
      </button>
      <button
        @click="() => this.$router.push(`/district/${this.$router.currentRoute.value.params.id}/clubs/view`)">
        Cancel
      </button>
    </form>
  </div>
</template>

<script>

import useValidate from '@vuelidate/core'
import { required, maxLength, minLength, email } from '@vuelidate/validators'

import club from '../../../api-factory/club'
import store from '../../../store/index'

export default {
  name: 'ClubForm',
  props: {
    isEditOrCreate: String
  },
  data() {
    return {
      v$: useValidate(),
      name: '',
      address: '',
      city: '',
      postal: '',
      province: '',
      country: '',
      phone: '',
      description: '',
      email: '',
      charterDate: '',
      motherClub: '',
      
      clubId: this.$router.currentRoute.value.params.clubid,
      districtId: this.$router.currentRoute.value.params.id
    }
  },
  validations() {
    return {
      name: {
        required,
        maxLength: maxLength(30),
      },
      address: {
        required,
      },
      city: {
        required,
      },
      postal: {
        required,
      },
      province: {
        required,
      },
      phone: {
        required,
      },
      description: {
        required, 
        maxLength: maxLength(1000),
        minLength: minLength(100)
      },
      email: {
        required,
        email,
      },
      charterDate: {
        required,
      },
    }
  },
  async created() {
    if(this.isEditOrCreate == 'Edit') {
      this.prePopulateFields()
    }
  },
  methods: {
    async prePopulateFields() {
      const clubInfo = await club.show(this.$router.currentRoute.value.params.clubid)

      this.name = await clubInfo.club_name
      this.address = await clubInfo.club_address
      this.city = await clubInfo.club_city
      this.postal = await clubInfo.club_postal
      this.province = await clubInfo.club_province
      this.country = await clubInfo.club_country
      this.phone = await clubInfo.club_phone
      this.email = await clubInfo.club_email
      this.description = await clubInfo.club_description
      this.motherClub = await clubInfo.mother_club
      this.charterDate = await clubInfo.charter_date
    },

    getClubData() {
      return {
        club_name: this.name,
        club_address: this.address,
        club_city: this.city,
        club_postal: this.postal,
        club_province: this.province,
        club_country: this.country,
        club_phone: this.phone,
        club_description: this.description,
        club_email: this.email,
        charter_date: this.charterDate,
        mother_club: this.motherClub,
        district_id: this.districtId
      }
    },

    validateClub() {
      this.v$.$validate()

      if(!this.v$.$error) {
        if(this.isEditOrCreate == 'Create') {
          console.log('Validation create')
          this.createNewClub()
        } else {
          this.updateExistingClub()
        }
      }
    },
    
    async createNewClub() {
      const clubToCreate = this.getClubData()
      club.create(clubToCreate)
      this.redirect(true)
    },

    async updateExistingClub() {
      const clubToUpdate = this.getClubData()
      club.update(this.clubId, clubToUpdate)
      this.redirect(false)
    },

    redirect(fromCreate) {
      if(fromCreate) {
        this.$router.push('./view')
      } else {
        this.$router.push('../view')
      }
    }
  }
}
</script>

<style scoped>

form {
  text-align: center;
}

.club-error {
  color: red;
  font-size: 12px;
  padding: 0%;
}

</style>