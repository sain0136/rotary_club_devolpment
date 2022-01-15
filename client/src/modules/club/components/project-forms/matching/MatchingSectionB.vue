<template>
  <div class="section">
    <h2>Section B - Rotarian Participation</h2> <br>

      <div class="form-field">
        <p class="explanation">1. Describe how the Host sponsor (in other country) planned this project.</p>
        <textarea 
          v-model="hostSponsorPlan" 
          cols="50" 
          rows="5"></textarea>
      </div> <br> <br>
      <div class="form-field">
        <p class="explanation">2. Describe how the host sponsor will commit their time and expertise during the implementation of the project to ensure success. </p>
        <p>Provide specific examples of activities or tasks for which the host sponsor will be responsibility.</p>  
        <textarea 
          v-model="hostSponsorCommit"
          cols="50" 
          rows="5"></textarea>
      </div> <br> <br>
      <div class="form-field">
        <p class="explanation">3. Describe how the international sponsor will commit their time and expertise during the implementation of the project to ensure success. </p>
        <p>Provide specific examples of activities or tasks for which the host sponsor will be responsibility.</p>  
        <textarea 
          v-model="intSponsorCommit"
          cols="50" 
          rows="5"></textarea>
      </div> <br> <br>
      <div class="form-field">
        <p class="explanation">4. How do the sponsors plan to publicize this project?</p>
        <textarea 
          v-model="sponsorPublicationPlan"
          cols="50" 
          rows="5"></textarea>
      </div> <br> <br>
  </div>
</template>

<script>
export default {
  name: 'MatchingSectionB',
  data() {
    return {
      hostSponsorPlan: '',
      hostSponsorCommit: '',
      intSponsorCommit: '',
      sponsorPublicationPlan: '',
    }
  }

}
</script>

<style>

</style>