<template>
  <div>
    <h1>Make Pledge</h1>
    <br/>
    <span 
      class="error"
      v-if="v$.pledgeAmount.$error">
      Please enter a valid pledge amount
    </span> <br>
    <input
      type="number"
      placeholder="Enter the amount"
      v-model="pledgeAmount"/>
    <br/>
    <button @click="validatePledge">
      Submit
    </button>
    <button
      @click=" () => this.$router.push('./view') "
    >
      Cancel
    </button>
  </div>
</template>

<script>

import store from '../../../../../store/index'
import pledge from '../../../../../api-factory/pledge'
import useValidate from '@vuelidate/core'
import { required, maxLength} from '@vuelidate/validators'

export default {
  name: 'PledgeCreate',
  data() {
    return {
      v$: useValidate(),
      pledgeAmount: '',
    }
  },
  validations() {
    return {
      pledgeAmount: {
        required,
        // maxLength: maxLength() //TODO update with fundingGoal - currentFunding
      }
    }
  },
  methods: {
    
    validatePledge() {
      this.v$.$validate()
      console.log(this.pledgeAmount)
      
      if(!this.v$.$error) {
        this.makePledge()
      }
    },

    async makePledge() {
      let pledgeToAdd = {
        pledge_amount: this.pledgeAmount,
        project_id: this.$router.currentRoute.value.params.projectid,
        user_id: store.state.loggedInClubUserId,
      }

      pledge.create(pledgeToAdd)
      this.$router.push('view')
    },
  },
}
</script>

<style scoped>

input, button {
  font-size: 20px;
}

.error {
  font-size: 14px;
  color: red;
}

</style>
