<template>
  <div class="admin-container">
    <table
      v-if="
        projectsForApproval.length != 0
      "
    >
      <th>Project Name</th>
      <th>Type</th>
      <th>Actions</th>
      <tr
        id="district-project-info"
        v-for="project in projectsForApproval"
        :key="project.project_id"
      >
        <td>
          {{ project.project_name }}
        </td>
        <td id="name">
          {{ project.grant_type }}
        </td>
        <td>
          <button
            title="View and Approve Project"
            class="crud-buttons"
            @click="
              () => {
                this.$router.push({
                  name:
                    'ProjectsViewAndApprove',
                  params: {
                    projectTypeProp:
                      project.grant_type,
                    editOrCreateProp:
                      'approval',
                    projectIdProp:
                      project.project_id,
                    projectLabel:
                      'DistrictChairApproval',
                  },
                })
              }
            "
          >
            <font-awesome-icon
              class="social-icon"
              icon="thumbs-up"
            ></font-awesome-icon>
          </button>
        </td>
      </tr>
    </table>

    <h1 v-else>
      No projects to dsiplay
    </h1>
  </div>
</template>

<script>
import store from '../../../store/index'
import projectApi from '../../../api-factory/project'
import { watchEffect } from 'vue'

export default {
  name: 'ApprovalTable',

  props: {},
  data() {
    return {
      projectsForApproval: [],
      adminToDisplay: '',
    }
  },
  async created() {
    const projectObject = await projectApi.projectsForApproval(
      store.state.loggedInDistrictId,
    )

    watchEffect(() => {
      this.projectsForApproval = projectObject
    })
  },
  methods: {},
}
</script>

<style scoped>
tr:nth-child(even) {
  background-color: #40688227;
}

th,
td {
  border: 1px solid #4068823b;
}
h1 {
  text-align: center;
  margin-top: 4rem;
  margin-bottom: 2rem;
}
</style>
