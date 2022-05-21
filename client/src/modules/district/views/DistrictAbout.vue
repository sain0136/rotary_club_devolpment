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
            Welcome to
            {{
              $store.state
                .currentDistrictData
                .district_name
            }}
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
    <!-- who we are section -->
    <section class="who-we-are-section">
      <div class="auto-container">
        <div class="inner-container">
          <div class="row clearfix">
            <div class="services">
              <div class="inner-box">
                <div
                  class="block-number"
                >
                  01
                </div>
                <h2>Our History</h2>
                <div class="title">
                  Work Since 1987 with
                  Pride!!
                </div>
                <div class="text">
                  Raise more money with
                  our custom made
                  solution. Unlimited
                  campai pages pledge
                  giving, monthly
                  giving.
                </div>
              </div>
            </div>
            <div class="services">
              <div class="inner-box">
                <div
                  class="block-number"
                >
                  02
                </div>
                <h2>Our Mission</h2>
                <div class="title">
                  Mission to make smile
                  the world
                </div>
                <div class="text">
                  Raise more money with
                  our custom made
                  solution. Unlimited
                  campai pages pledge
                  giving, monthly
                  giving.
                </div>
              </div>
            </div>
            <div class="services">
              <div class="inner-box">
                <div
                  class="block-number"
                >
                  03
                </div>
                <h2>Large Community</h2>
                <div class="title">
                  Join our community &
                  help others
                </div>
                <div class="text">
                  Raise more money with
                  our custom made
                  solution. Unlimited
                  campai pages pledge
                  giving, monthly
                  giving.
                </div>
              </div>
            </div>
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

/* who we are section */
.who-we-are-section {
  position: relative;
  padding-bottom: 115px;
}
.who-we-are-section .inner-container {
  position: relative;
  border: 1px solid #f2f2f2;
}
.row {
  margin-right: -15px;
  margin-left: -15px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
}
.clearfix:before {
  box-sizing: border-box;
}
/* service box  -box*/
.services {
  position: relative;
}
@media (min-width: 992px) {
  .services {
    width: 33.33333333%;
  }
}
@media (max-width:992px ) {
  .services .inner-box {
      border: solid 1px;
  }
}
.services .inner-box {
  position: relative;
  padding: 35px 40px 40px;
  border-right: 1px solid #f2f2f2;
}
.services .inner-box .block-number {
  position: relative;
  font-weight: 700;
  font-size: 60px;
  line-height: 1em;
  color: rgba(0, 0, 0, 0.07);
  font-family: 'Montserrat', sans-serif;
}
.services .inner-box h2 {
  position: relative;
  font-size: 22px;
  font-weight: 500;
  margin-top: -30px;
  text-transform: capitalize;
  margin: 0px;
  background: none;
  line-height: 1.6em;
  font-family: 'Montserrat', sans-serif;
}
.services .inner-box .title {
  position: relative;
  color: #767676;
  font-size: 16px;
  font-style: italic;
  font-family: 'Montserrat', sans-serif;
}
.services .inner-box .text {
  position: relative;
  font-size: 16px;
  margin-top: 15px;
  color: rgba(0, 0, 0, 0.45);
  box-sizing: border-box;
  -webkit-font-smoothing: antialiased;
  font-family: 'Lato', sans-serif;
  line-height: 1.8em;
  font-weight: 400;
}
</style>
