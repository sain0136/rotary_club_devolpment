<template>
  <div class="social-container">
    <div class='fieldset'>
    <h2>Social Media Links</h2> <br> <br>
    </div>
    <table>
      <th>Social Media-Site</th>
      <th>URL</th>
      <th>Modify</th>
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
      <option value="Facebook">Facebook.com</option>
      <option value="Instagram">Instagram.com</option>
      <option value="Twitter">Twitter.com</option>
      <option value="Other">Other</option>
    </select> <br> <br>
    <input 
      type="text"
      v-model="linkToCreate"> <br> <br>
    <button 
        class="up-cancel"
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
      class="up-cancel"
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
  name: 'SocialLinksSection',
  props: {
    isDistrictOrClub: Boolean
  },
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
      if(this.isDistrictOrClub == 'District') {
        const districtToQuery = {
          isThisDistrict: true,
          object_id: parseInt(this.$router.currentRoute.value.params.id)
        }
        return await social_links.index(districtToQuery)
      } else {
        const clubToQuery = {
          isThisDistrict: false,
          object_id: parseInt(this.$router.currentRoute.value.params.clubid)
        }
        return await social_links.index(clubToQuery)
      }
    },
    
    async createLink() {

      let isDistrict = false
      let objectId

      if(this.isDistrictOrClub == 'District') {
        isDistrict = true
        objectId = this.$router.currentRoute.value.params.id
      } else {
        objectId = this.$router.currentRoute.value.params.clubid
      }

      const urlToAdd = {
        isThisDistrict: isDistrict,
        object_id: objectId,
        url_type: this.linkTypesDict.get(this.linkTypeToCreate),
        url: this.linkToCreate
      }

      await social_links.create(urlToAdd)
      this.clean()
    },
    
    async deleteLink(urlId) {
      await social_links.delete(urlId)
      this.links = await this.getLinks()
    },

    async editLink(urlId) {
      this.isEditOrCreateLink = 'Edit'
      const urlInfo = await social_links.show(urlId)

      this.linkToCreate = urlInfo.url
      this.linkTypeToCreate = this.linkTypesDict.get(urlInfo.url_type)
      this.currentUrlIDToUpdate = urlId
    },
    
    async updateLink() {
      const urlToUpdate = {
        isThisDistrict: true,
        object_id: store.state.currentDistrictId,
        url_type: this.linkTypesDict.get(this.linkTypeToCreate),
        url: this.linkToCreate,
      }

      await social_links.update(this.currentUrlIDToUpdate, urlToUpdate)
      await this.updateLinksInState()
      
      this.clean()
      this.isEditOrCreateLink='Create'
    },

    async updateLinksInState() {
      const objectId = this.$router.currentRoute.value.params.id

      if(this.isDistrictOrClub == 'District') {
        const queryObject = {
          isThisDistrict: true,
          object_id: objectId
        }
        console.log(queryObject)
        store.dispatch('changeDistrictSocials', queryObject)
      } else {
        const queryObject = {
          isThisDistrict: false,
          object_id: objectId
        }
        store.dispatch('changeClubSocials', queryObject)
      }
    },

    cancelEdit() {
      this.isEditOrCreateLink='Create'
      this.linkToCreate = ''
      this.linkTypeToCreate = ''
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
.up-cancel{
    width: 25%;

}
button{
  box-sizing: border-box;
  width: 50%;
  background-color: #ffb607;
  color: white;
  border: 1px solid #3498db;
  border-radius: 3px;
  font-size: 1.5em;
  font-weight: bold;
  margin-top: 1%;
  cursor: pointer;
  
}
.fieldset{
 background-color:#ffb607;
 padding-bottom: 1%;
 padding-top: 5%;
 width: 100%;
 
}
table {
  margin: auto;
  width: 100%;
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

