<template>
  <div>
    <ClubInfoHeader/>
    <ClubHeader/>
    <router-view class="view"></router-view>
    <ClubFooter/>
  </div>
</template>

<script>

import ClubInfoHeader from '../../components/headers/ClubInfoHeader.vue'
import ClubHeader from '../../components/headers/ClubHeader.vue'
import ClubFooter from '../../components/footers/ClubFooter.vue'

import store from '../../store/index'

export default {
  name: '_Club',
  components: {
    ClubInfoHeader,
    ClubHeader,
    ClubFooter
  },
  created() {
    store.dispatch('changeCurrentClubData', this.$router.currentRoute.value.params.id)
  }
}

</script>

<style scoped>

.view {
  text-align: center;
  margin-top: auto;
  font-size: 36px;
}

</style>