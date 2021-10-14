<template>
  <div>
    <form>
      <input type="number"
        placeholder="District ID"
        v-model="districtId"> <br> <br> 
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
      <button @click="createNewUser">Submit</button>
    </form>
  </div>
</template>

<script>
export default {
  name: 'NewDistrictForm',
  components: {

  },
  data() {
    return {
      districtId: 1,
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
  methods: {
    async createNewUser(event) {
      event.preventDefault()
      
      let userToCreate = {
        membershipId: Date.now(),
        firstname: this.firstName,
        lastname: this.lastName,
        address: this.address,
        userCity: this.city,
        userPostal: this.postal,
        userProvince: this.province,
        userCountry: this.country,
        phone: this.phone,
        email: this.email,
        password: this.password,
        districtId: this.districtId
      }

      const res = await fetch('/api/user', { 
        method: 'POST', 
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(userToCreate)})

      console.log(res)

      this.$router.push('/admin/viewusers');
    }
  }
}
</script>

<style scoped>

form {
  text-align: center;
}

</style>