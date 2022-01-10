<template>
  <div>
    <AdminHeader />
    <router-view></router-view>
  </div>
</template>

<script>
import AdminHeader from '../../components/headers/AdminHeader.vue'
import AdminFooter from '../../components/footers/AdminFooter.vue'

import store from '../../store/index'

export default {
  name: 'Admin',
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
