<template>
<div class="page-wrapper">
  <div class="admin-login">
    <!-- <img src="../assets/admin-login-background.png" alt=""> -->
    <AdminLoginForm />
  </div>
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
.page-wrapper{
	position:fixed;
	top:0px;
	left:0px;
	padding:0px 15px;
	margin:0 auto;
	width: 100%;
	height:100%;
	background-color:#AEAEAE;
}

.admin-login {
  position:relative;
	display:block;
	width:100%;
}


</style>