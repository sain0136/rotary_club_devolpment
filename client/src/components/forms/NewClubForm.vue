<template>
  <div>
    <form>
      <input type="number"
        placeholder="District ID"
        v-model="districtId"> <br> <br> 
      <input type="text"
        placeholder="Mother Club"
        v-model="motherClub"> <br> <br> 
      <input type="text"
        placeholder="Club Name"
        v-model="name"> <br> <br>
      <input type="text"
        placeholder="Club Address"
        v-model="address"> <br> <br>
      <input type="text"
        placeholder="Postal Code"
        v-model="postal"> <br> <br>
      <input type="text"
        placeholder="Province"
        v-model="province"> <br> <br>
      <input type="text"
        placeholder="City"
        v-model="city"> <br> <br>
      <input type="text"
        placeholder="Country"
        v-model="country"> <br> <br>
      <input type="tel"
        placeholder="Phone"
        v-model="phone"> <br> <br>   
      <input type="email"
        placeholder="Email"
        v-model="email"> <br> <br>
      <input type="text"
        placeholder="Description"
        v-model="description"> <br> <br>
      <input type="date"
        placeholder="Charter Date"
        v-model="charterDate"> <br> <br>
      <button @click="createNewClub">Submit</button>
    </form>
  </div>
</template>

<script>

import store from '../../store/index'

export default {
  name: 'NewClubForm',
  components: {

  },
  data() {
    return {
      districtId: 1,
      motherClub: '',
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
    }
  },
  methods: {
    async createNewClub(event) {
      event.preventDefault()
      
      let clubToCreate = {
        districtId: this.districtId,
        motherClub: this.motherClub,
        clubName: this.name,
        clubAddress: this.address,
        clubCity: this.city,
        clubPostal: this.postal,
        clubProvince: this.province,
        clubCountry: this.country,
        clubPhone: this.phone,
        clubDescription: this.description,
        clubEmail: this.email,
        charterDate: this.charterDate
      }

      const res = await fetch('/api/club', { 
        method: 'POST', 
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(clubToCreate)})

      console.log(res)

      this.$router.push('/admin/viewclubs');
    }
  }
}
</script>

<style scoped>

form {
  text-align: center;
}

</style>