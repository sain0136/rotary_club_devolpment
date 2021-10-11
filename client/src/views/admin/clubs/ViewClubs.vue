<template>
  <div>
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
    <ClubsTable/>
  </div>
</template>

<script>

import ClubsTable from '../../../components/tables/ClubsTable.vue'

export default {
  name: 'ViewClubs',
  components: {
    ClubsTable
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

</style>