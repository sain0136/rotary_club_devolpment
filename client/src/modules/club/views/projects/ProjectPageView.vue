<template>
  <div>
    <div class="club-page-head">
      <h1 class="club-page-title">
        Project: 
        {{
          $store.state.currentProjectData.project_name
        }}
      </h1>
    </div> <br>
    <div class="description-container">
      Theme: 
      {{
        $store.state.currentProjectData.project_theme
      }}
      <br> <br>
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequatur facilis, suscipit assumenda animi nihil, maiores quod nobis eius, quo asperiores expedita incidunt dolorum accusamus commodi? At cum quos minima quidem!
      <br> <br>
      <button
        class="positive-button"
        v-if="$store.state.isSiteAdminLoggedIn ||
              $store.state.isDistrictAdminLoggedIn ||
              $store.state.isClubAdminLoggedIn"
        @click="() =>this.$router.push('pledges/view')">
        View Pledges
      </button>
    </div>
  </div>
</template>

<script>

export default {
  name: 'ProjectPageView',
  data() {
    return {}
  },
  async created() {},
  methods: {},
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

/* button:hover {
  color: #ffb607;
  transition: color 0.5s;
} */

</style>
