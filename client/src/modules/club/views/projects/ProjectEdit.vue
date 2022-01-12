<template>
  <div>
    <ProjectForm
      isEditOrCreate="Edit"
    />
  </div>
</template>

<script>
import ProjectForm from '../../components/ProjectForm.vue'

export default {
  name: 'EditProject',
  components: {
    ProjectForm,
  },
}
</script>
