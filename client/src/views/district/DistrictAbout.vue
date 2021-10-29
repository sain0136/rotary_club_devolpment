<template>
  <div class="container">
    <h3>About District</h3> <br>
    <div class="description-container">
      {{this.districtDescription}}
    </div>
  </div>
</template>

<script>

import store from '../../store/index'

export default {
  name: 'DistrictAbout',
  data() {
    return {
      districtDescription: ''
    }
  },
  methods: {
    async fetchDistrictDescription() {
      const res = await fetch(`/api/district/${store.state.currentDistrictId}`, {
        method: 'GET'
      })
      const data = await res.json()
      return data.districtById.district_description
    }
  },
  async created() {
    this.districtDescription = await this.fetchDistrictDescription()
  }
}

</script>

<style scoped>

.container {
  text-align: center;
  width: 50%;
  word-wrap: break-word;
}

</style>