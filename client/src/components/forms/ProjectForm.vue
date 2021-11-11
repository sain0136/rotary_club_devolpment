<template>
  <div>
    <form onsubmit="event.preventDefault();">
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
      <div class="form-field">
        <span 
          class="project-error" 
          id="project-grant-error"
          v-if="v$.grantType.$error">
          Please enter a valid grant type
        </span> <br>
        <input type="text"
          v-model="grantType"
          placeholder="Grant Type"> <br> <br>
      </div>    
      <div class="form-field">
        <input type="text"
          v-model="pdfLabel"
          placeholder="PDF Label"> <br> <br>
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
          id="project-current-funs-error"
          v-if="v$.currentFunds.$error">
          Please enter the current funds
        </span> <br>
        <input type="number"
          min="0"
          v-model="currentFunds"
          placeholder="Current Funds"> <br> <br>
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
        @click="() => this.$router.push('projects')">
        Cancel
      </button>   
    </form>
  </div>
</template>

<script>

import useValidate from '@vuelidate/core'
import { required, maxLength, minLength, email } from '@vuelidate/validators'

import { getProjectData } from '../../data-bank/project-data'

import store from '../../store/index'

export default {
  name: 'ProjectForm',
  props: {
    isEditOrCreate: String
  },
  data() {
    return {
      v$: useValidate(),
      name: '',
      theme: '',
      grantType: '',
      pdfLabel: '',
      fundingGoal: '',
      currentFunds: '',
      region: '',

      createdBy: 28, //>> TODO update with the creator's user ID 
      roleType: 1, //>> TODO update with the creator's role
      rotaryYear: '2021', //>> TODO update reasonably
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
      grantType: {
        required,
        maxLength: maxLength(50),
      },
      fundingGoal: {
        required,
      },
      currentFunds: {
        required,
        //>> TODO add a custom validator to fix maxx to the funding goal
      },
      region: {
        required,
        maxLength: maxLength(30),
      }
    }
  },
  async created() {
    if(this.isEditOrCreate == 'Edit') {
      const projectData = await getProjectData(store.state.currentProjectId)

      this.name = projectData.project_name
      this.theme = projectData.project_theme
      this.grantType = projectData.grant_type
      this.pdfLabel = projectData.pdf_label
      this.fundingGoal = projectData.funding_goal
      this.currentFunds = projectData.current_funds
      this.region = projectData.region
    }
  },
  methods: {
    validateProject() {

      this.v$.$validate()

      if(!this.v$.$error) {
        if(this.isEditOrCreate == 'Create') {
          this.addNewProject()
        } else {
          this.updateExistingProject()
        }
      }
    },

    async addNewProject() {

      let projectToAdd = {
        project_name: this.name,
        project_theme: this.theme,
        grant_type: this.grantType,
        pdf_label: this.pdfLabel,
        funding_goal: this.fundingGoal,
        current_funds: this.currentFunds,
        created_by: this.createdBy,
        region: this.region,
        rotary_year: this.rotaryYear,
        role_type: this.roleType
      }

      try{
        const res = await fetch('/api/project', { 
          method: 'POST', 
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(projectToAdd)
        })
        console.log(await res.json())
      } catch(err) {
        console.log(err)
      }
      
      this.$router.push('projects');
    },

    async updateExistingProject() {
      let projectToUpdate = {
        project_name: this.name,
        project_theme: this.theme,
        grant_type: this.grantType,
        pdf_label: this.pdfLabel,
        funding_goal: this.fundingGoal,
        current_funds: this.currentFunds,
        created_by: this.createdBy,
        region: this.region,
        rotary_year: this.rotaryYear,
        role_type: this.roleType
      }

      try{
        const res = await fetch(`/api/project/${store.state.currentProjectId}`, { 
          method: 'PATCH', 
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(projectToUpdate)
        })
        console.log(await res.json())
      } catch(err) {
        console.log(err)
      }
      
      this.$router.push('projects');
    }
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