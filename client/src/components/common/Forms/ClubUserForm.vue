<template>
  <h2 v-if="isEditOrCreate == 'Create'">
    Create new Club Member
  </h2>
  <h2 v-else>Edit Profile</h2>
  <hr />
  <!-- club create or edit Form container -->
  <div class="clubuser-container">
    <form
      onsubmit="event.preventDefault();"
    >
      <!-- form feild -->
      <div
        class="form-field"
        v-if="isEditOrCreate == 'Edit'"
      >
        <div
          style="margin-top: 1rem"
          class="input-field"
          id="role-field"
        >
          <BaseInputs
            v-model="
              prePopulateClubRole
            "
            label="Member Title"
            type="text"
          />
        </div>
      </div>
      <!-- form feild -->
      <!-- form feild -->
      <div class="form-field">
        <div class="center">
          <span
            class="user-error"
            id="user-name-error"
            v-if="v$.firstName.$error"
          >
            Please enter a valid
            firstname
          </span>
          <br />
        </div>
        <div class="input-field">
          <BaseInputs
            v-model="firstName"
            label="Firstname"
            type="text"
            span="Must be no longer then 25 characters long"
          />
        </div>
      </div>
      <!-- form feild -->
      <div class="form-field">
        <div class="center">
          <span
            class="user-error"
            id="user-name-error"
            v-if="v$.lastName.$error"
          >
            Please enter a valid
            lastname
          </span>
          <br />
        </div>
        <div class="input-field">
          <BaseInputs
            v-model="lastName"
            label="Lastname"
            type="text"
            span="Must be no longer then 25 characters long"
          />
        </div>
      </div>
      <!-- form feild -->
      <div class="form-field">
        <div class="center">
          <span
            class="user-error"
            id="user-name-error"
            v-if="v$.address.$error"
          >
            Please enter a valid address
          </span>
          <br />
        </div>
        <div class="input-field">
          <BaseInputs
            v-model="address"
            label="Address"
            type="text"
            span="Must be no longer then 25 characters long"
          />
        </div>
      </div>
      <!-- form feild -->
      <div class="form-field">
        <div class="center">
          <span
            class="user-error"
            id="user-name-error"
            v-if="v$.city.$error"
          >
            Please enter a valid city
          </span>
          <br />
        </div>
        <div class="input-field">
          <BaseInputs
            v-model="city"
            label="City"
            type="text"
            span="Must be no longer then 25 characters long"
          />
        </div>
      </div>
      <!-- form feild -->
      <div class="form-field">
        <div class="center">
          <span
            class="user-error"
            id="user-name-error"
            v-if="v$.postal.$error"
          >
            Please enter a valid postal
            code
          </span>
          <br />
        </div>
        <div class="input-field">
          <BaseInputs
            v-model="postal"
            label="Postal Code:"
            type="text"
            span="Must be no longer then 25 characters long"
          />
        </div>
      </div>
      <!-- form feild -->
      <div class="form-field">
        <div class="center">
          <span
            class="user-error"
            id="user-name-error"
            v-if="v$.province.$error"
          >
            Please select a province
          </span>
          <br />
        </div>
        <div class="input-field">
          <BaseSelect
            v-model="province"
            label="Province"
            :options="provinceList"
          />
        </div>
      </div>
      <!-- form feild -->
      <div class="form-field">
        <div class="center">
          <span
            class="user-error"
            id="user-name-error"
            v-if="v$.country.$error"
          >
            Please select a country
          </span>
          <br />
        </div>
        <div class="input-field">
          <BaseSelect
            v-model="country"
            label="Country"
            :options="northAmericaList"
          />
        </div>
      </div>
      <!-- form feild -->
      <div class="form-field">
        <div class="center">
          <span
            class="user-error"
            id="user-name-error"
            v-if="v$.phone.$error"
          >
            Please enter a valid
            lastname
          </span>
          <br />
        </div>
        <div class="input-field">
          <BaseInputs
            v-model="phone"
            label="Phone"
            type="text"
            span="Must be no longer then 25 characters long"
          />
        </div>
      </div>
      <!-- form feild -->
      <div
        class="form-field"
        v-if="isEditOrCreate != 'Edit'"
      >
        <div
          style="margin-top: 1rem"
          class="input-field"
        >
          <BaseInputs
            v-model="clubRole"
            label="Member Title/Role"
            type="text"
            span="Enter Club Role if applicable"
          />
        </div>
      </div>
      <!-- form feild -->
      <div class="form-field">
        <div class="center">
          <span
            class="user-error"
            id="user-name-error"
            v-if="
              v$.roleTypeVmodel.$error
            "
          >
            Please select the users role
          </span>
          <br />
        </div>
        <div
          class="input-field"
          v-if="
            isEditOrCreate != 'Edit'
          "
        >
          <BaseSelect
            v-model="roleTypeVmodel"
            label="Role"
            :options="roleList"
          />
        </div>
      </div>
      <!-- form feild -->
      <div class="form-field">
        <div class="center">
          <span
            class="user-error"
            id="user-name-error"
            v-if="v$.email.$error"
          >
            Please enter a valid email
          </span>
          <br />
        </div>
        <div class="input-field">
          <BaseInputs
            v-model="email"
            label="Email"
            type="text"
            span="Must be no longer then 25 characters long"
          />
        </div>
      </div>
      <!-- Change pass button -->
      <div
        class="styled-pagination"
        v-if="isEditOrCreate == 'Edit'"
      >
        <ul>
          <li>
            <a
              @click="
                revealChangePassword()
              "
              >Change Password</a
            >
          </li>
        </ul>
      </div>
      <!-- form feild -->
      <div
        class="form-field"
        v-if="
          isEditOrCreate == 'Create' ||
            changePassword == true
        "
      >
        <div class="center">
          <span
            class="user-error"
            id="user-name-error"
            v-if="v$.password.$error"
          >
            Please enter a valid
            password
          </span>
          <br />
        </div>
        <div class="input-field">
          <BaseInputs
            v-model="password"
            label="Password"
            type="password"
            span="Must be no longer then 25 characters long"
          />
        </div>
      </div>

      <!-- Button  -->
      <div
        class="styled-pagination"
        v-if="isEditOrCreate != 'Edit'"
      >
        <ul>
          <li>
            <a @click="validateUser(1)"
              >Submit</a
            >
          </li>
          <li>
            <a @click="redirect(0)"
              >Cancel</a
            >
          </li>
        </ul>
      </div>
      <div
        class="styled-pagination"
        v-else
      >
        <ul>
          <li>
            <a @click="updateUser(1)"
              >Update</a
            >
          </li>
          <li>
            <a @click="redirect(0)"
              >Cancel</a
            >
          </li>
        </ul>
      </div>
    </form>
  </div>
</template>

<script>
import apiUser from '../../../api-factory/user'
import useValidate from '@vuelidate/core'
import BaseInputs from '../../formParts/BaseInputs.vue'
import BaseSelect from '../../formParts/BaseSelect.vue'
import Resource from '../../../Resources.js'
import store from '../../../store/index'
import user from '../../../api-factory/user'
import {
  required,
  maxLength,
  email,
} from '@vuelidate/validators'

export default {
  name: 'ClubUserForm',
  props: {
    clubIdProp: Number,
    isEditOrCreate: String,
  },
  components: {
    BaseInputs,
    BaseSelect,
  },
  data() {
    return {
      //Validation variables
      v$: useValidate(),
      firstName: '',
      districtId: 0,

      lastName: '',
      address: '',
      city: '',
      postal: '',
      province: '',
      country: '',
      phone: '',
      email: '',
      password: '',

      clubId: 0,
      roleTypeVmodel: '',
      clubRole: '',
      roleType: 0,
      provinceList:
        Resource.ProvinceList,
      northAmericaList:
        Resource.NorthAmericaList,
      roleList: [
        'Standard Member',
        'Club Admin',
      ],
      userToEdit: {},
      prePopulateClubRole: '',
      clubUserId:
        store.state.loggedInClubUserId,
      changePassword: false,
      isThisAClubRoute: String,
    }
  },
  validations() {
    return {
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
      country: {
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
        required,
      },
      roleTypeVmodel: {
        required,
      },
      clubRole: {
        maxLength: maxLength(30),
      },
    }
  },
  async created() {
    if (
      store.state.isClubUserLoggedIn ||
      store.state.isClubAdminLoggedIn
    ) {
      this.isThisAClubRoute = 'Yes'
    }
    this.clubId = this.clubIdProp
    if (this.isEditOrCreate == 'Edit') {
      await this.prePopulateFields(
        this.clubUserId,
      )
    } else {
    }
  },
  methods: {
    async prePopulateFields(
      clubUserId,
    ) {
      let userToEdit = await user.showJson(
        clubUserId,
      )
      this.userToEdit = userToEdit
      this.firstName =
        userToEdit.firstname
      this.lastName =
        userToEdit.lastname
      this.address = userToEdit.address
      this.city = userToEdit.user_city
      this.postal =
        userToEdit.user_postal
      this.province =
        userToEdit.user_province
      this.country =
        userToEdit.user_country
      this.phone = userToEdit.phone
      this.email = userToEdit.email
      this.prePopulateClubRole =
        userToEdit.role[0].club_role
    },
    async revealChangePassword() {
      if (
        this.changePassword == false
      ) {
        this.changePassword = true
      } else {
        this.changePassword = false
      }
    },
    async createUser() {
      if (
        this.roleTypeVmodel ==
          'Standard Member' &&
        this.clubRole != ''
      ) {
        this.roleType = 6
      } else if (
        this.roleTypeVmodel ==
        'Club Admin'
      ) {
        this.roleType = 5
      } else {
        this.roleType = 7
      }
      const userToCreate = this.getUserData()
      const emailError = await apiUser.create(
        userToCreate,
      )
      console.log(emailError)
      if (!emailError) {
        alert(
          'This email is already taken try another ! ',
        )
      } else {
        this.redirect(true)
      }
    },
    async updateUser() {
      const userToCreate = this.getUserData()
      await apiUser.update(
        this.clubUserId,
        userToCreate,
      )
      this.redirect()
    },
    redirect(cancel) {
      if (
        this.isThisAClubRoute == 'Yes'
      ) {
        this.$router.push({
          name: 'ClubHome',
        })
      } else {
        if (cancel == 0) {
          this.$router.push({
            name: 'ClubsView',
          })
          return true
        }
        if (
          this.isEditOrCreate == 'Edit'
        ) {
          this.$router.push({
            name: 'ClubsView',
          })
        } else {
          this.$router.push({
            name: 'ClubsView',
          })
        }
      }
    },

    getUserData() {
      if (
        this.isEditOrCreate == 'Edit'
      ) {
        if (this.password != '')
          return {
            firstname: this.firstName,
            lastname: this.lastName,
            address: this.address,
            user_city: this.city,
            user_postal: this.postal,
            user_province: this
              .province,
            user_country: this.country,
            phone: this.phone,
            email: this.email,
            password: this.password,
            club_id: parseInt(
              this.clubIdProp,
            ),
          }
        else
          return {
            firstname: this.firstName,
            lastname: this.lastName,
            address: this.address,
            user_city: this.city,
            user_postal: this.postal,
            user_province: this
              .province,
            user_country: this.country,
            phone: this.phone,
            email: this.email,
          }
      }
      if (this.clubRole == '') {
        return {
          club_id: this.clubId,
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
          password: this.password,
          role_type: this.roleType,
        }
      } else {
        return {
          club_id: this.clubId,
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
          club_role: this.clubRole,
          role_type: this.roleType,
        }
      }
    },
    validateUser() {
      this.v$.$validate()

      if (!this.v$.$error) {
        if (
          this.isEditOrCreate ==
          'Create'
        ) {
          this.createUser()
        } else {
          this.updateUser()
        }
      }
    },
  },
}
</script>

<style scoped>
form {
  display: flex;
  flex-direction: column;
}

h2 {
  text-transform: capitalize;
  text-align: center;
  margin-top: 1rem;
}
hr {
  border: 0.1em solid #ffb607;
}
/* button */
.styled-pagination {
  text-align: center;
  margin-top: 2rem;
  margin-bottom: 2rem;
}
.styled-pagination ul {
  position: relative;
  display: inline-flex;
  flex-wrap: wrap;
  margin-bottom: 0rem;
}
.styled-pagination li {
  position: relative;
  display: block;
  padding-top: 0.5rem;
  margin: 1rem;
}
.styled-pagination li a {
  color: #ffffff;
  padding: 6px 20px;
  border: 0px;
  line-height: 22px;
  text-transform: uppercase;
  background-color: #3a3a3a;
  font-weight: 700;
  text-decoration: none;
}

li a:hover {
  color: #ffffff;
  background-color: #ffb607;
  -webkit-transition: all 500ms ease;
}
/* error */
.user-error {
  color: red;
  font-size: 12px;
  padding: 0%;
}
.center {
  text-align: center;
}
</style>
