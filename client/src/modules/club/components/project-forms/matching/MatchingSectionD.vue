<template>
<div class="section">
  <h2>Section D - Project Planning</h2> <br> <br>
    
  <div class="form-field">
    <p class="explanation">1. Describe how the project will benefit the community or address a community need?  How many beneficiaries are anticipated?  How were the beneficiaries involved in the planning?</p>
    <textarea 
      v-model="projectBenefit"
      cols="50" 
      rows="5"></textarea>
  </div> <br> <br>
  <div class="form-field">
    <p class="explanation">2. Who will operate, secure and maintain the items purchased with grant funds and ensure the items are properly maintained and repaired so they continue to function? This includes equipment, assets and materials </p>
    <textarea 
      v-model="projectOperator"
      cols="50" 
      rows="5"></textarea>
  </div> <br> <br>
  <div class="form-field">
    <p>3. At the end of the project, who will own the items purchased with grant funds?</p>
    <p>This includes equipment, assets and materials. Items cannot be owned by a Rotary Club or Rotarian(s)</p>
    <textarea 
      v-model="postProjectItemOwner"
      cols="50" 
      rows="5"></textarea>
  </div> <br> <br>
  <div class="form-field">
    <p>4. Who will maintain an inventory of the items purchased with grant funds including location after distribution?</p>
    <textarea 
      v-model="postDistributionInventoryMaintainer"
      cols="50" 
      rows="5"></textarea>
  </div> <br> <br>
  <div class="form-field">
    <p>5. What arrangements have been made for customs clearance if items will be purchased and shipped from outside the project country?</p>
    <textarea 
      v-model="customClearanceArrangements"
      cols="50" 
      rows="5"></textarea>
  </div> <br> <br>
</div>
</template>

<script>
export default {
  name: 'MatchingSectionD',
  data() {
    return {
      projectBenefit: '',
      projectOperator: '',
      projectItemOwner: '',
      postDistributionInventoryMaintainer: '',
      customClearanceArrangements: ''
    }
  }
}
</script>

<style>

</style>