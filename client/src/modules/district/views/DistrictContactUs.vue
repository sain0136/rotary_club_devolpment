<template>
  <div class="contact-us-container">
    <div class="district-page-head">
      <h1 class="district-page-title">
        Connect with us!
      </h1>
    </div>
    <br />
    <br />
    <ContactUs
      isDistrictOrClub="District"
    />
  </div>
</template>

<script>
import ContactUs from '../../../components/common/ContactUs.vue'

export default {
  name: 'DistrictContactUs',
  components: {
    ContactUs,
  },
  data() {
    return {}
  },
}
</script>

<style scoped>
.send-message-container {
  float: left;
  width: 60%;
  height: 300px;
  text-align: center;
}

.contact-info-container {
  float: right;
  width: 25%;
  margin-right: 200px;
  height: 300px;
  text-align: center;
}

h2 {
  font-size: 56px;
  font-family: 'Montserrat', sans-serif;
  font-weight: bolds;
  text-align: center;
  /* margin-left: 150px; */
}

input {
  margin-right: 20px;
  width: 290px;
  height: 40px;
}

textarea {
  height: 50%;
  width: 600px;
}

input,
textarea {
  border: 1px solid rgba(0, 0, 0, 0.253);
  background-color: transparent;
}

.info {
  text-align: left;
  font-size: 24px;
}
</style>
