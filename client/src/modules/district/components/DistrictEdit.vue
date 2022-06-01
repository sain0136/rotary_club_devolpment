<template>
<div class="district-page-head">
      <h1 class="district-page-title">Edit your district!</h1>
</div>
  <div class="wrapper">
      <br /><br />
    <h1>Edit District Details</h1> <br> <br>
    <DistrictsTable myProfile /><br> <br> 
    <router-view></router-view>
  </div>
</template>

<script>
import DistrictsTable from '../../../components/common/Tables/DistrictsTable.vue'


export default {
  name: 'DistrictEditWithTable',
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
.wrapper{
    padding-bottom:10em ;
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