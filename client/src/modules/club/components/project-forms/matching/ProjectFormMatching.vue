<template>
  <div>
    <form onsubmit="event.preventDefault();">
      <h2>New Project - Matching Grants</h2> <br><br>
      <button 
        v-if="sectionIndex > 0"
        @click="goToPreviousSection()">Previous</button>
      <button 
        v-if="sectionIndex < 8"
        @click="() => sectionIndex++">Next</button> <br> <br>  

      <div class="sections">
        <MatchingSection0 
          v-bind:class="{inactive: sectionIndex != 0}"
            @goToNextSection = 'goToNextSection'/>
        <MatchingSectionA
          v-bind:class="{inactive: sectionIndex != 1}"
            @goToNextSection = 'goToNextSection'/>
        <MatchingSectionB
          v-bind:class="{inactive: sectionIndex != 2}"
          @goToNextSection = 'goToNextSection'/>
        <MatchingSectionC
          v-bind:class="{inactive: sectionIndex != 3}"
          @goToNextSection = 'goToNextSection'/>
        <MatchingSectionD
          v-bind:class="{inactive: sectionIndex != 4}"
           @goToNextSection = 'goToNextSection'/>
        <MatchingSectionE
          v-bind:class="{inactive: sectionIndex != 5}"
           @goToNextSection = 'goToNextSection'/>
        <MatchingSectionF
          v-bind:class="{inactive: sectionIndex != 6}"
          @goToNextSection = 'goToNextSection'/>
        <MatchingSectionG
          v-bind:class="{inactive: sectionIndex != 7}"
          @goToNextSection = 'goToNextSection'/>
        <div 
          class="finalScreen"
          v-bind:class="{inactive: sectionIndex != 8}">
          <p class="explanation">On behalf of the Rotary Club of {{ $store.state.currentClubData.club_name }}, I hereby certify that to the best of my knowledge and ability this grant application is complete, meets all TRF guidelines, is eligible for funding and is sponsored by qualified clubs.</p>
          <input 
            v-model="consentApplicationCompleted"
            type="checkbox"> <br>
          <button 
            @click="createProject()"           
            v-if="consentApplicationCompleted">
            Submit
          </button>
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
import project from '../../../../../api-factory/project'

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

      sectionData: new Map(),

      consentApplicationCompleted: false,

      name: '', 
      theme: '',
      area: '',
      grantType: 2, //TODO autofill this with the user's role
      roleType: 2, //TODO autofill this with the user's role
      estimatedCompletion: '',
      fundingGoal: 0,
      currentFunds: 0,
      createdBy: store.state.loggedInClubUserId,
      rotaryYear: new Date().getFullYear(),
      anticipatedFunding: 0,
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
    this.createSectionDataMap()
  },
  methods: {
    createSectionDataMap() {
      //empty objects for now to be populated
      this.sectionData.set(0, {})
      this.sectionData.set(1, {})
      this.sectionData.set(2, {})
      this.sectionData.set(3, {})
      this.sectionData.set(4, {})
      this.sectionData.set(5, {})
      this.sectionData.set(6, {})
      this.sectionData.set(7, {})
    },

    populateSectionData(sectionIndex, data) {
      this.sectionData.set(sectionIndex, data)
    },

    goToNextSection(data) {
      this.populateSectionData(this.sectionIndex, data)
      console.log(data)
      this.sectionIndex++
    },

    goToPreviousSection() {
      this.sectionIndex--
    },

    formatDate(dateString) {
      let date = new Date(dateString)
      let day = date.getDate()
      let month = date.getMonth()
      let year = date.getFullYear()
      return month + '/' + day + '/' + year
    },

    /**
     * This method matches the project data fields
     * for the object that's gonna be sent to the
     * backend with the data received from each section.
     */
    async matchProjectData() {
      const section0 = this.sectionData.get(0)
      const sectionA = this.sectionData.get(1)
      const sectionB = this.sectionData.get(2)
      const sectionC = this.sectionData.get(3)
      const sectionD = this.sectionData.get(4)
      const sectionE = this.sectionData.get(5)
      const sectionF = this.sectionData.get(6)
      const sectionG = this.sectionData.get(7)

      this.name = sectionA.name
      this.theme = sectionA.theme
      this.estimatedCompletion = sectionA.completionDate
      this.region = sectionA.region
      this.area = sectionA.area

      this.currentFunds = sectionF.totalFinancing
      this.anticipatedFunding = sectionF.totalFinancing
      this.itemisedBudget = sectionF.budgetItems
      this.fundingGoal = sectionF.totalBudget

      this.extraDescriptions = {
        sponsorClub: section0.sponsorClubId,

        country: sectionA.country,
        city: sectionA.city,
        community: sectionA.community,
        objectives: sectionA.objectives,
        implementationPlan: sectionA.implementationPlan,

        hostSponsorPlan: sectionB.hostSponsorPlan,
        hostSponsorCommit: sectionB.hostSponsorCommit,
        intSponsorCommit: sectionB.intSponsorCommit,
        sponsorPublicationPlan: sectionB.sponsorPublicationPlan,

        coopName: sectionC.coopName,
        coopAddress: sectionC.coopAddress,
        coopContactPerson: sectionC.coopContactPerson,
        coopContactDetails: sectionC.coopContactDetails,
        coopWebsite: sectionC.coopWebsite,
        coopBackground: sectionC.coopBackground,
        sponsorMembers: sectionC.sponsorMembers,

        projectBenefit: sectionD.projectBenefit,
        projectOperator: sectionD.projectOperator,
        projectItemOwner: sectionD.projectItemOwner,
        postDistributionInventoryMaintainer: sectionD.postDistributionInventoryMaintainer,
        customClearanceArrangements: sectionD.customClearanceArrangements,

        projectCapacity: sectionE.projectCapacity,
        outComeSustaining: sectionE.outComeSustaining,
        additionalMeasuremenTechniques: sectionE.additional,

        cashAmount: sectionF.cashAmount,
        ddfAmount: sectionF.ddfAmount,
        outsideFunding: sectionF.outsideFunding,
        //Other sectionF fields are the project fields

        consentIntSponsorPosition: sectionG.consentIntSponsorPosition,
        consentIntSponsorName: sectionG.consentIntSponsorName,
        consentIntSponsorSignature: sectionG.consentIntSponsorSignature,
        consentHostSponsorPosition: sectionG.consentHostSponsorPosition,
        consentHostSponsorName: sectionG.consentHostSponsorName,
        consentHostSponsorSignature: sectionG.consentHostSponsorSignature,
      }
    },

    async createProject() {

      await this.matchProjectData()

      const projectToCreate = {

        //Summary
        project_name: this.name,
        estimated_completion: this.formatDate(this.estimatedCompletion),
        area_focus: this.area,
        region: this.region,
        project_theme: this.theme,

        //Financial
        funding_goal: this.fundingGoal,
        current_funds: this.currentFunds,
        anticipated_funding: this.anticipatedFunding,
        itemised_budget: this.itemisedBudget,

        //All the others
        extra_descriptions: this.extraDescriptions,

        //Pre-populated, not entered by the user
        grant_type: this.grantType,
        created_by: this.createdBy,
        rotary_year: this.rotaryYear,
        role_type: this.roleType,

        //Only for the filtering
        club_id: this.clubId,
        district_id: this.districtId
      }
      
      console.log(projectToCreate)

      project.create(projectToCreate)
    }
  }

}
</script>

<style scoped>

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
  margin-bottom: 2000px;
}

.error {
  color: red;
  font-size: 14px;
  padding: 0%;
}

p {
  font-weight: bold;
}

.explanation {
  margin-left: 25%;
  width: 50%;
}

</style>