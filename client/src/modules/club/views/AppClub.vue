<template>
  <!-- outer div  -->
  <div class="body">
    <!-- app div -->
    <div class="club-background">
      <ClubInfoHeader />
      <ClubHeader />
      <div class="view">
        <router-view></router-view>
      </div>
      <div class="footer-wrapper">
        <ClubFooter />
      </div>
    </div>
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
      currentClubId: this.$router
        .currentRoute.value.params.id,
    }
  },
  async created() {
    await this.setClubData()
    await this.timeOut(500)
    // if (
    //   store.state.loggedInClubId !=
    //   this.currentClubId
    // ) {
    //   store.dispatch('logout', 5)
    //   store.dispatch('logout', 7)
    // }
  },

  methods: {
    async timeOut(ms) {
      setTimeout(() => {
        console.log()
      }, ms)
    },
    async setClubData() {
      // call to change the current clubs data
      await store.dispatch(
        'changeCurrentClubData',
        this.currentClubId,
      )
      //  change social media data
      const clubSocialQueryObject = {
        isThisDistrict: false,
        object_id: this.currentClubId,
      }

      store.dispatch(
        'changeClubSocials',
        clubSocialQueryObject,
      )
      //  change the list of club users
      store.dispatch(
        'changeCurrentClubUsers',
        this.currentClubId,
      )
    },
  },
}
</script>

<style>
/* styling on app div  */
.club-background {
  background-color: #ffffff;
  height: 100%;
  /*  allows scroll and still lets overflow to be cut */
  overflow-x: clip;
}
.view {
  min-height: 40rem;
}
.footer-wrapper {
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  margin: auto;
  position: relative;
}
</style>
