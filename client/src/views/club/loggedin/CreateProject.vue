<template>
  <div>
    <div v-if="!projectFormOpen">
      <button @click="setProjectType(1)">Type I</button>
      <button @click="setProjectType(2)">Type II</button>
      <button @click="setProjectType(3)">Type II</button>
      <button @click="setProjectType(4)">Type IV</button>
    </div>
    <ProjectForm 
      v-else
      :projectType="this.projectType"
      isEditOrCreate="Create"/>
  </div>
</template>

<script>

import ProjectForm from '../../../components/forms/ProjectForm.vue'

export default {
  name: 'CreateProject',
  components: {
    ProjectForm
  },
  data() {
    return {
      projectType: Number,
      projectFormOpen: false
    }
  },
  methods: {
    setProjectType(typeId) {
      this.projectType = typeId
      this.projectFormOpen = true
    }
  }

}
</script>

<style>

button {
  font-size: 18px;
}

</style>