<template>
  <!-- District create or edit Form container -->

  <div class="admin-container">
    <div class="auto-container">
      <!--Form for admins edit or create  -->
      <form
        onsubmit="event.preventDefault();"
      >
        <!-- Assign Admin to district section -->
        <div
          class="form-field-top"
          v-if="
            isEditOrCreate == 'Create'
          "
        >
          <span
            ><h2>
              Assign the new Admin to a
              district
            </h2></span
          >
          <br />
          <span
            ><h3>District:</h3>
          </span>
          <span
            class="admin-error"
            id="admin-district-error"
            v-if="v$.districtId.$error"
          >
            Please select a district to
            assign the admin
          </span>

          <select
            name="districts"
            v-model="districtId"
          >
            <option disabled selected
              >Districts:</option
            >
            <option
              v-for="district in districts"
              :key="
                district.district_id
              "
              :value="
                district.district_id
              "
            >
              {{
                district.district_name
              }}
            </option>
          </select>
          <br />
          <br />
        </div>
        <!-- form grid -->
        <div class="flex-container">
          <div class="form-row">
            <div class="form-field">
              <span
                >Membership Id:</span
              >
              <span
                class="admin-error"
                v-if="
                  v$.membershipId.$error
                "
              >
                Please enter the
                membership id
              </span>
              <br />
              <input
                type="text"
                placeholder="Membership ID"
                v-model="membershipId"
              />
              <br />
              <br />
            </div>
            <div class="form-field">
              <span>First Name:</span>

              <span
                class="admin-error"
                id="admin-firstname-error"
                v-if="
                  v$.firstName.$error
                "
              >
                Please enter the first
                name
              </span>
              <br />
              <input
                type="text"
                placeholder="First Name"
                v-model="firstName"
              />
              <br />
              <br />
            </div>
            <div class="form-field">
              <span>Last Name:</span>

              <span
                class="admin-error"
                id="admin-lastname-error"
                v-if="
                  v$.lastName.$error
                "
              >
                Please enter the last
                name
              </span>
              <br />
              <input
                type="text"
                placeholder="Last Name"
                v-model="lastName"
              />
              <br />
              <br />
            </div>
          </div>
          <div class="form-row">
            <div class="form-field">
              <span>Address:</span>

              <span
                class="admin-error"
                id="admin-address-error"
                v-if="v$.address.$error"
              >
                Please enter the address
              </span>
              <br />
              <input
                type="text"
                placeholder="Address"
                v-model="address"
              />
              <br />
              <br />
            </div>
            <div class="form-field">
              <span>City:</span>

              <span
                class="admin-error"
                id="admin-city-error"
                v-if="v$.city.$error"
              >
                Please enter the city
              </span>
              <br />
              <input
                type="text"
                placeholder="City"
                v-model="city"
              />
              <br />
              <br />
            </div>
            <div class="form-field">
              <span>Postal Code:</span>

              <span
                class="admin-error"
                id="admin-postal-error"
                v-if="v$.postal.$error"
              >
                Please enter the postal
                code
              </span>
              <br />
              <input
                type="text"
                placeholder="Postal Code"
                v-model="postal"
              />
              <br />
              <br />
            </div>
          </div>
          <div class="form-row">
            <div class="form-field">
              <span> Province</span>
              <span
                class="admin-error"
                id="admin-province-error"
                v-if="
                  v$.province.$error
                "
              >
                Please enter the
                province
              </span>
              <div
                style="
                  flex-grow: inherit;
                  display: flex;
                  justify-content: center;
                "
              >
                <select
                  style="
                    flex-grow: 0.5;
                    height: fit-content;
                    margin-top: 0.4em;
                  "
                  id="select-province"
                  name="roles"
                  v-model="province"
                >
                  <option disabled
                    >Province</option
                  >
                  <option
                    value="Ontario"
                    >Ontario</option
                  >
                </select>
              </div>
              <br />
              <br />
            </div>
            <div class="form-field">
              <span>Country</span>
              <input
                type="text"
                placeholder="Canada"
                readonly
                v-model="country"
              />
              <br />
              <br />
            </div>
            <div class="form-field">
              <span>Phone:</span>
              <span
                class="admin-error"
                id="admin-phone-error"
                v-if="v$.phone.$error"
              >
                Please enter the phone
                number
              </span>
              <input
                type="tel"
                placeholder="Phone"
                v-model="phone"
              />
              <br />
              <br />
            </div>
          </div>
          <div class="form-row">
            <div class="form-field">
              <span>Email:</span>
              <span
                class="admin-error"
                id="admin-email-error"
                v-if="v$.phone.$error"
              >
                Please enter a valid
                email address
              </span>
              <br />
              <input
                type="email"
                placeholder="Email"
                v-model="email"
              />
              <br />
              <br />
            </div>
            <div
              class="form-field"
              v-if="
                isEditOrCreate ==
                'Create'
              "
            >
              <span>Password:</span>
              <span
                class="admin-error"
                id="admin-password-error"
                v-if="
                  v$.password.$error
                "
              >
                Please enter a valid
                password
              </span>
              <br />
              <input
                placeholder="Password"
                v-model="password"
              />
              <br />
              <br />
            </div>
          </div>
          <br />
        </div>
        <div class="button-row">
          <div
            class="button-wrapper"
            v-if="
              isEditOrCreate == 'Create'
            "
            @click="
              validateDistrictAdmin
            "
          >
            <button>
              Submit
            </button>
          </div>

          <div
            class="button-wrapper"
            v-else
            @click="
              validateDistrictAdmin
            "
          >
            <button>
              Update
            </button>
          </div>

          <div class="button-wrapper">
            <button
              id="cancel"
              @click="
                () => {
                  if (
                    this
                      .isEditOrCreate ==
                    'Create'
                  ) {
                    this.redirect(true)
                  } else {
                    redirect(false)
                  }
                }
              "
            >
              Cancel
            </button>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import district from '../../../api-factory/district'
import district_admin from '../../../api-factory/district_admin'
import user from '../../../api-factory/user'
import store from '../../../store/index'

import useValidate from '@vuelidate/core'
import {
  required,
  maxLength,
  minLength,
  email,
  requiredIf,
} from '@vuelidate/validators'

export default {
  name: 'DistrictAdminForm',
  props: {
    isEditOrCreate: String,
    districtAdminVieWandEdit: String,
    district_idDistrictView: Number,
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
        required,
      },
      membershipId: {
        required,
      },
      firstName: {
        required,
      },
      lastName: {
        required,
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
      email: {
        required,
        email,
      },
      password: {
        required: requiredIf(
          function () {
            return (
              this.isEditOrCreate ==
              'Create'
            )
          },
        ),
      },
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
    if (
      this.isEditOrCreate == 'Edit' &&
      this.districtAdminVieWandEdit ==
        't'
    ) {
      this.prePopulateFields(
        store.state
          .loggedInDistrictUserId,
      )
    } else if (
      this.isEditOrCreate == 'Edit'
    ) {
      this.prePopulateFields(
        'siteAdminProtal',
      )
    }
  },

  methods: {
    setUserRoles() {
      this.roles.set(1, 'Admin')
      this.roles.set(
        2,
        'District Admin',
      )

      this.roles.set('Admin', 1)
      this.roles.set(
        'District Admin',
        2,
      )
    },

    async prePopulateFields(
      district_idDistrictView,
    ) {
      console.log(
        district_idDistrictView,
      )
      let userIdToEdit = 'null'
      if (
        district_idDistrictView ==
        'siteAdminProtal'
      ) {
        userIdToEdit = this.$router
          .currentRoute.value.params
          .userid
        console.log(userIdToEdit)
      } else {
        userIdToEdit = district_idDistrictView
        console.log(userIdToEdit)
      }

      const userInfo = await user.show(
        userIdToEdit,
      )

      this.districtId = await userInfo.district_id
      this.membershipId = await userInfo.membership_id
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
        membership_id: this
          .membershipId,
        role_type: this.roleType,
        district_role: this
          .districtRole,
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

      if (!this.v$.$error) {
        if (
          this.isEditOrCreate ==
          'Create'
        ) {
          this.createAdmin()
        } else {
          console.log('here')
          this.updateExistingAdmin()
        }
      }
    },

    async createAdmin() {
      const userToCreate = this.getUserData()
      await district_admin.create(
        userToCreate,
      )
      this.redirect(true)
    },

    async updateExistingAdmin() {
      console.log('ok')
      let id = ''
      if (
        this.isEditOrCreate == 'Edit' &&
        this.districtAdminVieWandEdit ==
          't'
      ) {
        id =
          store.state
            .loggedInDistrictUserId
      } else {
        id = this.$router.currentRoute
          .value.params.userid
      }

      const userToUpdate = this.getUserData()
      await district_admin.update(
        id,
        userToUpdate,
      )
      this.redirect(false)
    },

    redirect(fromCreate) {
      if (
        this.districtAdminVieWandEdit ==
          't' &&
        !fromCreate
      ) {
        this.$router.push({
          name: 'DistrictHome',
        })
      } else if (fromCreate) {
        this.$router.push('./view')
      } else {
        this.$router.push('../view')
      }
    },
  },
}
</script>

<style scoped>
/* form wrapper */
.admin-container {
  color: rgb(0, 0, 0);
  padding-bottom: 1em;
  padding-top: 1em;
}

/* form styling */
form {
  text-align: center;
}
/* form field top  */
.form-field-top {
  padding-bottom: 1%;
  padding-top: 1%;
  display: flex;
  flex-direction: column;
}
.admin-error {
  color: red;
  font-size: 12px;
  padding: 0%;
}
.form-field-top select {
  background-color: #f3f3f3;
  border: none;
  border-bottom: 1px solid #00090e25;
  padding: 0.1em 0.1em;
  border-radius: 0.1em;
  margin: 5px auto;
  background-color: #f7f7f7;
  border: 1px solid silver;
  font-family: 'Lato', sans-serif;
  font-size: 1.3rem;
  font-weight: bold;
}
option {
  text-align: center;
}
/* flex form  */
.flex-container {
  display: flex;
  flex-direction: column;
}
.form-row {
  display: flex;
  column-gap: 1em;
  justify-content: center;
  flex-wrap: wrap;
}
.flex-container select {
  background-color: #f3f3f3;
  border: none;
  border-bottom: 1px solid #00090e25;
  padding: 0.1em 0.1em;
  border-radius: 0.1em;
  background-color: #f7f7f7;
  border: 1px solid silver;
  font-family: 'Lato', sans-serif;
  font-size: 1.3rem;
  font-weight: bold;
}

/* form field  */
.form-field {
  display: flex;
  flex-direction: column;
  flex: 1 1 0;
}

input {
  background-color: #f3f3f3;
  border: none;
  border-bottom: 1px solid #00090e25;
  padding: 0.1em 0.1em;
  border-radius: 1px;
  margin: 0.5em auto;
  background-color: #f7f7f7;
  border: 1px solid silver;
  font-family: 'Lato', sans-serif;
  font-size: 1.3rem;
  font-weight: bold;
}

.button-row {
  display: flex;
  flex-direction: column;
  justify-content: center;
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
.button-wrapper {
}
#cancel {
  margin-bottom: 2%;
}
</style>
