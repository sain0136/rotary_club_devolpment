<template>
  <div>
    <ClubInfoHeader/>
    <ClubHeader/>
    <!-- <router-link to=></router-link> -->
    <router-view></router-view>
    <ClubFooter/>
  </div>
</template>

<script>
import ClubInfoHeader from '../../components/headers/ClubInfoHeader.vue'
import ClubHeader from '../../components/headers/ClubHeader.vue'
import ClubFooter from '../../components/footers/ClubFooter.vue'

export default {
  name: '_Club',
  components: {
    ClubInfoHeader,
    ClubHeader,
    ClubFooter
  }
}

</script>