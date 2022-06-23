<template>
  <div class="sign-in">
    <section class="page-title">
      <div class="auto-container">
        <div class="inner-box">
          <h1 class="club-page-title">
            SIGN IN
          </h1>
        </div>
      </div>
    </section>
    <br />
    <br />
    <ClubLoginForm />
  </div>
</template>

<script>
import ClubLoginForm from '../components/ClubLoginForm.vue'

export default {
  name: 'ClubLoginApp',
  components: {
    ClubLoginForm,
  },
}
</script>

<style scoped>
.page-title h1 {
  font-size: 72px;
  margin-bottom: 0px;
  font-weight: 800;
  color: #ffffff;
  text-transform: capitalize;
}
.page-title {
  position: relative;
  padding: 30px 0px 40px;
  background-size: cover;
  text-align: center;
  background-attachment: fixed;
  background-repeat: no-repeat;
  background-position: center center;
  background-image: url(../assets/image-3.jpg);
}
.inner-box {
  position: relative;
}
.auto-container {
  position: static;
  max-width: 1200px;
  padding: 0px 15px;
  margin: 0 auto;
}
</style>
