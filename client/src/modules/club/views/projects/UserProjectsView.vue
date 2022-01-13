<template>
  <div>
    <h1>Your Projects</h1>
    <br />
    <ProjectsTable
      pageToDisplay="User"
    />
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
