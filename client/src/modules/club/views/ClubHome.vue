<template>
  <div>
    <div class="club-page-head">
      <h1 class="club-page-title">
        Welcome to Club 
        {{
          $store.state.currentClubData.club_name
        }} !
      </h1>
    </div>
    <img src="../assets/club-logo.png" alt="">
  </div>
</template>

<script>
import store from '../../../store/index'

export default {
  name: 'ClubHome',
  data() {
    return {}
  },
}
</script>

<style scoped>

img {
  height: 200px;
  margin-bottom: -250px;
  margin-left: 33%;
}

</style>
