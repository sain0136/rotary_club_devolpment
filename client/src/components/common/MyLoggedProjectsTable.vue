<template>
  <div class="admin-container">
    <table
      v-if="
        myDistrictProjects.length != 0
      "
    >
      <th>Project Name</th>
      <th>Type</th>
      <th>Actions</th>
      <tr
        id="district-project-info"
        v-for="project in myDistrictProjects"
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
            title="View Project"
            class="crud-buttons"
            @click="
              () =>
                this.$router.push({
                  name:
                    'DistrictProjects',
                })
            "
          >
            <font-awesome-icon
              class="social-icon"
              icon="external-link-alt"
            ></font-awesome-icon>
          </button>
          <button
            title="Edit Project"
            class="crud-buttons"
                        @click="
                () =>
                  this.$router.push({
                    name:
                      'DistrictProjectEdit',
                    params: {
                      projectTypeProp: 1,
                      editOrCreateProp:
                        'edit',
                      projectLabel:
                        'District',
                      currentProjectPropObj: project,
                      projectIdProp: project.project_id,
                    },
                  })
              "
          >
       
            <font-awesome-icon
              class="social-icon"
              icon="edit"
            ></font-awesome-icon>
          </button>
          <button
            title="Delete Project"
            class="crud-buttons"
            @click="
              deleteById(
                project.project_id,
                project.project_name,
              )
            "
          >
            <font-awesome-icon
              class="social-icon"
              icon="trash-alt"
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
import store from '../../store/index'
import project from '../../api-factory/project'
import { watchEffect } from 'vue'

export default {
  name: 'MyLoggedProjectsTable',

  props: {
    loggedInAsDistrictProp: Boolean,
    adminToDisplayProp: String,
  },
  data() {
    return {
      myDistrictProjects: [],
      loggedInAsDistrictAdmin: false,
      adminToDisplay: '',
    }
  },
  async created() {
    if (
      store.state
        .isDistrictAdminLoggedIn
    ) {
      this.loggedInAsDistrictAdmin = true
    }
    if (
      this.adminToDisplayProp ==
      'District'
    ) {
      const projectObject = await project.userIndex(
        store.state
          .loggedInDistrictUserId,
      )
      watchEffect(() => {
   
        this.myDistrictProjects = projectObject
      })
    }
  },
  methods: {
    editRedirect() {
      if (
        store.state.isSiteAdminLoggedIn
      ) {
      } else {
        this.$router.push({
          name: 'DistrictProjectEdit',
          parems: {
            currentProjectPropObj: {
              sup: 'fjdkjf',
            },
          },
        })
      }
    },

    async deleteById(
      projectId,
      projectName,
    ) {
      if (
        confirm(
          `Are you sure you want to delete your Project with id: ${projectId} : ${projectName}?`,
        )
      ) {
        await project.deleteById(
          projectId,
        )
        this.redirect()
      }
    },
   
    redirect(code) {
      this.$router.go()
    },
  },
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
</style>
