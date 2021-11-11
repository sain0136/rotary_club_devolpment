<template>
  <div class="container">
    <div class="row">
      <div class="col-sm-6"
        v-for="project in projects" :key="project.id">
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
import { getProjects } from '../../data-bank/project-data'

export default {
  name: "ProjectsTable",
  data() {
    return {
      projects: Array,
    };
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
    this.projects = await getProjects()
  },
};
</script>

<style scoped>

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