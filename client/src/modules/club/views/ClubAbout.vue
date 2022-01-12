<template>
  <div>
    <h1>About the Club</h1>
    {{
      $store.state.currentClubData
        .club_description
    }}
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
div {
  text-align: center;
  width: 50%;
  word-wrap: break-word;
  margin: auto;
}
</style>
