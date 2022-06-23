<template>
  <section class="contact-section">
    <div class="auto-container">
      <div class="row clearfix">
        <!--Form Column-->
        <div
          class="form-column col-md-7 col-sm-12 col-xs-12"
        >
          <h2>Send Message</h2>
          <div class="text">
            Do you have any questions
            about joining Rotary or
            making pledges? Fill out the
            form below to ask any
            questions about Rotary,how
            to make a pledge or how to
            use/navigate this site. We
            are excited to hear from
            you!
          </div>
          <!--Contact Form-->
          <div class="contact-form">
            <form
              @submit.prevent=""
              id="contact-form"
            >
              <div class="row clearfix">
                <div
                  class="form-group col-md-6 col-sm-6 col-xs-12"
                >
                  <input
                    type="text"
                    name="username"
                    placeholder="Your Name"
                    v-model="name"
                  />
                </div>

                <div
                  class="form-group col-md-6 col-sm-6 col-xs-12"
                >
                  <input
                    type="email"
                    name="email"
                    v-model="
                      senderEmail
                    "
                    placeholder="Your Email"
                  />
                </div>

                <div
                  class="form-group col-md-12 col-sm-12 col-xs-12"
                >
                  <textarea
                    v-model="emailBody"
                    name="message"
                    placeholder="Your Message"
                  ></textarea>
                </div>

                <div
                  class="form-group col-md-12 col-sm-12 col-xs-12"
                >
                  <button
                    class="theme-btn btn-style-one"
                    @click="mailTo()"
                  >
                    Send Message
                  </button>
                </div>
              </div>
            </form>
          </div>
          <!--End Contact Form-->
        </div>

        <!--Info Container-->
        <div
          class="info-column col-md-5 col-sm-12 col-xs-12"
        >
          <div class="inner-column">
            <h2>Contact Info</h2>
            <ul class="contact-info">
              <li>
                <div class="icon-box">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    class="bi bi-at"
                    viewBox="0 0 16 16"
                  >
                    <path
                      d="M13.106 7.222c0-2.967-2.249-5.032-5.482-5.032-3.35 0-5.646 2.318-5.646 5.702 0 3.493 2.235 5.708 5.762 5.708.862 0 1.689-.123 2.304-.335v-.862c-.43.199-1.354.328-2.29.328-2.926 0-4.813-1.88-4.813-4.798 0-2.844 1.921-4.881 4.594-4.881 2.735 0 4.608 1.688 4.608 4.156 0 1.682-.554 2.769-1.416 2.769-.492 0-.772-.28-.772-.76V5.206H8.923v.834h-.11c-.266-.595-.881-.964-1.6-.964-1.4 0-2.378 1.162-2.378 2.823 0 1.737.957 2.906 2.379 2.906.8 0 1.415-.39 1.709-1.087h.11c.081.67.703 1.148 1.503 1.148 1.572 0 2.57-1.415 2.57-3.643zm-7.177.704c0-1.197.54-1.907 1.456-1.907.93 0 1.524.738 1.524 1.907S8.308 9.84 7.371 9.84c-.895 0-1.442-.725-1.442-1.914z"
                    />
                  </svg>
                </div>
                <h4>E-mail</h4>
                {{ this.email }}
              </li>
              <li>
                <div class="icon-box">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    class="bi bi-telephone"
                    viewBox="0 0 16 16"
                  >
                    <path
                      d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.568 17.568 0 0 0 4.168 6.608 17.569 17.569 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.678.678 0 0 0-.58-.122l-2.19.547a1.745 1.745 0 0 1-1.657-.459L5.482 8.062a1.745 1.745 0 0 1-.46-1.657l.548-2.19a.678.678 0 0 0-.122-.58L3.654 1.328zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z"
                    />
                  </svg>
                </div>
                <h4>Phone</h4>
                {{ this.phone }}
              </li>
              <li>
                <div class="icon-box">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    class="bi bi-geo-alt"
                    viewBox="0 0 16 16"
                  >
                    <path
                      d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A31.493 31.493 0 0 1 8 14.58a31.481 31.481 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94zM8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10z"
                    />
                    <path
                      d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"
                    />
                  </svg>
                </div>
                <h4>Meeting</h4>
                {{ address }} {{ city }}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import store from '../../store/index'
import { watchEffect } from 'vue'
import rotaryMailer from '../../api-factory/rotaryMailer'
export default {
  name: 'ContactUs',
  props: {
    isDistrictOrClub: String,
  },
  data() {
    return {
      address: '',
      email: '',
      phone: '',
      city: '',
      name: '',
      senderEmail: '',
      emailBody: '',
    }
  },
  created() {
    if (
      this.isDistrictOrClub ==
      'District'
    ) {
      watchEffect(() => {
        const districtData =
          store.state
            .currentDistrictData
        this.address =
          districtData.meeting_location
        this.email =
          districtData.district_email
        this.city =
          districtData.meeting_city
        this.phone =
          districtData.district_phone
      })
    } else {
      const clubData =
        store.state.currentClubData
      this.address =
        clubData.club_address
      this.email = clubData.club_email
      this.city = clubData.club_city
      this.phone = clubData.club_phone
    }
  },
  computed: {
    setEmail() {
      this.email =
        store.state.currentDistrictData.district_email
      return
    },
  },
  methods: {
    async mailTo() {
      await rotaryMailer.contactMailer(
        this.name,
        this.senderEmail,
        this.emailBody,
      )
      this.redirect()
    },
    redirect() {
      this.$router.push({
        name: 'DistrictHome',
      })
    },
  },
}
</script>

<style scoped>
.contact-section,
.mainpage-section {
  position: relative;
  padding: 20px 0px 100px;
}
.auto-container {
  position: static;
  max-width: 1200px;
  padding: 0px 15px;
  margin: 0 auto;
}
.row {
  margin-right: -15px;
  margin-left: -15px;
}
.contact-section h2,
.mainpage-section h2 {
  position: relative;
  font-size: 43px;
  font-weight: 800;
  color: #222328;
  margin-bottom: 5px;
}
.contact-section .text,
.mainpage-section .text {
  font-size: 18px;
  line-height: 1.6em;
  margin-bottom: 30px;
  color: rgba(0, 0, 0, 0.4);
}
.contact-form {
  position: relative;
}
.contact-form .form-group {
  position: relative;
  margin-bottom: 25px;
}
.contact-form
  .form-group
  input[type='text'],
.contact-form
  .form-group
  input[type='password'],
.contact-form
  .form-group
  input[type='tel'],
.contact-form
  .form-group
  input[type='email'],
.contact-form .form-group select {
  position: relative;
  display: block;
  width: 100%;
  line-height: 28px;
  padding: 10px 25px;
  color: #222222;
  border: 1px solid transparent;
  height: 50px;
  background: #f3f3f3;
  -webkit-transition: all 300ms ease;
  -ms-transition: all 300ms ease;
  -o-transition: all 300ms ease;
  -moz-transition: all 300ms ease;
  transition: all 300ms ease;
}
.contact-form
  .form-group
  input[type='text'],
.contact-form
  .form-group
  input[type='password'],
.contact-form
  .form-group
  input[type='tel'],
.contact-form
  .form-group
  input[type='email'],
.contact-form .form-group select {
  position: relative;
  display: block;
  width: 100%;
  line-height: 28px;
  padding: 10px 25px;
  color: #222222;
  border: 1px solid transparent;
  height: 50px;
  background: #f3f3f3;
  -webkit-transition: all 300ms ease;
  -ms-transition: all 300ms ease;
  -o-transition: all 300ms ease;
  -moz-transition: all 300ms ease;
  transition: all 300ms ease;
}
.contact-form .form-group textarea {
  position: relative;
  display: block;
  width: 100%;
  line-height: 24px;
  padding: 10px 25px;
  color: #222222;
  height: 200px;
  background: #f3f3f3;
  resize: none;
  border: 1px solid transparent;
  -webkit-transition: all 300ms ease;
  -ms-transition: all 300ms ease;
  -o-transition: all 300ms ease;
  -moz-transition: all 300ms ease;
  transition: all 300ms ease;
}
.contact-form button {
  position: relative;
  font-weight: 500;
  margin-top: 0px;
  padding: 13px 44px;
  font-size: 14px;
  display: inline-block;
  font-family: 'Montserrat', sans-serif;
}
.contact-section
  .info-column
  .inner-column
  h2 {
  margin-bottom: 30px;
}
.contact-section h2,
.mainpage-section h2 {
  position: relative;
  font-size: 43px;
  font-weight: 800;
  color: #222328;
  margin-bottom: 5px;
}
.contact-section .contact-info {
  position: relative;
  margin-bottom: 30px;
}

.contact-section .contact-info li h4 {
  font-weight: 500;
  text-transform: uppercase;
  margin-bottom: 3px;
  font-size: 14px;
  color: #222328;
}
.contact-section
  .contact-info
  li
  .icon-box {
  position: absolute;
  left: 0px;
  top: 0px;
  width: 60px;
  height: 60px;
  font-size: 24px;
  color: #cdcdcd;
  line-height: 56px;
  border-radius: 50%;
  text-align: center;
  border: 2px solid #f2f2f2;
}
.contact-section .contact-info li {
  position: relative;
  display: block;
  font-size: 16px;
  margin-bottom: 30px;
  color: #767676;
  min-height: 60px;
  padding: 0px 0px 0px 90px;
}
</style>
