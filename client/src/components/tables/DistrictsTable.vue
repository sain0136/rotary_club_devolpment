<template>
  <div class="container">
    <!-- Make a call to the API and generate these districts -->
    <table>
      <th>ID</th>
      <th>District Name</th>
      <th>Action</th>
      <tr 
        v-for="district in districts"
        :key="district.district_id">
        <td>{{district.district_id}}</td>  
        <td>{{district.district_name}}</td>
        <td>
          <router-link 
            :to="`/district/${district.district_id}/home`" 
            @click="$store.dispatch('changeCurrentDistrict', district.district_id)">
          Go</router-link>
        </td>
      </tr>
    </table>
  </div>
</template>

<script>

export default {
  name: 'DistrictsTable',
  data() {
    return {
      districts: Array
    }
  },
  methods: {
    async fetchDistricts() {
      const res = await fetch('/api/district', { method: 'GET'})
      const data = await res.json()
      return data.districts
    }
  },
  async created() {
    this.districts = await this.fetchDistricts()
    console.log(this.districts[1].district_id)
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