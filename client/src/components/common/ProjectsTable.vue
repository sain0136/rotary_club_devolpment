<template>
  <div class="container">
    <div class="filters-container">
      <br>
      <h1>Search</h1> <br>
      <input 
        type="text"
        placeholder="Search by keywords.."
        v-model="searchText"> <br> <br>
      <label for="status">Status</label>
      <select 
        name="status"
        v-model="status">
        <option value="">Funding</option>
        <option value="">Pending</option>
      </select> <br> <br>
      <label for="region">Region</label>
      <select name="region">
        <option value="">Africa</option>
        <option value="">Asia</option>
      </select> <br> <br>
      <label for="year">Year</label>
      <select name="year">
        <option value="">2020</option>
        <option value="">2019</option>
      </select> <br> <br>
      <label for="year">Project Type</label>
      <select name="year">
        <option value="">yarak</option>
        <option value="">kürek</option>
      </select> <br> <br> <br><br><br><br>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam error nam labore cumque vel laudantium aut! Nisi sint, reprehenderit veritatis, nobis quos mollitia optio perferendis est obcaecati at consectetur ut?</p>
    </div>
    <div class="projects-container">
      <div 
        class="row"
        v-if="this.projects.length != 0">
        <div class="col-sm-4"
          v-for="project in filteredProjects" 
          :key="project.id">
          <div class="card"
            @click="goToProjectPage(project.project_id)">
            <img
              class="project-image"
              src="../../assets/project-placeholder.png" alt="">
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
      status: '',
      region: '',
      year: Number,
      projectType: ''
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

.container {
  margin-bottom: -500px;
}

h1 {
  font-family: 'Montserrat', sans-serif;
  font-weight: bolder;
}

label {
  display: inline-block;
  width: 120px;
  text-align: right;
  margin-left: -60px;
  margin-right: 5px;
}

select {
  width: 200px;
  background-color: transparent;
}

option, select, input {
  background-color: transparent;
}

.filters-container {
  float: left;
  width: 30%;
  background-color: #b2b2b260;
}

.projects-container {
  /* float: right; */
  padding-left: 100px;
  width: 70%;
  height: 600px;
  overflow: auto;
}

::-webkit-scrollbar {
  display: none;
}

input {
  font-size: 22px;
}

.row {
  margin: auto;
  width: 100%;
}

.card {
  font-size: 16px;
  cursor: pointer;
  margin-top: 10px;
  background-color: transparent;
}

.card:hover {
  opacity: 0.5;
}

.project-image {
  width: 100%;
}

</style>