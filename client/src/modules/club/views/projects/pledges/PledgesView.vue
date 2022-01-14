<template>
  <div>
    <h1>Pledges</h1>
    <br />
    <table>
      <th>ID</th>
      <th>Amount</th>
      <th>Made By</th>
      <tr
        v-for="pledge in pledges"
        :key="pledge.pledge_id"
      >
        <td>{{ pledge.pledge_id }}</td>
        <td>
          {{ pledge.pledge_amount }}
        </td>
        <td>{{ pledge.user_id }}</td>
      </tr>
    </table>

    <br />
    <h2>Total: {{ this.total }}</h2>
    <h2>Funding Goal: {{ this.projectFundingGoal }}</h2> <br>
    <h1 v-if="isFundingEnough">Funding is done for this project!</h1>
    <button
      v-else
      @click="
        () =>
          this.$router.push(
            '../pledges/create',
          )
      "
    >
      Make Pledge
    </button>
    <button
      @click="
        () =>
          this.$router.push('../view')
      "
    >
      Project Page
    </button>
  </div>
</template>

<script>

import store from '../../../../../store/index'
import pledge from '../../../../../api-factory/pledge'

export default {
  name: 'PledgesView',
  data() {
    return {
      pledges: Array,
      total: 0,
      projectFundingGoal: 0,
      isFundingEnough: this.total >= this.projectFundingGoal
    }
  },
  async created() {
    this.pledges = await pledge.index(this.$router.currentRoute.value.params.projectid)
    this.pledges.forEach(pledge => {
      this.total += pledge.pledge_amount
    })
    this.projectFundingGoal = store.state.currentProjectData.funding_goal
    this.isFundingEnough = this.total >= this.projectFundingGoal
  },
}
</script>

<style scoped>
table {
  font-size: 20px;
  margin: auto;
}

td {
  width: 20%;
}
</style>
