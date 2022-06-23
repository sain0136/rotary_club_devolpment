<template>
  <div class="container">
    <div class="row clearfix">
      <div class="box-details">
        <div class="image">
          <img
            src="../../../assets/causes-12.jpg"
            alt=""
          />
          <div class="upper-box">
            <h2>
              {{
                currentProject.project_name
              }}
            </h2>
            <div class="finances">
              <div class="causes-info">
                <strong>Raised:</strong>
                ${{
                  currentProject.anticipated_funding
                }}
                <div>
                  <strong
                    style="
                      display: inline;
                    "
                    >Goal:
                  </strong>
                  <span
                    style="
                      display: inline;
                    "
                    class="theme_color"
                    >${{
                      currentProject.funding_goal
                    }}
                  </span>
                </div>
                <span
                  style="
                    display: block;
                  "
                  ><strong
                    >Estimated
                    Completion: </strong
                  >{{
                    currentProject.estimated_completion
                  }}</span
                >
                <span
                  style="
                    display: block;
                  "
                  ><strong
                    >Status: </strong
                  >{{
                    currentProject.project_status
                  }}</span
                >
              </div>
              <div class="btn-column">
                <a
                  @click="
                    () =>
                      this.$router.push(
                        {
                          name:
                            'ProjectPledgeForm',
                          params: {
                            projectIdProp: parseInt(
                              projectIdProp,
                            ),
                            thisProjectsFundingGoalProp:parseFloat(currentProject.funding_goal),
                            thisProjectsAnticipatedFundingProp:parseFloat(currentProject.anticipated_funding)
                          },
                        },
                      )
                  "
                  class="theme-btn btn-style-four"
                  >Make a pledge</a
                >
              </div>
            </div>
          </div>
          <div class="lower-box">
            <div class="dark-text">
              <p>
                Project description:
              </p>
              {{
                currentProject.project_theme
              }}
            </div>
          </div>
        </div>
      </div>
      <div class="text">
        <blockquote>
          <ul>
            <li>
              Region:
              {{
                currentProject.region
              }}
            </li>
            <li>
              Country:
              {{
                currentProject.country
              }}
            </li>
            <li>
              Rotary Areas of Focus:
            <ul>
              <li v-for="area in areaOfFocus" :key="area">
               &#8594 {{area}}</li>
            </ul>
            </li>
          </ul>
        </blockquote>
        <div class="two-column">
          <div class="clear-fix">
            <div class="image-column">
              <div class="image">
                <img
                  src="../../../assets/causes-12.jpg"
                  alt=""
                />
              </div>
            </div>
            <div class="content-column">
              <h3>
                Our Pledge Process
              </h3>
              <ul
                class="list-style-two"
              >
                <li>
                  1. Log in a district
                  or club memebr and
                  make a pledge.
                </li>
                <li>
                  2. If you are not part
                  of rotary you can
                  still pledge.
                </li>
                <li>
                  3. Simply make a guest
                  account and promise an
                  amount.
                </li>
                <li>
                  4. When the project is
                  fully funded and
                  approved you will be
                  contacted by the
                  Projects's creators!
                </li>
              </ul>
            </div>
          </div>
        </div>
        <p>
          When an unknown printer took a
          galley of type and scrambled
          it dsu make a type specimen
          book. It has survived only
          five centuries, but also the
          leap into electronic
          typesetting.remaining
          essentially unchanged. It was
          popularised in the 1960s with
          the release sheets containing.
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import ProjectApi from '../../../api-factory/project'
import store from '../../../store/index'
import Resources from '../../../Resources'

export default {
  name: 'ProjectCardDetails',
  props: {
    projectIdProp: String,
  },
  data() {
    return {
      currentProject: {},
      areaOfFocus: [],
    }
  },

  async created() {
    console.log(this.projectIdProp)
    console.log(
      store.state.currentProjectData,
    )

    if (
      this.projectIdProp === null ||
      this.projectIdProp == undefined ||
      this.projectIdProp == 'undefined'
    ) {
      this.currentProject =
        store.state.currentProjectData
    } else {
      await store.dispatch(
        'changeCurrentProjectData',
        this.projectIdProp,
      )
      this.currentProject =
        store.state.currentProjectData
    }

    let areaOfFocusMap = Resources.reverseTermConversionMap()

    const asArray = Object.entries(
      this.currentProject.areaFocusObject,
    )
        console.log(asArray)

    const filtered = asArray.filter(
      ([key, value]) =>
        value == true,
    )
    console.log(filtered)

    filtered.forEach((index) => {
      console.log(index)
      this.areaOfFocus.push(areaOfFocusMap.get(index[0])) 
    })
    console.log(this.areaOfFocus)
  },
  async beforeUnmount() {
    await store.dispatch(
      'changeCurrentProjectData',
      this.projectIdProp,
    )
  },
}
</script>

<style scoped>
.container {
  position: static;
  max-width: 1200px;
  padding: 0px 15px;
  margin: 0 auto;
}
.row {
  margin-right: -15px;
  margin-left: -15px;
}
.box-details {
  display: flex;
  flex-direction: column;
  position: relative;
  margin-bottom: 40px;
}

.box-details .image {
  position: relative;
}
img {
  position: relative;
  width: 100%;
  height: 150px;
  display: block;
}
.box-details .upper-box {
  position: relative;
  padding-top: 20px;
  overflow: hidden;
  padding-bottom: 15px;
  border-bottom: 1px solid #ececec;
}
.box-details .upper-box h2 {
  position: relative;
  color: #242323;
  font-size: 42px;
  font-weight: 800;
  margin-bottom: 20px;
  line-height: 1.6em;
  font-family: 'Montserrat', sans-serif;
}

/*bar  */
.col-md-12 {
  width: 100%;
}

/**/
.box-details .upper-box .btn-column {
  text-align: right;
}
a:hover,
a:focus,
a:visited {
  text-decoration: none;
  outline: none;
}
.btn-style-four {
  position: relative;
  padding: 10px 25px;
  line-height: 24px;
  color: #000000;
  font-size: 13px;
  background: none;
  letter-spacing: 1px;
  font-weight: 500;
  text-transform: uppercase;
  border: 2px solid #ffb607;
  font-family: 'Montserrat', sans-serif;
  -webkit-transition: all 0.3s ease;
  text-decoration: none;
}
.btn-style-four:hover {
  color: #ffffff;
  background: #ffb607;
  border-color: #ffb607;
}

.lower-box {
  position: relative;
  margin-top: 30px;
  padding-bottom: 30px;
}
.lower-box .dark-text p {
  position: relative;
  color: #2c2b2b;
  font-size: 2em;
  font-weight: 600;
  line-height: 1.8em;
  margin-bottom: 20px;
  font-family: 'Roboto', sans-serif;
}
.lower-box .dark-text {
  position: relative;
  color: #2c2b2b;
  font-size: 1em;
  font-weight: 400;
  line-height: 1.8em;
  margin-bottom: 20px;
  font-family: 'Roboto', sans-serif;
}
.text {
  position: relative;
  border-bottom: 1px solid #ececec;
  padding-bottom: 30px;
  margin-bottom: 1em;
}
.lower-box .text p {
  position: relative;
  font-size: 16px;
  line-height: 1.8em;
  color: rgba(0, 0, 0, 0.4);
  margin-bottom: 15px;
}
.text blockquote {
  position: relative;
  color: #ffffff;
  border: 0px;
  font-size: 1.5em;
  font-style: italic;
  font-weight: bolder;
  padding: 25px 45px;
  margin-top: 30px;
  margin-bottom: 50px;
  background-color: #ffb607;
  -webkit-font-smoothing: antialiased;
  font-family: 'Lato', sans-serif;
}
blockquote ul,
li {
  text-decoration: none;
  list-style-type: none;
  line-height: 2;
}

.clear-fix {
  position: relative;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
}
.row {
  margin-right: -15px;
  margin-left: -15px;
  border-bottom: 1px solid #ececec;
}
.image-column {
  flex-grow: 2;

  min-height: 1px;
  padding-right: 15px;
  padding-left: 15px;
}
.content-column {
  display: block;
  list-style-type: disc;
  margin-block-start: 1em;
  margin-block-end: 1em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
  padding-inline-start: 40px;
}

.image-column .image {
  position: relative;
  margin-bottom: 20px;
}
.image-column .image img {
  position: relative;
  width: 100%;
  display: block;
}
.content-column {
  position: relative;
  margin-bottom: 20px;
}
.content-column h3 {
  position: relative;
  color: #000000;
  font-size: 24px;
  font-weight: 600;
  line-height: 1em;
  margin-bottom: 20px;
  text-transform: uppercase;
  font-family: 'Montserrat', sans-serif;
}
.list-style-two {
  padding: unset;
}
.list-style-two li {
  position: relative;
  line-height: 1.8em;
  font-weight: 400;
  font-size: 1.1em;
  margin-bottom: 10px;
  color: rgba(0, 0, 0, 0.6);
  -webkit-font-smoothing: antialiased;
  font-family: 'Lato', sans-serif;
}
</style>
