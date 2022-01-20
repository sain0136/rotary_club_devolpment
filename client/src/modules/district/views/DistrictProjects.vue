<template>
<div>
  <div class="district-page-head">
    <h1 class="district-page-title">Projects</h1>
  </div> <br> <br>
  <div class="projects-container">
    <ProjectsTable
      pageToDisplay="District"
    />
  </div>
</div>
</template>

<script>
import ProjectsTable from '../../../components/common/ProjectsTable.vue'

export default {
  name: 'DistrictProjects',
  components: {
    ProjectsTable,
  },
}
</script>

<style scoped>
div {
  text-align: center;
}

.projects-container {
  margin-bottom: 50%;
}
</style>
