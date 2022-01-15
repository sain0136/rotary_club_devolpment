<template>
  <div>  
    <legend>Currency Exchange Rate</legend>
    <label>Name of the Local Currency</label> <br>
    <input 
      type="text"
      v-model="localCurrencyName"> <br> <br>
    <label>Exchange Rate</label> <br>
    <input 
      type="number" 
      v-model="exchangeRate"
      min="0"> <br> <br>
    <label>Date Entered</label> <br>
    <input 
      type="date"
      v-model="dateEntered"> <br> <br>
    <button @click="validateInput">Submit</button>
  </div>
</template>

<script>

import useValidate from '@vuelidate/core'
import { required } from '@vuelidate/validators'

export default {
  name: 'ProjectExchangeRateSection',
  data() {
    return {
      v$: useValidate(),

      localCurrencyName: '',
      exchangeRate: Number,
      dateEntered: '',
    }
  },
  validations() {
    return {
      localCurrencyName: {required},
      exchangeRate: {required},
      dateEntered: {required}
    }
  },
  methods: {
    validateInput() {
      this.v$.$validate()
      if(!this.v$.$error) {
        this.approveExchangeRate()
      }
    },
    approveExchangeRate() {
      this.$emit('approveExchangeRate', 
                {localCurrencyName: this.localCurrencyName,
                exchangeRate: this.exchangeRate,
                dateEntered: this.dateEntered})
    }
  }
}
</script>

<style>

</style>