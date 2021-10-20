<template>
  <div>
    <AdminHeader />
    <router-view></router-view>
    <AdminFooter />
  </div>
</template>

<script>
import AdminHeader from "../../components/headers/AdminHeader.vue";
import AdminFooter from "../../components/footers/AdminFooter.vue";
import { library } from "@fortawesome/fontawesome-svg-core";
export default {
  name: "Admin",
  components: {
    AdminHeader,
    AdminFooter,
  },
};
</script>
