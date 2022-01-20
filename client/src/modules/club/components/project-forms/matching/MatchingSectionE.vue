<template>
<div class="section">
  <h2>Section E - Sustainability and Measurement</h2> <br> <br>

  <div class="form-field">
    <p>1. How will the project build capacity in the host community?</p>
    <span 
      class="error"
      v-if="v$.projectCapacity.$error">
      This field is required
    </span> <br>
    <textarea 
      v-model="projectCapacity"
      cols="50" 
      rows="5"></textarea>
  </div> <br> <br>
  <div class="form-field">
    <p>2. How will the outcomes of the project be sustained over time after the funding has been expended?</p>
    <span 
      class="error"
      v-if="v$.outcomeSustaining.$error">
      This field is required
    </span> <br>
    <textarea 
      v-model="outcomeSustaining"
      cols="50" 
      rows="5"></textarea>
  </div> <br> <br>
  <div class="form-field">
    <p>3. Identify how the progress toward the objectives will be measured? Check all that apply & include samples if applicable.</p>
    
    <div
      v-for="technique in measurementTechniques"
      :key="technique.id">
      <label :for="technique.name">{{ technique.name }}</label> <br>
      <input 
        type="radio"
        :name="technique.name">
    </div>

  </div> <br> <br>
  <button @click="validate()">Next</button>
</div>
</template>

<script>

import useValidate from '@vuelidate/core'
import { required } from '@vuelidate/validators'

export default {
  name: 'MatchingSectionE',
  data() {
    return {
      v$: useValidate(),

      projectCapacity: '',
      outcomeSustaining: '',

      measurementTechniques: [
        {
          id: 1,
          name: 'Surveys'
        },
        {
          id: 2,
          name: 'Questionnaire'
        },
        {
          id: 3,
          name: 'Observations'
        },
        {
          id: 4,
          name: 'Tests of Knowledge'
        },
        {
          id: 5,
          name: 'Interviews'
        },
        {
          id: 6,
          name: 'Focus Groups'
        },
        {
          id: 7,
          name: 'Video/Media'
        },
        {
          id: 8,
          name: 'Documents/Material Collections'
        }
      ],
      
      additional: '',

    }
  },
  validations() {
    return {
      projectCapacity: {required},
      outcomeSustaining: {required},
    }
  },
  methods: {
    validate() {
      this.v$.$validate()

      if(!this.v$.$error) {
        this.goToNextSection()
      }
    },
    goToNextSection() {
      this.$emit('goToNextSection', 
        {
          projectCapacity: this.projectCapacity,
          outcomeSustaining: this.outcomeSustaining,
          additional: this.additional,
        })
    }
  }

}
</script>

<style scoped>

</style>