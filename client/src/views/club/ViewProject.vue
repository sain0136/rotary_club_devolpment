<template>
  <div>
    <h1>{{ this.projectName }}</h1>
    {{ this.projectDescription }}
    <br>
    <button
    @click="() => this.$router.push('pledges/view')">
      View Pledges
    </button>
    <button
    @click="() => this.$router.push('pledges/create')">
      Make Pledge
    </button>
  </div>
</template>

<script>

import store from '../../store/index'
import { getProjectData } from '../../data-bank/project-data'

export default {
  name: 'ViewProject',
  data() {
    return {
      projectName: '',
      projectDescription: '',
    }
  },
  async created() {
    const projectInfo = await getProjectData(this.$router.currentRoute.value.params.projectid)
    
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

button {
  font-size: 24px;
}

</style>