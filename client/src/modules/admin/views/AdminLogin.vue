<template>
  <div class="admin-login">
    <!-- <img src="../assets/admin-login-background.png" alt=""> -->
    <AdminLoginForm />
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
    if (store.state.isSiteAdminLoggedIn) {
      this.$router.push('/admin/home')
    }
  },
}
</script>

<style scoped>

.admin-login {
  background-image: url("../assets/admin-login-background.png");
  border: 1px solid black;
  height: 100%;
  padding-bottom: 400px;
}


</style>