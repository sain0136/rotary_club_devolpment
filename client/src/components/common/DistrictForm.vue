<template>
  <div class="form-container">
    <div class="auto-container1">
      <form @submit.prevent="">
        <div class="page-title">
          <div class="auto-container2">
            <div class="inner-box">
              <h1
                v-if="
                  isEditOrCreate ==
                  'Create'
                "
              >
                Create a new District
              </h1>
              <h1 v-else>
                Edit this District
              </h1>
            </div>
          </div>
        </div>
        <br />
        <div class="row">
          <div class="form-field">
            <span>Name:</span>
            <span
              class="district-error"
              id="district-name-error"
              v-if="v$.name.$error"
            >
              Please enter a name for
              the district
              <br />
            </span>
            <input
              type="text"
              name="name"
              v-model="name"
              placeholder="District Name"
              aria-label="District Name"
            />
            <br />
            <br />
          </div>
          <!-- <label for="president">District President</label> <br> -->
          <div class="form-field">
            <span>President:</span>

            <span
              class="district-error"
              id="district-president-error"
              v-if="v$.president.$error"
            >
              Please enter a district
              president
              <br />
            </span>

            <input
              name="president"
              type="text"
              v-model="president"
              placeholder="President"
              aria-label="Presidents Name"
            />
            <br />
            <br />
          </div>
          <!-- <label for="Email">Email</label> <br> -->
          <div class="form-field">
            <span>Email:</span>
            <span
              class="district-error"
              id="district-email-error"
              v-if="v$.email.$error"
            >
              Please enter a valid email
              address <br />
            </span>
            <input
              type="text"
              name="email"
              v-model="email"
              placeholder="Email"
              aria-label="Email"
            />
            <br />
            <br />
          </div>
        </div>

        <div class="row">
          <div class="form-field">
            <!-- <label for="meeting-location"></label> -->
            <span
              >Meeting Location:</span
            >
            <span
              class="district-error"
              id="district-meetinglocation-error"
              v-if="
                v$.meetingLocation
                  .$error
              "
            >
              Please enter a meeting
              location <br />
            </span>
            <input
              type="text"
              name="meeting-location"
              v-model="meetingLocation"
              aria-label="Meeting Location"
              placeholder="Meeting Location"
            />
            <br />
            <br />
          </div>
          <div class="form-field">
            <span
              >Meeting Frequency:</span
            >
            <span
              class="district-error"
              id="district-meetingfrequency-error"
              v-if="
                v$.meetingFrequency
                  .$error
              "
            >
              Please enter a meeting
              frequency. Ex:Weekly,
              Bi-Weekly
            </span>
            <br />
            <input
              type="text"
              v-model="meetingFrequency"
              placeholder="Meeting Frequency"
              aria-label="Meeting Frequency"
            />
            <br />
            <br />
          </div>
          <div class="form-field">
            <span>Charter Date:</span>
            <span
              class="district-error"
              id="district-charterdate-error"
              v-if="
                v$.charterdate.$error
              "
            >
              Please enter a charter
              date
            </span>
            <br />
            <input
              type="date"
              v-model="charterdate"
              placeholder="Charter Date"
              aria-label="Meeting Frequency"
            />
            <br />
            <br />
          </div>
        </div>

        <div class="row">
          <div class="form-field">
            <span>Meeting City:</span>
            <span
              class="district-error"
              id="district-meetingCity-error"
              v-if="
                v$.meetingCity.$error
              "
            >
              Please limit city name to
              30 characters
            </span>
            <br />
            <input
              type="text"
              v-model="meetingCity"
              placeholder="Meeting City"
              aria-label="Meeting City"
            />
            <br />
            <br />
          </div>

          <div class="form-field">
            <span>District Phone:</span>
            <span
              class="district-error"
              id="district-phone-error"
              v-if="v$.phone.$error"
            >
              Please limit phone number
              to 30 characters
            </span>
            <br />
            <input
              type="text"
              v-model="phone"
              placeholder="phone number"
              aria-label="phone number"
            />
            <br />
            <br />
          </div>
        </div>
        <div class="last-row">
          <div class="text-area">
            <span>
              District Description:
              <p>
                (100-1000 words)
              </p></span
            >
            <span
              class="district-error"
              id="district-description-error"
              v-if="
                v$.description.$error
              "
            >
              Please enter a description
              between 100-1000
              characters
            </span>
            <br />
            <textarea
              cols="90"
              rows="10"
              v-model="description"
              placeholder="District Description"
              aria-label="District Description"
            >
            </textarea
            ><br />
            <br />
          </div>
        </div>
        <br />
        <div class="button-row">
          <button
            v-if="
              isEditOrCreate == 'Create'
            "
            @click="validateDistrict"
          >
            Submit
          </button>
          <button
            v-else
            @click="validateDistrict"
          >
            Update
          </button>
          <button
            id="cancel"
            @click="() => redirect()"
          >
            Cancel
          </button>
        </div>
        <SocialLinksSection
          id="Socia-Section"
          isDistrictOrClub="District"
          v-if="
            isEditOrCreate == 'Edit'
          "
        />
      </form>
    </div>
  </div>
</template>

<script>
import SocialLinksSection from './SocialLinksSection.vue'

import store from '../../store/index'
import user from '../../api-factory/user'
import district from '../../api-factory/district'

import useValidate from '@vuelidate/core'
import {
  required,
  maxLength,
  minLength,
  email,
} from '@vuelidate/validators'

export default {
  name: 'DistrictForm',
  components: {
    SocialLinksSection,
  },
  props: {
    isEditOrCreate: String,
    pageAccessed: String,
    districtEdit: Boolean,
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
      meetingCity: '',
      phone: '',
    }
  },
  validations() {
    return {
      name: {
        required,
        maxLength: maxLength(30),
      },
      phone: {
        maxLength: maxLength(40),
      },
      meetingCity: {
        maxLength: maxLength(30),
      },
      president: {
        required,
      },
      email: {
        //This needs to be validated on the server too via a verification email
        required,
        email,
      },
      meetingLocation: {
        required,
        maxLength: maxLength(50),
      },
      meetingFrequency: {
        required,
        maxLength: maxLength(255),
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
    if (this.isEditOrCreate == 'Edit') {
      this.prePopulateFields()
    }
  },

  methods: {
    async prePopulateFields() {
      // const districtInfo = store.state.currentDistrictData
      const districtIdToEdit = this
        .$router.currentRoute.value
        .params.id
      const districtInfo = await district.show(
        districtIdToEdit,
      )

      this.name = await districtInfo.district_name
      this.president = await districtInfo.district_president
      this.email = await districtInfo.district_email
      this.meetingLocation = await districtInfo.meeting_location
      this.meetingFrequency = await districtInfo.meeting_frequency
      this.charterdate = await districtInfo.charter_date
      this.description = await districtInfo.district_description
      this.meetingCity = await districtInfo.meeting_city
      this.phone = await districtInfo.district_phone
    },

    getDistrictData() {
      return {
        district_name: this.name,
        district_president: this
          .president,
        district_email: this.email,
        meeting_location: this
          .meetingLocation,
        meeting_frequency: this
          .meetingFrequency,
        charter_date: this.charterdate,
        district_description: this
          .description,
        meeting_city: this.meetingCity,
        district_phone: this
          .district_phone,
      }
    },

    validateDistrict() {
      console.log('validating')

      this.v$.$validate()
      console.log(this.v$.$errors)

      if (!this.v$.$error) {
        if (
          this.isEditOrCreate ==
          'Create'
        ) {
          this.createDistrict()
        } else {
          this.updateExistingDistrict()
        }
      }
    },

    async createDistrict() {
      console.log(
        'creating new district',
      )
      const districtToCreate = this.getDistrictData()
      await district.create(
        districtToCreate,
      )
      this.redirect()
    },

    async updateExistingDistrict() {
      const districtIdToEdit = this
        .$router.currentRoute.value
        .params.id
      const districtToUpdate = this.getDistrictData()

      await district.update(
        districtIdToEdit,
        districtToUpdate,
      )

      //To dynamically update right after making the edit
      store.dispatch(
        'changeCurrentDistrictData',
        this.$router.currentRoute.value
          .params.id,
      )
      this.redirect()
    },

    redirect() {
      //if the edit is being made from the admin portal
      if (
        this.pageAccessed == 'District'
      ) {
        this.$router.push({
          name: 'DistrictEdit2',
        })
        //if it's from the district portal
      } else {
        if (
          this.isEditOrCreate ==
          'Create'
        ) {
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
.form-container {
  min-height: 60%;
}
.auto-container1 {
  position: static;
  max-width: 1200px;
  padding: 0px 15px;
  margin: 0 auto;
}
.auto-container2 {
  position: static;
  max-width: 1200px;
  padding: 0px 15px;
  margin: 0 auto;
}
.page-title .inner-box {
  position: relative;
}
.page-title {
  position: relative;
  padding: 30px 0px 40px;
  background-size: cover;
  text-align: center;
  background-attachment: fixed;
  background-repeat: no-repeat;
  background-position: center center;
  background-image: url(../../assets/image-3.jpg);
}

span {
  display: block;
  text-align: center;
}
button {
  box-sizing: border-box;
  width: 40%;
  background-color: #ffb607;

  color: white;
  border: 1px solid #3498db;
  border-radius: 3px;
  font-size: 1.5em;
  font-weight: bold;
  margin-top: 1%;
  cursor: pointer;
}
.button-row {
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-bottom: 2em;
  column-gap: 1em;
}
#Socia-Section {
  width: 100%;
}

form {
  background-color: rgb(255, 255, 255);
  color: rgb(0, 0, 0);
}
.row {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
}
.last-row {
  display: flex;
  flex-direction: row;
  justify-content: center;
}
.form-field {
  width: 33.333%;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.text-area {
  display: flex;
  flex-direction: column;
  justify-content: center;
}
input {
  background-color: #f3f3f3;
  border: none;
  border-bottom: 1px solid #00090e25;
  padding: 15px 20px;
  border-radius: 1px;
  margin: 5px auto;
  background-color: #f7f7f7;
  border: 1px solid silver;
}
textarea {
  background-color: #f3f3f3;
  border: none;
  border-bottom: 1px solid #00090e25;
  padding: 15px 20px;
  border-radius: 1px;
  margin: 5px auto;
  background-color: #f7f7f7;
  border: 1px solid silver;
}

label {
  font-weight: bold;
}

.fieldset {
  background-color: #ffb607;
  padding-bottom: 5%;
  padding-top: 5%;
}

h1 {
  font-size: 72px;
  margin-bottom: 0px;
  font-weight: 800;
  color: #ffffff;
  text-transform: capitalize;
  text-align: center;
}

.district-error {
  color: red;
  font-size: 12px;
  padding: 0%;
}
</style>
