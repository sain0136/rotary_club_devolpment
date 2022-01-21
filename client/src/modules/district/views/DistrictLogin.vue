<template>
  <div>
    <div class="district-page-head">
      <h1 class="district-page-title">
        Sign in
      </h1>
    </div> <br><br>
    <DistrictLoginForm />
  </div>
</template>

<script>
import DistrictLoginForm from '../components/DistrictLoginForm.vue'

export default {
  name: 'DistrictLogin',
  components: {
    DistrictLoginForm,
  },
}
</script>
