<template>
  <div>
    <form onsubmit="event.preventDefault();">
      <h1>Rotary Club of {{ this.clubName }}</h1>
      <h2
        v-if="isEditOrCreate=='Create'">
        New Project  
      </h2>
      <h2
        v-else>
        Edit Project
      </h2>
      <div class="form-field">
        <span 
          class="project-error" 
          id="project-name-error"
          v-if="v$.name.$error">
          Please enter a valid project name
        </span> <br>
        <input type="text"
          v-model="name"
          placeholder="Name"> <br> <br>
      </div>
      <div class="form-field">
        <span 
          class="project-error" 
          id="project-theme-error"
          v-if="v$.theme.$error">
          Please enter a valid project theme
        </span> <br>
        <input type="text"
          v-model="theme"
          placeholder="Theme"> <br> <br>
      </div>
      <!-- TODO area of focus will be a dropdown menu -->
      <div class="form-field">
        <h4>Area of Focus</h4> <br>
        <span
          v-if="v$.area.$error" 
          class="error">
          Error
        </span>
        <select
          v-model="area" 
          name="area" >
          <option value=""></option>
          <option value="1">Peace and Conflict prevention/resolution</option>
          <option value="2">Disease Prevention and Treatment</option> 
          <option value="3">Water and Sanitation</option> 
          <option value="4">Maternal and Child Health</option> 
          <option value="5">Basic Education and Literacy</option> 
          <option value="6">Economic and Community Development</option> 
        </select>
      </div> <br>
      <div class="form-field">
        <span 
          class="project-error" 
          id="project-grant-error"
          v-if="v$.grantType.$error">
          Please select an estimated completion date
        </span> <br>
        <!-- TODO update the min to the current date -->
        <input type="date"
          min="2022-10-01"
          v-model="estimatedCompletion"
          placeholder="Estimated Completion"> <br> <br>
      </div>
      <h4>Extra Info</h4>
      <div class="form-field">
        <span 
          class="project-error" 
          id="project-theme-error"
          v-if="v$.theme.$error">
          Please enter a valid project theme
        </span> <br>
        <label for="q1">Describe the project, its location and objectives. Which area of focus is addressed?  Describe how.</label> <br>
        <input type="text"
          name="q1"
          v-model="question1"
          placeholder="Answer"> <br> <br>
      </div>
      <div class="form-field">
        <span 
          class="project-error" 
          id="project-theme-error"
          v-if="v$.theme.$error">
          Please enter a valid project theme
        </span> <br>
        <label for="q2">Describe how the project will benefit the community or address a community need.</label> <br>
        <input type="text"
          name="q2"
          v-model="question2"
          placeholder="Answer"> <br> <br>
      </div>
      <div class="form-field">
        <span 
          class="project-error" 
          id="project-theme-error"
          v-if="v$.theme.$error">
          Please enter a valid project theme
        </span> <br>
        <label for="q3">Describe the non-financial participation by Rotarians in the project.</label> <br>
        <input type="text"
          name="q3"
          v-model="question3"
          placeholder="Answer"> <br> <br>
      </div>
      <div class="form-field">
        <span 
          class="project-error" 
          id="project-theme-error"
          v-if="v$.theme.$error">
          Please enter a valid project theme
        </span> <br>
        <label for="q4">If a co-operating organisation will be involved in the project, provide a letter stating its role in the project and how Rotarians will interface with the organisation.</label> <br>
        <input type="text"
          name="q4"
          v-model="question4"
          placeholder="Answer"> <br> <br>
      </div>
      <div class="form-field">
        <span 
          class="project-error" 
          id="project-funding-goal-error"
          v-if="v$.fundingGoal.$error">
          Please enter a funding goal
        </span> <br>
        <input type="number"
          min="0"
          v-model="fundingGoal"
          placeholder="Funding Goal"> <br> <br>
      </div>  
      <div class="form-field">
        <span 
          class="project-error" 
          id="project-region-error"
          v-if="v$.region.$error">
          Please enter a valid region
        </span> <br>
        <input type="text"
          v-model="region"
          placeholder="Region"> <br> <br>
      </div>
      <div v-if="itemizedBudgetSubmitted">
        <h3>Itemized budget successfully submitted!</h3> 
        <button @click="() => itemizedBudgetSubmitted = false">Undo</button> <br> <br>
      </div>
      <div v-else>
        <ProjectBudgetSection @approveBudget = 'updateBudget'/> <br> <br>
      </div>
      <div v-if="fundingSubmitted">
        <h3>Funding successfully submitted!</h3>
        <button @click="() => fundingSubmitted = false">Undo</button> <br> <br>
      </div>
      <div v-else>
        <ProjectFundingSection @approveFunding = 'updateFunding'/> <br> <br>
      </div>
      <button 
        v-if="isEditOrCreate=='Create'"
        @click="validateProject">
        Submit
      </button>
      <button 
        v-else
        @click="validateProject">
        Update
      </button>
      <button
        v-if="isEditOrCreate == 'Create'"
        @click="() => this.redirect(true)">
        Cancel
      </button>
      <button
        v-else
        @click="() => this.redirect(false)">
        Cancel
      </button>  
    </form>
  </div>
</template>

<script>

import useValidate from '@vuelidate/core'
import { required, maxLength, minLength, email } from '@vuelidate/validators'

import project from '../../../../../api-factory/project'

import store from '../../../../../store/index'

import ProjectBudgetSection from './ProjectBudgetSimplified.vue'
import ProjectFundingSection from './ProjectFundingSection.vue'

export default {
  name: 'ProjectFormSimplified',
  props: {
    isEditOrCreate: String,
  },
  components: {
    ProjectBudgetSection,
    ProjectFundingSection,
  },
  data() {
    return {
      //to display at the title
      clubName: '',

      //validation
      v$: useValidate(),

      //project variables
      name: '',
      theme: '',
      area: '',
      grantType: 2, //TODO autofill this with the user's role
      estimatedCompletion: '',
      fundingGoal: '',
      currentFunds: '',
      anticipatedFunding: '',
      region: '',
      itemisedBudget: [],
      extraDescriptions: {},
      clubId: this.$router.currentRoute.value.params.id,
      districtId: store.state.currentDistrictId,

      question1: '',
      question2: '',
      question3: '',
      question4: '',

      createdBy: 28,
      roleType: 2, //>> TODO update with the creator's role type
      rotaryYear: null,

      itemizedBudgetSubmitted: false,
      fundingSubmitted: false,
    }
  },
  validations() {
    return {
      name: {
        required,
        maxLength: maxLength(50),
      },
      theme: {
        required,
        maxLength: maxLength(50),
      },
      area: {
        required
      },
      grantType: {
        required,
        maxLength: maxLength(50),
      },
      fundingGoal: {
        required,
      },
      region: {
        required,
        maxLength: maxLength(30),
      }
    }
  },
  async created() {

    this.setVariables()

    if(this.isEditOrCreate == 'Edit') {
      this.prePopulateFields()
    }
  },

  methods: {
    /**
     * for the necessary variables 
     * that are not set by the user
     */
    setVariables() {

      const clubData = store.state.currentClubData
      this.clubName = clubData.club_name

      this.createdBy = store.state.loggedInClubUserId
      this.rotaryYear = new Date().getFullYear()

      if(store.state.isClubAdminLoggedIn) {
        this.roleType = 5
      } else {
        this.roleType = 7
      }
    },
    
    async prePopulateFields() {
      const projectData = await project.show(this.$router.currentRoute.value.params.projectid)
    
      this.name = projectData.project_name
      this.theme = projectData.project_theme
      this.grantType = projectData.grant_type
      this.fundingGoal = projectData.funding_goal
      this.currentFunds = projectData.current_funds
      this.region = projectData.region
    },

    getProjectData() {
      return  {
        project_name: this.name,
        project_theme: this.theme,
        area_focus: this.area,
        grant_type: this.grantType,
        estimated_completion: this.formatDate(this.estimatedCompletion),
        funding_goal: this.fundingGoal,
        anticipated_funding: this.currentFunds,
        current_funds: this.currentFunds,
        created_by: this.createdBy,
        region: this.region,
        rotary_year: this.rotaryYear,
        role_type: this.roleType,
        extra_descriptions: {
          Q1: this.question1,
          Q2: this.question2,
          Q3: this.question3,
          Q4: this.question4
        },
        itemised_budget: this.itemisedBudget,
        club_id: this.clubId,
        district_id: this.districtId,
      }
    },

    validateProject() {

      this.v$.$validate()

      if(!this.v$.$error) {
        if(this.isEditOrCreate == 'Create') {
          this.createNewProject()
        } else {
          this.updateExistingProject()
        }
      }
    },

    async createNewProject() {
      const projectToAdd = this.getProjectData()
      console.log('data: ', projectToAdd)
      project.create(projectToAdd)
      this.redirect(true)
    },

    async updateExistingProject() {
      let projectToUpdate = this.getProjectData()
      project.update(this.$router.currentRoute.value.params.projectid, projectToUpdate)
      this.redirect(false)
    },

    redirect(fromCreate) {
      if(fromCreate) {
        this.$router.push('./view-all')
      } else {
        this.$router.push('../view-all')
      }
    },

    updateBudget(data) {
      this.itemisedBudget = data.items
      this.itemizedBudgetSubmitted = true
    },
    
    updateFunding(funding) {
      this.currentFunds = funding
      this.fundingSubmitted = true
    },

    formatDate(dateString) {
      let date = new Date(dateString)
      let day = parseInt(date.getDate()) 
      let month = parseInt(date.getMonth()) 
      let year = date.getFullYear()
      // return month + '/' + day + '/' + year
      return '05/07/2022' //temporarily
    },
    
  },
}
</script>

<style scoped>

form {
  text-align: center;
  font-size: 16px;
}

.project-error {
  color: red;
  font-size: 12px;
  padding: 0%;
}

</style>