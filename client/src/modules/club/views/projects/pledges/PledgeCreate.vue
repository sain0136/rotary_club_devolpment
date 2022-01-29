<template>
  <div>
    <div class="club-page-head">
      <h1 class="club-page-title">
        Make Pledge
      </h1>
    </div>
    <br><br><br>
    <img src="../../../assets/pledge-image.png" alt="">
    <br><br>
    <span 
      class="error"
      v-if="v$.pledgeAmount.$error">
      Please enter a valid pledge amount
    </span> <br>
    <input
      type="number"
      placeholder="Enter the amount"
      v-model="pledgeAmount"/>
    <br>
    <br>
    <button
      class="positive-button" 
      @click="validatePledge">
      Submit
    </button>
    <br><br>
    <button
      class="cancel-button"
      @click="() => this.$router.push('./view')">
      Cancel
    </button>
  </div>
</template>

<script>

import store from '../../../../../store/index'
import pledge from '../../../../../api-factory/pledge'
import useValidate from '@vuelidate/core'
import { required, maxLength} from '@vuelidate/validators'

import img from '../../../assets/pledge-image.png'

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

      await pledge.create(pledgeToAdd)
      this.$router.push('view')
    },
  },
}
</script>

<style scoped>

div {
  text-align: center;
}

img {
  height: 200px;
}

input {
  font-size: 20px;
  border: none;
  border-bottom: 1px solid black;
}

.error {
  font-size: 14px;
  color: red;
}

.positive-button, .negative-button {
  width: 8%;
}

</style>
