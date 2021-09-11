<template>
  <div>
    <Header/>
    <!-- <router-link to=></router-link> -->
    <router-view></router-view>
    <Footer/>
  </div>
</template>

<script>
import Header from '../../components/Header.vue'
import Footer from '../../components/Footer.vue'

export default {
  name: '_Club',
  components: {
    Header,
    Footer
  }
}

</script>