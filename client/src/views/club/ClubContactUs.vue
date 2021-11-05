<template>
  <div>
    <h1>Contact Info</h1>
    <br>
    <table>
      <tr>
        <td id="type">Email</td>
        <td>{{this.clubEmail}}</td>
      </tr>
      <tr>
        <td id="type">Phone</td>
        <td>{{this.clubPhone}}</td>
      </tr>
      <tr>
        <td id="type">Address</td>
        <td>{{this.clubAddress}}</td>
      </tr>
    </table>
  </div>
</template>

<script>

import store from '../../store/index'

export default {
  name: 'ClubContactUs',
  data() {
    return {
      clubEmail: '',
      clubPhone: '',
      clubAddress: '',
    }
  },
  methods: {
    async fetchClubContactInfo() {
      const res = await fetch(`/api/club/${store.state.currentClubId}`, {
        method: 'GET'
      })
      const data = await res.json()
      const clubInfo = await data.clubsById
      return {
        email: await clubInfo.club_email,
        phone: await clubInfo.club_phone,
        address: await clubInfo.club_address
      }
    }
  },
  async created() {
    const contactInfo = await this.fetchClubContactInfo()

    this.clubEmail = await contactInfo.email
    this.clubPhone = await contactInfo.phone
    this.clubAddress = await contactInfo.address
  }
}

</script>

<style scoped>

table {
  margin: auto;
  font-size: 24px;
}

td {
  width: 40%;
  padding-bottom: 20px;
  word-wrap: break-word;
}

#type {
  font-weight: bold;
}

</style>