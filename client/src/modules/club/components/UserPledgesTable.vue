<template>
  <div>
    <table>
      <th>ID</th>
      <th>Amount</th>
      <th>Made To</th>
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
      <button
        class="positive-button"
        @click="() => this.$router.push('./view-all')">
        Make Pledge
      </button> 
      <br> <br>
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
    }
  },
  async created() {
    await this.setData()
  },
  methods: {
    async setData() {
      this.pledges = await pledge.index(this.$router.currentRoute.value.params.projectid)
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