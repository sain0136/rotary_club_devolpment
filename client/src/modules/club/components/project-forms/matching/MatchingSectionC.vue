<template>
<div class="section">
  <h2>Section C - Cooperating Organization(s)</h2> <br>

  <div class="form-field">
    <label for="name">Name of the cooperating organization</label> <br>
    <input 
      v-model="coopName"
      name="name" 
      type="text">
  </div> <br>
  <div class="form-field">
    <label for="address">Address</label> <br>
    <input 
      v-model="coopAddress"
      name="address" 
      type="text">
  </div> <br>
  <div class="form-field">
    <label for="contact-person">Contact Person</label> <br>
    <input 
      v-model="coopContactPerson"
      name="contact-person" 
      type="text">
  </div> <br>
  <div class="form-field">
    <label for="contact-details">Contact Details</label> <br>
    <input 
      v-model="coopContactDetails"
      name="contact-details" 
      type="text">
  </div> <br>
  <div class="form-field">
    <label for="website">Website Address</label> <br>
    <input 
      v-model="coopWebsite"
      name="website" 
      type="text">
  </div> <br>
  <div class="form-field">
    <p class="explanation">1. Provide background information about the cooperating organization(s) including the role they will play in the project activity. </p>
    <textarea 
      v-model="coopBackground"
      cols="50" 
      rows="5"></textarea>
  </div> <br> <br>
  <div class="form-field">
    <p class="explanation">2. Identify any members of the host or international sponsors who are project committee members, employees, board members or officers of one of the cooperating organizations. </p>
    <textarea 
      v-model="sponsorMembers"
      cols="50" 
      rows="5"></textarea>
  </div> <br> <br>
</div>
</template>

<script>
export default {
  name: 'MatchingSectionC',
  data() {
    return {
      coopName: '',
      coopAddress: '',
      coopContactPerson: '',
      coopContactDetails: '',
      coopWebsite: '',
      coopBackground: '',
      sponsorMembers: ''
    }
  }

}
</script>

<style>

</style>