<template>
  <div>
    <div class="club-page-head">
      <h1 class="club-page-title">Connect with us!</h1>
    </div> 
    <ContactUs isDistrictOrClub = 'Club'/>
  </div>
</template>

<script>

import store from '../../../store/index'
import ContactUs from '../../../components/common/ContactUs.vue'

export default {
  name: 'ClubContactUs',
  components: {
    ContactUs
  },
  data() {
    return {
      clubData:
        store.state.currentClubData,
    }
  },
}
</script>

<style scoped>

</style>
