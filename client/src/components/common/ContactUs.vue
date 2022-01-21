<template>
  <div class="contact-us-container">
    <br />
    <div class="send-message-container">
      <br>
      <h2>Send Message</h2> <br>
      <input type="text" placeholder="Your Name">
      <input type="text" placeholder="Your Email">
      <br> <br>
      <textarea  
        cols="30"
        rows="10"
        placeholder="Your Message">
      </textarea>
    </div>
    <div class="contact-info-container">
      <br>
      <h2>Contact Info</h2> <br>
      <div class="info">  
        Address: <br>
        {{ this.address }}
        <br/> <br>
        Email: <br>
        {{ this.email }}
        <br/> <br>
      </div>
    </div> <br><br><br>
  </div> 
</template>

<script>

import store from '../../store/index'

export default {
  name: 'ContactUs',
  props: {
    isDistrictOrClub: String
  },
  data() {
    return {
      address: '',
      email: '',
    }
  },
  created() {
    if(this.isDistrictOrClub == 'District') {
      const districtData = store.state.currentDistrictData
      this.address = districtData.meeting_location
      this.email = districtData.district_email
    } else {
      const clubData = store.state.currentClubData
      this.address = clubData.club_address
      this.email = clubData.club_email
    }
  }
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
  font-size: 16px;
}

textarea {
  height: 50%;
  width: 600px;
}

input, textarea {
  border: 1px solid rgba(0, 0, 0, 0.253);
  background-color: transparent;
}

.info {
  text-align: left;
  font-size: 24px;
}


</style>
