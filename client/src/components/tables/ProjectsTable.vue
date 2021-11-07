<template>
  <div class="container">
    <div class="row">
      <div class="col-sm-6">
        <div class="card">
          <div class="card-body">
            <h5 class="card-title">Special title treatment</h5>
            <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
            <a href="#" class="btn btn-primary">Go somewhere</a>
          </div>
        </div>
      </div>
      <div class="col-sm-6">
        <div class="card">
          <div class="card-body">
            <h5 class="card-title">Special title treatment</h5>
            <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
            <a href="#" class="btn btn-primary">Go somewhere</a>
          </div>
        </div>
      </div>
      <div class="col-sm-6"
        v-for="project in projects" :key="project.id">
        <div class="card"
          @click="goToProjectPage(project.id)">
          <div class="card-body">
            <h5 class="card-title">{{ project.name }}</h5>
            <p class="card-text">{{ project.description }}</p>
            <a href="#" class="btn btn-primary">Edit</a>
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
    goToProjectPage(clubId) {
      // store.dispatch('changeCurrentClub', clubId)
      // this.$router.push(`/club`)
      console.log(clubId)
    },
    goToEditProjectPage(clubId) {
      store.dispatch('changeCurrentClub', clubId)
      this.$router.push('editclub')
    },
  },
  async created() {
    this.projects = await getProjects()
    console.log(await getProjects())
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