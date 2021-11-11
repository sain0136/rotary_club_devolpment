<template>
  <div>
    <ProjectForm isEditOrCreate="Edit"/>
  </div>
</template>

<script>

import ProjectForm from '../../../components/forms/ProjectForm.vue'

export default {
  name: 'EditProject',
  components: {
    ProjectForm
  }
}

</script>