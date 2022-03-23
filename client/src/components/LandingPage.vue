<template>
  <div>
    <br><br>
    <h1>ALL DISTRICTS</h1> <br>
    <DistrictsTable/>
  </div>
</template>

<script>

import district from '../api-factory/district'
import DistrictsTable from '../components/common/DistrictsTable.vue'

export default {
  name: 'LandingPage',
  components: {
    DistrictsTable
  },
  data() {
    return {
      districts: []
    }
  },
  async created() {
    this.districts = await district.index()
  },
  methods: {

  }

}
</script>

<style scoped>

div {
  text-align: center;
}

</style>