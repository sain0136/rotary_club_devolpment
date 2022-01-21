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
      }}
    </div>
  </div>
</template>

<script>

export default {
  name: 'ClubAbout',
  data() {
    return {}
  },
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
