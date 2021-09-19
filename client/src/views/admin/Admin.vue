<template>
  <div>
    <AdminHeader/>
    <!-- <router-link to=></router-link> -->
    <router-view></router-view>
  </div>
</template>

<script>
import AdminHeader from '../../components/headers/AdminHeader.vue'

export default {
  name: 'Admin',
  components: {
    AdminHeader,
  }
}

</script>