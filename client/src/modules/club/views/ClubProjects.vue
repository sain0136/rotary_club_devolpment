<template>
  <div>
    <section class="page-title">
      <div class="auto-container">
        <div class="inner-box">
          <h1>Our Projects</h1>
        </div>
      </div>
    </section>
    <br />
    <br />
    <div class="projects-container">
      <ProjectsTable
        pageToDisplay="Club"
      />
    </div>
  </div>
</template>

<script>
import ProjectsTable from '../../../components/common/ProjectsTable.vue'

export default {
  name: 'ClubProjects',
  components: {
    ProjectsTable,
  },
}
</script>

<style scoped>
div {
  text-align: center;
}
/* title */
.page-title h1 {
  font-size: 72px;
  margin-bottom: 0px;
  font-weight: 800;
  color: #ffffff;
  text-transform: capitalize;
}

.page-title .inner-box {
  position: relative;
}
.page-title {
  position: relative;
  padding: 30px 0px 40px;
  background-size: cover;
  text-align: center;
  background-attachment: fixed;
  background-repeat: no-repeat;
  background-position: center center;
  background-image: url(../assets/image-3.jpg);
}
</style>
