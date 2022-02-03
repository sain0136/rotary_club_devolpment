<template>
  <div>
    <div class="club-page-head">
      <h1 class="club-page-title">
        About the Club
      </h1>
    </div> <br>
    <div class="description-container">
      {{
        $store.state.currentClubData
          .club_description
      }} <br> <br>
      <div class="club-page-head">
        <h1 class="club-page-title">
          Our Staff
        </h1>
      </div> <br>
      <p 
        v-for="user in users"
        :key="user.user_id">{{ user.fullName }}</p>
    </div>
  </div>
</template>

<script>

import store from '../../../store/index'

export default {
  name: 'ClubAbout',
  data() {
    return {
      users: []
    }
  },
  created() {
    const users = store.state.currentClubUsers
    let filteredUsers = users.filter(user => {
      user.role.length != 0
    }) //TODO fix the filter
    console.log(filteredUsers)
    this.users = users

  }
}
</script>

<style scoped>


.description-container {
  text-align: center;
  width: 60%;
  word-wrap: break-word;
  margin: auto;
  font-family: 'Lato' sans-serif;
  font-size: 26px;
  color: #27282d;
  margin-bottom: -200px;
}
</style>
