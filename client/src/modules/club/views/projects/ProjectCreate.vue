<template>
  <div>
    <div v-if="!projectFormOpen">
      <button
        @click="setProjectType(1)"
      >
        Type I
      </button>
      <button
        @click="setProjectType(2)"
      >
        Type II
      </button>
      <button
        @click="setProjectType(3)"
      >
        Type II
      </button>
      <button
        @click="setProjectType(4)"
      >
        Type IV
      </button>
    </div>
    <div v-else>
      <ProjectFormSimplified
        v-if="projectType == 1"
        isEditOrCreate="Create"
      />
      <ProjectFormMatching
        v-if="projectType == 2"
      />
    </div>

  </div>
</template>

<script>

import ProjectFormSimplified from '../../components/project-forms/simplified/ProjectFormSimplified.vue'
import ProjectFormMatching from '../../components/project-forms/matching/ProjectFormMatching.vue'

export default {
  name: 'ProjectCreate',
  components: {
    ProjectFormSimplified,
    ProjectFormMatching
  },
  data() {
    return {
      projectFormOpen: false,
      projectType: Number
    }
  },
  methods: {
    setProjectType(typeId) {
      this.projectType = typeId
      this.projectFormOpen = true
    },
    openForm(typeId) {
      switch (typeId) {
        case 1: 
          this.projectType == 1
        break
        case 2: 
          this.projectType == 2
        break
      }
    }
  },
}
</script>

<style scoped>
button {
  font-size: 18px;
}
</style>
