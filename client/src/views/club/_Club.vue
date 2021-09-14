<template>
  <div>
    <ClubInfoHeader/>
    <ClubHeader/>
    <!-- <router-link to=></router-link> -->
    <router-view></router-view>
    <Footer/>
  </div>
</template>

<script>
import ClubInfoHeader from '../../components/headers/ClubInfoHeader.vue'
import ClubHeader from '../../components/headers/ClubHeader.vue'
import Footer from '../../components/Footer.vue'

export default {
  name: '_Club',
  components: {
    ClubInfoHeader,
    ClubHeader,
    Footer
  }
}

</script>