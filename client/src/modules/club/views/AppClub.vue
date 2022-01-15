<template>
  <div>
    <!-- <ClubInfoHeader /> -->
    <ClubHeader />
    <router-view
      class="view"
    ></router-view>
    <!-- <ClubFooter /> -->
  </div>
</template>

<script>
import ClubInfoHeader from '../components/ClubInfoHeader.vue'
import ClubHeader from '../components/ClubHeader.vue'
import ClubFooter from '../components/ClubFooter.vue'

import store from '../../../store/index'

export default {
  name: 'AppClub',
  components: {
    ClubInfoHeader,
    ClubHeader,
    ClubFooter,
  },
  created() {
    store.dispatch(
      'changeCurrentClubData',
      this.$router.currentRoute.value
        .params.id,
    )
  },
}
</script>

<style scoped>
.view {
  text-align: center;
  margin-top: auto;
  font-size: 36px;
}
</style>
