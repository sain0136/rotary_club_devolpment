<template>
  <div>
    <ClubInfoHeader />
    <ClubHeader />
    <router-view
      class="view"
    ></router-view>
    <ClubFooter />
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
  data() {
    return {
      currentClubId: this.$router.currentRoute.value.params.id
    }
  },
  async created() {
    await this.setClubData()
    // console.log('current: ', this.currentClubId == store.state.loggedInClubId)
    if(store.state.loggedInClubId != this.currentClubId) {
      store.dispatch('logout', 5)
      store.dispatch('logout', 7)
    }
  },
  methods: {
    async setClubData() {
      await store.dispatch('changeCurrentClubData', this.currentClubId)

      const clubSocialQueryObject = {
        isThisDistrict: false,
        object_id: this.currentClubId
      }

      store.dispatch('changeClubSocials', clubSocialQueryObject)
    }
  }
}
</script>

<style>
.view {
  /* text-align: center;  */
  margin-top: auto;
  /* font-size: 36px; */
}

.club-page-head {
  text-align: center;
  background-color: #232323;
  padding: 50px;
  text-transform: uppercase;
}

.club-page-title {
  font-family: 'Montserrat', sans-serif;
  font-weight: 700;
  color: whitesmoke;
}
</style>
