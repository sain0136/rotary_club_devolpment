<template>
  <header>
    <div class="mail">
      <font-awesome-icon class="envelope" icon="envelope"></font-awesome-icon>
      <p> {{email}}</p>
    </div>
    <div class="social">
      <a :href="facebookLink"
        v-if="facebookLink != null">  
        <font-awesome-icon 
          class="social-icon" 
          :icon="{ prefix: 'fab', iconName: 'facebook' }"/>
      </a>
      <a :href="twitterLink"
        v-if="twitterLink != null">
        <font-awesome-icon 
          class="social-icon" 
          :icon="{ prefix: 'fab', iconName: 'twitter' }"/>
      </a>
      <router-link 
        v-if="!($store.state.isDistrictAdminLoggedIn || $store.state.isSiteAdminLoggedIn)"
        :to="`/club/${this.$router.currentRoute.value.params.id}/login`">
        <font-awesome-icon 
          v-if="!($store.state.isClubAdminLoggedIn || $store.state.isClubUserLoggedIn)"
          class="social-icon" icon="sign-in-alt"></font-awesome-icon>
        <p
          @click="logout"
          v-else 
          id="login-text">Logout</p>
      </router-link>
    </div>
  </header>
</template>

<script>

import { getClubData, getSocialLink } from '../../../data-bank/club-data'
import store from '../../../store/index'

export default {
  name: 'ClubInfoHeader',
  components: {

  },
  data() {
    return {
      email: '',

      facebookLink: null,
      twitterLink: null,
      instagramLink: null,
    }

  },
  async created() {
    const clubData = await getClubData()
    this.email = await clubData.club_email

    this.facebookLink = await getSocialLink(1)
    this.twitterLink = await getSocialLink(2)
    this.instagramLink = await getSocialLink(3)
  },
  methods: {
    logout() {
      store.dispatch("logout", 5)
      store.dispatch("logout", 7)

      // if(store.state.isClubAdminLoggedIn) {
      //   store.dispatch("logout", 5)
      // } else {
      //   store.dispatch("logout", 3)
      // }
      // this.$router.push('login')
    },
  }
}

</script>

<style scoped>

header {
  background-color: #ffb607;
  padding: 5px;
  display: flex;
  flex-direction: row;
}

.mail {
  margin-left: 15%;
  display: flex;
  flex-direction: row;
  margin-top: 5px;
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
  margin-top: 8px;
  margin-left: 52%;
  font-size: 20px;
}

.social-icon {
  color: #ffff;
  margin-right: 15px;
  opacity: 0.5;
  transition: opacity 300ms;
}

.social-icon:hover {
  opacity: 1;
  cursor: pointer;
  transition: opacity 300ms;
}

#login-text {
  display: inline;
  text-decoration: yellow;
  opacity: 0.5;
}

</style>