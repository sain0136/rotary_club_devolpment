<template>
  <header>
    <div class="mail">
      <font-awesome-icon class="envelope" icon="envelope"></font-awesome-icon>
      <p> info@cornwallrotary.com</p>
    </div>
    <div class="social">
      <font-awesome-icon class="social-icon" :icon="{ prefix: 'fab', iconName: 'facebook' }"/>
      <font-awesome-icon class="social-icon" :icon="{ prefix: 'fab', iconName: 'twitter' }"/>
    </div>
  </header>
</template>

<script>

export default {
  name: 'ClubInfoHeader',
  components: {

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

</style>