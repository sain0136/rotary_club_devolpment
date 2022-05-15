<template>
  <section class="page-title">
    <div class="title-auto-container">
      <div class="inner-box">
        <h1>Make a Pledge</h1>
      </div>
    </div>
  </section>
  <section class="pledge-container">
    <div class="auto-container">
      <div class="pledge-block">
        <div class="row">
          <div class="inner-div">
            <h3>Pledge Today</h3>
            <div class="text">
              <p>
                Lorem ipsum dolor sit
                amet, consectetur
                adipiscing elit. Integer
                lobortis fringilla
                felis, vel dapibus sem
                faucibus ut. Nullam
                placerat pretium arcu,
                in condimentum orci
                viverra quis. Sed elit
                neque, consectetur sed
                fermentum id, aliquam
                sed justo. Donec
                tincidunt lacus sodales
                nibh iaculis auctor.
              </p>
              <p>
                Please complete your
                secure pledge below.
                Have questions or need
                help? Call
                <span
                  class="theme_color"
                  >555-555-5555</span
                >
                or email
                <span
                  class="theme_color"
                  >info@cornwallrotary.com</span
                >
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <div class="pledgeform-section">
    <div class="pledge-form-outer">
      <form @submit.prevent="">
        <div class="form-porlet">
          <h3>
            How much would you like to
            pledge?
          </h3>
          <div class="amount">
            <BaseInputs
              v-model="pledgeAmount"
              label="Pledge Amount"
              type="number"
              step="any"
              min="1"
            />
          </div>
        </div>
        <div class="not-logged-section">
          <h3>
            Contact Information
          </h3>
          <div class="form-input">
            <BaseInputs
              v-model="
                nonMemeberPledge.firstname
              "
              id="base"
              label="First Name"
              type="text"
            />
            <BaseInputs
              v-model="
                nonMemeberPledge.lastname
              "
              id="base"
              label="Last Name"
              type="text"
            />
          </div>
          <div class="form-input">
            <BaseInputs
              v-model="
                nonMemeberPledge.email
              "
              class="base"
              label="Email"
              type="email"
            />
            <BaseInputs
              v-model="
                nonMemeberPledge.phone
              "
              class="base"
              label="Phone Number"
              type="text"
            />
          </div>
        </div>
        <div class="bttn-text">
          <button
            type="submit"
            @click="
              () => createPleadge()
            "
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import BaseInputs from '../../formParts/BaseInputs.vue'
import store from '../../../store/index'
import pledgeApi from '../../../api-factory/pledge'

export default {
  name: 'ProjectPledgeForm',
  components: {
    BaseInputs,
  },
  props:{
      projectIdProp:Number
  },
  data() {
    return {
      userId: 1,
      projectId: 0,
      pledgeAmount: 0,
      nonMemeberPledge: {
        firstname: '',
        lastname: '',
        email: '',
        phone: '',
      },
    }
  },
  async created() {
    if (
      store.state.loggedInDistrictUserId
    ) {
      this.userId =
        store.state.loggedInDistrictUserId
    } else if (
      store.state.loggedInClubUserId
    ) {
      this.userId =
        store.state.loggedInClubUserId
    }
    this.projectId = this.projectIdProp
  },
  methods: {
    async createPleadge() {
      const pledgeObject = this
        .nonMemeberPledge
      pledgeObject[
        'user_id'
      ] = this.userId
      pledgeObject[
        'project_id'
      ] = this.projectId
      pledgeObject[
        'pledge_amount'
      ] = parseInt(this.pledgeAmount)

      await pledgeApi.create(pledgeObject)
      this.redirect()
    },

    redirect() {
      this.$router.push({
        name: 'DistrictProjects',
      })
    },
  },
}
</script>

<style scoped>
/* title container */
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
  background-image: url(../../../assets/image-3.jpg);
}
/* page container */
.pledge-container {
  position: relative;
  padding: 2.2em 0px 3em;
  background-color: #fafafa;
}
/* auto container */
.auto-container {
  position: static;
  max-width: 1200px;
  padding: 0px 3em;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
}
/* pledge-block container */
.pledge-block {
  position: relative;
  margin-bottom: 0.5em;
}
.row {
  margin-right: -15px;
  margin-left: -15px;
}
/* inner div contents */
.inner-div {
  position: relative;
  position: relative;
  min-height: 1px;
  padding-right: 15px;
  padding-left: 15px;
}
@media (min-width: 992px) {
  .inner-div {
    width: 100%;
  }
}
@media (min-width: 768px) {
  .inner-div {
    float: left;
  }
}

/* pledge-block contents */
.inner-div h3 {
  position: relative;
  font-size: 45px;
  color: #1f1e1e;
  font-weight: 800;
  line-height: 1em;
  font-family: 'Montserrat', sans-serif;
  -webkit-font-smoothing: antialiased;
  -webkit-text-size-adjust: 100%;
}
.text {
  position: relative;
  margin-top: 1em;
}
.text p {
  position: relative;
  color: #848484;
  font-size: 16px;
  margin-bottom: 20px;
  position: relative;
  line-height: 1.8em;
  font-family: 'Lato', sans-serif;
  font-weight: 400;
  -webkit-font-smoothing: antialiased;
}
.theme_color {
  color: #ffb607;
}
/* pledge-form wrappers */
.pledgeform-section {
  position: relative;
  padding: 60px 40px 60px;
  border: 1px solid #e9e9e9;
  border-radius: 3px;
  background-color: #ffffff;
}
.pledge-form-outer {
  display: flex;
  flex-direction: column;
}
/* pledge-form porlet */
.form-porlet {
  border-bottom: 1px solid #e1e1e1;
  margin-bottom: 30px;
  padding-bottom: 20px;
}
.form-porlet h3 {
  font-size: 28px;
  font-weight: 600;
  color: #1f1e1e;
  margin-bottom: 30px;
  text-transform: capitalize;
}
/* pledge-form items */
.amount {
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
}
/* not logged in  items */
.not-logged-section {
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  border-bottom: 1px solid #e1e1e1;
  margin-bottom: 30px;
  padding-bottom: 20px;
  margin-right: -15px;
  margin-left: -15px;
}
.not-logged-section h3 {
  font-size: 28px;
  font-weight: 600;
  color: #1f1e1e;
  margin-bottom: 30px;
  text-transform: capitalize;
  margin-left: 1em;
}

.form-input {
  display: flex;
  flex-direction: row;
  padding: 1em 1em;
}

/*submit bttn */
.bttn-text {
  text-align: left;
}
.bttn-text button {
  margin-top: 15px;
  font-family: 'Montserrat', sans-serif;
  position: relative;
  padding: 10px 30px;
  line-height: 24px;
  color: #ffffff;
  font-size: 13px;
  font-weight: 700;
  background-color: #ffb607;
  border: 2px solid #ffb607;
  text-transform: uppercase;
  -webkit-transition: all 0.3s ease;
}
.bttn-text button:hover {
  background-color: #ffffff;
  border: 2px solid #ffb607;
  text-transform: uppercase;
  -webkit-transition: all 0.3s ease;
  color: #ffb607;
  background: none;
}
</style>
