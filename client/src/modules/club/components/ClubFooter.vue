<template>
  <footer>
    <div>
      <!-- Empty block -->
    </div>
    <div>
      <p class="title">Reach Out</p>
    </div>
    <div>
      <p class="title">Our Address</p>
    </div>
    <div>
      <img src="../assets/club-logo.png" alt="">
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
        <font-awesome-icon 
          class="social-icon"  
          :icon="{ prefix: 'fab', iconName: 'twitter' }"/>
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
    </div>
  </footer>
</template>

<script>

import { getClubData, getSocialLink } from '../../../data-bank/club-data'

export default {
  name: 'ClubFooter',
  components: {

  },
  data() {
    return {
      address: '',
      email: '',
      phone: '',

      facebookLink: null,
      twitterLink: null,
      instagramLink: null,
    }
  },
  async created() {
    const clubData = await getClubData()
    this.address = await clubData.club_address
    this.email = await clubData.club_email
    this.phone = await clubData.club_phone

    this.facebookLink = await getSocialLink(1)
    this.twitterLink = await getSocialLink(2)
    this.instagramLink = await getSocialLink(3)
  }
}

</script>

<style scoped>

body{
    min-height: 100vh;
    display: flex;
    flex-direction: column;
}

footer {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(3, 1fr);
  background-color: #232323;
  height: 250px;
  margin-top: 300px;
}

.social-icon {
  color: #ffff;
  opacity: 0.5;
  font-size: 36px;
  margin-right: 20px;
  transition: color 500ms;
  transition: opacity 500ms;
}

.social-icon:hover {
  transition: color 500ms;
  transition: opacity 500ms;
  color: #ffb607;
  opacity: 1;
}

.icon {
  color: #ffb607;
  font-size: 28px;
}

.title {
  font-family: 'Lato';
  font-weight: 500;
  font-size: 32px;
  color: #ffff;
  margin-top: 2%;
}

.info-text {
  color: rgba(255, 255, 255, 0.575);
}

#all-rights {
  margin-left: 50px;
}

#social-icon-block, #address-block {
  margin-top: 7%;
}

img {
  margin-top: -20px;
}

</style>