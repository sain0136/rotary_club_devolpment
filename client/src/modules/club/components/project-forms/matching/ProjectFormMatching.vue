<template>
  <div>
    <form onsubmit="event.preventDefault();">
      <h2>New Project - Matching Grants</h2> <br><br>
      <button 
        v-if="sectionIndex > 0"
        @click="goToPreviousSection()">Previous</button>
      <button 
        v-if="sectionIndex < 7"
        @click="goToNextSection()">Next</button> <br> <br>  

      <div class="sections">
        <MatchingSection0 
          v-bind:class="{inactive: sectionIndex != 0}"/>
        <MatchingSectionA
          v-bind:class="{inactive: sectionIndex != 1}"/>
        <MatchingSectionB
          v-bind:class="{inactive: sectionIndex != 2}"/>
        <MatchingSectionC
          v-bind:class="{inactive: sectionIndex != 3}"/>
        <MatchingSectionD
          v-bind:class="{inactive: sectionIndex != 4}"/>
        <MatchingSectionE
          v-bind:class="{inactive: sectionIndex != 5}"/>
        <MatchingSectionF
          v-bind:class="{inactive: sectionIndex != 6}"/>
        <MatchingSectionG
          v-bind:class="{inactive: sectionIndex != 7}"/>
        <div 
          class="finalScreen"
          v-bind:class="{inactive: sectionIndex != 8}">
          <p class="explanation">On behalf of the Rotary Club of {{ $store.state.currentClubData.club_name }}, I hereby certify that to the best of my knowledge and ability this grant application is complete, meets all TRF guidelines, is eligible for funding and is sponsored by qualified clubs.</p>
          <input 
            v-model="consentApplicationCompleted"
            type="checkbox">
        </div>
      </div>
      
    </form>
  </div>
</template>

<script>

import MatchingSection0 from './MatchingSection0.vue'
import MatchingSectionA from './MatchingSectionA.vue'
import MatchingSectionB from './MatchingSectionB.vue'
import MatchingSectionC from './MatchingSectionC.vue'
import MatchingSectionD from './MatchingSectionD.vue'
import MatchingSectionE from './MatchingSectionE.vue'
import MatchingSectionF from './MatchingSectionF.vue'
import MatchingSectionG from './MatchingSectionG.vue'


import store from '../../../../../store/index'

export default {
  name: 'ProjectFormMatching',
  components: {
    MatchingSection0,
    MatchingSectionA,
    MatchingSectionB,
    MatchingSectionC,
    MatchingSectionD,
    MatchingSectionE,
    MatchingSectionF,
    MatchingSectionG,
  },
  data() {
    return {
      //navigation variable
      sectionIndex: 0,

      anan: false,

      visible: true,
      isBudgetSubmitted: false,

      name: '', //
      theme: '',
      area: '',
      grantType: 2, //TODO autofill this with the user's role
      estimatedCompletion: '',
      fundingGoal: '',
      currentFunds: '',
      anticipatedFunding: '',
      region: '',
      itemisedBudget: [],
      extraDescriptions: {},
      clubId: this.$router.currentRoute.value.params.id,
      districtId: store.state.currentDistrictId,

      //extra info Id
      sponsorClubId: Number,
    }
  },
  created() {
  },
  methods: {
    goToNextSection() {
      this.sectionIndex++
    },

    goToPreviousSection() {
      this.sectionIndex--
    },

    goToSpecificSection(index) {
      this.sectionIndex = index
    },

    updateBudget(data) {
      console.log('Data: ', data)
      this.isBudgetSubmitted = true
    }
  }

}
</script>

<style>

.section {
  position: absolute;
  left: 33%;
  width: 33%;
}

.inactive {
  visibility: hidden;
}

form {
  text-align: center;
  font-size: 16px;
}

.project-error {
  color: red;
  font-size: 12px;
  padding: 0%;
}

p {
  font-weight: bold;
}

</style>