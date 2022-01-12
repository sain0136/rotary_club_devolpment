<template>
  <div>
    <DistrictHeader />
    <router-view></router-view>
  </div>
</template>

<script>
import DistrictHeader from '../components/DistrictHeader.vue'

import store from '../../../store/index'

export default {
  name: 'AppDistrict',
  components: {
    DistrictHeader,
  },
  data() {
    return {}
  },
  created() {
    store.dispatch(
      'changeCurrentDistrictData',
      this.$router.currentRoute.value
        .params.id,
    )
  },
}
</script>

<style scoped>
div {
  background-color: rgb(118, 255, 255);
}
</style>
