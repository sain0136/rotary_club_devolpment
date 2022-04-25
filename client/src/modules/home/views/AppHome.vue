<template>
    <div class="home-page">
    <HomeHeader />
    <router-view />
    <HomeFooter class="admin-footer"/>

  </div>
</template>

<script>
import HomeHeader from '../components/HomeHeader.vue'
import HomeFooter from '../components/HomeFooter.vue'

import store from '../../../store/index'

export default {
 name: 'AppAdmin',
  components: {
    HomeHeader,
    HomeFooter,
  }
}
</script>

<style scoped>
.home-page {
  background-color: #ffffff;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

.social-icon {
  color: #1A374D;
}

.table-title {
  text-align: center;
  font-weight: bolder;
  font-size: 40px;
}

.container {
  box-shadow: 0px 3px 20px 0 rgba(0,0,0,.8);
  width: 70%; 
  overflow: auto; 
  height: 500px;
}

table {
  margin: auto;
  margin-left: 15%;
}

th {
  font-size: 22px;
  position: sticky;
  padding-bottom: 5%; 
  top: 0;
}

td {
  width: 25%;
  font-size: 20px;
}

::-webkit-scrollbar {
  display: none;
}

.footer {
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
}
</style>