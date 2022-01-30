<template>
  <div>
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
    <br> <br>
    <div class="pledge-description">
      <h2>Total: {{ this.total }}</h2>
      <h2>Funding Goal: {{ this.projectFundingGoal }}</h2> <br>
      <h1 v-if="isFundingEnough">Funding is done for this project!</h1>
      <button
        class="positive-button"
        v-else
        @click="() => this.$router.push('../pledges/create')">
        Make Pledge
      </button> 
      <br> <br>
      <button 
        class="cancel-button"
        @click="() => this.$router.push('../view')">
        Project Page
      </button>
    </div>
  </div>
</template>

<script>

import store from '../../../store/index'
import pledge from '../../../api-factory/pledge'

export default {
  name: 'PledgesTable',
  data() {
    return {
      pledges: Array,
      total: 0,
      projectFundingGoal: 0,
      isFundingEnough: this.total >= this.projectFundingGoal
    }
  },
  async created() {
    await this.setData()
  },
  methods: {
    async setData() {
      this.pledges = await pledge.index(this.$router.currentRoute.value.params.projectid)
      this.pledges.forEach(pledge => {
        this.total += pledge.pledge_amount
      })
      this.projectFundingGoal = store.state.currentProjectData.funding_goal
      this.isFundingEnough = this.total >= this.projectFundingGoal
    }
  }
}
</script>

<style>

table {
  font-size: 20px;
  margin: auto;
}

td {
  width: 20%;
}

.pledge-description {
  text-align: center;
}

</style>