<template>
  <div class="container">
    <input 
      type="text"
      placeholder="Search Projects"
      v-model="searchText"
    >
    <div class="row">
      <div class="col-sm-6"
        v-for="project in filteredProjects" :key="project.id">
        <div class="card"
          @click="goToProjectPage(project.project_id)">
          <div class="card-body">
            <h5 class="card-title">{{ project.project_name }}</h5>
            <p class="card-text">{{ project.project_theme }}</p>
            <a href="/club/editproject" class="btn btn-primary">Edit</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

import store from "../../store/index";
import { getDistrictProjects, getClubProjects, getUserProjects } from '../../data-bank/project-data'

export default {
  name: "ProjectsTable",
  props: {
    pageToDisplay: String
  },
  data() {
    return {
      projects: Array,
      searchText: null,
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
  methods: {
    goToProjectPage(projectId) {
      store.dispatch('changeCurrentProject', projectId)
      this.$router.push('./project')
    },
    goToEditProjectPage(clubId) {
      store.dispatch('changeCurrentClub', clubId)
      this.$router.push('editclub')
    },
  },
  async created() {
    if(this.pageToDisplay == 'District') {
      this.projects = await getDistrictProjects()
    } 
    else if(this.pageToDisplay == 'Club') {
      this.projects = await getClubProjects()
    } 
    else {
      this.projects = await getUserProjects()
    }
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