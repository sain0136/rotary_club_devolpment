<template>
  <div>
    <br /><br />
    <h1>
      Welcome to District
      {{
        $store.state.currentDistrictData
          .district_name
      }}
    </h1>
    <h2
      v-if="
        $store.state
          .isDistrictAdminLoggedIn
      "
    >
      District Admin!
    </h2>
    <h2
      v-if="
        $store.state.isSiteAdminLoggedIn
      "
    >
      Site Admin!
    </h2>
    <br /><br />
  </div>
</template>

<script>
export default {
  name: 'DistrictHome',
}
</script>

<style scoped>
div {
  text-align: center;
}
</style>
