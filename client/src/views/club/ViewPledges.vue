<template>
  <div>
    <h1>Pledges</h1>
    <br>
    <table>
      <th>ID</th>
      <th>Amount</th>
      <th>Made By</th>
      <tr
        v-for="pledge in pledges"
        :key="pledge.pledge_id"
      >
        <td>{{pledge.pledge_id}}</td>
        <td>{{pledge.pledge_amount}}</td>
        <td>{{pledge.user_id}}</td>
      </tr>
    </table> <br>
    <h2>Total: {{ this.total }}</h2>
    <button
    @click="() => this.$router.push('../pledges/create')">
      Make Pledge
    </button>
    <button @click="() => this.$router.push('../view')">Project Page</button>
  </div>
</template>

<script>

import { getAllPledges } from '../../store/api-calls'

export default {
  name: 'ViewPledges',
  data() {
    return {
      pledges: Array,
      total: 0
    }
  },
  async created() {
    this.pledges = await getAllPledges(this.$router.currentRoute.value.params.projectid)
    this.pledges.forEach(pledge => {
        this.total += pledge.pledge_amount
      });
  },
}
</script>

<style scoped>

table {
  font-size: 20px;
  margin: auto;
}

td {
  width: 20%
}

</style>