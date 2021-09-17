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
      <img src="../../assets/club-logo.png" alt="">
    </div>
    <div id="social-icon-block">
      <font-awesome-icon class="social-icon" :icon="{ prefix: 'fab', iconName: 'facebook' }"/>
      <font-awesome-icon class="social-icon" :icon="{ prefix: 'fab', iconName: 'twitter' }"/>
    </div>
    <div class="info-text" id="address-block">
      <font-awesome-icon class="icon" icon="map-marker"></font-awesome-icon>
      PO Box 411, Cornwall ON K6H 5T1
    </div>
    <div class="info-text" id="all-rights">
      All rights Reserved &copy 2020
    </div>
    <div class="info-text">
      <font-awesome-icon class="icon" icon="envelope"></font-awesome-icon>
      info@cornwallrotary.com
    </div>
    <div class="info-text">
      <font-awesome-icon icon="phone" class="icon"></font-awesome-icon>
      613-555-5555
    </div>
  </footer>
</template>

<script>

export default {
  name: 'ClubFooter',
  components: {

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