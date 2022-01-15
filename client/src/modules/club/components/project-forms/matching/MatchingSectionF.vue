<template>
<div class="section">
  <h2>Section F - Budget Summary and Financing Summary</h2>
  <p>District 7040 will match club funds 1:1 up to a maximum of $10,000 on a first-come basis depending upon availability of DDF.</p>
  <ProjectBudgetMatching
    v-if="!isBudgetSubmitted" 
    @approveBudget = 'updateBudget'/>
  <div v-else>
    <h3>Budget submitted!</h3>
    <button @click="() => isBudgetSubmitted = false">Undo</button>
  </div> <br> <br>

  <h4>Budget Summary</h4> <br>
  <div class="form-field">
    <label>1-) Rotarian/Club Cash Amount in US</label> <br>
    <input 
      v-model="cashAmount"
      type="number">
  </div> <br> <br>
  <div class="form-field">
    <label>2-) DDF Amount Requested in USD ($1 of line 1)</label> <br>
    <input 
      v-model="ddfAmount"
      type="number">
  </div> <br> <br>
  <div class="form-field">
    <label>3-) Additional outside funding in US/CAD</label> <br>
    <input 
      v-model="outsideFunding"
      type="number">
  </div> <br> <br>
  <div class="form-field">
    <label>4-) Total Financing in US</label> <br>
    <input 
      v-model="totalFinancing"
      type="number">
  </div> <br> <br>
</div>
</template>

<script>

import ProjectBudgetMatching from './ProjectBudgetMatching.vue'

export default {
  name: 'MatchingSectionF',
  components: {
    ProjectBudgetMatching
  },
  data() {
    return {
      isBudgetSubmitted: false,

      cashAmount: 0,
      ddfAmount: 0,
      outsideFunding: 0,
      totalFinancing: 0,

      budgetItems: [],
      totalBudget: Number
    }
  },
  methods: {
    updateBudget(data) {
      console.log('Data: ', data)
      this.budgetItems = data.items
      this.totalBudget = data.budget
      this.isBudgetSubmitted = true
    }
  }

}
</script>

<style>

</style>