<template>
  <div class="container">
    <input 
      type="text"
      placeholder="Search Projects"
      v-model="searchText">
    
    <div 
      class="row"
      v-if="!this.isProjectsEmpty">
      <div class="col-sm-6"
        v-for="project in filteredProjects" 
        :key="project.id">
        <div class="card"
          @click="goToProjectPage(project.project_id)">
          <div class="card-body">
            <h5 class="card-title">{{ project.project_name }}</h5>
            <p class="card-text">{{ project.project_theme }}</p>
            <a :href="`./edit`" class="btn btn-primary">Edit</a>
          </div>
        </div>
      </div>
    </div>
    <div v-else>
      <br> <br> <h3>There is no projects to display!</h3>
    </div>
  </div>
</template>

<script>

import store from "../../store/index";
import project from '../../api-factory/project'

export default {
  name: "ProjectsTable",
  props: {
    pageToDisplay: String
  },
  data() {
    return {
      projects: [],
      searchText: '',
      isProjectsEmpty: true, //by default should be true
    };
  },
  computed: {
    filteredProjects() {
      return this.projects.filter(project => {
        const projectName = project.project_name.toString().toLowerCase()
        const searchTerm = this.searchText.toLowerCase()

        return projectName.includes(searchTerm)
      })
    }
  },
  async created() {
    await this.populateTable()
  },
  methods: {
    async populateTable() {
      if(this.pageToDisplay == 'District') {
        this.projects = await project.districtIndex(this.$router.currentRoute.value.params.id)
      } 
      else if(this.pageToDisplay == 'Club') {
        this.projects = await project.clubIndex(this.$router.currentRoute.value.params.id)
      } 
      else {
        this.projects = await project.userIndex(store.state.loggedInClubUserId)
      }
    },

    goToProjectPage(projectId) {
      store.dispatch('changeCurrentProject', projectId)
      this.$router.push(`./${projectId}/view`)
    },

    goToEditProjectPage(clubId) {
      store.dispatch('changeCurrentClub', clubId)
      this.$router.push('editclub')
    },
  },
};
</script>

<style scoped>

input {
  font-size: 22px;
}

.row {
  margin: auto;
  width: 50%;
}

.card {
  font-size: 16px;
  cursor: pointer;
  margin-top: 10px;
}

.card:hover {
  opacity: 0.5;
}

</style>