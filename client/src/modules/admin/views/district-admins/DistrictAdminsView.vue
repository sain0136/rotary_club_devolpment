<template>
  <div>
    <br> <br>
    <DistrictAdminsTable /> <br> <br>
    <button
      name="create"
      class="plus"
      id="create-user"
      @click="() => this.$router.push('/admin/district-admins/create')">
    </button>
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

.select-districts {
  text-align: center;
}

#create-user {
  margin-left: 47%;
}
</style>
