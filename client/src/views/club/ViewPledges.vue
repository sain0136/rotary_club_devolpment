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
    <button @click="() => this.$router.push('../view')">Project Page</button>
  </div>
</template>

<script>

import { getAllPledges } from '../../data-bank/pledge-data'

export default {
  name: 'ViewPledges',
  data() {
    return {
      pledges: []
    }
  },
  async created() {
    this.pledges = await getAllPledges()
  },
  methods: {
  }
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