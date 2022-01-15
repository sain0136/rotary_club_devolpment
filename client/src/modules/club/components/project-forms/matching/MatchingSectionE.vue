<template>
<div class="section">
  <h2>Section E - Sustainability and Measurement</h2> <br> <br>

  <div class="form-field">
    <p>1. How will the project build capacity in the host community?</p>
    <textarea 
      v-model="projectCapacity"
      cols="50" 
      rows="5"></textarea>
  </div> <br> <br>
  <div class="form-field">
    <p>2. How will the outcomes of the project be sustained over time after the funding has been expended?</p>
    <textarea 
      v-model="outcomeSustaining"
      cols="50" 
      rows="5"></textarea>
  </div> <br> <br>
  <div class="form-field">
    <p>3. Identify how the progress toward the objectives will be measured? Check all that apply & include samples if applicable.</p>
    <label for="surveys">Surveys</label> <br>
    <input 
      v-model="surveysSelected"
      name="surveys" 
      type="radio"> <br> <br>
    <label for="questionnaires">Questionnaires</label> <br>
    <input 
      v-model="questionnaireSelected"
      name="questionnaires" 
      type="radio"> <br>  <br>
    <label for="observations">Observations</label> <br>
    <input 
      v-model="observationsSelected"
      name="observations" 
      type="radio"> <br> <br>
    <label for="knowledge">Tests of Knowledge</label> <br>
    <input 
      v-model="testsOfKnowledgeSelected"
      name="knowledge" 
      type="radio"> <br> <br>
    <label for="interviews">Interviews</label> <br>
    <input 
      v-model="interviewsSelected"
      name="interviews" 
      type="radio"> <br> <br>
    <label for="focus-groups">Focus Groups</label> <br>
    <input 
      v-model="focusGroupsSelected"
      name="focus-groups" 
      type="radio"> <br> <br>
    <label for="video-media">Video/Media</label> <br>
    <input 
      v-model="videoMediaSelected"
      name="video-media" 
      type="radio"> <br> <br>
    <label for="documents">Documents/Materials Collections</label> <br>
    <input 
      v-model="documentsSelected"
      name="documents" 
      type="radio"> <br> <br>
    <label for="additional">Additional</label> <br>
    <input 
      v-model="additional"
      name="additional"
      type="text">
  </div> <br> <br>
</div>
</template>

<script>
export default {
  name: 'MatchingSectionE',
  data() {
    return {
      projectCapacity: '',
      outcomeSustaining: '',

      surveysSelected: false,
      questionnaireSelected: false,
      observationsSelected: false,
      testsOfKnowledgeSelected: false,
      interviewsSelected: false,
      focusGroupsSelected: false,
      videoMediaSelected: false,
      documentsSelected: false,
      additional: '',

    }
  }

}
</script>

<style>

</style>