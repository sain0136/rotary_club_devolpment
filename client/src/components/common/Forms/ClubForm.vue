<template>
  <div class="form-container">
    <div class="auto-container">
      <!-- Club Edit or Create Form -->
      <form
        onsubmit="event.preventDefault();"
      >
        <h2>
          Create/Edit District Clubs
        </h2>
        <hr />
        <!-- Form Fields  -->
        <div class="form-field">
          <div>
            <span
              class="club-error"
              id="club-name-error"
              v-if="v$.name.$error"
            >
              Please enter a valid club
              name
            </span>
            <br />
          </div>
          <div class="input-field">
            <BaseInputs
              v-model="name"
              label="Club name"
              type="text"
              span="Must be no longer then 25 characters long"
            />
          </div>

          <br />
          <br />
        </div>
        <!-- Form Fields  -->
        <div class="form-field">
          <div>
            <span
              class="club-error"
              id="club-address-error"
              v-if="v$.address.$error"
            >
              Please enter a valid
              address
            </span>
          </div>
          <br />
          <div class="input-field">
            <BaseInputs
              v-model="address"
              label="Club Address"
              type="text"
              span="Must be less then 80 characters long"
            />
          </div>
          <br />
          <br />
        </div>
        <!-- Form Fields  -->
        <div class="form-field">
          <div>
            <span
              class="club-error"
              id="club-city-error"
              v-if="v$.city.$error"
            >
              Please enter a city name
            </span>
          </div>
          <br />
          <div class="input-field">
            <BaseInputs
              v-model="city"
              label="City"
              type="text"
              span="Must be less then 30 characters long"
            />
          </div>
          <br />
          <br />
        </div>

        <!-- Form Fields  -->
        <div class="form-field">
          <div>
            <span
              class="club-error"
              id="club-postal-error"
              v-if="v$.postal.$error"
            >
              Please enter a city name
            </span>
          </div>
          <br />
          <div class="input-field">
            <BaseInputs
              v-model="postal"
              label="Postal Code"
              type="text"
              span="Must be less then 7 characters long"
            />
          </div>
          <br />
          <br />
        </div>

        <!-- Form Fields  -->
        <div
          class="form-field"
          style="margin-bottom:2rem;"
        >
          <div class="input-field">
            <BaseSelect
              v-model="province"
              label="Province"
              :options="provinceList"
            />
          </div>
        </div>
        <!-- Form Fields  -->
        <div class="form-field">
          <div class="input-field">
            <BaseSelect
              v-model="country"
              label="Country"
              :options="
                northAmericaList
              "
            />
          </div>
        </div>
        <!-- Form Fields  -->
        <div class="form-field">
          <div>
            <span
              class="club-error"
              id="club-phone-error"
              v-if="v$.phone.$error"
            >
              Please enter a valid phone
              number
            </span>
          </div>
          <br />
          <div class="input-field">
            <BaseInputs
              v-model="phone"
              label="Phone"
              type="text"
              span="Must be less then 40 characters long"
            />
          </div>
          <br />
          <br />
        </div>

        <!-- Form Fields  -->
        <div class="form-field">
          <div>
            <span
              class="club-error"
              id="club-description-error"
              v-if="
                v$.description.$error
              "
            >
              Please enter a valid club
              description
            </span>
          </div>
          <br />
          <div class="input-field">
            <BaseTextArea
              v-model="description"
              label="Describe the project and its objectives"
              span="Must be 100 to 1000 characters long"
            />
          </div>
          <br />
          <br />
        </div>

        <!-- Form Fields  -->
        <div class="form-field">
          <div>
            <span
              class="club-error"
              id="club-email-error"
              v-if="v$.email.$error"
            >
              Please enter a valid email
            </span>
          </div>
          <br />
          <div class="input-field">
            <BaseInputs
              v-model="email"
              label="Email"
              type="email"
              span="Must be less then 80 characters long"
            />
          </div>
          <br />
          <br />
        </div>

        <!-- Form Fields  -->
        <div class="form-field">
          <div>
            <span
              class="club-error"
              id="club-charter-error"
              v-if="
                v$.charterDate.$error
              "
            >
              Please enter a charter
              date
            </span>
          </div>
          <br />
          <div class="input-field">
            <BaseInputs
              v-model="charterDate"
              label="Charter Date "
              type="date"
              span="Clubs carter Date"
            />
          </div>
          <br />
          <br />
        </div>

        <!-- Form Fields  -->
        <div class="form-field">
          <div class="input-field">
            <BaseInputs
              v-model="motherClub"
              label="Mother Club "
              type="text"
              span="Mother Club Name"
            />
          </div>
          <br />
          <br />
        </div>
        <!-- Social media form -->
        <SocialLinksSection
          isDistrictOrClub="Club"
        />
        <hr />
        <!-- subtmit button -->
        <div class="button-row">
          <button
            v-if="
              isEditOrCreate == 'Create'
            "
            @click="validateClub"
          >
            Submit
          </button>
          <button
            v-else
            @click="validateClub"
          >
            Update
          </button>
          <button
            @click="
              () =>
                this.$router.push(
                  `/district/${this.$router.currentRoute.value.params.id}/clubs/view`,
                )
            "
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import useValidate from '@vuelidate/core'
import {
  required,
  maxLength,
  minLength,
  email,
} from '@vuelidate/validators'

import SocialLinksSection from './SocialLinksSection.vue'
import BaseInputs from '../../formParts/BaseInputs.vue'
import BaseSelect from '../../formParts/BaseSelect.vue'
import ProjectApi from '../../../api-factory/project'
import store from '../../../store/index'
import Resource from '../../../Resources.js'
import BaseCheckBox from '../../formParts/BaseCheckBox.vue'
import BaseTextArea from '../../formParts/BaseTextArea.vue'

import club from '../../../api-factory/club'

export default {
  name: 'ClubForm',
  components: {
    SocialLinksSection,
    BaseInputs,
    BaseSelect,
    BaseCheckBox,
    BaseTextArea,
  },
  props: {
    isEditOrCreate: String,
    fromClubEditViewProp: String,
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

      clubId: this.$router.currentRoute
        .value.params.clubid,
      districtId: this.$router
        .currentRoute.value.params.id,

      provinceList:
        Resource.ProvinceList,
      northAmericaList:
        Resource.NorthAmericaList,
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
        minLength: minLength(100),
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
    if (
      this.fromClubEditViewProp ==
      'true'
    ) {
      this.clubId =
        store.state.currentClubData.club_id
    }
    if (this.isEditOrCreate == 'Edit') {
      this.prePopulateFields()
    }
  },
  methods: {
    async prePopulateFields() {
      let clubInfo = null
      if (
        this.fromClubEditViewProp ==
        'true'
      ) {
        clubInfo = await club.show(
          this.clubId,
        )
      } else {
        clubInfo = await club.show(
          this.$router.currentRoute
            .value.params.clubid,
        )
      }

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
        club_description: this
          .description,
        club_email: this.email,
        charter_date: this.charterDate,
        mother_club: this.motherClub,
        district_id: this.districtId,
      }
    },

    validateClub() {
      this.v$.$validate()

      if (!this.v$.$error) {
        if (
          this.isEditOrCreate ==
          'Create'
        ) {
          console.log(
            'Validation create',
          )
          this.createNewClub()
        } else {
          this.updateExistingClub()
        }
      }
    },

    async createNewClub() {
      const clubToCreate = this.getClubData()
      await club.create(clubToCreate)
      this.redirect(true)
    },

    async updateExistingClub() {
      const clubToUpdate = this.getClubData()
      await club.update(
        this.clubId,
        clubToUpdate,
      )
      this.redirect(false)
    },

    redirect(fromCreate) {
      if (fromCreate) {
        this.$router.push('./home')
      } else {
        this.$router.push('../home')
      }
    },
  },
}
</script>

<style scoped>
/* Form container div styling  */
.form-container {
  display: flex;
  flex-direction: column;
}
/* form Styling  */
form h2 {
  padding-top: 2rem;
  text-transform: capitalize;
  text-align: center;
}
form hr {
  border: 0.1em solid #ffb607;
}
/* form field stylings  */
.form-field {
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.form-field div {
  text-align: center;
  margin-bottom: 0.5rem;
}
.form-field .input-field {
  display: flex;
}
/* validation errors  */
.club-error {
  color: red;
  font-size: 12px;
  padding: 0%;
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
  position: relative;
  display: block;
  float: left;
  margin: 1em 4px 4px 4px;
  color: #ffffff;
  padding: 6px 20px;
  border: 0px;
  line-height: 22px;
  text-transform: uppercase;
  background-color: #3a3a3a;
}
button:hover {
  color: #ffffff;
  background-color: #ffb607;
  -webkit-transition: all 500ms ease;
}
</style>
