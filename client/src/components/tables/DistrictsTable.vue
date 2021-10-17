<template>
  <div class="container">
    <!-- Make a call to the API and generate these districts -->
    <table contenteditable="true">
      <th>ID</th>
      <th>Name</th>
      <th>Email</th>
      <th>Location</th>
      <th>Meeting Frequency</th>
      <th>Charter Date</th>
      <th>President</th>
      <th>Description</th>
      <th>Action</th>
      <tr 
        id="district-info"
        v-for="district in districts"
        :key="district.district_id">
        <td contenteditable="false">{{district.district_id}}</td>  
        <td id="name">{{district.district_name}}</td>
        <td id="email">{{district.district_name}}</td>
        <td id="location">{{district.meeting_location}}</td>
        <td id="frequency">{{district.meeting_frequency}}</td>
        <td id="charter-date">{{district.charter_date}}</td>
        <td id="president">{{district.district_president}}</td>
        <td id="description">{{district.description}}</td>
        <td contenteditable="false">
          <router-link 
            :to="`/`" 
            @click="$store.dispatch('changeCurrentDistrict', district.district_id)"> <!-- in case the app scales, now it's always 1 -->
          Go</router-link>
          <button
            @click="updateRow(district.district_id)">
            Update
          </button>
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
    },
    async updateRow(rowId) {
      const districtToUpdate = {
        district_name : document.querySelector('#district-name').innerHTML

      }
      const res = await fetch(`/api/district/${rowId}`, { 
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(districtToUpdate)
      })
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