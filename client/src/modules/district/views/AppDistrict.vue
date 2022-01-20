<template>
  <div class="district-background">
    <DistrictInfoHeader/>
    <DistrictHeader />
    <router-view></router-view>
    <DistrictFooter/>
  </div>
</template>

<script>
import DistrictHeader from '../components/DistrictHeader.vue'
import DistrictInfoHeader from '../components/DistrictInfoHeader.vue'
import DistrictFooter from '../components/DistrictFooter.vue'

import store from '../../../store/index'

export default {
  name: 'AppDistrict',
  components: {
    DistrictHeader,
    DistrictInfoHeader,
    DistrictFooter
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

<style>
.district-background {
  background-color: #fbefdf;
}

.district-page-head {
  text-align: center;
  background-color: #27282d;
  padding: 50px;
}

.district-page-title {
  font-family: 'Montserrat', sans-serif;
  font-weight: 700;
  color: whitesmoke;
}
</style>
