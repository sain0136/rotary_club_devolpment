<template>
  <div>
    <AdminLoginForm/>
  </div>
</template>

<script>

import AdminLoginForm from '../../components/forms/AdminLoginForm.vue'

import store from '../../store/index'

export default {
  name: 'AdminLogin',
  components: {
    AdminLoginForm
  },
  created() {
    if(store.state.isSiteAdminLoggedIn) {
      this.$router.push('/admin/home')
    }
  }
}

</script>