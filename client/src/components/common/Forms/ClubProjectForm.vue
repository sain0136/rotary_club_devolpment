<template>
  <div class="form-container">
    <section class="page-title">
      <div class="auto-container">
        <div class="inner-box">
          <h1>
            Club Project
          </h1>
        </div>
      </div>
    </section>
    <form @submit.prevent="">
      <h3 style="text-align: center;">
        Name & describe your Project
      </h3>
      <!--            Project Title         -->

      <div class="form-inputs">
        <BaseInputs
          v-model="project.project_name"
          label="Project Title"
          type="text"
          span="Must be 5 to 10 characters long"
        />
      </div>
      <!--            project description         -->
      <div class="form-inputs">
        <BaseInputs
          v-model="
            project.project_theme
          "
          label="Project description"
          type="text"
          span="Must be 5 to 50 characters long"
        />
      </div>
      <!--       countries              -->

      <div class="form-inputs">
        <BaseSelect
          v-model="project.country"
          label="Country"
          :options="countryList"
        />
      </div>
      <!--          Area of Focus           -->

      <div class="form-inputs">
        <BaseSelect
          v-model="project.area_focus"
          label="Area of Focus"
          :options="areaOfFocus"
        />
      </div>
      <!--          Funding Goal           -->
      <div class="form-inputs">
        <BaseInputs
          v-model="project.funding_goal"
          label="Funding Goal"
          type="text"
          span="Enter your Funding Goal in USD"
        />
      </div>
      <!--          Current\Starting Funds           -->
      <div class="form-inputs">
        <BaseInputs
          v-model="
            project.current_funds
          "
          label="Current\Starting Funds"
          type="text"
          span="Enter your starting Funds in USD"
        />
      </div>

      <!--            Region         -->
      <div class="form-inputs">
        <BaseSelect
          v-model="project.region"
          label="Region"
          :options="regionList"
        />
      </div>
      <!--         estimated completion            -->
      <div class="form-inputs">
        <BaseInputs
          v-model="
            project.estimated_completion
          "
          label="Estimated completion"
          type="date"
        />
      </div>
      <!--         IMAGE UPLOAD            -->
      <div class="form-inputs">
        <input
          accept="image/*"
          type="file"
          class="col-md-4 control-label"
          @change="
            handleFileChange(
              $event.target.files,
            )
          "
        />
        <label>{{ Image }}</label>
        <span
          id="titleHelpInline"
          class="form-text"
        >
          Upload an img
        </span>
      </div>
      <!--                     -->

      <!--                     -->
      <div
        class="styled-pagination text-center"
      >
        <ul class="clearfix">
          <button
           @submit.prevent=""
            v-if="
              editOrCreateProp == 'edit'
            "
            @click="
              () => updateProject()
            "
          >
            Update
          </button>
          <button
           @submit.prevent=""
            v-else

            @click="
              () => createProject()
            "
          >
            Submit
          </button>
          <button
           @submit.prevent=""
            @click="() => redirect()"
          >
            Cancel
          </button>
        </ul>
      </div>
    </form>
  </div>
</template>

<script>
import BaseInputs from '../../formParts/BaseInputs.vue'
import BaseSelect from '../../formParts/BaseSelect.vue'
import ProjectApi from '../../../api-factory/project'
import store from '../../../store/index'
import Resource from '../../../Resources.js'

export default {
  components: {
    BaseInputs,
    BaseSelect,
  },
  props: {
    projectIdProp: Number,
    editOrCreateProp: String,
    projectLabel: String,
    projectSentProp: Object,
  },
  data() {
    return {
      project: {
        area_focus: '',
        project_name: '',
        project_theme: '',
        country: '',
        grant_type: 1,
        estimated_completion: '',
        funding_goal: 0,
        current_funds: 0,
        created_by: 0,
        region: '',
        rotary_year: 2022,
        image_link: '',
        project_status: 1,
        image: null,
        district_id: 0,

        role_type: 1,
      },
      countryList: [],
      regionList: [],
      areaOfFocus: [],
      
    }
  },
  created() { 
    this.countryList =Resource.countryList
    this.regionList =Resource.region
    this.areaOfFocus =Resource.areaOfFocus
    if (
      this.projectLabel === 'District'
    ) {
      this.project.created_by =
        store.state.loggedInDistrictUserId
      this.project.district_id =
        store.state.loggedInDistrictId
    } else {
      this.project.created_by =
        store.state.loggedInClubUserId
    }
    if (
      this.editOrCreateProp == 'edit'
    ) {
      this.prePopulateFields()
    }
  },
  methods: {
    handleFileChange(event) {
      // handle file changes
      let file  = event[0]
      const fileReader = new FileReader()
      console.log(event[0])
      this.project.image =event[0]
    

    },

    async prePopulateFields() {
      const projectToEdit = await ProjectApi.show(
        this.projectIdProp,
      )
      console.log(projectToEdit)
      this.project.area_focus =
        projectToEdit.area_focus
      this.project.project_name =
        projectToEdit.project_name
      this.project.project_theme =
        projectToEdit.project_theme
      this.project.country =
        projectToEdit.country

      this.project.estimated_completion =
        projectToEdit.estimated_completion
      this.project.funding_goal =
        projectToEdit.funding_goal
      this.project.current_funds =
        projectToEdit.current_funds

      this.project.region =
        projectToEdit.region

      this.project.image_link =
        projectToEdit.image_link
    },
    async updateProject() {
      console.log(
        'updating new project',
      )

      var mydate = new Date(
        this.project.estimated_completion,
      )
      console.log(
        this.project
          .estimated_completion,
      )
      this.project.estimated_completion = mydate.toLocaleDateString(
        'en-US',
      )
      const projectToEdit = this.project
      await ProjectApi.update(
        this.projectIdProp,
        projectToEdit,
      )
      console.log('updated')
      this.redirect()
    },
    async createProject() {


      console.log(
        'creating new project',
      )

      var mydate = new Date(
        this.project.estimated_completion,
      )
      console.log(
        this.project
          .estimated_completion,
      )
      this.project.estimated_completion = mydate.toLocaleDateString(
        'en-US',
      )
      const projectToCreate = this
        .project
      await ProjectApi.create(
        projectToCreate,
      )
      console.log('hi')
      this.redirect()
    },
    redirect(code) {
      this.$router.push({
        name: 'DistrictProjectsView',
      })
    },
  },
}
</script>

<style scoped>
.form-container {
  display: flex;
  flex-direction: column;
  min-height: 60%;
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
  background-image: url(../../../assets/image-3.jpg);
}
section {
  margin-bottom: 3em;
}
.form-inputs {
  display: flex;
  justify-content: center;
  padding: 1em 1em;
}
.styled-pagination ul {
  position: relative;
  display: inline-block;
}

.styled-pagination button {
  position: relative;
  display: block;
  float: left;
  margin: 1em 4px 4px 4px;
  color: #ffffff;
  padding: 6px 20px;
  border: 0px;
  line-height: 22px;
  text-transform: uppercase;
  background-color: #3a3a3a;
}

.clearfix {
}
.styled-pagination {
  position: relative;
  display: flex;
  justify-content: center;
}
button:hover {
  color: #ffffff;
  background-color: #ffb607;
  -webkit-transition: all 500ms ease;
}
</style>
