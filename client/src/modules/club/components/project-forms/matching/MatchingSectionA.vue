<template>
<div class="section">
  <h2>Section A - Project Sumary</h2>
    <div class="formfield">
      <label for="name">Project Name</label> <br>
      <span
        v-if="v$.name.$error" 
        class="error">
        Error
      </span>
      <input 
        v-model="name"
        name="name" 
        type="text">
    </div> <br>
    <div class="formfield">
      <label for="name">Project Theme</label> <br>
      <span
        v-if="v$.name.$error" 
        class="error">
        Error
      </span>
      <input 
        v-model="theme"
        name="theme" 
        type="text">
    </div> <br>
    <div class="formfield">
      <label for="completion-date">Estimated Completion Date</label> <br>
      <span
        v-if="v$.completionDate.$error" 
        class="error">
        Error
      </span>
      <input 
        v-model="completionDate"
        name="completion-date" 
        type="date">
    </div> <br>
    <div class="formfield">
      <p>Where will project take place?</p>
      <span
        v-if="v$.region.$error" 
        class="error">
        Error
      </span>
      <input 
        type="text" 
        placeholder="Region"
        v-model="region"> <br> <br>
      <span
        v-if="v$.country.$error" 
        class="error">
        Error
      </span>
      <input 
        type="text" 
        placeholder="Country"
        v-model="country"> <br>
      <span
        v-if="v$.city.$error" 
        class="error">
        Error
      </span>
      <input 
        type="text" 
        placeholder="City/Village"
        v-model="city"> <br>
      <span
        v-if="v$.community.$error" 
        class="error">
        Error
      </span>
      <input 
        type="text" 
        placeholder="Community"
        v-model="community">
    </div> <br>
    <div class="formfield">
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
      <p>Create an itemized list of the specific objectives of the project</p>
      <span
        v-if="v$.objectives.$error" 
        class="error">
        Error
      </span>
      <textarea
        v-model="objectives" 
        cols="50" 
        rows="5"></textarea>
    </div> <br>
    <div class="form-field">
      <p>Describe in detail the project and implementation plan.</p>
      <span
        v-if="v$.implementationPlan.$error" 
        class="error">
        Error
      </span>
      <textarea
        v-model="implementationPlan" 
        cols="50" 
        rows="5"></textarea>
    </div> <br> <br>
    <button @click="validate()">Next</button>
</div>
</template>

<script>

import useValidate from '@vuelidate/core'
import { required } from '@vuelidate/validators'

export default {
  name: 'MatchingSection',
  data() {
    return {
      v$: useValidate(),
      
      name: '',
      theme: '',
      completionDate: '',
      region: '',
      country: '',
      city: '',
      community: '',
      area: '',
      objectives: '',
      implementationPlan: ''
    }
  },
  validations() {
    return {
      name: {required},
      theme: {required},
      completionDate: {required},
      region: {required},
      country: {required},
      city: {required},
      community: {required},
      area: {required},
      objectives: {required},
      implementationPlan: {required}
    }
  },
  methods: {
    validate() {
      this.v$.$validate()
      console.log(this.v$)

      if(!this.v$.$error) {
        this.goToNextSection()
      }
    },
    goToNextSection() {
      this.$emit('goToNextSection', 
        {
          name: this.name,
          theme: this.theme,
          completionDate: this.completionDate,
          region: this.region,
          country: this.country,
          city: this.city,
          community: this.community,
          area: parseInt(this.area),
          objectives: this.objectives,
          implementationPlan: this.implementationPlan
        })
    }
  }

}
</script>

<style>

</style>