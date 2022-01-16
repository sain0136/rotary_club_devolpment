<template>
<div class="section">
  <h2>Section D - Project Planning</h2> <br> <br>
    
  <div class="form-field">
    <p class="explanation">1. Describe how the project will benefit the community or address a community need?  How many beneficiaries are anticipated?  How were the beneficiaries involved in the planning?</p>
    <span 
      class="error"
      v-if="v$.projectBenefit.$error">
      This field is required
    </span> <br>
    <textarea 
      v-model="projectBenefit"
      cols="50" 
      rows="5"></textarea>
  </div> <br> <br>
  <div class="form-field">
    <p class="explanation">2. Who will operate, secure and maintain the items purchased with grant funds and ensure the items are properly maintained and repaired so they continue to function? This includes equipment, assets and materials </p>
    <span 
      class="error"
      v-if="v$.projectOperator.$error">
      This field is required
    </span> <br>
    <textarea 
      v-model="projectOperator"
      cols="50" 
      rows="5"></textarea>
  </div> <br> <br>
  <div class="form-field">
    <p>3. At the end of the project, who will own the items purchased with grant funds?</p>
    <p>This includes equipment, assets and materials. Items cannot be owned by a Rotary Club or Rotarian(s)</p>
    <span 
      class="error"
      v-if="v$.projectItemOwner.$error">
      This field is required
    </span> <br>   
    <textarea 
      v-model="projectItemOwner"
      cols="50" 
      rows="5"></textarea>
  </div> <br> <br>
  <div class="form-field">
    <p>4. Who will maintain an inventory of the items purchased with grant funds including location after distribution?</p>
    <span 
      class="error"
      v-if="v$.postDistributionInventoryMaintainer.$error">
      This field is required
    </span> <br>
    <textarea 
      v-model="postDistributionInventoryMaintainer"
      cols="50" 
      rows="5"></textarea>
  </div> <br> <br>
  <div class="form-field">
    <p>5. What arrangements have been made for customs clearance if items will be purchased and shipped from outside the project country?</p>
    <span 
      class="error"
      v-if="v$.customClearanceArrangements.$error">
      This field is required
    </span> <br>
    <textarea 
      v-model="customClearanceArrangements"
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
  name: 'MatchingSectionD',
  data() {
    return {
      v$: useValidate(),

      projectBenefit: '',
      projectOperator: '',
      projectItemOwner: '',
      postDistributionInventoryMaintainer: '',
      customClearanceArrangements: ''
    }
  },
  validations() {
    return {
      projectBenefit: {required},
      projectOperator: {required},
      projectItemOwner: {required},
      postDistributionInventoryMaintainer: {required},
      customClearanceArrangements: {required}
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
          projectBenefit: this.projectBenefit,
          projectOperator: this.projectOperator,
          projectItemOwner: this.projectItemOwner,
          postDistributionInventoryMaintainer: this.postDistributionInventoryMaintainer,
          customClearanceArrangements: this.customClearanceArrangements
        })
    }
  }
}
</script>

<style>

</style>