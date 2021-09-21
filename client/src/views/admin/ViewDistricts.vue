<template>
  <div class="container">
    <!-- Make a call to the API and generate these districts -->
    <table>
      <th>ID</th>
      <th>District Name</th>
      <th>Action</th>
      <tr 
        v-for="district in districts"
        :key="district.id">
        <td>{{district.id}}</td>  
        <td>{{district.name}}</td>
        <td>
          <router-link to="/district/id">Go</router-link>
        </td>
      </tr>
    </table>
  </div>
</template>

<script>

export default {
  name: 'ViewtDistricts',
  data() {
    return {
      districts: Array
    }
  },
  methods: {
    async fetchDistricts() {
      const res = await fetch('/api/districts', { method: 'GET'})
      const data = await res.json()
      return data
    }
  },
  async created() {
    console.log(await this.fetchDistricts()) 
    this.districts = await this.fetchDistricts()
  }
}

</script>

<style scoped>

table {
  margin: auto;
}

td {
  width: 25%;
}

</style>