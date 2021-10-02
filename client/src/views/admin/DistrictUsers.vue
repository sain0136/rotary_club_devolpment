<template>
  <div>
    <div class="select-districts">
      <label for="districts">Districts</label> <br>
      <select @change="selectDistrict($event)">
        <option 
          v-for="district in districts" :key="district.id"
          :value="district.id">
          {{district.name}}
        </option>
      </select>
      <!-- <button @click="$store.dispatch('changeCurrentDistrict', 1)">HAHA</button> -->
    </div>
    <DistrictAdminsTable/>
  </div>
</template>

<script>

import DistrictAdminsTable from '../../components/tables/DistrictAdminsTable.vue'
import store from '../../store/index'

export default {
  name: 'DistrictUsers',
  components: {
    DistrictAdminsTable
  },
  data() {
    return {
      districts: Array
    }
  },
  methods: {
    selectDistrict(event) {
      store.dispatch('changeCurrentDistrict', event.target.value)
      this.$forceUpdate()
    },
    async fetchDistricts() {
      const res = await fetch(
        '/api/districts', 
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

</style>