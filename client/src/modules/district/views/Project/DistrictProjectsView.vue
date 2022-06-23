<template>
  <div class="cont">
    <section class="page-title">
      <div class="auto-container">
        <div class="inner-box">
          <h1>
            Create Or Edit Projects
          </h1>
        </div>
      </div>
    </section>
    <MyLoggedProjectsTable
      loggedInAsDistrict
      adminToDisplayProp="District"
    />
    <br />
    <br />
    <div class="plus-div">
      <button
        name="create"
        class="plus"
        id="create-user"
        @click="() => showChocies()"
      ></button>
    </div>

    <div
      class="project-types text-center"
      id="hide-div"
      style="display: none;"
    >
      <ul class="clearfix">
        <li>
          <a
            class="type-buttons"
            @click="
              () =>
                this.$router.push({
                  name:
                    'DistrictProjectCreate',
                  params: {
                    projectTypeProp: 1,
                    editOrCreateProp:
                      'create',
                    projectLabel:
                      'District',
                  },
                })
            "
            >District Project</a
          >
        </li>
      </ul>
      <ul class="clearfix">
        <li>
          <a
            class="type-buttons"
            @click="
              () =>
                this.$router.push({
                  name:
                    'DistrictProjectCreate',
                  params: {
                    projectTypeProp: 2,
                    editOrCreateProp:
                      'create',
                    projectLabel:
                      'District',
                  },
                })
            "
            >District Simplified</a
          >
        </li>
      </ul>
      <ul class="clearfix">
        <li>
          <a
            class="type-buttons"
            @click="
              () =>
                this.$router.push({
                  name:
                    'DistrictProjectCreate',
                  params: {
                    projectType: 3,
                    editOrCreateProp:
                      'create',
                  },
                })
            "
            >District Matching</a
          >
        </li>
      </ul>
      <ul class="clearfix">
        <li>
          <a
            class="type-buttons"
            @click="
              () =>
                this.$router.push({
                  name:
                    'DistrictProjectCreate',
                  params: {
                    projectType: 4,
                    editOrCreateProp:
                      'create',
                  },
                })
            "
            >Global Project</a
          >
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import MyLoggedProjectsTable from '../../../../components/common/Tables/MyLoggedProjectsTable.vue'
export default {
  name: 'DistrictProjectsView',
  components: {
    MyLoggedProjectsTable,
  },
  data() {
    return {}
  },

  created() {},
  methods: {
    showChocies() {
      let x = document.getElementById(
        'hide-div',
      )
      if (x.style.display === 'none') {
        x.style.display = 'flex'
      } else {
        x.style.display = 'none'
      }
    },
  },
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
  margin-top: 3em;
  margin-bottom: 3em;
}

.clearfix {
  left: 10%;
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
