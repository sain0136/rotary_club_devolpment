<template>
  <div>
    <h1>Contact Info</h1>
    <br>
    <table>
      <tr>
        <td id="type">Email</td>
        <td>{{this.clubData.club_email}}</td>
      </tr>
      <tr>
        <td id="type">Phone</td>
        <td>{{this.clubData.club_phone}}</td>
      </tr>
      <tr>
        <td id="type">Address</td>
        <td>{{this.clubData.club_address}}</td>
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
      clubData: store.state.currentClubData
    }
  },
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