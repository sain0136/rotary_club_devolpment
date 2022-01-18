<template>
  <div class="admin-page">
    <AdminHeader />
    <router-view></router-view>
    <AdminFooter />

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

<style>

.admin-page {
  background-color: #B1D0E0;
  /* padding-bottom: 50%; */
}

.crud-buttons {
  background-color: #B1D0E0;
  border: none;
}

.crud-buttons:hover {
  transition: opacity 131ms;
  opacity: 0.5;
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



</style>