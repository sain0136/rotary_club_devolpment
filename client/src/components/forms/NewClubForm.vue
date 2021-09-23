<template>
  <div>
    <form>
      <label for="club-name">Club Name</label> <br>
      <input type="text"
        v-model="clubName"> <br> <br>
      <button @click="addNewClub">Submit</button>
    </form>
  </div>
</template>

<script>
export default {
  name: 'NewClubForm',
  components: {

  },
  data() {
    return {
      clubName: '',
      // more will be added
    }
  },
  methods: {
    async addNewClub(event) {
      event.preventDefault()
      
      let clubToAdd = {
        name: this.clubName
      }

      const res = await fetch('/api/clubs', { 
        method: 'POST', 
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(clubToAdd)})
      console.log(res)
    }
  }
}
</script>

<style scoped>

form {
  text-align: center;
}

</style>