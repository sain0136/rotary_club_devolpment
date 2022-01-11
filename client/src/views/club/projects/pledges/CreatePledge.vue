<template>
  <div>
    <h1>Make Pledge</h1>
    <br />
    <input
      type="number"
      placeholder="Enter the amount"
      v-model="pledgeAmount"
    />
    <br />
    <button @click="makePledge">
      Submit
    </button>
    <button
      @click="
        () =>
          this.$router.push('./view')
      "
    >
      Cancel
    </button>
  </div>
</template>

<script>
import store from '../../../../store/index'

export default {
  name: 'CreatePledge',
  data() {
    return {
      pledgeAmount: Number,
    }
  },
  methods: {
    async makePledge() {
      let pledgeToAdd = {
        pledge_amount: this
          .pledgeAmount,
        project_id: this.$router
          .currentRoute.value.params
          .projectid,
        user_id:
          store.state
            .loggedInClubUserId,
      }

      try {
        const res = await fetch(
          '/api/pledge',
          {
            method: 'POST',
            headers: {
              'Content-Type':
                'application/json',
            },
            body: JSON.stringify(
              pledgeToAdd,
            ),
          },
        )
        console.log(await res.json())
      } catch (err) {
        console.log(err)
      }

      this.$router.push('view')
    },
  },
}
</script>

<style scoped>
input,
button {
  font-size: 20px;
}
</style>
