<template>
  <div
    class="causes-section causes-grid-page"
  >
    <div class="auto-container">
      <div class="row clearfix">
        <div class="filter-table">
          <h3>PROJECT SEARCH</h3>
          <div class="flex-container">
            <!-- Search input-->
            <div
              class="form-entry"
              style="margin-left: 25px;"
            >
              <label for="searchinput"
                >Search</label
              >
              <div>
                <input
                  id="searchinput"
                  v-model="searchText"
                  name="searchinput"
                  type="search"
                  placeholder="Search by Keyword"
                  class="form-control input-md"
                />
              </div>
            </div>
            <!-- Search by club  -->
            <div
              v-if="
                pageToDisplay ==
                  'District'
              "
              class="form-entry"
              style="margin-left: 25px;"
            >
              <label for="status"
                >Rotary Club</label
              >
              <select
                name="Clubs"
                v-model="belongsToClub"
                id=""
              >
                <option value=""
                  >All Clubs</option
                >
                <option
                  v-for="club in clubList"
                  :key="club"
                  >{{ club }}</option
                >
              </select>
            </div>
            <!-- Status input-->
            <div
              class="form-entry"
              style="margin-left: 25px;"
            >
              <label for="status"
                >Status</label
              >
              <div>
                <select
                  name="status"
                  v-model="status"
                >
                  <option value=""
                    >All Active
                    Statuses</option
                  >
                  <option
                    v-for="statust in statusList"
                    :key="statust"
                    >{{
                      statust
                    }}</option
                  >
                </select>
              </div>
            </div>
            <!-- region input-->
            <div
              class="form-entry"
              style="margin-left: 25px;"
            >
              <label for="region"
                >Region</label
              >
              <div>
                <select
                  name="region"
                  v-model="region"
                >
                  <option value=""
                    >Any Region</option
                  >
                  <option
                    v-for="region in regionList"
                    :key="region"
                    >{{
                      region
                    }}</option
                  >
                </select>
              </div>
            </div>
            <!-- Area of Focus input-->
            <div
              class="form-entry"
              style="margin-left: 25px;"
            >
              <label for="AreaofFocus"
                >Area Of Focus</label
              >
              <div>
                <select
                  name="AOF"
                  v-model="areaFocus"
                >
                  <option value=""
                    >All Types</option
                  >
                  <option
                    v-for="focus in areaOfFocus"
                    :key="focus"
                    >{{ focus }}
                  </option>
                </select>
              </div>
            </div>
            <!-- buttons-->
            <div
              class="form-group"
              style="margin-left: 25px;"
            >
              <div class="button-sub">
                <button
                  id="button1id"
                  name="button1id"
                  class="btn btn-success"
                  @click="filter()"
                >
                  Search
                </button>
                <button
                  id="button2id"
                  name="button2id"
                  class="btn btn-warning"
                  @click="
                    this.$router.go()
                  "
                >
                  Reset
                </button>
              </div>
            </div>
          </div>
        </div>
        <!-- grid-->

        <div
          class="project-grid"
          v-if="
            filteredProj.length != 0
          "
        >
          <ProjectCard
            v-for="project in filteredProj"
            :key="project.id"
            :project="project"
          />
        </div>
        <div v-else>
          <h1>
            No Projects To Display
          </h1>
        </div>
      </div>
    </div>
    <div
      class="styled-pagination text-center"
    >
      <ul class="clearfix">
        <li
          v-if="
            apiData.current_page != 1
          "
        >
          <a
            class="prev"
            @click="
              mutateCurrentPage(
                apiData.current_page,
                2,
              )
            "
            >Previous</a
          >
        </li>
        <li
          v-if="
            apiData.current_page !==
              apiData.last_page
          "
        >
          <a
            class="next"
            @click="
              mutateCurrentPage(
                apiData.current_page,
                1,
              )
            "
            >Next</a
          >
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import store from '../../store/index'
import project from '../../api-factory/project'
import DistrictApi from '../../api-factory/district'

import ProjectCard from '../../components/common/ProjectCard.vue'
import { watchEffect } from 'vue'
import Resources from '../../Resources'

export default {
  name: 'ProjectsTable',
  components: {
    ProjectCard,
  },
  props: {
    pageToDisplay: String,
  },
  data() {
    return {
      projects: [],
      filteredProj: [],
      searchText: '',
      belongsToClub: '',
      status: '',
      region: '',
      areaFocus: '',
      year: Number,
      areaOfFocus:
        Resources.areaOfFocus,

      apiData: {
        current_page: 1,
        limit: 6,
        last_page: 0,
        noSearch: true,
      },
      meta: Object,
      regionList: Resources.regionList,
      statusList: Resources.statusList,
      searchTermConversionMap: Resources.searchTermConversionMap(),
      clubList: [],
      clubListObjectArray: [],
    }
  },
  computed: {
    async filteredProjects() {},
  },
  async created() {
    // watchEffect(async () => {
    this.projects = {}
    console.log({ api: this.apiData })
    await this.populateTable()
    // })
  },
  methods: {
    filter() {
      let ticker = true
      if (this.belongsToClub != '') {
        ticker = false
        this.filteredProj = this.projects.filter(
          project => {
            let returnObject = this.clubListObjectArray.find(
              o =>
                o.clubName ==
                this.belongsToClub,
            )

            let clubId =
              returnObject.clubId
            if (
              project.club_id == clubId
            ) {
              return true
            } else {
              return false
            }
          },
        )
      }
      if (this.searchText != '') {
        ticker = false

        this.filteredProj = this.projects.filter(
          project => {
            const projectName = project.project_name
              .toString()
              .toLowerCase()
            const searchTerm = this.searchText.toLowerCase()
            if (
              projectName.includes(
                searchTerm,
              )
            ) {
              return true
            }
          },
        )
      }

      if (this.status != '') {
        ticker = false
        this.filteredProj = this.projects.filter(
          project => {
            if (
              project.project_status ==
              this.status
            ) {
              return true
            } else {
              return false
            }
          },
        )
      }
      if (this.region != '') {
        ticker = false

        this.filteredProj = this.projects.filter(
          project => {
            if (this.region != '') {
              if (
                project.region ==
                this.region
              ) {
                return project
              }
            }
          },
        )
      }
      if (this.areaFocus != '') {
        ticker = false

        this.filteredProj = this.projects.filter(
          project => {
            if (this.areaFocus != '') {
              let searchTerm = this.searchTermConversionMap.get(
                this.areaFocus,
              )
              const asArray = Object.entries(
                project.areaFocusObject,
              )
              const filtered = asArray.filter(
                ([key, value]) =>
                  key == searchTerm &&
                  value == true,
              )
              if (filtered.length > 0) {
                return project
              }
            }
          },
        )
      }
      if (ticker) {
        this.filteredProj = this.projects
      }
    },

    async populateTable() {
      if (
        this.pageToDisplay == 'District'
      ) {
        const clubArray = await DistrictApi.allClubsInDistrict(
          store.state
            .currentDistrictData
            .district_id,
        )
        clubArray.allClubs.forEach(
          el => {
            console.log('fsjkhfjksad')
            this.clubList.push(
              el.club_name,
            )
          },
        )
        clubArray.allClubs.forEach(
          el => {
            this.clubListObjectArray.push(
              {
                clubName: el.club_name,
                clubId: el.club_id,
              },
            )
          },
        )
        const projectObject = await project.indexPagination(
          parseInt(
            this.$router.currentRoute
              .value.params.id,
          ),
          this.apiData.limit,
          this.apiData.current_page,
          true,
        )
        this.filteredProj =
          projectObject.projects.data
        this.projects =
          projectObject.projects.data
        this.meta =
          projectObject.projects.meta
        this.apiData.last_page = this.meta.last_page
      } else if (
        this.pageToDisplay == 'Club'
      ) {
        const projectObject = await project.indexPagination(
          parseInt(
            this.$router.currentRoute
              .value.params.id,
          ),
          this.apiData.limit,
          this.apiData.current_page,
          false,
        )
        this.filteredProj =
          projectObject.projects.data
        this.projects =
          projectObject.projects.data
        this.meta =
          projectObject.projects.meta
        this.apiData.last_page = this.meta.last_page
      } else {
        this.projects = await project.userIndex(
          store.state
            .loggedInClubUserId,
        )
      }
    },
    mutateCurrentPage(page, sign) {
      if (sign === 1) {
        this.apiData.current_page =
          page + 1
        console.log(
          this.apiData.current_page,
        )
        if (
          this.meta.current_page ==
          this.meta.last_page
        ) {
          console.log(
            this.meta.current_page,
          )
        } //delete
      } else {
        this.apiData.current_page =
          page - 1
        console.log(
          this.apiData.current_page,
        )
      }
    },

    /* goToProjectPage(projectId) {
      store.dispatch(
        'changeCurrentProject',
        projectId,
      )
      this.$router.push(
        `./${projectId}/view`,
      )
    },

    goToEditProjectPage(clubId) {
      store.dispatch(
        'changeCurrentClub',
        clubId,
      )
      this.$router.push('editclub')
    }, */
  },
}
</script>

<style scoped>
.form-entry {
  display: block;
}
.causes-section {
  position: relative;
  padding: 100px 0px 70px;
}
.auto-container {
  position: static;
  max-width: 1200px;
  padding: 0px 15px;
  margin: 0 auto;
}
.row {
  margin-right: -15px;
  margin-left: -15px;
  display: grid;
  grid-template-columns: [first] 30% [line2] 70%;
  grid-template-rows: [row1-start] 100%;
}
.filter-table {
  background-color: #dedede;
  padding-bottom: 1.5em;
  border-spacing: 0;
  border-collapse: collapse;
  grid-column-start: first;
  grid-column-end: first;
  grid-row-start: row1-start;
  grid-row-end: row1-start;
}
.project-grid {
  border-spacing: 0;
  border-collapse: collapse;
  grid-column-start: line2;
  grid-column-end: line2;
  grid-row-start: row1-start;
  grid-row-end: row1-start;
  display: flex;
  column-gap: 1em;
  flex-wrap: wrap;
  padding-top: 1em;
  /*   display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: [row1] 50% [row2] 50%; */
}
.button-sub {
  float: left;
}
h3 {
  position: relative;
  font-weight: 700;
  margin: 0px;
  background: none;
  line-height: 1.6em;
  font-family: 'Montserrat', sans-serif;
  color: rgb(119, 119, 119);
}
.flex-container {
  display: flex;
  flex-direction: column;
  height: 100%;
}
.form-entry {
  margin-top: 1em;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  margin-bottom: 1em;
}
.form-entry label {
  padding: 0.5em;
  display: inline-block;
  max-width: 100%;
  margin-bottom: 5px;
  font-weight: 700;
  font-family: 'Lato', sans-serif;
  align-self: flex-start;
}
select {
  width: 70%;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-shadow: inset 0 1px 1px
    rgb(0 0 0 / 8%);
  transition: border-color ease-in-out
      0.15s,
    box-shadow ease-in-out 0.15s;
  height: 2em;
  float: left;
}
option {
  clear: both;
  font-weight: 400;
  line-height: 1.42857143;
  color: #333;
  white-space: nowrap;
  cursor: pointer;
  font-family: 'Lato', sans-serif;
}

/* button */
.styled-pagination {
  position: relative;
}
.clearfix {
  left: 10%;
}
.styled-pagination ul {
  position: relative;
  display: inline-block;
}
.styled-pagination li {
  position: relative;
  display: block;
  float: left;
  margin: 0px 4px 4px 4px;
}
.styled-pagination li a {
  color: #ffffff;
  padding: 6px 20px;
  border: 0px;
  line-height: 22px;
  text-transform: uppercase;
  background-color: #3a3a3a;
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
.button-sub {
  display: flex;
  flex-direction: row;
  column-gap: 0.5em;
}
</style>
