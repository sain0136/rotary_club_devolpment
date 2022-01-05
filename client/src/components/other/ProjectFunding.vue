<template>
  <div>
    <legend>Breakdown of the project funding</legend> <br> <br>
    <label for="sponsor">Sponsor club contribution</label> <br>
    <input 
      type="number"
      name="sponsor" 
      v-model="sponsor"> <br> <br>
    <label for="coop">Co-operating organisation contribution</label> <br>
    <input 
      type="number" 
      name="coop" 
      v-model="coop"> <br> <br>
    <label for="coop">District simplified grant request</label> <br>
    <input 
      type="number" 
      name="grant" 
      v-model="grant"> <br> <br>
    <h4>Total Fundings: {{ this.totalFundings }}</h4>
  </div>
</template>

<script>

export default {
  name: 'ProjectFunding',
  data() {
    return {
      sponsor: 0,
      coop: 0,
      grant: 0,
    }
  },
  computed: {
    totalFundings() {
      return this.sponsor + this.coop + this.grant
    }
  },
  methods: {
  }
}
</script>

<style scoped>

table {
  margin: auto;
}

td {
  width: 30%;
}

div {
  margin: auto;
  text-align: center;
  border: 1px solid black;
  width: 50%;
}
</style>

