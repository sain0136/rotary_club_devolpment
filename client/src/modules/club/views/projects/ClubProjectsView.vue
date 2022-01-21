<template>
  <div>
    <div class="club-page-head">
      <h1 class="club-page-title">
        Our Projects
      </h1>
    </div> <br> <br>
    <br />
    <div class="projects-container">
      <ProjectsTable
        pageToDisplay="Club"
      />
    </div>
  </div>
</template>

<script>
import ProjectsTable from '../../../../components/common/ProjectsTable.vue'

export default {
  name: 'ClubProjectsView',
  components: {
    ProjectsTable,
  },
}
</script>

<style scoped></style>
