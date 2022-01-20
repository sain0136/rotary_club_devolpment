<template>
<div class="section">
  <h2>Section C - Cooperating Organization(s)</h2> <br>

  <div class="form-field">
    <label for="name">Name of the cooperating organization</label> <br>
    <span 
        class="error"
        v-if="v$.coopName.$error">
        This field is required
      </span> <br>
    <input 
      v-model="coopName"
      name="name" 
      type="text">
  </div> <br>
  <div class="form-field">
    <label for="address">Address</label> <br>
    <span 
        class="error"
        v-if="v$.coopAddress.$error">
        This field is required
      </span> <br>
    <input 
      v-model="coopAddress"
      name="address" 
      type="text">
  </div> <br>
  <div class="form-field">
    <label for="contact-person">Contact Person</label> <br>
    <span 
        class="error"
        v-if="v$.coopContactPerson.$error">
        This field is required
      </span> <br>
    <input 
      v-model="coopContactPerson"
      name="contact-person" 
      type="text">
  </div> <br>
  <div class="form-field">
    <label for="contact-details">Contact Details</label> <br>
    <span 
        class="error"
        v-if="v$.coopContactDetails.$error">
        This field is required
      </span> <br>
    <input 
      v-model="coopContactDetails"
      name="contact-details" 
      type="text">
  </div> <br>
  <div class="form-field">
    <label for="website">Website Address</label> <br>
    <span 
        class="error"
        v-if="v$.coopWebsite.$error">
        This field is required
      </span> <br>
    <input 
      v-model="coopWebsite"
      name="website" 
      type="text">
  </div> <br>
  <div class="form-field">
    <p class="explanation">1. Provide background information about the cooperating organization(s) including the role they will play in the project activity. </p>
    <span 
      class="error"
      v-if="v$.coopBackground.$error">
      This field is required
    </span> <br>
    <textarea 
      v-model="coopBackground"
      cols="50" 
      rows="5"></textarea>
  </div> <br> <br>
  <div class="form-field">
    <p class="explanation">2. Identify any members of the host or international sponsors who are project committee members, employees, board members or officers of one of the cooperating organizations. </p>
    <span 
        class="error"
        v-if="v$.sponsorMembers.$error">
        This field is required
      </span> <br>
    <textarea 
      v-model="sponsorMembers"
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
  name: 'MatchingSectionC',
  data() {
    return {
      v$: useValidate(),

      coopName: '',
      coopAddress: '',
      coopContactPerson: '',
      coopContactDetails: '',
      coopWebsite: '',
      coopBackground: '',
      sponsorMembers: ''
    }
  },
  validations() {
    return {
      coopName: {required},
      coopAddress: {required},
      coopContactPerson: {required},
      coopContactDetails: {required},
      coopWebsite: {required},
      coopBackground: {required},
      sponsorMembers: {required}
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
          coopName: this.coopName,
          coopAddress: this.coopAddress,
          coopContactPerson: this.coopContactPerson,
          coopContactDetails: this.coopContactDetails,
          coopWebsite: this.coopWebsite,
          coopBackground: this.coopBackground,
          sponsorMembers: this.sponsorMembers
        })
    }
  }

}
</script>

<style scoped>

</style>