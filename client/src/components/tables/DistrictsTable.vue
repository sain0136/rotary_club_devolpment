<template>
  <div class="container">
    <!-- Make a call to the API and generate these districts -->
    <table>
      <th>ID</th>
      <th>Name</th>
      <th>Action</th>
      <tr
        id="district-info"
        v-for="district in districts"
        :key="district.district_id">
        <td>{{district.district_id}}</td>  
        <td id="name">{{district.district_name}}</td>
        <td>
          <button
            @click="goToDistrictPage(district.district_id)">
            View
          </button>
          <button
            @click="deleteDistrict(district.district_id)">
            Delete
          </button>
          <button
            @click="goToEditDistrictAdminPage(district.district_id)">
            Edit
          </button>
        </td>
      </tr>
    </table>
  </div>
</template>

<script>

import store from '../../store/index'

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
    },
    goToDistrictPage(districtId) {
      store.dispatch('changeCurrentDistrict', districtId)
      this.$router.push('/')
    },
    goToEditDistrictAdminPage(districtId) {
      store.dispatch('changeCurrentDistrict', districtId)
      this.$router.push('editdistrict')
    },
    async deleteDistrict(districtId) {
      if(confirm(`Are you sure you want to delete district ${districtId}?`)) {
        const res = await fetch(`/api/district/${districtId}`, {
          method: 'DELETE'
        })
        this.districts = await this.fetchDistricts()
      }
    },
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