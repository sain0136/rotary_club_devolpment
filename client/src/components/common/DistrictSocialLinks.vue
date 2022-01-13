<template>
  <div>
    <legend>Social Links</legend> <br> <br>
    <table>
      <th>Type</th>
      <th>Link</th>
      <th>Action</th>
      <tr
        v-for="link in links"
        :key="link.url_id">
        <!-- <td>{{link.url_type}}</td> -->
        <td>{{linkTypesDict.get(link.url_type)}}</td>
        <td>{{link.url}}</td>
        <td>
          <button @click="editLink(link.url_id)">Edit</button>
          <button @click="deleteLink(link.url_id)">Delete</button>
        </td>
      </tr>
    </table>
    <br> <br>
    <legend v-if="isEditOrCreateLink=='Edit'">Edit the Link</legend>
    <legend v-else>Add a Link</legend>
    <select
      v-model="linkTypeToCreate">
      <option value="Facebook">Facebook</option>
      <option value="Instagram">Instagram</option>
      <option value="Twitter">Twitter</option>
      <option value="Other">Other</option>
    </select> <br> <br>
    <input 
      type="text"
      v-model="linkToCreate"> <br> <br>
    <button
      v-if="isEditOrCreateLink=='Edit'"
      @click="updateLink">
      Update
    </button>
    <button
      v-else
      @click="createLink">
      Add
    </button>
    <button 
      v-if="isEditOrCreateLink=='Edit'"
      @click="cancelEdit">
      Cancel
    </button> <br> <br>
  </div>
</template>

<script>

import store from '../../store/index'
import social_links from '../../api-factory/social_links'

export default {
  name: 'DistrictSocialLinks',
  data() {
    return {
      links: [],

      linkToCreate: '',
      linkTypeToCreate: '',
      currentUrlIDToUpdate: 0,

      linkTypesDict: new Map(),

      isEditOrCreateLink: '',
    }
  },
  async created() {
    this.setLinkTypes()
    this.links = await this.getLinks()
  },
  methods: {
    
    setLinkTypes() {
      this.linkTypesDict.set('Facebook', 1)
      this.linkTypesDict.set('Twitter', 2)
      this.linkTypesDict.set('Instagram', 3)
      this.linkTypesDict.set('Other', 4)

      this.linkTypesDict.set(1, 'Facebook')
      this.linkTypesDict.set(2, 'Twitter')
      this.linkTypesDict.set(3, 'Instagram')
      this.linkTypesDict.set(4, 'Other')
    },

    async getLinks() {
      const districtToQuery = {
        isThisDistrict: true,
        object_id: store.state.currentDistrictId
      }
      return social_links.index(districtToQuery)
    },
    
    async createLink() {
      const urlToAdd = {
        isThisDistrict: true,
        object_id: store.state.currentDistrictId,
        url_type: this.linkTypesDict.get(this.linkTypeToCreate),
        url: this.linkToCreate
      }

      social_links.create(urlToAdd)
      this.clean()
    },
    
    async deleteLink(urlId) {
      social_links.delete(urlId)
      this.links = await this.getLinks()
    },

    async editLink(urlId) {
      this.isEditOrCreateLink = 'Edit'
      const urlInfo = await social_links.show(urlId)

      this.linkToCreate = urlInfo.url
      this.linkTypeToCreate = this.linkTypesDict.get(urlInfo.url_type)
      this.currentUrlIDToUpdate = urlId
    },
    
    cancelEdit() {
      this.isEditOrCreateLink='Create'
      this.linkToCreate = ''
      this.linkTypeToCreate = ''
    },

    async updateLink() {
      const urlToUpdate = {
        isThisDistrict: true,
        object_id: store.state.currentDistrictId,
        url_type: this.linkTypesDict.get(this.linkTypeToCreate),
        url: this.linkToCreate,
      }

      social_links.update(this.currentUrlIDToUpdate, urlToUpdate)
      this.clean()
    },

    async clean() {
      this.linkToCreate = ''
      this.linkTypeToCreate = ''
      this.links = await this.getLinks()
    },
  }
}
</script>

<style scoped>

table {
  margin: auto;
}

td {
  width: 30%;
}

div {
  margin: auto;
  text-align: center;
  border: 1px solid black;
  width: 50%;
}
</style>

