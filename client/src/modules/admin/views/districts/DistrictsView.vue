<template>
  <div class="main">
    <br /><br />
    <h1>ALL DISTRICTS</h1> <br> <br>
    <DistrictsTable /> <br> <br> 
    <Span><H1>Create a new District:</H1>
    </Span>
    <br> <br>
    <button
      name="create"
      class="plus"
      id="create-user"
      @click="() => this.$router.push('/admin/districts/create')">
    </button> 
   <br><br>
  </div>
</template>

<script>
import DistrictsTable from '../../components/DistrictsTable.vue'

export default {
  name: 'DistrictsView',
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

button {
  margin-left: 47%;
}

.main{
  height: 100%;
}
</style>
