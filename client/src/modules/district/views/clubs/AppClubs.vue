<template>
  <div class="app-container">
    <div class="district-page-head">
      <h1 class="district-page-title">
        Our Clubs
      </h1>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'AppClubs',
  components: {},
}
</script>

<style scoped>
.app-container {
  height: auto;
}
</style>
