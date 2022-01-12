<template>
  <div>
    <AdminHeader />
    <router-view></router-view>
  </div>
</template>

<script>
import AdminHeader from '../components/AdminHeader.vue'
import store from '../../../store/index'

export default {
  name: 'AppAdmin',
  components: {
    AdminHeader,
  },
  created() {
    if (!store.state.isSiteAdminLoggedIn) {
      this.$router.push('/adminlogin')
    }
  },
}
</script>
