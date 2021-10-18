<template>
  <div>
    <button id="create-user"
    @click="() => {this.$router.push('/admin/createdistrictadmin')}">
      Create User
    </button> 
    <br> <br>
    <div class="select-districts">
      <!-- <label for="clubs">Clubs</label> <br>
      <select @change="filterWithClub($event)">
        <option 
          v-for="district in districts" :key="district.id"
          :value="district.id">
          {{district.name}}
        </option>
      </select> -->
    </div>
    <DistrictAdminsTable/>
  </div>
</template>

<script>

import DistrictAdminsTable from '../../../components/tables/DistrictAdminsTable.vue'
import store from '../../../store/index'

export default {
  name: 'ViewDistrictAdmins',
  components: {
    DistrictAdminsTable
  },
  data() {
    return {
      districts: Array
    }
  },
  methods: {
    // filterWithClub(event) {
    //   store.dispatch('changeCurrentDistrict', event.target.value)
    //   this.$forceUpdate()
    // },
    async fetchDistricts() {
      const res = await fetch(
        '/api/district', 
        { method: 'GET'}
      )
      const data = await res.json()
      return data
    },
  },
  async created() {
    this.districts = await this.fetchDistricts()
  }
}

</script>

<style>

.select-districts {
  text-align: center;
}

#create-user {
  margin-left: 50%;
}

</style>