<template>
  <header class="header-top">
    <div class="mail">
      <font-awesome-icon
        class="envelope"
        icon="envelope"
      ></font-awesome-icon>
      <p>{{ email }}</p>
    </div>
    <div class="social">
      <ul class="social-icon-one">
        <li>
          <a
            title="facebook"
            :href="facebookLink"
            v-if="facebookLink != null"
          >
            <i
              class="bi bi-facebook"
            ></i>
          </a>
        </li>
        <li>
          <a
            title="twitter"
            :href="twitterLink"
          >
            <i
              class="bi bi-twitter"
            ></i>
          </a>
        </li>
        <li>
          <router-link
            v-if="
              !(
                $store.state
                  .isDistrictAdminLoggedIn ||
                $store.state
                  .isSiteAdminLoggedIn
              )
            "
            :to="`/district/${this.$router.currentRoute.value.params.id}/login`"
          >
            <i
              v-if="
                !$store.state
                  .isDistrictAdminLoggedIn
              "
              class="bi bi-box-arrow-in-right"
            ></i>

            <p
              @click="logout"
              v-else
              id="login-text"
            >
              Logout
            </p>
          </router-link>
        </li>
      </ul>
    </div>
  </header>
</template>

<script>
import store from '../../../store/index'

export default {
  name: 'ClubInfoHeader',
  components: {},
  data() {
    return {
      email: '',

      facebookLink: '',
      twitterLink: '',
      instagramLink: '',

      districtSocials: [],
    }
  },
  async created() {
    this.districtSocials =
      store.state.districtSocials

    const districtData =
      store.state.currentDistrictData
    this.email = await districtData.district_email

    this.facebookLink = await this.getSocialLink(
      1,
    )
    this.twitterLink = await this.getSocialLink(
      2,
    )
    this.instagramLink = await this.getSocialLink(
      3,
    )
  },
  methods: {
    async getSocialLink(socialType) {
      let linkToReturn

      if (
        this.districtSocials !=
        undefined
      ) {
        this.districtSocials.forEach(
          socialLink => {
            if (
              socialLink.url_type ===
              socialType
            ) {
              linkToReturn =
                socialLink.url
            }
          },
        )
        return linkToReturn
      }
      return null
    },

    // logout() {
    //   store.dispatch("logout", 5)
    //   store.dispatch("logout", 7)
    // },
  },
}
</script>

<style scoped>
.social-icon-one {
  display: inline-block;
      align-self: flex-end;
    padding-right: 150px;
    padding-top: 5px;
  
}
.social-icon-one li {
  position: relative;
  margin-left: 8px;
  display: inline-block;
}
.social-icon-one li a {
      cursor: pointer;
  margin-right: 5px;
  position: relative;
  width: 32px;
  height: 32px;
  color: rgba(255, 255, 255, 0.4);
  font-size: 14px;
  line-height: 28px;
  text-align: center;
  border-radius: 50%;
  display: inline-block;
  border: 2px solid
    rgba(255, 255, 255, 0.4);
  -webkit-transition: all 300ms ease;
  -ms-transition: all 300ms ease;
  -o-transition: all 300ms ease;
  -moz-transition: all 300ms ease;
  transition: all 300ms ease;
}
.header-top {
  display: flex;
  flex-direction: row;
  position: relative;
  background-color: #ffb607;
  flex-wrap: wrap;
  justify-content: flex-start;
}
.mail {
  display: flex;
  flex-direction: row;
  margin-top: 5px;
  padding-left: 1em;
      justify-content: flex-end;
          flex-grow: .5;
          align-self: flex-end;

}

.envelope {
  color: #ffff;
  margin-top: 5px;
  
}

p {
  color: #ffff;
  padding-left: 5px;
}

.social {
    margin-top: 4px;
    
    justify-content: flex-end;
    flex-wrap: wrap;
    flex-grow: 1;
        display: flex;
    flex-direction: row;
}

:hover {
    color: white !important;
    text-decoration: none !important;
}
</style>
