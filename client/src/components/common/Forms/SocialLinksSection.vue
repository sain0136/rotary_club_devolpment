<template>
  <div class="social-container">
    <div class="page-title">
      <h2>Social Media Links</h2>
    </div>
    <br />
    <!-- links table -->
    <div class="auto-container">
      <table v-if="links.length > 0">
        <th>Social Media-Site</th>
        <th>URL</th>
        <th>Modify</th>
        <tr
          v-for="link in links"
          :key="link.url_id"
        >
          <!-- <td>{{link.url_type}}</td> -->
          <td>
            {{
              linkTypesDict.get(
                link.url_type,
              )
            }}
          </td>
          <td>{{ link.url }}</td>
          <td>
            <div class="button-wrapper">
              <button
                @click="
                  editLink(link.url_id)
                "
              >
                Edit
              </button>
              <button
                @click="
                  deleteLink(
                    link.url_id,
                  )
                "
              >
                Delete
              </button>
            </div>
          </td>
        </tr>
      </table>

      <div v-else>
        <h1>No links</h1>
      </div>
      <br />
      <hr class="solid" />

      <br />
      <legend
        v-if="
          isEditOrCreateLink == 'Edit'
        "
      >
        Edit the Link
      </legend>
      <!-- add links form -->
      <legend
        v-else-if="links.length < 2"
      >
        Add a Link
      </legend>
      <select
        v-model="linkTypeToCreate"
      >
        <option value="Facebook"
          >Facebook.com</option
        >
        <option value="Twitter"
          >Twitter.com</option
        >
      </select>
      <br />
      <br />
      <input
        type="text"
        v-model="linkToCreate"
      />
      <br />
      <br />
      <button
        class="up-cancel"
        v-if="
          isEditOrCreateLink == 'Edit'
        "
        @click="updateLink"
      >
        Update
      </button>
      <span
        v-if="
          v$.linkTypeToCreate.$error
        "
        style="
    color: red;
    font-weight: 900;
    font-size: 1.5rem;
"
      >
        Please choose a link type
      </span>
      <button
        v-else-if="links.length < 2"
        @click="validateAddLink"
      >
        Add
      </button>
      <button
        class="up-cancel"
        v-if="
          isEditOrCreateLink == 'Edit'
        "
        @click="cancelEdit"
      >
        Cancel
      </button>
      <br />
      <br />
    </div>
  </div>
</template>

<script>
import store from '../../../store/index'
import social_links from '../../../api-factory/social_links'
import useValidate from '@vuelidate/core'
import { required } from '@vuelidate/validators'

export default {
  name: 'SocialLinksSection',
  props: {
    isDistrictOrClub: String,
  },
  data() {
    return {
      v$: useValidate({
        $scope: false,
      }),

      links: [],

      linkToCreate: '',
      linkTypeToCreate: '',
      currentUrlIDToUpdate: 0,

      linkTypesDict: new Map(),

      isEditOrCreateLink: '',
    }
  },
  validations() {
    return {
      linkTypeToCreate: {
        required,
      },
    }
  },
  async created() {
    this.setLinkTypes()
    this.links = await this.getLinks()
  },

  methods: {
    setLinkTypes() {
      this.linkTypesDict.set(
        1,
        'Facebook',
      )
      this.linkTypesDict.set(
        2,
        'Twitter',
      )
      this.linkTypesDict.set(
        3,
        'Instagram',
      )
      this.linkTypesDict.set('Other', 4)

      this.linkTypesDict.set(
        'Facebook',
        1,
      )
      this.linkTypesDict.set(
        'Twitter',
        2,
      )
      this.linkTypesDict.set(
        'Instagram',
        3,
      )
      this.linkTypesDict.set('Other', 4)
    },

    async getLinks() {
      if (
        this.isDistrictOrClub ==
        'District'
      ) {
        const districtToQuery = {
          isThisDistrict: true,
          object_id: parseInt(
            this.$router.currentRoute
              .value.params.id,
          ),
        }
        return await social_links.index(
          districtToQuery,
        )
      } else {
        const clubToQuery = {
          isThisDistrict: false,
          object_id: parseInt(
            this.$router.currentRoute
              .value.params.clubid,
          ),
        }
        return await social_links.index(
          clubToQuery,
        )
      }
    },

    validateAddLink() {
      this.v$.$validate()
      if (!this.v$.$error) {
        this.createLink()
      }
    },

    async createLink() {
      let isDistrict = false
      let objectId
      const regex = /https:\/\/|http:\/\//

      if (
        this.isDistrictOrClub ==
        'District'
      ) {
        isDistrict = true
        objectId = this.$router
          .currentRoute.value.params.id
      } else {
        objectId = this.$router
          .currentRoute.value.params
          .clubid
      }

      const urlToAdd = {
        isThisDistrict: isDistrict,
        object_id: objectId,
        url_type: this.linkTypesDict.get(
          this.linkTypeToCreate,
        ),
        url: this.linkToCreate.replace(
          regex,
          '',
        ),
      }

      await social_links.create(
        urlToAdd,
      )
      this.clean()
    },

    async deleteLink(urlId) {
      await social_links.delete(urlId)
      this.links = await this.getLinks()
    },

    async editLink(urlId) {
      this.isEditOrCreateLink = 'Edit'
      const urlInfo = await social_links.show(
        urlId,
      )

      this.linkToCreate = urlInfo.url
      this.linkTypeToCreate = this.linkTypesDict.get(
        urlInfo.url_type,
      )
      this.currentUrlIDToUpdate = urlId
    },

    async updateLink() {
      const urlToUpdate = {
        isThisDistrict: true,
        object_id:
          store.state.currentDistrictId,
        url_type: this.linkTypesDict.get(
          this.linkTypeToCreate,
        ),
        url: this.linkToCreate,
      }

      await social_links.update(
        this.currentUrlIDToUpdate,
        urlToUpdate,
      )
      await this.updateLinksInState()

      this.clean()
      this.isEditOrCreateLink = 'Create'
    },

    async updateLinksInState() {
      const objectId = this.$router
        .currentRoute.value.params.id

      if (
        this.isDistrictOrClub ==
        'District'
      ) {
        const queryObject = {
          isThisDistrict: true,
          object_id: objectId,
        }
        console.log(queryObject)
        store.dispatch(
          'changeDistrictSocials',
          queryObject,
        )
      } else {
        const queryObject = {
          isThisDistrict: false,
          object_id: objectId,
        }
        store.dispatch(
          'changeClubSocials',
          queryObject,
        )
      }
    },

    cancelEdit() {
      this.isEditOrCreateLink = 'Create'
      this.linkToCreate = ''
      this.linkTypeToCreate = ''
    },

    async clean() {
      this.linkToCreate = ''
      this.linkTypeToCreate = ''
      this.links = await this.getLinks()
    },
  },
}
</script>

<style scoped>
/* Wrapper */
.social-container {
  margin: auto;
  text-align: center;
}
/* Title  Banner */
.page-title {
  background-color: #ffb607;
  padding-bottom: 1%;
  padding-top: 5%;
  background-image: url(../../../assets/image-3.jpg);
  background-attachment: fixed;
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
  position: relative;
}
.page-title h2 {
  font-size: 3em;
  margin-bottom: 0px;
  font-weight: 800;
  color: #ffffff;
  text-transform: capitalize;
  text-align: center;
  padding: 0em 0px 0.5em;
}
/*Button Wrapper */
.button-wrapper {
  display: flex;
  flex-direction: row;
  justify-content: center;
  column-gap: 1em;
}
button {
  flex: 1 1 0px;
  box-sizing: border-box;
  background-color: #ffb607;
  color: white;
  border: 1px solid #000000;
  border-radius: 0.2em;
  font-size: 1.5em;
  font-weight: bold;
  margin-top: 1%;
  cursor: pointer;
  padding: 0.5em;
}
input {
  border: 0.1em solid #000000;
  font-size: 1.5em;
  min-width: 25em;
}
/* Table stylings */
table {
  overflow-x: auto;
}

td {
  width: 30%;
}
legend {
  font-size: 1.5em;
  font-weight: bold;
  font-family: 'Montserrat';
}
</style>
