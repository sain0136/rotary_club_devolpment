<template>
  <div>
    <form>
      <input type="number"
        placeholder="District ID"
        v-model="districtId"> <br> <br> 
      <input type="number"
        placeholder="Membership ID"
        v-model="membershipId"> <br> <br> 
      <input type="number"
        placeholder="Role Type"
        v-model="roleType"> <br> <br> 
      <input type="text"
        placeholder="District Role"
        v-model="districtRole"> <br> <br> 
      <input type="text"
        placeholder="First Name"
        v-model="firstName"> <br> <br>
      <input type="text"
        placeholder="Last Name"
        v-model="lastName"> <br> <br>
      <input type="text"
        placeholder="Address"
        v-model="address"> <br> <br> 
      <input type="text"
        placeholder="City"
        v-model="city"> <br> <br>
      <input type="text"
        placeholder="Postal Code"
        v-model="postal"> <br> <br>
      <input type="text"
        placeholder="Province"
        v-model="province"> <br> <br>
      <input type="text"
        placeholder="Country"
        v-model="country"> <br> <br>
      <input type="tel"
        placeholder="Phone"
        v-model="phone"> <br> <br>      
      <input type="email"
        placeholder="Email"
        v-model="email"> <br> <br>
      <input type="password"
        placeholder="Password"
        v-model="password"> <br> <br>  
      <button 
        v-if="isEditOrCreate=='Create'"
        @click="createNewAdmin">
        Submit
      </button>
      <button 
        v-else
        @click="updateExistingAdmin">
        Edit
      </button>
      <button
        @click="() => this.$router.push('viewdistrictadmins')">
        Cancel
      </button>
    </form>
  </div>
</template>

<script>

import store from '../../store/index'

export default {
  name: 'UserForm',
  props: {
    isEditOrCreate: String
  },
  data() {
    return {
      districtId: 0,
      membershipId: 0,
      districtRole: '',
      roleType: 0,
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
  async created() {
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
      this.firstname = await userInfo.firstname
      this.lastname = await userInfo.lastName
      this.address = await userInfo.address
      this.city = await userInfo.user_city
      this.postal = await userInfo.user_postal
      this.province = await userInfo.user_province
      this.country = await userInfo.user_country
      this.phone = await userInfo.phone
      this.email = await userInfo.email
    }
  },
  methods: {
    async createNewAdmin(event) {
      event.preventDefault()
      
      let userToCreate = {
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
        password: this.password,
      }

      const res = await fetch('/api/user', { 
        method: 'POST', 
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(userToCreate)})

      this.$router.push('/admin/viewdistrictadmins');
    },

    async updateExistingAdmin(event) {
      event.preventDefault()

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
        password: this.password,
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
}

</style>