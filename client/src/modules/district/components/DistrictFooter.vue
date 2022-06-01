<template>
  <footer class="main-footer">
    <link
      rel="stylesheet"
      href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.3.0/font/bootstrap-icons.css"
    />
    <div class="row">
      <div class="item-a">
        <div class="logo-box">
          <router-link
            class="link"
            :to="{
              name: 'DistrictHome',
              params: {
                id: this.districtId,
              },
            }"
            ><img
              src="../assets/rotary-logo.png"
              alt="District Logo"
          /></router-link>
        </div>

        <div class="list-style-one">
          <ul>
            <li>
              All Right Researved© 2020
            </li>
          </ul>
        </div>
      </div>
      <div class="item-b">
        <h2>Reach Out</h2>
        <ul
          class="social-icons"
          style="margin-bottom: 14px;"
        >
          <!--  because ids are global and getElementById will
           return the first element in the DOM with that id.
           It doesn't know anything about youe Vue component boundaries.I.E flinink footer -->
          <li ref="flink_footer">
            <a
              title="facebook"
              @click="linkRedirct(1)"
            >
              <i
                class="bi bi-facebook"
                style="
                  font-size: 1em;
                  color: gray;
                "
              ></i>
            </a>
          </li>
          &nbsp;&nbsp;
          <li ref="tlink_footer">
            <a
              title="twitter"
              @click="linkRedirct(2)"
            >
              <i
                class="bi bi-twitter"
                style="
                  font-size: 1em;
                  color: gray;
                "
              ></i>
            </a>
          </li>
        </ul>
        <div class="widget-content">
          <ul class="list-style-one">
            <li>
              <span
                ><i
                  class="bi bi-envelope"
                  style="
                    font-size: 1.4em;
                    color: #ffb607;
                  "
                ></i
              ></span>
              {{ email }}
            </li>
          </ul>
        </div>
      </div>
      <div class="item-c">
        <h2>Our Address</h2>
        <div class="widget-content">
          <ul class="list-style-one">
            <li>
              <i
                class="bi bi-geo-alt"
                style="
                  font-size: 1em;
                  color: #ffb607;
                "
              ></i>
              <span>
                {{ address }}</span
              >
            </li>
            <li>
              <i
                class="bi bi-telephone"
                style="
                  font-size: 1em;
                  color: #ffb607;
                "
              ></i>
              <span> {{ phone }}</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
import store from '../../../store/index'
import { watchEffect } from 'vue'

export default {
  name: 'DistrictFooter',
  components: {},
  data() {
    return {
      districtId: this.$router
        .currentRoute.value.params.id,
      address: '',
      email: '',
      phone: '',

      facebookLink: '',
      twitterLink: '',
      instagramLink: null,
      districtSocials: [],
    }
  },
  async created() {
    watchEffect(() => {
      const districtData =
        store.state.currentDistrictData
      this.address = `Meeting Location: ${districtData.meeting_location}`
      this.email =
        districtData.district_email
      const districtSocials =
        store.state.districtSocials
      this.phone =
        districtData.district_phone
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
          this.$refs.flink_footer.style.display =
            'none'
        } else {
          this.$refs.flink_footer.style.display =
            'inline-block'

          this.facebookLink = flink.url
        }
        if (
          typeof tlink === 'undefined'
        ) {
          console.log('true')
          // Proper way to access elements in vue components https://stackoverflow.com/a/60681661
          this.$refs.tlink_footer.style.display =
            'none'
        } else {
          this.twitterLink = tlink.url
          this.$refs.tlink_footer.style.display =
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
}
</script>

<style scoped>
.item-a {
  justify-self: end;
  width: 80%;
}
.main-footer {
  padding: 70px 0px 0px;
  background-color: #232323;
  border-top: 1px solid #2e2e2e;
  margin-top: auto;
  flex-shrink: 0;
}
.auto-container {
}
.row {
  display: grid;
  grid-auto-rows: 200px;
  grid-template-columns: repeat(
    3,
    1fr [col-start]
  );
  row-gap: 2em;
}
.main-footer .logo-box {
  margin-top: 15px;
}
.link {
  text-decoration: none;
  cursor: pointer;
  color: #ffb607;
}
img {
  max-width: 50%;
  display: inline-block;
}
.list-style-one li {
  position: relative;
  padding-left: 30px;
  font-size: 16px !important;
  font-weight: 400;
  margin-bottom: 20px;
  color: rgba(228, 230, 235, 0.7);
  display: block;
}
li {
  list-style: none;
  padding: 0px;
  margin: 0px;
  display: inline-block;
}
.item-b {
  position: relative;
  margin-bottom: 40px;
}
h2 {
  font-size: 24px;
  font-weight: 500;
  color: #ffffff;
  margin-bottom: 20px;
  text-transform: capitalize;
}
.social-icons {
  position: relative;
  margin-left: 40px;
}
.social-icons a {
  cursor: pointer;
  position: relative;
  width: 35px;
  height: 35px;
  color: #5a5a5a;
  font-size: 14px;
  line-height: 33px;
  text-align: center;
  border-radius: 70%;
  display: inline-block;
  border: 1px solid #5a5a5a;
  -webkit-transition: all 300ms ease;
  -ms-transition: all 300ms ease;
  -o-transition: all 300ms ease;
  -moz-transition: all 300ms ease;
  transition: all 300ms ease;
  box-sizing: unset;
}
.list-style-one {
  position: relative;
  margin-left: 40px;
}
</style>

<!-- < <p class="title">Reach Out</p>
    </div>
    <div>
      <p class="title">Our Address</p>
    </div>
    <div>
      img src="../assets/club-logo.png" alt=""
    </div>
    <div id="social-icon-block">
      <a :href="facebookLink"
        v-if="facebookLink != null">
        <font-awesome-icon 
          class="social-icon" 
          :icon="{ prefix: 'fab', iconName: 'facebook' }"/>
      </a>
      <a :href="twitterLink"
        v-if="twitterLink != null">
        <i class="bi bi-twitter"></i>
      </a>
    </div>
    <div class="info-text" id="address-block">
      <font-awesome-icon class="icon" icon="map-marker"></font-awesome-icon>
      {{ this.address }}
    </div>
    <div class="info-text" id="all-rights">
      All rights Reserved &copy 2020
    </div>
    <div class="info-text">
      <font-awesome-icon class="icon" icon="envelope"></font-awesome-icon>
      {{ this.email }}
    </div>
    <div class="info-text">
      <font-awesome-icon icon="phone" class="icon"></font-awesome-icon>
      {{ this.phone }}
    </div>> -->
