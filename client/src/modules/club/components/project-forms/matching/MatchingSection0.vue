<template>
<div class="section">
  <div class="form-field">
    <label for="sponsor-club">Choose the sponsor club</label> <br>
    <select 
      v-model="sponsorClubId"
      name="sponsor-club" 
      id="sponsor-club">
      <option value=""></option>
      <option value="1">ph club 1</option>
      <option value="2">ph club 2</option>
    </select>
  </div> <br>
  <button @click="goToNextSection()">Next</button>
  
</div>
</template>

<script>

export default {
  name: 'MatchingSection0',
  data() {
    return {
      sponsorClubId: Number
    }
  },
  methods: {
    goToNextSection() {
      this.$emit('goToNextSection', 
        {
          sponsorClubId: parseInt(this.sponsorClubId)
        })
    }
  }
}


</script>

<style scoped>

</style>