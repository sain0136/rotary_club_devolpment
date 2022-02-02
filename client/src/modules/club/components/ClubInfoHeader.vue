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
        class="social-icon"
        :to="{name: 'ClubUserProfile', params: {userid: $store.state.loggedInClubUserId}}">
        Welcome {{$store.state.currentClubUserData.firstname}}!
      </router-link>
    </div>
  </header>
</template>

<script>

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

      clubSocials: [],
    }
  },
  async created() {
    this.clubSocials = store.state.clubSocials 

    const clubData = store.state.currentClubData
    this.email = await clubData.club_email

    this.facebookLink = await this.getSocialLink(1)
    this.twitterLink = await this.getSocialLink(2)
    this.instagramLink = await this.getSocialLink(3)
  },
  methods: {

    async getSocialLink(socialType) {
      let linkToReturn

      if(this.clubSocials != undefined) {
        this.clubSocials.forEach(socialLink => {
        if(socialLink.url_type === socialType) {
          linkToReturn = socialLink.url
         }
        })
        return linkToReturn
      }
      return null
    },

    logout() {
      store.dispatch("logout", 5)
      store.dispatch("logout", 7)
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
  text-decoration: none;
}

.social-icon:hover {
  opacity: 1;
  cursor: pointer;
  transition: opacity 300ms;
}

</style>