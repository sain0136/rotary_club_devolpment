<template>
<div class="section">
  <h2>Consent</h2> <br> <br>
  <p class="explanation">Because this is a District Matching Grant, the District 7040 partner is ultimately responsible for the oversight of funds and reporting. This should be done in collaboration with the host partner club and Cooperating Organization(s) (if applicable).</p>
  <p class="explanation">I hereby certify that to the best of my knowledge and ability this grant application is complete, meets all TRF guidelines, is eligible for funding and is sponsored by qualified clubs.</p> <br>
  <label>International Club Sponsor</label> <br> <br>
  <div class="form-field">
    <label>Position</label> <br>
    <span 
      class="error"
      v-if="v$.consentIntSponsorPosition.$error">
      This field is required
    </span> <br>
    <input 
      v-model="consentIntSponsorPosition"
      type="text">
  </div> <br> <br>
  <div class="form-field">
    <label>Name</label> <br>
    <span 
      class="error"
      v-if="v$.consentIntSponsorName.$error">
      This field is required
    </span> <br>
    <input 
      v-model="consentIntSponsorName"
      type="text">
  </div> <br> <br>
  <div class="form-field">
    <label>Authorized Signature (Write your initials)</label> <br>
    <span 
      class="error"
      v-if="v$.consentIntSponsorSignature.$error">
      This field is required
    </span> <br>
    <input 
      v-model="consentIntSponsorSignature"
      type="text">
  </div> <br> <br>
  <label>Host Club Sponsor</label> <br> <br>
  <div class="form-field">
    <label>Position</label> <br>
    <span 
      class="error"
      v-if="v$.consentHostSponsorPosition.$error">
      This field is required
    </span> <br>
    <input 
      v-model="consentHostSponsorPosition"
      type="text">
  </div> <br> <br>
  <div class="form-field">
    <label>Name</label> <br>
    <span 
      class="error"
      v-if="v$.consentHostSponsorName.$error">
      This field is required
    </span> <br>
    <input 
      v-model="consentHostSponsorName"
      type="text">
  </div> <br> <br>
  <div class="form-field">
    <label>Authorized Signature (Write your initials)</label> <br>
    <span 
      class="error"
      v-if="v$.consentHostSponsorSignature.$error">
      This field is required
    </span> <br>
    <input 
      v-model="consentHostSponsorSignature"
      type="text">
  </div> <br> <br>
  <button @click="validate()">Next</button>
  
</div>
</template>

<script>

import useValidate from '@vuelidate/core'
import { required } from '@vuelidate/validators'

export default {
  name: 'MatchingSectionG',
  data() {
    return {
      v$: useValidate(),

      consentIntSponsorPosition: '',
      consentIntSponsorName: '',
      consentIntSponsorSignature: '',
      consentHostSponsorPosition: '',
      consentHostSponsorName: '',
      consentHostSponsorSignature: '',
    }
  },
  validations() {
    return {
      consentIntSponsorPosition: {required},
      consentIntSponsorName: {required},
      consentIntSponsorSignature: {required},
      consentHostSponsorPosition: {required},
      consentHostSponsorName: {required},
      consentHostSponsorSignature: {required},
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
          consentIntSponsorPosition: this.consentIntSponsorPosition,
          consentIntSponsorName: this.consentIntSponsorName,
          consentIntSponsorSignature: this.consentIntSponsorSignature,
          consentHostSponsorPosition: this.consentHostSponsorPosition,
          consentHostSponsorName: this.consentHostSponsorName,
          consentHostSponsorSignature: this.consentHostSponsorSignature,
        })
    }
  }

}
</script>

<style scoped>

</style>