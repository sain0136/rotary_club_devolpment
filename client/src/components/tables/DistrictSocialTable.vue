<template>
  <div>
    <table>
      <legend>Social Links</legend>
      <th>Type</th>
      <th>Link</th>
      <tr
        v-for="link in links"
        :key="link.id">
        <td>{{link.url_type}</td>
        <td>{{link.url}}</td>
      </tr>
    </table>
    <br> <br>
    <select>
      <option value="Facebook">Facebook</option>
      <option value="Instagram">Instagram</option>
      <option value="Twitter">Twitter</option>
      <option value="Other">Other</option>
    </select> <br> <br>
    <input type="text"> <br> <br>
    <button @click="addNewLink">Add</button>
  </div>
</template>

<script>

import store from '../../store/index'

export default {
  name: 'DistrictSocialTable',
  data() {
    return {
      links: []
    }
  },
  async created() {
    this.URLs = await this.getURLInfo()
  },
  methods: {
    async getLinkInfo() {
      const res = await fetch(`/api/url/${store.state.currentDistrictId}`, {method: 'GET'})
      const data = await res.json()
      return data.URLByDistrictID
    },
    async addNewLink() {
      
    }
  }
}
</script>

<style scoped>

table {
  margin: auto;
}

td {
  width: 50%;
}

div {
  text-align: center;
}
</style>

