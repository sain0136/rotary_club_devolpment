<template>
<div class="section">
  <h2>Section B - Rotarian Participation</h2> <br>
    <div class="form-field">
      <p class="explanation">1. Describe how the Host sponsor (in other country) planned this project.</p> 
      <span 
        class="error"
        v-if="v$.hostSponsorPlan.$error">
        This field is required
      </span> <br>
      <textarea 
        v-model="hostSponsorPlan" 
        cols="50" 
        rows="5"></textarea>
    </div> <br> <br>
    <div class="form-field">
      <p class="explanation">2. Describe how the host sponsor will commit their time and expertise during the implementation of the project to ensure success. </p>
      <p>Provide specific examples of activities or tasks for which the host sponsor will be responsibility.</p>  
      <span 
        class="error"
        v-if="v$.hostSponsorCommit.$error">
        This field is required
      </span> <br>
      <textarea 
        v-model="hostSponsorCommit"
        cols="50" 
        rows="5"></textarea>
    </div> <br> <br>
    <div class="form-field">
      <p class="explanation">3. Describe how the international sponsor will commit their time and expertise during the implementation of the project to ensure success. </p>
      <p>Provide specific examples of activities or tasks for which the host sponsor will be responsibility.</p>  
      <span 
        class="error"
        v-if="v$.intSponsorCommit.$error">
        This field is required
      </span> <br>
      <textarea 
        v-model="intSponsorCommit"
        cols="50" 
        rows="5"></textarea>
    </div> <br> <br>
    <div class="form-field">
      <p class="explanation">4. How do the sponsors plan to publicize this project?</p>
      <span 
        class="error"
        v-if="v$.sponsorPublicationPlan.$error">
        This field is required
      </span> <br>
      <textarea 
        v-model="sponsorPublicationPlan"
        cols="50" 
        rows="5"></textarea>
    </div> <br> <br>
    <button>Previous</button>
    <button @click="validate()">Next</button>
</div>
</template>

<script>

import useValidate from '@vuelidate/core'
import { required } from '@vuelidate/validators'

export default {
  name: 'MatchingSectionB',
  data() {
    return {
      v$: useValidate(),

      hostSponsorPlan: '',
      hostSponsorCommit: '',
      intSponsorCommit: '',
      sponsorPublicationPlan: '',
    }
  },
  validations() {
    return {
      hostSponsorPlan: {required},
      hostSponsorCommit: {required},
      intSponsorCommit: {required},
      sponsorPublicationPlan: {required}
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
          hostSponsorPlan: this.hostSponsorPlan,
          hostSponsorCommit: this.hostSponsorCommit,
          intSponsorCommit: this.intSponsorCommit,
          sponsorPublicationPlan: this.sponsorPublicationPlan
        })
    }
  }


}
</script>

<style>

</style>