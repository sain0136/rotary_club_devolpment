<template>
  <div>
    <div class="club-page-head">
      <h1 class="club-page-title">
        Pledges on 
        {{ 
          $store.state.currentProjectData.project_name
        }}
      </h1>
    </div>
    <br> <br>
    <ProjectPledgesTable/>
  </div>
</template>

<script>

import ProjectPledgesTable from '../../../components/ProjectPledgesTable.vue'

export default {
  name: 'PledgesView',
  components: {
    ProjectPledgesTable
  },
}
</script>

<style scoped>

</style>
