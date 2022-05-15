<template>
  <div class="district-about">
    <section class="page-title">
      <div class="auto-container">
        <div class="inner-box">
          <h1>about us</h1>
        </div>
      </div>
    </section>
    <section class="services-section">
      <div class="auto-container">
        <div class="services-title">
          <h2>
            Lorem ipsum dolor sit amet,
            consectetur adipiscing elit.
          </h2>
          <br />
          <div
            class="description-container"
          >
            {{
              $store.state
                .currentDistrictData
                .district_description
            }}
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'DistrictAbout',
  data() {
    return {}
  },
}
</script>

<style scoped>
.services-section
  .services-title
  .description-container {
  color: rgba(0, 0, 0, 0.7);
  font-size: 18px;
  line-height: 1.8em;
  font-weight: 400;
  font-family: 'Lato', sans-serif;
}
.services-section .services-title h2 {
  position: relative;
  color: #111111;
  font-size: 36px;
  line-height: 1.3em;
  margin-bottom: 25px;
  font-family: 'Lato', sans-serif;
  font-weight: 700;
}
.services-section .services-title {
  position: relative;
  text-align: center;
  margin-bottom: 100px;
}
.auto-container {
  position: static;
  max-width: 1200px;
  padding: 0px 15px;
  margin: 0 auto;
}
.services-section {
  position: relative;
  padding: 110px 0px 80px;
}
.page-title h1 {
  font-size: 72px;
  margin-bottom: 0px;
  font-weight: 800;
  color: #ffffff;
  text-transform: capitalize;
}

.page-title .inner-box {
  position: relative;
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
</style>
