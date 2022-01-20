<template>
  <div class="container">
    <legend class="table-title">Districts</legend> <br> <br>
    <table v-if="districts.length != 0">
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
            class="crud-buttons"
            @click="() => this.$router.push(`/district/${district.district_id}/home`)">
            <font-awesome-icon
            class="social-icon" icon="external-link-alt"></font-awesome-icon>
          </button>
          <button
            class="crud-buttons"
            @click="() => this.$router.push(`./${district.district_id}/edit`)">
            <font-awesome-icon
              class="social-icon" icon="edit"></font-awesome-icon>
          </button>
          <button
            class="crud-buttons"
            @click="deleteDistrict(district.district_id)">
            <font-awesome-icon
            class="social-icon" icon="trash-alt"></font-awesome-icon>
          </button>
        </td>
      </tr>
    </table>
    <legend 
      class="table-title"
      v-else>No districts to display!</legend>
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

.table-title {
  font-family: 'Montserrat', sans-serif;
  margin-top: 5px;
}

table {
  /* margin-left: 36%; */
  margin: auto;
}

th {
  font-family: 'Montserrat', sans-serif;
  padding: 3px;
}

td {
  width: 25%;
  padding: 5px;
}


table, th, td {
  /* border: 1px solid rgba(0, 0, 0, 0.151); */
}

</style>