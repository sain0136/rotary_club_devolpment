<template>
  <header class="header-top">
    <div class="mail">
      <font-awesome-icon
        class="envelope"
        icon="envelope"
      ></font-awesome-icon>
      <p>{{ this.email }}</p>
    </div>
    <div class="social">
      <ul class="social-icon-one">
        <li id="flink">
          <a
            title="facebook"
            @click="linkRedirct(1)"
          >
            <i
              class="bi bi-facebook"
            ></i>
          </a>
        </li>
        <li id="tlink">
          <a
            title="twitter"
            @click="linkRedirct(2)"
          >
            <i
              class="bi bi-twitter"
            ></i>
          </a>
        </li>
        <li>
          <router-link
            title="Sign In"
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
          </router-link>
        </li>
      </ul>
    </div>
  </header>
</template>

<script>
import store from '../../../store/index'
import { watchEffect } from 'vue'

export default {
  name: 'DistrictInfoHeader',
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
    watchEffect(() => {
      console.log(
        store.state.currentDistrictData,
      )
      console.log(
        store.state.currentDistrictData
          .district_email,
      )
      console.log(
        store.state.districtSocials,
      )
      const districtData =
        store.state.currentDistrictData
      const districtSocials =
        store.state.districtSocials

      this.email =
        districtData.district_email

      try {
        const flink = districtSocials.find(
          ({ url_type }) =>
            url_type === 1,
        )
        const tlink = districtSocials.find(
          ({ url_type }) =>
            url_type === 2,
        )

        if (
          typeof flink === 'undefined'
        ) {
          document.getElementById(
            'flink',
          ).style.display = 'none'
        } else {
          document.getElementById(
            'flink',
          ).style.display =
            'inline-block'

          this.facebookLink = flink.url
        }

        if (
          typeof tlink === 'undefined'
        ) {
          console.log('lol')
          document.getElementById(
            'tlink',
          ).style.display = 'none'
          console.log('lol 2')
        } else {
          this.twitterLink = tlink.url
          document.getElementById(
            'tlink',
          ).style.display =
            'inline-block'
        }
      } catch (error) {
        console.log(error)
      }
    })
  },
  methods: {
    linkRedirct(type) {
      if (type == 1) {
        this.$router.push({
          name: 'externalFacebook',
        })
      } else {
        this.$router.push({
          name: 'externalTwitter',
        })
      }
    },
  },
  computed: {},
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
  flex-grow: 0.5;
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
