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
    <PledgesTable/>
  </div>
</template>

<script>

import PledgesTable from '../../../components/PledgesTable.vue'

export default {
  name: 'PledgesView',
  components: {
    PledgesTable
  },
}
</script>

<style scoped>

</style>
