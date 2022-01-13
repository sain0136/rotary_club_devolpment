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
            @click="() => this.$router.push(`/district/${district.district_id}`)">
            View
          </button>
          <button
            @click="deleteDistrict(district.district_id)">
            Delete
          </button>
          <button
            @click="() => this.$router.push(`./${district.district_id}/edit`)">
            Edit
          </button>
        </td>
      </tr>
    </table>
  </div>
</template>

<script>

import district from '../../../api-factory/district'

export default {
  name: 'DistrictsTable',
  data() {
    return {
      districts: Array
    }
  },
  async created() {
     this.districts = await district.index()
  },
  methods: {
    async deleteDistrict(districtId) {
      if(confirm(`Are you sure you want to delete district ${districtId}?`)) {
        district.delete(districtId)
        this.districts = await district.index()
      }
    }
  },
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