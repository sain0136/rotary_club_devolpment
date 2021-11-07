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

import { getClubData } from '../../data-bank/club-data'

export default {
  name: 'ClubContactUs',
  data() {
    return {
      clubEmail: '',
      clubPhone: '',
      clubAddress: '',
    }
  },
  async created() {
    const contactInfo = await getClubData()

    this.clubEmail = await contactInfo.club_email
    this.clubPhone = await contactInfo.club_phone
    this.clubAddress = await contactInfo.club_address
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