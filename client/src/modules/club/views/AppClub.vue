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
    console.log(store.state.currentClubUserData.firstname)
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

      store.dispatch('changeCurrentClubUsers', this.currentClubId)
    }
  }
}
</script>

<style>
.view {
  margin-top: auto;
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

.positive-button {
  background-color: #ffb607;
  color: whitesmoke;
  font-family: 'Montserrat', sans-serif;
  font-weight: bolder;
  border: none;
  box-shadow: 0px 1px 5px 0 rgba(0, 0, 0, 0.425);
  border-radius: 5%;
  padding: 12px;
}

.cancel-button {
  background-color: #232323;
  color: whitesmoke;
  font-family: 'Montserrat', sans-serif;
  font-weight: bolder;
  border: none;
  box-shadow: 0px 1px 5px 0 rgba(0, 0, 0, 0.425);
  border-radius: 5%;
  padding: 12px;
}

</style>
