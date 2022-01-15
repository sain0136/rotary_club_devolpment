<template>
<div class="section">
  <h2>Consent</h2> <br> <br>
  <p class="explanation">Because this is a District Matching Grant, the District 7040 partner is ultimately responsible for the oversight of funds and reporting. This should be done in collaboration with the host partner club and Cooperating Organization(s) (if applicable).</p>
  <p class="explanation">I hereby certify that to the best of my knowledge and ability this grant application is complete, meets all TRF guidelines, is eligible for funding and is sponsored by qualified clubs.</p> <br>
  <label>International Club Sponsor</label> <br> <br>
  <div class="form-field">
    <label>Position</label> <br>
    <input 
      v-model="consentIntSponsorPosition"
      type="text">
  </div> <br> <br>
  <div class="form-field">
    <label>Name</label> <br>
    <input 
      v-model="consentIntSponsorName"
      type="text">
  </div> <br> <br>
  <div class="form-field">
    <label>Authorized Signature (Write your initials)</label> <br>
    <input 
      v-model="consentIntSponsorSignature"
      type="text">
  </div> <br> <br>
  <label>Host Club Sponsor</label> <br> <br>
  <div class="form-field">
    <label>Position</label> <br>
    <input 
      v-model="consentHostSponsorPosition"
      type="text">
  </div> <br> <br>
  <div class="form-field">
    <label>Name</label> <br>
    <input 
      v-model="consentHostSponsorName"
      type="text">
  </div> <br> <br>
  <div class="form-field">
    <label>Authorized Signature (Write your initials)</label> <br>
    <input 
      v-model="consentHostSponsotSignature"
      type="text">
  </div> <br> <br>
  
</div>
</template>

<script>
export default {
  name: 'MatchingSectionG',
  data() {
    return {
      consentTntSponsorPosition: '',
      consentIntSponsorName: '',
      consentIntSponsorSignature: '',
      consentHostSponsorPosition: '',
      consentHostSponsorName: '',
      consentHostSponsotSignature: '',
    }
  }

}
</script>

<style>

</style>