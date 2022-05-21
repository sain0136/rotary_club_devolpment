<template>
<body class="body">
   <div class="district-background">
      <header>
        <DistrictInfoHeader />
        <DistrictHeader />
      </header>

      <router-view></router-view>
      <DistrictFooter />
    </div>
</body>
   
  
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
    DistrictFooter,
  },
  data() {
    return {
      currentDistrictId: this.$router
        .currentRoute.value.params.id,
    }
  },
  beforeRouteUpdate(to, from) {
    this.setDistrictData()
    //To prevent user to be logged in to multiple districts
    if (
      store.state.loggedInDistrictId !=
      this.currentDistrictId
    ) {
      store.dispatch('signOut', 1)
    }
  },

  beforeRouteEnter(to, from, next) {
    next(comp => {
      store.dispatch(
        'changeCurrentDistrictData',
        parseInt(to.params.id),
      )
      const districtSocialQueryObject = {
        isThisDistrict: true,
        object_id: to.params.id,
      }

      store.dispatch(
        'changeDistrictSocials',
        districtSocialQueryObject,
      )
      console.log(
        parseInt(to.params.id),
      )
      console.log(
        store.state.loggedInDistrictId,
      )
      console.log(
        store.state.currentDistrictData,
      )
      if (
        to.params.id !=
        store.state.loggedInDistrictId
      ) {
        store.dispatch('signOut', 1)
      }
    })
    console.log(to.params.id)
    console.log(
      store.state.loggedInDistrictId(),
    )
    //To prevent user to be logged in to multiple districts
  },
  //test method i believe deleteable?
  async created() {
    await this.timeOut(500)
  },
  methods: {
    //test method i believe deleteable?

    async timeOut(ms) {
      setTimeout(() => {
        console.log(
          store.state
            .loggedInDistrictId,
        )
        console.log(
          store.state
            .currentDistrictData,
        )
      }, ms)
    },
    async setDistrictData() {
      await store.dispatch(
        'changeCurrentDistrictData',
        this.currentDistrictId,
      )

      const districtSocialQueryObject = {
        isThisDistrict: true,
        object_id: this
          .currentDistrictId,
      }

      store.dispatch(
        'changeDistrictSocials',
        districtSocialQueryObject,
      )
    },
  },
}
</script>

<style>

.district-background {
  background-color: #ffffff;
  height: 100%;
  /*  allows scroll and still lets overflow to be cut */
      overflow-x:clip;

}

.district-page-head {
  text-align: center;
  background-color: #27282d;
  padding: 50px;
  text-transform: uppercase;
}

.district-page-title {
  font-family: 'Montserrat', sans-serif;
  font-weight: 700;
  color: whitesmoke;
} 
</style>
