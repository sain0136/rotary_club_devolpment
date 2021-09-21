<template>
  <div>
    <form>
      <label for="club-name">District Name</label> <br>
      <input type="text"
        v-model="districtName"> <br> <br>
      <button @click="addNewDistrict">Submit</button>
    </form>
  </div>
</template>

<script>
export default {
  name: 'NewDistrictForm',
  components: {

  },
  data() {
    return {
      districtName: '',
      // more will be added
    }
  },
  methods: {
    async addNewDistrict(event) {
      event.preventDefault()
      
      let districtToAdd = {
        name: this.districtName
      }

      const res = await fetch('/api/districts', { 
        method: 'POST', 
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(districtToAdd)})
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