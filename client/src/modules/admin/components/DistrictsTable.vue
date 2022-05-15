<template>
  <div class="admin-container">
    <table v-if="districts.length != 0">
      <th>District ID</th>
      <th>Name</th>
      <th>Actions</th>
      <tr
        id="district-info"
        v-for="district in districts"
        :key="district.district_id">
        <td>{{district.district_id}}</td>  
        <td id="name">{{district.district_name}}</td>
        <td>
          <button
            title="View District"
            class="crud-buttons"
            @click="() => this.$router.push(`/district/${district.district_id}/home`)">
            <font-awesome-icon
            class="social-icon" icon="external-link-alt"></font-awesome-icon>
          </button>
          <button
            title="Edit District"
            class="crud-buttons"
            @click="() => {
              if(myProfileBoolean){
                this.$router.push({name: 'DistrictEditForm'})
              }else{
                this.$router.push(`./${district.district_id}/edit`)}
              }">
            <font-awesome-icon
              class="social-icon" icon="edit"></font-awesome-icon>
          </button>
          <button
            v-if="myProfileBoolean == !true"
            title="Delete District"
            class="crud-buttons"
            @click="deleteDistrict(district.district_id,district.district_name)">
            <font-awesome-icon
            class="social-icon" icon="trash-alt"></font-awesome-icon>
          </button>
        </td>
      </tr>
    </table>
<!--     <legend 
      class="table-title"
      v-else>No districts to display!</legend> -->
  </div>
</template>

<script>

import district from '../../../api-factory/district'
import store from '../../../store/index'

export default {
  name: 'DistrictsTable',
  props: {
    myProfile: Boolean,
  }
  ,
  data() {
    return {
      districts: [],
      myProfileBoolean:false
    }
  },
  async created() {
    if (this.myProfile ==  true) {
      console.log('Hi bro')
      this.districts.push(store.state.currentDistrictData) 
      this.myProfileBoolean = true
    } else {

        this.districts = await district.index()
    }
   
  },
  methods: {
    async deleteDistrict(districtId,districtName) {
      if(confirm(`Are you sure you want to delete district ${districtId} : ${districtName}?`)) {
        await district.delete(districtId)
        this.districts = await district.index()
      }
    }
  },
}

</script>

<style scoped>

tr:nth-child(even) {
  background-color: #40688227;
}

th, td {
  border: 1px solid #4068823b;
}

</style>