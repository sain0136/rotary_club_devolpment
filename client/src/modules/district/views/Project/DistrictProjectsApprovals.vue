<template>
  <div class="cont">
    <section class="page-title">
      <div class="auto-container">
        <div class="inner-box">
          <h1>
            Approve Projects
          </h1>
        </div>
      </div>
    </section>
    <ApprovalTable />
    <br />
    <br />
  </div>
</template>

<script>
import ApprovalTable from '../../../../components/common/Tables/ApprovalTable.vue'
import store from '../../../../store/index'
export default {
  name: 'DistrictProjectsApprovals',
  components: {
    ApprovalTable,
  },
  data() {
    return {
      isDistrict: false,
    }
  },

  created() {
    if (
      store.state
        .isDistrictAdminLoggedIn
    ) {
      this.isDistrict = true
    }
  },
  methods: {},
}
</script>

<style scoped>
.cont {
  min-height: 60%;
  margin-bottom: 3em;
}
h1 {
  text-align: center;
}
.project-types {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  margin-top: 4rem;
  margin-bottom: 3rem;
  justify-content: center;
}

a {
  color: #337ab7;
  text-decoration: none;
  font-weight: 700;
  text-align: center;
  height: 35px;
  font-size: 1em;
  -webkit-transition: all 500ms ease;
}
li a:hover {
  color: #ffffff;
  background-color: #ffb607;
  -webkit-transition: all 500ms ease;
}

.project-types ul {
  position: relative;
  display: inline-block;
}
.project-types li {
  position: relative;
  display: block;
  float: left;
  margin: 0px 4px 4px 4px;
}
.project-types li a:hover {
  color: #ffffff;
  background-color: #ffb607;
  -webkit-transition: all 500ms ease;
}
.project-types li a {
  color: #ffffff;
  padding: 6px 20px;
  border: 0px;
  line-height: 22px;
  text-transform: uppercase;
  background-color: #3a3a3a;
}
.plus-div {
  display: flex;
  display: block;
}
.plus {
  left: 50%;
}
.auto-container {
  position: static;
  max-width: 1200px;
  padding: 0px 15px;
  margin: 0 auto;
}

.page-title h1 {
  font-size: 72px;
  margin-bottom: 0px;
  font-weight: 800;
  color: #ffffff;
  text-transform: capitalize;
  text-align: center;
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
  background-image: url(../../assets/image-3.jpg);
}
section {
  margin-bottom: 3em;
}
</style>
