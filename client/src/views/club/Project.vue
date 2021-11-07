<template>
  <div>
    <h1>{{ this.projectName }}</h1>
    
    {{ this.projectDescription }}
  </div>
</template>

<script>

import store from '../../store/index'
import { getProjectData } from '../../data-bank/project-data'

export default {
  name: 'Project',
  data() {
    return {
      projectName: '',
      projectDescription: '',
    }
  },
  async created() {
    const projectInfo = await getProjectData(store.state.currentProjectId)
    
    this.projectName = await projectInfo.project_name
    this.projectDescription = await projectInfo.project_theme
  },
  methods: {

  }
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