<template>
<div class="section">
  <h2>Section A - Project Sumary</h2>
    <div class="formfield">
      <label for="name">Project Name</label> <br>
      <input 
        v-model="name"
        name="name" 
        type="text">
    </div> <br>
    <div class="formfield">
      <label for="completion-date">Estimated Completion Date</label> <br>
      <input 
        v-model="completionDate"
        name="completion-date" 
        type="date">
    </div> <br>
    <div class="formfield">
      <p>Where will project take place?</p>
      <input 
        type="text" 
        placeholder="Region"
        v-model="region"> <br> <br>
      <input 
        type="text" 
        placeholder="Country"
        v-model="country"> <br>
      <input 
        type="text" 
        placeholder="City/Village"
        v-model="city"> <br>
      <input 
        type="text" 
        placeholder="Community"
        v-model="community">
    </div> <br>
    <div class="formfield">
      <h4>Area of Focus</h4> <br>
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
      <p>Create an itemized list of the specific objectives of the </p>
      <textarea
        v-model="objectives" 
        cols="50" 
        rows="5"></textarea>
    </div> <br>
    <div class="form-field">
      <p>Describe in detail the project and implementation plan.</p>
      <textarea
        v-model="implementationPlan" 
        cols="50" 
        rows="5"></textarea>
    </div> <br> <br>
</div>
</template>

<script>
export default {
  name: 'MatchingSection',
  data() {
    return {
      name: '',
      completionDate: '',
      region: '',
      country: '',
      city: '',
      community: '',
      area: '',
      objectives: '',
      implementationPlan: ''
    }
  }

}
</script>

<style>

</style>