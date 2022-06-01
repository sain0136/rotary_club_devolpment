<template>
  <div>
    <!--Title  -->
    <br />
    <br />
    <h1>DISTRICT ADMINS</h1>
    <br />
    <br />
    <!-- District Tables -->
    <DistrictAdminsTable /> <br />
    <br />
    <span
      ><h2>
        Create a new District
        Administrator:
      </h2>
    </span>
    <br />
    <br />
    <div class="button-wrapper">
      <button
        name="create"
        class="plus"
        id="create-user"
        @click="
          () =>
            this.$router.push(
              '/admin/district-admins/create',
            )
        "
      ></button>
    </div>
  </div>
</template>

<script>
import DistrictAdminsTable from '../../components/DistrictAdminsTable.vue'

export default {
  name: 'DistrictAdminsView',
  components: {
    DistrictAdminsTable,
  },
  data() {
    return {
      districts: Array,
    }
  },
  methods: {
    async fetchDistricts() {
      const res = await fetch(
        '/api/district',
        { method: 'GET' },
      )
      const data = await res.json()
      return data
    },
  },
  async created() {
    this.districts = await this.fetchDistricts()
  },
}
</script>

<style scoped>
/* District Admin View stylings */
h1 {
  font-family: 'Montserrat', sans-serif;
  font-weight: bolder;
  text-align: center;
}
h2 {
  font-family: 'Montserrat', sans-serif;
  font-weight: bolder;
  text-align: center;
}
.button-wrapper {
  display: flex;
  justify-content: center;
  margin-bottom: 1em;
}
</style>
