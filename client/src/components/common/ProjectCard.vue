<template>
  <div
    class="causes-block"
    style="border: thin solid #dedede;"
  >
    <div class="inner-box">
      <div class="image">
        <a  @click="
                () =>
                  this.$router.push({
                    name:
                      'ProjectCardDetails',
                    params: {
                      projectIdProp: parseInt(projectId),
                  
                    },
                  })
              "
          ><img
            src="../../assets/causes-1.jpg"
            alt=""
        /></a>
      </div>
      <div class="lower-box">
        <div class="content">
          <div
            class="seperator"
            style="height: 150px;"
          >
            <h3>
              <a
                 @click="
                () =>
                  this.$router.push({
                    name:
                      'ProjectCardDetails',
                    params: {
                      projectIdProp: parseInt(projectId),
                  
                    },
                  })
              "
                >{{
                  project.project_name
                }}
              </a>
            </h3>
            <div class="text">
              {{ truncatedDesc }}…
            </div>
          </div>

          <div
            class="donate-bar wow fadeIn animated"
            data-wow-delay="0ms"
            data-wow-duration="0ms"
            style="
              visibility: visible;
              animation-duration: 0ms;
              animation-delay: 0ms;
              animation-name: fadeIn;
            "
          >
            <div class="bar-inner">
              <div
                class="bar"
                :style="{
                  width:
                    percentage + '%',
                }"
              >
                <div
                  class="count-box counted"
                >
                  <span
                    class="count-text"
                    data-speed="2000"
                    data-stop="82"
                    >{{
                      percentage
                    }}</span
                  >%
                </div>
              </div>
            </div>
          </div>
          <div class="causes-info">
            <strong>Raised</strong> ${{
              Math.trunc(
                project.current_funds,
              )
            }}/
            <span class="theme_color"
              >${{
                Math.trunc(
                  project.funding_goal,
                )
              }}</span
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import project from '../../api-factory/project'
export default {
  name: 'ProjectsCard',
  data() {
    return {
      percentage: 0,
      truncatedDesc: '',
      projectId:0
    }
  },
  props: {
    project: Object,
  },
  async created() {
    this.projectId=this.project.project_id
    this.truncatedDesc = this.project.project_theme.slice(
      0,
      30,
    )
    this.percentage = Math.trunc(
      (this.project.current_funds /
        this.project.funding_goal) *
        100,
    )
  },
}
</script>

<style>
.causes-block {
  margin-bottom: 70px;
  border: thin solid #dedede;
  flex-basis: 31.333333%;
}
.causes-block .inner-box {
  position: relative;
}
.causes-block .inner-box .image {
  position: relative;
}
a {
  text-decoration: none;
  cursor: pointer;
  color: #ffb607;
}
.causes-block .inner-box .image img {
  position: relative;
  width: 100%;
  display: block;
  vertical-align: middle;
}
.causes-block .inner-box .lower-box {
  position: relative;
  padding: 25px 30px;
  overflow: hidden;
  border: 1px solid #f0f0f0;
  border-top: 0px;
  background-color: #ffffff;
  border-bottom: 0px;
}
.causes-block
  .inner-box
  .lower-box
  .content {
  overflow: hidden;
}
.causes-block .inner-box .lower-box h3 {
  position: relative;
  font-size: 22px;
  font-weight: 500;
  line-height: 1.4em;
  margin-bottom: 10px;
}
.causes-block
  .inner-box
  .lower-box
  h3
  a {
  color: #111111;

  text-decoration: none;
  cursor: pointer;
}
.causes-block
  .inner-box
  .lower-box
  .text {
  position: relative;
  font-size: 16px;
  margin-bottom: 25px;
  color: rgba(0, 0, 0, 0.4);
}
.causes-block
  .inner-box
  .lower-box
  .causes-info {
  position: relative;
  color: #b1b1b1;
  font-size: 15px;
  font-weight: 500;
  text-transform: uppercase;
  font-family: 'Montserrat', sans-serif;
}
.causes-block
  .inner-box
  .lower-box
  .causes-info
  strong {
  color: #000000;
  font-family: 'Montserrat', sans-serif;
}
.causes-block
  .inner-box
  .lower-box
  .causes-info
  span {
  font-weight: 500;
}
.theme_color {
  color: #ffb607;
}
.causes-block
  .inner-box
  .lower-box
  .donate-bar {
  position: relative;
  width: 100%;
  margin-bottom: 15px;
}
.causes-block
  .inner-box
  .lower-box
  .bar-inner {
  position: relative;
  width: 100%;
  height: 10px;
  background: #f1f1f1;
}
.causes-block
  .inner-box
  .lower-box
  .donate-bar.animated
  .bar-inner
  .bar {
  left: -1px;
}
.causes-block
  .inner-box
  .lower-box
  .bar-inner
  .bar {
  position: absolute;
  left: -100%;
  top: -1px;
  height: 11px;
  background: #ffb607;
  -webkit-transition: all 2000ms ease;
  -ms-transition: all 2000ms ease;
  -o-transition: all 2000ms ease;
  -moz-transition: all 2000ms ease;
  transition: all 2000ms ease;
}
.causes-block
  .inner-box
  .lower-box
  .bar-inner
  .count-box {
  position: absolute;
  right: 0px;
  top: -15px;
  width: 35px;
  height: 35px;
  color: #000000;
  font-size: 12px;
  font-weight: 600;
  line-height: 30px;
  text-align: center;
  border-radius: 50%;
  background: #ffffff;
  border: 2px solid #ffb607;
  font-family: 'Lato', sans-serif;
}
</style>
