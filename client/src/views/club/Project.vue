<template>
  <div>
    <h1>{{ this.projectName }}</h1>
    {{ this.projectDescription }}
    <br>
    <button
    @click="goToViewPledges">
      View Pledges
    </button>
    <button
    @click="goToMakePledge">
      Make Pledge
    </button>
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
    goToViewPledges() {
      this.$router.push('viewpledges')
    },
    goToMakePledge() {
      this.$router.push('createpledge')
    }
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

button {
  font-size: 24px;
}

</style>