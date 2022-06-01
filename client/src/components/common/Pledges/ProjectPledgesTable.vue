<template>
  <div class="pledge-container">
    <table v-if="pledges.length != 0">
      <th>Pledge Id</th>
      <th>Amount</th>
      <th v-if="isThisMyPledges != 'yes' ">Name </th>
      <th v-if="isThisMyPledges != 'yes' ">Email</th>
      <th v-if="isThisMyPledges != 'yes' ">Phone</th>
      <th v-if="isThisMyPledges == 'yes' ">ProjectId</th>
      <th v-if="isThisMyPledges == 'yes' ">Project Name</th>
      <tr
        id="pledges-project-info"
        v-for="pledge in pledges"
        :key="pledge.pledge_id"
      >
        <td>
          {{ pledge.pledge_id }}
        </td>
        <td>
          {{ pledge.pledge_amount }}
        </td>
        <td v-if="isThisMyPledges != 'yes' ">
          {{ pledge.firstname }}
          {{ pledge.lastname }}
        </td>
        <td v-if="isThisMyPledges != 'yes' ">
          {{ pledge.email }}
        </td>
        <td v-if="isThisMyPledges != 'yes' ">
          {{ pledge.phone }}
        </td>
           <td v-if="isThisMyPledges == 'yes' ">
          {{ pledge.project_id }}
        </td>
           <td v-if="isThisMyPledges == 'yes' ">
          {{ pledge.project_name }}
        </td>
      </tr>
    </table>
    <h1 v-else>No Pledges</h1>
  </div>
</template>

<script>
import pledgeApi from '../../../api-factory/pledge'
import store from '../../../store/index'
import { watchEffect } from 'vue'
export default {
  name: 'ProjectPledgesTable',
  props: {
    isThisMyPledges: String,
    projectIds: String,
  },
  data() {
    return {
      pledges: [],
      project_id: 0,
      myPledges:''
    }
  },
   beforeUpdate() {

  },
  async created() {

 watchEffect(async () => {
    if (this.isThisMyPledges == 'yes') {
       console.log('first check' + this.myPledges)
      await this.callForUsersPledges()

    } else {
      console.log(this.projectIds)
      await this.tot()
    }
 })

  },
  methods: {
    async tot() {
      const project = await pledgeApi.showPledges(
        parseInt(this.projectIds),
      )
      this.pledges =
        project.project.pledgesAssociated
    },
    async callForUsersPledges() {
      const project = await pledgeApi.showPledgesByUser(
       this.$store.state.loggedInDistrictUserId,
      )
  console.log(project)
      this.pledges =
        project.Yourpledges
    },
  },
}
</script>

<style scoped>
tr:nth-child(even) {
  background-color: #40688227;
}

th,
td {
  border: 1px solid #4068823b;
}
h1 {
  text-align: center;
}
.pledge-container {
  margin-bottom: 2em;
}
</style>
