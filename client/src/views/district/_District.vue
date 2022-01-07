<template>
  <div>
    <DistrictHeader/>
    <router-view></router-view>
    <Footer/>
  </div>
</template>

<script>
import DistrictHeader from "../../components/headers/DistrictHeader.vue";
import Footer from "../../components/Footer.vue";

export default {
  name: "_District",
  components: {
    DistrictHeader,
    Footer,
  },
  data() {
    return {
      districtId: Number
    }
  },
};
</script>

<style scoped>
div {
  background-color: rgb(118, 255, 255);
}
</style>
