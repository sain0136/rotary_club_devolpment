<template>
  <!-- District create or edit Form container -->
  <div class="form-container">
    <!-- banner -->
    <div class="page-title">
      <div class="auto-container2">
        <div class="inner-box">
          <h1
            v-if="
              isEditOrCreate == 'Create'
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
    <!-- form container -->
    <div class="auto-container1">
      <form @submit.prevent="">
        <br />
        <!-- row 1 -->
        <div class="form-row">
          <!-- form name <br> -->
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
          <!-- form District President <br> -->
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
          <!--form Email <br> -->
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
        <!-- row 2 -->
        <div class="form-row">
          <!-- <form meeting-location -->
          <div class="form-field">
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
          <!-- <form meeting-freq -->
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
          <!-- <form charter date -->
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
        <!-- row 3 -->
        <div class="form-row">
          <!-- <form Meeting city   -->
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
          <!-- <form Phone    -->
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
        <!-- row 4 -->
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
              cols="80"
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
        <!-- button row  -->
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
        <hr class="solid" />
        <br />
      </form>
    </div>
    <SocialLinksSection
      id="Socia-Section"
      isDistrictOrClub="District"
      v-if="isEditOrCreate == 'Edit'"
    />
  </div>
</template>

<script>
import SocialLinksSection from './SocialLinksSection.vue'

import store from '../../../store/index'
import user from '../../../api-factory/user'
import district from '../../../api-factory/district'

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
/* Title  Banner */
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
  background-image: url(../../../assets/image-3.jpg);
}

h1 {
  font-size: 5em;
  margin-bottom: 0px;
  font-weight: 800;
  color: #ffffff;
  text-transform: capitalize;
  text-align: center;
}
/* form fields */
span {
  display: block;
  text-align: center;
  font-family: 'Montserrat';
  font-size: 1.3em;
  font-weight: 500;
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

label {
  font-weight: bold;
}

.fieldset {
  background-color: #ffb607;
  padding-bottom: 5%;
  padding-top: 5%;
}

.district-error {
  color: red;
  font-size: 12px;
  padding: 0%;
}

/* form styling  */

form {
  background-color: rgb(255, 255, 255);
  color: rgb(0, 0, 0);
  display: flex;
  flex-direction: column;
}
/* row stylings*/
.form-row {
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
  flex: 1 1 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.text-area {
  display: flex;
  flex-direction: column;
  justify-content: center;
}
@media only screen and (max-width: 600px) {
  .text-area textarea {
    width: 95%;
    background-color: #f3f3f3;
    border: none;
    border-bottom: 1px solid #00090e25;
    padding: 15px 20px;
    border-radius: 1px;
    margin: 5px auto;
    background-color: #f7f7f7;
    border: 1px solid silver;
  }
}
@media only screen and (min-width: 601px) {
  .text-area textarea {
    height: auto;
    background-color: #f3f3f3;
    border: none;
    border-bottom: 1px solid #00090e25;
    padding: 15px 20px;
    border-radius: 1px;
    margin: 5px auto;
    background-color: #f7f7f7;
    border: 1px solid silver;
  }
}
/* buttons  */
.button-row {
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-bottom: 2em;
  column-gap: 1em;
}
button {
  box-sizing: border-box;
  background-color: #ffb607;
  color: white;
  border: 1px solid #000000;
  border-radius: 0.2em;
  font-size: 1.5em;
  font-weight: bold;
  margin-top: 1%;
  cursor: pointer;
  padding: 0.5em;
}
</style>
