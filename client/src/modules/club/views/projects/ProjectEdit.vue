<template>
  <div>
    <ProjectFormSimplified
      isEditOrCreate="Edit"
    />
  </div>
</template>

<script>
import ProjectFormSimplified from '../../components/project-forms/simplified/ProjectFormSimplified.vue'

export default {
  name: 'EditProject',
  components: {
    ProjectFormSimplified,
  },
}
</script>
