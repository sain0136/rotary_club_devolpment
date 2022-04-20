<template>
  <div class="admin-page">
    <AdminHeader />
    <router-view />
  <!--   v-slot="{ Component }"  <transition name="fade">
        <component :is="Component"/>
      </transition> -->
    
    <AdminFooter class="admin-footer"/>

  </div>
</template>

<script>

import AdminHeader from '../components/AdminHeader.vue'
import AdminFooter from '../components/AdminFooter.vue'

import store from '../../../store/index'

export default {
  name: 'AppAdmin',
  components: {
    AdminHeader,
    AdminFooter,
  },
  created() {
    if (!store.state.isSiteAdminLoggedIn) {
      this.$router.push('/adminlogin')
    }
  },
}
</script>

<style scoped>

/* .fade-enter-from,
.fade-leave-to {
  opacity: 0;
} */

/* .fade-enter-from {
  transform: translateX(100px);
} */

/* .fade-enter-active,
.fade-leave-active {
  transition: trans;
  transition: opacity 0.5s ease-out;
} */

.admin-page {
    background-color: #ffffff;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  /* padding-bottom: 50%; */
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