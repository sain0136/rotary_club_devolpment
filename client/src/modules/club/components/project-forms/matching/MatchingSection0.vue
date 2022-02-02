<template>
<div class="section">
  <div class="form-field">
    <input type="text">
  </div> <br>
  <button @click="goToNextSection()">Next</button>
  
</div>
</template>

<script>

export default {
  name: 'MatchingSection0',
  data() {
    return {
      sponsorClubId: ''
    }
  },
  methods: {
    goToNextSection() {
      this.$emit('goToNextSection', 
        {
          sponsorClubId: this.sponsorClubId
        })
    }
  }
}


</script>

<style scoped>

</style>