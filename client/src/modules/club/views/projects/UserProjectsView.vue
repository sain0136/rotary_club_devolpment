<template>
  <div>
    <div class="club-page-head">
      <h1 class="club-page-title">
        Your Projects
      </h1>
    </div> <br> <br>
    <br />
    <div class="projects-container">
      <ProjectsTable
        pageToDisplay="User"
      />
    </div>
  </div>
</template>

<script>
import ProjectsTable from '../../../../components/common/ProjectsTable.vue'

export default {
  name: 'UserProjectsView',
  components: {
    ProjectsTable,
  },
}
</script>

<style scoped></style>
