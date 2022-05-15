<template>
  <div class="container">
      <br /><br />
    <h1>Edit District Details</h1> <br> <br>
    <DistrictsTable myProfile /><br> <br> 
    <router-view></router-view>
  </div>
</template>

<script>
import DistrictsTable from '../../admin/components/DistrictsTable.vue'


export default {
  name: 'DistrictAdminEdit',
  components: {
    DistrictsTable,
  },
}
</script>

<style scoped>
h1 {
  font-family: 'Montserrat', sans-serif;
  font-weight: bolder;
  text-align: center;
}
.container{
    height: 100%;
}
</style>