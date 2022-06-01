<template>
  <div class="admin-login">
    <AdminLoginForm  />
  </div>
</template>

<script>
import AdminLoginForm from '../components/AdminLoginForm.vue'

import store from '../../../store/index'

export default {
  name: 'AdminLogin',
  components: {
    AdminLoginForm,
  },
  created() {
    if (
      store.state.isSiteAdminLoggedIn
    ) {
      this.$router.push({
        name: 'AdminHome',
      })
    }
  },
}
</script>

<style scoped>
.admin-login {
  position: relative;
  display: block;
  margin-left: auto;
  margin-left: auto;
}
</style>
