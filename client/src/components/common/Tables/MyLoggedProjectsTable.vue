<template>
  <div class="admin-container">
    <table
      v-if="myProjects.length != 0"
    >
      <th>Project Name</th>
      <th>Type</th>
      <th>Actions</th>
      <tr
        id="district-project-info"
        v-for="project in myProjects"
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
              () => {
                if (
                  project.grant_type ==
                  'Club Project'
                ) {
                  if (
                    adminToDisplayProp ==
                    'Club'
                  ) {
                    this.$router.push({
                      name:
                        'ClubProjectEdit',
                      params: {
                        projectTypeProp: 1,
                        editOrCreateProp:
                          'view',
                        projectLabel:
                          'Club',
                        currentProjectPropObj: project,
                        projectIdProp:
                          project.project_id,
                      },
                    })
                  } else {
                    this.$router.push({
                      name:
                        'DistrictProjectEdit',
                      params: {
                        projectTypeProp: 1,
                        editOrCreateProp:
                          'view',
                        projectLabel:
                          'District',
                        currentProjectPropObj: project,
                        projectIdProp:
                          project.project_id,
                      },
                    })
                  }
                } else if (
                  project.grant_type ==
                  'District Simplified Project'
                ) {
                  if (
                    adminToDisplayProp ==
                    'Club'
                  ) {
                    this.$router.push({
                      name:
                        'ClubProjectEdit',
                      params: {
                        projectTypeProp: 2,
                        editOrCreateProp:
                          'view',
                        projectLabel:
                          'Club',
                        currentProjectPropObj: project,
                        projectIdProp:
                          project.project_id,
                      },
                    })
                  } else {
                    this.$router.push({
                      name:
                        'DistrictProjectEdit',
                      params: {
                        projectTypeProp: 2,
                        editOrCreateProp:
                          'view',
                        projectLabel:
                          'District',
                        currentProjectPropObj: project,
                        projectIdProp:
                          project.project_id,
                      },
                    })
                  }
                } else if (
                  project.grant_type ==
                  'District Matching Project'
                ) {
                  if (
                    adminToDisplayProp ==
                    'Club'
                  ) {
                    this.$router.push({
                      name:
                        'ClubProjectEdit',
                      params: {
                        projectTypeProp: 3,
                        editOrCreateProp:
                          'view',
                        projectLabel:
                          'Club',
                        currentProjectPropObj: project,
                        projectIdProp:
                          project.project_id,
                      },
                    })
                  } else {
                    this.$router.push({
                      name:
                        'DistrictProjectEdit',
                      params: {
                        projectTypeProp: 3,
                        editOrCreateProp:
                          'view',
                        projectLabel:
                          'District',
                        currentProjectPropObj: project,
                        projectIdProp:
                          project.project_id,
                      },
                    })
                  }
                }
              }
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
              () => {
                if (
                  project.grant_type ==
                  'Club Project'
                ) {
                  if (
                    adminToDisplayProp ==
                    'Club'
                  ) {
                    this.$router.push({
                      name:
                        'ClubProjectEdit',
                      params: {
                        projectTypeProp: 1,
                        editOrCreateProp:
                          'edit',
                        projectLabel:
                          'Club',
                        currentProjectPropObj: project,
                        projectIdProp:
                          project.project_id,
                      },
                    })
                  } else {
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
                        projectIdProp:
                          project.project_id,
                      },
                    })
                  }
                } else if (
                  project.grant_type ==
                  'District Simplified Project'
                ) {
                  if (
                    adminToDisplayProp ==
                    'Club'
                  ) {
                    this.$router.push({
                      name:
                        'ClubProjectEdit',
                      params: {
                        projectTypeProp: 2,
                        editOrCreateProp:
                          'edit',
                        projectLabel:
                          'Club',
                        currentProjectPropObj: project,
                        projectIdProp:
                          project.project_id,
                      },
                    })
                  } else {
                    this.$router.push({
                      name:
                        'DistrictProjectEdit',
                      params: {
                        projectTypeProp: 2,
                        editOrCreateProp:
                          'edit',
                        projectLabel:
                          'District',
                        currentProjectPropObj: project,
                        projectIdProp:
                          project.project_id,
                      },
                    })
                  }
                } else if (
                  project.grant_type ==
                  'District Matching Project'
                ) {
                  if (
                    adminToDisplayProp ==
                    'Club'
                  ) {
                    this.$router.push({
                      name:
                        'ClubProjectEdit',
                      params: {
                        projectTypeProp: 3,
                        editOrCreateProp:
                          'edit',
                        projectLabel:
                          'Club',
                        currentProjectPropObj: project,
                        projectIdProp:
                          project.project_id,
                      },
                    })
                  } else {
                    this.$router.push({
                      name:
                        'DistrictProjectEdit',
                      params: {
                        projectTypeProp: 3,
                        editOrCreateProp:
                          'edit',
                        projectLabel:
                          'District',
                        currentProjectPropObj: project,
                        projectIdProp:
                          project.project_id,
                      },
                    })
                  }
                }
              }
            "
          >
            <font-awesome-icon
              class="social-icon"
              icon="edit"
            ></font-awesome-icon>
          </button>
          <!-- pledges Button -->
          <button
            title="View pledges"
            class="crud-buttons"
            @click="
              () => {
                if (
                  adminToDisplayProp ==
                  'Club'
                ) {
                  this.$router.push({
                    name:
                      'ClubProjectPledgesView',
                    params: {
                      isThisMyPledges:
                        'no',
                      projectId:
                        project.project_id,
                    },
                  })
                } else {
                  this.$router.push({
                    name:
                      'DistrictProjectPledgesView',
                    params: {
                      isThisMyPledges:
                        'no',
                      projectId:
                        project.project_id,
                    },
                  })
                }
              }
            "
          >
            <font-awesome-icon
              class="social-icon"
              icon="eye"
            ></font-awesome-icon>
            <!-- delete button -->
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
          <!-- submit for approval -->
          <button
            v-if="
              project.project_status ==
                'Fully funded'
            "
            title="Submit project for approval"
            class="crud-buttons"
            @click="
              submitForAprroval(project)
            "
          >
            <font-awesome-icon
              class="social-icon"
              icon="check"
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
  name: 'MyLoggedProjectsTable',

  props: {
    loggedInAsDistrictProp: String,
    adminToDisplayProp: String,
  },
  data() {
    return {
      myProjects: [],
      loggedInAsDistrictAdmin: false,
      loggedInAsClubUserOrAdmin: false,
      adminToDisplay: '',
    }
  },
  async created() {
    if (
      store.state
        .isDistrictAdminLoggedIn
    ) {
      this.loggedInAsDistrictAdmin = true
    } else {
      this.loggedInAsClubUserOrAdmin = true
    }
    if (
      this.adminToDisplayProp ==
      'District'
    ) {
      const projectObject = await projectApi.userIndex(
        store.state
          .loggedInDistrictUserId,
      )

      watchEffect(() => {
        this.myProjects = projectObject
      })
    } else if (
      this.adminToDisplayProp == 'Club'
    ) {
      const projectObject = await projectApi.userIndex(
        store.state.currentClubUserData
          .user_id,
      )

      watchEffect(() => {
        this.myProjects = projectObject
      })
    }
  },
  methods: {
    async submitForAprroval(
      projectToUpdate,
    ) {
      switch (
        projectToUpdate.grant_type
      ) {
        case 'Club Project':
          projectToUpdate.project_status = 3
          await projectApi.changeProjectStatus(
            projectToUpdate.project_id,
            projectToUpdate.project_status,
          )
          break
        case 'District Simplified Project':
          projectToUpdate.project_status = 3
          await projectApi.changeProjectStatus(
            projectToUpdate.project_id,
            projectToUpdate.project_status,
          )
          break
        case 'District Matching Project':
          var txt
          if (
            confirm(
              'Are you sure you want to Submit for approval',
            )
          ) {
            projectToUpdate.project_status = 3
            projectToUpdate.grant_type = 3

            await projectApi.changeProjectStatus(
              projectToUpdate.project_id,
              projectToUpdate.project_status,
            )
            alert(
              'Project Submitted for approval!',
            )
          } else {
            txt = 'Canceled'
          }

          break
        case 'Global Project':
          break
        default:
          break
      }
    },
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
        await projectApi.deleteById(
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
h1 {
  text-align: center;
  margin-top: 4rem;
  margin-bottom: 2rem;
}
</style>
